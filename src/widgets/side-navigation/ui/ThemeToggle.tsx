"use client";

import { tcm } from "@/shared/libs";
import { Button } from "@/shared/ui";
import { Dark, Light } from "@/shared/ui/icons";
import { useTheme } from "next-themes";
import * as React from "react";
import { Tooltip } from "./Tooltip";

interface ThemeToggleProps {
  isExpanded: boolean;
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ isExpanded }) => {
  const { resolvedTheme, setTheme } = useTheme();

  return (
    <Button
      onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
      className={tcm("group relative flex items-center p-4 hover:bg-gray-100 dark:hover:bg-gray-800", isExpanded ? "justify-start" : "justify-center")}
    >
      <div className="w-4 h-4 flex items-center justify-center flex-shrink-0">{resolvedTheme === "dark" ? <Light className="w-4 h-4" /> : <Dark className="w-4 h-4" />}</div>
      <Tooltip label={resolvedTheme === "dark" ? "Light" : "Dark"} show={!isExpanded} />
      <div className={tcm("flex justify-start overflow-hidden transition-[width,margin] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]", isExpanded ? "ml-4 w-20" : "w-0 ml-0")}>
        <span className="truncate whitespace-nowrap text-gray-700 dark:text-gray-300">{resolvedTheme === "dark" ? "Light" : "Dark"}</span>
      </div>
    </Button>
  );
};
