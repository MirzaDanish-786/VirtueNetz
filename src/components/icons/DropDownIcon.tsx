import React from "react";

interface Props {
  className?: string; // Optional className to control size/color
}

const DropDownIcon = ({ className = "" }: Props) => {
  return (
    <svg
      viewBox="0 0 10 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`text-white ${className}`} // default white, allow overrides
    >
      <path
        d="M8.6637 0.122031L4.99995 3.78578L1.3362 0.122031C1.17349 -0.0406771 0.90974 -0.0406771 0.747031 0.122031C0.584323 0.28474 0.584323 0.548489 0.747031 0.711198L4.70536 4.66953C4.78682 4.75099 4.89328 4.79162 4.99995 4.79162C5.10662 4.79162 5.21307 4.75099 5.29453 4.66953L9.25286 0.711198C9.41557 0.548489 9.41557 0.28474 9.25286 0.122031C9.09016 -0.0406771 8.82641 -0.0406771 8.6637 0.122031Z"
        fill="currentColor"
      />
    </svg>
  );
};

export default DropDownIcon;
