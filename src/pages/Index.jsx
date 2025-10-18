import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";
import logo from "../assets/logo/logo.png";
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
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

  return (
    <>
      <Header />

      {/* Hero Section */}
      <div className="flex flex-col items-center justify-center text-center bg-gray-50 py-20 px-4">
        <h1 className="text-4xl md:text-5xl font-outfit font-bold mb-4">
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
      </div>

      {/* Services Section */}
      <div className=" py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-outfit font-bold text-center text-gray-900 dark:text-white mb-10">
            Our Services
          </h2>

          {services.map((service, index) => (
            <div
              key={index}
              className={`rounded-lg p-6 mb-8 bg-gradient-to-r ${service.color} text-white shadow-md hover:scale-105 transition transform`}
            >
              <img src={logo} className="w-10 bg-white rounded-3xl p-2" />

              <h3 className="text-2xl font-bold font-outfit mb-2">{service.title}</h3>
              <p className="mb-4 text-white text-opacity-90 font-outfit">{service.subtitle}</p>
              <ul className="list-disc list-inside space-y-2 font-outfit text-white text-opacity-90">
                {service.features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <Footer />
    </>
  );
}
