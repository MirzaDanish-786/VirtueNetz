"use client";
import React from "react";
// import Goto from "@/assets/icons/Goto.svg";
import CopyRight from "./CopyRight";
import Image from "next/image";
import GotoIcon from "@/components/icons/GotoIcon";

const HeroSection = () => {
  return (
    <section className="relative w-screen font-poppins  pt-[162px] text-white bg-cover bg-center bg-[url('/images/hero-bg.png')]">
      <CopyRight />

      {/* Overlay Layer */}
      <div className="absolute inset-0 bg-black/65 z-0" />

      {/* Actual Content */}
      <div className="relative px-20 z-50 w-full h-fit flex flex-col gap-[175px] max-xl:gap-20 max-md:px-10 max-sm:px-5">
        <div className="flex flex-col max-lg:gap-10">
          {/* client satisfied */}
          <div className="flex flex-col items-end pr-20 max-xl:pr-0">
            <div className="flex gap-[10px] items-center">
              <div className="font-semibold text-4xl text-[#E84D00] max-xl:text-3xl max-md:text-2xl">
                1253+
              </div>
              <div>
                <GotoIcon className={"stroke-[#E84D00] w-6 max-md:w-4"} />
              </div>
            </div>
            <div className="font-medium text-sm">Satisfied Clients</div>
          </div>

          {/* Main Heading */}
          <div className="relative w-full flex items-end justify-center max-lg:justify-normal">
            {/*Heading Text Section */}
            <div className="relative w-1/3 flex flex-col gap-[10px] max-xl:w-1/2 max-lg:w-[90%] ">
              <h1 className="heading-with-dot font-bold text-[86px] leading-[127%] max-2xl:text-7xl max-xl:text-6xl max-md:text-5xl max-md:font-semibold max-sm:text-4xl">
                Software Development Agency
              </h1>

              <p className="font-normal text-xl max-2xl:text-lg max-xl:text-base max-lg:w-[70%] max-md:text-sm max-md:w-[90%] max-sm:text-[12px]">
                Being An Expert Design And Development Agency, We Provide
                Client-Focused, Customer-Centric Web Design And IT Solutions
                That Deliver Tangible Business Results.
              </p>

              {/*  Rounded Button */}
              <div className="absolute -bottom-20 -right-[250px] cursor-pointer max-xl:-right-[200px] max-lg:right-15 max-md:right-10 max-sm:-right-[40px] max-sm:-bottom-[120px]">
                <div className="flex flex-col justify-center items-center gap-[10px] bg-[#F37021] p-[14.5px] w-[170px] h-[170px] rounded-full max-xl:w-[150px] max-xl:h-[150px] max-lg:w-[120px] max-lg:h-[120px] ">
                  <GotoIcon className="stroke-black w-4" />
                  <div className="text-black font-ibmplexmono font-medium text-base text-center leading-tight max-lg:text-[12px]">
                    Let’s Discuss your project
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Button */}
        <div className="flex w-fit relative -left-5 pb-[50px] items-center gap-[10px] cursor-pointer max-xl:pb-10 max-md:left-0 max-md:gap-1.5 max-md:pb-5">
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
      </div>
    </section>
  );
};

export default HeroSection;
