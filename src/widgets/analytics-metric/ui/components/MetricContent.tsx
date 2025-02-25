import { tcm } from "@/shared/libs";
import { Expansion, SuiLogo } from "@/shared/ui/icons";
import * as React from "react";

interface MetricContentProps {
  title: string;
  value: string | number;
  changeRate: number | null;
  position: number | null;
  className?: string;
  valueClassName?: string;
}

// * 메트릭 데이터 카드 컴포넌트
export const MetricContent: React.FC<MetricContentProps> = ({ title, value, changeRate, position, className, valueClassName }) => {
  return (
    <div
      className={tcm(
        "min-h-34 w-56 flex flex-col gap-y-2 cursor-pointer bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4  border border-zinc-200 dark:border-zinc-800 hover:shadow-lg",
        className
      )}
    >
      <div className="flex justify-between items-center ">
        <p className="text-zinc-500 dark:text-zinc-400 text-xs font-bold">{title}</p>
        <Expansion className="w-4 h-4 cursor-pointer text-zinc-500" />
      </div>

      <div className="flex items-baseline gap-x-4">
        <span className={tcm("text-base font-bold text-zinc-700 dark:text-zinc-300 tracking-wide", valueClassName)}>{value}</span>
        {changeRate && (
          <span className={tcm("text-xs font-semibold", changeRate > 0 ? "text-green-600" : "text-red-500")}>
            {changeRate > 0 ? "+ " : "- "}
            {changeRate}%
          </span>
        )}
      </div>
      {position && (
        <React.Fragment>
          <p className="text-[10px] font-bold text-zinc-500 dark:text-zinc-400 py-2">Market Position</p>
          <div className="w-full h-0.5 rounded relative bg-gradient-to-r from-red-500 via-yellow-500 to-green-500">
            <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full absolute top-1/2 -translate-y-1/2" style={{ left: `${position}%` }}>
              <SuiLogo color="DEEP_OCEAN" className="w-4 h-4" />
            </div>
          </div>
        </React.Fragment>
      )}
    </div>
  );
};
