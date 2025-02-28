import React from "react";
import { SidebarTrigger } from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { Navigation } from "@/components/navigation";

import ThemeToggle from "./ThemeToggle/theme-toggle";
import SearchModal from "./search-modal";
import { HeaderUser } from "./header-user";

// Navigasyon öğeleri
const navigationItems = [
  { title: "Home", href: "/" },
  { title: "Products", href: "/" },
  { title: "Users", href: "/" },
  { title: "Settings", href: "/" },
];

export default function Header() {
  return (
    <header className="flex h-14 shrink-0 items-center justify-between gap-2 rounded-t-xl transition-[width,height] ease-linear group-has-[[data-collapsible=icon]]/sidebar-wrapper:h-12 border-white bg-primary-foreground text-primary-background shadow-sm">
      <div className="flex items-center gap-1 px-4">
        <SidebarTrigger className="-ml-1" />
        <Separator orientation="vertical" className="h-4 mr-2" />

        <Navigation items={navigationItems} />
      </div>

      <div className="flex items-center gap-2 px-4 ">
        <ThemeToggle />
        <SearchModal />
        <HeaderUser
          user={{
            name: "Yasin Özcan",
            email: "yasin@example.com",
            avatar: "https://github.com/shadcn.png",
          }}
        />
      </div>
    </header>
  );
}
