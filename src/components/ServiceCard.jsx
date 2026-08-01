import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

export default function ServiceCard({ service, compact = false }) {
  const Icon = service.icon;
  return (
    <Link
      to={`/services#${service.id}`}
      className="card"
      style={{
        display: "flex",
        flexDirection: "column",
        textDecoration: "none",
        height: "100%",
        gap: 14,
      }}
    >
      <div
        style={{
          width: 48,
          height: 48,
          borderRadius: 12,
          background: "rgba(var(--accent-rgb),0.1)",
          border: "1px solid rgba(var(--accent-rgb),0.2)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "var(--accent)",
        }}
      >
        <Icon size={22} strokeWidth={1.8} aria-hidden="true" />
      </div>
      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1.02rem", color: "var(--text)" }}>
        {service.title}
      </h3>
      <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7, flexGrow: 1 }}>
        {service.shortDesc}
      </p>
      {!compact && (
        <span
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            fontFamily: "'Poppins',sans-serif",
            fontWeight: 600,
            fontSize: "0.82rem",
            color: "var(--accent)",
          }}
        >
          Learn more <ArrowRight size={14} aria-hidden="true" />
        </span>
      )}
    </Link>
  );
}
