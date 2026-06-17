import { useState } from "react";
import { Link } from "react-router-dom";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import { Badge } from "@/components/ui/badge";
import posts, { type InsightPost } from "@/content/insights";

const Insights = () => {
  const allPosts = posts;
  const allSeries = Array.from(new Set(allPosts.map((p) => p.series)));
  const [activeSeries, setActiveSeries] = useState<string | null>(null);

  const filtered = activeSeries
    ? allPosts.filter((p) => p.series === activeSeries)
    : allPosts;

  return (
    <div className="min-h-screen flex flex-col">
      <SiteHeader />
      <main className="flex-1">
        {/* Hero */}
        <section className="py-20 md:py-28 lg:py-32">
          <div className="container max-w-3xl">
            <div className="animate-fade-in-up">
              <p className="text-sm font-semibold text-accent uppercase tracking-wider mb-4">
                THOUGHTS
              </p>
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl font-600 leading-tight text-foreground mb-6 text-balance">
                Insights
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 max-w-2xl">
                Thinking on digital transformation, RevOps, and HubSpot.
              </p>
            </div>
          </div>
        </section>

        {/* Series filter */}
        <section className="pb-8">
          <div className="container max-w-3xl">
            <div className="flex flex-wrap gap-3">
              <button
                onClick={() => setActiveSeries(null)}
                className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                  activeSeries === null
                    ? "bg-accent text-accent-foreground border-accent"
                    : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-foreground"
                }`}
              >
                All
              </button>
              {allSeries.map((series) => (
                <button
                  key={series}
                  onClick={() =>
                    setActiveSeries(series === activeSeries ? null : series)
                  }
                  className={`text-sm font-medium px-4 py-2 rounded-full border transition-colors ${
                    activeSeries === series
                      ? "bg-accent text-accent-foreground border-accent"
                      : "bg-transparent text-muted-foreground border-border hover:border-accent hover:text-foreground"
                  }`}
                >
                  {series}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Post cards */}
        <section className="pb-24">
          <div className="container max-w-3xl">
            {filtered.length === 0 ? (
              <p className="text-muted-foreground text-base">
                No posts in this series yet. Check back soon.
              </p>
            ) : (
              <div className="space-y-10">
                {filtered.map((post: InsightPost) => (
                  <Link
                    key={post.slug}
                    to={`/insights/${post.slug}`}
                    className="group block border-b border-border pb-10 last:border-b-0 last:pb-0"
                  >
                    <div className="flex items-center gap-3 mb-2 text-xs text-muted-foreground">
                      <span className="text-accent font-semibold uppercase tracking-wider text-xs">
                        {post.series}
                      </span>
                      <span aria-hidden="true">·</span>
                      <time dateTime={post.date}>
                        {new Date(post.date).toLocaleDateString("en-GB", {
                          day: "numeric",
                          month: "long",
                          year: "numeric",
                        })}
                      </time>
                    </div>
                    <h2 className="font-serif text-2xl md:text-3xl font-600 text-foreground mb-2 group-hover:text-accent transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-muted-foreground text-base leading-relaxed">
                      {post.excerpt}
                    </p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
};

export default Insights;
