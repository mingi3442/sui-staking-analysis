"use client";
import { tcm } from "@/shared/libs";
import { observer } from "mobx-react-lite";
import * as React from "react";
import { sideNavigationStore } from "../stores/side-navigation.store";
import { SIDE_NAVIGATION_BAR_MENU_ITEMS } from "./constants/side-navigation.const";
import { SideBarButton } from "./SideBarButton";
import { ThemeToggle } from "./ThemeToggle";
import { ToggleButton } from "./ToggleButton";

export const SideNavigationBar = observer(() => {
  return (
    <section>
      <div className={tcm("h-full transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]", sideNavigationStore.isExpanded ? "w-36" : "w-14")} />
      <aside
        className={tcm(
          "fixed left-0 top-0 h-full py-2",
          "bg-white dark:bg-black",
          "border-r-2 border-black/10 dark:border-white/10",
          "transition-[width] duration-200 ease-[cubic-bezier(0.4,0,0.2,1)]",
          sideNavigationStore.isExpanded ? "w-36" : "w-14"
        )}
      >
        <nav className="flex flex-col h-full w-full justify-between">
          <ToggleButton isExpanded={sideNavigationStore.isExpanded} onToggle={sideNavigationStore.setSideNavigation} />
          <div>
            <div className="mt-2">
              {SIDE_NAVIGATION_BAR_MENU_ITEMS.slice(0, 5).map((item, index) => {
                return (
                  <React.Fragment key={item.href}>
                    {index === 4 && <div className="border-t-2 border-black/10 dark:border-white/10 mx-2" />}
                    <SideBarButton key={item.href} path={item.href} iconName={item.icon} label={item.label} isExpanded={sideNavigationStore.isExpanded} />
                  </React.Fragment>
                );
              })}
            </div>
          </div>
          <div className="flex flex-col items-center">
            {SIDE_NAVIGATION_BAR_MENU_ITEMS.slice(5, 7).map((item) => {
              return <SideBarButton key={item.href} path={item.href} iconName={item.icon} label={item.label} isExpanded={sideNavigationStore.isExpanded} />;
            })}
            <ThemeToggle isExpanded={sideNavigationStore.isExpanded} />
          </div>
        </nav>
      </aside>
    </section>
  );
});
