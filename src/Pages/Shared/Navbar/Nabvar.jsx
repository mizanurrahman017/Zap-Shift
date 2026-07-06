import React from "react";
import { FaArrowUp } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    { name: "Services", path: "#" },
    { name: "Coverage", path: "#" },
    { name: "About Us", path: "#" },
    { name: "Pricing", path: "#" },
    { name: "Blog", path: "#" },
    { name: "Contact", path: "#" },
  ];

  return (
    <header className="py-6 bg-[#E9E9E9]">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl px-8 py-4 flex items-center justify-between shadow-sm">

        {/* Logo */}
        <div className="flex items-center">
            
          <img
            src="/src/assets/logo.png"
            alt="ZapShift Logo"
            className="h-10 object-contain"
          />
          <h3 className="f">ZapShift</h3>
        </div>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="text-gray-600 hover:text-lime-500 transition duration-300 font-medium"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <button className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition">
            Sign In
          </button>

          <button className="bg-lime-300 px-8 py-3 rounded-xl font-semibold hover:bg-lime-400 transition">
            Sign Up
          </button>

          <button className="w-12 h-12 rounded-full bg-[#222222] text-lime-300 flex items-center justify-center hover:rotate-45 transition duration-300">
            <FaArrowUp className="rotate-45" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;