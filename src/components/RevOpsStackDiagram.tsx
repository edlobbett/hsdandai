import { useState } from "react";

type NodeType = {
  id: string;
  label: string;
  subtitle: string;
  cluster: string;
  essential: boolean;
};

type ClusterType = {
  id: string;
  label: string;
  color: string;
  lightColor: string;
  fill: string;
  lightFill: string;
  x: number;
  y: number;
};

type ArrowType = {
  from: string;
  to: string;
  color: string;
  dashed?: boolean;
  label?: string;
};

const clusters: ClusterType[] = [
  {
    id: "strategy",
    label: "Strategy",
    color: "#14A3A3",
    lightColor: "#14A3A320",
    fill: "#14A3A3",
    lightFill: "#E6F5F5",
    x: 450,
    y: 80,
  },
  {
    id: "data-signals",
    label: "Data & signals",
    color: "#7C3AED",
    lightColor: "#7C3AED20",
    fill: "#7C3AED",
    lightFill: "#F3EEFF",
    x: 120,
    y: 240,
  },
  {
    id: "execution",
    label: "Execution",
    color: "#E8604C",
    lightColor: "#E8604C20",
    fill: "#E8604C",
    lightFill: "#FDF0EE",
    x: 780,
    y: 240,
  },
  {
    id: "infrastructure",
    label: "Infrastructure",
    color: "#6B7280",
    lightColor: "#6B728020",
    fill: "#6B7280",
    lightFill: "#F3F4F6",
    x: 450,
    y: 420,
  },
];

const nodes: NodeType[] = [
  // Strategy
  { id: "icp", label: "ICP definition", subtitle: "Segmentation, TAM", cluster: "strategy", essential: true },
  { id: "reporting", label: "Reporting", subtitle: "Pipeline, velocity", cluster: "strategy", essential: true },
  // Data & signals
  { id: "apollo", label: "Apollo", subtitle: "Contacts, companies", cluster: "data-signals", essential: true },
  { id: "clay", label: "Clay", subtitle: "Transform, enrich", cluster: "data-signals", essential: true },
  { id: "scrapers", label: "AI scrapers", subtitle: "Jobs, intent, signals", cluster: "data-signals", essential: true },
  { id: "intent", label: "Intent data", subtitle: "Buying signals", cluster: "data-signals", essential: true },
  { id: "cdp", label: "CDP / Braze / Segment", subtitle: "Optional", cluster: "data-signals", essential: false },
  // Execution
  { id: "crm", label: "CRM", subtitle: "Pipeline, lifecycle", cluster: "execution", essential: true },
  { id: "outreach", label: "Outreach", subtitle: "Sequences, email", cluster: "execution", essential: true },
  { id: "linkedin", label: "LinkedIn", subtitle: "Social outreach", cluster: "execution", essential: true },
  { id: "ad-channels", label: "Ad channels", subtitle: "Optional", cluster: "execution", essential: false },
  { id: "forecasting", label: "Forecasting", subtitle: "Gong, Clari", cluster: "execution", essential: false },
  // Infrastructure
  { id: "ipaas", label: "iPaaS", subtitle: "Make, Zapier, APIs", cluster: "infrastructure", essential: true },
  { id: "mcp", label: "MCP / AI agents", subtitle: "Agentic layer", cluster: "infrastructure", essential: false },
];

// Arrows between clusters - defined as source cluster -> target cluster
// We'll draw these as SVG paths between cluster containers
const clusterArrows: ArrowType[] = [
  { from: "data-signals", to: "strategy", color: "#7C3AED", label: "Informs ICP" },
  { from: "strategy", to: "data-signals", color: "#14A3A3", label: "Targets signal collection" },
  { from: "data-signals", to: "execution", color: "#7C3AED", label: "Feeds CRM and outreach" },
  { from: "execution", to: "strategy", color: "#E8604C", label: "Pipeline feeds reporting" },
  { from: "infrastructure", to: "strategy", color: "#6B7280", dashed: true },
  { from: "infrastructure", to: "data-signals", color: "#6B7280", dashed: true },
  { from: "infrastructure", to: "execution", color: "#6B7280", dashed: true },
];

// Internal cluster arrows (within a cluster)
const internalArrows: ArrowType[] = [
  { from: "reporting", to: "icp", color: "#14A3A3" },
];

// Ad channels <-> CRM bidirectional
const biDirectionalArrows: ArrowType[] = [
  { from: "ad-channels", to: "crm", color: "#E8604C" },
  { from: "crm", to: "ad-channels", color: "#E8604C" },
];

function getClusterCenter(id: string) {
  const c = clusters.find((c) => c.id === id)!;
  return { x: c.x, y: c.y };
}

// Node positions within each cluster (relative to cluster center)
// Layout: Strategy top-centre, Data left, Execution right, Infrastructure bottom-centre
function getNodePosition(node: NodeType): { x: number; y: number } {
  const cluster = clusters.find((c) => c.id === node.cluster)!;
  const baseX = cluster.x;
  const baseY = cluster.y;

  // Within each cluster, lay out nodes
  const clusterNodes = nodes.filter((n) => n.cluster === node.cluster);
  const nodeIndex = clusterNodes.findIndex((n) => n.id === node.id);
  const essentialNodes = clusterNodes.filter((n) => n.essential);
  const optionalNodes = clusterNodes.filter((n) => !n.essential);

  if (node.cluster === "strategy") {
    // 2 nodes side by side
    const offsets = [ { x: -100, y: 0 }, { x: 100, y: 0 } ];
    return { x: baseX + offsets[nodeIndex].x, y: baseY + offsets[nodeIndex].y };
  }

  if (node.cluster === "data-signals") {
    // 5 nodes in two rows
    const isEssential = node.essential;
    if (isEssential) {
      const idx = essentialNodes.findIndex((n) => n.id === node.id);
      const row = Math.floor(idx / 2);
      const col = idx % 2;
      return { x: baseX - 60 + col * 120, y: baseY - 45 + row * 50 };
    } else {
      return { x: baseX - 60, y: baseY + 75 };
    }
  }

  if (node.cluster === "execution") {
    // 5 nodes in two rows
    const isEssential = node.essential;
    if (isEssential) {
      const idx = essentialNodes.findIndex((n) => n.id === node.id);
      return { x: baseX - 60 + idx * 120, y: baseY - 30 };
    } else {
      // Find which optional node this is
      const idx = optionalNodes.findIndex((n) => n.id === node.id);
      return { x: baseX - 60 + idx * 200, y: baseY + 70 };
    }
  }

  if (node.cluster === "infrastructure") {
    if (node.essential) {
      return { x: baseX - 80, y: baseY };
    } else {
      return { x: baseX + 80, y: baseY };
    }
  }

  return { x: baseX, y: baseY };
}

export default function RevOpsStackDiagram() {
  const [selectedNode, setSelectedNode] = useState<string | null>(null);

  const clusterWidth = 320;
  const clusterHeight = 180;
  const svgWidth = 960;
  const svgHeight = 540;

  const getClusterRect = (c: ClusterType) => ({
    x: c.x - clusterWidth / 2,
    y: c.y - 80,
    w: clusterWidth,
    h: clusterHeight,
  });

  // Arrow routing helper
  const getArrowPath = (fromId: string, toId: string, needSeparation?: boolean): string => {
    const fromNode = nodes.find((n) => n.id === fromId);
    const toNode = nodes.find((n) => n.id === toId);

    if (fromNode && toNode) {
      // Internal arrow between nodes within same cluster
      const fromPos = getNodePosition(fromNode);
      const toPos = getNodePosition(toNode);
      const dx = toPos.x - fromPos.x;
      const dy = toPos.y - fromPos.y;
      const angle = Math.atan2(dy, dx);
      const offsetX = 45 * Math.cos(angle);
      const offsetY = 45 * Math.sin(angle);
      if (needSeparation) {
        // For bidirectional, separate the two arrows vertically
        return `M${fromPos.x + offsetX},${fromPos.y + offsetY - 8} L${toPos.x - offsetX},${toPos.y - offsetY - 8}`;
      }
      return `M${fromPos.x + offsetX},${fromPos.y + offsetY} L${toPos.x - offsetX},${toPos.y - offsetY}`;
    }

    // Cluster-to-cluster arrow
    const fromCluster = clusters.find((c) => c.id === fromId)!;
    const toCluster = clusters.find((c) => c.id === toId)!;

    const fromRect = getClusterRect(fromCluster);
    const toRect = getClusterRect(toCluster);

    // Calculate intersection point from center of fromCluster rect to center of toCluster rect
    const fromCx = fromRect.x + fromRect.w / 2;
    const fromCy = fromRect.y + fromRect.h / 2;
    const toCx = toRect.x + toRect.w / 2;
    const toCy = toRect.y + toRect.h / 2;

    const dx = toCx - fromCx;
    const dy = toCy - fromCy;

    // Find the edge point of the fromCluster rect
    const angle = Math.atan2(dy, dx);
    let startX: number, startY: number;

    // Horizontal distance to left/right edge
    const hDist = fromRect.w / 2 / Math.abs(Math.cos(angle) || 0.01);
    const vDist = fromRect.h / 2 / Math.abs(Math.sin(angle) || 0.01);

    if (hDist < vDist) {
      startX = fromCx + Math.sign(dx) * fromRect.w / 2;
      startY = fromCy + Math.sign(dx) * (fromRect.w / 2) * Math.tan(angle);
    } else {
      startY = fromCy + Math.sign(dy) * fromRect.h / 2;
      startX = fromCx + Math.sign(dy) * (fromRect.h / 2) / Math.tan(angle);
    }

    // Find end point at toCluster rect edge
    let endX: number, endY: number;
    const hDistTo = toRect.w / 2 / Math.abs(Math.cos(angle + Math.PI) || 0.01);
    const vDistTo = toRect.h / 2 / Math.abs(Math.sin(angle + Math.PI) || 0.01);

    if (hDistTo < vDistTo) {
      endX = toCx + Math.sign(-dx) * toRect.w / 2;
      endY = toCy + Math.sign(-dx) * (toRect.w / 2) * Math.tan(angle + Math.PI);
    } else {
      endY = toCy + Math.sign(-dy) * toRect.h / 2;
      endX = toCx + Math.sign(-dy) * (toRect.h / 2) / Math.tan(angle + Math.PI);
    }

    return `M${startX},${startY} L${endX},${endY}`;
  };

  const getRoutePath = (fromId: string, toId: string) => {
    // Route infrastructure arrows around the edges
    if (fromId === "infrastructure") {
      if (toId === "data-signals") {
        return `M${clusters[3].x - 160},${clusters[3].y} Q${clusters[3].x - 220},${clusters[3].y - 60} ${clusters[1].x - 160},${clusters[1].y + 90}`;
      }
      if (toId === "execution") {
        return `M${clusters[3].x + 160},${clusters[3].y} Q${clusters[3].x + 220},${clusters[3].y - 60} ${clusters[2].x + 160},${clusters[2].y + 90}`;
      }
      if (toId === "strategy") {
        return `M${clusters[3].x},${clusters[3].y - 80} L${clusters[0].x},${clusters[0].y + 90}`;
      }
    }
    return getArrowPath(fromId, toId);
  };

  return (
    <div className="w-full overflow-x-auto py-8">
      <svg
        viewBox={`0 0 ${svgWidth} ${svgHeight}`}
        className="w-full max-w-[960px] mx-auto"
        style={{ fontFamily: "'DM Sans', system-ui, sans-serif" }}
      >
        {/* Legend */}
        <g transform="translate(20, 20)">
          {/* Essential indicator */}
          <rect x="0" y="0" width="12" height="12" rx="2" fill="#333" />
          <text x="18" y="10" fontSize="11" fill="#666">Essential</text>

          {/* Optional indicator */}
          <rect x="80" y="0" width="12" height="12" rx="2" fill="none" stroke="#999" strokeWidth="1.5" strokeDasharray="3,2" />
          <text x="98" y="10" fontSize="11" fill="#666">Optional</text>

          {/* Cluster indicators */}
          {clusters.map((c, i) => (
            <g key={c.id} transform={`translate(${170 + i * 110}, 0)`}>
              <circle cx="6" cy="6" r="5" fill={c.color} />
              <text x="16" y="10" fontSize="11" fill="#666">{c.label}</text>
            </g>
          ))}
        </g>

        {/* Cluster container rectangles */}
        {clusters.map((c) => {
          const r = getClusterRect(c);
          return (
            <g key={c.id}>
              <rect
                x={r.x}
                y={r.y}
                width={r.w}
                height={r.h}
                rx={12}
                fill={c.lightFill}
                stroke={c.color}
                strokeWidth={1}
                strokeDasharray="6,4"
                opacity={0.7}
              />
              <text
                x={r.x + r.w / 2}
                y={r.y - 10}
                textAnchor="middle"
                fontSize={11}
                fontWeight={600}
                fill={c.color}
                letterSpacing={1}
              >
                {c.label.toUpperCase()}
              </text>
            </g>
          );
        })}

        {/* Cluster-to-cluster arrows */}
        {clusterArrows.map((a) => {
          const path = getRoutePath(a.from, a.to);
          const isInfra = a.from === "infrastructure";
          return (
            <g key={`${a.from}-${a.to}`}>
              <path
                d={path}
                fill="none"
                stroke={a.color}
                strokeWidth={isInfra ? 1.5 : 2}
                strokeDasharray={a.dashed || isInfra ? "6,4" : "none"}
                opacity={0.6}
                markerEnd={
                  a.dashed || isInfra
                    ? `url(#arrowhead-${a.color.replace("#", "")}-dashed)`
                    : `url(#arrowhead-${a.color.replace("#", "")})`
                }
              />
              {a.label && (
                <text
                  x={
                    (getClusterCenter(a.from).x + getClusterCenter(a.to).x) / 2
                  }
                  y={
                    (getClusterCenter(a.from).y + getClusterCenter(a.to).y) / 2 -
                    10
                  }
                  textAnchor="middle"
                  fontSize={10}
                  fill="#888"
                >
                  {a.label}
                </text>
              )}
            </g>
          );
        })}

        {/* Internal cluster arrows */}
        {internalArrows.map((a) => (
          <g key={`int-${a.from}-${a.to}`}>
            <path
              d={getArrowPath(a.from, a.to)}
              fill="none"
              stroke={a.color}
              strokeWidth={1.5}
              markerEnd={`url(#arrowhead-${a.color.replace("#", "")})`}
              opacity={0.5}
            />
          </g>
        ))}

        {/* Ad channels <-> CRM bidirectional */}
        {biDirectionalArrows.map((a, i) => {
          const path = getArrowPath(a.from, a.to, i === 0);
          return (
            <g key={`bi-${a.from}-${a.to}-${i}`}>
              <path
                d={path}
                fill="none"
                stroke={a.color}
                strokeWidth={1.5}
                strokeDasharray="4,3"
                opacity={0.5}
                markerEnd={`url(#arrowhead-${a.color.replace("#", "")})`}
              />
            </g>
          );
        })}

        {/* Nodes */}
        {nodes.map((node) => {
          const pos = getNodePosition(node);
          const cluster = clusters.find((c) => c.id === node.cluster)!;
          const isSelected = selectedNode === node.id;

          return (
            <g
              key={node.id}
              onClick={() => setSelectedNode(isSelected ? null : node.id)}
              style={{ cursor: "pointer" }}
            >
              {/* Optional dashed border ring */}
              {!node.essential && (
                <rect
                  x={pos.x - 55}
                  y={pos.y - 20}
                  width={110}
                  height={40}
                  rx={6}
                  fill={cluster.lightColor}
                  stroke={cluster.color}
                  strokeWidth={1.5}
                  strokeDasharray="5,3"
                  opacity={isSelected ? 0.9 : 0.7}
                />
              )}
              {/* Essential solid fill */}
              {node.essential && (
                <rect
                  x={pos.x - 55}
                  y={pos.y - 20}
                  width={110}
                  height={40}
                  rx={6}
                  fill={isSelected ? cluster.color : cluster.color + "CC"}
                  stroke={cluster.color}
                  strokeWidth={1.5}
                  opacity={isSelected ? 1 : 0.85}
                />
              )}
              {/* Label */}
              <text
                x={pos.x}
                y={pos.y - 2}
                textAnchor="middle"
                fontSize={12}
                fontWeight={600}
                fill={node.essential ? "#fff" : cluster.color}
              >
                {node.label}
              </text>
              {/* Subtitle */}
              <text
                x={pos.x}
                y={pos.y + 13}
                textAnchor="middle"
                fontSize={9}
                fill={node.essential ? "rgba(255,255,255,0.7)" : "#999"}
              >
                {node.subtitle}
              </text>
            </g>
          );
        })}

        {/* Arrowhead markers */}
        <defs>
          {clusters.map((c) => (
            <g key={c.id}>
              <marker
                id={`arrowhead-${c.color.replace("#", "")}`}
                viewBox="0 0 10 7"
                refX={10}
                refY={3.5}
                markerWidth={8}
                markerHeight={6}
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill={c.color} />
              </marker>
              <marker
                id={`arrowhead-${c.color.replace("#", "")}-dashed`}
                viewBox="0 0 10 7"
                refX={10}
                refY={3.5}
                markerWidth={8}
                markerHeight={6}
                orient="auto"
              >
                <polygon points="0 0, 10 3.5, 0 7" fill={c.color} opacity={0.6} />
              </marker>
            </g>
          ))}
          <marker
            id="arrowhead-6B7280"
            viewBox="0 0 10 7"
            refX={10}
            refY={3.5}
            markerWidth={8}
            markerHeight={6}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" />
          </marker>
          <marker
            id="arrowhead-6B7280-dashed"
            viewBox="0 0 10 7"
            refX={10}
            refY={3.5}
            markerWidth={8}
            markerHeight={6}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#6B7280" opacity={0.6} />
          </marker>
          <marker
            id="arrowhead-E8604C"
            viewBox="0 0 10 7"
            refX={10}
            refY={3.5}
            markerWidth={8}
            markerHeight={6}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#E8604C" />
          </marker>
          <marker
            id="arrowhead-14A3A3"
            viewBox="0 0 10 7"
            refX={10}
            refY={3.5}
            markerWidth={8}
            markerHeight={6}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#14A3A3" />
          </marker>
          <marker
            id="arrowhead-7C3AED"
            viewBox="0 0 10 7"
            refX={10}
            refY={3.5}
            markerWidth={8}
            markerHeight={6}
            orient="auto"
          >
            <polygon points="0 0, 10 3.5, 0 7" fill="#7C3AED" />
          </marker>
        </defs>
      </svg>
      {selectedNode && (
        <p className="text-center text-sm text-muted-foreground mt-2">
          Selected: {nodes.find((n) => n.id === selectedNode)?.label}
        </p>
      )}
    </div>
  );
}
