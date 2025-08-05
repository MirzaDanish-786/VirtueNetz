// components/icons/StarIcon.tsx

import React from 'react';

interface StarIconProps {
  filled?: boolean;
  className?: string; // Accept external Tailwind classes
}

const StarIcon: React.FC<StarIconProps> = ({ filled = false, className = '' }) => {
  return (
    <svg
      width="23"
      height="21"
      viewBox="0 0 23 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block ${className}`} // replaced clsx with template string
    >
      <path
        d="M11.9755 0.700651L14.8286 7.10065L21.7964 7.83659C22.2448 7.88398 22.425 8.43971 22.0901 8.74128L16.8854 13.4314L18.3391 20.2861C18.4328 20.7272 17.9599 21.0704 17.5693 20.8454L11.5 17.3439L5.43073 20.8449C5.0401 21.0699 4.56771 20.7267 4.66094 20.2855L6.11458 13.4309L0.909895 8.74076C0.574999 8.43919 0.755728 7.88346 1.20364 7.83607L8.17135 7.10013L11.0245 0.70013C11.2078 0.288672 11.7922 0.288672 11.9755 0.700651Z"
        fill={filled ? 'url(#yellowGradient)' : '#D9D9D9'}
      />
      {filled && (
        <defs>
          <linearGradient
            id="yellowGradient"
            x1="3.69219"
            y1="1.31211"
            x2="18.8396"
            y2="21.5757"
            gradientUnits="userSpaceOnUse"
          >
            <stop stopColor="#FFDA1C" />
            <stop offset="1" stopColor="#FEB705" />
          </linearGradient>
        </defs>
      )}
    </svg>
  );
};

export default StarIcon;
