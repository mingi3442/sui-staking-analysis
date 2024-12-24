import { tcm } from "@/shared/utils";
import Link from "next/link";
import * as React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const FooterLink: React.FC<NavLinkProps> = ({ href, children, className, ...props }) => {
  return (
    <Link href={href} className={tcm("hover:underline hover:text-black font-medium text-sm text-gray-700 dark:text-gray-300", className)} {...props}>
      {children}
    </Link>
  );
};
