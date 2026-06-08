import React from "react";

const ProductCard = ({ product }) => (
  <article className="product-card">
    <div className="product-card__image">
      <img src={product.image} alt={product.title} />
    </div>
    <div className="product-card__body">
      <h3 className="product-card__title">{product.title}</h3>
      <p className="product-card__price">{product.price}</p>
      <div className="product-card__actions">
        <button className="btn btn-buy">
          <a
            href="https://wa.me/7559067973"
            target="_blank"
            rel="noopener noreferrer"
          >
            Buy Now
          </a>
        </button>
      </div>
    </div>
  </article>
);

export default ProductCard;
