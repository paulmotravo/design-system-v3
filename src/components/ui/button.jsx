import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva } from "class-variance-authority"
import { Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-viralspoon-purple dark:focus-visible:ring-viralspoon-purple-400 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Main CTA (Create, Upload, Save)
        primary: "bg-viralspoon-purple !text-white hover:bg-viralspoon-purple-600 shadow-md hover:shadow-lg transition-shadow dark:bg-purple-600 dark:hover:bg-purple-500",
        
        // Secondary - Alternative CTA
        secondary: "bg-viralspoon-coral !text-white hover:bg-viralspoon-coral-600 shadow-md hover:shadow-lg transition-shadow dark:bg-orange-600 dark:hover:bg-orange-500",
        
        // Secondary Inverse - White button on dark backgrounds
        "secondary-inverse": "bg-white text-viralspoon-purple hover:bg-gray-50 shadow-lg shadow-black/10 hover:shadow-xl transition-shadow font-bold dark:bg-gray-700 dark:text-white dark:hover:bg-gray-600",
        
        // Gradient - Premium/Special Actions Only (Tailwind Standard Classes)
        gradient: "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 !text-white shadow-lg shadow-purple-500/20 hover:shadow-xl hover:shadow-pink-500/30 hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02] transition-all duration-200 dark:from-purple-500 dark:via-pink-600 dark:to-orange-500 dark:shadow-purple-500",
        
        // Outline - Secondary Actions (Cancel, Back)
        outline: "border-2 border-gray-200 bg-white hover:bg-gray-50 hover:border-gray-300 text-gray-900 transition-colors dark:border-gray-600 dark:bg-gray-800 dark:hover:bg-gray-700 dark:hover:border-gray-500 dark:text-gray-100",
        
        // Outline Inverse - For dark/gradient backgrounds
        "outline-inverse": "border-2 border-white/30 bg-transparent hover:bg-white/10 hover:border-white/50 text-white backdrop-blur-sm transition-colors dark:border-gray-500 dark:hover:bg-gray-700/50 dark:hover:border-gray-400",
        
        // Ghost - Subtle Actions (Navigation, Menus)
        ghost: "hover:bg-gray-100 text-gray-700 transition-colors dark:hover:bg-gray-700 dark:text-gray-300 dark:hover:text-gray-100",
        
        // Destructive - Danger Actions (Delete, Remove)
        destructive: "bg-red-500 !text-white hover:bg-red-600 shadow-md hover:shadow-lg transition-shadow dark:bg-red-600 dark:hover:bg-red-500",
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