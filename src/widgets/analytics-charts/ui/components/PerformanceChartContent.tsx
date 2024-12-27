"use client";

import { AnalyticsService } from "@/features/analytics";
import { Loading } from "@/shared/ui/loading";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { CHART_FILTER_OPTIONS } from "../constants/analytics-charts.const";
import { ChartContainer } from "./ChartContainer";
import { ChartController } from "./ChartController";

export const PerformanceChartContent = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["price", "staked"]);

  const { data, isLoading } = useQuery({
    queryKey: ["chartData"],
    queryFn: AnalyticsService().getAnalyticsChartData,
    staleTime: 5 * 60 * 1000,
    refetchInterval: 10 * 60 * 1000,
  });

  const handleFilterClick = (id: string, exclusive?: boolean) => {
    setSelectedFilters((prev) => {
      if (prev.length === 1 && prev.includes(id)) {
        return prev;
      }
      if (exclusive) {
        const nonExclusiveFilters = prev.filter((f) => !CHART_FILTER_OPTIONS.find((opt) => opt.id === f)?.exclusive);
        return prev.includes(id) ? nonExclusiveFilters : [id, ...nonExclusiveFilters];
      }
      if (prev.includes(id)) {
        return prev.length === 1 ? prev : prev.filter((item) => item !== id);
      } else {
        return prev.length < 3 ? [id, ...prev] : prev;
      }
    });
  };

  if (isLoading || !data) return <Loading />;
  return (
    <div className=" p-4 relative">
      <div className="flex flex-col gap-y-2">
        <ChartController selectedFilters={selectedFilters} handleFilterClick={handleFilterClick} />
        <ChartContainer selectedFilters={selectedFilters} setSelectedFilters={setSelectedFilters} chartData={data} />
      </div>
    </div>
  );
};
