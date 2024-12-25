import { AnalyticsContentProps } from "../../common/types";
import { GeneralContent, MomentumContent, RewardContent, RiskContent } from "../ui/components";

export const ANALYZE_DATA_TAB_CONTENTS: AnalyticsContentProps[] = [
  { key: "General", component: GeneralContent },
  { key: "Risk", component: RiskContent },
  { key: "Reward", component: RewardContent },
  { key: "Momentum", component: MomentumContent },
];
export const ANALYZE_DATA_TABS: string[] = ["General", "Risk", "Reward", "Momentum"];

export const FOOTER_TITLE = "Sui Staking Over the Past 7 Days";
export const FOOTER_DESCRIPTION =
  "As of today, there are 269824 stakers actively staking on the network. An additional 269824.00 SUI stakers became active over the past 7 days, representing a 269824.00% increase over this time period. The Staking Ratio, or percentage of SUI being staked, is currently 78.33% of the total eligible circulating supply, increasing by -0.02% over the past 7 days. In total, 8b SUI is staked across the network, generating $1b worth of staking rewards per year.";
