import { AnalyticsContainerContentProps } from "@/features/analytics";
import { PerformanceChartContent } from "../components";
import { ChartFilterOptionProps } from "../types/analytics-charts.types";

// * 차트 컨테이너 하단에 렌더링될 문구
export const CHART_FOOTER_CONTENT = {
  title: "Sui Staking is trending upwards this month",
  description:
    "Over the past 30 days, there has been a net increase of 15m SUI staked on Sui, worth $67m at the current market rate. During this period, the price of SUI has increased by 33.04%, with one SUI currently priced at $4.55. Today, the inflation rate of the network is 7.53%, which represents a decrease of 0.18% over the same time frame.",
} as const;

// * 차트 컨테이너 상단에 렌더링될 문구
export const CHART_HEADER_CONTENT = {
  title: "SUI Staking Performance Charts",
  description: "Track Sui staking over time by analyzing key performance metrics.",
} as const;

// * 차트 컨테이너의 탭에 따른 컴포넌트
export const CHART_TAB_CONTENTS: AnalyticsContainerContentProps[] = [{ key: "Performance over Time", component: PerformanceChartContent }] as const;
// * 차트 컨테이너 탭 리스트
export const CHART_TABS: string[] = ["Performance over Time"] as const;

// * 차트 필터
export const CHART_FILTER_OPTIONS: ChartFilterOptionProps[] = [
  { id: "price", label: "Price", color: "#9333EA", dataKey: "price", exclusive: false },
  { id: "staked", label: "Staked SUI", color: "#38bdf8", dataKey: "staked", exclusive: false },
  { id: "reward", label: "Reward Rate", color: "#1d4ed8", dataKey: "reward", exclusive: true },
  { id: "inflation", label: "Inflation Rate", color: "#15803d", dataKey: "inflation", exclusive: true },
] as const;
