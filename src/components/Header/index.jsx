import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../images/logo.png";
import "./index.css";

const Header = () => {
  // const [theme, setTheme] = useState("dark");
  const [menuOpen, setMenuOpen] = useState(false);

  // useEffect(() => {
  //   const body = document.body;

  //   if (theme === "light") {
  //     body.classList.add("light-theme");
  //   } else {
  //     body.classList.remove("light-theme");
  //   }
  // }, [theme]);

  return (
    <div className="header-container">
      <div className="header">
        <Link to="/" className="header-logo">
          <img src={logo} alt="Logo" />
        </Link>

        {/* Hamburger Button */}
        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          type="button"
        >
          {menuOpen ? "✕" : "☰"}
        </button>

        <nav className={`header-nav ${menuOpen ? "active" : ""}`}>
          <Link
            to="/about"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            About
          </Link>

          <Link
            to="/contact"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </Link>

          <Link
            to="/shop"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            Shop
          </Link>

          <Link
            to="/blog"
            className="header-link"
            onClick={() => setMenuOpen(false)}
          >
            Blog
          </Link>
        </nav>

        {/* <div className="header-actions">
          <button
            className="theme-toggle"
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            aria-label="Toggle theme"
            type="button"
          >
            {theme === "dark" ? "🌙" : "☀️"}
          </button>
        </div> */}
      </div>
    </div>
  );
};

export default Header;
