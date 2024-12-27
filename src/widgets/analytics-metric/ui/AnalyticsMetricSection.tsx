"use client";

import { AnalyticsContainer, AnalyticsHeader } from "@/features/analytics";
import { SuiLogo } from "@/shared/ui/icons";
import { useState } from "react";
import { ANALYZE_DATA_TAB_CONTENTS, ANALYZE_DATA_TABS, ANALYZE_FOOTER_CONTENT, ANALYZE_HEADER_CONTENT } from "./constants/analytics-metric.const";

export const AnalyticsMetricSection = () => {
  const [activeTab, setActiveTab] = useState(ANALYZE_DATA_TABS[0]);

  return (
    <div className="w-full py-4">
      <AnalyticsHeader title={ANALYZE_HEADER_CONTENT.title} description={ANALYZE_HEADER_CONTENT.description} clipboardUrl={window.location.href}>
        <div className="py-2 flex gap-x-2 items-center">
          <SuiLogo color="DEEP_OCEAN" className="w-4 h-4 dark:hidden" />
          <div className="hidden dark:flex items-center justify-center rounded-full bg-white ">
            <SuiLogo color="DEEP_OCEAN" className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">Sui</span>
        </div>
      </AnalyticsHeader>
      <AnalyticsContainer
        tabs={ANALYZE_DATA_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        footerTitle={ANALYZE_FOOTER_CONTENT.title}
        footerDescription={ANALYZE_FOOTER_CONTENT.description}
        contents={ANALYZE_DATA_TAB_CONTENTS}
      />
    </div>
  );
};
