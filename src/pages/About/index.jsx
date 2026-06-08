import React from "react";
import "./index.css";

const About = () => {
  return (
    <main className="about-page">
      <section className="about-hero">
        <div className="about-hero__content">
          <p className="about-hero__eyebrow">About KVM Ayurvedics</p>
          <h1 className="about-hero__title">
            Trusted Ayurvedic healthcare for every home.
          </h1>
          <p className="about-hero__text">
            <strong>KVM Ayurvedics</strong> is a trusted name in Ayurvedic
            healthcare, built on over{" "}
            <strong>
              30 years of experience in traditional Ayurvedic treatment and
              wellness care
            </strong>
            . Rooted in the timeless wisdom of Ayurveda, we are committed to
            providing natural, effective, and high-quality products that promote
            healthy living and overall well-being.
          </p>
          <p className="about-hero__text">
            Our journey began with a simple mission: to bring the healing power
            of authentic Ayurveda to every home. Over the years, we have helped
            thousands of individuals improve their health through personalized
            Ayurvedic treatments and carefully formulated herbal products.
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="about-section__content">
          <h2 className="about-section__title">
            Natural care with authentic purpose
          </h2>
          <p className="about-section__text">
            We offer a wide range of products, including herbal hair oils for
            healthy, strong, and nourished hair; natural hair dyes made with
            herbal ingredients; sleep oils to support relaxation and restful
            sleep; Ayurvedic face packs for healthy and radiant skin; and
            traditional Ayurvedic medicines for various health concerns and
            overall wellness.
          </p>
          <p className="about-section__text">
            Every product is prepared with carefully selected herbs and
            ingredients, following authentic Ayurvedic principles to ensure
            purity, safety, and effectiveness.
          </p>

          <h3 className="about-section__subtitle">Our Vision</h3>
          <p className="about-section__text">
            To preserve and promote the rich heritage of Ayurveda by providing
            natural healthcare solutions that enhance the quality of life for
            people of all ages.
          </p>

          <h3 className="about-section__subtitle">Our Promise</h3>
          <ul className="about-list">
            <li>30+ Years of Ayurvedic Expertise</li>
            <li>Authentic Herbal Formulations</li>
            <li>Quality Ingredients</li>
            <li>Trusted Traditional Remedies</li>
            <li>Customer-Centered Care</li>
          </ul>

          <p className="about-section__text about-section__emphasis">
            Experience the healing touch of nature with KVM Ayurvedics – where
            tradition meets wellness.
          </p>
        </div>
      </section>
    </main>
  );
};

export default About;
