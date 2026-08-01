import AnimatedBackground from "./AnimatedBackground";
import FloatingClouds from "./FloatingClouds";
import Reveal from "./Reveal";

/**
 * Shared hero block for inner pages (Services, About, Pricing, Careers, ...).
 * Home page uses its own richer hero with the interactive 3D visual — this
 * keeps the same universe language (sky gradient, clouds, glow) so no inner
 * page feels like a plain fallback of the homepage.
 */
export default function PageHero({ label, title, subtitle, children, maxWidth = 680 }) {
  return (
    <section
      style={{
        position: "relative",
        padding: "128px 24px 72px",
        textAlign: "center",
        overflow: "hidden",
        background: "linear-gradient(180deg, #F8FAFF 0%, #EEF5FF 100%)",
        borderBottom: "1px solid var(--border)",
      }}
    >
      <AnimatedBackground variant="page" />
      <FloatingClouds variant="hero" />
      <div style={{ position: "relative", zIndex: 1, maxWidth, margin: "0 auto" }}>
        <Reveal>
          {label && <span className="label">{label}</span>}
          <h1
            style={{
              fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
              fontWeight: 700,
              color: "var(--text)",
              marginBottom: 16,
              lineHeight: 1.12,
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
