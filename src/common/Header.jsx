import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Brain } from "lucide-react";
import logo from "../assets/logo/logo.png";
import "../index.css";

const navLinks = [
  { label: "Home", to: "/" },
  { label: "Services", to: "/services" },
  { label: "Work", to: "/work" },
  { label: "About", to: "/about" },
  { label: "Pricing", to: "/pricing" },
  { label: "Careers", to: "/careers" },
  { label: "Insights", to: "/blog" },
  { label: "Contact", to: "/contact" },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname } = useLocation();
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    fn();
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape" && open) {
        setOpen(false);
        menuBtnRef.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [open]);

  const linkStyle = (active) => ({
    fontFamily: "var(--font-body)",
    fontWeight: 600,
    fontSize: "0.86rem",
    color: active ? "var(--accent)" : "var(--muted)",
    textDecoration: "none",
    padding: "6px 4px",
    transition: "color 0.2s",
  });

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <div
        style={{
          position: "fixed",
          top: scrolled ? 10 : 20,
          left: 0,
          right: 0,
          zIndex: 1000,
          display: "flex",
          justifyContent: "center",
          padding: "0 16px",
          transition: "top 0.3s cubic-bezier(0.22,1,0.36,1)",
          pointerEvents: "none",
        }}
      >
        <nav
          aria-label="Primary"
          className="glass-card"
          style={{
            pointerEvents: "auto",
            width: "100%",
            maxWidth: scrolled ? 980 : 1080,
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: scrolled ? "8px 18px" : "12px 22px",
            transition: "max-width 0.3s cubic-bezier(0.22,1,0.36,1), padding 0.3s ease",
            boxShadow: "var(--shadow-md)",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }} data-cursor-label="Home">
            <span style={{ position: "relative", width: 32, height: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
              <span
                aria-hidden="true"
                className="float-anim"
                style={{
                  position: "absolute", inset: 0, borderRadius: "50%",
                  background: "linear-gradient(135deg, var(--accent), var(--accent2))",
                  opacity: 0.18, animationDuration: "3.4s",
                }}
              />
              <img src={logo} alt="" style={{ height: 24, width: 24, objectFit: "contain", position: "relative", zIndex: 1 }} />
            </span>
            <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>
              Brainlink <span className="text-gradient">Softwares</span>
            </span>
          </Link>

          <ul style={{ display: "flex", alignItems: "center", gap: 20, listStyle: "none" }} className="desktop-nav">
            {navLinks.map((l) => (
              <li key={l.label}>
                <Link
                  to={l.to}
                  style={linkStyle(pathname === l.to)}
                  onMouseEnter={(e) => { if (pathname !== l.to) e.currentTarget.style.color = "var(--text)"; }}
                  onMouseLeave={(e) => { if (pathname !== l.to) e.currentTarget.style.color = "var(--muted)"; }}
                >
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>

          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <Link to="/contact" className="btn-primary cta-desktop-only" style={{ padding: "10px 20px", fontSize: "0.82rem" }} data-cursor-label="Go">
              Start a Project
            </Link>

            <button
              ref={menuBtnRef}
              onClick={() => setOpen((o) => !o)}
              className="mobile-nav-btn icon-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className="glass-card mobile-nav-btn"
        style={{
          position: "fixed",
          top: scrolled ? 66 : 76,
          left: 16,
          right: 16,
          zIndex: 999,
          maxHeight: open ? 500 : 0,
          opacity: open ? 1 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease, opacity 0.25s ease",
          boxShadow: "var(--shadow-lg)",
        }}
      >
        <div style={{ padding: "12px 20px 20px", display: "flex", flexDirection: "column", gap: 4 }}>
          {navLinks.map((l) => (
            <Link
              key={l.label}
              to={l.to}
              onClick={() => setOpen(false)}
              style={{
                fontFamily: "var(--font-body)", fontWeight: 600, fontSize: "0.95rem",
                color: pathname === l.to ? "var(--accent)" : "var(--text)",
                textDecoration: "none", padding: "12px 4px", borderBottom: "1px solid var(--border)",
              }}
            >
              {l.label}
            </Link>
          ))}
          <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
            <Brain size={16} aria-hidden="true" /> Start a Project
          </Link>
        </div>
      </div>

      <div style={{ height: 88 }} />
    </>
  );
}
