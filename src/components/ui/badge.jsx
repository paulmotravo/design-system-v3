import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 focus:ring-offset-background",
  {
    variants: {
      variant: {
        // === SOLID VARIANTS (Strong, for important labels) ===

        // Primary - Primary brand color
        primary: "border-transparent bg-primary text-primary-foreground shadow-xs",

        // Secondary - Secondary brand color
        secondary: "border-transparent bg-secondary text-secondary-foreground shadow-xs",

        // Success - Positive states
        success: "border-transparent bg-success text-success-foreground shadow-xs",

        // Info - Information states
        info: "border-transparent bg-info text-info-foreground shadow-xs",

        // Warning - Warning states
        warning: "border-transparent bg-warning text-warning-foreground shadow-xs",

        // Destructive - Error/danger state
        destructive: "border-transparent bg-destructive text-destructive-foreground shadow-xs",

        // === GRADIENT VARIANT (Special highlight for agency content) ===

        // Gradient - Primary to Secondary gradient for special content
        gradient: "border-transparent bg-linear-to-r from-primary via-pink-500 to-secondary text-primary-foreground shadow-md hover:shadow-lg transition-shadow",

        // === SOFT/PASTEL VARIANTS (Subtle, non-distracting) ===

        // Soft Primary - Primary brand (subtle)
        "soft-primary": "border-primary/20 bg-primary/10 text-primary backdrop-blur-xs",

        // Soft Secondary - Secondary brand (subtle)
        "soft-secondary": "border-secondary/20 bg-secondary/10 text-secondary backdrop-blur-xs",

        // Soft Success - Success (subtle)
        "soft-success": "border-success/20 bg-success/10 text-success backdrop-blur-xs",

        // Soft Info - Info (subtle)
        "soft-info": "border-info/20 bg-info/10 text-info backdrop-blur-xs",

        // Soft Warning - Warning (subtle)
        "soft-warning": "border-warning/20 bg-warning/10 text-warning backdrop-blur-xs",

        // Soft Destructive - Error (subtle)
        "soft-destructive": "border-destructive/20 bg-destructive/10 text-destructive backdrop-blur-xs",

        // === FILTER BADGES (Interactive, clickable) ===

        // Filter Default - Unselected state (neutral)
        filter: "border-border bg-background text-foreground hover:bg-muted hover:border-muted-foreground/30 cursor-pointer transition-all",

        // Filter Soft - Unselected state (light)
        "filter-soft": "border-border bg-muted/50 text-muted-foreground hover:bg-muted hover:border-muted-foreground/30 cursor-pointer transition-all",

        // Filter Selected Primary - Selected state (solid)
        "filter-primary": "border-primary bg-primary text-primary-foreground cursor-pointer shadow-xs hover:bg-primary/90 transition-all",

        // Filter Selected Secondary - Selected state (solid)
        "filter-secondary": "border-secondary bg-secondary text-secondary-foreground cursor-pointer shadow-xs hover:bg-secondary/90 transition-all",

        // Filter Soft Primary Unselected - Light pastel primary
        "filter-soft-primary-unselected": "border-primary/10 bg-primary/5 text-primary/80 hover:bg-primary/10 hover:border-primary/20 cursor-pointer transition-all",

        // Filter Soft Primary Selected - Saturated pastel primary
        "filter-soft-primary": "border-primary/40 bg-primary/20 text-primary cursor-pointer hover:bg-primary/30 hover:border-primary/50 shadow-md transition-all font-semibold",

        // Filter Soft Secondary Unselected - Light pastel secondary
        "filter-soft-secondary-unselected": "border-secondary/10 bg-secondary/5 text-secondary/80 hover:bg-secondary/10 hover:border-secondary/20 cursor-pointer transition-all",

        // Filter Soft Secondary Selected - Saturated pastel secondary
        "filter-soft-secondary": "border-secondary/40 bg-secondary/20 text-secondary cursor-pointer hover:bg-secondary/30 hover:border-secondary/50 shadow-md transition-all font-semibold",

        // === CHARACTER COUNTER VARIANTS ===

        // Counter Safe - Under 90% limit
        "counter-safe": "border-info/20 bg-info/10 text-info backdrop-blur-xs",

        // Counter Warning - 90-99% limit
        "counter-warning": "border-warning/20 bg-warning/10 text-warning backdrop-blur-xs",

        // Counter Over - Over 100% limit
        "counter-over": "border-destructive/20 bg-destructive/10 text-destructive backdrop-blur-xs",

        // === SPECIAL VARIANTS ===

        // Outline - Emphasized border
        outline: "border-border bg-transparent text-foreground hover:bg-muted",

        // Default - Clean and simple
        default: "border-transparent bg-muted text-foreground",

        // Muted - Standard muted variant
        muted: "border-transparent bg-muted text-muted-foreground",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Badge({ className, variant, ...props }) {
  return (
    <div className={cn(badgeVariants({ variant }), className)} {...props} />
  )
}

export { Badge, badgeVariants }
