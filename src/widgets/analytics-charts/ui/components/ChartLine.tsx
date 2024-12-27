import React from "react";
import { Line, LineProps } from "recharts";

interface ChartLineProps extends LineProps {
  option: ChartFilterOptionProps;
}

export const ChartLine: React.FC<ChartLineProps> = ({ option }) => {
  return (
    <Line
      key={option.id}
      type="linear"
      dataKey={option.dataKey}
      stroke={option.color}
      yAxisId={option.id}
      dot={false}
      strokeWidth={2}
      name={option.label}
      animationDuration={300}
      animationBegin={0}
      animationEasing="ease-in-out"
    />
  );
};
