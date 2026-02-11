"use client";

import React from "react";
import Image from "next/image";
import AnimatedSection from "../components/AnimatedSection";
import "./hero.css";

export default function Hero() {
  return (
    <section className="hero-wrapper" id="home">
      <div className="hero-container">
        <AnimatedSection className="hero-content" threshold={0.08}>
          <div className="hero-content-inner">
          <h1 className="hero-title">
            Leo Explorer:
            <span>Your Next Gen File Manager</span>
          </h1>

          <h2 className="hero-subtitle">Blazing fast, Secure and intuitive.</h2>

          <p className="hero-description">
            Build with <em>Tauri2.0 (Rust and Typescript)</em> for peak
            performance and security.
          </p>

          <div className="hero-actions">
            <button className="btn-primary">Download Free Trial</button>
            <button className="btn-outline">Lear More</button>
          </div>

          <p className="hero-footer-note">
            Available on Windows, macOS, and Linux | No Credit Card Required for
            Free Trial
          </p>
          </div>
        </AnimatedSection>

        {/* This wrapper now handles the negative margin/overlap */}
        <AnimatedSection className="hero-image-wrapper" delay={120} threshold={0.08}>
          <Image
            src="/images/screenshot.png"
            alt="Leo Explorer Interface"
            width={1900}
            height={700}
            className="hero-img"
            priority
          />
        </AnimatedSection>
      </div>
    </section>
  );
}
