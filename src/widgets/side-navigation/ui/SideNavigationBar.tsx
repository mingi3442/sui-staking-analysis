"use client";

import { tcm } from "@/shared/libs";

import { Fragment } from "react";
import { SIDE_NAVIGATION_BAR_MENU_ITEMS } from "../constants/side-navigation.const";
import { useSideNavigationStore } from "../model/store";
import { SideBarButton } from "./SideBarButton";
import { ThemeToggle } from "./ThemeToggle";
import { ToggleButton } from "./ToggleButton";

export const SideNavigationBar = () => {
  const { isExpanded, setSideNavigation } = useSideNavigationStore();

  return (
    <section>
      <div className={tcm("h-full transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]", isExpanded ? "w-36" : "w-14")} />
      <aside
        className={tcm(
          "fixed left-0 top-0 h-full py-2",
          "bg-white dark:bg-zinc-900",
          "border-r-2 border-black/10 dark:border-white/10",
          "transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          isExpanded ? "w-36" : "w-14"
        )}
      >
        <nav className="flex flex-col h-full w-full justify-between">
          <ToggleButton isExpanded={isExpanded} onToggle={setSideNavigation} />
          <div>
            <div className="mt-2">
              {SIDE_NAVIGATION_BAR_MENU_ITEMS.slice(0, 5).map((item, index) => {
                return (
                  <Fragment key={item.href}>
                    {index === 4 && <div className="border-t-2 border-black/10 dark:border-white/10 mx-2" />}
                    <SideBarButton key={item.href} path={item.href} iconName={item.icon} label={item.label} isExpanded={isExpanded} />
                  </Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            {SIDE_NAVIGATION_BAR_MENU_ITEMS.slice(5, 7).map((item) => {
              return <SideBarButton key={item.href} path={item.href} iconName={item.icon} label={item.label} isExpanded={isExpanded} />;
            })}
            <ThemeToggle isExpanded={isExpanded} />
          </div>
        </nav>
      </aside>
    </section>
  );
};
