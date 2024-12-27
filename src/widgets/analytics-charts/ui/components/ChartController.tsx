import { tcm } from "@/shared/libs";
import { CHART_FILTER_OPTIONS } from "../constants/analytics-charts.const";

interface ChartControllerProps {
  selectedFilters: string[];
  handleFilterClick: (id: string) => void;
}

// * 차트의 필터 컨트롤러 컴포넌트
export const ChartController = ({ selectedFilters, handleFilterClick }: ChartControllerProps) => {
  return (
    <div className="flex items-center justify-between px-4">
      <div className="flex items-center gap-x-2 ">
        <span className="text-xs font-semibold text-gray-500">Compare up to 3 at a time:</span>
        {CHART_FILTER_OPTIONS.map((option) => (
          <button
            key={option.id}
            onClick={() => handleFilterClick(option.id)}
            className={`flex items-center gap-x-1 px-1 py-1`}
            disabled={selectedFilters.length >= 3 && !selectedFilters.includes(option.id)}
          >
            <div
              className={tcm(
                `w-3 h-3 rounded-full text-sm ${selectedFilters.includes(option.id) ? "" : "border"}`,
                selectedFilters.includes(option.id) ? `bg-[${option.color}]` : "transparent"
              )}
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
