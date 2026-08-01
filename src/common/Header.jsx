import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useTheme } from "../ThemeContext";
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
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();
  const menuBtnRef = useRef(null);

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
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

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    background: scrolled || open ? "var(--nav-bg-scrolled)" : "transparent",
    backdropFilter: scrolled || open ? "blur(16px)" : "none",
    WebkitBackdropFilter: scrolled || open ? "blur(16px)" : "none",
    borderBottom: scrolled || open ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.3s ease",
  };

  const linkStyle = (active) => ({
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.88rem",
    color: active ? "var(--text)" : "var(--muted)",
    textDecoration: "none",
    padding: "6px 4px",
    transition: "color 0.2s",
    borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
  });

  return (
    <>
      <a href="#main-content" className="skip-link">Skip to main content</a>

      <nav style={navStyle} aria-label="Primary">
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            maxWidth: 1180,
            margin: "0 auto",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}>
            <img src={logo} alt="" style={{ height: 30, width: 30, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>
              Brainlink <span style={{ color: "var(--accent)" }}>Softwares</span>
            </span>
          </Link>

          <ul style={{ display: "flex", alignItems: "center", gap: 6, listStyle: "none" }} className="desktop-nav">
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
            <Link to="/contact" className="btn-primary cta-desktop-only" style={{ padding: "10px 20px", fontSize: "0.85rem" }}>
              Start a Project
            </Link>

            <button
              onClick={toggle}
              className="theme-icon-btn"
              aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
              title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            >
              {theme === "dark" ? <Sun size={18} aria-hidden="true" /> : <Moon size={18} aria-hidden="true" />}
            </button>

            <button
              ref={menuBtnRef}
              onClick={() => setOpen((o) => !o)}
              className="mobile-nav-btn theme-icon-btn"
              aria-label={open ? "Close menu" : "Open menu"}
              aria-expanded={open}
              aria-controls="mobile-menu"
            >
              {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
            </button>
          </div>
        </div>

        <div
          id="mobile-menu"
          style={{
            maxHeight: open ? 560 : 0,
            overflow: "hidden",
            transition: "max-height 0.35s ease",
            background: "var(--mobile-menu-bg)",
            borderTop: open ? "1px solid var(--border)" : "none",
          }}
        >
          <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map((l) => (
              <Link
                key={l.label}
                to={l.to}
                onClick={() => setOpen(false)}
                style={{
                  fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.95rem",
                  color: pathname === l.to ? "var(--text)" : "var(--muted)",
                  textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)",
                }}
              >
                {l.label}
              </Link>
            ))}
            <Link to="/contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
              Start a Project
            </Link>
          </div>
        </div>
      </nav>

      <div style={{ height: 64 }} />
    </>
  );
}
