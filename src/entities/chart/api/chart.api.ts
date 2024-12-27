import { ApiResponse } from "@/shared/types";
import { AxiosInstance } from "axios";
import { Chart } from "../model/chart.model";

type ChartDataResponse = Promise<ApiResponse<Chart[]>>;

export const ChartApi = (axiosInstance: AxiosInstance) => ({
  getData: (): ChartDataResponse => axiosInstance.get("/analytics/chart-data"),
});
