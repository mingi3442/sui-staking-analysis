import { Tab } from "@/shared/ui/tab";
import * as React from "react";
import { AnalyticsContentProps } from "../../types";
import { Footer, TabContent } from "./components";

interface AnalyticsContentContainerProps {
  tabs: string[];
  children?: React.ReactNode;
  footerTitle: string;
  footerDescription: string;
  onTabChange: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  contents: AnalyticsContentProps[];
}

export const AnalyticsContentContainer = ({ tabs, children, footerTitle, footerDescription, onTabChange, activeTab, contents }: AnalyticsContentContainerProps) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-900 rounded-lg overflow-hidden">
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />

      <div className="w-full h-full border-y border-zinc-300 dark:border-zinc-800">{children ?? <TabContent activeTab={activeTab} tabConfigs={contents} />}</div>
      <Footer title={footerTitle} description={footerDescription} />
    </div>
  );
};
