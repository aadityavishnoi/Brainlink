import React from "react";
import Header from "../common/Header";
import Footer from "../common/Footer";
import "../css/index.css";

const teamMembers = [
  {
    name: "Aaditya Vishnoi",
    role: "Co-Founder",
    img: "https://media.licdn.com/dms/image/v2/D5603AQEwlb2boefMFA/profile-displayphoto-scale_400_400/B56ZpF2eFBHQAg-/0/1762108500586?e=1770249600&v=beta&t=CzZIFcDA1c67mpokXXbmRAD4pPP6SqOgrMpBwO3Hat8",
    linkedin: "https://www.linkedin.com/in/aaditya-vishnoi",
    instagram: "https://www.instagram.com/aaditya.vishnoi",
  },
  {
    name: "Ayush Gautam",
    role: "Co-Founder",
    img: "https://ui-avatars.com/api/?name=Ayush+Gautam&background=0ea5e9&color=fff",
    linkedin: "https://www.linkedin.com/in/ayush-gautam",
    instagram: "https://www.instagram.com/ayush.gautam",
  },
];

export default function Team() {
  return (
    <>
      <Header />

      {/* Hero */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-28">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            The People Powering Brainlink
          </h1>
          <p className="mt-6 text-lg text-gray-600">
            We don’t build random software. We build systems that businesses
            can rely on for years.
          </p>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-10 text-center">
          {[
            ["20+", "Projects Delivered"],
            ["5+", "Industries Served"],
            ["99%", "Client Satisfaction"],
            ["24/7", "Support Mindset"],
          ].map(([value, label], i) => (
            <div key={i}>
              <h3 className="text-4xl font-bold text-blue-600">{value}</h3>
              <p className="mt-2 text-gray-600">{label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16 font-outfit">
            Founding Team
          </h2>
          <div className="grid gap-12 sm:grid-cols-2 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border rounded-3xl px-10 py-12 text-center shadow-sm hover:shadow-xl transition"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-blue-100"
                />
                <h3 className="mt-8 text-2xl font-semibold">{member.name}</h3>
                <p className="mt-2 text-blue-600">{member.role}</p>

                <div className="mt-6 flex justify-center gap-6">
                  <a href={member.linkedin} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-blue-700 text-xl">
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a href={member.instagram} target="_blank" rel="noreferrer" className="text-gray-500 hover:text-pink-500 text-xl">
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-14">
            What We Do Best
          </h2>
          <div className="grid md:grid-cols-3 gap-10">
            {[
              ["Scalable Web Apps", "Systems that grow with your business"],
              ["API & Backend", "Secure, optimized, production-ready"],
              ["UI / UX Design", "Clean interfaces users actually enjoy"],
            ].map(([title, desc], i) => (
              <div key={i} className="p-8 border rounded-2xl hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-3">{title}</h3>
                <p className="text-gray-600">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
          <p className="text-lg text-gray-600">
            To become a trusted technology partner for startups and
            enterprises by delivering honest engineering, not buzzwords.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-blue-600 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">
          Ready to Build Something Solid?
        </h2>
        <p className="mb-8 text-lg text-blue-100">
          Let’s talk about your idea and turn it into a working product.
        </p>
        <a
          href="/contact"
          className="inline-block bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl hover:bg-gray-100 transition"
        >
          Contact Us
        </a>
      </section>

      <Footer />
    </>
  );
}
