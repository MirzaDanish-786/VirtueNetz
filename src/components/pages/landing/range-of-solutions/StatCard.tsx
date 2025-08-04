import React from "react";

interface Props {
  completeProjectCount: string;
}

const StatCard = ({ completeProjectCount }: Props) => {
  return (
    <div className="font-poppins flex gap-[30px] justify-center items-center px-5 bg-[#231F20] border border-[#453D3D] rounded-[30px] py-[31px] max-xl:gap-3 max-xl:rounded-3xl">
      <div className="text-[#E84D00] text-[68px] font-semibold max-2xl:text-5xl max-xl:text-4xl max-lg:text-3xl">{completeProjectCount}</div>
      <div className="text-[28px] font-medium text-white w-1/2 border-l border-l-[#453D3D] px-[30px] max-2xl:text-2xl max-xl:text-lg max-lg:text-base max-xl:px-5">Completed Projects in IT</div>
    </div>
  );
};

export default StatCard;
