import React from "react";
import { AnalyticsContainerContentProps } from "../types/analytics-container.types";

interface TabContentProps {
  activeTab: string;
  tabConfigs: AnalyticsContainerContentProps[];
}

export const TabContent: React.FC<TabContentProps> = ({ activeTab, tabConfigs }) => {
  const activeConfig = tabConfigs.find((config) => config.key === activeTab);
  if (!activeConfig) return null;
  else return <activeConfig.component />;
};
