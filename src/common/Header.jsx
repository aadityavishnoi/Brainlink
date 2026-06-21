import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useTheme } from "../ThemeContext";
import logo from "../assets/logo/logo.png";
import "../index.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { theme, toggle } = useTheme();
  const { pathname } = useLocation();

  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", fn, { passive: true });
    return () => window.removeEventListener("scroll", fn);
  }, []);

  useEffect(() => setOpen(false), [pathname]);

  const navLinks = [
    { label: "Home", to: "/" },
    { label: "Services", to: "/service" },
    { label: "Pricing", to: "/#pricing", hash: true },
    { label: "About", to: "/#about", hash: true },
    { label: "Careers", to: "/#careers", hash: true },
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    background: scrolled ? "var(--nav-bg-scrolled)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid var(--border)" : "1px solid transparent",
    transition: "all 0.3s ease",
  };

  const linkStyle = (active) => ({
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.9rem",
    color: active ? "var(--text)" : "var(--muted)",
    textDecoration: "none",
    padding: "6px 4px",
    transition: "color 0.2s",
    borderBottom: active ? "2px solid var(--accent)" : "2px solid transparent",
  });

  return (
    <>
      <nav style={navStyle}>
        <div
          className="container"
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            padding: "16px 24px",
            maxWidth: 1100,
            margin: "0 auto",
          }}
        >
          {/* Logo */}
          <Link
            to="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              textDecoration: "none",
            }}
          >
            <img src={logo} alt="Brainlink" style={{ height: 30, width: 30, objectFit: "contain" }} />
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1rem", color: "var(--text)" }}>
              Brainlink <span style={{ color: "var(--accent)" }}>Softwares</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none" }} className="desktop-nav">
            {navLinks.map((l) =>
              l.hash ? (
                <li key={l.label}>
                  <a href={l.to} style={linkStyle(false)}
                    onMouseEnter={e => e.currentTarget.style.color = "var(--text)"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >{l.label}</a>
                </li>
              ) : (
                <li key={l.label}>
                  <Link to={l.to} style={linkStyle(pathname === l.to)}
                    onMouseEnter={e => { if (pathname !== l.to) e.currentTarget.style.color = "var(--text)"; }}
                    onMouseLeave={e => { if (pathname !== l.to) e.currentTarget.style.color = "var(--muted)"; }}
                  >{l.label}</Link>
                </li>
              )
            )}
          </ul>

          {/* CTA + Theme Toggle */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="/contact"
              className="btn-primary cta-desktop-only"
              style={{ padding: "10px 22px", fontSize: "0.85rem" }}
            >
              Get Free Audit
            </a>

            {/* Theme Toggle Icon */}
            <button
              onClick={toggle}
              className="theme-icon-btn"
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                /* Sun icon — click to go light */
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="12" cy="12" r="5"/>
                  <line x1="12" y1="1" x2="12" y2="3"/>
                  <line x1="12" y1="21" x2="12" y2="23"/>
                  <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                  <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                  <line x1="1" y1="12" x2="3" y2="12"/>
                  <line x1="21" y1="12" x2="23" y2="12"/>
                  <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                  <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                </svg>
              ) : (
                /* Moon icon — click to go dark */
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
                </svg>
              )}
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="mobile-nav-btn"
              style={{
                background: "var(--hamburger-bg)",
                border: "1px solid var(--border)",
                borderRadius: 8,
                padding: "8px 10px",
                cursor: "pointer",
                display: "flex",
                flexDirection: "column",
                gap: 5,
              }}
              aria-label="Menu"
            >
              {[0, 1, 2].map(i => (
                <span key={i} style={{
                  display: "block", width: 20, height: 2,
                  background: "var(--hamburger-bar)",
                  borderRadius: 2,
                  transition: "all 0.3s",
                  opacity: i === 1 && open ? 0 : 1,
                  transform: open ? (i === 0 ? "rotate(45deg) translateY(7px)" : i === 2 ? "rotate(-45deg) translateY(-7px)" : "none") : "none",
                }} />
              ))}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div style={{
          maxHeight: open ? 400 : 0,
          overflow: "hidden",
          transition: "max-height 0.35s ease",
          background: "var(--mobile-menu-bg)",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}>
          <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map(l =>
              l.hash ? (
                <a key={l.label} href={l.to} onClick={() => setOpen(false)} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "var(--muted)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} onClick={() => setOpen(false)} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.95rem", color: pathname === l.to ? "var(--text)" : "var(--muted)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid var(--border)" }}>
                  {l.label}
                </Link>
              )
            )}
            <a href="/contact" onClick={() => setOpen(false)} className="btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
              Get Free Audit
            </a>
          </div>
        </div>
      </nav>

      {/* Spacer */}
      <div style={{ height: 64 }} />
    </>
  );
}
