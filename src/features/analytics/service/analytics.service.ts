import { ChartApi, ChartEntity } from "@/entities/chart";
import { MetricApi, MetricEntity } from "@/entities/metric";
import { axiosInstance } from "@/shared/config";
import { AnalyticsUsecase } from "./usecase/analytics.usecase";

// * Analytics widget 데이터를 가져오는 Service 로직
export const AnalyticsService = (): AnalyticsUsecase => ({
  getAnalyticsChartData: async () => {
    const { data } = await ChartApi(axiosInstance).getData();
    return data.map((item) => ChartEntity.create(item));
  },
  getAnalyticsGeneralMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getGeneralData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsRiskMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getRiskData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsMomentumMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getMomentumData();
    return data.map((item) => MetricEntity.create(item));
  },
  getAnalyticsRewardMetric: async () => {
    const { data } = await MetricApi(axiosInstance).getRewardData();
    return data.map((item) => MetricEntity.create(item));
  },
});
