import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Zap, Upload, Check, Share2, MonitorPlay, Edit, Trash2, Sparkles, Star, ArrowRight, Settings, AlertCircle } from 'lucide-react'

export default function ButtonsShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Buttons</h3>
        <p className="text-gray-600 dark:text-gray-400">A comprehensive button system for all use cases</p>
      </div>

      <div className="space-y-6">
        {/* PRIMARY - MAIN CALL-TO-ACTIONS */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Primary - Main Call-to-Actions
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
              Create Reel
            </Button>
            <Button variant="primary" leftIcon={<Upload className="w-4 h-4" />}>
              Upload Images
            </Button>
            <Button variant="primary" leftIcon={<Check className="w-4 h-4" />}>
              Save Changes
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Use for main user actions</p>
        </Card>

        {/* SECONDARY - ALTERNATIVE ACTIONS */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Secondary - Alternative Actions
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button variant="secondary" leftIcon={<Share2 className="w-4 h-4" />}>
              Share Content
            </Button>
            <Button variant="secondary" leftIcon={<MonitorPlay className="w-4 h-4" />}>
              Preview
            </Button>
            <Button variant="secondary">
              Edit
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Use when you need a second CTA</p>
        </Card>

        {/* GRADIENT - PREMIUM FEATURES ONLY */}
        <Card className="p-8 bg-gradient-to-br from-gray-800 to-gray-900 dark:from-gray-900 dark:to-black border-gray-700 dark:border-gray-800">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-gray-300 uppercase tracking-wider mb-1">
                ✨ Gradient - Premium Features Only
              </h4>
              <p className="text-xs text-gray-400">⚠️ Use sparingly! Only for premium upgrades & special offers</p>
            </div>
          </div>
          <div className="flex flex-wrap gap-4">
            <Button variant="gradient" leftIcon={<Sparkles className="w-4 h-4" />}>
              Upgrade to Pro
            </Button>
            <Button variant="gradient" leftIcon={<Star className="w-4 h-4" />}>
              Unlock Premium
            </Button>
            <Button variant="gradient" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Trial
            </Button>
          </div>
        </Card>

        {/* OUTLINE & GHOST - SECONDARY UI */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Outline & Ghost - Secondary UI
          </h4>
          <div className="space-y-4">
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Outline: Cancel/Back</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="outline">Cancel</Button>
                <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More
                </Button>
                <Button variant="outline">Skip</Button>
                <Button variant="outline" leftIcon={<Settings className="w-4 h-4" />}>
                  Settings
                </Button>
              </div>
            </div>
            <div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Ghost: Navigation/Subtle</p>
              <div className="flex flex-wrap gap-4">
                <Button variant="ghost">Skip</Button>
                <Button variant="ghost" leftIcon={<Settings className="w-4 h-4" />}>
                  Settings
                </Button>
                <Button variant="ghost">More Options</Button>
              </div>
            </div>
          </div>
        </Card>

        {/* DESTRUCTIVE - DANGER ACTIONS */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Destructive - Danger Actions
          </h4>
          <div className="flex flex-wrap gap-4 mb-4">
            <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
              Delete Account
            </Button>
            <Button variant="destructive">
              Remove
            </Button>
          </div>
          <p className="text-sm text-gray-600 dark:text-gray-400">Use for delete, remove & danger actions</p>
        </Card>

        {/* LOADING STATES */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Loading States
          </h4>
          <div className="flex flex-wrap gap-4">
            <Button variant="primary" loading>
              Uploading...
            </Button>
            <Button variant="secondary" loading loadingText="Processing...">
              Process
            </Button>
            <Button variant="outline" loading>
              Loading
            </Button>
          </div>
        </Card>

        {/* SIZES */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Sizes
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="default">Default Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </div>
        </Card>

        {/* ICON BUTTONS */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Icon Buttons
          </h4>
          <div className="flex flex-wrap items-center gap-4">
            <Button variant="primary" size="icon">
              <Zap className="w-5 h-5" />
            </Button>
            <Button variant="secondary" size="icon">
              <Share2 className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="ghost" size="icon">
              <Settings className="w-5 h-5" />
            </Button>
            <Button variant="destructive" size="icon">
              <Trash2 className="w-5 h-5" />
            </Button>
          </div>
        </Card>

        {/* USAGE EXAMPLES */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Usage Examples
          </h4>
          
          <div className="space-y-6">
            {/* Example 1: With Icon */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">With Left Icon:</p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-sm text-gray-100 dark:text-gray-200"><code>{`<Button variant="primary" leftIcon={<Zap />}>
  Create Reel
</Button>`}</code></pre>
              </div>
              <Button variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
                Create Reel
              </Button>
            </div>

            {/* Example 2: Loading State */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">With Loading State:</p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-sm text-gray-100 dark:text-gray-200"><code>{`<Button 
  variant="primary" 
  loading 
  loadingText="Uploading..."
>
  Upload
</Button>`}</code></pre>
              </div>
              <Button variant="primary" loading loadingText="Uploading...">
                Upload
              </Button>
            </div>

            {/* Example 3: Icon Button */}
            <div className="bg-gray-50 dark:bg-gray-900 rounded-xl p-6">
              <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 font-medium">Icon-Only Button:</p>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto mb-3">
                <pre className="text-sm text-gray-100 dark:text-gray-200"><code>{`<Button variant="primary" size="icon">
  <Settings className="w-5 h-5" />
</Button>`}</code></pre>
              </div>
              <Button variant="primary" size="icon">
                <Settings className="w-5 h-5" />
              </Button>
            </div>
          </div>
        </Card>

        {/* PHILOSOPHY */}
        <Card className="p-8 bg-purple-50 dark:bg-purple-900/20 border-purple-200 dark:border-purple-800">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Button Hierarchy Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Primary (Purple):</strong> Your main action - use once per view</p>
                <p>→ <strong>Secondary (Coral):</strong> Alternative important action</p>
                <p>→ <strong>Gradient:</strong> ONLY for premium upgrades - use sparingly!</p>
                <p>→ <strong>Outline:</strong> Cancel, back, or secondary navigation</p>
                <p>→ <strong>Ghost:</strong> Subtle navigation in menus</p>
                <p>→ <strong>Destructive:</strong> Delete, remove - always confirm first!</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}