import Navbar from "@/components/layout/navbar";
import React from "react";
import AboutCompany from "./AboutCompany";

const AboutUs = () => {
  return (
    <>
      <Navbar isPrimary={false} />
      <AboutCompany />
    </>
  );
};

export default AboutUs;
