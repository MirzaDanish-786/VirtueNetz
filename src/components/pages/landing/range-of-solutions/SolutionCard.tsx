import React from "react";
import Image from "next/image";
import GotoIcon from "@/components/icons/GotoIcon";
import Capsule from "./Capsule";

interface Props {
  imageSrc: string;
  solutionType: string;
  techCategory: string;
  appName: string;
  aboutApp: string;
}

const SolutionCard = ({
  imageSrc,
  solutionType,
  techCategory,
  appName,
  aboutApp,
}: Props) => {
  return (
    <div className="flex flex-col gap-[30px] font-poppins max-[800px]:!gap-4">
      {/* Image section */}
      <div className="relative w-full z-0 aspect-[16/9] rounded-[30px] overflow-hidden max-xl:rounded-3xl max-lg:rounded-2xl">
        <Image
          src={imageSrc}
          fill
          alt="solution-img"
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 100vw, (max-width: 1280px) 90vw, 70vw"
          className="object-cover z-0"
        />

        {/* Capsules positioned at bottom-left of image */}
        <div className="absolute bottom-4 left-4 z-40 flex gap-2">
          <Capsule name={solutionType} />
          <Capsule name={techCategory} />
        </div>
      </div>

      {/* Content section */}
      <div>
        <div className="flex justify-between items-center">
          <h3 className="text-[42px] font-medium text-white uppercase max-xl:text-3xl max-lg:text-2xl">
            {appName}
          </h3>
          <GotoIcon className="w-[30px] stroke-white max-xl:w-5 max-lg:w-4" />
        </div>
        <p className="text-lg text-[#989CAA] max-xl:text-sm max-lg:text-[12px]">
          {aboutApp}
        </p>
      </div>
    </div>
  );
};

export default SolutionCard;
