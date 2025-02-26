"use client"

import * as React from "react"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    iconSrc?: string
    brandName?: string
    subtitle?: string
}

export function BrandLogo({
    iconSrc = "/icon.svg", // İkon için varsayılan yol
    brandName = "Marka Adı", // Varsayılan marka adı
    subtitle = "Dashboard", // Alt başlık
    className,
    ...props
}: BrandLogoProps) {
    const { state } = useSidebar()
    const isExpanded = state === "expanded"

    return (
        <div
            className={cn(
                "flex items-center justify-center transition-all duration-200 ease-in-out",
                className
            )}
            {...props}
        >
            {isExpanded ? (
                <div className="w-full flex items-center gap-3">
                    <div className="rounded-md bg-primary/10 p-1.5 flex items-center justify-center shadow-sm hover:bg-primary/20 transition-colors">
                        <img
                            src={iconSrc}
                            alt={`${brandName} ikonu`}
                            className="h-6 w-6"
                        />
                    </div>
                    <div className="flex flex-col">
                        <span className="font-semibold text-sm text-sidebar-foreground">
                            {brandName}
                        </span>
                        <span className="text-xs text-sidebar-muted-foreground">
                            {subtitle}
                        </span>
                    </div>
                </div>
            ) : (
                <img
                    src={iconSrc}
                    alt={`${brandName} ikonu`}
                    className="h-8 w-8"
                />
            )}
        </div>
    )
} 