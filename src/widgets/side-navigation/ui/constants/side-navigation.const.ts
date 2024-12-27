import { Api, Discover, Optimize, Search, Stake, Summit, Swap } from "@/shared/ui/icons";

// * 사이드 네비게이션 바에서 사용하는 아이콘
export const ICONS = {
  Discover,
  Swap,
  Stake,
  Search,
  Optimize,
  Api,
  Summit,
} as const;

// * 사이드 네비게이션 바의 메뉴 리스트
export const SIDE_NAVIGATION_BAR_MENU_ITEMS: {
  icon: keyof typeof ICONS;
  label: string;
  href: string;
}[] = [
  { icon: "Discover", label: "Discover", href: "/" },
  { icon: "Swap", label: "Swap", href: "/swap" },
  { icon: "Stake", label: "Stake", href: "/stake" },
  { icon: "Optimize", label: "Optimize", href: "/optimize" },
  { icon: "Search", label: "Search", href: "/search" },
  { icon: "Api", label: "API", href: "/api" },
  { icon: "Summit", label: "Summit", href: "/summit" },
] as const;
