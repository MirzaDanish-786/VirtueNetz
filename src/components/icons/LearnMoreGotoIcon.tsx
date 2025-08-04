import React from "react";

interface Props {
  className?: string;
}

const LearnMoreGotoIcon = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Circle border with fixed orange color */}
      <rect
        x="0.5"
        y="0.5"
        width="34"
        height="34"
        rx="17"
        stroke="#E84D00"
      />
      {/* Arrow lines with fixed dark color */}
      <path
        d="M12.5 22.5L22.5 12.5M22.5 12.5L12.5 12.5M22.5 12.5L22.5 22.5"
        stroke="#453D3D"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LearnMoreGotoIcon;
