import * as React from "react"
import { Loader2 } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin text-viralspoon-purple dark:text-purple-500",
  {
    variants: {
      size: {
        sm: "w-4 h-4",
        md: "w-6 h-6",
        lg: "w-8 h-8",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
)

const Spinner = React.forwardRef(({ className, size, ...props }, ref) => {
  return (
    <Loader2
      ref={ref}
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
})
Spinner.displayName = "Spinner"

export { Spinner }