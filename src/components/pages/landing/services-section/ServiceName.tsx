"use client";
import React, { useRef } from "react";
import BtnLearnMore from "@/components/reusable/BtnLearnMore";
import Button from "@/components/reusable/Button";

interface Props {
  serviceName: string;
  isOpen: boolean;
  onClick: () => void;
}

const ServiceName = ({ serviceName, isOpen, onClick }: Props) => {
  const detailsRef = useRef<HTMLDivElement>(null);

  const servicesCategories = [
    "Logo Design",
    "Small Business Branding",
    "Modern Brochure Design",
    "Landing Page",
    "Website Design",
    "Mobile App Design",
  ];

  return (
    <div
      className={`flex flex-col transition-gap duration-300 `}
    >
      {/* Title */}
      <div
        onClick={onClick}
        className={`${
          isOpen ? "text-[#E84D00]" : "text-[#453D3D]"
        } leading-none uppercase title text-[44px] font-semibold cursor-pointer hover:text-[#E84D00] transition-all duration-300 max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl max-sm:text-xl`}
      >
        {serviceName}
      </div>

      {/* Details Section with Smooth Height Transition */}
      <div
        ref={detailsRef}
        className={`transition-all duration-500 overflow-hidden ${
          isOpen ? "max-h-[500px] opacity-100 pt-5" : "max-h-0 opacity-0"
        }`}
      >
        {/* Services Categories */}
        <div className="flex gap-[10px] flex-wrap mb-4 max-xl:gap-2 max-xl:mb-2">
          {servicesCategories.map((cat, index) => (
            <Button key={index} label={cat} />
          ))}
        </div>

        <div className="text-[#453D3D] text-base font-normal w-[60%] mb-4 max-xl:w-[80%] max-xl:mb-2 max-md:text-sm">
          <p>
            Do you know that web and graphic design are the backbones to
            multiply your revenue?
          </p>
        </div>

        <div>
          <BtnLearnMore />
        </div>
      </div>
    </div>
  );
};

export default ServiceName;
