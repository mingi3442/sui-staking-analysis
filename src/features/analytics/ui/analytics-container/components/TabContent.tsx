import React from "react";
import { AnalyticsContainerContentProps } from "../types/analytics-container.types";

interface TabContentProps {
  activeTab: string;
  tabConfigs: AnalyticsContainerContentProps[];
}

// * 컨테이너에 적용된 탭에 따른 컴포넌트 렌더링
export const TabContent: React.FC<TabContentProps> = ({ activeTab, tabConfigs }) => {
  const activeConfig = tabConfigs.find((config) => config.key === activeTab);
  if (!activeConfig) return null;
  else return <activeConfig.component />;
};
