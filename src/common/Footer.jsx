import React from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-200 dark:bg-gray-800 mt-12">
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between space-y-8 md:space-y-0">
          {/* Logo and Info */}
          <div className="flex flex-col space-y-4">
            <img src={logo} alt="Brainlink Softwares" className="w-10" />
            <p className="text-gray-400 max-w-xs font-outfit">
              Brainlink Softwares creates innovative software solutions to help your business grow and succeed.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2 font-outfit">Quick Links</h3>
            <a href="/" className="hover:text-blue-500 font-outfit">Home</a>
            <a href="/service" className="hover:text-blue-500 font-outfit">Services</a>
            <a href="/contact" className="hover:text-blue-500 font-outfit">Contact</a>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col space-y-2">
            <h3 className="font-semibold text-white mb-2 font-outfit">Contact Us</h3>
            <p className="font-outfit">Email: <a href="mailto:team.brainlink@gmail.com" className="hover:text-blue-500 font-outfit">team.brainlink@gmail.com</a><br />
            Knowledge Park 2, Greater Noida (201310)<br />
            </p>
            <div className="flex space-x-4 mt-2">
              <a href="https://www.linkedin.com/company/brainlinksoftwares/" className="hover:text-blue-500"><i className="fab fa-linkedin-in"></i></a>
              <a href="https://www.instagram.com/brainlinksoftwares/" className="hover:text-blue-500"><i className="fab fa-instagram"></i></a>
              <a href="https://x.com/BrainlinkIndia" className="hover:text-blue-500"><i className="fab fa-twitter"></i></a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-500 text-sm font-outfit">
          ©2025 - {new Date().getFullYear()} Brainlink Softwares. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
