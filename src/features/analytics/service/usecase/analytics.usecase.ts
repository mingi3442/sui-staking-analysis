import { Chart } from "@/entities/chart";
import { Metric } from "@/entities/metric";

export interface AnalyticsUsecase {
  getAnalyticsChartData: () => Promise<Chart[]>;
  getAnalyticsGeneralMetric: () => Promise<Metric[]>;
  getAnalyticsRiskMetric: () => Promise<Metric[]>;
  getAnalyticsMomentumMetric: () => Promise<Metric[]>;
  getAnalyticsRewardMetric: () => Promise<Metric[]>;
}
