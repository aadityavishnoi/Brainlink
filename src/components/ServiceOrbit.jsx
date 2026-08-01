import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { Brain } from "lucide-react";

const RADIUS_DESKTOP = 210;

/**
 * "Solar system" service layout. Every planet is a real, always-focusable
 * <Link> in normal DOM order, so keyboard and screen-reader users get the
 * same content a mouse user does — the circle is a visual arrangement, not
 * a separate experience. Below a certain width it switches to a static
 * grid instead of positioning items around a ring, which also becomes the
 * layout reduced-motion users get (no orbit rotation either way).
 */
export default function ServiceOrbit({ services }) {
  const [active, setActive] = useState(null);
  const [paused, setPaused] = useState(false);
  const [isCompact, setIsCompact] = useState(false);
  const wrapRef = useRef(null);

  useEffect(() => {
    const check = () => setIsCompact(window.innerWidth < 860);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, []);

  const activeService = services.find((s) => s.id === active);

  if (isCompact) {
    return (
      <div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 16 }}>
          {services.map((s) => {
            const Icon = s.icon;
            return (
              <Link
                key={s.id}
                to={`/services#${s.id}`}
                className="card"
                data-cursor-label="Open"
                style={{ display: "flex", flexDirection: "column", gap: 10, textDecoration: "none" }}
              >
                <div style={{ width: 42, height: 42, borderRadius: 12, background: "rgba(var(--accent-rgb),0.1)", display: "flex", alignItems: "center", justifyContent: "center", color: "var(--accent)" }}>
                  <Icon size={20} aria-hidden="true" />
                </div>
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)" }}>{s.title}</h3>
                <p style={{ fontSize: "0.82rem", color: "var(--muted)", lineHeight: 1.6 }}>{s.shortDesc}</p>
              </Link>
            );
          })}
        </div>
      </div>
    );
  }

  return (
    <div
      ref={wrapRef}
      style={{ position: "relative", width: "100%", maxWidth: 560, aspectRatio: "1/1", margin: "0 auto" }}
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => { setPaused(false); setActive(null); }}
    >
      {/* orbit rings, decorative */}
      <div aria-hidden="true" className="orbit-ring" style={{ inset: "6%" }} />
      <div aria-hidden="true" className="orbit-ring" style={{ inset: "20%" }} />

      {/* core */}
      <div
        style={{
          position: "absolute", top: "50%", left: "50%", transform: "translate(-50%,-50%)",
          width: 110, height: 110, borderRadius: "50%",
          background: "linear-gradient(135deg, var(--accent), var(--accent2))",
          display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
          color: "#fff", boxShadow: "var(--shadow-lg)", zIndex: 2, textAlign: "center", padding: 8,
        }}
      >
        <Brain size={24} strokeWidth={1.8} aria-hidden="true" />
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.7rem", marginTop: 4 }}>Brainlink Core</span>
      </div>

      {/* rotating ring of planets */}
      <div
        className={paused ? "" : "service-orbit-spin"}
        style={{ position: "absolute", inset: 0 }}
      >
        {services.map((s, i) => {
          const angle = (360 / services.length) * i;
          const rad = (angle * Math.PI) / 180;
          const x = Math.cos(rad) * RADIUS_DESKTOP;
          const y = Math.sin(rad) * RADIUS_DESKTOP;
          const Icon = s.icon;
          const isActive = active === s.id;
          return (
            /* positioner: static translate to ring position, untouched by animation/hover */
            <div
              key={s.id}
              style={{
                position: "absolute", top: "50%", left: "50%",
                transform: `translate(-50%,-50%) translate(${x}px, ${y}px)`,
              }}
            >
              {/* counter-rotator: only the CSS spin animation lives here */}
              <div className="service-orbit-planet">
                {/* interactive planet: only the hover/focus scale lives here */}
                <Link
                  to={`/services#${s.id}`}
                  data-cursor-label="Open"
                  onMouseEnter={() => setActive(s.id)}
                  onFocus={() => { setPaused(true); setActive(s.id); }}
                  onBlur={() => setActive(null)}
                  style={{
                    display: "flex", alignItems: "center", justifyContent: "center",
                    width: 62, height: 62, borderRadius: 16,
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    color: isActive ? "var(--accent)" : "var(--muted)",
                    boxShadow: isActive ? "var(--shadow-md)" : "var(--shadow-sm)",
                    textDecoration: "none", zIndex: isActive ? 3 : 1, position: "relative",
                    transform: `scale(${isActive ? 1.18 : 1})`,
                    transition: "transform 0.3s cubic-bezier(0.22,1,0.36,1), box-shadow 0.3s ease, color 0.2s ease",
                  }}
                  aria-label={`${s.title} — open service details`}
                >
                  <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* info card for hovered/focused planet */}
      {activeService && (
        <div
          role="status"
          className="glass-card"
          style={{
            position: "absolute", bottom: -8, left: "50%", transform: "translate(-50%, 100%)",
            width: "min(280px, 90%)", padding: "16px 18px", zIndex: 4,
            boxShadow: "var(--shadow-md)",
          }}
        >
          <p style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.9rem", color: "var(--text)", marginBottom: 6 }}>
            {activeService.title}
          </p>
          <p style={{ fontSize: "0.8rem", color: "var(--muted)", lineHeight: 1.6 }}>{activeService.shortDesc}</p>
        </div>
      )}

      <style>{`
        @keyframes serviceOrbitSpin { to { transform: rotate(360deg); } }
        .service-orbit-spin { animation: serviceOrbitSpin 90s linear infinite; }
        .service-orbit-spin .service-orbit-planet { animation: serviceOrbitCounterSpin 90s linear infinite; }
        @keyframes serviceOrbitCounterSpin { to { transform: rotate(-360deg); } }
        @media (prefers-reduced-motion: reduce) {
          .service-orbit-spin, .service-orbit-spin .service-orbit-planet { animation: none; }
        }
      `}</style>
    </div>
  );
}
