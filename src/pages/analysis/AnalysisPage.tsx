import { AnalyticsChartsSection } from "@/widgets/analytics-charts";
import { AnalyticsMetricSection } from "@/widgets/analytics-metric";
import { Header } from "@/widgets/header";

// * AnalysisPage 렌더링 UI
export const AnalysisPage = () => {
  return (
    <div className="min-h-96 w-full h-full relative">
      <Header />
      <div className=" border-t-2 border-black/10 dark:border-white/10 pb-4 w-full h-full">
        <AnalyticsChartsSection />
        <AnalyticsMetricSection />
      </div>
    </div>
  );
};
