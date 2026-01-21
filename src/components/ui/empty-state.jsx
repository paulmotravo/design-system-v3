import { cn } from "@/lib/utils"

function EmptyState({
  className,
  icon,
  title,
  description,
  action,
  ...props
}) {
  return (
    <div
      className={cn(
        "flex flex-col items-center justify-center p-8 text-center",
        className
      )}
      {...props}
    >
      {icon && (
        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-muted text-muted-foreground">
          {icon}
        </div>
      )}

      {title && (
        <h3 className="mb-2 text-lg font-bold text-foreground">
          {title}
        </h3>
      )}

      {description && (
        <p className="mb-4 max-w-sm text-sm text-muted-foreground">
          {description}
        </p>
      )}

      {action && <div className="mt-2">{action}</div>}
    </div>
  )
}

export { EmptyState }
