import React from "react";
import Navbar from "./Navbar";
import HeroSection from "./HeroSection";
import DescriptionSection from "./DescriptionSection";
import FeaturesSection from "./FeaturesSection";
import AboutUs from "./AboutUs";
import Roadmap from "./Roadmap";
import BlockChainsSection from "./BlockChainsSection";
import TeamMembers from "./TeamMembers";
import Footer from "./Footer";

function LandingPage() {
  return (
    <div>
      <div className="fixed top-0 left-0 w-screen bg-black z-50">
        <Navbar />
      </div>
      <section id="home">
        <HeroSection />
        <DescriptionSection />
      </section>
      <section id="features">
        <FeaturesSection />
      </section>
      <section id="about">
        <AboutUs />
        <Roadmap />
        <BlockChainsSection />
      </section>
      <section id="team">
        <TeamMembers />
      </section>
      <Footer />
    </div>
  );
}

export default LandingPage;
