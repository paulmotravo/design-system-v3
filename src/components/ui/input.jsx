import * as React from "react"
import { cn } from "@/lib/utils"
import { AlertCircle, CheckCircle2 } from "lucide-react"

const Input = React.forwardRef(({
  className,
  type,
  error,
  success,
  ...props
}, ref) => {
  return (
    <div className="relative w-full">
      <input
        type={type}
        className={cn(
          "flex h-12 w-full rounded-lg border bg-background px-4 py-3 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-200",
          error && "border-destructive focus-visible:ring-destructive pr-10",
          success && "border-success focus-visible:ring-success pr-10",
          !error && !success && "border-input",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-destructive" />
      )}
      {success && (
        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-success" />
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }
