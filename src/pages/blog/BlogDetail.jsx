import { useParams, Link } from "react-router-dom";
import Header from "../../common/Header";
import Footer from "../../common/Footer";
import { useEffect, useState } from "react";
import "../../index.css";

export default function BlogDetail() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchPost() {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) throw new Error("Failed to fetch");
        const data = await res.json();
        const postData = Array.isArray(data) ? data[0] : data;
        setPost(postData || null);
        
        // SEO meta handling
        if (postData?.meta_title) {
          document.title = postData.meta_title;
        } else if (postData?.title) {
          document.title = postData.title;
        }

        if (postData?.meta_description) {
          let meta = document.querySelector("meta[name='description']");
          if (!meta) {
            meta = document.createElement("meta");
            meta.name = "description";
            document.head.appendChild(meta);
          }
          meta.content = postData.meta_description;
        }
      } catch (err) {
        console.error("Blog fetch error:", err);
        setPost(null);
      } finally {
        setLoading(false);
      }
    }
    fetchPost();
  }, [slug]);

  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh", padding: "80px 24px 64px" }}>
        {loading ? (
          <div style={{ display: "flex", justifyContent: "center", padding: "120px 0" }}>
            <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "var(--accent)", animation: "pulse 2s infinite" }}>
              Loading article...
            </p>
          </div>
        ) : !post ? (
          <div style={{ textAlign: "center", padding: "120px 0" }}>
            <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "clamp(1.5rem,4vw,2.5rem)", color: "var(--text)", marginBottom: 12 }}>Article Not Found</h1>
            <p style={{ color: "var(--muted)", marginBottom: 24 }}>The post you're looking for was moved or deleted.</p>
            <Link to="/blog" className="btn-primary">Back to Blog</Link>
          </div>
        ) : (
          <article style={{ maxWidth: 760, margin: "0 auto" }}>

            <Link to="/blog" style={{ display: "inline-flex", alignItems: "center", gap: 6, color: "var(--accent)", textDecoration: "none", fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.85rem", marginBottom: 32 }}>
              <i className="fas fa-arrow-left"></i> Back to articles
            </Link>

            {/* Featured Image */}
            {post.featured_image && (
              <img
                src={post.featured_image}
                alt={post.title}
                style={{ width: "100%", maxHeight: 450, objectFit: "cover", borderRadius: 16, marginBottom: 40, border: "1px solid var(--border)" }}
              />
            )}

            {/* Title */}
            <h1 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text)", lineHeight: 1.15, marginBottom: 24, letterSpacing: "-0.02em" }}>
              {post.title}
            </h1>

            {/* Date */}
            {post.created_at && (
              <div style={{ display: "flex", alignItems: "center", gap: 8, color: "var(--muted)", fontFamily: "'Inter',sans-serif", fontSize: "0.85rem", marginBottom: 40, borderBottom: "1px solid var(--border)", paddingBottom: 24 }}>
                <i className="far fa-calendar-alt"></i>
                <time>{new Date(post.created_at).toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" })}</time>
              </div>
            )}

            {/* Excerpt */}
            {post.excerpt && (
              <p style={{ color: "var(--text)", fontSize: "1.15rem", lineHeight: 1.7, marginBottom: 40, fontWeight: 500 }}>
                {post.excerpt}
              </p>
            )}

            {/* Content */}
            {post.content ? (
              <div className="prose-dark" dangerouslySetInnerHTML={{ __html: post.content }} />
            ) : (
              <p style={{ color: "var(--muted)", fontSize: "1.1rem", lineHeight: 1.8 }}>No content added yet.</p>
            )}

            {/* Keywords */}
            {post.keywords?.length > 0 && (
              <div style={{ display: "flex", flexWrap: "wrap", gap: 12, marginTop: 48, paddingTop: 32, borderTop: "1px solid var(--border)" }}>
                {post.keywords.map((tag, i) => (
                  <span
                    key={i}
                    style={{ background: "var(--hamburger-bg)", border: "1px solid var(--border)", color: "var(--muted)", padding: "6px 14px", borderRadius: 50, fontSize: "0.75rem", fontFamily: "'Poppins',sans-serif", textTransform: "uppercase", letterSpacing: "0.05em" }}
                  >
                    #{tag}
                  </span>
                ))}
              </div>
            )}
          </article>
        )}
      </main>

      {/* Basic typography resets for dynamic Blog html content */}
      <style>{`
        .prose-dark {
          color: var(--text);
          font-family: 'Inter', sans-serif;
          line-height: 1.8;
          font-size: 1.05rem;
        }
        .prose-dark p { margin-bottom: 24px; color: var(--muted); }
        .prose-dark h2 { font-family: 'Poppins', sans-serif; font-size: 1.8rem; font-weight: 700; color: var(--text); margin: 48px 0 20px; }
        .prose-dark h3 { font-family: 'Poppins', sans-serif; font-size: 1.4rem; font-weight: 600; color: var(--text); margin: 32px 0 16px; }
        .prose-dark a { color: var(--accent); text-decoration: none; border-bottom: 1px solid transparent; transition: border-color 0.2s; }
        .prose-dark a:hover { border-color: var(--accent); }
        .prose-dark ul, .prose-dark ol { margin-bottom: 24px; padding-left: 24px; color: var(--muted); }
        .prose-dark li { margin-bottom: 10px; }
        .prose-dark strong { color: var(--text); font-weight: 600; }
        .prose-dark img { max-width: 100%; border-radius: 12px; margin: 32px 0; border: 1px solid var(--border); }
      `}</style>
      <Footer />
    </>
  );
}
