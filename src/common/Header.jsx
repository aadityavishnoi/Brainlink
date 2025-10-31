import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Brainlink Software" />
          <span className="self-center text-1xl font-outfit font-semibold whitespace-nowrap">
            Brainlink Softwares
          </span>
        </a>

        {/* Mobile menu toggle */}
        <button
          type="button"
          onClick={() => setMenuOpen(!menuOpen)}
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>

        {/* Navigation links */}
        <div className={`${menuOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-white">
            <li><a href="/" className="font-outfit block py-2 px-3 text-blue-700">Home</a></li>
            <li><a href="/carrier" className="font-outfit block py-2 px-3 hover:text-blue-700">Carriers</a></li>
            <li><a href="/service" className="font-outfit block py-2 px-3 hover:text-blue-700">Services</a></li>
            <li><a href="/pricing" className="font-outfit block py-2 px-3 hover:text-blue-700">Pricing</a></li>
            <li><a href="/contact" className="font-outfit block py-2 px-3 hover:text-blue-700">Contact</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
