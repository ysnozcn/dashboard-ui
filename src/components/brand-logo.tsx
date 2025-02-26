"use client"

import * as React from "react"
import { useSidebar } from "@/components/ui/sidebar"
import { cn } from "@/lib/utils"

interface BrandLogoProps extends React.HTMLAttributes<HTMLDivElement> {
    logoSrc?: string
    iconSrc?: string
    brandName?: string
}

export function BrandLogo({
    logoSrc = "/logo.svg", // Tam logo için varsayılan yol
    iconSrc = "/icon.svg", // İkon için varsayılan yol
    brandName = "Marka Adı", // Varsayılan marka adı
    className,
    ...props
}: BrandLogoProps) {
    const { state } = useSidebar()
    const isExpanded = state === "expanded"

    return (
        <div
            className={cn(
                "flex items-center justify-center transition-all duration-300 ease-in-out",
                "border-b border-sidebar-border/50 pb-3 pt-2",
                className
            )}
            {...props}
        >
            {isExpanded ? (
                <div className="flex items-center gap-3">
                    <img
                        src={logoSrc}
                        alt={`${brandName} logo`}
                        className="h-8"
                    />
                </div>
            ) : (
                <div className="rounded-md bg-sidebar-accent/10">
                    <img
                        src={iconSrc}
                        alt={`${brandName} ikonu`}
                        className="h-7 w-7"
                    />
                </div>
            )}
        </div>
    )
} 