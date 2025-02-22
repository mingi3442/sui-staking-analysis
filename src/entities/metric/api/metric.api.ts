import { ApiResponse } from "@/shared/types";
import { AxiosInstance } from "axios";
import { Metric } from "../model/metric.types";

// * Metric API Response 타입
type MetricResponse = Promise<ApiResponse<Metric[]>>;

// * Metric 데이터를 가져오는 API
export const MetricApi = (axiosInstance: AxiosInstance) => ({
  getGeneralData: (): MetricResponse => axiosInstance.get("/analytics/metric/general"),
  getRiskData: (): MetricResponse => axiosInstance.get("/analytics/metric/risk"),
  getMomentumData: (): MetricResponse => axiosInstance.get("/analytics/metric/momentum"),
  getRewardData: (): MetricResponse => axiosInstance.get("/analytics/metric/reward"),
});
