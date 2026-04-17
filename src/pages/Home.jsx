import React from "react";
import ink from "../assets/ink.jpg";

const Home = () => {
  return (
    <div className="bg-gray-50">
      {/* HERO SECTION (NO IMAGE) */}
      <section className="bg-blue-900 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Welcome to <span className="text-yellow-500">Ollarkomlaf</span> Global Resources
        </h1>
        <p className="text-2xl  mx-auto">
          Your trusted partner in printing machines, materials, and consumables.
        </p>
      </section>

      {/* 🔥 BACKGROUND IMAGE STARTS HERE (FROM YOUR TEXT) */}
      <div
        className="relative bg-cover bg-center"
        style={{ backgroundImage: `url(${ink})` }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black bg-opacity-60"></div>

        {/* Content */}
        <div className="relative z-10 text-white">
          {/* INTRO TEXT */}
          <section className="py-12 px-6 text-center max-w-5xl mx-auto">
            <p className="text-2xl">
              At <span className="text-yellow-500">Ollarkomlaf</span>, we provide high-quality printing solutions
              including machines, inks, plates, blankets, and chemicals to help
              your business achieve excellence in every print.
            </p>
          </section>

          {/* WHAT WE OFFER */}
          <section className="py-6 px-6">
            <h2 className="text-3xl font-bold text-center mb-8">
              What We Offer
            </h2>

            <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto">
              {[
                "Printing Machines",
                "Printing Inks",
                "Printing Plates",
                "Printing Blankets",
                "Industrial Chemicals",
                "Technical Support",
              ].map((item, index) => (
                <div
                  key={index}
                  className="bg-white/90 p-6 rounded-lg shadow hover:shadow-lg transition"
                >
                  <h3 className="font-bold text-2xl text-blue-900">
                    {item}
                  </h3>
                </div>
              ))}
            </div>
          </section>

          {/* WHY CHOOSE US */}
          <section className="py-12 px-6">
            <h2 className="text-4xl font-bold text-center mb-8">
              Why Choose Us
            </h2>

            <div className="grid md:grid-cols-2 text-2xl gap-6 max-w-5xl mx-auto">
              <p>✅ Quality Assured Products</p>
              <p>✅ Competitive Pricing</p>
              <p>✅ Reliable Supply Chain</p>
              <p>✅ Technical Support & Guidance</p>
              <p>✅ Customer Satisfaction Focus</p>
            </div>
          </section>
        </div>
      </div>

      {/* CTA (NO BACKGROUND IMAGE) */}
      <section className="bg-blue-900 text-white py-16 text-center">
        <div className="bg-blue-900">
        <h2 className="text-4xl font-bold mb-4">
          Let’s power your printing business
        </h2>
        <p className="text-2xl">Get the best tools and materials for top-quality printing.</p>
        </div>
        
      </section>
    </div>
  );
};

export default Home;
