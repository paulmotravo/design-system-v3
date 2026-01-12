import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-white border-gray-200 text-gray-900 [&>svg]:text-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-100 dark:[&>svg]:text-gray-400",
        success: "border-green-500/50 bg-green-50 text-green-900 [&>svg]:text-green-600 dark:border-green-500/30 dark:bg-green-900/10 dark:text-green-100 dark:[&>svg]:text-green-400",
        error: "border-red-500/50 bg-red-50 text-red-900 [&>svg]:text-red-600 dark:border-red-500/30 dark:bg-red-900/10 dark:text-red-100 dark:[&>svg]:text-red-400",
        warning: "border-amber-500/50 bg-amber-50 text-amber-900 [&>svg]:text-amber-600 dark:border-amber-500/30 dark:bg-amber-900/10 dark:text-amber-100 dark:[&>svg]:text-amber-400",
        info: "border-blue-500/50 bg-blue-50 text-blue-900 [&>svg]:text-blue-600 dark:border-blue-500/30 dark:bg-blue-900/10 dark:text-blue-100 dark:[&>svg]:text-blue-400",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Alert = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    role="alert"
    className={cn(alertVariants({ variant }), className)}
    {...props}
  />
))
Alert.displayName = "Alert"

const AlertTitle = React.forwardRef(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-bold leading-none tracking-tight", className)}
    {...props}
  />
))
AlertTitle.displayName = "AlertTitle"

const AlertDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
    {...props}
  />
))
AlertDescription.displayName = "AlertDescription"

export { Alert, AlertTitle, AlertDescription }