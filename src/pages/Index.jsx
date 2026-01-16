import React, { useEffect } from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";
import logo from "../assets/logo/logo.png";
import { Link } from "react-router-dom";
import whatsapp from "../assets/logo/whatsapp.png";
import AnimeBackground from "../components/AnimeBackground";

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

  // SEO
  useEffect(() => {
    document.title =
      "Brainlink Softwares | Web Development, UI/UX & Digital Marketing";
  }, []);

  return (
    <>
      <Header />

      <main>
        {/* HERO WITH ANIME BACKGROUND */}
        <section
          className="relative overflow-hidden flex flex-col items-center justify-center text-center bg-gray-50 py-28 px-4"
          id="hero"
        >
          <AnimeBackground />

          <div className="relative z-10 max-w-2xl">
            <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-5 text-gray-900">
              Welcome to Brainlink Softwares
            </h1>
            <p className="font-outfit text-gray-700 text-lg md:text-xl mb-10">
              We create innovative software solutions that help your business
              grow.
            </p>

            <div className="flex justify-center gap-6">
              <Link
                to="/contact"
                className="bg-blue-600 text-white font-semibold py-3 px-7 rounded-xl hover:scale-105 transition"
              >
                Contact Us
              </Link>
              <Link
                to="/pricing"
                className="bg-blue-600 text-white font-semibold py-3 px-7 rounded-xl hover:scale-105 transition"
              >
                Our Pricing
              </Link>
            </div>
          </div>
        </section>

        {/* SERVICES */}
        <section className="py-20 px-4 bg-white" id="services">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-outfit font-bold text-center mb-14">
              Our Services
            </h2>

            {services.map((service, index) => (
              <article
                key={index}
                className={`rounded-2xl p-8 mb-10 bg-gradient-to-r ${service.color} text-white shadow-lg hover:scale-[1.03] hover:shadow-2xl transition`}
              >
                <img
                  src={logo}
                  alt={service.title}
                  className="w-10 bg-white rounded-3xl p-2 mb-4"
                />
                <h3 className="text-2xl font-bold mb-2">
                  {service.title}
                </h3>
                <p className="mb-5 text-white/90">
                  {service.subtitle}
                </p>
                <ul className="list-disc list-inside space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* WhatsApp Floating */}
      <div className="fixed bottom-3 right-3 z-50">
        <Link to="https://wa.me/919412330177?text=Hi,%20BrainLink%20Softwares">
          <img
            src={whatsapp}
            className="w-16 h-16 rounded-full shadow-lg hover:scale-110 transition"
            alt="WhatsApp"
          />
        </Link>
      </div>

      <Footer />
    </>
  );
}
