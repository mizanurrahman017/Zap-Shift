import React from "react";
import { NavLink } from "react-router";
import { FaArrowUp } from "react-icons/fa6";

const Navbar = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Coverage", path: "/coverage" },
    { name: "About Us", path: "/about" },
    { name: "Pricing", path: "/pricing" },
    { name: "Blog", path: "/blog" },
    { name: "Contact", path: "/contact" },
  ];
  // ami
   // ami 

  return (
    <header className="py-6 bg-[#E9E9E9]">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl px-8 py-4 flex items-center justify-between shadow-sm">

        {/* Logo */}
        <NavLink to="/" className="flex items-center gap-3">
          <img
            src="/src/assets/logo.png"
            alt="ZapShift Logo"
            className="h-10 object-contain"
          />
          <h3 className="text-2xl font-bold text-[#0C3D46]">
            ZapShift
          </h3>
        </NavLink>

        {/* Menu */}
        <nav className="hidden lg:flex items-center gap-10">
          {links.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `font-medium transition duration-300 ${
                  isActive
                    ? "text-lime-500"
                    : "text-gray-600 hover:text-lime-500"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        {/* Buttons */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/signin"
            className="border border-gray-300 px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Sign In
          </NavLink>

          <NavLink
            to="/signup"
            className="bg-lime-300 px-8 py-3 rounded-xl font-semibold hover:bg-lime-400 transition"
          >
            Sign Up
          </NavLink>

          <NavLink
            to="/contact"
            className="w-12 h-12 rounded-full bg-[#222222] text-lime-300 flex items-center justify-center hover:rotate-45 transition duration-300"
          >
            <FaArrowUp className="rotate-45" />
          </NavLink>
        </div>
      </div>
    </header>
  );
};

export default Navbar;