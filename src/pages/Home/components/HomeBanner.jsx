import React from "react";
import whatsapp from "../../../images/whatsapp.png";
const HomeBanner = () => (
  <section className="home-banner">
    <div className="home-banner__content">
      <div className="home-banner__text">
        <p className="home-banner__tagline">
          🌿 30+ Years of Ayurvedic Excellence
        </p>
        <h1 className="home-banner__title">
          Pure Ayurveda, Naturally Effective
        </h1>
        <p className="home-banner__subtitle">
          Premium Ayurvedic products inspired by ancient wisdom and made with
          nature's finest ingredients.
        </p>
        <div className="home-banner__actions">
          <button className="btn btn-primary">Get Started</button>
          {/* <button className="btn btn-ghost">Learn More</button> */}
          <a href="#new-products" className="btn btn-secondary">
            Shop New
          </a>
        </div>
      </div>
    </div>
    <a
      href="tel:+917559067973"
      className="call-button"
      aria-label="Call KVM Ayurvedics"
    >
      <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
        <path d="M6.62 10.79a15.466 15.466 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.31 11.31 0 0 0 3.55.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h2.5a1 1 0 0 1 1 1 11.31 11.31 0 0 0 .57 3.55 1 1 0 0 1-.24 1.01l-2.2 2.23Z" />
      </svg>
    </a>
    <a
      href="https://wa.me/7559067973"
      target="_blank"
      rel="noopener noreferrer"
      className="whatsapp-button"
    >
      <img src={whatsapp} alt="WhatsApp" />
    </a>
  </section>
);

export default HomeBanner;
