import * as React from "react"

import { cn } from "@/lib/utils"

interface BoxProps extends React.HTMLAttributes<HTMLDivElement> {
  header?: string;
}

const Box = React.forwardRef<
  HTMLDivElement,
  BoxProps
>(({ className, header, children, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "rounded-xl border border-primary/5 bg-card text-card-foreground p-4",
      className
    )}
    {...props}
  >
    {header && (
      <div className="mb-4 pb-2 border-b border-primary/5">
        <h3 className="text-lg font-semibold">{header}</h3>
      </div>
    )}
    {children}
  </div>
))
Box.displayName = "Box"

export { Box } 