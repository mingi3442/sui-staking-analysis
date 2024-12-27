import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

// * clsx 조건부 CSS 클래스 이름 생성 후 tailwind-merge을 통해 클래스 이름 충돌을 방지하기 위한 유틸리시 함수
export const tcm = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
