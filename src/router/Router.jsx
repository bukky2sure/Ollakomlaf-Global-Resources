import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "../pages/Home";
import AboutUs from "../pages/AboutUs";
import Products from "../pages/Products";
import ContactUs from "../pages/ContactUs";

import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ProductDetail from "../pages/ProductDetail";

const Router = () => {
  return (
    <BrowserRouter>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/products/:id" element={<ProductDetail />} />
        
      </Routes>

      <Footer />
    </BrowserRouter>
  );
};

export default Router;