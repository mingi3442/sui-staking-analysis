import { Chart } from "@/entities/chart";
import { format } from "date-fns";
import React from "react";
import { XAxis } from "recharts";

interface ChartXAxisProps {
  dates: Chart["date"][];
}

// * 차트의 X축 설정
export const ChartXAxis: React.FC<ChartXAxisProps> = ({ dates }) => {
  return (
    <XAxis
      dataKey="date"
      type="number"
      ticks={dates}
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
