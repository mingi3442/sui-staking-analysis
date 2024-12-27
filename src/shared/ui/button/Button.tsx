import { tcm } from "@/shared/libs/tailwind-merge";
import * as React from "react";

// * 기본 버튼 Interface로 컴포넌트를 받을 수 있도록 설정
interface ButtonBaseProps<Component extends React.ElementType> {
  component?: Component;
}
// * 기본 저긍로 버튼 속성을 사용하며, props로 받은 컴포넌트의 속성을 지원
type ButtonProps<Component extends React.ElementType> = ButtonBaseProps<Component> & React.ComponentPropsWithoutRef<Component>;

// * 기본 버튼으로, props로 받은 컴포넌트을 렌더링
export const Button = <Component extends React.ElementType>({ className, component, ...props }: ButtonProps<Component>) => {
  return React.createElement(component ?? "button", {
    className: tcm("w-full font-normal text-base", className),
    ...props,
  });
};
