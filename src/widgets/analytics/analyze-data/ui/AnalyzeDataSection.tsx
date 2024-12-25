"use client";

import { useState } from "react";
import { AnalyticsContentContainer } from "../../common";
import { ANALYZE_DATA_TAB_CONTENTS, ANALYZE_DATA_TABS, FOOTER_DESCRIPTION, FOOTER_TITLE } from "../constants";

export const AnalyzeDataSection = () => {
  const [activeTab, setActiveTab] = useState(ANALYZE_DATA_TABS[0]);

  return (
    <AnalyticsContentContainer
      tabs={ANALYZE_DATA_TABS}
      activeTab={activeTab}
      onTabChange={setActiveTab}
      footerTitle={FOOTER_TITLE}
      footerDescription={FOOTER_DESCRIPTION}
      contents={ANALYZE_DATA_TAB_CONTENTS}
    ></AnalyticsContentContainer>
  );
};
