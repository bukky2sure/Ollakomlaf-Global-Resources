import React from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaInstagram, FaTwitter, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-blue-800 text-white">
      <div className="max-w-7xl mx-auto px-4 py-8">

        {/* Main Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 text-center sm:text-left">

          {/* About Us */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold mb-3">
              About Us
            </h2>
            <p className="text-sm md:text-base leading-relaxed font-medium">
              OLLARKOMLAF GLOBAL RESOURCES is a trusted provider of high-quality
              printing machines, inks, plates, blankets, and industrial chemicals.
              Our mission is to deliver reliable printing solutions and support
              businesses in achieving excellence and efficiency in every print.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold mb-3">
              Quick Links
            </h2>
            <ul className="space-y-2 text-sm md:text-base font-semibold">
              <li>
                <NavLink to="/" className="hover:underline">
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/about" className="hover:underline">
                  About Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/contact" className="hover:underline">
                  Contact Us
                </NavLink>
              </li>
              <li>
                <NavLink to="/products" className="hover:underline">
                  Products
                </NavLink>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h2 className="text-xl md:text-2xl font-extrabold mb-3">
              Contact Us
            </h2>

            <div className="text-sm md:text-base space-y-2 font-medium">
              <p>
                <strong>Email:</strong> ollarkomlaf@gmail.com
              </p>

              <p>
                <strong>Phone:</strong><br />
                +234 8034085192<br />
              </p>
              <p>
                <strong>Address: </strong>
                18,Gasper Street, <br />Ikate-Lawanson Surulere Lagos.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className=" border-white/30 mt-6 pt-4 text-center text-sm md:text-base font-medium">
          <p>&copy; 2026 OLLARKOMLAF GLOBAL RESOURCES. All rights reserved.</p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;