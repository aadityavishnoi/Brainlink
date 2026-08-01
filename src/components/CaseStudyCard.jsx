import { MapPin, UserRound } from "lucide-react";

export default function CaseStudyCard({ client, detailed = false }) {
  return (
    <div
      className="card"
      style={{
        borderRadius: 20,
        padding: 32,
        display: "flex",
        flexDirection: "column",
        gap: 20,
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div
          style={{
            width: 64, height: 64, borderRadius: 12,
            background: "#064e3b",
            padding: 4, display: "flex", alignItems: "center", justifyContent: "center",
            overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)", flexShrink: 0,
          }}
        >
          <img src={client.logo} alt={`${client.name} logo`} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
        </div>
        <div>
          <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "var(--text)", marginBottom: 2 }}>
            {client.name}
          </h3>
          <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>
            {client.tagline}
          </p>
        </div>
      </div>

      <div style={{ flex: 1 }}>
        <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 16 }}>{client.desc}</p>
        <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
          <span
            style={{
              fontSize: "0.75rem", background: "rgba(var(--accent-rgb),0.1)", color: "var(--accent)",
              padding: "4px 10px", borderRadius: 4, border: "1px solid rgba(var(--accent-rgb),0.2)",
            }}
          >
            {client.service}
          </span>
        </div>
      </div>

      {detailed && (
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit,minmax(180px,1fr))", gap: 16, paddingTop: 4 }}>
          {[
            { l: "Problem", v: "Needed polished visual content to represent architectural work professionally across marketing channels." },
            { l: "Approach", v: `Brainlink handled ${client.service.toLowerCase()} end to end, aligned with the firm's brand.` },
            { l: "Outcome", v: "Delivered ready-to-use video content the firm could publish across marketing and client presentations." },
          ].map((row) => (
            <div key={row.l}>
              <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.7rem", fontWeight: 700, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 6 }}>
                {row.l}
              </p>
              <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.6 }}>{row.v}</p>
            </div>
          ))}
        </div>
      )}

      <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 8 }}>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--muted2)" }}>
          <UserRound size={14} aria-hidden="true" /> {client.contact}
        </div>
        <div style={{ display: "flex", alignItems: "center", gap: 6, fontSize: "0.8rem", color: "var(--muted2)" }}>
          <MapPin size={14} aria-hidden="true" /> {client.location}
        </div>
      </div>
    </div>
  );
}
