import AnimatedBackground from "./AnimatedBackground";
import Reveal from "./Reveal";

/**
 * Shared hero block for inner pages (Services, About, Pricing, Careers, ...).
 * Home page uses its own richer hero with the interactive visual.
 */
export default function PageHero({ label, title, subtitle, children, maxWidth = 680 }) {
  return (
    <section
      style={{
        position: "relative",
        padding: "120px 24px 64px",
        textAlign: "center",
        overflow: "hidden",
        background: "var(--bg)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <AnimatedBackground variant="page" />
      <div style={{ position: "relative", zIndex: 1, maxWidth, margin: "0 auto" }}>
        <Reveal>
          {label && <span className="label">{label}</span>}
          <h1
            style={{
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              fontWeight: 800,
              color: "var(--text)",
              marginBottom: 16,
              letterSpacing: "-0.02em",
              lineHeight: 1.15,
            }}
          >
            {title}
          </h1>
          {subtitle && (
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: children ? 32 : 0 }}>
              {subtitle}
            </p>
          )}
          {children}
        </Reveal>
      </div>
    </section>
  );
}
