import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {

  return (
<nav className="bg-white border-b border-gray-200">
  <div className="max-w-screen-xl mx-auto px-2 py-3 flex items-center justify-between flex-nowrap">
    
    {/* Logo */}
    <a href="/" className="flex items-center space-x-2 shrink-0">
      <img src={logo} className="h-7 sm:h-8" alt="Brainlink Software" />
      <span className="font-outfit font-semibold whitespace-nowrap
                       text-xs sm:text-sm md:text-base lg:text-lg">
        Brainlink Softwares
      </span>
    </a>

    {/* Navigation links */}
    <ul className="flex items-center font-outfit font-semibold whitespace-nowrap
                   gap-1 sm:gap-2 md:gap-4
                   text-[11px] sm:text-xs md:text-sm lg:text-base">
      <li><a href="/" className="text-blue-700 hover:text-blue-800 m-1 tracking-wide">Home</a></li>
      <li><a href="/service" className="hover:text-blue-700 m-1 tracking-wide">Services</a></li>
      <li><a href="/pricing" className="hover:text-blue-700 m-1 tracking-wide">Pricing</a></li>
      <li><a href="/contact" className="hover:text-blue-700 m-1 tracking-wide">Contact</a></li>
      <li><a href="/team" className="hover:text-blue-700 m-1 tracking-wide">Team</a></li>
    </ul>

  </div>
</nav>

  );
}
