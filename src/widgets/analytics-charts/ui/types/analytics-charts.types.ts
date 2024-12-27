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
  // * true일 경우, 다른 필터와는 동시에 활성화 되지 않도록 하기 위한 속성
  exclusive: boolean;
}
