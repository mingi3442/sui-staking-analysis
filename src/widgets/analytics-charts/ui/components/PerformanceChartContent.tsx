"use client";

import { AnalyticsService } from "@/features/analytics";
import { Loading } from "@/shared/ui/loading";
import { useQuery } from "@tanstack/react-query";
import * as React from "react";
import { ChartContainer } from "./ChartContainer";
import { ChartController } from "./ChartController";

export const PerformanceChartContent = () => {
  const [selectedFilters, setSelectedFilters] = React.useState<string[]>(["price", "staked"]);

  const { data, isLoading } = useQuery({
    queryKey: ["chartData"],
    queryFn: AnalyticsService().getAnalyticsChartData,
  });

  const handleFilterClick = (id: string) => {
    // * 최대 3개의 필터만 선택 가능
    setSelectedFilters((prev) => (prev.includes(id) ? (prev.length === 1 ? prev : prev.filter((item) => item !== id)) : prev.length < 3 ? [id, ...prev] : prev));
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
