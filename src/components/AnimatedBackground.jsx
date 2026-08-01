/**
 * Decorative grid + radial glow backdrop for hero/CTA sections.
 * Purely presentational — aria-hidden, absolutely positioned, never
 * intercepts pointer events or blocks content from painting.
 */
export default function AnimatedBackground({ variant = "hero" }) {
  return (
    <div aria-hidden="true" style={{ position: "absolute", inset: 0, overflow: "hidden", zIndex: 0 }}>
      <div className="grid-bg" />
      <div
        className="glow-orb"
        style={{
          width: variant === "hero" ? 520 : 360,
          height: variant === "hero" ? 520 : 360,
          top: variant === "hero" ? "-10%" : "20%",
          left: "50%",
          transform: "translateX(-50%)",
          background: "radial-gradient(circle, rgba(var(--accent-rgb),0.35) 0%, transparent 70%)",
        }}
      />
      <div
        className="glow-orb"
        style={{
          width: 380,
          height: 380,
          top: "10%",
          right: "-8%",
          background: "radial-gradient(circle, rgba(var(--accent2-rgb),0.22) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
