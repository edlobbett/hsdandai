const FivePillarsDiagram = () => {
  return (
    <svg
      viewBox="0 0 680 420"
      className="w-full max-w-2xl mx-auto"
      role="img"
      aria-labelledby="five-pillars-title five-pillars-desc"
    >
      <title id="five-pillars-title">The five pillars of digital transformation</title>
      <desc id="five-pillars-desc">
        Four pillars — Strategy, Change Management, Systems and Process Design, and
        Technology — sit above a connecting Data band that runs beneath all four. A
        bidirectional feedback loop connects Strategy and Data directly, showing that
        strategy informs what data to capture while data shows whether the strategy
        is working.
      </desc>
      <defs>
        <marker
          id="five-pillars-arrow"
          viewBox="0 0 10 10"
          refX="8"
          refY="5"
          markerWidth="6"
          markerHeight="6"
          orient="auto-start-reverse"
        >
          <path
            d="M2 1L8 5L2 9"
            fill="none"
            stroke="context-stroke"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </marker>
      </defs>

      {/* Four pillar boxes — coral/warm accent matching RevOps Execution cluster */}
      <g className="fp-coral">
        <rect x="40" y="50" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="112" y="74" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Strategy</text>
        <text x="112" y="94" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">Outcome first</text>
      </g>

      <g className="fp-coral">
        <rect x="195" y="50" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="267" y="74" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Change mgmt</text>
        <text x="267" y="94" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">Right people, right time</text>
      </g>

      <g className="fp-coral">
        <rect x="350" y="50" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="422" y="70" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Systems and</text>
        <text x="422" y="86" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">process design</text>
      </g>

      <g className="fp-coral">
        <rect x="505" y="50" width="145" height="64" rx="8" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5" />
        <text x="577" y="74" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#993C1D">Technology</text>
        <text x="577" y="94" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#993C1D">The enabler</text>
      </g>

      {/* Connectors — thin neutral vertical lines matching RevOps divider style */}
      <line x1="112" y1="114" x2="112" y2="200" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="267" y1="114" x2="267" y2="200" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="422" y1="114" x2="422" y2="200" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />
      <line x1="577" y1="114" x2="577" y2="200" stroke="#5F5E5A" strokeWidth="1" opacity="0.4" />

      {/* Data band — purple matching RevOps "Data & signals" cluster */}
      <g className="fp-purple">
        <rect x="40" y="200" width="610" height="80" rx="12" fill="#7F77DD" fillOpacity="0.15" stroke="#7F77DD" strokeWidth="1.5" />
        <text x="345" y="230" textAnchor="middle" dominantBaseline="central" className="fp-th" fill="#534AB7">Data</text>
        <text x="345" y="252" textAnchor="middle" dominantBaseline="central" className="fp-ts" fill="#534AB7">The thread that runs through every pillar</text>
      </g>

      {/* Feedback arrows — slightly more prominent than connectors, still neutral */}
      <path d="M75 200 C 75 165, 95 150, 105 122" fill="none" stroke="#5F5E5A" strokeWidth="1.5" opacity="0.7" markerEnd="url(#five-pillars-arrow)" />
      <path d="M150 122 C 145 155, 130 178, 110 198" fill="none" stroke="#5F5E5A" strokeWidth="1.5" opacity="0.7" markerEnd="url(#five-pillars-arrow)" />

      {/* Annotation labels — "Sets what to track" and "Shows if it's working" */}
      <text x="20" y="160" textAnchor="middle" fontSize="11" fill="#6B7280">Sets what</text>
      <text x="20" y="174" textAnchor="middle" fontSize="11" fill="#6B7280">to track</text>
      <line x1="40" y1="167" x2="68" y2="155" stroke="#6B7280" strokeWidth="1" strokeDasharray="3,2" />

      <text x="195" y="160" fontSize="11" fill="#6B7280">Shows if it's</text>
      <text x="195" y="174" fontSize="11" fill="#6B7280">working</text>
      <line x1="190" y1="167" x2="155" y2="150" stroke="#6B7280" strokeWidth="1" strokeDasharray="3,2" />

      {/* Bottom label */}
      <text x="345" y="340" textAnchor="middle" fontSize="14" fontWeight="500" fill="#6B7280">Strategy and data feed each other directly</text>
      <text x="345" y="358" textAnchor="middle" fontSize="11" fill="#9CA3AF">Strategy decides what data matters. Data shows whether strategy is working.</text>
    </svg>
  );
};

export default FivePillarsDiagram;
