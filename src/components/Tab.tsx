import React, { useState } from "react";
import { TabProps } from "@/interfaces/TabInterface";

const Tab = ({ tabs, defaultActiveTab, className }: TabProps) => {
  const [activeTab, setActiveTab] = useState(
    defaultActiveTab || tabs[0]?.id || ""
  );

  const activeTabContent = tabs.find((tab) => tab.id === activeTab)?.content;

  return (
    <div className={`w-full ${className}`}>
      <div className="flex gap-2 border-b dark:border-white border-black overflow-x-auto">
        {tabs.map((tab) => (
          <div
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`py-0.5 px-1 font-mono text-sm transition-colors whitespace-nowrap flex-shrink-0 ${
              activeTab === tab.id
                ? "text-[#0D0F21] border-b-2 border-link bg-link"
                : "text-link cursor-pointer"
            }`}
          >
            [{tab.label}]
          </div>
        ))}
      </div>

      {activeTabContent && (
        <div className="text-foreground bg-secondary-background border dark:border-white border-black p-4 font-mono text-sm leading-relaxed">
          {activeTabContent}
        </div>
      )}
    </div>
  );
};

export default Tab;
