import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const alertVariants = cva(
  "relative w-full rounded-lg border p-4 [&>svg~*]:pl-8 [&>svg+div]:translate-y-[-3px] [&>svg]:absolute [&>svg]:left-4 [&>svg]:top-4 [&>svg]:text-current",
  {
    variants: {
      variant: {
        default: "bg-background border-border text-foreground [&>svg]:text-muted-foreground",
        success: "border-success/50 bg-success/10 text-success [&>svg]:text-success",
        error: "border-destructive/50 bg-destructive/10 text-destructive [&>svg]:text-destructive",
        warning: "border-warning/50 bg-warning/10 text-warning [&>svg]:text-warning",
        info: "border-info/50 bg-info/10 text-info [&>svg]:text-info",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Alert({ className, variant, ...props }) {
  return (
    <div
      role="alert"
      className={cn(alertVariants({ variant }), className)}
      {...props}
    />
  )
}

function AlertTitle({ className, ...props }) {
  return (
    <h5
      className={cn("mb-1 font-bold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

function AlertDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm [&_p]:leading-relaxed opacity-90", className)}
      {...props}
    />
  )
}

export { Alert, AlertTitle, AlertDescription }
