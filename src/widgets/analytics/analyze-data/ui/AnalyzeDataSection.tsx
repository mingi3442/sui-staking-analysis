"use client";

import { SuiLogo } from "@/shared/ui/icons";
import { useState } from "react";
import { AnalyticsContentContainer, AnalyticsContentHeader } from "../../common";
import {
  ANALYZE_DATA_HEADER_DESCRIPTION,
  ANALYZE_DATA_HEADER_TITLE,
  ANALYZE_DATA_TAB_CONTENTS,
  ANALYZE_DATA_TABS,
  ANALYZE_FOOTER_DESCRIPTION,
  ANALYZE_FOOTER_TITLE,
} from "../constants";

export const AnalyzeDataSection = () => {
  const [activeTab, setActiveTab] = useState(ANALYZE_DATA_TABS[0]);

  return (
    <div className="w-full py-4">
      <AnalyticsContentHeader title={ANALYZE_DATA_HEADER_TITLE} description={ANALYZE_DATA_HEADER_DESCRIPTION} clipboardUrl={window.location.href}>
        <div className="py-2 flex gap-x-2 items-center">
          <SuiLogo color="DEEP_OCEAN" className="w-4 h-4 dark:hidden" />
          <div className="hidden dark:flex items-center justify-center rounded-full bg-white ">
            <SuiLogo color="DEEP_OCEAN" className="w-4 h-4" />
          </div>
          <span className="text-xs font-bold text-zinc-500 dark:text-zinc-400">Sui</span>
        </div>
      </AnalyticsContentHeader>
      <AnalyticsContentContainer
        tabs={ANALYZE_DATA_TABS}
        activeTab={activeTab}
        onTabChange={setActiveTab}
        footerTitle={ANALYZE_FOOTER_TITLE}
        footerDescription={ANALYZE_FOOTER_DESCRIPTION}
        contents={ANALYZE_DATA_TAB_CONTENTS}
      />
    </div>
  );
};
