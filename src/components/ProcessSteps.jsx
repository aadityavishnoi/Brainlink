import { StaggerGroup, StaggerItem } from "./Reveal";

export default function ProcessSteps({ steps }) {
  return (
    <StaggerGroup style={{ maxWidth: 720, margin: "0 auto" }} gap={0.05}>
      {steps.map((s, i) => (
        <StaggerItem
          key={s.n}
          style={{
            display: "flex",
            gap: 24,
            alignItems: "flex-start",
            padding: "22px 0",
            borderBottom: i < steps.length - 1 ? "1px solid var(--border)" : "none",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-heading)",
              fontWeight: 700,
              fontSize: "0.85rem",
              color: "var(--accent)",
              width: 32,
              flexShrink: 0,
            }}
          >
            {s.n}
          </span>
          <div>
            <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem", color: "var(--text)", marginBottom: 4 }}>{s.title}</h3>
            <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.65 }}>{s.desc}</p>
          </div>
        </StaggerItem>
      ))}
    </StaggerGroup>
  );
}
