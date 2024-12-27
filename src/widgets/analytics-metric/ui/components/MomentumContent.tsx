"use client";
import { AnalyticsService } from "@/features/analytics";
import { Loading } from "@/shared/ui/loading";
import { useQuery } from "@tanstack/react-query";
import { MetricContent } from "./MetricContent";

export const MomentumContent = () => {
  const { data, isPending } = useQuery({
    queryKey: ["getAnalyticsMomentumMetric"],
    queryFn: () => AnalyticsService().getAnalyticsMomentumMetric(),
  });
  if (isPending || !data) return <Loading />;
  return (
    <div className="p-8 pb-2">
      <div className="grid grid-rows-[repeat(auto-fill,minmax(120px,1fr))] grid-cols-[repeat(auto-fill,220px)] gap-4">
        {data.map((item) => (
          <MetricContent
            valueClassName={item.changeRate && item.changeRate > 0 ? "text-green-600" : "text-red-500"}
            key={item.title}
            title={item.title}
            value={item.value}
            position={item.position}
            changeRate={item.changeRate}
          />
        ))}
      </div>
    </div>
  );
};
