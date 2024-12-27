// * 차트 데이터 모델
export interface Chart {
  date: Date;
  price: number;
  staked: number;
  reward: number;
  inflation: number;
  fullDate: string;
  [key: string]: string | number | Date;
}
