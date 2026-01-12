import * as React from "react"
import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "text-card-foreground rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        // Default - Clean white card
        default: "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-sm hover:shadow-md hover:border-gray-300 dark:hover:border-gray-600",
        
        // Elevated - More prominent, stronger shadow
        elevated: "bg-white dark:bg-gray-800 shadow-md hover:shadow-lg border border-gray-100/50 dark:border-gray-700/50",
        
        // Flat - Subtle gray background, minimal shadow
        flat: "bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700/50 hover:bg-gray-100/50 dark:hover:bg-gray-700/50 hover:border-gray-200 dark:hover:border-gray-600",
        
        // Outline - Emphasized border with brand color
        outline: "bg-white dark:bg-gray-800 border-2 border-viralspoon-purple dark:border-purple-600 hover:shadow-md hover:border-viralspoon-purple-600 dark:hover:border-purple-500",
        
        // === PASTELL VARIANTS (Soft backgrounds for content organization) ===
        
        // Soft Purple - Primary brand color, for main features
        "soft-purple": "bg-purple-50/60 dark:bg-purple-900/20 border border-purple-100/80 dark:border-purple-800/50 hover:bg-purple-50 dark:hover:bg-purple-900/30 hover:border-purple-200 dark:hover:border-purple-700 hover:shadow-sm",
        
        // Soft Coral - Secondary brand color, for alternative features
        "soft-coral": "bg-orange-50/60 dark:bg-orange-900/20 border border-orange-100/80 dark:border-orange-800/50 hover:bg-orange-50 dark:hover:bg-orange-900/30 hover:border-orange-200 dark:hover:border-orange-700 hover:shadow-sm",
        
        // Soft Blue - Neutral, informational content (analytics, stats)
        "soft-blue": "bg-blue-50/60 dark:bg-blue-900/20 border border-blue-100/80 dark:border-blue-800/50 hover:bg-blue-50 dark:hover:bg-blue-900/30 hover:border-blue-200 dark:hover:border-blue-700 hover:shadow-sm",
        
        // Soft Green - Success states, positive metrics
        "soft-green": "bg-emerald-50/60 dark:bg-emerald-900/20 border border-emerald-100/80 dark:border-emerald-800/50 hover:bg-emerald-50 dark:hover:bg-emerald-900/30 hover:border-emerald-200 dark:hover:border-emerald-700 hover:shadow-sm",
        
        // Soft Pink - Alternative accent for variety
        "soft-pink": "bg-pink-50/60 dark:bg-pink-900/20 border border-pink-100/80 dark:border-pink-800/50 hover:bg-pink-50 dark:hover:bg-pink-900/30 hover:border-pink-200 dark:hover:border-pink-700 hover:shadow-sm",
        
        // === SPECIAL VARIANTS (Use sparingly!) ===
        
        // Glass - Premium sections, hero areas (backdrop blur effect)
        glass: "bg-white/70 dark:bg-gray-800/70 backdrop-blur-2xl border border-white/30 dark:border-gray-700/30 shadow-lg hover:shadow-xl hover:bg-white/80 dark:hover:bg-gray-800/80 transition-all duration-300",
        
         // Gradient - Bold statement sections, hero CTAs
         gradient: "bg-gradient-to-br from-purple-600 via-purple-500 to-pink-500 dark:from-purple-700 dark:via-purple-600 dark:to-pink-700 text-white shadow-lg shadow-purple-500/30 dark:shadow-purple-700/40 hover:shadow-xl hover:shadow-purple-500/40 dark:hover:shadow-purple-700/50 hover:-translate-y-0.5 transition-all duration-300",
        
        // Gradient Vibrant - Premium feature teasers, upgrade CTAs 🔥
        "gradient-vibrant": "bg-gradient-to-r from-purple-600 via-pink-500 to-orange-500 dark:from-purple-500 dark:via-pink-400 dark:to-orange-400 text-white shadow-2xl shadow-purple-500/30 dark:shadow-purple-400/30 hover:shadow-pink-500/40 dark:hover:shadow-pink-400/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

const Card = React.forwardRef(({ className, variant, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(cardVariants({ variant }), className)}
    {...props}
  />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col space-y-2 p-8", className)}
    {...props}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-2xl font-bold tracking-tight text-gray-900 dark:text-white", className)}
    {...props}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("text-sm text-gray-600 dark:text-gray-400 leading-relaxed", className)}
    {...props}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef(({ className, ...props }, ref) => (
  <div ref={ref} className={cn("p-8 pt-0", className)} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-8 pt-0", className)}
    {...props}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }