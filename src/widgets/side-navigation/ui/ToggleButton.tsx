import { tcm } from "@/shared/libs";
import { SideBarToggle as SideBarToggleIcon } from "@/shared/ui/icons/SideBarToggle";
import * as React from "react";

interface ToggleButtonProps {
  isExpanded: boolean;
  onToggle: (expanded: boolean) => void;
}

export const ToggleButton: React.FC<ToggleButtonProps> = ({ isExpanded, onToggle }) => {
  return (
    <button
      onClick={() => onToggle(!isExpanded)}
      className={tcm("flex items-center w-full p-4 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800", isExpanded ? "justify-start" : "justify-center")}
    >
      <SideBarToggleIcon />
    </button>
  );
};
