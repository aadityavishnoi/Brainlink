import { Link } from "react-router-dom";
import "../../index.css";

export default function BlogCard({ post }) {
  return (
    <div className="card" style={{ padding: 0, overflow: "hidden", display: "flex", flexDirection: "column", height: "100%" }}>
      {/* Featured Image */}
      {post.featured_image ? (
        <img
          src={post.featured_image}
          alt={post.title}
          style={{ width: "100%", height: 200, objectFit: "cover", borderBottom: "1px solid var(--border)" }}
        />
      ) : (
        <div style={{ width: "100%", height: 200, background: "rgba(255,255,255,0.03)", borderBottom: "1px solid var(--border)", display: "flex", alignItems: "center", justifyContent: "center" }}>
          <i className="fas fa-image" style={{ color: "var(--muted)", fontSize: "2rem" }}></i>
        </div>
      )}

      <div style={{ padding: 24, display: "flex", flexDirection: "column", flexGrow: 1 }}>
        <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 12, lineHeight: 1.4 }}>
          {post.title}
        </h3>
        <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7, marginBottom: 24, flexGrow: 1 }}>
          {post.excerpt && post.excerpt.length > 100 ? `${post.excerpt.substring(0, 100)}...` : post.excerpt}
        </p>

        <Link
          to={`/blog/${post.slug}`}
          style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.85rem", color: "var(--accent)", textDecoration: "none", display: "inline-flex", alignItems: "center", gap: 6 }}
          onMouseEnter={e => e.currentTarget.style.color = "var(--accent-h)"}
          onMouseLeave={e => e.currentTarget.style.color = "var(--accent)"}
        >
          Read Article <i className="fas fa-arrow-right" style={{ fontSize: "0.75rem" }}></i>
        </Link>
      </div>
    </div>
  );
}
