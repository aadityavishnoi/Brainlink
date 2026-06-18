import React from "react";
import logo from "../assets/logo/logo.png";
import "../index.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{
      background: "#0A0A0A",
      borderTop: "1px solid var(--border)",
      padding: "64px 24px 32px",
    }}>
      <div className="container">
        <div style={{
          display: "grid",
          gridTemplateColumns: "2fr 1fr 1fr",
          gap: 48,
          marginBottom: 48,
        }} className="footer-cols">

          {/* Brand */}
          <div>
            <a href="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <img src={logo} alt="Brainlink" style={{ height: 28, width: 28, objectFit: "contain" }} />
              <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.95rem", color: "#fff" }}>
                Brainlink <span style={{ color: "var(--accent)" }}>Softwares</span>
              </span>
            </a>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: 280, marginBottom: 24 }}>
              We build websites, apps and run digital marketing campaigns to help businesses grow online.
            </p>
            {/* Socials */}
            <div style={{ display: "flex", gap: 10 }}>
              {[
                { icon: "fab fa-linkedin-in", href: "https://www.linkedin.com/company/brainlinksoftwares/", label: "LinkedIn" },
                { icon: "fab fa-instagram", href: "https://www.instagram.com/brainlinksoftwares/", label: "Instagram" },
                { icon: "fab fa-x-twitter", href: "https://x.com/BrainlinkIndia", label: "Twitter" },
              ].map((s, i) => (
                <a
                  key={i}
                  href={s.href}
                  aria-label={s.label}
                  style={{
                    width: 36, height: 36, borderRadius: 8,
                    background: "rgba(255,255,255,0.05)",
                    border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--muted)",
                    textDecoration: "none",
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                >
                  <i className={s.icon} style={{ fontSize: "1rem" }} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Links</h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {[
                { l: "Home", h: "/" },
                { l: "Services", h: "/service" },
                { l: "Pricing", h: "/#pricing" },
                { l: "About", h: "/#about" },
                { l: "Blog", h: "/blog" },
                { l: "Contact", h: "/contact" },
              ].map((item, i) => (
                <li key={i}>
                  <a href={item.h} style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >{item.l}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.8rem", color: "#fff", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>Contact</h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a href="mailto:vishnoiaaditya29@gmail.com" style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", lineHeight: 1.5, transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <span><i className="fas fa-envelope"></i></span> vishnoiaaditya29@gmail.com
              </a>
              <a href="tel:+919412330177" style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
              >
                <span><i className="fas fa-phone-alt"></i></span> +91-94123-30177
              </a>
              <a href="https://wa.me/918126280200" style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "#25D366", textDecoration: "none" }}>
                <span><i className="fab fa-whatsapp"></i></span> WhatsApp Us
              </a>
              <p style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.8rem", color: "var(--muted2)", lineHeight: 1.5 }}>
                <span><i className="fas fa-map-marker-alt"></i></span> Meena Market Road, Kanth, Moradabad (244501)
              </p>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div style={{ height: 1, background: "var(--border)", marginBottom: 28 }} />

        {/* Bottom */}
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ fontSize: "0.8rem", color: "var(--muted2)" }}>
              © 2025–{year} Brainlink Softwares. All rights reserved.
            </p>
            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", opacity: 0.8 }}>
              MSME UDYAM: UDYAM-UP-59-0113622
            </p>
          </div>
          <p style={{ fontSize: "0.8rem", color: "var(--muted2)" }}>
            Built in Uttar Pradesh 🇮🇳
          </p>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-cols { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-cols { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
