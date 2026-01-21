import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { ToastProvider, ToastViewport, useToast } from '@/components/ui/toast'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, Lightbulb, Zap } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

// Demo component to show toast functionality
function ToastDemo() {
  const { toast } = useToast()

  return (
    <div className="flex flex-wrap gap-3">
      <Button
        variant="primary"
        size="sm"
        onClick={() => toast({
          title: "Success!",
          description: "Your post has been scheduled successfully.",
          variant: "success"
        })}
      >
        Show Success Toast
      </Button>
      <Button
        variant="destructive"
        size="sm"
        onClick={() => toast({
          title: "Error",
          description: "Failed to upload image. Please try again.",
          variant: "error"
        })}
      >
        Show Error Toast
      </Button>
      <Button
        variant="outline"
        size="sm"
        onClick={() => toast({
          title: "Warning",
          description: "Your storage is almost full.",
          variant: "warning"
        })}
      >
        Show Warning Toast
      </Button>
      <Button
        variant="ghost"
        size="sm"
        onClick={() => toast({
          title: "Info",
          description: "New features are now available!",
          variant: "info"
        })}
      >
        Show Info Toast
      </Button>
    </div>
  )
}

export default function AlertsToastsShowcase() {
  return (
    <ToastProvider>
      <div className="mb-20">
        <ShowcaseHeader
          title="Alerts & Feedback"
          description="Success, error, warning, and info messages"
        />

        <div className="space-y-6">
          {/* Philosophy */}
          <PhilosophyCard
            icon={<AlertCircle className="w-6 h-6 text-white" />}
            title="Feedback Philosophy"
            variant="soft-purple"
          >
            <p>→ <strong>Clear Communication:</strong> Every action gets feedback</p>
            <p>→ <strong>Color-Coded:</strong> Visual hierarchy for message types</p>
            <p>→ <strong>Actionable:</strong> Users know what to do next</p>
            <p>→ <strong>Non-Intrusive:</strong> Toasts for quick confirmations, alerts for important info</p>
          </PhilosophyCard>

          {/* Success Alert */}
          <SectionCard>
            <SectionTitle>Success Alert</SectionTitle>

            <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { CheckCircle2 } from 'lucide-react'

<Alert variant="success">
  <CheckCircle2 className="h-5 w-5" />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Your post has been published successfully.
  </AlertDescription>
</Alert>`}>
              <Alert variant="success">
                <CheckCircle2 className="h-5 w-5" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your post has been published successfully to Instagram and Facebook.
                </AlertDescription>
              </Alert>
            </CodePreview>
          </SectionCard>

          {/* Error Alert */}
          <SectionCard>
            <SectionTitle>Error Alert</SectionTitle>

            <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertCircle } from 'lucide-react'

<Alert variant="error">
  <AlertCircle className="h-5 w-5" />
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Failed to connect. Please check your connection.
  </AlertDescription>
</Alert>`}>
              <Alert variant="error">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to connect to Instagram. Please check your connection and try again.
                </AlertDescription>
              </Alert>
            </CodePreview>
          </SectionCard>

          {/* Warning Alert */}
          <SectionCard>
            <SectionTitle>Warning Alert</SectionTitle>

            <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { AlertTriangle } from 'lucide-react'

<Alert variant="warning">
  <AlertTriangle className="h-5 w-5" />
  <AlertTitle>Warning</AlertTitle>
  <AlertDescription>
    You're approaching your monthly post limit.
  </AlertDescription>
</Alert>`}>
              <Alert variant="warning">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  You're approaching your monthly post limit (47/50 posts used).
                </AlertDescription>
              </Alert>
            </CodePreview>
          </SectionCard>

          {/* Info Alert */}
          <SectionCard>
            <SectionTitle>Info Alert</SectionTitle>

            <CodePreview code={`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Info } from 'lucide-react'

<Alert variant="info">
  <Info className="h-5 w-5" />
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>
    New analytics features are now available.
  </AlertDescription>
</Alert>`}>
              <Alert variant="info">
                <Info className="h-5 w-5" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  New analytics features are now available in your dashboard.
                </AlertDescription>
              </Alert>
            </CodePreview>
          </SectionCard>

          {/* Pro Tips & Special Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="soft-blue" className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-info rounded-xl flex items-center justify-center shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-foreground">Pro Tip</h5>
                  <p className="text-sm text-muted-foreground">
                    Schedule your posts during peak engagement hours (9-11 AM and 6-9 PM) for maximum reach.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="soft-coral" className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-secondary rounded-xl flex items-center justify-center shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-foreground">Quick Win</h5>
                  <p className="text-sm text-muted-foreground">
                    Add hashtags to increase your post visibility by up to 40%. Try our hashtag generator!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Toast Examples */}
          <SectionCard>
            <SectionTitle>Toast Notifications</SectionTitle>

            <CodePreview code={`import { useToast } from '@/components/ui/toast'

const { toast } = useToast()

// Success Toast
<Button onClick={() => toast({
  title: "Success!",
  description: "Your post has been scheduled.",
  variant: "success"
})}>
  Show Success Toast
</Button>

// Error Toast
<Button onClick={() => toast({
  title: "Error",
  description: "Failed to upload image.",
  variant: "error"
})}>
  Show Error Toast
</Button>`}>
              <div className="space-y-4">
                <p className="text-sm text-muted-foreground">
                  Toast notifications appear temporarily at the corner of the screen for quick confirmations.
                </p>
                <ToastDemo />
              </div>
            </CodePreview>
          </SectionCard>

          {/* Inline Validation Messages */}
          <SectionCard>
            <SectionTitle>Inline Validation</SectionTitle>

            <CodePreview code={`// Error State
<input
  className="border-2 border-destructive"
/>
<p className="text-xs text-destructive flex items-center gap-1">
  <AlertCircle className="w-3 h-3" />
  Please enter a valid email address
</p>

// Success State
<input
  className="border-2 border-success"
/>
<p className="text-xs text-success flex items-center gap-1">
  <CheckCircle2 className="w-3 h-3" />
  Strong password
</p>`}>
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Email Address</label>
                  <input
                    type="email"
                    defaultValue="invalid-email"
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border-2 border-destructive bg-background focus:outline-hidden"
                  />
                  <p className="text-xs text-destructive flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    Please enter a valid email address
                  </p>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-semibold text-foreground">Password</label>
                  <input
                    type="password"
                    defaultValue="securepass123"
                    readOnly
                    className="w-full px-4 py-3 rounded-lg border-2 border-success bg-background focus:outline-hidden"
                  />
                  <p className="text-xs text-success flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    Strong password
                  </p>
                </div>
              </div>
            </CodePreview>
          </SectionCard>
        </div>
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}
