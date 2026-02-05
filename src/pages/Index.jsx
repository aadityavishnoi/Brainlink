import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import whatsapp from "../assets/logo/whatsapp.png";
export default function Index() {
  const services = [
    {
      title: "Web Development",
      subtitle: "Custom websites built for performance, flexibility & SEO.",
      color: "from-blue-600 to-blue-800",
      features: [
        "Basic Landing Pages",
        "Custom Web Applications",
        "Responsive Design",
        "SEO Optimized",
      ],
    },
    {
      title: "UI/UX Design",
      subtitle: "Designs that are intuitive, beautiful, and brand-consistent.",
      color: "from-green-600 to-green-800",
      features: [
        "Wireframes & Prototypes",
        "User Flow Design",
        "High-Fidelity Mockups",
        "Brand Consistency",
      ],
    },
    {
      title: "Digital Marketing",
      subtitle: "Grow your brand with results-driven marketing strategies.",
      color: "from-pink-600 to-pink-800",
      features: [
        "SEO",
        "Social Media",
        "Content Marketing",
      ],
    },
    {
      title: "Solutions",
      subtitle: "Technical support and optimization tailored to your needs.",
      color: "from-blue-900 to-gray-800",
      features: [
        "Bug Fixes",
        "Website Updates",
        "Performance Optimization",
        "24/7 Support",
      ],
    },
  ];

  const wcus = [
    {
      title: 'Direct Developer Communication',
      desc: 'No middlemen. You talk directly to the person building your product.',
      color: "from-indigo-600 to-violet-700",

    }
    ,
    {
      title: 'We Don’t Over-Promise',
      desc: 'We commit only what we can realistically deliver — and then deliver it properly.',
      color: "from-slate-800 to-zinc-700",
    },
    {
      title: 'Built for Performance, Not Just Looks',
      desc: 'Clean code, fast loading, and scalable architecture — not just a pretty UI.',
      color: "from-cyan-600 to-sky-700",
    },
    {
      title: 'Transparent Pricing',
      desc: 'We don’t disappear after delivery. You get proper support and guidance.',
      color: "from-amber-600 to-orange-700",
    },
  ];

  // ✅ SEO without Helmet
  useEffect(() => {
    document.title = "Brainlink Softwares | Web Development, UI/UX & Digital Marketing";

    const setMeta = (name, content) => {
      let element = document.querySelector(`meta[name='${name}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("name", name);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setMeta("description", "Brainlink Softwares builds SEO-friendly websites, custom web apps, and digital marketing solutions to help your business grow.");
    setMeta("keywords", "Brainlink, Brainlink Softwares, web development, UI UX design, SEO, digital marketing, responsive websites, software company India");

    // Open Graph
    const setOg = (property, content) => {
      let element = document.querySelector(`meta[property='${property}']`);
      if (!element) {
        element = document.createElement("meta");
        element.setAttribute("property", property);
        document.head.appendChild(element);
      }
      element.setAttribute("content", content);
    };

    setOg("og:type", "website");
    setOg("og:title", "Brainlink Softwares | Web Development & Digital Marketing");
    setOg("og:description", "We build high-performance websites and digital solutions that help businesses grow online.");
    setOg("og:url", "https://www.brainlink.in/");
    setOg("og:site_name", "Brainlink Softwares");

    // Canonical
    let canonical = document.querySelector("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.setAttribute("rel", "canonical");
      document.head.appendChild(canonical);
    }
    canonical.setAttribute("href", "https://www.brainlink.in/");

  }, []);

  return (
    <>
      <Header />

      <main>
        {/* Hero Section */}
        <section className="flex flex-col items-center justify-center text-center bg-gradient-to-br from-blue-900 to-gray-800 text-white py-20 px-4" id="hero">

          <h1 className="text-2xl md:text-4xl font-outfit font-bold mb-4 text-white">
            Ready to start a project?
          </h1>
          <p className="font-outfit text-white text-sm md:text-xl mb-8 max-w-xl">
           Tell us about your idea and we’ll get back with a clear plan and timeline.
          </p>
          <div className="flex gap-4">
          <Link to="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 font-semibold py-3 px-7 rounded-xl shadow-lg shadow-blue-600/20 hover:bg-white hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 font-outfit">
            Schedule A Call!
          </Link>
          </div>
        </section>

       {/* Services Section */}
<div className="flex flex-col items-center my-10">
  <h1 className="font-outfit text-2xl font-bold">Our Services</h1>
</div>

<div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-6 px-4">
  {services.map((service, index) => (
    <div
      key={index}
      className={`p-6 rounded-xl bg-gradient-to-br ${service.color} text-white shadow-lg hover:scale-105 transition`}
    >
      <h2 className="text-xl font-outfit font-bold mb-2">
        {service.title}
      </h2>

      <p className="text-sm opacity-90 mb-4 font-outfit">
        {service.subtitle}
      </p>

      <ul className="text-sm space-y-1 font-outfit">
        {service.features.map((feature, i) => (
          <li key={i}>• {feature}</li>
        ))}
      </ul>
    </div>
  ))}
</div>

{/* Why Choose Us! */}

<div className="flex flex-col items-center my-10">
  <h1 className="font-outfit text-2xl font-bold">Why Choose Us!</h1>
</div>
<div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 gap-6 px-4">
{wcus.map((wcus, index) => (
  <div className={`p-6 rounded-xl bg-gradient-to-br ${wcus.color} text-white shadow-lg hover:scale-95 transition`} key={index}>
    <h2 className="font-outfit text-xl font-bold mb-2">
      {wcus.title}
    </h2>
    <p className="text-sm opacity-90 mb-4 font-outfit">
      {wcus.desc}
    </p>
  </div>
))}
</div>
      </main>
      <div className="flex fixed bottom-2 right-0">
        <Link to="https://wa.me/919412330177?text=Hi,%20BrainLink%20Softwares">
        <img src={whatsapp} className="w-16 h-16 m-2 rounded-full"></img>
        </Link>
      </div>
      <Footer />
    </>
  );
}