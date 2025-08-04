"use client";
import GotoButton from "@/components/reusable/GotoButton";
import React from "react";
import WhyChooseCard from "./Card";

const WhyChooseVirtueNetz = () => {
  const cardsData = [
    {
      count: "1253+",
      countTitle: "Satisfied Clients",
      desc: "We dont just meet expectations, we exceed them. Over 1250 smiling faces prove our dedication to your satisfaction.",
    },
    {
      count: "2561+",
      countTitle: "Completed Projects",
      desc: "From concept to completion, we've delivered over 2550 successful projects, each a testament to our expertise and commitment.",
    },
    {
      count: "382+",
      countTitle: "Service Providers",
      desc: "A vast network of 380+ skilled professionals ensures we have the perfect talent for every project, big or small.",
    },
    {
      count: "887+",
      countTitle: "Cloud Designs",
      desc: "We're pioneers in the cloud, crafting over 880+ innovative cloud designs that empower businesses to reach new heights.",
    },
  ];

  const images = [
    '/images/why-choose-1.png',
    '/images/why-choose-2.png',
    '/images/why-choose-3.png',
    '/images/why-choose-4.png',
  ]

  return (
    <section className="w-full px-20 max-lg:px-10 max-sm:px-5">
      <div className="mx-auto mt-[120px] mb-[140px] max-w-[1580px] max-lg:my-20">
      {/* Heading */}
        <div className="flex flex-col gap-[10px] border-b border-b-[#453D3D] pb-[60px] max-xl:pb-7 max-lg:pb-5 max-md:pb-2">
          <h1 className="heading uppercase ">Why choose virtuenetz?</h1>
          <p className="text-[#453D3D] text-base w-[40%] max-2xl:w-1/2 max-lg:w-[80%] max-md:w-full max-md:text-[12px]" >
            Our IT services increase your business working and make it better
            for a digitalized and technology-driven world.
          </p>
        </div>

        {/* Content */}
        <div className="flex max-[1000px]:flex-col  max-[1000px]:gap-10">
            {/* Left Container */}
          <div className="w-[40%] flex flex-col gap-4 border-r border-r-[#453D3D] pt-20 pr-[90px] h-fit pb-[160px] max-2xl:pt-18 max-2xl:pb-[150px] max-2xl:pr-16 max-xl:pr-10 max-xl:pt-7 max-lg:pt-5 max-lg:pr-5 max-[1000px]:border-none max-[1000px]:w-full max-[1000px]:!pb-0 max-[1000px]:!pr-0">
            <div className=" text-lg max-xl:text-base ">
              <strong>We are here to IT Solution with</strong>
              <span className="text-[#E84D00] font-semibold">
                {" "}
                12 Years of Experience{" "}
              </span>
              <span className="font-semibold text-[#231F20] ">
                VirtueNetz Software Development Agency provide IT solutions to
                grow your business and revenue. Get 100% Free consultancy and
                get an optimized solution. We have been empowering businesses
                through creative and ROI driven strategies.
              </span>
            </div>
            <div>
              <GotoButton label="ABOUT US" is_bg_color={true} />
            </div>
          </div>

            {/* Grid of cards */}
          <div className="grid grid-cols-2 gap-[27px] w-[60%] pl-[90px] pt-20 max-2xl:pl-16 max-xl:pl-10 max-xl:pt-7 max-lg:pt-5 max-lg:pl-5 max-xl:gap-3 max-[1000px]:w-full max-[1000px]:!p-0 max-sm:grid-cols-1">
            {cardsData.length !== 0 && cardsData.map((data, index)=>(
                <WhyChooseCard key={index} count={data.count} countTitle={data.countTitle} desc={data.desc} imageSrc={images[index]} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseVirtueNetz;
