import { Link } from "react-router-dom";
import { ArrowRight, Phone, Sparkles } from "lucide-react";
import Layout from "../common/Layout";
import SEO, { organizationSchema } from "../components/SEO";
import AnimatedBackground from "../components/AnimatedBackground";
import FloatingClouds from "../components/FloatingClouds";
import HeroScene from "../components/HeroScene";
import TechMarquee from "../components/TechMarquee";
import SectionHeading from "../components/SectionHeading";
import ServiceOrbit from "../components/ServiceOrbit";
import ProjectWorldCard from "../components/ProjectWorldCard";
import HolographicTechModule from "../components/HolographicTechModule";
import DevelopmentJourney from "../components/DevelopmentJourney";
import LearningAcademyScene from "../components/LearningAcademyScene";
import DigitalPortal from "../components/DigitalPortal";
import MagneticButton from "../components/MagneticButton";
import Reveal, { StaggerGroup, StaggerItem } from "../components/Reveal";
import { WhatsAppIcon } from "../components/icons/BrandIcons";
import { homeServices } from "../data/services";
import { processSteps, ideaJourneyStages } from "../data/process";
import { techStack, techModules } from "../data/techStack";
import { featuredProjects } from "../data/portfolio";
import { whyBrainlink, clientApproach } from "../data/values";
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

      {/* ── SECTION 1 — HERO: THE DIGITAL SKY CITY ────────────── */}
      <section
        style={{
          position: "relative",
          minHeight: "92vh",
          display: "flex",
          alignItems: "center",
          padding: "128px 24px 64px",
          overflow: "hidden",
          background: "linear-gradient(180deg, #F8FAFF 0%, #EEF5FF 60%, #F5F0FF 100%)",
        }}
      >
        <AnimatedBackground variant="hero" />
        <FloatingClouds variant="hero" />
        <div
          className="container hero-grid"
          style={{ position: "relative", zIndex: 1, display: "grid", gridTemplateColumns: "1.05fr 0.95fr", gap: 48, alignItems: "center" }}
        >
          <Reveal>
            <span className="label"><Sparkles size={12} style={{ marginRight: 6 }} aria-hidden="true" />Software Engineering & Digital Product Studio</span>
            <h1
              style={{
                fontSize: "clamp(2.6rem, 6.5vw, 5.2rem)",
                fontWeight: 700,
                color: "var(--text)",
                lineHeight: 1.08,
                marginBottom: 22,
              }}
            >
              We Build <span className="text-gradient">Digital Worlds</span> For Real Businesses.
            </h1>
            <p style={{ fontSize: "clamp(1.02rem, 1.6vw, 1.15rem)", color: "var(--muted)", lineHeight: 1.75, marginBottom: 36, maxWidth: 540, fontWeight: 400 }}>
              Brainlink Softwares transforms ambitious ideas into scalable software, immersive web platforms and
              high-performance digital products.
            </p>
            <div style={{ display: "flex", gap: 14, flexWrap: "wrap", marginBottom: 32 }}>
              <MagneticButton>
                <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "15px 30px" }} data-cursor-label="Go">
                  Enter The Brainlink Universe <ArrowRight size={16} aria-hidden="true" />
                </Link>
              </MagneticButton>
              <MagneticButton>
                <Link to="/work" className="btn-secondary" style={{ fontSize: "0.95rem", padding: "14px 30px" }} data-cursor-label="View">
                  Explore Our Work
                </Link>
              </MagneticButton>
            </div>
            <p style={{ fontSize: "0.82rem", color: "var(--muted2)" }}>
              MSME-registered studio · Direct team communication · Transparent, milestone-based delivery
            </p>
          </Reveal>

          <Reveal delay={0.15} className="hero-visual-wrap">
            <HeroScene />
          </Reveal>
        </div>
      </section>

      {/* ── TECH MARQUEE ─────────────────────────────────────── */}
      <section style={{ padding: "28px 0 48px", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)", background: "var(--bg-card)" }}>
        <p style={{ textAlign: "center", fontSize: "0.72rem", fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted2)", marginBottom: 20 }}>
          Built with the technologies we ship in production
        </p>
        <TechMarquee items={techStack} />
      </section>

      {/* ── SECTION 2 — IDEA PORTAL ──────────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="The Idea Portal"
            title="An Idea Enters. A Digital Product Emerges."
            subtitle="Every project moves through the same gateway — from a rough idea to something real, scalable and live."
          />
          <div style={{ display: "flex", justifyContent: "center", marginBottom: 56 }}>
            <DigitalPortal size={180}>
              <Sparkles size={30} style={{ color: "var(--accent)" }} aria-hidden="true" />
            </DigitalPortal>
          </div>
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))", gap: 16 }}>
            {ideaJourneyStages.map((stage) => {
              const Icon = stage.icon;
              return (
                <StaggerItem key={stage.label} style={{ textAlign: "center" }}>
                  <div
                    style={{
                      width: 56, height: 56, borderRadius: 16, margin: "0 auto 12px",
                      background: "var(--bg-card)", border: "1px solid var(--border)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "var(--accent)", boxShadow: "var(--shadow-sm)",
                    }}
                  >
                    <Icon size={24} strokeWidth={1.8} aria-hidden="true" />
                  </div>
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.92rem", color: "var(--text)", marginBottom: 4 }}>{stage.label}</h3>
                  <p style={{ fontSize: "0.78rem", color: "var(--muted)", lineHeight: 1.55 }}>{stage.desc}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ── SECTION 3 — SERVICES UNIVERSE ────────────────────── */}
      <section className="section" id="services" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading
            label="The Services Universe"
            title="Orbit The Core Of What We Build"
            subtitle="Every planet is a service — hover or focus one to see what it covers, or open it for the full detail."
          />
          <ServiceOrbit services={homeServices} />
          <div style={{ textAlign: "center", marginTop: 48 }}>
            <Link to="/services" className="btn-secondary" style={{ fontSize: "0.9rem" }}>
              View All Services <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── SECTION 4 — PROJECT WORLDS / TRUSTED FOR REAL PROJECTS ── */}
      <section className="section">
        <div className="container">
          <SectionHeading
            label="Project Worlds"
            title="Trusted For Real Digital Projects"
            subtitle="Two verified client engagements, each its own world within the Brainlink Digital Universe. No inflated client counts — just the work itself."
          />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 28 }}>
            {featuredProjects.map((project) => (
              <StaggerItem key={project.id}>
                <ProjectWorldCard project={project} />
              </StaggerItem>
            ))}
          </StaggerGroup>
          <div style={{ textAlign: "center", marginTop: 40 }}>
            <Link to="/work" className="btn-secondary" style={{ fontSize: "0.9rem" }}>
              See Full Case Studies <ArrowRight size={15} aria-hidden="true" />
            </Link>
          </div>
        </div>
      </section>

      {/* ── HOW WE APPROACH CLIENT PROJECTS (replaces testimonials) ── */}
      <section className="section" style={{ background: "var(--surface-violet)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading label="How We Work" title="How We Approach Client Projects" subtitle="We don't publish client testimonials we can't verify. Here's what actually happens on every engagement instead." />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))", gap: 20 }}>
            {clientApproach.map((item) => {
              const Icon = item.icon;
              return (
                <StaggerItem key={item.title} className="card">
                  <Icon size={22} style={{ color: "var(--accent2)", marginBottom: 12 }} strokeWidth={1.8} aria-hidden="true" />
                  <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "0.95rem", color: "var(--text)", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: "0.85rem", color: "var(--muted)", lineHeight: 1.65 }}>{item.desc}</p>
                </StaggerItem>
              );
            })}
          </StaggerGroup>
        </div>
      </section>

      {/* ── SECTION 5 — TECHNOLOGY LAB ───────────────────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading label="The Technology Lab" title="Tools We Actually Build With" subtitle="Hover or focus a module for a short note on how we use it. Nothing here is aspirational — this is our real production stack." />
          <HolographicTechModule modules={techModules} />
        </div>
      </section>

      {/* ── SECTION 6 — HOW WE BUILD ─────────────────────────── */}
      <section className="section" style={{ background: "var(--bg-card)", borderTop: "1px solid var(--border)", borderBottom: "1px solid var(--border)" }}>
        <div className="container">
          <SectionHeading label="How We Build" title="A Journey Through Every Room" subtitle="From first conversation to long-term support — a clear, proven process." />
          <DevelopmentJourney steps={processSteps} />
        </div>
      </section>

      {/* ── SECTION 7 — WHY BRAINLINK (control room) ─────────── */}
      <section className="section">
        <div className="container">
          <SectionHeading label="Why Brainlink Softwares" title="The Control Room View" subtitle="What you can expect working with us, in plain terms — no fabricated statistics." />
          <StaggerGroup style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))", gap: 20 }}>
            {whyBrainlink.map((w) => (
              <StaggerItem
                key={w.title}
                className="card"
                style={{ position: "relative", paddingTop: 32 }}
              >
                <span
                  aria-hidden="true"
                  style={{ position: "absolute", top: 16, left: 20, width: 8, height: 8, borderRadius: "50%", background: "var(--success)" }}
                />
                <h3 style={{ fontFamily: "var(--font-heading)", fontWeight: 600, fontSize: "1rem", color: "var(--text)", marginBottom: 8 }}>{w.title}</h3>
                <p style={{ fontSize: "0.88rem", color: "var(--muted)", lineHeight: 1.7 }}>{w.desc}</p>
              </StaggerItem>
            ))}
          </StaggerGroup>
        </div>
      </section>

      {/* ── SECTION 8 — INTERNSHIP ACADEMY ───────────────────── */}
      <section className="section" id="careers" style={{ background: "var(--surface-peach)", borderTop: "1px solid var(--border)" }}>
        <div className="container">
          <div style={{ display: "grid", gridTemplateColumns: "0.9fr 1.1fr", gap: 48, alignItems: "center" }} className="academy-grid">
            <Reveal>
              <LearningAcademyScene />
            </Reveal>
            <Reveal delay={0.1}>
              <span className="label">Brainlink Learning Academy</span>
              <h2 className="section-title">Learn By Building Real Software</h2>
              <p style={{ color: "var(--muted)", lineHeight: 1.8, fontSize: "1rem", marginBottom: 28 }}>
                For students, fresh graduates and developers who want hands-on, mentored experience — subject to
                current availability.
              </p>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16, marginBottom: 32 }}>
                {internshipHighlights.map((h) => (
                  <div key={h.title} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                    <span style={{ width: 6, height: 6, borderRadius: "50%", background: "var(--accent2)", marginTop: 7, flexShrink: 0 }} />
                    <div>
                      <strong style={{ color: "var(--text)", fontSize: "0.88rem", display: "block" }}>{h.title}</strong>
                      <span style={{ color: "var(--muted)", fontSize: "0.8rem" }}>{h.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/careers" className="btn-primary" style={{ fontSize: "0.9rem" }}>
                Explore The Academy <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── SECTION 9 — FINAL CTA PORTAL ─────────────────────── */}
      <section style={{ position: "relative", overflow: "hidden", borderTop: "1px solid var(--border)", padding: "110px 24px", textAlign: "center", background: "linear-gradient(180deg, var(--bg) 0%, var(--surface-violet) 100%)" }}>
        <AnimatedBackground variant="page" />
        <FloatingClouds variant="hero" />
        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <Reveal>
            <DigitalPortal size={220}>
              <span style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "0.85rem", color: "var(--accent)" }}>
                Brainlink
              </span>
            </DigitalPortal>
            <h2 style={{ fontFamily: "var(--font-heading)", fontWeight: 700, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--text)", margin: "24px 0 16px" }}>
              Ready To Build Your Digital World?
            </h2>
            <p style={{ color: "var(--muted)", fontSize: "1rem", marginBottom: 40, lineHeight: 1.8, maxWidth: 480, margin: "0 auto 40px" }}>
              Share your idea with Brainlink Softwares and let's transform it into a reliable, scalable digital
              product.
            </p>
            <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
              <MagneticButton>
                <Link to="/contact" className="btn-primary" style={{ fontSize: "0.95rem", padding: "15px 32px" }} data-cursor-label="Go">
                  <Phone size={16} aria-hidden="true" /> Start A Project
                </Link>
              </MagneticButton>
              <a href={siteConfig.whatsappHref()} target="_blank" rel="noopener noreferrer" className="btn-whatsapp" style={{ fontSize: "0.95rem", padding: "15px 32px" }}>
                <WhatsAppIcon width={17} height={17} /> Chat On WhatsApp
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid, .academy-grid { grid-template-columns: 1fr !important; }
          .hero-visual-wrap { order: -1; }
        }
      `}</style>
    </Layout>
  );
}
