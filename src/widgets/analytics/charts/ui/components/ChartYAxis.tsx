import React from "react";
import { YAxis } from "recharts";

interface ChartYAxisProps {
  option: ChartFilterOptionProps;
  index: number;
  data: any[];
}

export const ChartYAxis: React.FC<ChartYAxisProps> = ({ option, index, data }) => {
  console.log('ChartYAxis FULL option:', JSON.stringify(option, null, 2));
  console.log('ChartYAxis data length:', data?.length);
  console.log('ChartYAxis option.dataKey:', option.dataKey);

  if (!data || data.length === 0) {
    console.warn('ChartYAxis: No data provided');
    return null;
  }

  console.log('ChartYAxis option:', option);
  console.log('ChartYAxis data:', data);
  const values = data.map((item) => item[option.dataKey] as number);
  const min = Math.min(...values);
  const max = Math.max(...values);
  const range = max - min;
  const step = range / 2;
  const ticks = [min, min + step, max];

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
