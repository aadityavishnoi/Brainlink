import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../assets/logo/logo.png";
import "../index.css";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
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
    { label: "Blog", to: "/blog" },
    { label: "Contact", to: "/contact" },
  ];

  const navStyle = {
    position: "fixed",
    top: 0, left: 0, right: 0,
    zIndex: 1000,
    background: scrolled ? "rgba(10,10,10,0.92)" : "transparent",
    backdropFilter: scrolled ? "blur(16px)" : "none",
    WebkitBackdropFilter: scrolled ? "blur(16px)" : "none",
    borderBottom: scrolled ? "1px solid rgba(255,255,255,0.06)" : "1px solid transparent",
    transition: "all 0.3s ease",
  };

  const linkStyle = (active) => ({
    fontFamily: "'Inter', sans-serif",
    fontWeight: 500,
    fontSize: "0.9rem",
    color: active ? "#fff" : "var(--muted)",
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
            <span style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1rem", color: "#fff" }}>
              Brainlink <span style={{ color: "var(--accent)" }}>Softwares</span>
            </span>
          </Link>

          {/* Desktop nav */}
          <ul style={{ display: "flex", alignItems: "center", gap: 8, listStyle: "none" }} className="hidden md:flex">
            {navLinks.map((l) =>
              l.hash ? (
                <li key={l.label}>
                  <a href={l.to} style={linkStyle(false)}
                    onMouseEnter={e => e.currentTarget.style.color = "#fff"}
                    onMouseLeave={e => e.currentTarget.style.color = "var(--muted)"}
                  >{l.label}</a>
                </li>
              ) : (
                <li key={l.label}>
                  <Link to={l.to} style={linkStyle(pathname === l.to)}
                    onMouseEnter={e => { if (pathname !== l.to) e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { if (pathname !== l.to) e.currentTarget.style.color = "var(--muted)"; }}
                  >{l.label}</Link>
                </li>
              )
            )}
          </ul>

          {/* CTA */}
          <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
            <a
              href="/contact"
              className="btn-primary hidden sm:inline-flex"
              style={{ padding: "10px 22px", fontSize: "0.85rem" }}
            >
              Get Free Audit
            </a>
            {/* Hamburger */}
            <button
              onClick={() => setOpen(o => !o)}
              className="md:hidden"
              style={{
                background: "rgba(255,255,255,0.07)",
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
                  display: "block", width: 20, height: 2, background: "#fff", borderRadius: 2,
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
          background: "rgba(10,10,10,0.98)",
          borderTop: open ? "1px solid var(--border)" : "none",
        }}>
          <div style={{ padding: "16px 24px 24px", display: "flex", flexDirection: "column", gap: 4 }}>
            {navLinks.map(l =>
              l.hash ? (
                <a key={l.label} href={l.to} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.95rem", color: "var(--muted)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  {l.label}
                </a>
              ) : (
                <Link key={l.label} to={l.to} style={{ fontFamily: "'Inter',sans-serif", fontWeight: 500, fontSize: "0.95rem", color: pathname === l.to ? "#fff" : "var(--muted)", textDecoration: "none", padding: "12px 0", borderBottom: "1px solid rgba(255,255,255,0.04)" }}>
                  {l.label}
                </Link>
              )
            )}
            <a href="/contact" className="btn-primary" style={{ marginTop: 12, justifyContent: "center" }}>
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
