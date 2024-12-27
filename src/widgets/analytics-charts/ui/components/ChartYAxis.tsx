import { Chart } from "@/entities/chart";
import React from "react";
import { YAxis } from "recharts";
import { ChartFilterOptionProps } from "../types/analytics-charts.types";

interface ChartYAxisProps {
  option: ChartFilterOptionProps;
  index: number;
  data: Chart[];
}

// * 차트의 Y축 설정
export const ChartYAxis: React.FC<ChartYAxisProps> = ({ option, index, data }) => {
  // * Y축에 렌더링될 최소, 최대, 중간값 계산
  const values = data.map((item) => item[option.dataKey]);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  const step = range / 2;
  const ticks = [min, min + step, max];

  // * 필터 아이디 유형에 따라 다른 단위와 포맷 적용
  const tickFormatter = (value: number) => {
    switch (option.id) {
      case "price":
        return `$${value.toFixed(2)}`;
      case "staked":
        return `${value.toFixed(2)}b`;
      case "reward":
      case "inflation":
        return `${value.toFixed(2)}%`;
      default:
        return value.toFixed(2);
    }
  };

  return (
    <YAxis
      key={option.id}
      yAxisId={option.id}
      orientation="left"
      tickFormatter={tickFormatter}
      domain={[min, max]}
      ticks={ticks}
      axisLine={index === 0 ? { stroke: "#6B7280" } : false}
      stroke={option.color}
      tick={{ fill: option.color, fontSize: 12, fontWeight: 800 }}
      tickLine={false}
      tickMargin={20}
      dx={index * -10}
      padding={{ top: 20, bottom: 20 }}
    />
  );
};
