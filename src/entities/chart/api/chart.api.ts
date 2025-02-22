import { ApiResponse } from "@/shared/types";
import { AxiosInstance } from "axios";
import { Chart } from "../model/chart.types";

// * 차트 데이터를 가져오는 API Response 타입
type ChartDataResponse = Promise<ApiResponse<Chart[]>>;

// * 차트 데이터를 가져오는 API
export const ChartApi = (axiosInstance: AxiosInstance) => ({
  getData: (): ChartDataResponse => axiosInstance.get("/analytics/chart-data"),
});
