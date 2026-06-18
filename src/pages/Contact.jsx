import React, { useState, useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../index.css";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [errors, setErrors]   = useState({});
  const [status, setStatus]   = useState(""); // "" | "sending" | "success" | "error"

  useEffect(() => { document.title = "Contact | Brainlink Softwares"; }, []);

  const validate = () => {
    const e = {};
    if (!formData.name.trim())    e.name    = "Required";
    if (!formData.email.trim())   e.email   = "Required";
    else if (!/\S+@\S+\.\S+/.test(formData.email)) e.email = "Invalid email";
    if (!formData.phone.trim())   e.phone   = "Required";
    if (!formData.message.trim()) e.message = "Required";
    else if (formData.message.trim().length < 10) e.message = "At least 10 characters";
    setErrors(e);
    return !Object.keys(e).length;
  };

  const onChange = (e) => {
    const { name, value } = e.target;
    setFormData(p => ({ ...p, [name]: value }));
    if (errors[name]) setErrors(p => ({ ...p, [name]: "" }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setStatus("sending");
    const fd = new FormData(e.target);
    fd.append("access_key", "bc3db678-d885-4c74-837a-6ddb3b246599");
    try {
      const res  = await fetch("https://api.web3forms.com/submit", { method: "POST", body: fd });
      const data = await res.json();
      if (data.success) { setStatus("success"); e.target.reset(); setFormData({ name:"",email:"",phone:"",company:"",message:"" }); }
      else setStatus("error");
    } catch { setStatus("error"); }
  };

  const inputStyle = (err) => ({
    width: "100%", background: "var(--bg-card2)",
    border: `1px solid ${err ? "#ef4444" : "var(--border)"}`,
    borderRadius: 8, padding: "13px 16px",
    color: "#fff", fontFamily: "'Inter',sans-serif", fontSize: "0.9rem",
    outline: "none", transition: "border-color 0.2s",
    boxSizing: "border-box",
  });

  const labelStyle = {
    display: "block", fontFamily: "'Inter',sans-serif",
    fontWeight: 500, fontSize: "0.8rem",
    color: "var(--muted)", marginBottom: 8, letterSpacing: "0.02em",
  };

  return (
    <>
      <Header />
      <main>

        {/* Page hero */}
        <section style={{ padding: "80px 24px 56px", textAlign: "center", background: "radial-gradient(ellipse at 50% 0%, rgba(79,110,247,0.1) 0%, transparent 65%), var(--bg)" }}>
          <div style={{ maxWidth: 560, margin: "0 auto" }}>
            <span className="label">Contact Us</span>
            <h1 style={{ fontSize: "clamp(2rem,5vw,3rem)", fontWeight: 800, color: "#fff", marginBottom: 16, letterSpacing: "-0.02em" }}>
              Let's Talk About Your <span style={{ color: "var(--accent)" }}>Business</span>
            </h1>
            <p style={{ color: "var(--muted)", fontSize: "0.95rem", lineHeight: 1.8 }}>
              Tell us what you need and we'll come back within 24 hours with a clear plan — no jargon, no pressure.
            </p>
          </div>
        </section>

        {/* Two-col layout */}
        <section className="section" style={{ paddingTop: 48, borderTop: "1px solid var(--border)" }}>
          <div className="container">
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: 56, alignItems: "start" }} className="contact-grid">

              {/* Left — info */}
              <div>
                <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.3rem", color: "#fff", marginBottom: 8 }}>
                  Get In Touch
                </h2>
                <p style={{ color: "var(--muted)", fontSize: "0.875rem", lineHeight: 1.8, marginBottom: 36 }}>
                  Prefer a quick chat? Reach us directly on WhatsApp or call us.
                </p>

                {/* Contact items */}
                {[
                  { icon: <i className="fas fa-phone-alt"></i>, label: "Phone", val: "+91-94123-30177", href: "tel:+919412330177" },
                  { icon: <i className="fas fa-envelope"></i>, label: "Email", val: "vishnoiaaditya29@gmail.com", href: "mailto:vishnoiaaditya29@gmail.com" },
                  { icon: <i className="fas fa-map-marker-alt"></i>, label: "Location", val: "Meena Market Road, Kanth, Moradabad (244501)", href: null },
                ].map((item, i) => (
                  <div key={i} style={{ display: "flex", gap: 16, alignItems: "flex-start", marginBottom: 24 }}>
                    <div style={{ width: 42, height: 42, background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: "1.1rem" }}>
                      {item.icon}
                    </div>
                    <div>
                      <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 4 }}>{item.label}</p>
                      {item.href
                        ? <a href={item.href} style={{ fontSize: "0.875rem", color: "#fff", textDecoration: "none", transition: "color 0.2s" }} onMouseEnter={e=>e.currentTarget.style.color="var(--accent)"} onMouseLeave={e=>e.currentTarget.style.color="#fff"}>{item.val}</a>
                        : <span style={{ fontSize: "0.875rem", color: "#fff" }}>{item.val}</span>
                      }
                    </div>
                  </div>
                ))}

                {/* WhatsApp CTA */}
                <a
                  href="https://wa.me/918126280200?text=Hi,%20Brainlink%20Softwares"
                  className="btn-whatsapp"
                  style={{ marginTop: 16, width: "100%", justifyContent: "center", padding: "14px" }}
                >
                  <i className="fab fa-whatsapp" style={{ color: "#fff" }}></i> Chat on WhatsApp
                </a>

                {/* Working hours */}
                <div style={{ marginTop: 28, padding: "18px 20px", background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 10 }}>
                  <p style={{ fontFamily: "'Poppins',sans-serif", fontSize: "0.75rem", fontWeight: 600, color: "var(--muted2)", textTransform: "uppercase", letterSpacing: "0.06em", marginBottom: 8 }}>Working Hours</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted)", lineHeight: 1.7 }}>Mon – Sat: 10:00 AM – 7:00 PM IST</p>
                  <p style={{ fontSize: "0.875rem", color: "var(--muted)" }}>Sunday: WhatsApp only</p>
                </div>
              </div>

              {/* Right — form */}
              <div style={{ background: "var(--bg-card)", border: "1px solid var(--border)", borderRadius: 16, padding: "40px 36px" }}>
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "1.15rem", color: "#fff", marginBottom: 28 }}>Send Us a Message</h3>

                <form onSubmit={onSubmit} style={{ display: "flex", flexDirection: "column", gap: 20 }}>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Full Name *</label>
                      <input type="text" name="name" value={formData.name} onChange={onChange} placeholder="John Doe" style={inputStyle(errors.name)}
                        onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor=errors.name?"#ef4444":"var(--border)"} />
                      {errors.name && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.name}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Email *</label>
                      <input type="email" name="email" value={formData.email} onChange={onChange} placeholder="you@example.com" style={inputStyle(errors.email)}
                        onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor=errors.email?"#ef4444":"var(--border)"} />
                      {errors.email && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.email}</p>}
                    </div>
                  </div>

                  <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                    <div>
                      <label style={labelStyle}>Phone *</label>
                      <input type="tel" name="phone" value={formData.phone} onChange={onChange} placeholder="+91 98765 43210" style={inputStyle(errors.phone)}
                        onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor=errors.phone?"#ef4444":"var(--border)"} />
                      {errors.phone && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.phone}</p>}
                    </div>
                    <div>
                      <label style={labelStyle}>Company <span style={{ color: "var(--muted2)", fontWeight: 400 }}>(optional)</span></label>
                      <input type="text" name="company" value={formData.company} onChange={onChange} placeholder="Your Company" style={inputStyle(false)}
                        onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor="var(--border)"} />
                    </div>
                  </div>

                  <div>
                    <label style={labelStyle}>Message *</label>
                    <textarea name="message" value={formData.message} onChange={onChange} rows={5} placeholder="Tell us about your project or what you need help with..."
                      style={{ ...inputStyle(errors.message), resize: "none" }}
                      onFocus={e=>e.target.style.borderColor="var(--accent)"} onBlur={e=>e.target.style.borderColor=errors.message?"#ef4444":"var(--border)"} />
                    {errors.message && <p style={{ color: "#ef4444", fontSize: "0.75rem", marginTop: 4 }}>{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={status === "sending"}
                    className="btn-primary"
                    style={{ justifyContent: "center", padding: "14px", fontSize: "0.9rem", width: "100%", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                  >
                    {status === "sending" ? "Sending..." : "Send Message →"}
                  </button>

                  {status === "success" && (
                    <div style={{ background: "rgba(52,211,153,0.08)", border: "1px solid rgba(52,211,153,0.25)", borderRadius: 8, padding: "14px 16px", display: "flex", gap: 10, alignItems: "center" }}>
                      <span style={{ color: "#34d399", fontSize: "1.1rem" }}>✓</span>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#34d399" }}>Message sent! We'll get back to you within 24 hours.</p>
                    </div>
                  )}
                  {status === "error" && (
                    <div style={{ background: "rgba(239,68,68,0.08)", border: "1px solid rgba(239,68,68,0.25)", borderRadius: 8, padding: "14px 16px" }}>
                      <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.875rem", color: "#ef4444" }}>Something went wrong. Please try calling us directly.</p>
                    </div>
                  )}

                  <p style={{ fontFamily: "'Inter',sans-serif", fontSize: "0.75rem", color: "var(--muted2)", textAlign: "center", lineHeight: 1.6 }}>
                    By submitting, you agree to our privacy policy. We never spam.
                  </p>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      <style>{`
        @media (max-width:768px) { .contact-grid { grid-template-columns:1fr !important; } }
      `}</style>
    </>
  );
}
