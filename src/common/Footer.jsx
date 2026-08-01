import React from "react";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUp, Brain } from "lucide-react";
import { LinkedInIcon, InstagramIcon, XIcon, WhatsAppIcon } from "../components/icons/BrandIcons";
import FloatingClouds from "../components/FloatingClouds";
import { siteConfig } from "../data/siteConfig";
import logo from "../assets/logo/logo.png";
import "../index.css";

const quickLinks = [
  { l: "Home", h: "/" },
  { l: "Services", h: "/services" },
  { l: "Work", h: "/work" },
  { l: "About", h: "/about" },
  { l: "Pricing", h: "/pricing" },
  { l: "Careers", h: "/careers" },
  { l: "Insights", h: "/blog" },
  { l: "Contact", h: "/contact" },
];

const legalLinks = [
  { l: "Privacy Policy", h: "/privacy-policy" },
  { l: "Terms & Conditions", h: "/terms" },
];

const socials = [
  { Icon: LinkedInIcon, href: siteConfig.social.linkedin, label: "LinkedIn" },
  { Icon: InstagramIcon, href: siteConfig.social.instagram, label: "Instagram" },
  { Icon: XIcon, href: siteConfig.social.x, label: "X (Twitter)" },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--border)", background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-violet) 100%)" }}>
      {/* horizon skyline */}
      <div aria-hidden="true" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        <FloatingClouds variant="footer" />
        <svg viewBox="0 0 1200 140" preserveAspectRatio="none" style={{ position: "absolute", bottom: 0, left: 0, width: "100%", height: 120, opacity: 0.5 }}>
          <polygon points="0,140 0,70 60,70 60,40 110,40 110,90 170,90 170,20 230,20 230,80 300,80 300,50 360,50 360,100 430,100 430,60 500,60 500,95 580,95 580,30 650,30 650,85 720,85 720,55 790,55 790,100 860,100 860,45 930,45 930,90 1000,90 1000,60 1070,60 1070,100 1140,100 1140,65 1200,65 1200,140" fill="var(--bg-card2)" />
        </svg>
        <div style={{ position: "absolute", top: 8, left: "50%", transform: "translateX(-50%)" }}>
          <div
            className="float-anim"
            style={{
              width: 46, height: 46, borderRadius: "50%",
              background: "radial-gradient(circle, rgba(74,114,255,0.35), transparent 70%)",
            }}
          />
        </div>
      </div>

      <div className="container" style={{ position: "relative", padding: "72px 24px 32px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "2fr 1fr 1fr", gap: 48, marginBottom: 48 }} className="footer-cols">

          <div>
            <Link to="/" style={{ display: "inline-flex", alignItems: "center", gap: 10, textDecoration: "none", marginBottom: 16 }}>
              <img src={logo} alt="" style={{ height: 28, width: 28, objectFit: "contain" }} />
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.95rem", color: "var(--text)" }}>
                Brainlink <span className="text-gradient">Softwares</span>
              </span>
            </Link>
            <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.75, maxWidth: 300, marginBottom: 24 }}>
              A software engineering and digital product studio designing and building scalable web, mobile and SaaS
              solutions for startups and growing businesses.
            </p>
            <div style={{ display: "flex", gap: 10 }}>
              {socials.map(({ Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  style={{
                    width: 36, height: 36, borderRadius: 10,
                    background: "var(--bg-card)", border: "1px solid var(--border)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    color: "var(--muted)", textDecoration: "none", transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = "var(--accent)"; e.currentTarget.style.color = "var(--accent)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--muted)"; }}
                >
                  <Icon width={16} height={16} />
                </a>
              ))}
            </div>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              Company
            </h4>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 12 }}>
              {quickLinks.map((item) => (
                <li key={item.l}>
                  <Link
                    to={item.h}
                    style={{ fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                    onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
                  >
                    {item.l}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.8rem", color: "var(--text)", textTransform: "uppercase", letterSpacing: "0.08em", marginBottom: 20 }}>
              Contact
            </h4>
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <a
                href={`mailto:${siteConfig.email}`}
                style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", lineHeight: 1.5, transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <Mail size={16} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" /> {siteConfig.email}
              </a>
              <a
                href={siteConfig.phoneHref}
                style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "var(--muted)", textDecoration: "none", transition: "color 0.2s" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--accent)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted)")}
              >
                <Phone size={16} aria-hidden="true" /> {siteConfig.phone}
              </a>
              <a
                href={siteConfig.whatsappHref()}
                target="_blank"
                rel="noopener noreferrer"
                style={{ display: "flex", gap: 10, alignItems: "center", fontSize: "0.875rem", color: "#1EBE59", textDecoration: "none" }}
              >
                <WhatsAppIcon width={16} height={16} /> WhatsApp Us
              </a>
              <p style={{ display: "flex", gap: 10, alignItems: "flex-start", fontSize: "0.8rem", color: "var(--muted2)", lineHeight: 1.5 }}>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden="true" /> {siteConfig.address}
              </p>
            </div>
          </div>
        </div>

        <div style={{ height: 1, background: "var(--border)", marginBottom: 28 }} />

        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 16 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 4 }}>
            <p style={{ fontSize: "0.8rem", color: "var(--muted2)", display: "flex", alignItems: "center", gap: 6 }}>
              <Brain size={13} aria-hidden="true" /> © 2025–{year} Brainlink Softwares. All rights reserved.
            </p>
            <p style={{ fontSize: "0.7rem", color: "var(--muted2)", opacity: 0.8 }}>
              MSME UDYAM: {siteConfig.msmeUdyam}
            </p>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
            {legalLinks.map((item) => (
              <Link
                key={item.l}
                to={item.h}
                style={{ fontSize: "0.8rem", color: "var(--muted2)", textDecoration: "none" }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "var(--text)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "var(--muted2)")}
              >
                {item.l}
              </Link>
            ))}
            <button
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              style={{
                display: "flex", alignItems: "center", gap: 6, background: "none", border: "none",
                color: "var(--muted2)", fontSize: "0.8rem", cursor: "pointer", padding: 0, fontFamily: "var(--font-body)",
              }}
            >
              Back to top <ArrowUp size={14} aria-hidden="true" />
            </button>
          </div>
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
