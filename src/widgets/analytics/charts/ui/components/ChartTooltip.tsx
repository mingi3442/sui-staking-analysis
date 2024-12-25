import { format } from "date-fns";

interface ChartTooltipProps {
  active?: boolean;
  payload?: any[];
}

export const ChartTooltip = ({ active, payload }: ChartTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-zinc-200 dark:bg-zinc-800 p-2 rounded border border-zinc-300 dark:border-zinc-700 shadow-sm">
        <p className="text-xs font-bold text-zinc-600 dark:text-zinc-400">{format(new Date(payload[0].payload.fullDate), "MMM dd, yyyy")}</p>
        {payload.map((entry) => (
          <div className="flex items-center gap-x-2">
            <div style={{ backgroundColor: entry.color, width: "8px", height: "8px", borderRadius: "50%" }}></div>
            <p key={entry.name} className="text-xs font-bold text-zinc-500 dark:text-zinc-400">
              {entry.name}:{" "}
              <span className="text-zinc-700 dark:text-zinc-300">
                {entry.name === "Price"
                  ? `$${Number(entry.value).toFixed(3)}`
                  : entry.name === "Staked"
                  ? `${Number(entry.value).toFixed(3)}b`
                  : entry.name === "Reward Rate" || entry.name === "Inflation Rate"
                  ? `${Number(entry.value).toFixed(3)}%`
                  : Number(entry.value).toFixed(3)}
              </span>
            </p>
          </div>
        ))}
      </div>
    );
  }
  return null;
};
