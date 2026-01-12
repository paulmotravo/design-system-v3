import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Toast, ToastProvider, ToastViewport, useToast } from '@/components/ui/toast'
import { AlertCircle, CheckCircle2, Info, AlertTriangle, X, Lightbulb, Zap } from 'lucide-react'

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

export default function AlertsShowcase() {
  return (
    <ToastProvider>
      <div className="mb-20">
        <div className="mb-8">
          <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Alerts & Feedback</h3>
          <p className="text-gray-600 dark:text-gray-400">Success, error, warning, and info messages</p>
        </div>

        <div className="space-y-6">
          {/* Philosophy */}
          <Card variant="soft-purple" className="p-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Feedback Philosophy</h4>
                <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                  <p>→ <strong>Clear Communication:</strong> Every action gets feedback</p>
                  <p>→ <strong>Color-Coded:</strong> Visual hierarchy for message types</p>
                  <p>→ <strong>Actionable:</strong> Users know what to do next</p>
                  <p>→ <strong>Non-Intrusive:</strong> Toasts for quick confirmations, alerts for important info</p>
                </div>
              </div>
            </div>
          </Card>

          {/* Standard Alerts */}
          <Card variant="elevated" className="p-8">
            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Alert Variants
            </h4>
            
            <div className="space-y-4">
              <Alert variant="success">
                <CheckCircle2 className="h-5 w-5" />
                <AlertTitle>Success</AlertTitle>
                <AlertDescription>
                  Your post has been published successfully to Instagram and Facebook.
                </AlertDescription>
              </Alert>

              <Alert variant="error">
                <AlertCircle className="h-5 w-5" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Failed to connect to Instagram. Please check your connection and try again.
                </AlertDescription>
              </Alert>

              <Alert variant="warning">
                <AlertTriangle className="h-5 w-5" />
                <AlertTitle>Warning</AlertTitle>
                <AlertDescription>
                  You're approaching your monthly post limit (47/50 posts used).
                </AlertDescription>
              </Alert>

              <Alert variant="info">
                <Info className="h-5 w-5" />
                <AlertTitle>Info</AlertTitle>
                <AlertDescription>
                  New analytics features are now available in your dashboard.
                </AlertDescription>
              </Alert>
            </div>
          </Card>

          {/* Pro Tips & Special Alerts */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card variant="soft-blue" className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Lightbulb className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-gray-900 dark:text-white">Pro Tip</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Schedule your posts during peak engagement hours (9-11 AM and 6-9 PM) for maximum reach.
                  </p>
                </div>
              </div>
            </Card>

            <Card variant="soft-coral" className="p-6">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 bg-viralspoon-coral dark:bg-orange-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h5 className="font-bold mb-2 text-gray-900 dark:text-white">Quick Win</h5>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Add hashtags to increase your post visibility by up to 40%. Try our hashtag generator!
                  </p>
                </div>
              </div>
            </Card>
          </div>

          {/* Toast Examples */}
          <Card variant="elevated" className="p-8">
            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Toast Notifications
            </h4>
            
            <div className="mb-6">
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                Toast notifications appear temporarily at the corner of the screen for quick confirmations.
              </p>
              <ToastDemo />
            </div>

            {/* Preview of Toast Styles */}
            <div className="space-y-3 mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
              <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-3">
                Toast Preview (Static)
              </p>
              
              <div className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-lg p-4 shadow-lg">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 dark:text-green-400 flex-shrink-0 mt-0.5" />
                  <div className="flex-1">
                    <div className="font-semibold text-sm text-gray-900 dark:text-white">Success!</div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">Your post has been scheduled.</div>
                  </div>
                  <button className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200">
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </Card>

          {/* Inline Validation Messages */}
          <Card variant="elevated" className="p-8">
            <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
              Inline Validation
            </h4>
            
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Email Address</label>
                <input 
                  type="email" 
                  value="invalid-email"
                  className="w-full px-4 py-3 rounded-lg border-2 border-red-300 bg-white dark:bg-gray-800 dark:border-red-600 focus:outline-none"
                />
                <p className="text-xs text-red-500 dark:text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3 h-3" />
                  Please enter a valid email address
                </p>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-gray-700 dark:text-gray-200">Password</label>
                <input 
                  type="password" 
                  value="securepass123"
                  className="w-full px-4 py-3 rounded-lg border-2 border-green-300 bg-white dark:bg-gray-800 dark:border-green-600 focus:outline-none"
                />
                <p className="text-xs text-green-600 dark:text-green-400 flex items-center gap-1">
                  <CheckCircle2 className="w-3 h-3" />
                  Strong password
                </p>
              </div>
            </div>
          </Card>

          {/* Code Examples */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <Card variant="glass" className="p-6">
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Alert Usage</h5>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { Alert, AlertTitle, 
         AlertDescription } 
from '@/components/ui/alert'

<Alert variant="success">
  <CheckCircle2 />
  <AlertTitle>Success</AlertTitle>
  <AlertDescription>
    Post published successfully.
  </AlertDescription>
</Alert>

// variants: 'success' | 'error' 
//           'warning' | 'info'`}</code></pre>
              </div>
            </Card>

            <Card variant="glass" className="p-6">
              <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Toast Usage</h5>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
                <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { useToast } 
from '@/components/ui/toast'

const { toast } = useToast()

toast({
  title: "Success!",
  description: "Action completed.",
  variant: "success"
})

// Auto-dismisses after 5s
// Can be manually closed`}</code></pre>
              </div>
            </Card>
          </div>
        </div>
      </div>
      <ToastViewport />
    </ToastProvider>
  )
}