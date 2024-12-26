import { tcm } from "@/shared/utils";
import { CHART_FILTER_OPTIONS } from "../../constants";

interface ChartControllerProps {
  selectedFilters: string[];
  handleFilterClick: (id: string, exclusive?: boolean) => void;
}

export const ChartController = ({ selectedFilters, handleFilterClick }: ChartControllerProps) => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-x-2 ">
        <span className="text-xs font-semibold text-gray-500">Compare up to 3 at a time:</span>
        {CHART_FILTER_OPTIONS.map((option) => (
          <button key={option.id} onClick={() => handleFilterClick(option.id, option.exclusive)} className={`flex items-center gap-x-1 px-1 py-1 `}>
            <div
              className={`w-3 h-3 rounded-full text-sm ${selectedFilters.includes(option.id) ? "" : "border"}`}
              style={{
                backgroundColor: selectedFilters.includes(option.id) ? option.color : "transparent",
                borderColor: selectedFilters.includes(option.id) ? option.color : "#6B7280",
              }}
            />
            <span className={tcm("text-xs font-bold", selectedFilters.includes(option.id) ? " text-zinc-900 dark:text-zinc-100" : "text-zinc-500 dark:text-zinc-400")}>
              {option.label}
            </span>
          </button>
        ))}
      </div>
      <div className="">
        <button className="px-3 py-1 font-bold text-[10px] text-zinc-700 dark:text-zinc-300 border border-zinc-400 dark:border-zinc-600 rounded-full">
          Nov 25, 2024 - Dec 25, 2024
        </button>
      </div>
    </div>
  );
};
