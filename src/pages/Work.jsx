import { useState } from "react";
import { Link } from "react-router-dom";
import Layout from "../common/Layout";
import SEO, { organizationSchema, breadcrumbSchema } from "../components/SEO";
import PageHero from "../components/PageHero";
import CaseStudyCard from "../components/CaseStudyCard";
import Reveal from "../components/Reveal";
import { clients, workCategories } from "../data/clients";

export default function Work() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? clients : clients.filter((c) => c.category === active);

  return (
    <Layout>
      <SEO
        title="Our Work — Case Studies"
        description="Verified client engagements from Brainlink Softwares, including problem, approach and outcome for each project."
        path="/work"
        jsonLd={[organizationSchema, breadcrumbSchema([{ name: "Home", path: "/" }, { name: "Work", path: "/work" }])]}
      />

      <PageHero
        label="Our Work"
        title="Case Studies"
        subtitle="Verified engagements only — no invented clients, metrics or results. Our public case-study library grows as current software and web projects are completed and cleared for release."
      />

      <section className="section">
        <div className="container">
          <div role="group" aria-label="Filter projects by category" style={{ display: "flex", gap: 10, flexWrap: "wrap", justifyContent: "center", marginBottom: 48 }}>
            {workCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                aria-pressed={active === cat}
                style={{
                  padding: "9px 20px",
                  borderRadius: 50,
                  fontFamily: "'Poppins',sans-serif",
                  fontWeight: 600,
                  fontSize: "0.82rem",
                  cursor: "pointer",
                  border: active === cat ? "1px solid var(--accent)" : "1px solid var(--border)",
                  background: active === cat ? "rgba(var(--accent-rgb),0.1)" : "transparent",
                  color: active === cat ? "var(--accent)" : "var(--muted)",
                  transition: "all 0.2s",
                }}
              >
                {cat}
              </button>
            ))}
          </div>

          {filtered.length > 0 ? (
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, maxWidth: 820, margin: "0 auto" }}>
              {filtered.map((c) => (
                <Reveal key={c.name}>
                  <CaseStudyCard client={c} detailed />
                </Reveal>
              ))}
            </div>
          ) : (
            <p style={{ textAlign: "center", color: "var(--muted)" }}>No projects in this category yet.</p>
          )}
        </div>
      </section>

      <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "80px 24px", textAlign: "center" }}>
        <div className="container">
          <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(1.6rem,4vw,2.4rem)", color: "var(--text)", marginBottom: 14 }}>
            Want to be our next case study?
          </h2>
          <p style={{ color: "var(--muted)", fontSize: "0.95rem", marginBottom: 32, maxWidth: 440, margin: "0 auto 32px", lineHeight: 1.75 }}>
            Tell us what you're building and we'll give you an honest read on scope and approach.
          </p>
          <Link to="/contact" className="btn-primary" style={{ padding: "14px 32px" }}>Start a Project</Link>
        </div>
      </section>
    </Layout>
  );
}
