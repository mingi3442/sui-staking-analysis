import { Expansion, SuiLogo } from "@/shared/ui/icons";
import { tcm } from "@/shared/utils";
import React from "react";

interface MetricCardProps {
  title: string;
  value: string | number;
  change?: {
    value: number;
    isPositive: boolean;
  };
  position?: number;
  className?: string;
}

export const MetricCard: React.FC<MetricCardProps> = ({ title, value, change, position, className }) => {
  return (
    <div className={tcm("flex flex-col gap-y-2 bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4 w-48 border border-zinc-200 dark:border-zinc-800 hover:shadow-lg", className)}>
      <div className="flex justify-between items-center ">
        <h3 className="text-zinc-500 dark:text-zinc-400 text-xs font-bold">{title}</h3>
        <Expansion className="w-4 h-4 cursor-pointer text-zinc-500" />
      </div>

      <div className="flex items-baseline gap-x-4">
        <span className="text-base font-bold text-zinc-700 dark:text-zinc-300">{value}</span>
        {change && (
          <span className={tcm("text-xs font-semibold", change.isPositive ? "text-green-600" : "text-red-500")}>
            {change.isPositive ? "+" : "-"}
            {change.value}%
          </span>
        )}
      </div>

      <div className="">
        <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 py-2">Market Position</p>
        <div className="w-full h-0.5 rounded relative bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
          <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2" style={{ left: `${position}%` }}>
            <SuiLogo color="DEEP_OCEAN" className="w-4 h-4" />
          </div>
        </div>
      </div>
    </div>
  );
};
