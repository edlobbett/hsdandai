import { chromium } from "playwright";
import path from "path";
import { fileURLToPath } from "url";
import fs from "fs";
import { createServer } from "http";
import { spawn } from "child_process";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
// Use process.cwd() for project root so dist/ resolves to the project root, not scripts/
const projectRoot = process.cwd();
const distDir = path.join(projectRoot, "dist");

const routes = [
  "/",
  "/hubspot-sprints",
  "/revops",
  "/digital-ai",
  "/property",
  "/insights",
];

function getFreePort() {
  return new Promise((resolve, reject) => {
    const server = createServer();
    server.listen(0, "127.0.0.1", () => {
      const port = server.address().port;
      server.close(() => resolve(port));
    });
    server.on("error", reject);
  });
}

function startPreviewServer(port) {
  return new Promise((resolve, reject) => {
    const server = spawn("npx", ["vite", "preview", "--port", String(port), "--strictPort", "--host", "127.0.0.1"], {
      cwd: projectRoot,
      stdio: ["ignore", "pipe", "pipe"],
      shell: true,
    });

    const timeout = setTimeout(() => {
      server.kill("SIGTERM");
      reject(new Error(`Server didn't start in 30s on port ${port}`));
    }, 30000);

    let started = false;
    const onData = (data) => {
      const text = data.toString();
      if (!started && (text.includes("Local:") || text.includes("ready"))) {
        started = true;
        clearTimeout(timeout);
        resolve(server);
      }
    };

    server.stdout.on("data", onData);
    server.stderr.on("data", onData);
    server.on("error", (err) => {
      clearTimeout(timeout);
      reject(err);
    });
  });
}

async function prerender() {
  const port = await getFreePort();
  console.log(`Selected free port: ${port}`);

  console.log("Starting Vite preview server...");
  const server = await startPreviewServer(port);
  const baseUrl = `http://127.0.0.1:${port}`;
  console.log(`Server ready at ${baseUrl}`);

  console.log("Launching headless Chromium...");
  const browser = await chromium.launch({ headless: true });

  try {
    for (const route of routes) {
      const url = `${baseUrl}${route}`;
      console.log(`\nPrerendering: ${url}`);

      let page;
      try {
        page = await browser.newPage({ viewport: { width: 1280, height: 800 } });

        // Collect console messages for debugging
        const consoleMsgs = [];
        page.on("console", (msg) => {
          if (msg.type() === "error") consoleMsgs.push(msg.text());
        });
        page.on("pageerror", (err) => consoleMsgs.push(`[PAGE] ${err.message}`));
        page.on("crash", () => consoleMsgs.push("[CRASH] Page crashed!"));

        await page.goto(url, { waitUntil: "domcontentloaded", timeout: 30000 });

        // Try waiting for React to render — use networkidle for a more stable wait
        await page.waitForLoadState("networkidle", { timeout: 20000 }).catch(() => {
          // network didn't go idle, that's okay — SPA might keep polling
        });

        // Wait for meaningful content inside #root
        try {
          await page.waitForFunction(() => {
            const root = document.getElementById("root");
            if (!root) return false;
            // Check for meaningful content
            const text = root.innerText || "";
            return text.trim().length > 20 || root.children.length > 2;
          }, { timeout: 20000 });
          console.log("  ✓ Content rendered");
        } catch {
          console.warn("  ⚠ Content render check timed out — capturing anyway");
        }

        // Extra settle time for assets
        try {
          await page.waitForTimeout(2000);
        } catch {
          console.warn("  ⚠ Page closed during settle — continuing");
        }

        // Log any console errors
        if (consoleMsgs.length > 0) {
          console.warn(`  ⚠ Errors (${consoleMsgs.length}):`);
          for (const msg of consoleMsgs.slice(0, 5)) {
            console.warn(`    ${msg.slice(0, 200)}`);
          }
        }

        const html = await page.content();

        // Determine output path
        const routePath = route === "/" ? "/index.html" : `${route}/index.html`;
        const outDir = path.join(distDir, path.dirname(routePath));
        fs.mkdirSync(outDir, { recursive: true });
        fs.writeFileSync(path.join(distDir, routePath), html);

        // Quick verification — check root has content
        const hasContentRoot = html.includes("<div id=\"root\">") && html.includes("</div>") && !html.includes('<div id="root"></div>');
        const sizeKB = (html.length / 1024).toFixed(1);
        console.log(`  ✓ Saved dist${routePath} (${sizeKB} KB, rendered=${hasContentRoot ? "yes" : "no"})`);
      } catch (err) {
        console.error(`  ✗ Failed to prerender ${route}: ${err.message}`);
        // If page crashed but we already captured HTML, save what we have
        if (page) {
          try {
            const html = await page.content();
            const routePath = route === "/" ? "/index.html" : `${route}/index.html`;
            const outDir = path.join(distDir, path.dirname(routePath));
            fs.mkdirSync(outDir, { recursive: true });
            fs.writeFileSync(path.join(distDir, routePath), html);
            console.log(`  → Saved partial output for ${route} (${(html.length / 1024).toFixed(1)} KB)`);
          } catch {
            console.warn(`  → Could not salvage output for ${route}`);
          }
        }
      } finally {
        if (page) await page.close().catch(() => {});
      }
    }

    console.log("\n✓ Prerendering complete.");
  } finally {
    await browser.close().catch(() => {});
    server.kill("SIGTERM");
    console.log("Browser closed, server stopped.");
  }
}

prerender().catch((err) => {
  console.error("\n✗ Prerender failed:", err.message);
  process.exit(1);
});
