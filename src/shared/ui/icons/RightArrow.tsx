import * as React from "react";

export const ArrowRight = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10" className={className} {...props}>
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4" />
  </svg>
);
