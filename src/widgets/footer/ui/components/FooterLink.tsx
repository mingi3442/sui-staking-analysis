import { tcm } from "@/shared/libs";
import Link from "next/link";
import * as React from "react";

interface NavLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
}

export const FooterLink: React.FC<NavLinkProps> = ({ href, children, className, ...props }) => {
  return (
    <Link prefetch={false} href={href} className={tcm("hover:underline hover:text-black font-medium text-sm text-zinc-500 dark:text-zinc-400", className)} {...props}>
      {children}
    </Link>
  );
};
