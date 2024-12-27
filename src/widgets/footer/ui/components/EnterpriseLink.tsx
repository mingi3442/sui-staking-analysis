import Link from "next/link";
import * as React from "react";

interface EnterpriseLinkProps {
  href: string;
  children: React.ReactNode;
}

export const EnterpriseLink = ({ href, children }: EnterpriseLinkProps) => {
  return (
    <Link
      href={href}
      prefetch={false}
      target="_blank"
      rel="noopener noreferrer"
      className="block p-2 rounded-lg border border-transparent transition-all duration-200 hover:bg-gradient-to-r hover:from-white/5 hover:to-blue-600/15 hover:border-blue-700"
    >
      <span className="font-bold text-gray-700 dark:text-gray-200 text-sm">{children}</span>
    </Link>
  );
};
