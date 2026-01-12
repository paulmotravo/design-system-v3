import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-viralspoon-purple dark:focus:ring-purple-500 focus:ring-offset-2",
  {
    variants: {
      variant: {
        // === SOLID VARIANTS (Strong, for important labels) ===
        
        // Purple - Primary brand color
        purple: "border-transparent bg-viralspoon-purple text-white shadow-sm dark:bg-purple-600",
        
        // Coral - Secondary brand color
        coral: "border-transparent bg-viralspoon-coral text-white shadow-sm dark:bg-orange-600",
        
        // Green - Success, positive states
        green: "border-transparent bg-emerald-600 text-white shadow-sm dark:bg-emerald-500",
        
        // Blue - Information states
        blue: "border-transparent bg-blue-600 text-white shadow-sm dark:bg-blue-500",
        
        // Yellow - Warning states
        yellow: "border-transparent bg-yellow-600 text-white shadow-sm dark:bg-yellow-500",
        
        // Red - Error states
        red: "border-transparent bg-red-600 text-white shadow-sm dark:bg-red-500",
        
        // Pink - Alternative accent
        pink: "border-transparent bg-pink-600 text-white shadow-sm dark:bg-pink-500",
        
        // === GRADIENT VARIANT (Special highlight for agency content) ===
        
        // Gradient - Purple to Pink gradient for special content
        gradient: "border-transparent bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white shadow-md hover:shadow-lg transition-shadow dark:from-purple-400 dark:via-pink-400 dark:to-orange-300",
        
        // === SOFT/PASTELL VARIANTS (Subtle, non-distracting) ===
        
        // Soft Purple - Primary brand (subtle) - Enhanced for image overlays
        "soft-purple": "border-purple-200 dark:border-purple-700/50 bg-purple-50/95 dark:bg-purple-900/80 text-purple-700 dark:text-purple-200 backdrop-blur-sm",
        
        // Soft Coral - Secondary brand (subtle) - Enhanced for image overlays
        "soft-coral": "border-orange-200 dark:border-orange-700/50 bg-orange-50/95 dark:bg-orange-900/80 text-orange-700 dark:text-orange-200 backdrop-blur-sm",
        
        // Soft Blue - Neutral (subtle) - Enhanced for image overlays
        "soft-blue": "border-blue-200 dark:border-blue-700/50 bg-blue-50/95 dark:bg-blue-900/80 text-blue-700 dark:text-blue-200 backdrop-blur-sm",
        
        // Soft Green - Success (subtle) - Enhanced for image overlays
        "soft-green": "border-emerald-200 dark:border-emerald-700/50 bg-emerald-50/95 dark:bg-emerald-900/80 text-emerald-700 dark:text-emerald-200 backdrop-blur-sm",
        
        // Soft Pink - Alternative (subtle) - Enhanced for image overlays
        "soft-pink": "border-pink-200 dark:border-pink-700/50 bg-pink-50/95 dark:bg-pink-900/80 text-pink-700 dark:text-pink-200 backdrop-blur-sm",
        
        // Soft Yellow - Warning (subtle) - Enhanced for image overlays
        "soft-yellow": "border-yellow-200 dark:border-yellow-700/50 bg-yellow-50/95 dark:bg-yellow-900/80 text-yellow-700 dark:text-yellow-200 backdrop-blur-sm",
        
        // Soft Red - Error (subtle) - Enhanced for image overlays
        "soft-red": "border-red-200 dark:border-red-700/50 bg-red-50/95 dark:bg-red-900/80 text-red-700 dark:text-red-200 backdrop-blur-sm",
        
        // === FILTER BADGES (Interactive, clickable) ===
        
        // Filter Default - Unselected state (neutral white)
        filter: "border-gray-200 dark:border-gray-600 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer transition-all",
        
        // Filter Soft - Unselected state (light pastell) 
        "filter-soft": "border-gray-200 dark:border-gray-600 bg-gray-50 dark:bg-gray-800/50 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 hover:border-gray-300 dark:hover:border-gray-500 cursor-pointer transition-all",
        
        // Filter Selected Purple - Selected state (solid, strong)
        "filter-purple": "border-viralspoon-purple dark:border-purple-600 bg-viralspoon-purple dark:bg-purple-600 text-white cursor-pointer shadow-sm hover:bg-viralspoon-purple-600 dark:hover:bg-purple-500 transition-all",
        
        // Filter Selected Coral - Selected state (solid, strong)
        "filter-coral": "border-viralspoon-coral dark:border-orange-600 bg-viralspoon-coral dark:bg-orange-600 text-white cursor-pointer shadow-sm hover:bg-viralspoon-coral-600 dark:hover:bg-orange-500 transition-all",
        
        // Filter Soft Purple Unselected - Light pastell purple
        "filter-soft-purple-unselected": "border-purple-100 dark:border-purple-800/50 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 hover:bg-purple-100 dark:hover:bg-purple-900/30 hover:border-purple-200 dark:hover:border-purple-700 cursor-pointer transition-all",
        
        // Filter Soft Purple Selected - Much darker/saturated pastell purple
        "filter-soft-purple": "border-purple-400 dark:border-purple-600 bg-purple-200 dark:bg-purple-800 text-purple-800 dark:text-purple-200 cursor-pointer hover:bg-purple-300 dark:hover:bg-purple-700 hover:border-purple-500 dark:hover:border-purple-500 shadow-md transition-all font-semibold",
        
        // Filter Soft Coral Unselected - Light pastell coral
        "filter-soft-coral-unselected": "border-orange-100 dark:border-orange-800/50 bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 hover:bg-orange-100 dark:hover:bg-orange-900/30 hover:border-orange-200 dark:hover:border-orange-700 cursor-pointer transition-all",
        
        // Filter Soft Coral Selected - Much darker/saturated pastell coral  
        "filter-soft-coral": "border-orange-400 dark:border-orange-600 bg-orange-200 dark:bg-orange-800 text-orange-800 dark:text-orange-200 cursor-pointer hover:bg-orange-300 dark:hover:bg-orange-700 hover:border-orange-500 dark:hover:border-orange-500 shadow-md transition-all font-semibold",
        
        // === CHARACTER COUNTER VARIANTS (Brand-consistent colors) ===
        
        // Counter Safe - Under 90% limit (blue = calm/safe, matches brand)
        "counter-safe": "border-blue-200 dark:border-blue-700/50 bg-blue-50/95 dark:bg-blue-900/80 text-blue-700 dark:text-blue-200 backdrop-blur-sm",
        
        // Counter Warning - 90-99% limit (pink = attention, matches brand accent)
        "counter-warning": "border-pink-200 dark:border-pink-700/50 bg-pink-50/95 dark:bg-pink-900/80 text-pink-700 dark:text-pink-200 backdrop-blur-sm",
        
        // Counter Over - Over 100% limit (coral = urgent, matches brand secondary)
        "counter-over": "border-orange-200 dark:border-orange-700/50 bg-orange-50/95 dark:bg-orange-900/80 text-orange-700 dark:text-orange-200 backdrop-blur-sm",
        
        // === SPECIAL VARIANTS ===
        
        // Outline - Emphasized border
        outline: "border-gray-300 dark:border-gray-600 bg-transparent text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-gray-800",
        
        // Default - Clean and simple
        default: "border-transparent bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100",
        
        // Secondary - Standard shadcn variant
        secondary: "border-transparent bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100",
        
        // Destructive - Error/danger state
        destructive: "border-transparent bg-red-500 text-white shadow-sm dark:bg-red-600",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Badge = React.forwardRef(({ className, variant, ...props }, ref) => {
  return (
    <div ref={ref} className={cn(badgeVariants({ variant }), className)} {...props} />
  )
})
Badge.displayName = "Badge"

export { Badge, badgeVariants }