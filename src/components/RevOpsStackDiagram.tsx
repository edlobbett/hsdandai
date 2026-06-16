export default function RevOpsStackDiagram() {
  return (
    <div className="w-full overflow-x-auto py-4">
      <svg width="100%" viewBox="0 0 680 590" role="img">
        <title>RevOps stack diagram</title>
        <desc>Four clusters: Strategy at top, Data and signals left, Execution right, Infrastructure bottom.</desc>
        <defs>
          <marker id="arrow" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
            <path d="M2 1L8 5L2 9" fill="none" stroke="context-stroke" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </marker>
        </defs>

        {/* Strategy cluster */}
        <rect x="200" y="20" width="280" height="110" rx="12" fill="#1D9E75" fillOpacity="0.15" stroke="#1D9E75" strokeWidth="1.5"/>
        <text x="340" y="38" textAnchor="middle" fontSize="11" fontWeight="600" fill="#0F6E56" letterSpacing="1">STRATEGY</text>
        <rect x="214" y="48" width="120" height="48" rx="6" fill="#1D9E75" stroke="#1D9E75" strokeWidth="1.5"/>
        <text x="274" y="68" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">ICP definition</text>
        <text x="274" y="84" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Segmentation, TAM</text>
        <rect x="346" y="48" width="120" height="48" rx="6" fill="#1D9E75" stroke="#1D9E75" strokeWidth="1.5"/>
        <text x="406" y="68" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">Reporting</text>
        <text x="406" y="84" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Pipeline, velocity</text>
        <line x1="334" y1="72" x2="345" y2="72" stroke="#0F6E56" strokeWidth="0.5" markerEnd="url(#arrow)"/>

        {/* Data & Signals cluster */}
        <rect x="14" y="165" width="250" height="225" rx="12" fill="#7F77DD" fillOpacity="0.15" stroke="#7F77DD" strokeWidth="1.5"/>
        <text x="139" y="183" textAnchor="middle" fontSize="11" fontWeight="600" fill="#534AB7" letterSpacing="1">DATA &amp; SIGNALS</text>
        <rect x="26" y="193" width="108" height="46" rx="6" fill="#7F77DD" stroke="#7F77DD" strokeWidth="1.5"/>
        <text x="80" y="211" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">Apollo</text>
        <text x="80" y="226" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Contacts, cos.</text>
        <rect x="144" y="193" width="108" height="46" rx="6" fill="#7F77DD" stroke="#7F77DD" strokeWidth="1.5"/>
        <text x="198" y="211" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">Clay</text>
        <text x="198" y="226" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Transform, enrich</text>
        <rect x="26" y="249" width="108" height="46" rx="6" fill="#7F77DD" stroke="#7F77DD" strokeWidth="1.5"/>
        <text x="80" y="267" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">AI scrapers</text>
        <text x="80" y="282" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Jobs, intent</text>
        <rect x="144" y="249" width="108" height="46" rx="6" fill="#7F77DD" stroke="#7F77DD" strokeWidth="1.5"/>
        <text x="198" y="267" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">Intent data</text>
        <text x="198" y="282" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Buying signals</text>
        <rect x="46" y="308" width="168" height="40" rx="6" fill="#7F77DD" fillOpacity="0.1" stroke="#7F77DD" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="130" y="324" textAnchor="middle" fontSize="11" fontWeight="600" fill="#534AB7" dominantBaseline="central">CDP / Braze / Segment</text>
        <text x="130" y="338" textAnchor="middle" fontSize="10" fill="#7C3AED" dominantBaseline="central">Optional</text>

        {/* Execution cluster */}
        <rect x="416" y="165" width="250" height="225" rx="12" fill="#D85A30" fillOpacity="0.15" stroke="#D85A30" strokeWidth="1.5"/>
        <text x="541" y="183" textAnchor="middle" fontSize="11" fontWeight="600" fill="#993C1D" letterSpacing="1">EXECUTION</text>
        <rect x="428" y="193" width="72" height="46" rx="6" fill="#D85A30" stroke="#D85A30" strokeWidth="1.5"/>
        <text x="464" y="211" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">CRM</text>
        <text x="464" y="226" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Pipeline</text>
        <rect x="510" y="193" width="72" height="46" rx="6" fill="#D85A30" stroke="#D85A30" strokeWidth="1.5"/>
        <text x="546" y="211" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">Outreach</text>
        <text x="546" y="226" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Sequences</text>
        <rect x="592" y="193" width="62" height="46" rx="6" fill="#D85A30" stroke="#D85A30" strokeWidth="1.5"/>
        <text x="623" y="211" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">LinkedIn</text>
        <text x="623" y="226" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Social</text>
        <rect x="428" y="252" width="100" height="42" rx="6" fill="#D85A30" fillOpacity="0.1" stroke="#D85A30" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="478" y="269" textAnchor="middle" fontSize="11" fontWeight="600" fill="#993C1D" dominantBaseline="central">Ad channels</text>
        <text x="478" y="283" textAnchor="middle" fontSize="10" fill="#993C1D" dominantBaseline="central">Optional</text>
        <rect x="540" y="252" width="112" height="42" rx="6" fill="#D85A30" fillOpacity="0.1" stroke="#D85A30" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="596" y="269" textAnchor="middle" fontSize="11" fontWeight="600" fill="#993C1D" dominantBaseline="central">Forecasting</text>
        <text x="596" y="283" textAnchor="middle" fontSize="10" fill="#993C1D" dominantBaseline="central">Gong, Clari</text>

        {/* Infrastructure cluster */}
        <rect x="170" y="425" width="340" height="105" rx="12" fill="#888780" fillOpacity="0.15" stroke="#888780" strokeWidth="1.5"/>
        <text x="340" y="443" textAnchor="middle" fontSize="11" fontWeight="600" fill="#5F5E5A" letterSpacing="1">INFRASTRUCTURE</text>
        <rect x="184" y="453" width="140" height="46" rx="6" fill="#888780" stroke="#888780" strokeWidth="1.5"/>
        <text x="254" y="471" textAnchor="middle" fontSize="12" fontWeight="600" fill="#fff" dominantBaseline="central">iPaaS</text>
        <text x="254" y="486" textAnchor="middle" fontSize="10" fill="rgba(255,255,255,0.8)" dominantBaseline="central">Make, Zapier, APIs</text>
        <rect x="336" y="453" width="160" height="46" rx="6" fill="#888780" fillOpacity="0.15" stroke="#888780" strokeWidth="1" strokeDasharray="5,3"/>
        <text x="416" y="471" textAnchor="middle" fontSize="12" fontWeight="600" fill="#5F5E5A" dominantBaseline="central">MCP / AI agents</text>
        <text x="416" y="486" textAnchor="middle" fontSize="10" fill="#5F5E5A" dominantBaseline="central">Agentic layer</text>

        {/* Connectors */}
        <path d="M139 165 Q139 118 200 85" fill="none" stroke="#534AB7" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.8"/>
        <path d="M210 100 Q170 132 155 165" fill="none" stroke="#0F6E56" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.8" strokeDasharray="4,3"/>
        <line x1="264" y1="278" x2="416" y2="278" stroke="#534AB7" strokeWidth="2" markerEnd="url(#arrow)" opacity="0.9"/>
        <path d="M541 165 Q541 118 480 85" fill="none" stroke="#993C1D" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.8"/>
        <path d="M200 425 Q160 400 139 390" fill="none" stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" strokeDasharray="4,3"/>
        <path d="M480 425 Q520 400 541 390" fill="none" stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.7" strokeDasharray="4,3"/>
        <line x1="340" y1="425" x2="340" y2="132" stroke="#5F5E5A" strokeWidth="1.5" markerEnd="url(#arrow)" opacity="0.6" strokeDasharray="4,3"/>

        {/* Labels */}
        <text x="152" y="135" textAnchor="start" fontSize="10" fill="#888">Informs ICP</text>
        <text x="152" y="155" textAnchor="start" fontSize="10" fill="#888">Targets signals</text>
        <text x="340" y="268" textAnchor="middle" fontSize="10" fill="#888">Feeds CRM and outreach</text>
        <text x="510" y="135" textAnchor="middle" fontSize="10" fill="#888">Pipeline → reporting</text>

        {/* Legend */}
        <rect x="20" y="548" width="10" height="10" rx="2" fill="#444441"/>
        <text x="36" y="557" fontSize="11" fill="#666">Essential</text>
        <rect x="112" y="548" width="10" height="10" rx="2" fill="none" stroke="#888780" strokeWidth="1" strokeDasharray="3,2"/>
        <text x="128" y="557" fontSize="11" fill="#666">Optional</text>
        <circle cx="212" cy="553" r="4" fill="#1D9E75"/>
        <text x="222" y="557" fontSize="11" fill="#666">Strategy</text>
        <circle cx="294" cy="553" r="4" fill="#7F77DD"/>
        <text x="304" y="557" fontSize="11" fill="#666">Data &amp; signals</text>
        <circle cx="404" cy="553" r="4" fill="#D85A30"/>
        <text x="414" y="557" fontSize="11" fill="#666">Execution</text>
        <circle cx="486" cy="553" r="4" fill="#888780"/>
        <text x="496" y="557" fontSize="11" fill="#666">Infrastructure</text>
      </svg>
    </div>
  );
}
