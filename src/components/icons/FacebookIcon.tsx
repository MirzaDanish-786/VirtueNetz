import React from "react";

interface FacebookIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeClassName?: string;
  fillClassName?: string;
}

const FacebookIcon: React.FC<FacebookIconProps> = ({
  className = "",
  width = 40,
  height = 40,
  strokeClassName = "",
  fillClassName = "",
}) => {
  return (
    <svg
      className={className}
      width={width}
      height={height}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Border Circle */}
      <rect
        x="0.5"
        y="0.5"
        width="39"
        height="39"
        rx="19.5"
        className={strokeClassName}
        fill="none"
        stroke="currentColor"
      />
      {/* Facebook Logo Path */}
      <path
        d="M20 9.5C14.225 9.5 9.5 14.2334 9.5 20.0633C9.5 25.3343 13.343 29.7093 18.362 30.5V23.1205H15.695V20.0633H18.362V17.7334C18.362 15.0873 19.9265 13.6325 22.331 13.6325C23.4755 13.6325 24.6725 13.8328 24.6725 13.8328V16.4367H23.3495C22.0475 16.4367 21.638 17.2485 21.638 18.0813V20.0633H24.557L24.0845 23.1205H21.638V30.5C24.1122 30.1076 26.3653 28.8401 27.9904 26.9262C29.6155 25.0124 30.5056 22.5782 30.5 20.0633C30.5 14.2334 25.775 9.5 20 9.5Z"
        className={fillClassName}
        fill="currentColor"
      />
    </svg>
  );
};

export default FacebookIcon;
