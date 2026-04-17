import React from "react";
import { NavLink, Link } from "react-router-dom";
import logoP from "../assets/logoP.png";

export default function Navbar() {
  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-300 font-semibold"
      : "hover:text-yellow-300";

  return (
    <nav className="relative bg-blue-800 text-white px-8 py-5 flex items-center justify-between shadow-md">
      
      {/* Logo + Name (left side) */}
      <div className="flex flex-col items-center">
        <img
          src={logoP}
          alt="logo"
          className="w-20 h-20 object-contain"
        />
        <h1 className="text-xl font-bold mt-1 tracking-wide">
          OLLARKOMLAF
        </h1>
      </div>

      {/* Centered Navigation Links */}
      <div className="absolute left-1/2 -translate-x-1/2 flex space-x-10 text-lg">
        <NavLink to="/" className={linkStyle}>Home</NavLink>
        <NavLink to="/about" className={linkStyle}>AboutUs</NavLink>
        <NavLink to="/products" className={linkStyle}>Products</NavLink>
        <NavLink to="/contact" className={linkStyle}>ContactUs</NavLink>
      </div>

      {/* Right side button */}
      <div>
        <Link to="/contact">
          <button className="bg-blue-700 hover:bg-white hover:text-blue-800 text-yellow-400 mr-24 px-5 py-2 rounded-full font-bold transition text-xl">
            Get Started
          </button>
        </Link>
      </div>

    </nav>
  );
}