"use client";
import { tcm } from "@/shared/libs";
import { Button } from "@/shared/ui";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";
import { ICONS } from "./constants/side-navigation.const";
import { Tooltip } from "./Tooltip";

interface SideBarButtonProps {
  path: string;
  iconName: keyof typeof ICONS;
  label: string;
  isExpanded: boolean;
}

export const SideBarButton: React.FC<SideBarButtonProps> = ({ path, iconName, label, isExpanded }) => {
  const pathname = usePathname();
  const IconComponent = ICONS[iconName];

  return (
    <Button
      component={Link}
      href={path}
      className={tcm(
        "group relative flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800",
        isExpanded ? "justify-start" : "justify-center",
        pathname === path ? "border-r-2 text-blue-700  border-blue-700 dark:text-sky-500 dark:border-sky-500" : "text-gray-700 dark:text-gray-300"
      )}
    >
      {IconComponent && <IconComponent className="w-4 h-4 flex-shrink-0" />}
      <Tooltip label={label} isShow={!isExpanded} />
      <div className={tcm("overflow-hidden transition-[width,margin] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]", isExpanded ? "ml-4 w-20" : "w-0 ml-0")}>
        <span className="truncate whitespace-nowrap">{label}</span>
      </div>
    </Button>
  );
};
