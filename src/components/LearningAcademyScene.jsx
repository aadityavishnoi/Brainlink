import { GraduationCap, Code2, Users, GitBranch, FileCheck } from "lucide-react";

const nodes = [
  { icon: Code2, label: "Real Projects", angle: -80, color: "var(--accent)" },
  { icon: Users, label: "Mentorship", angle: -20, color: "var(--accent2)" },
  { icon: GitBranch, label: "Git Workflow", angle: 55, color: "var(--accent3)" },
  { icon: FileCheck, label: "Verified Work", angle: 135, color: "var(--pink)" },
  { icon: GraduationCap, label: "Skill Paths", angle: -145, color: "var(--accent2)" },
];

function polar(angle, r) {
  const rad = (angle * Math.PI) / 180;
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
}

const RADIUS = 150;

/**
 * Decorative "Learning Academy" visual for the Careers page — same
 * core/orbit language as the homepage universe, themed around growth
 * and mentorship rather than product engineering.
 *
 * Each node is a positioner div (static inline transform placing it on the
 * ring) wrapping a float div (only the CSS float animation, no inline
 * transform) — a running CSS transform animation replaces an element's
 * inline transform entirely, so positioning and floating motion can't
 * safely share one element.
 */
export default function LearningAcademyScene() {
  return (
    <div style={{ position: "relative", width: "100%", maxWidth: 380, aspectRatio: "1/1", margin: "0 auto" }}>
      <svg viewBox="-190 -190 380 380" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
        {nodes.map((n) => {
          const p = polar(n.angle, RADIUS);
          return <line key={n.label} x1="0" y1="0" x2={p.x} y2={p.y} stroke="var(--border)" strokeWidth="1.5" strokeDasharray="4 5" />;
        })}
      </svg>

      <div style={{ position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)" }}>
        <div
          className="float-anim"
          style={{
            width: 96, height: 96, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent2), var(--pink))",
            display: "flex", alignItems: "center", justifyContent: "center", color: "#fff",
            boxShadow: "var(--shadow-lg)",
          }}
        >
          <GraduationCap size={34} strokeWidth={1.6} aria-hidden="true" />
        </div>
      </div>

      {nodes.map((n) => {
        const p = polar(n.angle, RADIUS);
        const Icon = n.icon;
        return (
          <div
            key={n.label}
            style={{
              position: "absolute", top: "50%", left: "50%",
              transform: `translate(-50%,-50%) translate(${p.x}px, ${p.y}px)`,
            }}
          >
            <div className="float-anim-slow" style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 6 }}>
              <div
                style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: n.color, boxShadow: "var(--shadow-sm)",
                }}
              >
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span style={{ fontSize: "0.68rem", fontWeight: 600, color: "var(--muted)", whiteSpace: "nowrap" }}>{n.label}</span>
            </div>
          </div>
        );
      })}
    </div>
  );
}
