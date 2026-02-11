"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";

const SCROLL_DURATION_MS = 1500;

function smoothScrollTo(element: HTMLElement | null) {
  if (!element) return;
  const start = window.scrollY;
  const target = element.getBoundingClientRect().top + start;
  const distance = target - start;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = 1 - (1 - progress) ** 2;
    window.scrollTo(0, start + distance * eased);
    if (progress < 1) requestAnimationFrame(step);
  }
  requestAnimationFrame(step);
}

function scrollToHero(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  smoothScrollTo(document.getElementById("home"));
}

function scrollToFeatures(e: React.MouseEvent<HTMLAnchorElement>) {
  e.preventDefault();
  smoothScrollTo(document.getElementById("features"));
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
