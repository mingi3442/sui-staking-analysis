import { create } from "zustand";
import { persist } from "zustand/middleware";

// * 사이드 네비게이션 상태 관리 인터페이스
interface SideNavigationStateProps {
  // * 사이드 네비게이션 확장 여부
  isExpanded: boolean;
  toggleSideNavigation: () => void;
  setSideNavigation: (expanded: boolean) => void;
}

// * Zustand를 상태 관리 스토어 생성
export const useSideNavigationStore = create<SideNavigationStateProps>()(
  // * persist를 통해 상태를 localStorage에 저장
  persist(
    (set) => ({
      // * 기본 초기 상태
      isExpanded: false,
      // * 사이드 네비게이션 확장 여부를 바꾸는 메서드
      toggleSideNavigation: () => set((state) => ({ isExpanded: !state.isExpanded })),
      // * 사이드바 상태를 명시적으로 설정하는 메서드
      setSideNavigation: (expanded) => set({ isExpanded: expanded }),
    }),
    {
      // * localStorage에 저장될 때 사용할 키 이름
      name: "side-navigation-storage",
    }
  )
);
