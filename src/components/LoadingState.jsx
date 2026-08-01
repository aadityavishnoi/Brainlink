import { Loader2 } from "lucide-react";

export default function LoadingState({ label = "Loading...", minHeight = 240 }) {
  return (
    <div
      role="status"
      aria-live="polite"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 12, minHeight, padding: "48px 0" }}
    >
      <Loader2 size={26} className="spin" style={{ color: "var(--accent)" }} aria-hidden="true" />
      <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.9rem", color: "var(--muted)" }}>{label}</p>
      <style>{`
        .spin { animation: spin 0.9s linear infinite; }
        @keyframes spin { to { transform: rotate(360deg); } }
        @media (prefers-reduced-motion: reduce) { .spin { animation: none; } }
      `}</style>
    </div>
  );
}
