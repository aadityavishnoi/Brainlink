import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";
import auraaLogo from "../assets/clients/auraa-logo.png";


/* ─── Data ─────────────────────────────────────────── */
const devServices = [
  { icon: <i className="fas fa-globe"></i>, title: "Website Development", desc: "Fast, SEO-ready websites that convert visitors into customers." },
  { icon: <i className="fas fa-mobile-alt"></i>, title: "App Development", desc: "Android & iOS apps built for scale and performance." },
  { icon: <i className="fas fa-bullseye"></i>, title: "Landing Pages", desc: "High-converting pages designed around your offer." },
];

const mktServices = [
  { icon: <i className="fab fa-instagram"></i>, title: "Instagram Growth", desc: "Consistent content, real engagement, real followers." },
  { icon: <i className="fab fa-whatsapp"></i>, title: "WhatsApp Marketing", desc: "Broadcast campaigns that get read — 98% open rate." },
  { icon: <i className="fas fa-bullhorn"></i>, title: "Meta & Google Ads", desc: "Paid ads that bring leads, not just impressions." },
  { icon: <i className="fas fa-search"></i>, title: "SEO", desc: "Rank on Google and get free traffic month after month." },
];

const steps = [
  { n: "01", title: "Understand Your Business", desc: "We learn your goals, audience and competition before doing anything." },
  { n: "02", title: "Build Your Online Presence", desc: "Website, landing page or app — we set your foundation right." },
  { n: "03", title: "Launch Campaigns", desc: "We run ads, content and campaigns to put you in front of customers." },
  { n: "04", title: "Generate Leads", desc: "Calls, form fills, WhatsApp messages — real business enquiries." },
  { n: "05", title: "Scale Growth", desc: "Analyse, optimise, and grow month over month." },
];

const plans = [
  {
    name: "Starter",
    price: "₹7,999",
    period: "/mo",
    tag: null,
    desc: "Perfect for new businesses getting started online.",
    features: [
      "1 Static Website",
      "8 Reels/month",
      "Basic video editing",
      "3 WhatsApp campaigns",
      "6 Static posts",
    ],
    cta: "Choose Starter",
    highlight: false,
  },
  {
    name: "Growth",
    price: "₹13,999",
    period: "/mo",
    tag: "Most Popular",
    desc: "For businesses ready to seriously grow online.",
    features: [
      "16 Reels + 4 Free = 20 Reels",
      "12 Static posts",
      "Force editing",
      "Caption strategy",
      "6 WhatsApp campaigns",
      "1 PR Brand",
      "SEO",
    ],
    cta: "Choose Growth",
    highlight: true,
  },
  {
    name: "Premium",
    price: "₹19,999",
    period: "/mo",
    tag: null,
    desc: "Full-service package for established businesses.",
    features: [
      "Personalised guidance/consultancy",
      "24 + 6 Free = 30 Reels",
      "Premium editing",
      "9 WhatsApp campaigns",
      "3 PR Brand Articles",
      "18 Static posters",
    ],
    cta: "Choose Premium",
    highlight: false,
  },
];

const clients = [
  {
    name: "FORM AURAA ARCHITECTS",
    tagline: "Architecture | Interior | Landscape | Structure",
    logo: auraaLogo,
    service: "Reel Editing, Shooting & Marketing",
    contact: "Ar. Kushagra Raj | Ar. Saurav Sharma",
    location: "Greater Noida, UP",
    desc: "We handle their complete digital presence, from on-site reel shooting to premium editing and targeted marketing."
  }
];


/* ─── Component ───────────────────────────────────── */
export default function Index() {

  useEffect(() => {
    document.title = "Brainlink Softwares | Web Development & Digital Marketing";
    const sm = (n, c) => { let el = document.querySelector(`meta[name='${n}']`); if (!el) { el = document.createElement("meta"); el.setAttribute("name", n); document.head.appendChild(el); } el.setAttribute("content", c); };
    sm("description", "Brainlink Softwares builds websites, apps and runs digital marketing campaigns to help your business grow online.");
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
            <span className="label">Digital Agency — Greater Noida</span>

            <h1 style={{
              fontSize: "clamp(2rem, 5.5vw, 3.8rem)",
              fontWeight: 800,
              color: "#fff",
              lineHeight: 1.15,
              marginBottom: 24,
              letterSpacing: "-0.02em",
            }}>
              We Build Your Online Presence —{" "}
              <span style={{ color: "var(--accent)" }}>And Bring You Customers.</span>
            </h1>

            <p style={{
              fontSize: "clamp(1rem, 2vw, 1.15rem)",
              color: "var(--muted)",
              lineHeight: 1.8,
              marginBottom: 40,
              maxWidth: 580,
              margin: "0 auto 40px",
            }}>
              Websites, apps, ads, social media & WhatsApp marketing — everything you need to grow your business.
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
              <h2 className="section-title">Services Built Around Your Growth</h2>
              <p className="section-sub" style={{ margin: "0 auto" }}>
                Two pillars — build your presence, then drive customers to it.
              </p>
            </div>

            {/* Development */}
            <div style={{ marginBottom: 56 }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "var(--accent)" }}>
                  ◆ Development
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
                {devServices.map((s, i) => (
                  <div key={i} className="card">
                    <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Marketing */}
            <div>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 24 }}>
                <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.1em", color: "#34d399" }}>
                  ◆ Marketing
                </span>
                <div style={{ flex: 1, height: 1, background: "var(--border)" }} />
              </div>
              <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
                {mktServices.map((s, i) => (
                  <div key={i} className="card" style={{ borderLeft: "2px solid rgba(52,211,153,0.3)" }}>
                    <div style={{ fontSize: "1.8rem", marginBottom: 14 }}>{s.icon}</div>
                    <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "#fff", marginBottom: 8 }}>{s.title}</h3>
                    <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{s.desc}</p>
                  </div>
                ))}
              </div>
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
                <h2 className="section-title">Developers & Marketers — Under One Roof</h2>
                <p style={{ color: "var(--muted)", lineHeight: 1.85, fontSize: "0.95rem", marginTop: 16 }}>
                  We're a team of developers and digital marketers based in Greater Noida. We help small and medium businesses build a strong online presence and attract real customers through smart digital strategies.
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