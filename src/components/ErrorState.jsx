import { AlertTriangle } from "lucide-react";

export default function ErrorState({ title = "Something went wrong", message, minHeight = 240 }) {
  return (
    <div
      role="alert"
      style={{ display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", gap: 10, minHeight, padding: "48px 24px", textAlign: "center" }}
    >
      <AlertTriangle size={30} style={{ color: "var(--danger)" }} aria-hidden="true" />
      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1.05rem", color: "var(--text)" }}>{title}</h3>
      {message && <p style={{ color: "var(--muted)", fontSize: "0.9rem", maxWidth: 380 }}>{message}</p>}
    </div>
  );
}
