"use client";
import { AnalyticsContainer, AnalyticsHeader } from "@/features/analytics";
import * as React from "react";
import { CHART_FOOTER_CONTENT, CHART_HEADER_CONTENT, CHART_TAB_CONTENTS, CHART_TABS } from "./constants/analytics-charts.const";

export const AnalyticsChartsSection = () => {
  const [activeTab, setActiveTab] = React.useState(CHART_TABS[0]);
  return (
    <div className="w-full py-4">
      <AnalyticsHeader title={CHART_HEADER_CONTENT.title} description={CHART_HEADER_CONTENT.description} clipboardUrl={window.location.href} />
      <AnalyticsContainer
        className="bg-zinc-200 dark:bg-zinc-800 "
        tabs={CHART_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        footerTitle={CHART_FOOTER_CONTENT.title}
        footerDescription={CHART_FOOTER_CONTENT.description}
        contents={CHART_TAB_CONTENTS}
      />
    </div>
  );
};
