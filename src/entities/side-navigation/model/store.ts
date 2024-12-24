import { create } from "zustand";
import { persist } from "zustand/middleware";

interface SideNavigationState {
  isExpanded: boolean;
  toggleSideNavigation: () => void;
  setSideNavigation: (expanded: boolean) => void;
}

export const useSideNavigationStore = create<SideNavigationState>()(
  persist(
    (set) => ({
      isExpanded: false,
      toggleSideNavigation: () => set((state) => ({ isExpanded: !state.isExpanded })),
      setSideNavigation: (expanded) => set({ isExpanded: expanded }),
    }),
    {
      name: "side-navigation-storage",
    }
  )
);
