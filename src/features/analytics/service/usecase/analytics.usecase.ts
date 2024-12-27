import { Chart } from "@/entities/chart";
import { Metric } from "@/entities/metric";

// * Analytics 서비스의 UseCase
export interface AnalyticsUsecase {
  getAnalyticsChartData: () => Promise<Chart[]>;
  getAnalyticsGeneralMetric: () => Promise<Metric[]>;
  getAnalyticsRiskMetric: () => Promise<Metric[]>;
  getAnalyticsMomentumMetric: () => Promise<Metric[]>;
  getAnalyticsRewardMetric: () => Promise<Metric[]>;
}
