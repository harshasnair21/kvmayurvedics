import React from "react";
import ProductCard from "./ProductCard";

const ProductSection = ({ products }) => (
  <section id="new-products" className="home-products">
    <div className="home-products__intro">
      <p className="eyebrow">New Products</p>
      <h2>Discover our latest Essentials</h2>
      <p className="home-products__description">
        Explore a curated collection of herbal oils and wellness blends designed
        for everyday self-care.
      </p>
    </div>

    <div className="home-products__grid">
      {products.map((product) => (
        <ProductCard key={product.title} product={product} />
      ))}
    </div>
  </section>
);

export default ProductSection;
