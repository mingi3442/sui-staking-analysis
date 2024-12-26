export interface AnalyticsUsecase {
  getAnalyticsChartData: () => Promise<ChartDataResult[]>;
  getAnalyticsGeneralMetric: () => Promise<MetricDataResult[]>;
  getAnalyticsRiskMetric: () => Promise<MetricDataResult[]>;
  getAnalyticsMomentumMetric: () => Promise<MetricDataResult[]>;
  getAnalyticsRewardMetric: () => Promise<MetricDataResult[]>;
}
