import WarningIcon from "@/components/icons/WarningIcon";
import React from "react";
const CopyRight = () => {
  return (
    <div className="flex  justify-center items-start h-15 fixed top-1/2 -right-[105px] z-1000 -rotate-90 bg-[#DA1E28] px-[21.5px] rounded-tl-2xl rounded-tr-2xl py-[9px] max-lg:text-sm max-lg:px-4  max-lg:-right-[90px] max-md:text-[10px] max-md:-right-[80px]">
      <div className="flex justify-center items-center gap-[6px]">
        <div className="w-fit rotate-90">
          <WarningIcon className={"w-4 max-md:w-3"} />
        </div>
        <div>Copyright ©VirtueNetz</div>
      </div>
    </div>
  );
};

export default CopyRight;
