// * Analytics페이지의 공통 컨테이너의 컨텐츠를 위한 타입
export interface AnalyticsContainerContentProps {
  // * 탭의 라벨
  key: string;
  // * 해당 탭의 컨텐츠 컴포넌트
  component: React.ComponentType;
}
