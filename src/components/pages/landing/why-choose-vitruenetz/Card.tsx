import React from "react";
import Image from "next/image";
interface Props {
  count: string;
  countTitle: string;
  desc: string;
  imageSrc: string;
}
const WhyChooseCard = ({ count, countTitle, desc, imageSrc }: Props) => {
  return (
    <div className="flex flex-col gap-[52px] px-7 py-5 bg-[#F7F7F7] border border-[#DEE9EE] rounded-[20px] max-2xl:p-3 max-md:gap-6">
      <div className="flex flex-col gap-2">
        <div className="flex justify-between items-center">
          <div className="text-[#E84D00] font-semibold text-5xl max-md:text-4xl">{count}</div>
          <div className="relative w-[30px] h-[30px] ">
            <Image src={imageSrc} fill alt="icons" />
          </div>
        </div>
        <div className="font-medium text-base text-[#231F20] ">{countTitle}</div>
      </div>

      <div className="text-[#453D3D] text-sm max-md:text-[12px]">
        {desc}
      </div>
    </div>
  );
};

export default WhyChooseCard;
