import React from "react";
import Image from "next/image";
import "./navbar.css";

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <div className="logo-section">
          <Image
            src="/icons/app-icon.png"
            alt="Leo Explorer Logo"
            width={32}
            height={32}
            className="logo-img"
            priority
          />
          <span className="logo-text">Leo Explorer</span>
        </div>

        <nav className="nav-links">
          <a href="#">Home</a>
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">Reviews</a>
          <a href="#">Download</a>
          <a href="#">Developers</a>
        </nav>

        <div className="cta-section">
          <button className="btn-signup">Sign Up / Get Stated</button>
        </div>
      </div>
    </header>
  );
}
