import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { Loader2 } from "lucide-react";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2.5 whitespace-nowrap font-semibold transition-all duration-200 focus-visible:outline-hidden focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // Primary - Main CTA (Create, Upload, Save)

        primary:
          "bg-primary-strong text-primary-foreground hover:bg-primary-strong-hover shadow-md hover:shadow-lg transition-shadow",

        // Secondary - Alternative CTA
        secondary:
          "bg-secondary-strong text-secondary-foreground hover:bg-secondary-strong-hover shadow-md hover:shadow-lg transition-shadow",

        // Secondary Inverse - White button on dark backgrounds
        "secondary-inverse":
          "bg-inverse text-inverse-foreground hover:bg-inverse-hover shadow-lg shadow-black/10 hover:shadow-xl transition-shadow font-bold",

        // Gradient - Premium/Special Actions Only
        gradient:
          "relative isolate bg-linear-to-r from-premium-from via-premium-via to-premium-to !text-white shadow-lg shadow-[0_10px_25px_-10px_rgba(var(--premium-shadow-1-rgb),0.35)] before:pointer-events-none before:content-[''] before:absolute before:inset-0 before:rounded-[inherit] before:bg-linear-to-r before:from-premium-from before:via-premium-via before:to-premium-to before:opacity-18 dark:before:opacity-30 before:blur-2xl before:scale-110 before:z-[-1] hover:shadow-[0_18px_45px_-18px_rgba(var(--premium-shadow-2-rgb),0.45)] hover:before:opacity-26 dark:hover:before:opacity-42 hover:-translate-y-0.5 active:translate-y-0 hover:scale-[1.02] transition-all duration-200",

        // Outline - Secondary Actions (Cancel, Back)
        outline:
          "border-2 border-border bg-background hover:bg-muted-hover hover:border-border-strong text-foreground transition-colors",

        // Outline Inverse - For dark/gradient backgrounds
        "outline-inverse":
          "border-2 border-outline-inverse/30 bg-transparent hover:bg-outline-inverse/10 hover:border-outline-inverse-hover/50 text-outline-inverse backdrop-blur-sm transition-colors",

        // Ghost - Subtle Actions (Navigation, Menus)
        ghost:
          "hover:bg-muted text-muted-foreground hover:text-foreground transition-colors",

        // Destructive - Danger Actions (Delete, Remove)
        destructive:
          "bg-destructive-strong text-destructive-foreground hover:bg-destructive-strong-hover shadow-md hover:shadow-lg transition-shadow",
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
  },
);

const Button = React.forwardRef(
  (
    {
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
    },
    ref,
  ) => {
    const Comp = asChild ? Slot : "button";

    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        disabled={disabled || loading}
        {...props}
      >
        {loading && <Loader2 className="animate-spin" />}
        {!loading && leftIcon}
        {loading && loadingText ? loadingText : children}
        {!loading && rightIcon}
      </Comp>
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
