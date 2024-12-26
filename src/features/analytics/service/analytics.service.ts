import { AnalyticsApi } from "../api";
import { AnalyticsUsecase } from "../usecase";

export const AnalyticsService = (): AnalyticsUsecase => ({
  getAnalyticsChartData: async () => {
    const { data } = await AnalyticsApi().getAnalyticsChartData();
    return data;
  },
  getAnalyticsGeneralMetric: async () => {
    const { data } = await AnalyticsApi().getAnalyticsGeneralMetric();
    return data;
  },
  getAnalyticsRiskMetric: async () => {
    const { data } = await AnalyticsApi().getAnalyticsRiskMetric();
    return data;
  },
  getAnalyticsMomentumMetric: async () => {
    const { data } = await AnalyticsApi().getAnalyticsMomentumMetric();
    return data;
  },
  getAnalyticsRewardMetric: async () => {
    const { data } = await AnalyticsApi().getAnalyticsRewardMetric();
    return data;
  },
});
