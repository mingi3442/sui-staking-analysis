"use client";
import * as React from "react";
import { ENTERPRISE_MENU_ITEMS } from "../constants";
import { EnterpriseLink } from "./EnterpriseLink";

export const Enterprise = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <div className="relative group" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <p className="hover:text-black dark:hover:text-white font-medium text-sm text-zinc-500 dark:text-zinc-400 cursor-pointer">Enterprise</p>
      {isHovered && (
        <div className="absolute bottom-[calc(100%+3px)] left-1/2 -translate-x-1/2 w-64 z-10">
          <div className="relative z-1 bg-white dark:bg-zinc-900 rounded-lg shadow-xl">
            <div className="p-2 space-y-2">
              {ENTERPRISE_MENU_ITEMS.map((link) => (
                <EnterpriseLink key={link.href} href={link.href}>
                  {link.label}
                </EnterpriseLink>
              ))}
            </div>
            <div className="absolute -bottom-[6px] left-1/2 -translate-x-1/2 w-3 h-3 bg-white dark:bg-zinc-900 rotate-45 transform origin-center shadow-lg" />
          </div>
        </div>
      )}
    </div>
  );
};
