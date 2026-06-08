import React from "react";

const IndukanthiSection = ({ image }) => (
  <section id="indukanthi" className="home-indukanthi">
    <div className="home-indukanthi__inner">
      <div className="home-indukanthi__text">
        <p className="eyebrow">New Product</p>
        <h2 className="home-indukanthi__title">Indukanthi — Herbal Hair Oil</h2>
        <p className="home-indukanthi__desc">
          A rejuvenating hair oil crafted with traditional herbs to strengthen
          roots, reduce breakage, and promote natural shine. Use nightly for
          best results.
        </p>
        <ul className="home-indukanthi__points">
          <li>Cold-pressed botanical oils</li>
          <li>No synthetic fragrances or parabens</li>
          <li>Cruelty-free & sustainably sourced</li>
        </ul>
        <div className="home-indukanthi__actions">
          <a
            href="https://wa.me/7559067973"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary"
          >
            Shop Indukanthi
          </a>
          {/* <button className="btn btn-ghost">Learn More</button> */}
        </div>
      </div>

      <div className="home-indukanthi__image">
        <img src={image} alt="Indukanthi Hair Oil" />
      </div>
    </div>
  </section>
);

export default IndukanthiSection;
