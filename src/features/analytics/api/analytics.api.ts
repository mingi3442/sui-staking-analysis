import { axiosInstance } from "@/shared/config";
import { ApiResponse } from "@/shared/types";

export const AnalyticsApi = () => ({
  getAnalyticsChartData: (): Promise<ApiResponse<ChartDataResult[]>> => axiosInstance.get("/analytics/chart-data"),
});
