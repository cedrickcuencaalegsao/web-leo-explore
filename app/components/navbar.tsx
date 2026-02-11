"use client";
import React from "react";
import Image from "next/image";
import "./navbar.css";

const SCROLL_DURATION_MS = 1500;

// Apple-style cubic-bezier: smooth ease-out (0.33, 1, 0.68, 1) — fast start, buttery deceleration
const BEZIER = { x1: 0.33, y1: 1, x2: 0.68, y2: 1 };

function cubicBezierSample(
  t: number,
  p1x: number,
  p1y: number,
  p2x: number,
  p2y: number
): number {
  const u = 1 - t;
  const u2 = u * u;
  const u3 = u2 * u;
  const t2 = t * t;
  const t3 = t2 * t;
  return 3 * u2 * t * p1y + 3 * u * t2 * p2y + t3;
}

function cubicBezierX(t: number, p1x: number, p2x: number): number {
  const u = 1 - t;
  const u2 = u * u;
  const t2 = t * t;
  const t3 = t2 * t;
  return 3 * u2 * t * p1x + 3 * u * t2 * p2x + t3;
}

function cubicBezierEase(progress: number): number {
  if (progress <= 0) return 0;
  if (progress >= 1) return 1;
  // Binary search for t where x(t) ≈ progress, then return y(t)
  let t0 = 0;
  let t1 = 1;
  for (let i = 0; i < 12; i++) {
    const t = (t0 + t1) / 2;
    const x = cubicBezierX(t, BEZIER.x1, BEZIER.x2);
    if (x < progress) t0 = t;
    else t1 = t;
  }
  const t = (t0 + t1) / 2;
  return cubicBezierSample(t, BEZIER.x1, BEZIER.y1, BEZIER.x2, BEZIER.y2);
}

function smoothScrollTo(element: HTMLElement | null) {
  if (!element) return;

  const navbarHeight =
    document.querySelector(".navbar-wrapper")?.clientHeight ?? 0;

  const start = window.scrollY;
  const target =
    element.getBoundingClientRect().top + start - navbarHeight;
  const startTime = performance.now();

  function step(currentTime: number) {
    const elapsed = currentTime - startTime;
    const progress = Math.min(elapsed / SCROLL_DURATION_MS, 1);
    const eased = cubicBezierEase(progress);
    const y = progress >= 1 ? target : start + (target - start) * eased;
    window.scrollTo(0, y);
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
