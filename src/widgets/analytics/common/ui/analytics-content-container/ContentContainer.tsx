import { Tab } from "@/shared/ui/tab";
import { tcm } from "@/shared/utils";
import * as React from "react";
import { AnalyticsContentProps } from "../../types";
import { DataSources, Footer, TabContent } from "./components";

interface AnalyticsContentContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  tabs: string[];
  children?: React.ReactNode;
  footerTitle: string;
  footerDescription: string;
  onTabChange: React.Dispatch<React.SetStateAction<string>>;
  activeTab: string;
  contents: AnalyticsContentProps[];
}

export const AnalyticsContentContainer: React.FC<AnalyticsContentContainerProps> = ({
  tabs,
  children,
  footerTitle,
  footerDescription,
  onTabChange,
  activeTab,
  contents,
  className,
}) => {
  return (
    <div className="bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-300 dark:border-zinc-800 rounded-lg overflow-hidden">
      <Tab tabs={tabs} activeTab={activeTab} onTabChange={onTabChange} />

      <div className={tcm("w-full h-full py-2 border-y border-zinc-300 dark:border-zinc-800/60", className)}>
        {children ?? <TabContent activeTab={activeTab} tabConfigs={contents} />}
        <DataSources />
      </div>
      <Footer title={footerTitle} description={footerDescription} />
    </div>
  );
};
