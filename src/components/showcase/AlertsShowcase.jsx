import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function AlertsShowcase() {
  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Alerts & Messages"
        description="User feedback messages for success, errors, warnings, and info"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Alert Philosophy"
        >
          <p>→ <strong>Clear Communication:</strong> Color-coded for instant recognition</p>
          <p>→ <strong>Contextual Icons:</strong> Visual indicators for each alert type</p>
          <p>→ <strong>Dismissible:</strong> Optional close button for user control</p>
          <p>→ <strong>Accessibility:</strong> Proper ARIA roles and semantic HTML</p>
        </PhilosophyCard>

        {/* Success Alert */}
        <SectionCard>
          <SectionTitle>Success Alert</SectionTitle>

          <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your post has been scheduled successfully.
  </AlertDescription>
</Alert>`}>
            <Alert variant="success">
              <AlertTitle>Success!</AlertTitle>
              <AlertDescription>
                Your post has been scheduled successfully. It will be published on January 15, 2024 at 10:00 AM.
              </AlertDescription>
            </Alert>
          </CodePreview>
        </SectionCard>

        {/* Error Alert */}
        <SectionCard>
          <SectionTitle>Error Alert</SectionTitle>

          <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Failed to upload image. Please check file size and try again.
  </AlertDescription>
</Alert>`}>
            <Alert variant="error">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>
                Failed to upload image. Please make sure the file size is under 5MB and try again.
              </AlertDescription>
            </Alert>
          </CodePreview>
        </SectionCard>

        {/* Warning Alert */}
        <SectionCard>
          <SectionTitle>Warning Alert</SectionTitle>

          <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="warning">
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    You have reached 90% of your monthly post limit.
  </AlertDescription>
</Alert>`}>
            <Alert variant="warning">
              <AlertTitle>Warning</AlertTitle>
              <AlertDescription>
                You have reached 90% of your monthly post limit. Consider upgrading your plan.
              </AlertDescription>
            </Alert>
          </CodePreview>
        </SectionCard>

        {/* Info Alert */}
        <SectionCard>
          <SectionTitle>Info Alert</SectionTitle>

          <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="info">
  <AlertTitle>Pro Tip</AlertTitle>
  <AlertDescription>
    Posting between 9 AM - 11 AM gets the best engagement.
  </AlertDescription>
</Alert>`}>
            <Alert variant="info">
              <AlertTitle>Pro Tip</AlertTitle>
              <AlertDescription>
                Posting between 9 AM - 11 AM typically gets the best engagement for your audience.
              </AlertDescription>
            </Alert>
          </CodePreview>
        </SectionCard>

        {/* Dismissible Alert */}
        <SectionCard>
          <SectionTitle>Dismissible Alert</SectionTitle>

          <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

<Alert variant="success" dismissible>
  <AlertTitle>Dismissible Alert</AlertTitle>
  <AlertDescription>
    This alert can be closed by clicking the X button.
  </AlertDescription>
</Alert>`}>
            <Alert variant="success" dismissible>
              <AlertTitle>Dismissible Alert</AlertTitle>
              <AlertDescription>
                This alert can be closed by clicking the X button. Great for non-critical messages.
              </AlertDescription>
            </Alert>
          </CodePreview>
        </SectionCard>

        {/* Features Overview */}
        <Card variant="glass" className="p-8">
          <SectionTitle>Alert Variants</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-success/10 rounded-xl p-6 border-2 border-success/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-success rounded-full"></div>
                <span className="font-bold text-foreground">Success</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For successful operations like saves, uploads, or confirmations
              </p>
            </div>

            <div className="bg-destructive/10 rounded-xl p-6 border-2 border-destructive/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-destructive rounded-full"></div>
                <span className="font-bold text-foreground">Error</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For errors, failed operations, or critical issues
              </p>
            </div>

            <div className="bg-warning/10 rounded-xl p-6 border-2 border-warning/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-warning rounded-full"></div>
                <span className="font-bold text-foreground">Warning</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For warnings, limits reached, or things requiring attention
              </p>
            </div>

            <div className="bg-info/10 rounded-xl p-6 border-2 border-info/20">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-info rounded-full"></div>
                <span className="font-bold text-foreground">Info</span>
              </div>
              <p className="text-sm text-muted-foreground">
                For helpful tips, information, or neutral messages
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
