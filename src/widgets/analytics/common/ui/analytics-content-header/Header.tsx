import { tcm } from "@/shared/utils";
import * as React from "react";
import { ClipBoard } from "./components";

interface AnalyticsContentHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  description: string;
  clipboardUrl: string;
}

export const AnalyticsContentHeader: React.FC<AnalyticsContentHeaderProps> = ({ title, description, clipboardUrl, className, children, ...props }) => {
  return (
    <div className={tcm("w-full flex flex-col gapy-y-2 py-4", className)} {...props}>
      {children}
      <div className="flex gap-x-2 ">
        <p className="text-2xl font-bold text-zinc-700 dark:text-zinc-300">{title}</p>
        <ClipBoard url={clipboardUrl} />
      </div>
      <span className="text-normal text-zinc-500 dark:text-zinc-400">{description}</span>
    </div>
  );
};
