import React from "react";
import HeroSection from "./hero";
import Navbar from "@/components/layout/navbar";
import CompanyLogoSlider from "./company-logo-slider";
import ServicesSection from "./services-section";
import OurStories from "./our-stories-section";
import WhyChooseVirtueNetz from "./why-choose-vitruenetz";
import OurStaff from "./our-staff";
import RangeOfSolution from "./range-of-solutions";
import WhatClientSays from "./what-client-says";
import TechnologyStack from "./technology-stack";

const LandingPage = () => {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <CompanyLogoSlider />
        <ServicesSection />
        <OurStories />
        <WhyChooseVirtueNetz />
        <OurStaff />
        <RangeOfSolution />
        <WhatClientSays />
        <TechnologyStack/>
      </main>
    </>
  );
};

export default LandingPage;
