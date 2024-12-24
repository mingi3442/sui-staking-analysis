import * as React from "react";

export const Logo = ({ className, ...props }: React.SVGAttributes<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className={className} {...props}>
    <g fill="currentColor">
      <rect x="4" y="8" width="4" height="4" />
      <rect x="8" y="8" width="4" height="4" />
      <rect x="12" y="8" width="4" height="4" />
      <rect x="12" y="12" width="4" height="4" />
    </g>
  </svg>
);
