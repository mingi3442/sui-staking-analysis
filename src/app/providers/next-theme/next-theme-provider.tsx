"use client";

import { ThemeProvider as NextThemesProvider, ThemeProviderProps } from "next-themes";
import { useEffect, useState } from "react";

export const NextThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // * 서버 사이드 렌더링과 클라이언트 사이드 렌더링의 불일치 방지를 위한 상태 관리
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }
  // * attribute="class" : 테마 변경시 <html> className를 적용
  // * defaultTheme="system" : 기본 테마는 시스템 설정을 사용
  return (
    <NextThemesProvider attribute="class" defaultTheme="system" {...props}>
      {children}
    </NextThemesProvider>
  );
};
