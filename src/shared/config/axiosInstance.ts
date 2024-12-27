import axios, { AxiosInstance } from "axios";

// * axios instance 설정 파일
export const axiosInstance: AxiosInstance = axios.create({
  // * 배포를 위한 임시 URL
  baseURL: `${window.location.origin}/api/`,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    try {
      return config;
    } catch (error) {
      return Promise.reject(error);
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  async function (response) {
    return response;
  },
  async function (error) {
    return Promise.reject(error);
  }
);
