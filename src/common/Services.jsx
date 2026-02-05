import React from "react";
import "../css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Link } from "react-router-dom";

export default function Services() {
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
    title: "App Development",
    subtitle: "Scalable mobile apps built for Android & iOS performance.",
    color: "from-pink-600 to-pink-800",
    features: [
      "Android & iOS Apps",
      "Cross-Platform Development",
      "API Integration",
      "App Store Deployment",
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
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-6xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-3xl md:text-4xl font-outfit font-bold text-gray-900">
            Our Services
          </h2>
          <p className="mt-3 text-gray-600 font-outfit text-lg">
            What we do — and how it helps your business grow.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 border"
            >
              {/* Top Gradient Strip */}
              <div
                className={`bg-gradient-to-r ${service.color} p-6 rounded-t-2xl text-white`}
              >
                <div className="flex items-center gap-4">
                  <i className={`fas ${service.icon} text-2xl`}></i>
                  <h3 className="text-xl font-bold font-outfit">
                    {service.title}
                  </h3>
                </div>
                <p className="mt-2 text-sm opacity-90 font-outfit">
                  {service.subtitle}
                </p>
              </div>

              {/* Content */}
              <div className="p-6">
                <ul className="space-y-2 text-gray-700 font-outfit text-sm mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <span className="text-green-600 mt-1">✔</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                <Link
                  to="/contact"
                  className="font-outfit inline-block text-indigo-600 font-semibold hover:underline"
                >
                  Discuss this service →
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
