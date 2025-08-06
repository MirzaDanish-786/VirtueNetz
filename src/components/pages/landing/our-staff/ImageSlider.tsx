"use client";

import React from "react";
import ImageCard from "./ImageCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const staffData = [
  {
    name: "Shahzad Jameel",
    desination: "Founder & CEO",
    imageSrc: "/images/staff-1.png",
  },
  {
    name: "Shoaib Latif",
    desination: "Chief Operating Officer",
    imageSrc: "/images/staff-2.png",
  },
  {
    name: "Muhammad Adil",
    desination: "Chief Technical Officer",
    imageSrc: "/images/staff-3.png",
  },
  {
    name: "Laraib Maryam",
    desination: "Chief Marketing Officer",
    imageSrc: "/images/staff-4.png",
  },
  {
    name: "Muhammad Umer",
    desination: "Chief Design Officer",
    imageSrc: "/images/staff-5.png",
  },
  {
    name: "Usman Saeed",
    desination: "Senior React Native Developer",
    imageSrc: "/images/staff-6.jpg",
  },
];

const ImageSlider = () => {
  return (
    <>
      {/* Smooth linear scrolling */}
      <style jsx global>{`
        .swiper-wrapper {
          transition-timing-function: linear !important;
        }
      `}</style>

      <div className="w-full overflow-hidden py-10">
        <Swiper
          modules={[Autoplay]}
          loop={true}
          slidesPerView="auto"
          spaceBetween={40}
          speed={5000} // smooth slow scroll
          autoplay={{
            delay: 0,
            disableOnInteraction: false,
          }}
          allowTouchMove={false}
          breakpoints={{
            1024: {
              spaceBetween: 40,  
            },
            768: {
              spaceBetween: 30,  
            },
            0: {
              spaceBetween: 20,  
            },
          }}
        >
          {[...staffData, ...staffData].map((staff, index) => (
            <SwiperSlide key={index} className="!w-auto">
              <ImageCard
                imageSrc={staff.imageSrc}
                name={staff.name}
                desination={staff.desination}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default ImageSlider;
