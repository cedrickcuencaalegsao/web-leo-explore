import React from "react";
import Navbar from "./components/navbar";
import Hero from "./sections/hero";
import KeyFeature from "./sections/keyfeatures";
import PricingSection from "./sections/pricing";

export default function Home() {
  return (
    <div>
      <Navbar />
      <main style={{ paddingTop: 70 }}>
        <Hero />
        <KeyFeature />
        <PricingSection />
      </main>
    </div>
  );
}
