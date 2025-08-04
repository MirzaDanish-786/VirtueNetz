import React from "react";

interface GotoIconProps {
  className?: string;
}

const GotoIcon = ({ className = "" }: GotoIconProps) => {
  return (
    <svg
      viewBox="0 0 26 26"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      stroke="currentColor"
    >
      <path
        d="M1.0001 24.9999L25 1.00001M25 1.00001L1 1M25 1.00001L24.9999 24.9999"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default GotoIcon;
