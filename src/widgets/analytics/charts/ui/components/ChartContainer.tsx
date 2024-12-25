"use client";

import { tcm } from "@/shared/utils";
import { format } from "date-fns";
import { useMemo, useState } from "react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import { ChartTooltip } from "./ChartTooltip";

interface FilterOption {
  id: string;
  label: string;
  color: string;
  dataKey: string;
  exclusive?: boolean;
}

interface DataPoint {
  date: Date;
  price: number;
  staked: number;
  reward: number;
  inflation: number;
  fullDate: string;
  [key: string]: string | number | Date;
}

const filterOptions: FilterOption[] = [
  { id: "price", label: "Price", color: "#9333EA", dataKey: "price" },
  { id: "staked", label: "Staked SUI", color: "#38bdf8", dataKey: "staked" },
  { id: "reward", label: "Reward Rate", color: "#1d4ed8", dataKey: "reward", exclusive: true },
  { id: "inflation", label: "Inflation Rate", color: "#15803d", dataKey: "inflation", exclusive: true },
];

// Generate 31 days of data
const generateData = (): DataPoint[] => {
  const data = [];
  const startDate = new Date("2024-11-25");

  for (let i = 0; i < 31; i++) {
    const currentDate = new Date(startDate);
    currentDate.setDate(startDate.getDate() + i);

    data.push({
      date: currentDate,
      price: 3.13 + Math.random() * 2,
      staked: 7.793 + Math.random() * 0.1,
      reward: 5 + Math.random() * 2,
      inflation: 7 + Math.random() * 1,
      fullDate: currentDate.toISOString(),
    });
  }
  return data;
};

const data = generateData();

export const ChartContainer = () => {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["price", "staked"]);

  const handleFilterClick = (id: string, exclusive?: boolean) => {
    setSelectedFilters((prev) => {
      // If clicking an exclusive filter
      if (exclusive) {
        const nonExclusiveFilters = prev.filter((f) => !filterOptions.find((opt) => opt.id === f)?.exclusive);
        return prev.includes(id) ? nonExclusiveFilters : [id, ...nonExclusiveFilters];
      }

      // If clicking a non-exclusive filter
      if (prev.includes(id)) {
        // Prevent deactivating if it's the last selected filter
        return prev.length === 1 ? prev : prev.filter((item) => item !== id);
      } else {
        return prev.length < 3 ? [id, ...prev] : prev;
      }
    });
  };

  // Show only specific dates: Nov 28, Dec 7, Dec 16, Dec 25
  const visibleDates = useMemo(() => {
    const targetDates = [3, 12, 21, 30]; // Indices for Nov 28, Dec 7, Dec 16, Dec 25
    return data.filter((_, index) => targetDates.includes(index)).map((item) => item.fullDate);
  }, []);

  return (
    <div className="bg-zinc-200 dark:bg-zinc-800 rounded-lg p-4 relative">
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center justify-between px-4">
          <div className="flex items-center gap-x-2 ">
            <span className="text-xs font-semibold text-gray-500">Compare up to 3 at a time:</span>
            {filterOptions.map((option) => (
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

        <div className="flex gap-x-4">
          <div className="flex-1 relative px-4" style={{ height: "400px" }}>
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={data} margin={{ top: 40, right: 20, left: 20, bottom: 0 }}>
                <XAxis
                  dataKey="fullDate"
                  ticks={visibleDates}
                  tickFormatter={(value) => {
                    const date = new Date(value);
                    return format(date, "MMM dd, yyyy");
                  }}
                  stroke="#6B7280"
                  tickLine={false}
                  tick={{
                    fill: "#3f3f46",
                    fontSize: 12,
                    fontWeight: 800,
                  }}
                  axisLine={{ stroke: "#6B7280" }}
                  domain={[(dataMin: number) => dataMin - 24 * 60 * 60 * 1000, (dataMax: number) => dataMax + 24 * 60 * 60 * 1000]}
                  padding={{ left: 40, right: 40 }}
                  tickMargin={10}
                />

                {selectedFilters.map((filterId, index) => {
                  const option = filterOptions.find((opt) => opt.id === filterId)!;

                  // 각 데이터의 최소값과 최대값을 계산
                  const values = data.map((item) => item[option.dataKey] as number);
                  const min = Math.min(...values);
                  const max = Math.max(...values);
                  const range = max - min;
                  const step = range / 2;
                  const ticks = [min, min + step, max];

                  return (
                    <YAxis
                      key={option.id}
                      yAxisId={option.id}
                      orientation="left"
                      tickFormatter={(value) => {
                        if (option.id === "price") {
                          return `$${value.toFixed(2)}`;
                        }
                        if (option.id === "staked") {
                          return `${value.toFixed(2)}b`;
                        }
                        if (option.id === "reward" || option.id === "inflation") {
                          return `${value.toFixed(2)}%`;
                        }
                        return value.toFixed(2);
                      }}
                      domain={[min, max]}
                      ticks={ticks}
                      axisLine={index === 0 ? { stroke: "#6B7280" } : false}
                      stroke={option.color}
                      tick={{ fill: option.color, fontSize: 12, fontWeight: 800 }}
                      tickLine={false}
                      tickMargin={20}
                      dx={index * -10}
                      padding={{ top: 20, bottom: 20 }}
                    />
                  );
                })}

                {selectedFilters.map((filterId) => {
                  const option = filterOptions.find((opt) => opt.id === filterId)!;
                  return <Line key={option.id} type="linear" dataKey={option.dataKey} stroke={option.color} yAxisId={option.id} dot={false} strokeWidth={2} name={option.label} />;
                })}
                <Tooltip content={ChartTooltip} cursor={{ stroke: "#6B7280", strokeDasharray: "2 2" }} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>
      <div className="pt-4 flex items-center justify-end gap-x-2 text-sm text-zinc-500 dark:text-zinc-400 px-4">
        <span className="text-xs font-medium">Data Trusted by</span>
        <div className="flex items-center gap-x-2">
          <p className="font-normal text-[10px]">GRAYSCALE</p>
          <p className="font-medium text-xs text-purple-600">Kraken</p>
          <p className="font-semibold text-xs text-blue-600">coinbase</p>
        </div>
        <span className="text-xs font-medium">&more</span>
      </div>
    </div>
  );
};
