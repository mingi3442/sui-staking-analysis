import { axiosInstance } from "@/shared/config";
import { ApiResponse } from "@/shared/types";

export const AnalyticsApi = () => ({
  getAnalyticsChartData: (): Promise<ApiResponse<ChartDataResult[]>> => axiosInstance.get("/analytics/chart-data"),
  getAnalyticsGeneralMetric: (): Promise<ApiResponse<MetricDataResult[]>> => axiosInstance.get("/analytics/metric/general"),
  getAnalyticsRiskMetric: (): Promise<ApiResponse<MetricDataResult[]>> => axiosInstance.get("/analytics/metric/risk"),
  getAnalyticsMomentumMetric: (): Promise<ApiResponse<MetricDataResult[]>> => axiosInstance.get("/analytics/metric/momentum"),
  getAnalyticsRewardMetric: (): Promise<ApiResponse<MetricDataResult[]>> => axiosInstance.get("/analytics/metric/reward"),
});
