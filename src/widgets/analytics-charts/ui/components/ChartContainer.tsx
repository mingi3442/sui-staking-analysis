import { Chart } from "@/entities/chart";
import * as React from "react";
import { LineChart, ResponsiveContainer, Tooltip } from "recharts";
import { CHART_FILTER_OPTIONS } from "../constants/analytics-charts.const";
import { ChartLine } from "./ChartLine";
import { ChartTooltip } from "./ChartTooltip";
import { ChartXAxis } from "./ChartXAxis";
import { ChartYAxis } from "./ChartYAxis";

interface ChartContainerProps {
  selectedFilters: string[];
  setSelectedFilters: React.Dispatch<React.SetStateAction<string[]>>;
  chartData: Chart[];
}

export const ChartContainer: React.FC<ChartContainerProps> = ({ selectedFilters, setSelectedFilters, chartData }) => {
  // * 차트의 X축에 보이는 날짜를 정리
  // * useMemo를 이용해서 불필요한 재계산을 제거
  const dates = React.useMemo(() => {
    if (!chartData) return [];
    const targetDates = [3, 12, 21, 30];
    return chartData.filter((_, index) => targetDates.includes(index)).map((item) => item.date);
  }, [chartData]);

  return (
    <div className="flex gap-x-4">
      <div className="flex-1 relative px-4" style={{ height: "400px" }}>
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData} margin={{ top: 40, right: 20, left: 20, bottom: 0 }}>
            {ChartXAxis({ dates })}
            {selectedFilters.map((filterId, index) => {
              const option = CHART_FILTER_OPTIONS.find((opt) => opt.id === filterId)!;
              return ChartYAxis({ option, index, data: chartData });
            })}

            {selectedFilters.map((filterId) => {
              const option = CHART_FILTER_OPTIONS.find((opt) => opt.id === filterId)!;
              return ChartLine({ option });
            })}
            <Tooltip content={ChartTooltip} cursor={{ stroke: "#6B7280", strokeDasharray: "2 2" }} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};
