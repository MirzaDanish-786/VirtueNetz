"use client";
import React from "react"; // No ref needed anymore
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
        "VirtueNetz is able to streamline the platform, much to the client's and customers' delight. The team communicates consistently, and internal stakeholders are particularly impressed with the vendor's flexibility, agility, and quality of deliverables. irtueNetz is able to streamline the platform, much to the client's and customers' delight. The team communicates consistently, and internal stakeholders are particularly impressed with the vendor's flexibility, agility, and quality of deliverables.",
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
    {
      logoSrc: "/images/reviewer.png",
      name: "Mike Ross",
      desination: "Lead Developer, Innovate Inc.",
      review:
        "The deliverables were high-quality and the team was always responsive to our needs.",
      rating: 5,
    },
  ];

  return (
    <section className="w-full px-20 max-lg:px-10 max-sm:px-5">
      <div className="mx-auto mt-[120px] mb-20 max-w-[1580px] max-lg:my-20 max-md:my-10 max-sm:mb-5">
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
      <div className="relative max-w-[1800px] mx-auto">
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={1}
          spaceBetween={0}
          loop
          pagination={{
            // KEY CHANGE: Point to the class selector directly
            el: ".swiper-pagination",
            clickable: true,
          }}
          navigation={{
            nextEl: ".custom-next",
            prevEl: ".custom-prev",
          }}
          // The complex onSwiper logic is no longer needed
          className="mySwiper pb-[100px]"
        >
          {[...reviewData, ...reviewData].map((review, index) => (
            <SwiperSlide key={index}>
              <ReviewsCard {...review} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Custom Controls: Buttons + Dots */}
        <div className="absolute bottom-[100px] left-1/2 z-10 flex w-auto -translate-x-1/2 items-center justify-center gap-4 max-2xl:bottom-16 max-xl:bottom-5">
          {/* Prev Button */}
          <div className="custom-prev cursor-pointer">
            <BackArrowIcon className="h-8 w-8 text-[#453D3D]" />
          </div>

          {/* KEY CHANGE: Add the swiper-pagination class directly */}
          <div className="swiper-pagination"></div>

          {/* Next Button */}
          <div className="custom-next cursor-pointer">
            <NextArrowIcon className="h-8 w-8 text-[#453D3D]" />
          </div>
        </div>

        {/* Dot Styling */}
        <style jsx global>{`
          .swiper {
            border-radius: 40px;
          }
          .swiper-slide {
            width: 100% !important;
          }
          /* Target the class to override Swiper's default absolute positioning */
          .swiper-pagination {
            position: relative !important;
            bottom: auto !important;
            left: auto !important;
            width: auto !important;
            display: flex;
            align-items: center;
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
           @media (max-width: 640px) {
  .swiper {
    border-radius: 12px;
  }
}

            }
        `}</style>
      </div>
    </section>
  );
};

export default WhatClientSays;
