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

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h1 className="text-4xl md:text-5xl font-outfit font-bold text-gray-900">
            The Team Behind Brainlink
          </h1>
          <p className="mt-5 text-lg text-gray-600 leading-relaxed">
            A focused founding team committed to building reliable, scalable
            and business-ready software solutions.
          </p>
        </div>
      </section>

      {/* Divider */}
      <div className="h-px bg-gray-200 max-w-5xl mx-auto" />

      {/* Team Section */}
      <section className="py-24 bg-white">
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid gap-12 sm:grid-cols-2 justify-center">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group bg-white border border-gray-200 rounded-3xl px-10 py-12 text-center shadow-sm hover:shadow-2xl hover:-translate-y-1 transition-all duration-300"
              >
                <img
                  src={member.img}
                  alt={member.name}
                  className="w-32 h-32 mx-auto rounded-full object-cover ring-4 ring-blue-100 group-hover:ring-blue-300 transition"
                />

                <h3 className="mt-8 text-2xl font-semibold font-outfit text-gray-900">
                  {member.name}
                </h3>

                <p className="mt-2 text-blue-600 font-medium tracking-wide">
                  {member.role}
                </p>

                {/* Social Links */}
                <div className="mt-6 flex justify-center gap-6 opacity-0 group-hover:opacity-100 transition">
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-blue-700 text-xl"
                    aria-label="LinkedIn"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>

                  <a
                    href={member.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-500 hover:text-pink-500 text-xl"
                    aria-label="Instagram"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Culture Section */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-4xl mx-auto text-center px-6">
          <h2 className="text-3xl font-bold font-outfit text-gray-900">
            How We Work
          </h2>
          <p className="mt-6 text-gray-600 text-lg leading-relaxed">
            We value ownership over titles, clarity over noise, and execution
            over excuses. Every line of code is written with long-term impact
            in mind.
          </p>
        </div>
      </section>

      <Footer />
    </>
  );
}
