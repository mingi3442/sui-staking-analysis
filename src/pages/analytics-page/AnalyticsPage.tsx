import { AnalyzeDataSection } from "@/widgets/analytics/analyze-data/ui";
import { ChartSection } from "@/widgets/analytics/charts/ui";
import { Header } from "@/widgets/header";

export const AnalyticsPage = () => {
  return (
    <div className="w-full h-full relative">
      <Header />
      <div className=" border-t-2 border-black/10 dark:border-white/10 pb-4 w-full h-full">
        <ChartSection />
        <AnalyzeDataSection />
      </div>
    </div>
  );
};
