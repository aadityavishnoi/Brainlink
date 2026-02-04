import React from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Contacts() {
  return (
    <section className="bg-gray-50 py-20 px-4">
      <div className="max-w-5xl mx-auto">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h1 className="text-3xl md:text-4xl font-bold font-outfit">
            Get in Touch
          </h1>
          <p className="text-gray-600 font-outfit mt-2">
            Let’s discuss your project or just say hello.
          </p>
        </div>

        {/* Card */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 bg-white rounded-2xl shadow-xl overflow-hidden">
          
          {/* Left Info */}
          <div className="bg-gradient-to-br from-indigo-600 to-violet-700 text-white p-8">
            <img
              src={logo}
              alt="Brainlink Softwares"
              className="w-12 bg-white p-2 rounded-xl mb-6"
            />

            <ul className="space-y-5 font-outfit text-sm md:text-base">
              <li className="flex items-start gap-4">
                <i className="fas fa-location-dot text-lg mt-1"></i>
                <span>Knowledge Park 2, Greater Noida (201306)</span>
              </li>

              <li className="flex items-center gap-4">
                <i className="fas fa-phone text-lg"></i>
                <a
                  href="tel:+919412330177"
                  className="hover:underline"
                >
                  +91-94123-30177
                </a>
              </li>

              <li className="flex items-center gap-4">
                <i className="fas fa-envelope text-lg"></i>
                <a
                  href="mailto:team.brainlink@gmail.com"
                  className="hover:underline"
                >
                  team.brainlink@gmail.com
                </a>
              </li>
            </ul>

            {/* Socials */}
            <div className="flex gap-5 mt-8 text-xl">
              <a href="https://www.instagram.com/brainlinksoftwares/" aria-label="Instagram">
                <i className="fab fa-instagram hover:opacity-80"></i>
              </a>
              <a href="https://www.linkedin.com/company/brainlinksoftwares/" aria-label="LinkedIn">
                <i className="fab fa-linkedin hover:opacity-80"></i>
              </a>
              <a href="https://x.com/BrainlinkIndia" aria-label="X">
                <i className="fab fa-twitter hover:opacity-80"></i>
              </a>
            </div>
          </div>

          {/* Right CTA */}
          <div className="p-8 flex flex-col justify-center">
            <h2 className="text-2xl font-bold font-outfit mb-4">
              Ready to start a project?
            </h2>

            <p className="text-gray-600 font-outfit mb-8">
              Tell us about your idea and we’ll get back with a clear plan and timeline.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/919412330177?text=Hi,%20Brainlink%20Softwares"
                className="bg-green-600 text-white text-center font-semibold py-3 px-6 rounded-xl hover:bg-green-700 transition font-outfit"
              >
                WhatsApp Us
              </a>

              <a
                href="tel:+919412330177"
                className="border-2 border-indigo-600 text-indigo-600 text-center font-semibold py-3 px-6 rounded-xl hover:bg-indigo-600 hover:text-white transition font-outfit"
              >
                Call Now
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
