import { AnalyticsApi } from "../api";
import { AnalyticsUsecase } from "../usecase";

export const AnalyticsService = (): AnalyticsUsecase => ({
  getAnalyticsChartData: async () => {
    const { data } = await AnalyticsApi().getAnalyticsChartData();
    return data;
  },
});
