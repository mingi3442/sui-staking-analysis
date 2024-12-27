// * 차트 데이터 키
export type ChartDataKeyType = "price" | "staked" | "reward" | "inflation";

// * 차트 데이터 모델
export type Chart = {
  [key in ChartDataKeyType]: number;
} & {
  date: number;
};
