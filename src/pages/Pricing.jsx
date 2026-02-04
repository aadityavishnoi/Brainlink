import React from "react";
import "../css/index.css";
import "@fortawesome/fontawesome-free/css/all.min.css";
import Header from "../common/Header";
import Footer from "../common/Footer";
import { Link } from "react-router-dom";

export default function Pricing() {
  const plans = [
    {
      id: "sites999",
      title: "Sites@999",
      subtitle: "Quick launch for basic online presence",
      price: "₹999",
      badge: "Starter",
      highlight: false,
      color: "from-slate-800 to-zinc-700",
      features: [
        "Single Landing Page",
        "Mobile Responsive",
        "Basic SEO Setup",
      ],
    },
    {
      id: "ignite",
      title: "Ignite",
      subtitle: "Perfect for startups & small businesses",
      price: "₹1,999",
      badge: "Most Popular",
      highlight: true,
      color: "from-indigo-600 to-violet-700",
      features: [
        "1–5 Page Website",
        "Advanced SEO Setup",
        "Google Business Profile",
        "1 Month Support",
      ],
    },
    {
      id: "momentum",
      title: "Momentum",
      subtitle: "For brands ready to scale",
      price: "₹2,999",
      badge: "Growth",
      highlight: false,
      color: "from-green-600 to-emerald-700",
      features: [
        "Up to 10 Pages",
        "On-Page SEO",
        "Blog Setup",
        "Social Media Setup (2 Platforms)",
      ],
    },
    {
      id: "velocity",
      title: "Velocity",
      subtitle: "Advanced strategy & performance",
      price: "₹4,999",
      badge: "Advanced",
      highlight: false,
      color: "from-purple-600 to-fuchsia-700",
      features: [
        "Advanced Website",
        "SEO + Content Strategy",
        "Paid Ads Setup",
        "Analytics Dashboard",
      ],
    },
    {
      id: "custom",
      title: "Custom Plan",
      subtitle: "Tailored exactly to your needs",
      price: "Custom",
      badge: "Tailor-Made",
      highlight: false,
      color: "from-pink-600 to-rose-700",
      features: [
        "Custom Design & Development",
        "Flexible Features",
        "SEO & Performance Optimization",
        "Scalable Architecture",
      ],
    },
  ];

  return (
    <>
      <Header />

      {/* HERO */}
      <section className="bg-gray-50 py-20 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            Pricing Plans
          </h1>
          <p className="mt-4 text-gray-600 font-outfit max-w-2xl mx-auto">
            Simple, transparent pricing designed to grow with your business.
            No hidden costs. No fake promises.
          </p>
        </div>
      </section>

      {/* PRICING GRID */}
      <section className="pb-24 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`relative bg-white rounded-2xl border shadow-sm
                flex flex-col h-full
                ${plan.highlight ? "ring-2 ring-indigo-500 scale-[1.02]" : ""}
                hover:shadow-xl transition-all duration-300`}
            >
              {/* BADGE */}
              <div
                className={`absolute -top-3 left-6 px-4 py-1 text-xs font-semibold text-white rounded-full
                bg-gradient-to-r ${plan.color}`}
              >
                {plan.badge}
              </div>

              {/* HEADER */}
              <div
                className={`rounded-t-2xl p-6 text-white bg-gradient-to-r ${plan.color}`}
              >
                <h2 className="text-2xl font-bold font-outfit">
                  {plan.title}
                </h2>
                <p className="text-sm opacity-90 font-outfit mt-1">
                  {plan.subtitle}
                </p>
                <p className="text-3xl font-bold mt-4 text-yellow-300">
                  {plan.price}
                </p>
              </div>

              {/* BODY */}
              <div className="p-6 flex flex-col flex-1">
                <ul className="space-y-2 font-outfit text-gray-700 mb-6 text-sm">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex gap-2">
                      <i className="fas fa-check text-green-600 mt-1"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* BUTTON — ALWAYS BOTTOM */}
                <Link
                  to={`/pricing/${plan.id}`}
                  className={`mt-auto block text-center font-semibold font-outfit py-3 rounded-xl
                  ${plan.highlight
                    ? "bg-indigo-600 text-white hover:bg-indigo-700"
                    : "border border-gray-300 hover:bg-gray-100"
                  } transition`}
                >
                  Get Started
                </Link>
              </div>
            </div>
          ))}

        </div>

        {/* DISCLAIMER */}
        <p className="text-center text-xs text-gray-500 mt-12 font-outfit max-w-3xl mx-auto">
          *Prices are indicative and may vary based on scope and requirements.
          Final pricing is confirmed after discussion.
        </p>
      </section>

      <Footer />
    </>
  );
}
