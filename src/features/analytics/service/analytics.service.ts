import { ChartApi } from "@/entities/chart";
import { MetricApi } from "@/entities/metric";
import { axiosInstance } from "@/shared/config";
import { AnalyticsUsecase } from "./usecase/analytics.usecase";

// * Analytics widget 데이터를 가져오는 Service 로직
export const AnalyticsService = (): AnalyticsUsecase => ({
  getAnalyticsChartData: async () => {
    const { data } = await ChartApi(axiosInstance).getData();
    return data;
  },
  getAnalyticsGeneralMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getGeneralData();
    return data;
  },
  getAnalyticsRiskMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getRiskData();
    return data;
  },
  getAnalyticsMomentumMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getMomentumData();
    return data;
  },
  getAnalyticsRewardMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getRewardData();
    return data;
  },
});
