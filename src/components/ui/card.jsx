import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";

const cardVariants = cva(
  "text-card-foreground rounded-xl transition-all duration-200",
  {
    variants: {
      variant: {
        // Default - Clean card
        default:
          "bg-card border border-border shadow-xs hover:shadow-md hover:border-border-strong",

        // Elevated - More prominent, stronger shadow
        elevated:
          "bg-card shadow-md hover:shadow-lg border border-border-subtle",

        // Flat - Subtle background, minimal shadow
        flat: "bg-muted/50 border border-border-subtle hover:bg-muted-hover hover:border-border",

        // Outline - Emphasized border with brand color
        outline:
          "bg-card border-2 border-primary hover:shadow-md hover:border-primary/80",

        // Selectable - state styling via `data-selected` (consumer controls state)
        // Usage: <Card variant="selectable" data-selected={selected} />
        selectable:
          "bg-card border-2 border-border cursor-pointer hover:border-border-strong data-[selected=true]:border-primary data-[selected=true]:bg-soft-purple",

        // === PASTELL VARIANTS (Soft backgrounds for content organization) ===
        // Keep names aligned with the showcase + reference.

        // Soft Purple - Primary brand color, for main features
        "soft-purple":
          "bg-soft-purple border border-soft-purple-border hover:bg-soft-purple-hover hover:border-soft-purple-border-hover hover:shadow-xs",

        // Soft Coral - Secondary brand color, for alternative features
        "soft-coral":
          "bg-soft-coral border border-soft-coral-border hover:bg-soft-coral-hover hover:border-soft-coral-border-hover hover:shadow-xs",

        // Soft Blue - Neutral, informational content (analytics, stats)
        "soft-blue":
          "bg-soft-blue border border-soft-blue-border hover:bg-soft-blue-hover hover:border-soft-blue-border-hover hover:shadow-xs",

        // Soft Green - Success states, positive metrics
        "soft-green":
          "bg-soft-green border border-soft-green-border hover:bg-soft-green-hover hover:border-soft-green-border-hover hover:shadow-xs",

        // Soft Pink - Alternative accent for variety
        "soft-pink":
          "bg-soft-pink border border-soft-pink-border hover:bg-soft-pink-hover hover:border-soft-pink-border-hover hover:shadow-xs",

        // Backwards-compatible aliases (do not introduce new visuals)
        "soft-primary":
          "bg-soft-purple border border-soft-purple-border hover:bg-soft-purple-hover hover:border-soft-purple-border-hover hover:shadow-xs",
        "soft-secondary":
          "bg-soft-coral border border-soft-coral-border hover:bg-soft-coral-hover hover:border-soft-coral-border-hover hover:shadow-xs",
        "soft-info":
          "bg-soft-blue border border-soft-blue-border hover:bg-soft-blue-hover hover:border-soft-blue-border-hover hover:shadow-xs",
        "soft-success":
          "bg-soft-green border border-soft-green-border hover:bg-soft-green-hover hover:border-soft-green-border-hover hover:shadow-xs",
        "soft-warning":
          "bg-soft-coral border border-soft-coral-border hover:bg-soft-coral-hover hover:border-soft-coral-border-hover hover:shadow-xs",
        "soft-destructive":
          "bg-soft-pink border border-soft-pink-border hover:bg-soft-pink-hover hover:border-soft-pink-border-hover hover:shadow-xs",

        // === SPECIAL VARIANTS (Use sparingly!) ===

        // Glass - Premium sections, hero areas (backdrop blur effect)
        glass:
          "bg-background/70 backdrop-blur-2xl border border-border-subtle shadow-lg hover:shadow-xl hover:bg-background/80 transition-all duration-300",

        // Gradient - Bold statement sections, hero CTAs
        // Uses card-specific gradient stops to match the reference (purple -> purple -> pink)
        gradient:
          "bg-linear-to-br from-card-gradient-from via-card-gradient-via to-card-gradient-to text-primary-foreground shadow-lg shadow-primary/30 hover:shadow-xl hover:shadow-primary/40 hover:-translate-y-0.5 transition-all duration-300",

        // Gradient Vibrant - Premium feature teasers, upgrade CTAs
        "gradient-vibrant":
          "bg-linear-to-r from-primary via-pink-500 to-secondary text-primary-foreground shadow-2xl shadow-primary/30 hover:shadow-primary/40 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

function Card({ className, variant, ...props }) {
  return (
    <div className={cn(cardVariants({ variant }), className)} {...props} />
  );
}

function CardHeader({ className, ...props }) {
  return (
    <div className={cn("flex flex-col space-y-2 p-8", className)} {...props} />
  );
}

function CardTitle({ className, ...props }) {
  return (
    <div
      className={cn(
        "text-2xl font-bold tracking-tight text-foreground",
        className,
      )}
      {...props}
    />
  );
}

function CardDescription({ className, ...props }) {
  return (
    <div
      className={cn("text-sm text-muted-foreground leading-relaxed", className)}
      {...props}
    />
  );
}

function CardContent({ className, ...props }) {
  return <div className={cn("p-8 pt-0", className)} {...props} />;
}

function CardFooter({ className, ...props }) {
  return (
    <div className={cn("flex items-center p-8 pt-0", className)} {...props} />
  );
}

export {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardDescription,
  CardContent,
};
