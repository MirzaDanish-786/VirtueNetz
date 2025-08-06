import React from "react";

interface IconProps {
  width?: number;
  height?: number;
  strokeClassName?: string;
  fillClassName?: string;
}

const GotoTopIcon: React.FC<IconProps> = ({
  width = 35,
  height = 35,
  strokeClassName = "stroke-[#E84D00]",
  fillClassName = "stroke-[#453D3D]",
}) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="transition-colors duration-300"
    >
      {/* Circle outline */}
      <rect
        x="0.5"
        y="0.5"
        width="34"
        height="34"
        rx="17"
        className={strokeClassName}
        fill="none"
        strokeWidth="1"
      />
      {/* Arrows */}
      <path
        d="M17.5001 24.571L17.5001 10.4289M17.5001 10.4289L10.429 17.5M17.5001 10.4289L24.5711 17.5"
        className={fillClassName}
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
      />
    </svg>
  );
};

export default GotoTopIcon;
