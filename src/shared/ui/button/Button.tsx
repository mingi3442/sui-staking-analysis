import { tcm } from "@/shared/libs/tailwind-merge";
import * as React from "react";

interface ButtonBaseProps<Component extends React.ElementType> {
  component?: Component;
}
type ButtonProps<Component extends React.ElementType> = ButtonBaseProps<Component> & React.ComponentPropsWithoutRef<Component>;

export const Button = <Component extends React.ElementType>({ className, component, ...props }: ButtonProps<Component>) => {
  return React.createElement(component ?? "button", {
    className: tcm("w-full font-normal text-base", className),
    ...props,
  });
};
