import { Loader2 } from "lucide-react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const spinnerVariants = cva(
  "animate-spin text-primary",
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

function Spinner({ className, size, ...props }) {
  return (
    <Loader2
      className={cn(spinnerVariants({ size }), className)}
      {...props}
    />
  )
}

export { Spinner }
