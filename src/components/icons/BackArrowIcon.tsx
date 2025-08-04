import React from "react";

interface Props {
  className?: string; // Allows setting size and color from outside
}

const BackArrowIcon = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#989CAA] ${className}`} // Default stroke color
    >
      <rect
        x="-0.5"
        y="0.5"
        width="34"
        height="34"
        rx="17"
        transform="matrix(-1 0 0 1 34 0)"
        stroke="currentColor"
      />
      <path
        d="M24.571 17.4998L10.4289 17.4998M10.4289 17.4998L17.5 10.4287M10.4289 17.4998L17.5 24.5708"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default BackArrowIcon;
