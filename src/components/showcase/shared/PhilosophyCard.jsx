import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

/**
 * PhilosophyCard - Design philosophy explanation card
 * Used at the top of showcases to explain design decisions
 */
export function PhilosophyCard({
  icon,
  title,
  children,
  variant = "soft-primary",
  className,
  ...props
}) {
  return (
    <Card variant={variant} className={cn("p-8", className)} {...props}>
      <div className="flex items-start gap-4">
        {icon && (
          <div className="w-12 h-12 bg-primary rounded-2xl flex items-center justify-center shrink-0">
            {icon}
          </div>
        )}
        <div>
          <h4 className="font-bold text-lg mb-2 text-foreground">{title}</h4>
          <div className="space-y-1 text-sm text-muted-foreground">
            {children}
          </div>
        </div>
      </div>
    </Card>
  )
}

export default PhilosophyCard
