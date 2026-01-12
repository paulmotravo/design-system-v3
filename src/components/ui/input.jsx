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
          "flex h-12 w-full rounded-lg border bg-white px-4 py-3 text-base ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-400 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-viralspoon-purple focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 dark:bg-gray-800 dark:ring-offset-gray-950 dark:placeholder:text-gray-500 dark:focus-visible:ring-purple-500 transition-all duration-200",
          error && "border-red-300 focus-visible:ring-red-500 pr-10 dark:border-red-600",
          success && "border-green-300 focus-visible:ring-green-500 pr-10 dark:border-green-600",
          !error && !success && "border-gray-200 dark:border-gray-700",
          className
        )}
        ref={ref}
        {...props}
      />
      {error && (
        <AlertCircle className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-red-500 dark:text-red-400" />
      )}
      {success && (
        <CheckCircle2 className="absolute right-3 top-1/2 -translate-y-1/2 w-5 h-5 text-green-500 dark:text-green-400" />
      )}
    </div>
  )
})
Input.displayName = "Input"

export { Input }