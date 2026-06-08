import React, { useState } from "react";
import "./index.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you would typically send the form data to a server
    console.log("Form submitted:", formData);
    setSubmitted(true);

    // Reset form after 3 seconds
    setTimeout(() => {
      setFormData({
        name: "",
        email: "",
        phone: "",
        subject: "",
        message: "",
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__content">
          <h1 className="contact-hero__title">Get in Touch</h1>
          <p className="contact-hero__subtitle">
            We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-section">
        <div className="contact-container">
          {/* Contact Info Cards */}
          <div className="contact-info">
            {/* Address Card */}
            <div className="info-card">
              <div className="info-card__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm3.5-9c.83 0 1.5-.67 1.5-1.5S16.33 8 15.5 8 14 8.67 14 9.5s.67 1.5 1.5 1.5zm-7 0c.83 0 1.5-.67 1.5-1.5S9.33 8 8.5 8 7 8.67 7 9.5 7.67 11 8.5 11zm3.5 6.5c2.33 0 4.31-1.46 5.11-3.5H6.89c.8 2.04 2.78 3.5 5.11 3.5z" />
                </svg>
              </div>
              <h3 className="info-card__title">Address</h3>
              <p className="info-card__text">
                KVM Enterprises
                <br />
                Sulthan Bathery
                <br />
                Wayanad, Kerala 673592
              </p>
            </div>

            {/* Phone Card */}
            <div className="info-card">
              <div className="info-card__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M17.92 7.02C17.45 6.18 16.51 5.55 15.46 5.55c-1.05 0-1.99.63-2.46 1.47C12.97 5.95 12.25 5 11.21 5c-.79 0-1.42.356-1.88.954-.46-.598-1.1-.954-1.88-.954-1.04 0-1.99.63-2.46 1.47C4.62 5.5 3.86 5 2.91 5 1.87 5 .92 5.63.45 6.47c-.38.66-.45 1.32-.1 2.04.35.72 1.02 1.23 1.77 1.23.64 0 1.23-.23 1.64-.62.4.39.99.62 1.64.62.64 0 1.23-.23 1.64-.62.41.39 1 .62 1.64.62.75 0 1.42-.51 1.77-1.23.35-.72.28-1.38-.1-2.04zM12 13c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2zm6 0c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2z" />
                </svg>
              </div>
              <h3 className="info-card__title">Phone</h3>
              <div className="info-card__text">
                <a href="tel:+917559067973" className="info-link">
                  +91 75590 67973
                </a>
                <br />
                <a href="tel:+919656114135" className="info-link">
                  +91 96561 14135
                </a>
              </div>
            </div>

            {/* Email Card */}
            <div className="info-card">
              <div className="info-card__icon">
                <svg
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  width="32"
                  height="32"
                >
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                </svg>
              </div>
              <h3 className="info-card__title">Email</h3>
              <p className="info-card__text">
                <a
                  href="mailto:info@ayurvedaproducts.com"
                  className="info-link"
                >
                  info@ayurvedaproducts.com
                </a>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="contact-form-wrapper">
            <h2 className="form-title">Send us a Message</h2>

            {submitted && (
              <div className="success-message">
                ✓ Thank you! Your message has been sent successfully. We'll get
                back to you soon.
              </div>
            )}

            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label htmlFor="name" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-input"
                  placeholder="Your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your@email.com"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+91 XXXXX XXXXX"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  className="form-input"
                  placeholder="What is this about?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Your message here..."
                  rows="6"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-button">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
