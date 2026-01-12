import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { EmptyState } from '@/components/ui/empty-state'
import { AlertCircle, FileText, Search, Image } from 'lucide-react'
import { useState } from 'react'

export default function UtilitiesShowcase() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Utilities & States</h3>
        <p className="text-gray-600 dark:text-gray-400">Loading states, empty states, skeletons, and utility components</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">States Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Never Leave Users Guessing:</strong> Always show what's happening</p>
                <p>→ <strong>Progressive Loading:</strong> Skeletons for content</p>
                <p>→ <strong>Helpful Empty States:</strong> Guide users on next steps</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Loading Spinners */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Loading Spinners
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <Spinner size="sm" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Small</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <Spinner size="md" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Medium</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-gray-50 dark:bg-gray-800/50 rounded-lg">
              <Spinner size="lg" />
              <span className="text-sm text-gray-600 dark:text-gray-400">Large</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-gray-200 dark:border-gray-700">
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Use spinners for button loading states:
            </p>
            <div className="flex gap-3">
              <Button 
                variant="primary" 
                loading={isLoading}
                onClick={simulateLoading}
              >
                {isLoading ? 'Saving...' : 'Save Changes'}
              </Button>
            </div>
          </div>
        </Card>

        {/* Skeleton Loaders */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Skeleton Loaders
          </h4>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">Card Loading</h5>
              <Card className="p-6">
                <div className="flex items-start gap-4">
                  <Skeleton className="h-12 w-12 rounded-lg" />
                  <div className="flex-1 space-y-2">
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                  </div>
                </div>
              </Card>
            </div>

            <div>
              <h5 className="font-semibold mb-3 text-gray-900 dark:text-white">List Loading</h5>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-white dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
                    <Skeleton className="h-10 w-10 rounded-full" />
                    <div className="flex-1 space-y-2">
                      <Skeleton className="h-3 w-full" />
                      <Skeleton className="h-3 w-2/3" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Card>

        {/* Empty States */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Empty States
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <EmptyState
              icon={<FileText className="w-12 h-12" />}
              title="No posts yet"
              description="Create your first post to get started."
              action={<Button variant="primary">Create Post</Button>}
            />

            <EmptyState
              icon={<Search className="w-12 h-12" />}
              title="No results found"
              description="Try adjusting your search filters."
              action={<Button variant="outline">Clear Filters</Button>}
            />
          </div>
        </Card>

        {/* Code Example */}
        <Card variant="glass" className="p-6">
          <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Usage Example</h5>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { Spinner, Skeleton, EmptyState } from '@/components/ui'

<Spinner size="md" />
<Skeleton className="h-4 w-full" />
<EmptyState 
  icon={<FileText />}
  title="No posts yet"
  action={<Button>Create</Button>}
/>`}</code></pre>
          </div>
        </Card>
      </div>
    </div>
  )
}