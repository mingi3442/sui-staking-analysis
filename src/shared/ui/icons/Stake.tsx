import * as React from "react";

export const Stake = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M11 13H7" />
    <path d="M19 9h-4" />
    <path d="M3 3v16a2 2 0 0 0 2 2h16" />
    <rect x="15" y="5" width="4" height="12" rx="1" />
    <rect x="7" y="8" width="4" height="9" rx="1" />
  </svg>
);
