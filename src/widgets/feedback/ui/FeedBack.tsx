"use client";

import { tcm } from "@/shared/libs";
import { Discord, Open } from "@/shared/ui/icons";
import * as React from "react";

export const FeedBack = () => {
  const [isHovered, setIsHovered] = React.useState<boolean>(false);

  return (
    <div className="fixed right-0 top-1/3 -translate-y-1/2 z-50" onMouseEnter={() => setIsHovered(true)} onMouseLeave={() => setIsHovered(false)}>
      <div
        className={tcm(
          `absolute right-0 rounded-l-lg bg-zinc-700 dark:bg-white shadow-lg overflow-hidden transition-all duration-300 ease-in-out h-24`,
          isHovered ? "w-64" : "w-8"
        )}
      >
        <div className="flex h-full">
          <div className="w-8 shrink-0 flex items-center justify-center bg-gray-950 dark:bg-gray-100">
            <span className="[writing-mode:vertical-rl] rotate-180 text-white dark:text-gray-950 text-sm font-medium">Feedback</span>
          </div>
          <div className="relative flex-1 overflow-hidden cursor-pointer">
            <div className="absolute inset-0 p-2 flex flex-col min-w-56">
              <div className="flex-1 flex flex-col justify-center">
                <p className="text-gray-200 dark:text-gray-400 text-sm font-medium">Got feedback? Roast us!</p>
                <div className="flex items-center gap-x-2 mt-2 text-gray-300 dark:text-gray-500 text-sm font-medium">
                  Let us know on Discord
                  <Discord className="w-4 h-4 text-gray-200 dark:text-gray-600" />
                </div>
                <Open className="absolute bottom-2 right-2 w-4 h-4 text-gray-200 dark:text-gray-600" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
