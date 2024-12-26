interface ChartDataResult {
  date: Date;
  price: number;
  staked: number;
  reward: number;
  inflation: number;
  fullDate: string;
  [key: string]: string | number | Date;
}
