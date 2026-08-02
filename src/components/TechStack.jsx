const CATEGORY_ORDER = ["Frontend", "Backend", "Database", "Infrastructure"];

export default function TechStack({ modules }) {
  const grouped = CATEGORY_ORDER.map((cat) => ({
    category: cat,
    items: modules.filter((m) => m.category === cat),
  })).filter((g) => g.items.length);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 28 }}>
      {grouped.map((group) => (
        <div key={group.category}>
          <p style={{ fontFamily: "var(--font-heading)", fontSize: "0.72rem", fontWeight: 700, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.05em", marginBottom: 12 }}>
            {group.category}
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
            {group.items.map((tech) => (
              <span key={tech.name} className="tech-pill">{tech.name}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
