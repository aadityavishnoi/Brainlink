import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { BrowserMockup } from "./ProductMockup";

const CATEGORY_ACCENT = {
  "Mobility Technology": "var(--accent)",
  "Creative Business": "#B45309",
};

export default function ProjectCard({ project, detailed = false }) {
  const accent = CATEGORY_ACCENT[project.category] || "var(--accent)";

  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 24, background: "var(--bg-card2)", borderBottom: "1px solid var(--border)" }}>
        <BrowserMockup accent={accent} />
      </div>

      <div style={{ padding: 28, display: "flex", flexDirection: "column", gap: 14, flex: 1 }}>
        <div>
          <p style={{ fontSize: "0.78rem", color: accent, fontWeight: 600, marginBottom: 4 }}>{project.industry}</p>
          <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text)" }}>
            {project.clientName}
          </h3>
        </div>

        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.65 }}>{project.shortDescription}</p>

        {detailed && (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(160px,1fr))", gap: 16, paddingTop: 4 }}>
            {[
              { l: "Challenge", v: project.problem },
              { l: "Approach", v: project.approach },
              { l: "Outcome", v: project.outcome },
            ].map((row) => (
              <div key={row.l}>
                <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.68rem", fontWeight: 700, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 6 }}>
                  {row.l}
                </p>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{row.v}</p>
              </div>
            ))}
          </div>
        )}

        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          {(detailed ? project.services : project.services.slice(0, 3)).map((s) => (
            <span key={s} className="tech-pill" style={{ fontSize: "0.72rem", padding: "5px 12px" }}>{s}</span>
          ))}
        </div>

        {detailed && (
          <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
            {project.technologies.map((t) => (
              <span key={t} style={{ fontSize: "0.72rem", color: "var(--muted2)" }}>{t}{t !== project.technologies[project.technologies.length - 1] ? " · " : ""}</span>
            ))}
          </div>
        )}

        <div style={{ marginTop: "auto", paddingTop: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontSize: "0.78rem", color: "var(--muted2)" }}>{project.status}</span>
          {!detailed && (
            <Link
              to={`/work#${project.id}`}
              style={{ display: "inline-flex", alignItems: "center", gap: 6, fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none" }}
            >
              View Case Study <ArrowRight size={14} className="hover-arrow" aria-hidden="true" />
            </Link>
          )}
        </div>
      </div>
    </div>
  );
}
