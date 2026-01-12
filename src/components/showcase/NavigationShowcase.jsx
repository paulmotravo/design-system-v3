import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs'
import { Tooltip } from '@/components/ui/tooltip'
import { Progress } from '@/components/ui/progress'
import { AlertCircle, Info, HelpCircle } from 'lucide-react'

export default function NavigationShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Navigation & Feedback</h3>
        <p className="text-gray-600 dark:text-gray-400">Tabs, tooltips, and progress indicators</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Navigation Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Intuitive:</strong> Clear visual hierarchy and states</p>
                <p>→ <strong>Feedback:</strong> Progress indicators show task completion</p>
                <p>→ <strong>Contextual Help:</strong> Tooltips provide additional information</p>
                <p>→ <strong>Smooth Transitions:</strong> Animated state changes</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Tabs Example */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Tabs Navigation
          </h4>

          <Tabs defaultValue="overview">
            <TabsList>
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="analytics">Analytics</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview">
              <Card variant="soft-blue" className="p-6">
                <h5 className="font-bold mb-2 text-gray-900 dark:text-white">Overview Tab</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  This is the overview tab content. You can put any content here like stats, recent activity, or quick actions.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="analytics">
              <Card variant="soft-green" className="p-6">
                <h5 className="font-bold mb-2 text-gray-900 dark:text-white">Analytics Tab</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Analytics content goes here. Show charts, metrics, and performance data.
                </p>
              </Card>
            </TabsContent>

            <TabsContent value="settings">
              <Card variant="soft-coral" className="p-6">
                <h5 className="font-bold mb-2 text-gray-900 dark:text-white">Settings Tab</h5>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Settings and configuration options would be displayed here.
                </p>
              </Card>
            </TabsContent>
          </Tabs>
        </Card>

        {/* Tooltips Example */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Tooltips
          </h4>

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
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Progress Bars
          </h4>

          <div className="space-y-6">
            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Default Progress</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">45%</span>
              </div>
              <Progress value={45} />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Success Progress</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">80%</span>
              </div>
              <Progress value={80} variant="success" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Warning Progress</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">60%</span>
              </div>
              <Progress value={60} variant="warning" />
            </div>

            <div>
              <div className="flex justify-between mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">Error Progress</span>
                <span className="text-sm text-gray-500 dark:text-gray-400">25%</span>
              </div>
              <Progress value={25} variant="error" />
            </div>

            <div>
              <div className="mb-2">
                <span className="text-sm font-medium text-gray-700 dark:text-gray-300">With Label</span>
              </div>
              <Progress value={75} showLabel />
            </div>
          </div>
        </Card>

        {/* Usage Examples */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tabs Usage */}
          <Card variant="glass" className="p-6">
            <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Tabs Usage</h5>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { Tabs, TabsList, 
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
            <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Tooltip Usage</h5>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { Tooltip } 
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
            <h5 className="font-bold mb-4 text-gray-900 dark:text-white">Progress Usage</h5>
            <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
              <pre className="text-xs text-gray-100 dark:text-gray-200"><code>{`import { Progress } 
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