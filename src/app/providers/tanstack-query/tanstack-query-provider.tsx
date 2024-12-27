"use client";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import * as React from "react";

// * tanstack-query 설정
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // * 데이터가 캐싱되는 시간 설정
      staleTime: 5 * 60 * 1000,
      // * 쿼리 요청 실패시 재시도 횟수 설정
      retry: 1,
    },
  },
});
export const TanstackQueryProvider = ({ children }: { children: React.ReactNode }) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};
