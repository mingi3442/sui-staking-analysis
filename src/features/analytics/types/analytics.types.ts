interface ChartDataResult {
  date: Date;
  price: number;
  staked: number;
  reward: number;
  inflation: number;
  fullDate: string;
  [key: string]: string | number | Date;
}

interface MetricDataResult {
  title: string;
  value: string | number;
  changeRate: number | null;
  position: number | null;
}
