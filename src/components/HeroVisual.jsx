import { useEffect, useRef } from "react";
import { Compass, Palette, Code2, Cloud, ShieldCheck, TrendingUp } from "lucide-react";

const nodes = [
  { icon: Compass, label: "Strategy", angle: -90, color: "var(--accent)" },
  { icon: Palette, label: "Design", angle: -30, color: "var(--accent2)" },
  { icon: Code2, label: "Development", angle: 30, color: "var(--accent3)" },
  { icon: Cloud, label: "Cloud", angle: 90, color: "var(--accent)" },
  { icon: ShieldCheck, label: "Security", angle: 150, color: "var(--accent2)" },
  { icon: TrendingUp, label: "Scale", angle: -150, color: "var(--accent3)" },
];

const RADIUS = 150;

function polar(angleDeg, r) {
  const rad = (angleDeg * Math.PI) / 180;
  return { x: Math.cos(rad) * r, y: Math.sin(rad) * r };
}

/**
 * "Brainlink Core" — a central node linked to the disciplines that make up
 * how the studio delivers a product. Cursor parallax is applied by directly
 * mutating a ref's transform (no re-renders) and is skipped entirely for
 * users who prefer reduced motion or on touch-only devices.
 */
export default function HeroVisual() {
  const wrapRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const isTouch = window.matchMedia("(hover: none)").matches;
    if (prefersReduced || isTouch) return;

    const el = wrapRef.current;
    if (!el) return;

    const handleMove = (e) => {
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
      frameRef.current = requestAnimationFrame(() => {
        const rect = el.getBoundingClientRect();
        const px = (e.clientX - rect.left) / rect.width - 0.5;
        const py = (e.clientY - rect.top) / rect.height - 0.5;
        el.style.setProperty("--tiltX", `${(-py * 8).toFixed(2)}deg`);
        el.style.setProperty("--tiltY", `${(px * 8).toFixed(2)}deg`);
      });
    };
    const handleLeave = () => {
      el.style.setProperty("--tiltX", "0deg");
      el.style.setProperty("--tiltY", "0deg");
    };

    el.addEventListener("mousemove", handleMove);
    el.addEventListener("mouseleave", handleLeave);
    return () => {
      el.removeEventListener("mousemove", handleMove);
      el.removeEventListener("mouseleave", handleLeave);
      if (frameRef.current) cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <div
      ref={wrapRef}
      role="img"
      aria-label="Diagram: Brainlink Core connected to Strategy, Design, Development, Cloud, Security and Scale"
      style={{
        position: "relative",
        width: "100%",
        maxWidth: 420,
        aspectRatio: "1 / 1",
        margin: "0 auto",
        perspective: 900,
        "--tiltX": "0deg",
        "--tiltY": "0deg",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          transform: "rotateX(var(--tiltX)) rotateY(var(--tiltY))",
          transformStyle: "preserve-3d",
          transition: "transform 0.15s ease-out",
        }}
      >
        {/* connecting lines */}
        <svg viewBox="-210 -210 420 420" style={{ position: "absolute", inset: 0, width: "100%", height: "100%", overflow: "visible" }} aria-hidden="true">
          {nodes.map((n) => {
            const p = polar(n.angle, RADIUS);
            return (
              <line
                key={n.label}
                x1="0" y1="0" x2={p.x} y2={p.y}
                stroke="var(--border)"
                strokeWidth="1.5"
                strokeDasharray="4 5"
              />
            );
          })}
        </svg>

        {/* core */}
        <div
          className="hero-core"
          style={{
            position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
            width: 108, height: 108, borderRadius: "50%",
            background: "linear-gradient(135deg, var(--accent), var(--accent2))",
            display: "flex", alignItems: "center", justifyContent: "center",
            boxShadow: "0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px rgba(var(--accent-rgb),0.45)",
          }}
        >
          <span style={{ fontFamily: "var(--font-heading)", fontWeight: 800, fontSize: "0.78rem", color: "#fff", textAlign: "center", lineHeight: 1.25 }}>
            Brainlink<br />Core
          </span>
        </div>

        {/* orbit nodes */}
        {nodes.map((n) => {
          const p = polar(n.angle, RADIUS);
          const Icon = n.icon;
          return (
            <div
              key={n.label}
              className="hero-node"
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: `translate(-50%,-50%) translate(${p.x}px, ${p.y}px)`,
                display: "flex", flexDirection: "column", alignItems: "center", gap: 6,
              }}
            >
              <div
                style={{
                  width: 52, height: 52, borderRadius: 14,
                  background: "var(--bg-card)", border: "1px solid var(--border)",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: n.color,
                  boxShadow: "0 8px 24px rgba(0,0,0,0.18)",
                }}
              >
                <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
              </div>
              <span style={{ fontSize: "0.7rem", fontWeight: 600, color: "var(--muted)", fontFamily: "var(--font-body)", whiteSpace: "nowrap" }}>
                {n.label}
              </span>
            </div>
          );
        })}
      </div>

      <style>{`
        .hero-core { animation: heroPulse 3.2s ease-in-out infinite; }
        @keyframes heroPulse {
          0%, 100% { box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 20px 60px rgba(var(--accent-rgb),0.45); }
          50% { box-shadow: 0 0 0 1px rgba(255,255,255,0.15), 0 20px 70px rgba(var(--accent-rgb),0.7); }
        }
        @media (prefers-reduced-motion: reduce) {
          .hero-core { animation: none; }
        }
        @media (max-width: 480px) {
          .hero-node span { display: none; }
        }
      `}</style>
    </div>
  );
}
