import * as React from "react";

interface TooltipProps {
  label: string;
  show: boolean;
}

export const Tooltip: React.FC<TooltipProps> = ({ label, show }) => {
  if (!show) return null;

  return (
    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-100 dark:bg-zinc-800 rotate-45" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
};
