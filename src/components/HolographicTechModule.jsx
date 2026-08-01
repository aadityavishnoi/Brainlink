import { useRef, useState } from "react";

function TiltCard({ tech }) {
  const ref = useRef(null);
  const [tilt, setTilt] = useState({ rx: 0, ry: 0 });
  const [hovered, setHovered] = useState(false);

  const handleMove = (e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const px = (e.clientX - rect.left) / rect.width - 0.5;
    const py = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ rx: py * -10, ry: px * 12 });
  };

  const handleLeave = () => {
    setTilt({ rx: 0, ry: 0 });
    setHovered(false);
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleLeave}
      tabIndex={0}
      onFocus={() => setHovered(true)}
      onBlur={handleLeave}
      style={{ perspective: 700 }}
    >
      <div
        className="glass-card"
        style={{
          padding: "24px 20px",
          textAlign: "center",
          position: "relative",
          transform: `rotateX(${tilt.rx}deg) rotateY(${tilt.ry}deg) ${hovered ? "translateZ(6px)" : ""}`,
          transition: "transform 0.25s ease, box-shadow 0.25s ease",
          boxShadow: hovered ? "var(--shadow-md)" : "var(--shadow-sm)",
          minHeight: 120,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          gap: 8,
        }}
      >
        <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>
          {tech.name}
        </span>
        <span
          style={{
            fontSize: "0.72rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.04em",
          }}
        >
          {tech.category}
        </span>
        <p
          style={{
            fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.5,
            maxHeight: hovered ? 60 : 0, opacity: hovered ? 1 : 0,
            overflow: "hidden", transition: "max-height 0.25s ease, opacity 0.2s ease",
          }}
        >
          {tech.note}
        </p>
      </div>
    </div>
  );
}

export default function HolographicTechModule({ modules }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 18 }}>
      {modules.map((tech) => (
        <TiltCard key={tech.name} tech={tech} />
      ))}
    </div>
  );
}
