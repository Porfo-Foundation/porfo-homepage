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
      <Navbar />
      <HeroSection />
      <DescriptionSection />
      <FeaturesSection />
      <AboutUs />
      <Roadmap />
      <BlockChainsSection />
      <TeamMembers />
      <Footer />
    </div>
  );
}

export default LandingPage;
