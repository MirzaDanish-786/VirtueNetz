import React from "react";

interface GoogleIconProps {
  className?: string;
  width?: number;
  height?: number;
  strokeClassName?: string;
  circleClassName?: string;
  pathClassName?: string;
}

const ClutchIcon: React.FC<GoogleIconProps> = ({
  className = "",
  width = 40,
  height = 40,
  strokeClassName = "",
  circleClassName = "",
  pathClassName = "",
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
        stroke="currentColor"
        fill="none"
        className={strokeClassName}
      />
      <circle
        cx="20"
        cy="20"
        r="10.5"
        fill="currentColor"
        className={circleClassName}
      />
      <path
        d="M22.5352 22.8501C21.9076 23.3522 21.029 23.7288 20.1503 23.7288C18.1421 23.7288 16.7614 22.2226 16.7614 20.2143C16.7614 18.206 18.1421 16.8253 20.1503 16.8253C21.029 16.8253 21.9076 17.0763 22.5352 17.7039L22.9117 18.0805L24.92 16.1977L24.4179 15.8212C23.2883 14.817 21.7821 14.1895 20.1503 14.1895C16.6359 14.1895 14 16.8253 14 20.3398C14 23.8543 16.6359 26.4901 20.1503 26.4901C21.7821 26.4901 23.2883 25.8626 24.4179 24.8584L24.92 24.4819L22.9117 22.4736L22.5352 22.8501Z"
        fill="currentColor"
        className={pathClassName}
      />
      <path
        d="M20.0248 22.3483C21.134 22.3483 22.0331 21.4492 22.0331 20.34C22.0331 19.2309 21.134 18.3317 20.0248 18.3317C18.9157 18.3317 18.0165 19.2309 18.0165 20.34C18.0165 21.4492 18.9157 22.3483 20.0248 22.3483Z"
        fill="currentColor"
        className={pathClassName}
      />
    </svg>
  );
};

export default ClutchIcon;
