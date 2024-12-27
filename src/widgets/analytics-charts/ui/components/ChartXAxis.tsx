import { format } from "date-fns";
import React from "react";
import { XAxis } from "recharts";

interface ChartXAxisProps {
  visibleDates: string[];
}

// * 차트의 X축 설정
export const ChartXAxis: React.FC<ChartXAxisProps> = ({ visibleDates }) => {
  return (
    <XAxis
      dataKey="fullDate"
      ticks={visibleDates}
      tickFormatter={(value) => {
        const date = new Date(value);
        return format(date, "MMM dd, yyyy");
      }}
      stroke="#6B7280"
      tickLine={false}
      tick={{
        fill: "#3f3f46",
        fontSize: 12,
        fontWeight: 800,
      }}
      axisLine={{ stroke: "#6B7280" }}
      domain={[(dataMin: number) => dataMin - 24 * 60 * 60 * 1000, (dataMax: number) => dataMax + 24 * 60 * 60 * 1000]}
      padding={{ left: 40, right: 40 }}
      tickMargin={10}
    />
  );
};
