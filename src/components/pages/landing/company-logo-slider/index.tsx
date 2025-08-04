"use client";

import React from "react";
import Image from "next/image";

const logos = [
  "/images/company-logo-1.png",
  "/images/company-logo-2.png",
  "/images/company-logo-3.png",
  "/images/company-logo-4.png",
  "/images/company-logo-5.png",
  "/images/company-logo-6.png",
  "/images/company-logo-7.png",
  "/images/company-logo-8.png",
  "/images/company-logo-9.png",
  "/images/company-logo-10.png",
];

// Duplicate logos for seamless infinite scroll
const repeatedLogos = [...logos, ...logos];

const CompanyLogoSlider = () => {
  return (
    <div className="w-full py-10 bg-white overflow-hidden border-b border-[#989CAA] max-xl:py-5">
      <div className="relative flex items-center">
        <div className="animate-slide flex whitespace-nowrap">
          {repeatedLogos.map((logo, index) => (
            <div key={index} className="mx-10 w-[120px] h-[48px] relative shrink-0">
              <Image
                src={logo}
                alt={`Logo ${index}`}
                fill
                className="object-contain"
                sizes="120px"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyLogoSlider;
