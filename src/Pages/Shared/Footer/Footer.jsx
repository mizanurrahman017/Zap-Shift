import React from "react";
import {
  FaLinkedinIn,
  FaFacebookF,
  FaYoutube,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="bg-[#0B0B0B] text-white rounded-[30px] mx-5 md:mx-10 my-10">
      <div className="max-w-6xl mx-auto px-6 py-14">

        {/* Logo */}
        <div className="flex justify-center items-center gap-2">
          <div className="w-8 h-8 bg-lime-400 rotate-45 rounded-sm"></div>

          <h2 className="text-3xl font-bold">
            <span className="text-lime-400">Zap</span>Shift
          </h2>
        </div>

        {/* Description */}
        <p className="text-gray-400 text-center max-w-2xl mx-auto mt-6 leading-7">
          Enjoy fast, reliable parcel delivery with real-time tracking and
          zero hassle. From personal packages to business shipments — we
          deliver on time, every time.
        </p>

        {/* Divider */}
        <div className="border-t border-cyan-800 border-dashed my-8"></div>

        {/* Nav */}
        <div className="flex flex-wrap justify-center gap-8 text-gray-300 text-sm font-medium">
          <a href="#" className="hover:text-lime-400 duration-300">
            Services
          </a>
          <a href="#" className="hover:text-lime-400 duration-300">
            Coverage
          </a>
          <a href="#" className="hover:text-lime-400 duration-300">
            About Us
          </a>
          <a href="#" className="hover:text-lime-400 duration-300">
            Pricing
          </a>
          <a href="#" className="hover:text-lime-400 duration-300">
            Blog
          </a>
          <a href="#" className="hover:text-lime-400 duration-300">
            Contact
          </a>
        </div>

        {/* Divider */}
        <div className="border-t border-cyan-800 border-dashed my-8"></div>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          <a
            href="#"
            className="w-11 h-11 rounded-full bg-[#0077B5] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaLinkedinIn />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-white text-black flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaXTwitter />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-[#1877F2] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaFacebookF />
          </a>

          <a
            href="#"
            className="w-11 h-11 rounded-full bg-[#FF0000] flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaYoutube />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;