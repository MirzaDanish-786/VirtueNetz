import React from "react";

interface Props {
  label: string;
  onClick?: () => void; 
  bg_color?: boolean;
  additionalClasses?: string; 
}

const Button = ({ label, onClick, bg_color = false, additionalClasses = "" }: Props) => {
  return (
    <button
      onClick={onClick}
      className={`${bg_color ? "bg-[#E84D00] text-white border-none" : ""} border border-[#989CAA] rounded-[30px] font-ibmplexmono font-medium text-base px-[17px] py-[10px] cursor-pointer max-xl:px-3 max-xl:py-1.5 max-xl:text-sm max-lg:text-[12px] ${additionalClasses}`}
    >
      {label}
    </button>
  );
};

export default Button;
