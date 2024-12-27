import { ApiResponse } from "@/shared/types";
import { AxiosInstance } from "axios";
import { Metric } from "../model/metric.model";

type MetricResponse = Promise<ApiResponse<Metric[]>>;

export const MetricApi = (axiosInstance: AxiosInstance) => ({
  getGeneralData: (): MetricResponse => axiosInstance.get("/analytics/metric/general"),
  getRiskData: (): MetricResponse => axiosInstance.get("/analytics/metric/risk"),
  getMomentumData: (): MetricResponse => axiosInstance.get("/analytics/metric/momentum"),
  getRewardData: (): MetricResponse => axiosInstance.get("/analytics/metric/reward"),
});
