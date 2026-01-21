import { cva } from "class-variance-authority"
import { cn } from "@/lib/utils"

const cardVariants = cva(
  "text-card-foreground rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        // Default - Clean card
        default: "bg-card border border-border shadow-xs hover:shadow-md hover:border-border/80",

        // Elevated - More prominent, stronger shadow
        elevated: "bg-card shadow-md hover:shadow-lg border border-border/50",

        // Flat - Subtle background, minimal shadow
        flat: "bg-muted/50 border border-border/50 hover:bg-muted hover:border-border",

        // Outline - Emphasized border with brand color
        outline: "bg-card border-2 border-primary hover:shadow-md hover:border-primary/80",

        // === SOFT VARIANTS (Soft backgrounds for content organization) ===

        // Soft Primary - Primary brand color, for main features
        "soft-primary": "bg-primary/5 border border-primary/10 hover:bg-primary/10 hover:border-primary/20 hover:shadow-xs",

        // Soft Secondary - Secondary brand color, for alternative features
        "soft-secondary": "bg-secondary/5 border border-secondary/10 hover:bg-secondary/10 hover:border-secondary/20 hover:shadow-xs",

        // Soft Success - Positive metrics
        "soft-success": "bg-success/5 border border-success/10 hover:bg-success/10 hover:border-success/20 hover:shadow-xs",

        // Soft Info - Informational content
        "soft-info": "bg-info/5 border border-info/10 hover:bg-info/10 hover:border-info/20 hover:shadow-xs",

        // Soft Warning - Warning content
        "soft-warning": "bg-warning/5 border border-warning/10 hover:bg-warning/10 hover:border-warning/20 hover:shadow-xs",

        // Soft Destructive - Error content
        "soft-destructive": "bg-destructive/5 border border-destructive/10 hover:bg-destructive/10 hover:border-destructive/20 hover:shadow-xs",

        // === SPECIAL VARIANTS (Use sparingly!) ===

        // Glass - Premium sections, hero areas (backdrop blur effect)
        glass: "bg-background/70 backdrop-blur-2xl border border-background/30 shadow-lg hover:shadow-xl hover:bg-background/80 transition-all duration-300",

        // Gradient - Bold statement sections, hero CTAs
        gradient: "bg-linear-to-br from-primary via-primary/90 to-pink-500 text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300",

        // Gradient Vibrant - Premium feature teasers, upgrade CTAs
        "gradient-vibrant": "bg-linear-to-r from-primary via-pink-500 to-secondary text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
)

function Card({ className, variant, ...props }) {
  return (
    <div
      className={cn(cardVariants({ variant }), className)}
      {...props}
    />
  )
}

function CardHeader({ className, ...props }) {
  return (
    <div
      className={cn("flex flex-col space-y-2 p-8", className)}
      {...props}
    />
  )
}

function CardTitle({ className, ...props }) {
  return (
    <div
      className={cn("text-2xl font-bold tracking-tight text-foreground", className)}
      {...props}
    />
  )
}

function CardDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  )
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-8 pt-0", className)} {...props} />
}

function CardFooter({ className, ...props }) {
  return (
    <div
      className={cn("flex items-center p-8 pt-0", className)}
      {...props}
    />
  )
}

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
