import React, { useState } from "react";
import logo from "../assets/logo/logo.png";
import "@fortawesome/fontawesome-free/css/all.min.css";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white border-gray-200">
      <div className="max-w-screen-xl flex flex-col items-center justify-between mx-auto p-4 md:flex-row">
        {/* Logo */}
        <a href="/" className="flex items-center space-x-3 rtl:space-x-reverse">
          <img src={logo} className="h-8" alt="Brainlink Software" />
          <span className="self-center text-1xl font-outfit font-semibold whitespace-nowrap">
            Brainlink Softwares
          </span>
        </a>

        {/* Navigation links */}
        <div className="flex flex-col">
          <ul className="grid grid-cols-5 font-outfit text-base font-semibold m-4">
            <li><a href="/" className="font-outfit block py-2 px-3 text-blue-700">Home</a></li>
            {/* <li><a href="/carrier" className="font-outfit block py-2 px-3 hover:text-blue-700">Carriers</a></li> */}
            <li><a href="/service" className="font-outfit block py-2 px-3 hover:text-blue-700">Services</a></li>
            <li><a href="/pricing" className="font-outfit block py-2 px-3 hover:text-blue-700">Pricing</a></li>
            <li><a href="/contact" className="font-outfit block py-2 px-3 hover:text-blue-700">Contact</a></li>
            <li><a href="/team" className="font-outfit block py-2 px-3 hover:text-blue-700">Team</a></li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
