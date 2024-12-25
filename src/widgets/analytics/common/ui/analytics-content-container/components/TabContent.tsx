import React from "react";
import { AnalyticsContentProps } from "../../../types";

interface TabContentProps {
  activeTab: string;
  tabConfigs: AnalyticsContentProps[];
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, tabConfigs }) => {
  const activeConfig = tabConfigs.find((config) => config.key === activeTab);
  if (!activeConfig) return null;
  else return <activeConfig.component />;
};
