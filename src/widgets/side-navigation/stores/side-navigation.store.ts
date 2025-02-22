import { makeAutoObservable } from "mobx";

// * 사이드 네비게이션 상태 관리 인터페이스
interface SideNavigationStateProps {
  // * 사이드 네비게이션 확장 여부
  isExpanded: boolean;
  toggleSideNavigation: () => void;
  setSideNavigation: (expanded: boolean) => void;
}

const STORAGE_KEY = "side-navigation-storage";

export class SideNavigationStore implements SideNavigationStateProps {
  // * 사이드 네비게이션 확장 여부
  private _isExpanded: boolean;

  constructor() {
    // * localStorage에서 이전 상태 불러오기
    const stored = localStorage.getItem(STORAGE_KEY);
    this._isExpanded = stored ? JSON.parse(stored).state.isExpanded : false;

    // * MobX observable 설정
    makeAutoObservable(this);
  }

  // * getter
  get isExpanded(): boolean {
    return this._isExpanded;
  }

  // * 사이드 네비게이션 확장 여부를 바꾸는 메서드
  toggleSideNavigation = (): void => {
    this._isExpanded = !this._isExpanded;
    this.persistToStorage();
  };

  // * 사이드바 상태를 명시적으로 설정하는 메서드
  setSideNavigation = (expanded: boolean): void => {
    this._isExpanded = expanded;
    this.persistToStorage();
  };

  // * localStorage에 상태 저장
  private persistToStorage(): void {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({
        state: {
          isExpanded: this._isExpanded,
        },
      })
    );
  }
}

// * 싱글톤 인스턴스 생성
export const sideNavigationStore = new SideNavigationStore();
