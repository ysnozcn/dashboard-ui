/* eslint-disable @next/next/no-img-element */
"use client";

import * as React from "react";
import { useSidebar } from "@/components/ui/sidebar";
import { cn } from "@/lib/utils";

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
  logoSrc?: string;
  iconSrc?: string;
  brandName?: string;
}

export function BrandLogo({
  logoSrc = "/logo.svg", // Tam logo için varsayılan yol
  iconSrc = "/icon.svg", // İkon için varsayılan yol
  brandName = "Marka Adı", // Varsayılan marka adı
  className,
  ...props
}: BrandLogoProps) {
  const { state } = useSidebar();
  const isExpanded = state === "expanded";

  // logoSrc değişkenini kullanıyoruz
  React.useEffect(() => {
    console.log("Logo source:", logoSrc);
  }, [logoSrc]);

  return (
    <div className={cn("flex items-center justify-center transition-all duration-200 ease-in-out", className)} {...props}>
      {isExpanded ? (
        <div className="w-full flex items-center gap-3">
          <div className="rounded-md bg-primary/10 p-1.5 flex items-center justify-center shadow-sm hover:bg-primary/20 transition-colors">
            <img src={iconSrc} alt={`${brandName} ikonu`} className="h-6 w-6" />
          </div>
          <div className="flex flex-col">
            <span className="font-semibold text-sm text-sidebar-foreground">{brandName}</span>
          </div>
        </div>
      ) : (
        <div className="rounded-md bg-primary/10 p-1.5 flex items-center justify-center shadow-sm hover:bg-primary/20 transition-colors">
          <img src={iconSrc} alt={`${brandName} ikonu`} className="h-6 w-6" />
        </div>
      )}
    </div>
  );
}
