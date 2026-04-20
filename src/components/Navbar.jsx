import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import logoP from "../assets/logoP.png";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const linkStyle = ({ isActive }) =>
    isActive
      ? "text-yellow-300 md:font-semibold font-bold"
      : "hover:text-yellow-300 md:font-semibold font-bold";

  return (
    <nav className="bg-blue-800 text-white shadow-md">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        
        {/* Logo */}
        <div className="flex flex-col items-center">
          <img
            src={logoP}
            alt="logo"
            className="w-24 h-24 md:w-24 md:h-24 object-contain"
          />
          <h1 className="text-sm md:text-lg font-bold tracking-wide">
            OLLARKOMLAF
          </h1>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8 text-lg">
          <NavLink to="/" className={linkStyle}>Home</NavLink>
          <NavLink to="/about" className={linkStyle}>AboutUs</NavLink>
          <NavLink to="/products" className={linkStyle}>Products</NavLink>
          <NavLink to="/contact" className={linkStyle}>ContactUs</NavLink>
        </div>

        {/* Desktop Button */}
        <div className="hidden md:block">
          <Link to="/contact">
            <button className="bg-blue-700 hover:bg-white hover:text-blue-800 text-yellow-400 px-5 py-2 rounded-full font-bold transition">
              Get Started
            </button>
          </Link>
        </div>

        {/* Mobile Menu Icon */}
        <div className="md:hidden text-2xl cursor-pointer mr-6">
          {menuOpen ? (
            <FaTimes onClick={() => setMenuOpen(false)} />
          ) : (
            <FaBars onClick={() => setMenuOpen(true)} />
          )}
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden bg-blue-800 px-6 pb-6 space-y-4 text-center text-lg flex flex-col font-extrabold">
          <NavLink to="/" onClick={() => setMenuOpen(false)} className={linkStyle}>Home</NavLink>
          <NavLink to="/about" onClick={() => setMenuOpen(false)} className={linkStyle}>AboutUs</NavLink>
          <NavLink to="/products" onClick={() => setMenuOpen(false)} className={linkStyle}>Products</NavLink>
          <NavLink to="/contact" onClick={() => setMenuOpen(false)} className={linkStyle}>ContactUs</NavLink>

          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            <button className="mt-4 bg-blue-700 hover:bg-white hover:text-blue-800 text-yellow-400 px-5 py-2 rounded-full font-extrabold transition w-full">
              Get Started
            </button>
          </Link>
        </div>
      )}
    </nav>
  );
}