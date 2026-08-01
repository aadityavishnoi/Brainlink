import { Link } from "react-router-dom";
import { ArrowRight, Phone } from "lucide-react";
import Layout from "../common/Layout";
import SEO, { organizationSchema } from "../components/SEO";
import AnimatedBackground from "../components/AnimatedBackground";
import HeroVisual from "../components/HeroVisual";
import TechMarquee from "../components/TechMarquee";
import SectionHeading from "../components/SectionHeading";
import ServiceCard from "../components/ServiceCard";
import ProcessTimeline from "../components/ProcessTimeline";
import CaseStudyCard from "../components/CaseStudyCard";
import Reveal, { StaggerGroup, StaggerItem } from "../components/Reveal";
import { WhatsAppIcon } from "../components/icons/BrandIcons";
import { homeServices } from "../data/services";
import { processSteps } from "../data/process";
import { techStack } from "../data/techStack";
import { clients } from "../data/clients";
import { whyBrainlink, trustStatements } from "../data/values";
import { internshipHighlights } from "../data/careers";
import { siteConfig } from "../data/siteConfig";

export default function Index() {
  return (
    <Layout>
      <SEO
        title="Custom Software, Web & Mobile App Development"
        description="Brainlink Softwares builds scalable software, modern web applications, mobile apps and digital products for startups and growing businesses."
        path="/"
        jsonLd={organizationSchema}
      />

      {/* ── HERO ─────────────────────────────────────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          padding: "128px 24px 64px",
          overflow: "hidden",
        }}
      >
        <AnimatedBackground variant="hero" />
        <div
          className="container hero-grid"
          style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.1fr 0.9fr", gap: 48, alignItems: "center" }}
        >
          <Reveal>
            <span className="label">Software Engineering & Digital Product Studio</span>
            <h1
              style={{
                fontSize: "clamp(2.2rem, 5.2vw, 3.6rem)",
                fontWeight: 800,
                color: "var(--text)",
                lineHeight: 1.12,
                marginBottom: 22,
                letterSpacing: "-0.03em",
              }}
            >
              Engineering Digital Products That{" "}
              <span className="text-gradient">Move Businesses Forward.</span>
            </h1>
            <p style={{ fontSize: "clamp(1.05rem, 1.6vw, 1.2rem)", color: "var(--muted)", lineHeight: 1.75, marginBottom: 16, maxWidth: 540 }}>
              Brainlink Softwares designs and develops scalable software, intelligent web platforms and
              high-performance digital experiences for startups, businesses and growing organizations.
            </p>
            <p style={{ fontSize: "0.9rem", color: "var(--muted2)", marginBottom: 36 }}>
              From idea to launch — strategy, design, engineering and continuous support under one roof.
            </p>
            <div style={{ display: "flex", gap: 12, flexWrap: "wrap", marginBottom: 40 }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 30px" }}>
                Start a Project <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <Link to="/work" className="btn-secondary" style={{ fontSize: "0.95rem", padding: "14px 30px" }}>
                Explore Our Work
              </Link>
            </div>
            <div style={{ display: "flex", gap: 28, flexWrap: "wrap" }}>
              {["MSME-Registered Studio", "Direct Team Communication", "Transparent, Milestone-Based Delivery"].map((t) => (
                <div key={t} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: "0.8rem", color: "var(--muted)" }}>
                  <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent)", flexShrink: 0 }} />
                  {t}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.15} className="hero-visual-wrap">
            <HeroVisual />
          </Reveal>
        </div>
      </section>

      {/* ── TECH MARQUEE ─────────────────────────────────────── */}
      <section style={{ padding: "28px 0 48px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
        <p style={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 600, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: 20 }}>
          Built with the technologies we ship in production
        </p>
        <TechMarquee items={techStack} />
      </section>

      {/* ── SERVICES OVERVIEW ────────────────────────────────── */}
      <section className="section" id="services">
        <div className="container">
          <SectionHeading
            label="What We Do"
            title="Software & Digital Product Services"
            subtitle="From a first working prototype to a fully scaled platform — engineering support for every stage of your product."
          />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {homeServices.map((s) => (
              <StaggerItem key={s.id}>
                <ServiceCard service={s} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/services" className="btn-secondary" style={{ fontSize: "0.9rem" }}>
              View All Services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── WHY BRAINLINK ────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading label="Why Brainlink Softwares" title="Built for Long-Term, Honest Collaboration" />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {whyBrainlink.map((w) => (
              <StaggerItem key={w.title} className="card">
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text)", marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{w.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── PROCESS ──────────────────────────────────────────── */}
      <section className="section" id="process">
        <div className="container">
          <SectionHeading label="Our Process" title="How We Take an Idea to Production" subtitle="A clear, proven process — so you always know what's happening next." />
          <ProcessTimeline steps={processSteps} />
        </div>
      </section>

      {/* ── FEATURED WORK ────────────────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading label="Featured Work" title="Case Studies" subtitle="A verified engagement from our client work. We're building out this library as current software projects complete." />
          <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(340px, 1fr))", gap: 32, maxWidth: 720, margin: "0 auto" }}>
            {clients.map((c) => (
              <CaseStudyCard key={c.name} client={c} detailed />
            ))}
          </div>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/work" className="btn-secondary" style={{ fontSize: "0.9rem" }}>
              See Our Work <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── COMPANY STATISTICS (trust statements, no fabricated numbers) ── */}
      <section className="section">
        <div className="container">
          <SectionHeading label="How We Operate" title="Built for Growing Businesses" subtitle="We're an early-stage, MSME-registered studio — here's what that means for how we work with you." />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20 }}>
            {trustStatements.map((t) => (
              <StaggerItem
                key={t.label}
                style={{ background: "var(--bg-card2)", border: "1px solid var(--border)", borderRadius: 12, padding: "26px 22px" }}
              >
                <div style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 700, fontSize: "0.98rem", color: "var(--accent)", marginBottom: 8 }}>{t.label}</div>
                <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>{t.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── HOW WE WORK WITH CLIENTS (replaces testimonials) ─── */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading label="How We Work" title="How We Work With Clients" subtitle="We haven't published client testimonials yet — here's what to expect instead, in plain terms." />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 24 }}>
            {[
              { t: "One point of contact", d: "You work directly with the person building your product — questions get answered without a chain of hand-offs." },
              { t: "Milestone check-ins", d: "You see working progress on a staging link at agreed points, not just a final reveal at the deadline." },
              { t: "Plain-language updates", d: "Technical trade-offs explained in terms of what they mean for your business, not just for the code." },
            ].map((item) => (
              <StaggerItem key={item.t} className="card">
                <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "1rem", color: "var(--text)", marginBottom: 8 }}>{item.t}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{item.d}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── CAREERS PREVIEW ──────────────────────────────────── */}
      <section className="section" id="careers">
        <div className="container">
          <SectionHeading
            label="Careers & Internships"
            title="Learn by Building Real Software"
            subtitle="For students, fresh graduates and developers who want practical, mentored experience — subject to current availability."
          />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))", gap: 20, marginBottom: 40 }}>
            {internshipHighlights.map((h) => {
              const Icon = h.icon;
              return (
                <StaggerItem key={h.title} className="card" style={{ textAlign: "center" }}>
                  <div style={{ display: "flex", justifyContent: "center", marginBottom: 12, color: "var(--accent)" }}>
                    <Icon size={26} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)", marginBottom: 6 }}>{h.title}</h3>
                  <p style={{ fontSize: "0.83rem", color: "var(--muted)", lineHeight: 1.6 }}>{h.desc}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
          <div style={{ textAlign: "center" }}>
            <Link to="/careers" className="btn-primary" style={{ fontSize: "0.9rem" }}>
              Explore Careers & Internships <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── FINAL CTA ────────────────────────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--border)", padding: "100px 24px", textAlign: "center" }}>
        <AnimatedBackground variant="page" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <span className="label">Ready?</span>
            <h2 style={{ fontFamily: "'Poppins',sans-serif", fontWeight: 800, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text)", marginBottom: 20, letterSpacing: "-0.02em" }}>
              Have an idea worth building?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 40, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 40px" }}>
              Let's turn it into a reliable, scalable digital product.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                <Phone size={16} aria-hidden="true" /> Start a Conversation
              </Link>
              <a href={siteConfig.whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "0.95rem", padding: "14px 32px" }}>
                <WhatsAppIcon width={17} height={17} /> Chat on WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid { grid-template-columns: 1fr !important; }
          .hero-visual-wrap { order: -1; }
        }
      `}</style>
    </Layout>
  );
}
