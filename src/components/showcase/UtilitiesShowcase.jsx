import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Skeleton } from '@/components/ui/skeleton'
import { Spinner } from '@/components/ui/spinner'
import { EmptyState } from '@/components/ui/empty-state'
import { AlertCircle, FileText, Search } from 'lucide-react'
import { useState } from 'react'
import { SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function UtilitiesShowcase() {
  const [isLoading, setIsLoading] = useState(false)

  const simulateLoading = () => {
    setIsLoading(true)
    setTimeout(() => setIsLoading(false), 3000)
  }

  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Utilities & States"
        description="Loading states, empty states, skeletons, and utility components"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="States Philosophy"
          variant="soft-purple"
        >
          <p>→ <strong>Never Leave Users Guessing:</strong> Always show what's happening</p>
          <p>→ <strong>Progressive Loading:</strong> Skeletons for content</p>
          <p>→ <strong>Helpful Empty States:</strong> Guide users on next steps</p>
        </PhilosophyCard>

        {/* Loading Spinners */}
        <Card variant="elevated" className="p-8">
          <SectionTitle>Loading Spinners</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Spinner size="sm" />
              <span className="text-sm text-muted-foreground">Small</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Spinner size="md" />
              <span className="text-sm text-muted-foreground">Medium</span>
            </div>

            <div className="flex flex-col items-center gap-3 p-6 bg-muted rounded-lg">
              <Spinner size="lg" />
              <span className="text-sm text-muted-foreground">Large</span>
            </div>
          </div>

          <div className="mt-6 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground mb-4">
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
          <SectionTitle>Skeleton Loaders</SectionTitle>

          <div className="space-y-6">
            <div>
              <h5 className="font-semibold mb-3 text-foreground">Card Loading</h5>
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
              <h5 className="font-semibold mb-3 text-foreground">List Loading</h5>
              <div className="space-y-3">
                {[1, 2, 3].map((i) => (
                  <div key={i} className="flex items-center gap-3 p-4 bg-background rounded-lg border border-border">
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
          <SectionTitle>Empty States</SectionTitle>

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
          <h5 className="font-bold mb-4 text-foreground">Usage Example</h5>
          <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-100"><code>{`import { Spinner, Skeleton, EmptyState } from '@/components/ui'

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
