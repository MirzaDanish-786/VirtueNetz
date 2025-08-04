"use client";
import React from "react";
import StoryCard from "./StoryCard";
import GotoButton from "@/components/reusable/GotoButton";
import Image from "next/image";
import StoriesSlider from "./StoriesSlider";

const OurStories = () => {
  return (
    <section className="bg-[#1C1919] w-full px-20 py-[100px] text-white rounded-[40px] max-xl:py-10  max-xl:rounded-4xl max-lg:px-10 max-sm:px-5 ">
      <div className="max-w-[1580px] mx-auto font-poppins">
        {/* <StoryCard
          imageSrc="/images/hero-bg.png"
          title="My Title"
          desc="Resumize is a platform to create online digital business card, along
          with stats and social media handles."
        /> */}

        {/* Heading */}
        <div>
          <h1 className="heading pb-[35px] uppercase border-b border-b-[#453D3D] max-xl:pb-7 max-lg:pb-5">
            Our Success Stories By Our Experts
          </h1>
        </div>

        {/*Main Content*/}
        <div className="flex ">
          {/* Left contaienr */}
          <div className="flex flex-col items-end gap-4 w-[40%] flex-shrink-0 ">
            <div className=" flex flex-col gap-4 pt-20 pb-[172px] pr-[96px] border-r border-r-[#453D3D] max-2xl:pt-18 max-2xl:pb-[150px] max-2xl:pr-16 max-xl:pr-10  max-xl:pt-7 max-lg:pt-5">
              <p className=" text-base text-[#DEE9EE] max-lg:text-sm">
                At VirtueNetz, we offer custom solutions that bring value to the
                growth and development of businesses across multiple industries
                worldwide.
              </p>
              <div>
                <GotoButton label="DISCOVER MORE" is_bg_color={true} />
              </div>
            </div>

            {/* Logo */}
            <div className="flex justify-end relative mr-[96px] w-[328px] h-[252px] max-xl:mr-10 max-lg:w-[280px] max-lg:h-[200px] max-lg:mr-5 ">
              <Image
                src={'/images/vn-logo.png'}
                alt="vn-logo"
                fill
                className="object-contain"
              />
            </div>
          </div>z

          {/* Right container */}
          <div className="pl-[90px] pt-20 flex-1 max-2xl:pl-16 max-xl:pl-10 max-xl:pt-7 max-lg:pt-5">
            <StoriesSlider/>
          </div>  
        </div>
      </div>
    </section>
  );
};

export default OurStories;
