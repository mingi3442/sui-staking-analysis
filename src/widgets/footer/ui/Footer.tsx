import { Logo } from "@/shared/ui/icons";
import { FOOTER_MENU_ITEMS } from "../constants";
import { Enterprise } from "./Enterprise";
import { FooterLink } from "./FooterLink";

export const Footer = () => {
  return (
    <div className="w-full flex items-center justify-between border-t-2 border-black/10 dark:border-white/10 py-4">
      <div className="flex items-center gap-x-4">
        <FooterLink href={"/"}>
          <Logo className="w-8 h-8 flex-shrink-0" />
        </FooterLink>
        {FOOTER_MENU_ITEMS.slice(0, 2).map((link) => (
          <FooterLink key={link.href} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
        <Enterprise />
      </div>
      <div className="flex items-center gap-x-4">
        {FOOTER_MENU_ITEMS.slice(2, -1).map((link) => (
          <FooterLink key={link.href} href={link.href}>
            {link.label}
          </FooterLink>
        ))}
        <p className="text-sm font-medium text-zinc-500 dark:text-zinc-400">2024©StakingRewards.</p>
      </div>
    </div>
  );
};
