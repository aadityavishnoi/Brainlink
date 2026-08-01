/**
 * Reusable glowing "gateway" visual — concentric rotating rings around a
 * soft gradient core. Pure CSS/SVG, used for the Idea Portal and the final
 * CTA section so both share the same universe visual language.
 */
export default function DigitalPortal({ size = 320, children }) {
  return (
    <div
      style={{
        position: "relative",
        width: size,
        height: size,
        maxWidth: "100%",
        aspectRatio: "1 / 1",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        aria-hidden="true"
        className="portal-ring-outer"
        style={{
          position: "absolute", inset: 0, borderRadius: "50%",
          border: "1.5px dashed rgba(74,114,255,0.28)",
        }}
      />
      <div
        aria-hidden="true"
        className="portal-ring-inner"
        style={{
          position: "absolute", inset: "14%", borderRadius: "50%",
          border: "1.5px dashed rgba(140,107,255,0.32)",
        }}
      />
      <div
        aria-hidden="true"
        style={{
          position: "absolute", inset: "26%", borderRadius: "50%",
          background: "radial-gradient(circle, rgba(74,114,255,0.35) 0%, rgba(140,107,255,0.22) 45%, rgba(50,199,232,0.12) 70%, transparent 85%)",
          filter: "blur(6px)",
        }}
        className="float-anim"
      />
      <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>{children}</div>

      <style>{`
        .portal-ring-outer { animation: portalSpin 26s linear infinite; }
        .portal-ring-inner { animation: portalSpin 18s linear infinite reverse; }
        @keyframes portalSpin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .portal-ring-outer, .portal-ring-inner { animation: none; }
        }
      `}</style>
    </div>
  );
}
