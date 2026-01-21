import { Card } from '@/components/ui/card'
import { cn } from '@/lib/utils'

/**
 * SectionCard - Wrapper for showcase sections
 * Replaces repeated: className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700"
 */
export function SectionCard({ className, children, ...props }) {
  return (
    <Card
      className={cn("p-8 bg-background border-border", className)}
      {...props}
    >
      {children}
    </Card>
  )
}

/**
 * SectionTitle - Consistent section headers
 * Replaces repeated: className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6"
 */
export function SectionTitle({ className, children, ...props }) {
  return (
    <h4
      className={cn(
        "text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6",
        className
      )}
      {...props}
    >
      {children}
    </h4>
  )
}

/**
 * ShowcaseHeader - Page header for showcases
 * Replaces repeated heading patterns
 */
export function ShowcaseHeader({ title, description }) {
  return (
    <div className="mb-8">
      <h3 className="text-3xl font-black mb-2 text-foreground">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  )
}

/**
 * DescriptionText - Consistent description text styling
 */
export function DescriptionText({ className, children, ...props }) {
  return (
    <p
      className={cn("text-sm text-muted-foreground", className)}
      {...props}
    >
      {children}
    </p>
  )
}

export default SectionCard
