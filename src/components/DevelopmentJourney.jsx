import { StaggerGroup, StaggerItem } from "./Reveal";

/**
 * A visual walk through each "room" of how a project gets built. Reveals
 * are tied to normal scroll position via whileInView (see Reveal/StaggerGroup)
 * rather than any scroll-jacking — the page always scrolls at the user's pace.
 */
export default function DevelopmentJourney({ steps }) {
  return (
    <StaggerGroup
      style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", maxWidth: 760, margin: "0 auto" }}
      gap={0.1}
    >
      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: 31, top: 8, bottom: 8, width: 2,
          background: "linear-gradient(to bottom, var(--accent), var(--accent2) 45%, var(--accent3) 80%, transparent)",
          zIndex: 0,
        }}
      />
      {steps.map((s, i) => {
        const Icon = s.icon;
        return (
          <StaggerItem key={s.n} style={{ display: "flex", gap: 24, paddingBottom: i < steps.length - 1 ? 44 : 0, position: "relative", zIndex: 1 }}>
            <div
              style={{
                width: 64, height: 64, borderRadius: 18,
                background: "var(--bg-card)", border: "2px solid rgba(var(--accent-rgb),0.35)",
                display: "flex", alignItems: "center", justifyContent: "center",
                flexShrink: 0, color: "var(--accent)", boxShadow: "var(--shadow-sm)",
              }}
            >
              <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
            </div>
            <div className="card" style={{ flex: 1, padding: "18px 22px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 6 }}>
                <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.72rem", color: "var(--accent2)" }}>{s.n}</span>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1.05rem", color: "var(--text)" }}>{s.title}</h3>
              </div>
              <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
            </div>
          </StaggerItem>
        );
      })}
    </StaggerGroup>
  );
}
