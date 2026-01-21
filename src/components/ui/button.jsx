import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Main CTA (Create, Upload, Save)
        primary: "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md hover:shadow-lg",

        // Secondary - Alternative CTA
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 shadow-md hover:shadow-lg",

        // Secondary Inverse - White button on dark backgrounds
        "secondary-inverse": "bg-background text-primary hover:bg-muted shadow-lg shadow-black/10 hover:shadow-xl font-bold",

        // Gradient - Premium/Special Actions Only
        gradient: "bg-linear-to-r from-primary via-pink-500 to-secondary text-primary-foreground shadow-lg shadow-primary/20 hover:shadow-xl hover:shadow-primary/30 hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02]",

        // Outline - Secondary Actions (Cancel, Back)
        outline: "border-2 border-border bg-background hover:bg-muted hover:border-muted-foreground/30 text-foreground",

        // Outline Inverse - For dark/gradient backgrounds
        "outline-inverse": "border-2 border-white/30 bg-transparent hover:bg-white/10 hover:border-white/50 text-white backdrop-blur-xs",

        // Ghost - Subtle Actions (Navigation, Menus)
        ghost: "hover:bg-muted text-muted-foreground hover:text-foreground",

        // Destructive - Danger Actions (Delete, Remove)
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 shadow-md hover:shadow-lg",
      },
      size: {
        sm: "h-9 px-4 text-sm rounded-md [&_svg]:size-4",
        default: "h-12 px-6 py-3 text-base rounded-lg [&_svg]:size-5",
        lg: "h-14 px-8 text-lg rounded-lg [&_svg]:size-5",
        icon: "h-12 w-12 rounded-lg [&_svg]:size-5",
        "icon-sm": "h-9 w-9 rounded-md [&_svg]:size-4",
        "icon-lg": "h-14 w-14 rounded-lg [&_svg]:size-6",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
)

const Button = React.forwardRef(({
  className,
  variant,
  size,
  asChild = false,
  loading = false,
  loadingText,
  leftIcon,
  rightIcon,
  children,
  disabled,
  ...props
}, ref) => {
  const Comp = asChild ? Slot : "button"

  return (
    <Comp
      className={cn(buttonVariants({ variant, size, className }))}
      ref={ref}
      disabled={disabled || loading}
      {...props}
    >
      {loading && (
        <Loader2 className="animate-spin" />
      )}
      {!loading && leftIcon}
      {loading && loadingText ? loadingText : children}
      {!loading && rightIcon}
    </Comp>
  )
})
Button.displayName = "Button"

export { Button, buttonVariants }
