import React from "react";

interface LinkedInIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeClassName?: string;
  fillClassName?: string;
}

const LinkedInIcon: React.FC<LinkedInIconProps> = ({
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
      <path
        d="M20 9.5C14.2004 9.5 9.5 14.2004 9.5 20C9.5 25.7996 14.2004 30.5 20 30.5C25.7996 30.5 30.5 25.7996 30.5 20C30.5 14.2004 25.7996 9.5 20 9.5ZM17.0633 24.3928H15.0166V17.8426H17.0633V24.3928ZM15.9846 17.0223H15.9682C15.2258 17.0223 14.7459 16.5219 14.7459 15.8861C14.7459 15.2381 15.2422 14.75 15.9969 14.75C16.7516 14.75 17.215 15.2381 17.2314 15.8861C17.2355 16.5178 16.7557 17.0223 15.9846 17.0223ZM25.25 24.3928H22.9285V21.0049C22.9285 20.1189 22.5676 19.5119 21.7678 19.5119C21.1566 19.5119 20.8162 19.9221 20.6604 20.3158C20.6029 20.4553 20.6111 20.6521 20.6111 20.8531V24.3928H18.3102C18.3102 24.3928 18.3389 18.3881 18.3102 17.8426H20.6111V18.8721C20.7465 18.4209 21.4807 17.7811 22.6537 17.7811C24.1098 17.7811 25.25 18.7244 25.25 20.7506V24.3928Z"
        className={fillClassName}
        fill="currentColor"
      />
    </svg>
  );
};

export default LinkedInIcon;
