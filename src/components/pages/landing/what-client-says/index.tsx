"use client";
import React from "react";
import ReviewsCard from "./ReviewsCard";

// Swiper imports
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Buttons
import NextArrowIcon from "@/components/icons/NextArrowIcon";
import BackArrowIcon from "@/components/icons/BackArrowIcon";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const WhatClientSays = () => {
  const reviewData = [
    {
      logoSrc: "/images/reviewer.png",
      name: "Vaneer Randhawa",
      desination: "Director, Nova Institute of Technology",
      review:
        "VirtueNetz is able to streamline the platform, much to the client's and customers' delight. The team communicates consistently, and internal stakeholders are particularly impressed with the vendor's flexibility, agility, and quality of deliverables.",
      rating: 4,
    },
    {
      logoSrc: "/images/reviewer.png",
      name: "John Doe",
      desination: "CEO, Techify",
      review:
        "Amazing collaboration with VirtueNetz! They brought our vision to life with efficiency and quality.",
      rating: 5,
    },
    {
      logoSrc: "/images/reviewer.png",
      name: "Sarah Khan",
      desination: "Product Manager, GreenSoft",
      review:
        "Professional and fast service. We are impressed with their attention to detail.",
      rating: 3,
    },
  ];

  return (
    <section className="w-full px-20 max-lg:px-10 max-sm:px-5">
      <div className="mx-auto mt-[120px] mb-20 max-w-[1580px] max-lg:my-20">
        {/* Heading */}
        <div className="flex flex-col gap-[10px] border-b border-b-[#453D3D] pb-[35px] max-xl:pb-7 max-lg:pb-5 max-md:pb-2">
          <h1 className="heading uppercase">What our clients says</h1>
        </div>
        <p className="text-[#453D3D] pt-10 text-base w-[40%] max-2xl:w-1/2 max-lg:w-[80%] max-md:w-full max-md:text-[12px]">
          We don't just meet expectations, we exceed them. Over 1250 smiling
          faces prove our dedication to your satisfaction.
        </p>
      </div>

      {/* Swiper Slider */}
      <div className="relative">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          pagination={{ clickable: true }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          className="mySwiper pb-[80px]" // padding bottom for buttons + dots
        >
          {reviewData.map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewsCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Buttons + Dots */}
        <div className="absolute left-1/2 bottom-0 z-10 flex -translate-x-1/2 items-center gap-5">
          {/* Buttons */}
          <div className="flex items-center gap-3">
            <div className="custom-prev cursor-pointer">
              <BackArrowIcon className="w-8 h-8 text-[#453D3D]" />
            </div>
            <div className="custom-next cursor-pointer">
              <NextArrowIcon className="w-8 h-8 text-[#453D3D]" />
            </div>
          </div>

          {/* Pagination Dots will auto-appear here from Swiper */}
        </div>

        {/* Custom Dot Styling */}
        <style jsx global>{`
          .swiper-pagination {
            position: relative !important;
            bottom: 0px !important;
            margin-left: 15px;
          }

          .swiper-pagination-bullet {
            background: #c2c2c2;
            opacity: 1;
            width: 10px;
            height: 10px;
            margin: 0 4px !important;
          }

          .swiper-pagination-bullet-active {
            background: #453d3d;
          }
        `}</style>
      </div>
    </section>
  );
};

export default WhatClientSays;
