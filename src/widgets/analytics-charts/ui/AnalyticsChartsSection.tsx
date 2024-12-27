"use client";
import { AnalyticsContainer, AnalyticsHeader } from "@/features/analytics";
import * as React from "react";
import { CHART_FOOTER_DESCRIPTION, CHART_FOOTER_TITLE, CHART_HEADER_DESCRIPTION, CHART_HEADER_TITLE, CHART_TAB_CONTENTS, CHART_TABS } from "./constants/analytics-charts.const";

export const AnalyticsChartsSection = () => {
  const [activeTab, setActiveTab] = React.useState(CHART_TABS[0]);
  return (
    <div className="w-full py-4">
      <AnalyticsHeader title={CHART_HEADER_TITLE} description={CHART_HEADER_DESCRIPTION} clipboardUrl={window.location.href} />
      <AnalyticsContainer
        className="bg-zinc-200 dark:bg-zinc-800 "
        tabs={CHART_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        footerTitle={CHART_FOOTER_TITLE}
        footerDescription={CHART_FOOTER_DESCRIPTION}
        contents={CHART_TAB_CONTENTS}
      />
    </div>
  );
};
