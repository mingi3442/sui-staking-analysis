import * as React from "react";
interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

// * 문자열 배열를 받아서 탭을 만들는 컴포넌트
export const Tab: React.FC<TabProps> = ({ tabs, activeTab, onTabChange }) => {
  return (
    <div className="flex bg-zinc-200/8 dark:bg-zinc-800/8">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-6 text-xs font-bold border-x border-zinc-200 dark:border-zinc-800 
            ${
              activeTab === tab
                ? "text-blue-700 border-b-2 border-blue-700 dark:text-sky-500 dark:border-sky-500 bg-zinc-200 dark:bg-zinc-800"
                : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"
            }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
