import { AxiosResponse } from "axios";

export interface ApiResponse<T> extends AxiosResponse<T> {
  data: T;
  status: number;
  statusText: string;
  message?: string;
}
