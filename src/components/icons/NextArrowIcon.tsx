import React from "react";

interface Props {
  className?: string; // Allow custom size & color via Tailwind
}

const NextArrowIcon = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 0 35 35"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-[#989CAA] ${className}`} // default stroke color
    >
      <rect
        x="0.5"
        y="0.5"
        width="34"
        height="34"
        rx="17"
        stroke="currentColor"
      />
      <path
        d="M10.429 17.4998L24.5711 17.4998M24.5711 17.4998L17.5 10.4287M24.5711 17.4998L17.5 24.5708"
        stroke="currentColor"
        strokeWidth="1.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default NextArrowIcon;
