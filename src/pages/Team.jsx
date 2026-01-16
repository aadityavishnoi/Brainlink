import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";

const teamMembers = [
  {
    name: "Aaditya Vishnoi",
    role: "Founder & Lead Engineer",
    img: "https://ui-avatars.com/api/?name=Aaditya+Vishnoi&background=2563eb&color=fff",
  },
  {
    name: "Rahul Sharma",
    role: "Full Stack Developer",
    img: "https://ui-avatars.com/api/?name=Rahul+Sharma&background=0ea5e9&color=fff",
  },
  {
    name: "Sneha Verma",
    role: "UI / UX Designer",
    img: "https://ui-avatars.com/api/?name=Sneha+Verma&background=9333ea&color=fff",
  },
];

export default function Team() {
  return (
    <>
      <Header />

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            Meet the Minds Behind Brainlink
          </h1>
          <p className="mt-4 text-lg text-gray-600 max-w-3xl mx-auto">
            We are a small but focused team building scalable, reliable and
            future-ready software products.
          </p>
        </div>
      </section>

      {/* Team Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid gap-10 sm:grid-cols-2 md:grid-cols-3">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-2xl p-8 text-center shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-28 h-28 mx-auto rounded-full border-4 border-white shadow-md group-hover:scale-105 transition"
                />
                <h3 className="mt-6 text-xl font-semibold font-outfit text-gray-900">
                  {member.name}
                </h3>
                <p className="text-blue-600 font-medium mt-1">
                  {member.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold font-outfit text-gray-900">
            Our Work Culture
          </h2>
          <p className="mt-4 text-gray-600 text-lg">
            We believe in ownership, clean code, honest communication and
            building things that actually solve problems — not just look good
            in presentations.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
