import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

function MobilityWorld() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="mobilitySky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#E4EEFF" />
          <stop offset="100%" stopColor="#F1F6FF" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#mobilitySky)" />
      <circle cx="270" cy="34" r="26" fill="#32C7E8" opacity="0.18" />
      <circle cx="40" cy="24" r="16" fill="#8C6BFF" opacity="0.16" />
      {/* road */}
      <path d="M-10,150 C90,110 220,190 330,120" stroke="#4A72FF" strokeOpacity="0.3" strokeWidth="26" fill="none" />
      <path d="M-10,150 C90,110 220,190 330,120" stroke="#ffffff" strokeOpacity="0.7" strokeWidth="2" strokeDasharray="8 8" fill="none" />
      {/* vehicle */}
      <g transform="translate(150,120)">
        <rect x="-24" y="-10" width="48" height="20" rx="7" fill="#4A72FF" />
        <rect x="-14" y="-18" width="28" height="12" rx="5" fill="#5C82FF" />
        <circle cx="-14" cy="12" r="6" fill="#172033" />
        <circle cx="14" cy="12" r="6" fill="#172033" />
      </g>
      {/* QR node */}
      <g transform="translate(232,86)">
        <rect x="-16" y="-16" width="32" height="32" rx="6" fill="#ffffff" stroke="#4A72FF" strokeOpacity="0.4" />
        <rect x="-9" y="-9" width="6" height="6" fill="#4A72FF" />
        <rect x="3" y="-9" width="6" height="6" fill="#8C6BFF" />
        <rect x="-9" y="3" width="6" height="6" fill="#32C7E8" />
      </g>
      {/* signal waves */}
      <path d="M212,86 q-14,-14 0,-28" stroke="#32C7E8" strokeWidth="2" fill="none" opacity="0.6" />
      <path d="M204,86 q-22,-22 0,-44" stroke="#32C7E8" strokeWidth="2" fill="none" opacity="0.35" />
    </svg>
  );
}

function CreativeWorld() {
  return (
    <svg viewBox="0 0 320 180" width="100%" height="100%" aria-hidden="true" preserveAspectRatio="xMidYMid slice">
      <defs>
        <linearGradient id="creativeSky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="#FBEFFF" />
          <stop offset="100%" stopColor="#FFF4EE" />
        </linearGradient>
      </defs>
      <rect width="320" height="180" fill="url(#creativeSky)" />
      <circle cx="46" cy="30" r="22" fill="#FF7EB6" opacity="0.18" />
      <circle cx="280" cy="46" r="16" fill="#8C6BFF" opacity="0.18" />
      {/* film frames */}
      {[0, 1, 2].map((i) => (
        <rect key={i} x={40 + i * 60} y="118" width="46" height="34" rx="4" fill="#ffffff" stroke="#FF7EB6" strokeOpacity="0.4" transform={`rotate(${(i - 1) * 6} ${63 + i * 60} 135)`} />
      ))}
      {/* camera */}
      <g transform="translate(160,80)">
        <rect x="-34" y="-18" width="68" height="42" rx="8" fill="#8C6BFF" />
        <rect x="-14" y="-30" width="28" height="14" rx="4" fill="#8C6BFF" />
        <circle cx="0" cy="3" r="16" fill="#F5F0FF" />
        <circle cx="0" cy="3" r="10" fill="#4A72FF" opacity="0.6" />
        <circle cx="22" cy="-10" r="4" fill="#FF7EB6" />
      </g>
      {/* sparkles */}
      <path d="M250,110 l3,7 7,3 -7,3 -3,7 -3,-7 -7,-3 7,-3z" fill="#FF7EB6" opacity="0.7" />
      <path d="M70,70 l2,5 5,2 -5,2 -2,5 -2,-5 -5,-2 5,-2z" fill="#32C7E8" opacity="0.6" />
    </svg>
  );
}

const WORLDS = { mobility: MobilityWorld, creative: CreativeWorld };

export default function ProjectWorldCard({ project, detailed = false }) {
  const WorldVisual = WORLDS[project.worldTheme] || MobilityWorld;

  return (
    <div className="card gradient-border" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ height: 180, position: "relative" }}>
        <WorldVisual />
        <span
          className="label"
          style={{ position: "absolute", top: 16, left: 16, marginBottom: 0, background: "rgba(255,255,255,0.85)" }}
        >
          {project.category}
        </span>
      </div>

      <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text)", marginBottom: 4 }}>
            {project.clientName}
          </h3>
          <p style={{ fontSize: "0.78rem", color: "var(--accent)", fontWeight: 600 }}>{project.industry}</p>
        </div>

        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7 }}>{project.shortDescription}</p>

        {detailed && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, paddingTop: 4 }}>
            {[
              { l: "Problem", v: project.problem },
              { l: "Approach", v: project.approach },
              { l: "Outcome", v: project.outcome },
            ].map((row) => (
              <div key={row.l}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.68rem", fontWeight: 700, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                  {row.l}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{row.v}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(detailed ? project.services : project.services.slice(0, 3)).map((s) => (
            <span
              key={s}
              style={{ fontSize: "0.72rem", background: "rgba(var(--accent-rgb),0.08)", color: "var(--accent)", padding: "4px 10px", borderRadius: 50, border: "1px solid rgba(var(--accent-rgb),0.16)" }}
            >
              {s}
            </span>
          ))}
        </div>

        <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--muted2)" }}>{project.status}</span>
          {!detailed && (
            <Link
              to={`/work#${project.id}`}
              data-cursor-label="View"
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none" }}
            >
              View Case Study <ArrowRight size={14} aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
