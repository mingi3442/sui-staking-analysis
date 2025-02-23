import { ChartApi, ChartEntity } from "@/entities/chart";
import { MetricApi, MetricEntity } from "@/entities/metric";
import { apiClient } from "@/shared/api";
import { AnalyticsUsecase } from "./usecase/analytics.usecase";

// * Analytics widget 데이터를 가져오는 Service 로직
export const AnalyticsService = (): AnalyticsUsecase => ({
  getAnalyticsChartData: async () => {
    const { data } = await ChartApi(apiClient).getData();
    return data.map((item) => ChartEntity.create(item));
  },
  getAnalyticsGeneralMetric: async () => {
    const { data } = await MetricApi(apiClient).getGeneralData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsRiskMetric: async () => {
    const { data } = await MetricApi(apiClient).getRiskData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsMomentumMetric: async () => {
    const { data } = await MetricApi(apiClient).getMomentumData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsRewardMetric: async () => {
    const { data } = await MetricApi(apiClient).getRewardData();
    return data.map((item) => MetricEntity.create(item));
  },
});
