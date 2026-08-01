import { StaggerGroup, StaggerItem } from "./Reveal";

export default function ProcessTimeline({ steps }) {
  return (
    <StaggerGroup style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", maxWidth: 680, margin: "0 auto" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute", left: 23, top: 0, bottom: 0, width: 2,
          background: "linear-gradient(to bottom, var(--accent), rgba(var(--accent-rgb),0.08))",
          zIndex: 0,
        }}
      />
      {steps.map((s, i) => (
        <StaggerItem key={s.n} style={{ display: "flex", gap: 24, paddingBottom: i < steps.length - 1 ? 40 : 0, position: "relative", zIndex: 1 }}>
          <div
            style={{
              width: 48, height: 48, borderRadius: "50%",
              background: "var(--bg-card)", border: "2px solid var(--accent)",
              display: "flex", alignItems: "center", justifyContent: "center",
              flexShrink: 0, fontFamily: "'Poppins',sans-serif", fontWeight: 700,
              fontSize: "0.8rem", color: "var(--accent)",
            }}
          >
            {s.n}
          </div>
          <div style={{ paddingTop: 10 }}>
            <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text)", marginBottom: 6 }}>
              {s.title}
            </h3>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
