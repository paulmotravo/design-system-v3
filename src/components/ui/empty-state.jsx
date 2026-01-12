import * as React from "react"
import { cn } from "@/lib/utils"

const EmptyState = React.forwardRef(({ 
  className,
  icon,
  title,
  description,
  action,
  ...props 
}, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gray-100 text-gray-400 dark:bg-gray-800 dark:text-gray-500">
          {icon}
        </div>
      )}
      
      {title && (
        <h3 className="mb-2 text-lg font-bold text-gray-900 dark:text-white">
          {title}
        </h3>
      )}
      
      {description && (
        <p className="mb-4 max-w-sm text-sm text-gray-600 dark:text-gray-400">
          {description}
        </p>
      )}
      
      {action && <div className="mt-2">{action}</div>}
    </div>
  )
})
EmptyState.displayName = "EmptyState"

export { EmptyState }