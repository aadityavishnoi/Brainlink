import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";
import auraaLogo from "../assets/clients/image.png";


/* ─── Data ─────────────────────────────────────────── */
/* ─── Data ─────────────────────────────────────────── */
const coreServices = [
  { icon: <i className="fas fa-code"></i>, title: "Custom Software Development", desc: "Tailored software solutions designed to solve your complex business challenges and drive efficiency." },
  { icon: <i className="fas fa-laptop-code"></i>, title: "Web Design & Development", desc: "Stunning, high-performance websites that blend modern aesthetics with seamless user experiences." },
  { icon: <i className="fas fa-tools"></i>, title: "Support & Maintenance", desc: "Proactive software support and long-term maintenance to keep your digital assets secure and updated." },
];

const steps = [
  { n: "01", title: "Analyze Requirements", desc: "We understand your specific needs for software or web solutions." },
  { n: "02", title: "Strategic Planning", desc: "Designing the architecture and roadmap for your custom project." },
  { n: "03", title: "Development & Testing", desc: "Writing and testing code to ensure a bug-free, high-performance product." },
  { n: "04", title: "Deployment", desc: "Launching your web page or software into production with care." },
  { n: "05", title: "Continuous Support", desc: "Regular maintenance and support to keep your software updated and secure." },
];

const plans = [
  {
    name: "Standard",
    price: "₹9,999",
    period: "/project",
    tag: null,
    desc: "Perfect for basic web design and software needs.",
    features: [
      "Custom Web Page Design",
      "Responsive Layout",
      "Basic Software Support",
      "Software Testing",
      "Deployment Assistance",
    ],
    cta: "Choose Standard",
    highlight: false,
  },
  {
    name: "Professional",
    price: "₹19,999",
    period: "/mo",
    tag: "Most Popular",
    desc: "For businesses needing ongoing development & support.",
    features: [
      "Custom Computer Programming",
      "Advanced Web Solutions",
      "Regular Feature Updates",
      "24/7 Maintenance",
      "Priority Bug Fixes",
      "API Integrations",
    ],
    cta: "Choose Professional",
    highlight: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    tag: null,
    desc: "Full-scale software support and complex dev projects.",
    features: [
      "Dedicated Dev Team",
      "Legacy Code Maintenance",
      "Scalable Software Support",
      "Complex System Architecture",
      "Monthly Code Audits",
      "Strategic Consultancy",
    ],
    cta: "Contact Us",
    highlight: false,
  },
];

const clients = [
  {
    name: "FORM AURAA ARCHITECTS",
    tagline: "Architecture | Interior | Landscape | Structure",
    logo: auraaLogo,
    service: "Video Editing & Production",
    contact: "Ar. Kushagra Raj | Ar. Saurav Sharma",
    location: "Greater Noida, UP",
    desc: "We handled their visual storytelling, providing premium video editing and production services to showcase their architectural masterpieces."
  }
];


/* ─── Component ───────────────────────────────────── */
export default function Index() {

  useEffect(() => {
    document.title = "Brainlink Softwares | Software Development & Web Design";
    const sm = (n, c) => { let el = document.querySelector(`meta[name='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    sm("description", "Brainlink Softwares specializes in custom software development, web designing, and maintenance services (NIC 62011, 62012, 62013).");
  }, []);

  return (
    <>
      <Header />
      <main>

        {/* ── HERO ─────────────────────────────────────────────── */}
        <section
          id="hero"
          style={{
            minHeight: "90vh",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            textAlign: "center",
            padding: "80px 24px 64px",
            background: "radial-gradient(ellipse at 50% 0%, rgba(79,110,247,0.12) 0%, transparent 65%), var(--bg)",
          }}
        >
          <div style={{ maxWidth: 760, margin: "0 auto" }}>
            <span className="label">Digital Agency — Uttar Pradesh</span>

            <h1 style={{
              fontSize: "clamp(2.2rem, 6vw, 4rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.1,
              marginBottom: 24,
              letterSpacing: "-0.03em",
            }}>
              Engineering <span style={{ color: "var(--accent)" }}>Digital Excellence.</span>
            </h1>

            <p style={{
              fontSize: "clamp(1.1rem, 2vw, 1.25rem)",
              color: "var(--muted)",
              lineHeight: 1.7,
              marginBottom: 40,
              maxWidth: 640,
              margin: "0 auto 40px",
            }}>
              We build high-performance software solutions and premium web experiences tailored to your business goals. Scalable, secure, and supported 24/7.
            </p>

            <div style={{ display: "flex", gap: 12, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                Get Started
              </Link>
              <Link to="/contact" className="btn-secondary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                Get Free Audit
              </Link>
            </div>
          </div>
        </section>

        {/* ── SERVICES ─────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">

            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="label">What We Do</span>
              <h2 className="section-title">Core Software & Web Solutions</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                Specialized in Computer Programming, Web Page Designing, and Software Support.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24 }}>
              {coreServices.map((s, i) => (
                <div key={i} className="card">
                  <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{s.icon}</div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                  <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* ── CLIENTS ───────────────────────────────────────────── */}
        <section className="section" style={{ background: "var(--bg)", borderBottom: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 56 }}>
              <span className="label">Our Clients</span>
              <h2 className="section-title">Trusted by Industry Leaders</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                Helping businesses build a premium brand through quality content and strategic marketing.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 32 }}>
              {clients.map((c, i) => (
                <div key={i} className="card" style={{
                  background: "var(--bg-card)",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: 32,
                  display: "flex",
                  flexDirection: "column",
                  gap: 20,
                  transition: "transform 0.3s ease",
                }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
                    <div style={{
                      width: 64, height: 64, borderRadius: 12,
                      background: "#064e3b", // Matching the logo's dark green background
                      padding: 4, display: "flex", alignItems: "center", justifyContent: "center",
                      overflow: "hidden", border: "1px solid rgba(255,255,255,0.1)"
                    }}>
                      <img src={c.logo} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "contain" }} />
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 2 }}>{c.name}</h3>
                      <p style={{ fontSize: "0.75rem", color: "var(--accent)", fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em" }}>{c.tagline}</p>
                    </div>
                  </div>

                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: "0.9rem", color: "var(--muted)", lineHeight: 1.6, marginBottom: 16 }}>{c.desc}</p>
                    <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                      <span style={{ fontSize: "0.75rem", background: "rgba(79,110,247,0.1)", color: "var(--accent)", padding: "4px 10px", borderRadius: 4, border: "1px solid rgba(79,110,247,0.2)" }}>
                        <i className="fas fa-video" style={{ marginRight: 6 }}></i> {c.service}
                      </span>
                    </div>
                  </div>

                  <div style={{ paddingTop: 16, borderTop: "1px solid var(--border)", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <div style={{ fontSize: "0.8rem", color: "var(--muted2)" }}>
                      <i className="fas fa-user-tie" style={{ marginRight: 6 }}></i> {c.contact}
                    </div>
                    <div style={{ fontSize: "0.8rem", color: "var(--muted2)" }}>
                      <i className="fas fa-map-marker-alt" style={{ marginRight: 6 }}></i> {c.location}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>


        {/* ── HOW IT WORKS ─────────────────────────────────────── */}
        <section className="section" id="how">
          <div className="container">
            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="label">Our Process</span>
              <h2 className="section-title">How It Works</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                A clear, proven process — so you always know what's happening next.
              </p>
            </div>

            <div style={{ display: "flex", flexDirection: "column", gap: 0, position: "relative", maxWidth: 680, margin: "0 auto" }}>
              {/* Vertical line */}
              <div style={{ position: "absolute", left: 23, top: 0, bottom: 0, width: 2, background: "linear-gradient(to bottom, var(--accent), rgba(79,110,247,0.1))", zIndex: 0 }} />

              {steps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 24, paddingBottom: i < steps.length - 1 ? 40 : 0, position: "relative", zIndex: 1 }}>
                  {/* Number circle */}
                  <div style={{
                    width: 48, height: 48, borderRadius: "50%",
                    background: "var(--bg-card)",
                    border: "2px solid var(--accent)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                    fontFamily: "'Poppins',sans-serif",
                    fontWeight: 700,
                    fontSize: "0.8rem",
                    color: "var(--accent)",
                  }}>{s.n}</div>
                  {/* Content */}
                  <div style={{ paddingTop: 10 }}>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 6 }}>{s.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── ABOUT ────────────────────────────────────────────── */}
        <section id="about" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
          <div className="container section">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="about-grid">
              <div>
                <span className="label">Who We Are</span>
                <h2 className="section-title">Software Engineers & Web Designers</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.95rem", marginTop: 16 }}>
                  We're a team of software engineers and designers — a registered <strong>MSME (UDYAM-UP-59-0113622)</strong> enterprise. Based in Uttar Pradesh, we specialize in high-quality computer programming, custom web designing, and long-term software maintenance for businesses.
                </p>
                <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.95rem", marginTop: 16 }}>
                  No outsourcing. No fluff. You talk directly to the people building and running your campaigns.
                </p>
                <Link to="/contact" className="btn-primary" style={{ marginTop: 32, display: "inline-flex" }}>
                  Let's Talk
                </Link>
              </div>

              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                {[
                  { n: "1+", l: "Years in Market" },
                  { n: "100%", l: "Honesty & Transparency" },
                  { n: "100%", l: "In-house Team" },
                  { n: "24/7", l: "Support" },
                ].map((s, i) => (
                  <div key={i} style={{
                    background: "var(--bg-card2)", border: "1px solid var(--border)",
                    borderRadius: 12, padding: "28px 20px", textAlign: "center",
                  }}>
                    <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "2rem", color: "var(--accent)" }}>{s.n}</div>
                    <div style={{ fontSize: "0.85rem", color: "var(--muted)", marginTop: 4 }}>{s.l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <style>{`.about-grid { @media (max-width:768px) { grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ── PRICING ──────────────────────────────────────────── */}
        <section className="section" id="pricing">
          <div className="container">

            <div style={{ textAlign: "center", marginBottom: 64 }}>
              <span className="label">Pricing</span>
              <h2 className="section-title">Simple, Transparent Pricing</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                No hidden charges. Pick the plan that fits your stage.
              </p>
            </div>

            <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))", gap: 24, alignItems: "start" }}>
              {plans.map((p, i) => (
                <div
                  key={i}
                  style={{
                    background: p.highlight ? "rgba(79,110,247,0.08)" : "var(--bg-card)",
                    border: p.highlight ? "2px solid var(--accent)" : "1px solid var(--border)",
                    borderRadius: 16,
                    padding: 36,
                    position: "relative",
                    transition: "transform 0.2s",
                  }}
                >
                  {p.tag && (
                    <div style={{
                      position: "absolute", top: -14, left: "50%", transform: "translateX(-50%)",
                      background: "var(--accent)", color: "#fff",
                      fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.75rem",
                      padding: "4px 16px", borderRadius: 50, whiteSpace: "nowrap",
                    }}>{p.tag}</div>
                  )}

                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.1rem", color: "#fff", marginBottom: 6 }}>{p.name}</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--muted)", marginBottom: 20 }}>{p.desc}</p>

                  <div style={{ marginBottom: 28 }}>
                    <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "2.2rem", color: "#fff" }}>{p.price}</span>
                    <span style={{ color: "var(--muted)", fontSize: "0.9rem" }}>{p.period}</span>
                  </div>

                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12, marginBottom: 32 }}>
                    {p.features.map((f, fi) => (
                      <li key={fi} style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.5 }}>
                        <span style={{ color: "#34d399", flexShrink: 0, marginTop: 2 }}>✓</span>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    style={{
                      display: "block", textAlign: "center",
                      fontFamily: "'Poppins',sans-serif", fontWeight: 600,
                      fontSize: "0.875rem", padding: "12px 24px", borderRadius: 8,
                      textDecoration: "none",
                      background: p.highlight ? "var(--accent)" : "transparent",
                      color: p.highlight ? "#fff" : "var(--accent)",
                      border: p.highlight ? "none" : "1px solid rgba(79,110,247,0.4)",
                      transition: "all 0.2s",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.opacity = "0.85";
                      e.currentTarget.style.transform = "translateY(-1px)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.opacity = "1";
                      e.currentTarget.style.transform = "translateY(0)";
                    }}
                  >
                    {p.cta}
                  </Link>
                </div>
              ))}
            </div>

            <p style={{ textAlign: "center", marginTop: 32, fontSize: "0.83rem", color: "var(--muted2)" }}>
              Not sure which plan? <Link to="/contact" style={{ color: "var(--accent)", textDecoration: "none", fontWeight: 500 }}>Let's talk — it's free.</Link>
            </p>
          </div>
        </section>

        {/* ── INTERNSHIPS ────────────────────────────────────── */}
        <section id="careers" className="section" style={{ background: "var(--bg)", borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center" }} className="careers-grid">
              <div style={{ order: 2 }}>
                <span className="label">Careers</span>
                <h2 className="section-title">Join Our Team</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginTop: 20 }}>
                  Are you a college student or a fresh graduate looking for real-world experience? We're regularly hiring interns for software development, web designing, and technical support.
                </p>
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 16, marginTop: 24, marginBottom: 32 }}>
                  {[
                    { t: "Practical Learning", d: "Work on live projects with experienced mentors." },
                    { t: "Official Certification", d: "Get an MSME-verified internship certificate for your college credits." },
                    { t: "Skill Growth", d: "Learn modern tech stacks (React, Node, Cloud) in a professional setting." },
                  ].map((item, i) => (
                    <li key={i} style={{ display: "flex", gap: 12 }}>
                      <span style={{ color: "#34d399", fontWeight: "bold" }}>✓</span>
                      <div>
                        <strong style={{ color: "#fff", display: "block", fontSize: "0.95rem" }}>{item.t}</strong>
                        <span style={{ color: "var(--muted2)", fontSize: "0.85rem" }}>{item.d}</span>
                      </div>
                    </li>
                  ))}
                </ul>
                <a href="mailto:team.brainlink@gmail.com?subject=Internship Application" className="btn-secondary">
                  Apply for Internship
                </a>
              </div>

              <div style={{ order: 1 }}>
                <div style={{ position: "relative", padding: "40px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 24 }}>
                  <div style={{ position: "absolute", top: -20, right: -20, width: 80, height: 80, background: "var(--accent)", borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", transform: "rotate(15deg)", boxShadow: "0 10px 30px rgba(79,110,247,0.4)" }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: "0.8rem", textAlign: "center" }}>HIRING NOW</span>
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.2rem", color: "#fff", marginBottom: 12 }}>Available Positions</h3>
                  <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                    {["Software Development Intern", "Web Design Intern", "Technical Support Intern"].map((pos, i) => (
                      <div key={i} style={{ padding: "16px", background: "rgba(255,255,255,0.03)", border: "1px solid rgba(255,255,255,0.08)", borderRadius: 12, color: "var(--muted)" }}>
                        {pos}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
          <style>{`.careers-grid { @media (max-width:768px) { grid-template-columns:1fr !important; } }`}</style>
        </section>

        {/* ── CTA ──────────────────────────────────────────────── */}
        <section style={{
          background: "radial-gradient(ellipse at 50% 100%, rgba(79,110,247,0.15) 0%, transparent 70%), var(--bg-card)",
          borderTop: "1px solid var(--border)",
          padding: "100px 24px",
          textAlign: "center",
        }}>
          <div className="container">
            <span className="label">Ready?</span>
            <h2 style={{
              fontFamily: "'Poppins',sans-serif",
              fontWeight: 800,
              fontSize: "clamp(2rem, 5vw, 3.2rem)",
              color: "#fff",
              marginBottom: 20,
              letterSpacing: "-0.02em",
            }}>
              Let's Grow Your Business
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 40, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 40px" }}>
              Book a free 20-minute call or drop us a message on WhatsApp. No pressure, no obligation.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                <i className="fas fa-phone-alt"></i> Book a Call
              </Link>
              <a
                href="https://wa.me/918126280200?text=Hi,%20Brainlink%20Softwares"
                className="btn-whatsapp"
                style={{ fontSize: "0.95rem", padding: "14px 32px" }}
              >
                <i className="fab fa-whatsapp" style={{ color: "#fff" }}></i> Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

      </main>

      {/* WhatsApp FAB */}
      <a
        href="https://wa.me/918126280200?text=Hi,%20Brainlink%20Softwares"
        aria-label="WhatsApp"
        style={{
          position: "fixed", bottom: 24, right: 24, zIndex: 999,
          width: 52, height: 52, borderRadius: "50%",
          background: "#25D366",
          display: "flex", alignItems: "center", justifyContent: "center",
          fontSize: "1.5rem",
          boxShadow: "0 4px 20px rgba(37,211,102,0.4)",
          textDecoration: "none",
          transition: "transform 0.2s, box-shadow 0.2s",
        }}
        onMouseEnter={e => { e.currentTarget.style.transform = "scale(1.1)"; }}
        onMouseLeave={e => { e.currentTarget.style.transform = "scale(1)"; }}
      >
        <i className="fab fa-whatsapp" style={{ color: "#fff" }}></i>
      </a>

      <Footer />
    </>
  );
}