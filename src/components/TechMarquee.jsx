export default function TechMarquee({ items }) {
  const loop = [...items, ...items];
  return (
    <div
      className="marquee-wrap"
      style={{
        overflow: "hidden",
        maskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
        WebkitMaskImage: "linear-gradient(90deg, transparent, #000 8%, #000 92%, transparent)",
      }}
    >
      <div className="marquee-track" style={{ gap: 14 }}>
        {loop.map((tech, i) => (
          <span className="tech-pill" key={`${tech}-${i}`}>{tech}</span>
        ))}
      </div>
    </div>
  );
}
