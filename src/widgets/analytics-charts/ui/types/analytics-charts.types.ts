import { ChartDataKeyType } from "@/entities/chart";

export interface ChartFilterOptionProps {
  // * 각 필터의 Id
  id: string;
  // * 각 필터의 라벨
  label: string;
  // * 각 필더의 색상
  color: string;
  // * 각 필터의 데이터키
  dataKey: ChartDataKeyType;
}
