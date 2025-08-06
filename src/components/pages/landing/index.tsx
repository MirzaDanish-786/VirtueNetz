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
import CTASection from "./CTA-section";
import Footer from "@/components/layout/footer";

const LandingPage = () => {
  return (
    <>
      <Navbar isPrimary={true} />
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
        <CTASection/>
      </main>
      <Footer/>
    </>
  );
};

export default LandingPage;
