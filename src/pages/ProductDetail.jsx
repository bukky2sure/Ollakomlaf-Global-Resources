import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";

import print1 from "../assets/print1.jpeg";
import print2 from "../assets/print2.jpeg";
import print3 from "../assets/print3.jpeg";
import print4 from "../assets/print4.jpeg";
import print5 from "../assets/print5.jpeg";
import print6 from "../assets/print6.jpeg";
import print7 from "../assets/print7.jpeg";
import print8 from "../assets/print8.jpeg";
import print9 from "../assets/print9.jpeg";
import print10 from "../assets/print10.jpeg";
import print11 from "../assets/print11.jpeg";
import print12 from "../assets/print12.jpeg";
import print13 from "../assets/print13.jpeg";
import print14 from "../assets/print14.jpeg";

const products = [
  { id: 1, name: "Printing Plates", desc: "High-quality plates used in offset printing.", image: print1 },
  { id: 2, name: "Printing Plates", desc: "High-quality plates used in offset printing.", image: print14 },
  { id: 3, name: "Spray Powder", desc: "Prevents ink smudging during printing.", image: print2 },
  { id: 4, name: "Thermal Developer Chemical", desc: "Used for processing printing plates efficiently.", image: print3 },
  { id: 5, name: "Offset Inks", desc: "Premium inks for high-quality printing results.", image: print4 },
  { id: 6, name: "Printing Blanket", desc: "Durable blanket for smooth ink transfer.", image: print5 },
  { id: 7, name: "Plate Cleaner", desc: "Used for cleaning printing plates.", image: print6 },
  { id: 8, name: "Plate Gum", desc: "Protects plates from oxidation.", image: print7 },
  { id: 9, name: "Plate Cleaner", desc: "Effective cleaner for maintaining printing plates.", image: print8 },
  { id: 10, name: "Digital Recording Films", desc: "Films used for high-resolution image transfer.", image: print9 },
  { id: 11, name: "Chemical for Digital Recording Film", desc: "Processing chemical for recording films.", image: print10 },
  { id: 12, name: "Printing Plate", desc: "Used in offset printing machines.", image: print11 },
  { id: 13, name: "Offset Printing Ink (Huada Ink)", desc: "High-quality ink for offset printing.", image: print12 },
  { id: 14, name: "Fountain Solution", desc: "Maintains proper ink-water balance in printing.", image: print13 },
];

export default function ProductDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="text-center py-20 text-lg font-semibold">
        Product not found
      </div>
    );
  }

  const handleContactClick = () => {
    navigate("/contact", { state: { productName: product.name } });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-10 py-8 md:py-12">
      
      {/* Back Button */}
      <Link
        to="/products"
        className="text-blue-600 hover:underline text-sm sm:text-base"
      >
        ← Back to Products
      </Link>

      {/* Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12 mt-6 items-center">
        
        {/* IMAGE */}
        <div className="bg-gray-100 rounded-xl flex items-center justify-center p-4 sm:p-6">
          <img
            src={product.image}
            alt={product.name}
            className="w-full max-h-[300px] sm:max-h-[400px] object-contain"
          />
        </div>

        {/* DETAILS */}
        <div className="text-center md:text-left">
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-blue-900 mb-4">
            {product.name}
          </h1>

          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-6">
            {product.desc}
          </p>

          <button
            onClick={handleContactClick}
            className="w-full sm:w-auto bg-blue-700 text-white px-6 py-3 rounded-lg hover:bg-blue-800 transition font-semibold"
          >
            Contact for Purchase
          </button>
        </div>
      </div>
    </div>
  );
}