const FivePillarsDiagram = () => {
  return (
    <svg
      viewBox="0 0 680 440"
      className="w-full max-w-2xl mx-auto"
      role="img"
      aria-labelledby="five-pillars-title five-pillars-desc"
    >
      <title id="five-pillars-title">The five pillars of digital transformation</title>
      <desc id="five-pillars-desc">
        Four pillars — Strategy, Change Management, Systems and Process Design, and
        Technology — sit above a connecting Data band that runs beneath all four. A
        loop connects Strategy and Data directly, showing the two inform each other.
      </desc>

      {/* Four pillar boxes — coral/warm accent matching RevOps Execution cluster */}
      <g className="fp-coral">
        <rect x="40" y="90" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="112" y="114" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Strategy</text>
        <text x="112" y="134" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">Outcome first</text>
      </g>

      <g className="fp-coral">
        <rect x="195" y="90" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="267" y="114" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Change mgmt</text>
        <text x="267" y="134" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">Right people, time</text>
      </g>

      <g className="fp-coral">
        <rect x="350" y="90" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="422" y="110" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Systems and</text>
        <text x="422" y="126" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">process design</text>
      </g>

      <g className="fp-coral">
        <rect x="505" y="90" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="577" y="114" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Technology</text>
        <text x="577" y="134" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">The enabler</text>
      </g>

      {/* Connectors — thin neutral vertical lines matching RevOps divider style */}
      <line x1="112" y1="154" x2="112" y2="240" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="267" y1="154" x2="267" y2="240" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="422" y1="154" x2="422" y2="240" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="577" y1="154" x2="577" y2="240" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />

      {/* Data band — purple matching RevOps "Data & signals" cluster */}
      <g className="fp-purple">
        <rect x="40" y="240" width="610" height="80" rx="12" fill="#7F77DD" fillOpacity="0.15" stroke="#7F77DD" strokeWidth="1.5" />
        <text x="345" y="270" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#534AB7">Data</text>
        <text x="345" y="292" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#534AB7">The thread that runs through every pillar</text>
      </g>

      {/* Feedback curves — no arrowheads, mutual relationship */}
      <path d="M55 240 C 50 200, 55 165, 70 156" fill="none" stroke="#5F5E5A" strokeWidth="1.5" opacity="0.7" />
      <path d="M165 156 C 175 175, 175 215, 170 238" fill="none" stroke="#5F5E5A" strokeWidth="1.5" opacity="0.7" />

      {/* Annotation labels — "Strategy and data inform each other" */}
      <text x="112" y="40" textAnchor="middle" fontSize="11" fill="#6B7280">Strategy and data inform each other</text>
      <line x1="112" y1="48" x2="112" y2="86" stroke="#6B7280" strokeWidth="1" strokeDasharray="3,2" />

      {/* Bottom label */}
      <text x="345" y="370" textAnchor="middle" fontSize="14" fontWeight="500" fill="#6B7280">Strategy and data feed each other directly</text>
      <text x="345" y="388" textAnchor="middle" fontSize="11" fill="#9CA3AF">Strategy sets what to track. Data shows whether the strategy is working.</text>
    </svg>
  );
};

export default FivePillarsDiagram;
