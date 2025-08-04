"use client";
import React, { useState } from "react";
import Image from "next/image";
import ServiceName from "./ServiceName";

const ServicesSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const servicesNames = [
    "UI/UX & Graphic Design",
    "Web & Mobile App Development",
    "Ai Based Web & Mobile App Development",
    "eCommerce Solutions",
    "Digital Marketing",
    "Staff Augmentation",
  ];

  const handleToggle = (index: number) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  return (
    <section className="w-full px-20 max-lg:px-10 max-sm:px-5">
      <div className="my-[140px] max-w-[1580px] mx-auto flex justify-center gap-14 max-xl:gap-4 max-xl:my-20 max-md:flex-col max-md:gap-10 max-md:my-20">
        {/* Left */}
        <div className="relative w-[40%] h-[490px] max-2xl:w-1/2 max-xl:h-[350px] max-md:w-full">
          <Image
            src="/images/service-section.png"
            alt="service-img"
            fill
            sizes="(max-width: 1280px) 50vw, (max-width: 1536px) 50vw, 40vw"
            className="object-contain"
            priority
          />
        </div>

        {/* Right */}
        <div className="w-[60%] flex flex-col gap-4 max-2xl:w-1/2 max-md:w-full">
          {servicesNames.map((name, index) => (
            <div key={index} className="flex gap-9 max-xl:gap-3">
              <div className="font-semibold mt-2 text-xl text-[#989CAA] max-xl:mt-0 max-md:text-lg">
                {String(index + 1).padStart(2, "0")}/
              </div>
              <ServiceName
                serviceName={name}
                isOpen={openIndex === index}
                onClick={() => handleToggle(index)}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
