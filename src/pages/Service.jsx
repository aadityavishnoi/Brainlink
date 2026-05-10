import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";
import { Link } from "react-router-dom";

const devServices = [
  { icon: <i className="fas fa-globe"></i>, title: "Website Development", desc: "Fast, SEO-ready websites built to convert visitors into paying customers. From simple business sites to full web applications.", features: ["Responsive Design", "SEO Optimised", "Fast Load Speed", "CMS Integration"] },
  { icon: <i className="fas fa-mobile-alt"></i>, title: "App Development", desc: "Android & iOS mobile apps built for real users. We handle design, development, and Play Store / App Store deployment.", features: ["Android & iOS", "Cross-Platform", "API Integration", "Store Deployment"] },
  { icon: <i className="fas fa-bullseye"></i>, title: "Landing Pages", desc: "High-converting single pages built around your offer — for ads, campaigns, or direct sales.", features: ["Conversion Focused", "A/B Test Ready", "Fast Performance", "Lead Capture Forms"] },
];

const mktServices = [
  { icon: <i className="fab fa-instagram"></i>, title: "Instagram Growth", desc: "Specialised content strategy for Architects & Interior Designers. We handle everything from on-site reel shooting to premium editing and organic growth.", features: ["On-site Reel Shooting", "Premium Video Editing", "Niche-Specific Strategy", "Monthly Analytics"] },
  { icon: <i className="fab fa-whatsapp"></i>, title: "WhatsApp Marketing", desc: "Targeted broadcast campaigns to your customer base — 98% open rate, real results.", features: ["Bulk Broadcasts", "Drip Campaigns", "Lead Nurturing", "Catalogue Setup"] },
  { icon: <i className="fas fa-bullhorn"></i>, title: "Meta & Google Ads", desc: "Paid advertising that brings qualified leads, not just impressions.", features: ["Campaign Strategy", "Ad Creatives", "Audience Targeting", "ROI Reporting"] },
  { icon: <i className="fas fa-search"></i>, title: "SEO", desc: "Rank on Google and get free, organic traffic that compounds month after month.", features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Monthly Reports"] },
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
          background: "radial-gradient(ellipse at 50% 0%, rgba(79,110,247,0.1) 0%, transparent 65%), var(--bg)",
        }}>
          <div style={{ maxWidth: 620, margin: "0 auto" }}>
            <span className="label">Our Services</span>
            <h1 style={{ fontSize: "clamp(2rem, 5vw, 3.2rem)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Build. Market. <span style={{ color: "var(--accent)" }}>Grow.</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "1rem", lineHeight: 1.8, marginBottom: 32 }}>
              Everything your business needs to establish an online presence and attract real customers.
            </p>
            <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
              Get Free Audit
            </Link>
          </div>
        </section>

        {/* Development */}
        <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)" }}>◆ Development</span>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))", gap: 24 }}>
              {devServices.map((s, i) => (
                <div key={i} className="card" style={{ borderLeft: "2px solid rgba(79,110,247,0.4)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", gap: 8, fontSize: "0.83rem", color: "var(--muted)" }}>
                        <span style={{ color: "var(--accent)", flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{ display: "inline-block", marginTop: 24, fontSize: "0.85rem", fontWeight: 600, color: "var(--accent)", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                    Discuss this →
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Marketing */}
        <section className="section" style={{ borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 40 }}>
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#34d399" }}>◆ Marketing</span>
              <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))", gap: 24 }}>
              {mktServices.map((s, i) => (
                <div key={i} className="card" style={{ borderLeft: "2px solid rgba(52,211,153,0.35)" }}>
                  <div style={{ fontSize: "2rem", marginBottom: 16 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.05rem", color: "#fff", marginBottom: 10 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75, marginBottom: 20 }}>{s.desc}</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8 }}>
                    {s.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", gap: 8, fontSize: "0.83rem", color: "var(--muted)" }}>
                        <span style={{ color: "#34d399", flexShrink: 0 }}>✓</span> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" style={{ display: "inline-block", marginTop: 24, fontSize: "0.85rem", fontWeight: 600, color: "#34d399", fontFamily: "'Poppins',sans-serif", textDecoration: "none" }}>
                    Discuss this →
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