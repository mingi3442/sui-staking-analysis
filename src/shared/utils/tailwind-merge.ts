import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export const tcm = (...inputs: ClassValue[]) => twMerge(clsx(inputs));
