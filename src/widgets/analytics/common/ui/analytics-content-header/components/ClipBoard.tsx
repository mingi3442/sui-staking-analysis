"use client";
import { Clip } from "@/shared/ui/icons";
import * as React from "react";

interface ClipBoardProps {
  url: string;
}

export const ClipBoard: React.FC<ClipBoardProps> = ({ url }) => {
  const [copied, setCopied] = React.useState(false);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  return (
    <div className="h-full flex items-start">
      {copied ? (
        <span className="text-xs text-zinc-500 dark:text-zinc-400">Copied</span>
      ) : (
        <Clip className="w-4 h-4 text-zinc-700 dark:text-zinc-300 cursor-pointer" onClick={handleCopyClick} />
      )}
    </div>
  );
};
