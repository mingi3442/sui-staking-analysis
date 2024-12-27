import { AnalyticsContainerContentProps } from "@/features/analytics";
import { PerformanceChartContent } from "../components";

export const CHART_FOOTER_TITLE = "Sui Staking is trending upwards this month";

export const CHART_FOOTER_DESCRIPTION =
  "Over the past 30 days, there has been a net increase of 15m SUI staked on Sui, worth $67m at the current market rate. During this period, the price of SUI has increased by 33.04%, with one SUI currently priced at $4.55. Today, the inflation rate of the network is 7.53%, which represents a decrease of 0.18% over the same time frame.";

export const CHART_HEADER_TITLE = "SUI Staking Performance Charts";

export const CHART_HEADER_DESCRIPTION = "Track Sui staking over time by analyzing key performance metrics.";

export const CHART_TAB_CONTENTS: AnalyticsContainerContentProps[] = [{ key: "Performance over Time", component: PerformanceChartContent }];
export const CHART_TABS: string[] = ["Performance over Time"];

export const CHART_FILTER_OPTIONS: ChartFilterOptionProps[] = [
  { id: "price", label: "Price", color: "#9333EA", dataKey: "price" },
  { id: "staked", label: "Staked SUI", color: "#38bdf8", dataKey: "staked" },
  { id: "reward", label: "Reward Rate", color: "#1d4ed8", dataKey: "reward", exclusive: true },
  { id: "inflation", label: "Inflation Rate", color: "#15803d", dataKey: "inflation", exclusive: true },
] as const;
