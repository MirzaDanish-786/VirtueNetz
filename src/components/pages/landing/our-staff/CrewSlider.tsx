"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules"; // 👈 1. Import the Autoplay module
import Image from "next/image";
import "swiper/css";

const CrewSlider = () => {
  const repeatedText = Array(10).fill("MEET OUR CREW");

  return (
    <>
      {/* This CSS ensures the animation speed is constant, not fast-slow-fast */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="w-full overflow-hidden bg-white py-4">
        <Swiper
          modules={[Autoplay]} // 👈 2. Pass the module to Swiper
          loop={true}
          slidesPerView="auto"
          allowTouchMove={false}
          spaceBetween={40}
          speed={15000} // A high value creates a slow, steady scroll
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
        >
          {repeatedText.map((text, index) => (
            <SwiperSlide
              key={index}
              className="!w-auto flex items-center gap-6"
            >
              <div className="flex items-center gap-20 max-xl:gap-10 max-md:gap-8">
                <div className="ml-20 text-[#989CAA] text-[188px] font-semibold whitespace-nowrap max-2xl:ml-4 max-md:ml-0 max-2xl:text-9xl max-xl:text-8xl max-md:text-6xl max-sm:text-4xl  ">
                  {text}
                </div>
                <div className="relative h-16 w-16 shrink-0 md:h-24 md:w-24">
                  <Image src="/images/crew.png" fill alt="crew" />
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="w-full px-20 max-lg:px-10 max-sm:px-5">
        <div className="max-w-[1580px] mx-auto text-[#453D3D] pb-[60px] border-b border-b-[#453D3D] text-xl max-lg:text-base max-md:text-[12px] max-sm:text-[10px] max-lg:pb-12 max-md:pb-2">
          Meet the minds behind the magic. Our crew: passionate, skilled, and
          dedicated to bringing your vision to life.
        </div>
      </div>
    </>
  );
};

export default CrewSlider;
