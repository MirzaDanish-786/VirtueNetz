import React from "react";
import Image from "next/image";

const AboutCompany = () => {
  return (
    <>
      <section className="w-full font-poppins px-20 pt-[162px] pb-[140px] rounded-[40px] relative overflow-hidden max-xl:py-10 max-xl:rounded-4xl max-lg:px-10 max-sm:px-5 max-sm:rounded-xl max-xl:pt-[140px] max-lg:pt-[100px]">
        <div className="mx-auto max-w-[1580px] flex justify-between items-start relative z-10 ">
          {/* Left Content */}
          <div className="w-full flex flex-col gap-6 max-md:gap-3 z-10">
            {/* Heading */}
            <h2 className="heading text-[42px] font-bold uppercase leading-[100%] w-[40%] max-2xl:w-1/2 max-xl:w-[70%] max-lg:w-full max-sm:">
              About Our Company
            </h2>

            {/* Description */}
            <p className="text-[#453D3D] text-base w-[40%] max-2xl:w-1/2 max-xl:w-[70%] max-lg:text-sm max-sm:w-full ">
              VirtueNetz Software Development Agency provide IT solutions to
              grow your business and revenue. Get 100% Free consultancy and get
              an optimized solution. We have been empowering businesses through
              creative and ROI driven strategies.
            </p>
          </div>

          {/* Right image container (floating image) */}
          <div className="absolute right-20 top-1/2 -translate-y-1/2 w-[180px] h-[180px] max-lg:w-[140px] max-lg:h-[140px] max-sm:relative max-sm:translate-y-0 max-sm:right-auto max-sm:mt-8 max-xl:top-[90px] max-xl:right-0 max-sm:w-[80px] max-sm:h-[80px] max-sm:-top-[45px]">
            <Image
              src="/images/about.png"
              alt="about"
              fill
              className="object-contain"
            />
          </div>
        </div>
      </section>
     <div className="relative w-full h-auto">
  <Image
    src="/images/about-bg.png"
    alt="about-bg"
    width={1920}
    height={1080}
    className="w-full h-auto object-contain"
  />
</div>

    </>
  );
};

export default AboutCompany;
