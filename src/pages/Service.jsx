import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";
import { Link } from "react-router-dom";

const coreServices = [
  {
    icon: <i className="fas fa-code"></i>,
    title: "Custom Software Development",
    desc: "Writing, modifying, and testing computer programs to meet the specific needs of your business. We build scalable and high-performance software solutions.",
    features: ["NIC 62011 Compliant", "Custom Programming", "Rigorous Testing", "Legacy Code Modification"],
    color: "var(--accent)"
  },
  {
    icon: <i className="fas fa-laptop-code"></i>,
    title: "Premium Web Design",
    desc: "Professional web-page designing with a focus on user experience, performance, and modern aesthetics.",
    features: ["NIC 62012 Compliant", "Responsive UI/UX", "Interactive Elements", "Modern Frameworks"],
    color: "#34d399"
  },
  {
    icon: <i className="fas fa-tools"></i>,
    title: "Software Support & Maintenance",
    desc: "Providing reliable software support and maintenance to ensure your digital tools never stop working for you.",
    features: ["NIC 62013 Compliant", "24/7 Monitoring", "Bug Fixes & Updates", "Technical Assistance"],
    color: "#fbbf24"
  },
];

export default function Service() {
  useEffect(() => {
    document.title = "Services | Brainlink Softwares";
  }, []);

  return (
    <>
      <Header />
      <main>

        {/* Page Hero */}
        <section style={{
          padding: "80px 24px 64px",
          textAlign: "center",
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,110,24,0.1) 0%, transparent 65%), var(--bg)",
        }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <span className="label">Our Services</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Custom Software & <span style={{ color: "var(--accent)" }}>Web Solutions.</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
              Dedicated to Computer Programming, Web Designing, and Enterprise Software Support.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
              Start Your Project
            </Link>
          </div>
        </section>

        {/* Core Services */}
        <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              {coreServices.map((s, i) => (
                <div key={i} className="card" style={{ borderTop: `4px solid ${s.color}` }}>
                  <div style={{ fontSize: "2.5rem", marginBottom: 20, color: s.color }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.25rem", color: "#fff", marginBottom: 14 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.95rem", color: "var(--muted)", lineHeight: 1.8, marginBottom: 24 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 24 }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", gap: 10, fontSize: "0.9rem", color: "var(--muted)" }}>
                        <span style={{ color: s.color, flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{ display: "inline-block", fontSize: "0.9rem", fontWeight: 600, color: s.color, fontFamily: "'Poppins',sans-serif", textDecoration: "none", transition: "opacity 0.2s" }} onMouseEnter={e=>e.target.style.opacity=0.8} onMouseLeave={e=>e.target.style.opacity=1}>
                    Start Discussion →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", padding: "80px 24px", textAlign: "center" }}>
          <div className="container">
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(1.8rem,4vw,2.8rem)", color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Not sure where to start?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 36, lineHeight: 1.75, maxWidth: 440, margin: "0 auto 36px" }}>
              Tell us about your business. We'll recommend what will actually work for you — no upselling.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ padding: "14px 32px" }}>Get Free Audit</Link>
              <a href="https://wa.me/918126280200" className="btn-whatsapp" style={{ padding: "14px 32px" }}><i className="fab fa-whatsapp" style={{ color: "#fff" }}></i> WhatsApp Us</a>
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}