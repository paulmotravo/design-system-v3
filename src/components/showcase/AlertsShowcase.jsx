import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'

export default function AlertsShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Alerts & Messages</h3>
        <p className="text-gray-600 dark:text-gray-400">User feedback messages for success, errors, warnings, and info</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Alert Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Clear Communication:</strong> Color-coded for instant recognition</p>
                <p>→ <strong>Contextual Icons:</strong> Visual indicators for each alert type</p>
                <p>→ <strong>Dismissible:</strong> Optional close button for user control</p>
                <p>→ <strong>Accessibility:</strong> Proper ARIA roles and semantic HTML</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Alert Examples */}
        <div className="space-y-4">
          <Alert variant="success">
            <AlertTitle>Success!</AlertTitle>
            <AlertDescription>
              Your post has been scheduled successfully. It will be published on January 15, 2024 at 10:00 AM.
            </AlertDescription>
          </Alert>

          <Alert variant="error">
            <AlertTitle>Error</AlertTitle>
            <AlertDescription>
              Failed to upload image. Please make sure the file size is under 5MB and try again.
            </AlertDescription>
          </Alert>

          <Alert variant="warning">
            <AlertTitle>Warning</AlertTitle>
            <AlertDescription>
              You have reached 90% of your monthly post limit. Consider upgrading your plan.
            </AlertDescription>
          </Alert>

          <Alert variant="info">
            <AlertTitle>Pro Tip</AlertTitle>
            <AlertDescription>
              Posting between 9 AM - 11 AM typically gets the best engagement for your audience.
            </AlertDescription>
          </Alert>

          <Alert variant="success" dismissible>
            <AlertTitle>Dismissible Alert</AlertTitle>
            <AlertDescription>
              This alert can be closed by clicking the X button. Great for non-critical messages.
            </AlertDescription>
          </Alert>
        </div>

        {/* Usage Example */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            How to Use
          </h4>
          
          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 dark:text-gray-200"><code>{`import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'

// Success Alert
<Alert variant="success">
  <AlertTitle>Success!</AlertTitle>
  <AlertDescription>
    Your changes have been saved.
  </AlertDescription>
</Alert>

// Error Alert
<Alert variant="error">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Something went wrong. Please try again.
  </AlertDescription>
</Alert>

// Dismissible Alert
<Alert variant="info" dismissible onDismiss={() => console.log('Dismissed')}>
  <AlertTitle>Info</AlertTitle>
  <AlertDescription>
    This is a dismissible alert.
  </AlertDescription>
</Alert>

// Variants: success | error | warning | info | default`}</code></pre>
          </div>
        </Card>

        {/* Features Overview */}
        <Card variant="glass" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Alert Variants
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">Success</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For successful operations like saves, uploads, or confirmations
              </p>
            </div>

            <div className="bg-red-50 dark:bg-red-900/20 rounded-xl p-6 border-2 border-red-200 dark:border-red-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-red-500 dark:bg-red-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">Error</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For errors, failed operations, or critical issues
              </p>
            </div>

            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">Warning</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For warnings, limits reached, or things requiring attention
              </p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">Info</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                For helpful tips, information, or neutral messages
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}