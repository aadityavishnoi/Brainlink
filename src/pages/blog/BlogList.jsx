import Header from "../../common/Header";
import Footer from "../../common/Footer";
import BlogCard from "../../components/blog/BlogCard";
import { useEffect, useState } from "react";
import "../../index.css";

export default function BlogList() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    document.title = "Blog | Brainlink Softwares";
    fetch("/api/posts")
      .then(res => res.json())
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        console.error("Fetch error:", err);
        setPosts([]);
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Header />

      <main style={{ minHeight: "80vh" }}>
        {/* HERO / BLOG HEADER */}
        <section style={{
          padding: "80px 24px 64px",
          textAlign: "center",
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,110,247,0.1) 0%, transparent 65%), var(--bg)",
          borderBottom: "1px solid var(--border)",
        }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <span className="label">Insights & Knowledge</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Brainlink <span style={{ color: "var(--accent)" }}>Blog</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8 }}>
              Expert insights on custom software development, web engineering, and scalable enterprise solutions.
            </p>
          </div>
        </section>

        {/* MAIN CONTENT */}
        <section className="section">
          <div className="container">
            {loading ? (
              <div style={{ display: "flex", justifyContent: "center", padding: "64px 0" }}>
                <p style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, color: "var(--accent)", animation: "pulse 2s infinite" }}>
                  Loading articles...
                </p>
              </div>
            ) : posts.length === 0 ? (
              <div style={{ textAlign: "center", padding: "64px 0" }}>
                <i className="fas fa-pen-nib" style={{ fontSize: "3rem", color: "rgba(255,255,255,0.1)", marginBottom: 20 }}></i>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1.2rem", color: "#fff", marginBottom: 8 }}>No posts yet</h3>
                <p style={{ color: "var(--muted)" }}>Check back later for fresh insights.</p>
              </div>
            ) : (
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 32 }}>
                {posts.map((post) => (
                  <BlogCard
                    key={post.id}
                    post={post}
                  />
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
