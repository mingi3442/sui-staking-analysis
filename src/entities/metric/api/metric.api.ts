import { ApiClient } from "@/shared/api";
import { ApiResponse } from "@/shared/types";
import { Metric } from "../model/metric.types";

// * Metric API Response 타입
type MetricResponse = Promise<ApiResponse<Metric[]>>;

// * Metric 데이터를 가져오는 API
export const MetricApi = (apiClient: ApiClient) => ({
  getGeneralData: (): MetricResponse => apiClient.get("/analytics/metric/general"),
  getRiskData: (): MetricResponse => apiClient.get("/analytics/metric/risk"),
  getMomentumData: (): MetricResponse => apiClient.get("/analytics/metric/momentum"),
  getRewardData: (): MetricResponse => apiClient.get("/analytics/metric/reward"),
});
