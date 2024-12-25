"use client";

interface TabProps {
  tabs: string[];
  activeTab: string;
  onTabChange: (id: string) => void;
}

export const Tab = ({ tabs, activeTab, onTabChange }: TabProps) => {
  return (
    <div className="flex">
      {tabs.map((tab) => (
        <button
          key={tab}
          onClick={() => onTabChange(tab)}
          className={`px-8 py-6 text-xs font-bold border-x border-zinc-200 dark:border-zinc-800 
            ${activeTab === tab ? "text-blue-600 bg-zinc-200 dark:bg-zinc-800" : "text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-zinc-100"}`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
};
