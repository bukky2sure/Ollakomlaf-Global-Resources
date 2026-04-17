import React from "react";
import ink1 from "../assets/ink1.jpg";

const AboutUs = () => {
  return (
    <div
      className="relative bg-cover bg-center bg-no-repeat py-20 px-6"
      style={{ backgroundImage: `url(${ink1})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/70"></div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto text-white leading-relaxed">
        <h1 className="text-4xl md:text-5xl font-bold mb-8">
          <span className="text-yellow-500 text-4xl">About</span> <span className="text-blue-700 text-4xl">OLLARKOMLAF GLOBAL RESOURCES</span> 
        </h1>

        <p className="mb-6 text-lg">
          Ollarkomlaf Global Services is a trusted and forward-thinking supplier
          of printing machines, materials, and consumables, committed to
          empowering businesses within the printing and packaging industry. With
          a strong dedication to quality and innovation, we provide solutions
          that help organizations achieve excellence in every stage of their
          production process.
        </p>

        <p className="mb-6 text-lg">
          Our company specializes in the distribution of high-quality printing
          equipment and essential consumables, including inks, printing plates,
          blankets, and industrial chemicals. We carefully source our products
          to meet global standards, ensuring durability, efficiency, and
          consistent performance for our clients.
        </p>

        <p className="mb-10 text-lg">
          At Ollarkomlaf Global Services, we understand the importance of
          reliability in the printing business. That is why we focus on providing
          cost-effective solutions that not only enhance productivity but also
          deliver outstanding print quality. We proudly serve printing presses,
          publishers, packaging companies, and corporate organizations, ensuring
          they have access to the right tools needed for success in a competitive
          market.
        </p>

        {/* MISSION */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Our Mission
          </h2>
          <p className="text-lg">
            Our mission is to provide top-quality printing solutions that
            enhance productivity, improve efficiency, and deliver exceptional
            results. We are committed to supporting our clients with reliable
            products and excellent customer service at every step.
          </p>
        </div>

        {/* VISION */}
        <div className="mb-10">
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Our Vision
          </h2>
          <p className="text-lg">
            Our vision is to become a leading and trusted name in the printing
            supply industry across Nigeria and beyond, known for quality,
            integrity, and innovation.
          </p>
        </div>

        {/* VALUES */}
        <div>
          <h2 className="text-2xl md:text-3xl font-semibold mb-3">
            Our Core Values
          </h2>
          <ul className="list-disc pl-6 text-lg space-y-2">
            <li>
              <strong>Integrity:</strong> We conduct our business with honesty
              and transparency.
            </li>
            <li>
              <strong>Excellence:</strong> We strive to deliver the highest
              quality in all our products and services.
            </li>
            <li>
              <strong>Reliability:</strong> We ensure consistency and dependability
              in every solution we provide.
            </li>
            <li>
              <strong>Customer Focus:</strong> Our clients are at the center of
              everything we do.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;