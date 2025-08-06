"use client";

import React from "react";
import Image from "next/image";

const ScrollToSection = () => {
  const handleScroll = () => {
    const targetSection = document.getElementById("slider");
    if (targetSection) {
      targetSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="flex w-fit relative -left-5 pb-[50px] items-center gap-[10px] cursor-pointer max-xl:pb-10 max-md:left-0 max-md:gap-1.5 max-md:pb-5"
    >
      <div className="relative w-10 h-10 max-md:w-8 max-md:h-8">
        <Image
          src="/images/scroll-img.png"
          alt="scroll-img"
          fill
          className="object-contain"
          priority
        />
      </div>
      <div className="font-ibmplexmono text-lg font-normal max-md:text-base">
        Scroll
      </div>
    </div>
  );
};

export default ScrollToSection;
