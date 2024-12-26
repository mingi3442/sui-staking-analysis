export interface AnalyticsUsecase {
  getAnalyticsChartData: () => Promise<ChartDataResult[]>;
}
