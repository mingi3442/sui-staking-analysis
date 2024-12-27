import { AxiosResponse } from "axios";

// * 공통 API Response 타입
export interface ApiResponse<T> extends AxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  message?: string;
}
