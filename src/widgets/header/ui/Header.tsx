"use client";
import { tcm } from "@/shared/libs";
import { ArrowRight, Logo } from "@/shared/ui/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HEADER_MENU_ITEMS } from "./constants/header.const";

// * 화면의 상단에 나오는 Header 컴포넌트
export const Header = () => {
  const pathname = usePathname();

  return (
    <div className="sticky z-20 top-0 w-full bg-white dark:bg-zinc-900 h-16">
      <div className="px-4 flex items-center justify-between">
        <div className="flex items-center gap-x-2">
          <Logo className="w-8 h-8 flex-shrink-0 text-blue-700 dark:text-white" />
          <nav className="flex">
            <ol className="inline-flex items-center space-x-2">
              <li className="inline-flex items-center">
                <span className="text-sm font-semibold text-gray-900 dark:text-white">Staking Rewards</span>
              </li>
              <li>
                <div className="flex items-center gap-x-2">
                  <ArrowRight className="w-2 h-2 text-gray-900 dark:text-white" />
                  <span className="text-sm hover:underline hover:text-black cursor-pointer font-medium text-gray-500 dark:text-gray-400">Assets</span>
                </div>
              </li>
              <li>
                <div className="flex items-center gap-x-2">
                  <ArrowRight className="w-2 h-2 text-gray-900 dark:text-gray-400" />
                  <span className="text-sm font-medium text-gray-500 dark:text-gray-400">Sui</span>
                </div>
              </li>
            </ol>
          </nav>
        </div>
        <div className="flex items-center gap-x-4">
          {HEADER_MENU_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={tcm(
                `h-16 px-2 text-sm font-medium flex items-center hover:bg-blue-400/10 `,
                pathname === item.href
                  ? "text-blue-700 border-b-2 border-blue-700 dark:text-sky-500 dark:border-sky-500"
                  : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};
