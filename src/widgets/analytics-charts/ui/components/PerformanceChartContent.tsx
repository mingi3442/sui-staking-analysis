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
  });

  const handleFilterClick = (id: string, exclusive?: boolean) => {
    setSelectedFilters((prev) => {
      // * Reward Rate, inflation Rate의 경우에는 동시에 하나만 활성화하기 위한 로직
      if (exclusive) {
        const nonExclusiveFilters = prev.filter((f) => !CHART_FILTER_OPTIONS.find((opt) => opt.id === f)?.exclusive);
        return prev.includes(id) ? nonExclusiveFilters : [id, ...nonExclusiveFilters];
      }
      // * 필터가 선택되어 있지 않은 경우 제거
      // * 필터가 하나 남았을 경우 마지막 필터 제거를 방지
      return prev.includes(id) ? (prev.length === 1 ? prev : prev.filter((item) => item !== id)) : [id, ...prev];
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
