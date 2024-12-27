import * as React from "react";

interface TooltipProps {
  label: string;
  isShow: boolean;
}

// * 사이드 네비게이션 바가 확장되지 않았을 때 보이는 툴팁
export const Tooltip: React.FC<TooltipProps> = ({ label, isShow }) => {
  if (!isShow) return null;

  return (
    <div className="absolute left-full top-1/2 -translate-y-1/2 ml-4 px-2 py-1 bg-gray-100 dark:bg-zinc-800 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
      <div className="absolute -left-1 top-1/2 -translate-y-1/2 w-2 h-2 bg-gray-100 dark:bg-zinc-800 rotate-45" />
      <span className="text-sm font-medium text-gray-700 dark:text-gray-300">{label}</span>
    </div>
  );
};
