import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Tooltip } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { AlertCircle, Info, HelpCircle } from 'lucide-react'
import { SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function NavigationShowcase() {
  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Navigation & Feedback"
        description="Tabs, tooltips, and progress indicators"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Navigation Philosophy"
          variant="soft-purple"
        >
          <p>→ <strong>Intuitive:</strong> Clear visual hierarchy and states</p>
          <p>→ <strong>Feedback:</strong> Progress indicators show task completion</p>
          <p>→ <strong>Contextual Help:</strong> Tooltips provide additional information</p>
          <p>→ <strong>Smooth Transitions:</strong> Animated state changes</p>
        </PhilosophyCard>

        {/* Tabs Example */}
        <Card variant="elevated" className="p-8">
          <SectionTitle>Tabs Navigation</SectionTitle>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card variant="soft-blue" className="p-6">
                <h5 className="font-bold mb-2 text-foreground">Overview Tab</h5>
                <p className="text-sm text-muted-foreground">
                  This is the overview tab content. You can put any content here like stats, recent activity, or quick actions.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card variant="soft-green" className="p-6">
                <h5 className="font-bold mb-2 text-foreground">Analytics Tab</h5>
                <p className="text-sm text-muted-foreground">
                  Analytics content goes here. Show charts, metrics, and performance data.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card variant="soft-coral" className="p-6">
                <h5 className="font-bold mb-2 text-foreground">Settings Tab</h5>
                <p className="text-sm text-muted-foreground">
                  Settings and configuration options would be displayed here.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Tooltips Example */}
        <Card variant="elevated" className="p-8">
          <SectionTitle>Tooltips</SectionTitle>

          <div className="flex flex-wrap gap-4">
            <Tooltip content="This is a tooltip on top" side="top">
              <Button variant="outline">
                <Info className="w-4 h-4 mr-2" />
                Hover me (Top)
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip appears on the right" side="right">
              <Button variant="outline">
                <HelpCircle className="w-4 h-4 mr-2" />
                Hover me (Right)
              </Button>
            </Tooltip>

            <Tooltip content="Bottom positioned tooltip" side="bottom">
              <Button variant="outline">
                <Info className="w-4 h-4 mr-2" />
                Hover me (Bottom)
              </Button>
            </Tooltip>

            <Tooltip content="Tooltip on the left side" side="left">
              <Button variant="outline">
                <HelpCircle className="w-4 h-4 mr-2" />
                Hover me (Left)
              </Button>
            </Tooltip>
          </div>
        </Card>

        {/* Progress Bars */}
        <Card variant="elevated" className="p-8">
          <SectionTitle>Progress Bars</SectionTitle>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Default Progress</span>
                <span className="text-sm text-muted-foreground">45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Success Progress</span>
                <span className="text-sm text-muted-foreground">80%</span>
              </div>
              <Progress value={80} variant="success" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Warning Progress</span>
                <span className="text-sm text-muted-foreground">60%</span>
              </div>
              <Progress value={60} variant="warning" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-foreground">Error Progress</span>
                <span className="text-sm text-muted-foreground">25%</span>
              </div>
              <Progress value={25} variant="error" />
            </div>

            <div>
              <div className="mb-2">
                <span className="text-sm font-medium text-foreground">With Label</span>
              </div>
              <Progress value={75} showLabel />
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tabs Usage */}
          <Card variant="glass" className="p-6">
            <h5 className="font-bold mb-4 text-foreground">Tabs Usage</h5>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-zinc-100"><code>{`import { Tabs, TabsList,
         TabsTrigger,
         TabsContent }
from '@/components/ui/tabs'

<Tabs defaultValue="tab1">
  <TabsList>
    <TabsTrigger value="tab1">
      Tab 1
    </TabsTrigger>
    <TabsTrigger value="tab2">
      Tab 2
    </TabsTrigger>
  </TabsList>

  <TabsContent value="tab1">
    Content 1
  </TabsContent>
  <TabsContent value="tab2">
    Content 2
  </TabsContent>
</Tabs>`}</code></pre>
            </div>
          </Card>

          {/* Tooltip Usage */}
          <Card variant="glass" className="p-6">
            <h5 className="font-bold mb-4 text-foreground">Tooltip Usage</h5>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-zinc-100"><code>{`import { Tooltip }
from '@/components/ui/tooltip'

<Tooltip
  content="Tooltip text"
  side="top"
>
  <Button>
    Hover me
  </Button>
</Tooltip>

// side: 'top' | 'bottom'
//       'left' | 'right'`}</code></pre>
            </div>
          </Card>

          {/* Progress Usage */}
          <Card variant="glass" className="p-6">
            <h5 className="font-bold mb-4 text-foreground">Progress Usage</h5>
            <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-zinc-100"><code>{`import { Progress }
from '@/components/ui/progress'

<Progress value={75} />

<Progress
  value={75}
  variant="success"
/>

<Progress
  value={75}
  showLabel
/>

// variants: 'default' |
//           'success' |
//           'warning' |
//           'error'`}</code></pre>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
