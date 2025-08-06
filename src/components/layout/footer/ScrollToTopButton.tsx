"use client";

import { MouseEvent } from "react";
import GotoTopIcon from "@/components/icons/GotoTopIcon";  

const ScrollToTopButton = () => {
  const handleClick = (e: MouseEvent) => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div
      className="flex gap-[15px] items-center justify-end h-fit cursor-pointer"
      onClick={handleClick}
    >
      <div className="text-base font-ibmplexmono">Top</div>
      <GotoTopIcon />
    </div>
  );
};

export default ScrollToTopButton;
