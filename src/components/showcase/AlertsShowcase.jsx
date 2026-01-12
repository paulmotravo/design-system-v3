import { Alert, AlertTitle, AlertDescription } from '@/components/ui/alert'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, Copy, CheckCircle, Eye, Code2 } from 'lucide-react'
import { useState } from 'react'

// Code Preview Component with Copy Button
function CodePreview({ code, children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="inline-flex w-auto">
        <TabsTrigger value="preview">
          <Eye className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger value="code">
          <Code2 className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="preview" className="mt-4">
        {children}
      </TabsContent>
      
      <TabsContent value="code" className="mt-4">
        <div className="relative">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-100 dark:text-gray-200">
              <code>{code}</code>
            </pre>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

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

        {/* Success Alert */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Success Alert
          </h4>
          
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
        </Card>

        {/* Error Alert */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Error Alert
          </h4>
          
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
        </Card>

        {/* Warning Alert */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Warning Alert
          </h4>
          
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
        </Card>

        {/* Info Alert */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Info Alert
          </h4>
          
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
        </Card>

        {/* Dismissible Alert */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Dismissible Alert
          </h4>
          
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