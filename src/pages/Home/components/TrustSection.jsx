import React from "react";

const trustCards = [
  {
    icon: "✔",
    title: "Purity Tested",
    text: "Each batch is tested to ensure clean, gentle, and effective herbal care.",
  },
  {
    icon: "🌿",
    title: "Natural Ingredients",
    text: "We use ethically sourced botanicals and nourishing oils for safe daily use.",
  },
  {
    icon: "🤝",
    title: "Customer Loved",
    text: "Our products are trusted by customers seeking authentic wellness support.",
  },
  {
    icon: "☀️",
    title: "Transparent Practices",
    text: "We share our ingredients and formulations openly so you can feel confident.",
  },
];

const TrustSection = () => (
  <section className="home-trust" id="trustworthiness">
    <div className="home-trust__intro">
      <h2>Our products are crafted with trust and transparency</h2>
      <p className="home-trust__description">
        Every formulation is rooted in Ayurvedic tradition, purity testing, and
        customer confidence.
      </p>
    </div>

    <div className="home-trust__grid">
      {trustCards.map((card) => (
        <article key={card.title} className="trust-card">
          <div className="trust-card__icon">{card.icon}</div>
          <h3>{card.title}</h3>
          <p>{card.text}</p>
        </article>
      ))}
    </div>
  </section>
);

export default TrustSection;
