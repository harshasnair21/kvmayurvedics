import React, { useState } from "react";
import "./index.css";
import indukanti from "../../images/indukanti.png";
import nidraplus from "../../images/nidraplus.png";
import hairdye from "../../images/hairdye.png";
import painbalms from "../../images/painbalm.png";
import ProductCard from "../Home/components/ProductCard";

const Shop = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");

  const allProducts = [
    {
      id: 1,
      title: "Indukanthi Oil",
      subtitle: "Nourish skin with herbal goodness",
      image: indukanti,
      price: "Rs. 499",
      category: "oils",
    },
    {
      id: 2,
      title: "Nidra Plus Oil",
      subtitle: "Keep your glow natural and gentle",
      image: nidraplus,
      price: "Rs. 300",
      category: "oils",
    },
    {
      id: 3,
      title: "Hairdye",
      subtitle: "Revitalize body and mind with herbs",
      image: hairdye,
      price: "Rs. 350",
      category: "haircare",
    },
    {
      id: 4,
      title: "Pain Balm",
      subtitle: "A calming routine crafted from healing leaves",
      image: painbalms,
      price: "Rs. 80",
      category: "balms",
    },
  ];

  const categories = [
    { id: "all", label: "All Products" },
    { id: "oils", label: "Oils" },
    { id: "haircare", label: "Hair Care" },
    { id: "balms", label: "Balms" },
  ];

  const filteredProducts =
    selectedCategory === "all"
      ? allProducts
      : allProducts.filter((product) => product.category === selectedCategory);

  return (
    <div className="shop-page">
      {/* Hero Section */}
      <section className="shop-hero">
        <div className="shop-hero__content">
          <h1 className="shop-hero__title">Our Ayurvedic Collection</h1>
          <p className="shop-hero__subtitle">
            Explore our premium range of authentic Ayurvedic products crafted
            for holistic wellness
          </p>
        </div>
      </section>

      {/* Shop Section */}
      <section className="shop-section">
        <div className="shop-container">
          {/* Filter Bar */}
          <div className="shop-filters">
            <h3 className="filters-title">Filter by Category</h3>
            <div className="filter-buttons">
              {categories.map((category) => (
                <button
                  key={category.id}
                  className={`filter-btn ${
                    selectedCategory === category.id ? "filter-btn--active" : ""
                  }`}
                  onClick={() => setSelectedCategory(category.id)}
                >
                  {category.label}
                </button>
              ))}
            </div>
          </div>

          {/* Products Grid */}
          <div className="shop-content">
            <div className="products-header">
              <h2 className="products-count">
                Showing {filteredProducts.length} products
              </h2>
            </div>

            <div className="shop-grid">
              {filteredProducts.length > 0 ? (
                filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))
              ) : (
                <div className="no-products">
                  <p>No products found in this category.</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="shop-features">
        <div className="features-container">
          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z" />
              </svg>
            </div>
            <h3 className="feature-title">100% Authentic</h3>
            <p className="feature-text">
              Genuine Ayurvedic products sourced from trusted suppliers
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
              </svg>
            </div>
            <h3 className="feature-title">Customer Satisfaction</h3>
            <p className="feature-text">
              Trusted by thousands of happy customers worldwide
            </p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="32"
                height="32"
              >
                <path d="M20 8h-3V4c0-.82-.68-1.5-1.5-1.5h-9C6.68 2.5 6 3.18 6 4v4H3c-1.1 0-2 .9-2 2v10c0 1.1.9 2 2 2h18c1.1 0 2-.9 2-2v-10c0-1.1-.9-2-2-2zm-11-4h8v4h-8V4zm11 14H3v-10h17v10z" />
              </svg>
            </div>
            <h3 className="feature-title">Fast Delivery</h3>
            <p className="feature-text">
              Quick and secure shipping to your doorstep
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Shop;
