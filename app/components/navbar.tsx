"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";

const SCROLL_DURATION_MS = 1500;


function scrollToHero(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("home")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToFeatures(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("features")?.scrollIntoView({ behavior: "smooth" });
}

function scrollToPricing(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  document.getElementById("pricing")?.scrollIntoView({ behavior: "smooth" });
}

export default function Navbar() {
  return (
    <header className="navbar-wrapper">
      <div className="navbar-container">
        <a className="logo-section" href="#home" onClick={scrollToHero}>
          <Image
            src="/icons/app-icon.png"
            alt="Leo Explorer Logo"
            width={32}
            height={32}
            className="logo-img"
            priority
          />
          <span className="logo-text">Leo Explorer</span>
        </a>

        <nav className="nav-links">
          <a href="#home" onClick={scrollToHero}>
            Home
          </a>
          <a href="#features" onClick={scrollToFeatures}>Features</a>
          <a href="#pricing" onClick={scrollToPricing}>Pricing</a>
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
