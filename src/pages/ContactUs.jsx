import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";

const ContactUs = () => {
  return (
    <div className="bg-gray-50 min-h-screen py-12 px-4">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10">

        {/* LEFT SIDE - CONTACT INFO */}
        <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-lg flex flex-col justify-between">
          <div>
            <h1 className="text-3xl font-bold mb-4">
              Get in Touch
            </h1>

            <p className="text-gray-200 mb-8">
              We are here to support your printing needs. Reach out to us
              for inquiries, product requests, or technical assistance.
            </p>

            <div className="space-y-6">
              {/* Address */}
              <div className="flex items-center gap-4">
                <MapPin className="text-yellow-400" />
                <span>18,Gasper Street, <br />Ikate-Lawanson Surulere Lagos.</span>
              </div>

              {/* Phone */}
              <div className="flex items-center gap-4">
                <Phone className="text-yellow-400" />
                <span>+234 8034085192</span>
              </div>

              {/* Email */}
              <div className="flex items-center gap-4">
                <Mail className="text-yellow-400" />
                <span>ollarkomlaf@gmail.com</span>
              </div>
            </div>
          </div>

          <p className="text-sm text-gray-300 mt-10">
            Ollarkomlaf Global Resources — Printing Solutions You Can Trust.
          </p>
        </div>

        {/* RIGHT SIDE - FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">
          <h2 className="text-2xl font-bold text-blue-900 mb-6">
            Send Us a Message
          </h2>

          <form className="space-y-4">

            {/* Name */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                placeholder="Enter your name"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium mb-1">
                Message
              </label>
              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900"
              />
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full bg-blue-900 text-white py-3 rounded-lg font-semibold hover:bg-blue-800 transition"
            >
              Send Message
            </button>
          </form>
        </div>

      </div>
    </div>
  );
};

export default ContactUs;