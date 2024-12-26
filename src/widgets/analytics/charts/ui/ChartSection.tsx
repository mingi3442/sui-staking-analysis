"use client";
import * as React from "react";
import { AnalyticsContentContainer, AnalyticsContentHeader } from "../../common";
import { CHART_FOOTER_DESCRIPTION, CHART_FOOTER_TITLE, CHART_HEADER_DESCRIPTION, CHART_HEADER_TITLE, CHART_TAB_CONTENTS, CHART_TABS } from "../constants";

export const ChartSection = () => {
  const [activeTab, setActiveTab] = React.useState(CHART_TABS[0]);
  return (
    <div className="w-full py-4">
      <AnalyticsContentHeader title={CHART_HEADER_TITLE} description={CHART_HEADER_DESCRIPTION} clipboardUrl={window.location.href} />
      <AnalyticsContentContainer
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
