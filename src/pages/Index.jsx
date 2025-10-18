import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";

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
        "Email Campaigns",
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
    setMeta("keywords", "Brainlink Softwares, web development, UI UX design, SEO, digital marketing, responsive websites, software company India");

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
        <section className="flex flex-col items-center justify-center text-center bg-gray-50 py-20 px-4" id="hero">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4 text-gray-900">
            Welcome to Brainlink Softwares
          </h1>
          <p className="font-outfit text-gray-700 text-lg md:text-xl mb-8 max-w-xl">
            We create innovative software solutions that help you and your business grow.
          </p>
          <div className="flex space-x-4">
            <Link to="/contact" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition font-outfit inline-block text-center">
              Contact Us
            </Link>
            <Link to="/pricing" className="bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg hover:scale-105 transition font-outfit inline-block text-center">
              Our Pricing
            </Link>
          </div>
        </section>

        {/* Services Section */}
        <section className="py-12 px-4 sm:px-6 lg:px-8 bg-white" id="services">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-outfit font-bold text-center text-gray-900 mb-10">
              Our Services
            </h2>

            {services.map((service, index) => (
              <article key={index} className={`rounded-lg p-6 mb-8 bg-gradient-to-r ${service.color} text-white shadow-md hover:scale-105 transition transform`}>
                <img src={logo} alt={`${service.title} logo`} className="w-10 bg-white rounded-3xl p-2 mb-3" loading="lazy" />
                <h3 className="text-2xl font-bold font-outfit mb-2">{service.title}</h3>
                <p className="mb-4 text-white text-opacity-90 font-outfit">{service.subtitle}</p>
                <ul className="list-disc list-inside space-y-2 font-outfit text-white text-opacity-90">
                  {service.features.map((feature, idx) => <li key={idx}>{feature}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
