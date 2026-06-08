import React from "react";
import "./index.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          {/* About Section */}
          <div className="footer-section">
            <h3 className="footer-section__title">About Us</h3>
            <p className="footer-section__text">
              We are dedicated to providing authentic Ayurvedic products and
              services that promote holistic health and wellness. Our commitment
              is to deliver premium quality products that blend traditional
              wisdom with modern science.
            </p>
          </div>

          {/* Menu Section */}
          <div className="footer-section">
            <h3 className="footer-section__title">Quick Links</h3>
            <ul className="footer-menu">
              <li>
                <a href="/" className="footer-link">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="footer-link">
                  About
                </a>
              </li>
              <li>
                <a href="/shop" className="footer-link">
                  Products
                </a>
              </li>
              <li>
                <a href="#blog" className="footer-link">
                  Blog
                </a>
              </li>
              <li>
                <a href="/contact" className="footer-link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Address & Contact Section */}
          <div className="footer-section">
            <h3 className="footer-section__title">Contact Info</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <span className="contact-label">Address:</span>
                <p className="contact-text">
                  KVM Enterprises, Sulthan Bathery,
                  <br />
                  Wayanad, Kerala
                </p>
              </div>
              <div className="contact-item">
                <span className="contact-label">Phone:</span>
                <a href="tel:+917559067973" className="footer-link">
                  +91 75590 67973
                </a>
                <a href="tel:+919656114135" className="footer-link">
                  +91 96561 14135
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">Email:</span>
                <a
                  href="mailto:info@ayurvedaproducts.com"
                  className="footer-link"
                >
                  info@ayurvedaproducts.com
                </a>
              </div>
              <div className="contact-item">
                <span className="contact-label">WhatsApp:</span>
                <a
                  href="https://wa.me/7559067973"
                  className="footer-link"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Chat with us
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Media Section */}
        <div className="footer-social">
          <h4 className="footer-social__title">Follow Us</h4>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/indukanth"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Facebook"
              aria-label="Follow us on Facebook"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
              </svg>
            </a>
            <a
              href="https://www.instagram.com/indukanth"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="Instagram"
              aria-label="Follow us on Instagram"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.117.6c-.588.147-1.079.288-1.623.643-.556.378-.96.766-1.36 1.166-.399.399-.787.803-1.165 1.358-.356.544-.496 1.035-.643 1.623-.267.788-.468 1.658-.53 2.936C.016 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.529 2.936.147.588.288 1.079.643 1.623.378.556.766.96 1.166 1.36.399.399.803.787 1.358 1.165.544.356 1.035.496 1.623.643.788.268 1.658.468 2.936.53 1.28.058 1.689.072 4.947.072s3.668-.015 4.947-.072c1.277-.062 2.148-.262 2.936-.53.588-.147 1.079-.288 1.623-.643.556-.378.96-.766 1.36-1.166.399-.399.787-.803 1.165-1.358.356-.544.496-1.035.643-1.623.268-.788.468-1.658.53-2.936.058-1.28.072-1.687.072-4.947s-.015-3.667-.072-4.947c-.06-1.277-.262-2.149-.53-2.936-.147-.588-.288-1.079-.643-1.623-.378-.556-.766-.96-1.166-1.36-.399-.399-.803-.787-1.358-1.165-.544-.356-1.035-.496-1.623-.643-.788-.268-1.658-.468-2.936-.53C15.667.015 15.26 0 12 0zm0 2.16c3.203 0 3.585.009 4.849.070 1.171.054 1.805.244 2.227.408.562.217.96.477 1.382.896.419.42.679.819.896 1.381.164.422.354 1.057.408 2.227.061 1.264.07 1.646.07 4.849s-.009 3.585-.07 4.849c-.054 1.171-.244 1.805-.408 2.227-.217.562-.477.96-.896 1.382-.42.419-.819.679-1.381.896-.422.164-1.057.354-2.227.408-1.264.061-1.646.07-4.849.07s-3.585-.009-4.849-.07c-1.171-.054-1.805-.244-2.227-.408-.562-.217-.96-.477-1.382-.896-.419-.42-.679-.819-.896-1.381-.164-.422-.354-1.057-.408-2.227-.061-1.264-.07-1.646-.07-4.849s.009-3.585.07-4.849c.054-1.171.244-1.805.408-2.227.217-.562.477-.96.896-1.382.42-.419.819-.679 1.381-.896.422-.164 1.057-.354 2.227-.408 1.264-.061 1.646-.07 4.849-.07zM5.838 12a6.162 6.162 0 1112.324 0 6.162 6.162 0 01-12.324 0zM12 16a4 4 0 110-8 4 4 0 010 8zm4.965-10.322a1.44 1.44 0 110-2.88 1.44 1.44 0 010 2.88z" />
              </svg>
            </a>
            <a
              href="https://www.youtube.com/channel/indukanth"
              className="social-icon"
              target="_blank"
              rel="noopener noreferrer"
              title="YouTube"
              aria-label="Subscribe to our YouTube channel"
            >
              <svg
                viewBox="0 0 24 24"
                fill="currentColor"
                width="24"
                height="24"
              >
                <path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="footer-bottom">
          <p className="footer-copyright">
            &copy; {currentYear} KVM Ayurvedics. All rights reserved.
          </p>
          <div className="footer-legal">
            <a href="#privacy" className="footer-link">
              Privacy Policy
            </a>
            <span className="divider">•</span>
            <a href="#terms" className="footer-link">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
