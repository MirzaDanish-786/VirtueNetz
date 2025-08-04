"use client";
import Button from "@/components/reusable/Button";
import React, { useState } from "react";
import SolutionCard from "./SolutionCard";
import StatCard from "./StatCard";

// 1️⃣ Mock Data for Cards
const mockSolutions = [
  {
    imageSrc: "/images/solution-1.png",
    solutionType: "classified",
    techCategory: "mobile",
    appName: "Ads Dot",
    aboutApp:
      "Ads Dot is a mobile app that allows users to buy and sell used items. The app is available on both Android and iOS platforms.",
  },
  {
    imageSrc: "/images/solution-3.png",
    solutionType: "ecommerce",
    techCategory: "mobile",
    appName: "Work Permit",
    aboutApp:
      "This app allows the admin to create and monitor work permits, including permit details, granting of permits, and survey processes.",
  },
  {
    imageSrc: "/images/solution-2.png",
    solutionType: "utilities",
    techCategory: "mobile",
    appName: "Frame Frenetic",
    aboutApp:
      "Frame Frenetic is a mobile app designed for public users that allows them to edit images individually or in batches.",
  },
  {
    imageSrc: "/images/solution-4.png",
    solutionType: "hr-solutions",
    techCategory: "mobile",
    appName: "VKCommerce",
    aboutApp:
      "Meet the online version of malls. Our crew is passionate, skilled, and dedicated to bringing your vision to life.",
  },
];

// 2️⃣ Filters (with keys to match solutionType)
const filters = [
  { label: "All", key: "all" },
  { label: "ECommerce", key: "ecommerce" },
  { label: "Utilities", key: "utilities" },
  { label: "Classified", key: "classified" },
  { label: "HR Solutions", key: "hr-solutions" },
];

const RangeOfSolution = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  // 3️⃣ Filtered Data
  const activeFilterKey = filters[activeIndex].key;
  const filteredCards =
    activeFilterKey === "all"
      ? mockSolutions
      : mockSolutions.filter((card) => card.solutionType === activeFilterKey);

  // 4️⃣ Split cards into 2 columns
  const leftColumnCards = filteredCards.filter((_, i) => i % 2 === 0);
  const rightColumnCards = filteredCards.filter((_, i) => i % 2 === 1);

  return (
    <section className="w-full px-20 bg-[#1C1919] rounded-[40px] pt-[100px] pb-[140px] max-xl:py-10  max-xl:rounded-4xl max-lg:px-10 max-sm:px-5 max-sm:rounded-xl">
      <div className="mx-auto max-w-[1580px]">
        {/* Heading */}
        <div className="flex flex-col gap-4 pb-20 border-b border-b-[#453D3D] max-2xl:pb-16 max-xl:pb-12 max-lg:pb-8">
          <h1 className="heading text-white">RANGE OF SOLUTIONS FOR YOU</h1>
          <div className="flex gap-4 max-sm:gap-2 max-sm:flex-wrap">
            {filters.map((filter, index) => (
              <Button
                key={index}
                label={filter.label}
                onClick={() => setActiveIndex(index)}
                bg_color={index === activeIndex}
                additionalClasses={`${
                  index !== activeIndex && "text-[#989CAA]"
                }`}
              />
            ))}
          </div>
        </div>

        {/* Grid layout with center border */}
        <div className="grid grid-cols-2 max-[800px]:grid-cols-1 max-[800px]:pt-8">
          {/* Left Column */}
          <div className="flex flex-col gap-[60px] pt-20 pr-[90px] max-2xl:pr-16 max-2xl:pt-16 max-xl:pr-8 max-xl:pt-8 max-xl:gap-10 max-[800px]:!p-0">
            {leftColumnCards.map((card, index) => (
              <SolutionCard key={index} {...card} />
            ))}
          </div>

          {/* Right Column */}
          <div className="flex flex-col gap-[60px] pt-20 pl-[90px] border-l border-[#453D3D] max-2xl:pl-16 max-2xl:pt-16 max-xl:pl-8 max-xl:pt-8 max-xl:gap-10 max-[800px]:border-none max-[800px]:!p-0" >
            <div className="max-[800px]:pt-8">
            <StatCard completeProjectCount="2561+" />
            </div>
            {rightColumnCards.map((card, index) => (
              <SolutionCard key={index} {...card} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default RangeOfSolution;
