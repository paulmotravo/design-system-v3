import { Button } from '@/components/ui/button'
import { Zap, Upload, Check, Share2, MonitorPlay, Trash2, Sparkles, Star, ArrowRight, Settings, AlertCircle } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, DescriptionText, PhilosophyCard } from './shared'

export default function ButtonsShowcase() {
  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Buttons"
        description="A comprehensive button system for all use cases"
      />

      <div className="space-y-6">
        {/* PRIMARY - MAIN CALL-TO-ACTIONS */}
        <SectionCard>
          <SectionTitle>Primary - Main Call-to-Actions</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'
import { Zap, Upload, Check } from 'lucide-react'

<Button variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
  Create Reel
</Button>

<Button variant="primary" leftIcon={<Upload className="w-4 h-4" />}>
  Upload Images
</Button>

<Button variant="primary" leftIcon={<Check className="w-4 h-4" />}>
  Save Changes
</Button>`}>
            <Button variant="primary" leftIcon={<Zap className="w-4 h-4" />}>
              Create Reel
            </Button>
            <Button variant="primary" leftIcon={<Upload className="w-4 h-4" />}>
              Upload Images
            </Button>
            <Button variant="primary" leftIcon={<Check className="w-4 h-4" />}>
              Save Changes
            </Button>
          </CodePreview>

          <DescriptionText className="mt-4">Use for main user actions</DescriptionText>
        </SectionCard>

        {/* SECONDARY - ALTERNATIVE ACTIONS */}
        <SectionCard>
          <SectionTitle>Secondary - Alternative Actions</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'
import { Share2, MonitorPlay } from 'lucide-react'

<Button variant="secondary" leftIcon={<Share2 className="w-4 h-4" />}>
  Share Content
</Button>

<Button variant="secondary" leftIcon={<MonitorPlay className="w-4 h-4" />}>
  Preview
</Button>

<Button variant="secondary">
  Edit
</Button>`}>
            <Button variant="secondary" leftIcon={<Share2 className="w-4 h-4" />}>
              Share Content
            </Button>
            <Button variant="secondary" leftIcon={<MonitorPlay className="w-4 h-4" />}>
              Preview
            </Button>
            <Button variant="secondary">
              Edit
            </Button>
          </CodePreview>

          <DescriptionText className="mt-4">Use when you need a second CTA</DescriptionText>
        </SectionCard>

        {/* GRADIENT - PREMIUM FEATURES ONLY */}
        <SectionCard className="bg-linear-to-br from-zinc-800 to-zinc-900 border-zinc-700">
          <div className="flex items-start gap-3 mb-6">
            <div className="w-8 h-8 bg-linear-to-r from-primary to-secondary rounded-lg flex items-center justify-center shrink-0">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <div>
              <h4 className="text-sm font-bold text-zinc-300 uppercase tracking-wider mb-1">
                Gradient - Premium Features Only
              </h4>
              <p className="text-xs text-zinc-400">Use sparingly! Only for premium upgrades & special offers</p>
            </div>
          </div>

          <CodePreview code={`import { Button } from '@/components/ui/button'
import { Sparkles, Star, ArrowRight } from 'lucide-react'

<Button variant="gradient" leftIcon={<Sparkles className="w-4 h-4" />}>
  Upgrade to Pro
</Button>

<Button variant="gradient" leftIcon={<Star className="w-4 h-4" />}>
  Unlock Premium
</Button>

<Button variant="gradient" rightIcon={<ArrowRight className="w-4 h-4" />}>
  Start Trial
</Button>`}>
            <Button variant="gradient" leftIcon={<Sparkles className="w-4 h-4" />}>
              Upgrade to Pro
            </Button>
            <Button variant="gradient" leftIcon={<Star className="w-4 h-4" />}>
              Unlock Premium
            </Button>
            <Button variant="gradient" rightIcon={<ArrowRight className="w-4 h-4" />}>
              Start Trial
            </Button>
          </CodePreview>
        </SectionCard>

        {/* OUTLINE & GHOST - SECONDARY UI */}
        <SectionCard>
          <SectionTitle>Outline & Ghost - Secondary UI</SectionTitle>

          <div className="space-y-6">
            <div>
              <p className="text-xs text-muted-foreground mb-4 font-medium">Outline: Cancel/Back</p>
              <CodePreview code={`import { Button } from '@/components/ui/button'
import { ArrowRight, Settings } from 'lucide-react'

<Button variant="outline">Cancel</Button>

<Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
  Learn More
</Button>

<Button variant="outline">Skip</Button>

<Button variant="outline" leftIcon={<Settings className="w-4 h-4" />}>
  Settings
</Button>`}>
                <Button variant="outline">Cancel</Button>
                <Button variant="outline" rightIcon={<ArrowRight className="w-4 h-4" />}>
                  Learn More
                </Button>
                <Button variant="outline">Skip</Button>
                <Button variant="outline" leftIcon={<Settings className="w-4 h-4" />}>
                  Settings
                </Button>
              </CodePreview>
            </div>

            <div>
              <p className="text-xs text-muted-foreground mb-4 font-medium">Ghost: Navigation/Subtle</p>
              <CodePreview code={`import { Button } from '@/components/ui/button'
import { Settings } from 'lucide-react'

<Button variant="ghost">Skip</Button>

<Button variant="ghost" leftIcon={<Settings className="w-4 h-4" />}>
  Settings
</Button>

<Button variant="ghost">More Options</Button>`}>
                <Button variant="ghost">Skip</Button>
                <Button variant="ghost" leftIcon={<Settings className="w-4 h-4" />}>
                  Settings
                </Button>
                <Button variant="ghost">More Options</Button>
              </CodePreview>
            </div>
          </div>
        </SectionCard>

        {/* DESTRUCTIVE - DANGER ACTIONS */}
        <SectionCard>
          <SectionTitle>Destructive - Danger Actions</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'

<Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
  Delete Account
</Button>

<Button variant="destructive">
  Remove
</Button>`}>
            <Button variant="destructive" leftIcon={<Trash2 className="w-4 h-4" />}>
              Delete Account
            </Button>
            <Button variant="destructive">
              Remove
            </Button>
          </CodePreview>

          <DescriptionText className="mt-4">Use for delete, remove & danger actions</DescriptionText>
        </SectionCard>

        {/* LOADING STATES */}
        <SectionCard>
          <SectionTitle>Loading States</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'

<Button variant="primary" loading>
  Uploading...
</Button>

<Button variant="secondary" loading loadingText="Processing...">
  Process
</Button>

<Button variant="outline" loading>
  Loading
</Button>`}>
            <Button variant="primary" loading>
              Uploading...
            </Button>
            <Button variant="secondary" loading loadingText="Processing...">
              Process
            </Button>
            <Button variant="outline" loading>
              Loading
            </Button>
          </CodePreview>
        </SectionCard>

        {/* SIZES */}
        <SectionCard>
          <SectionTitle>Sizes</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'

<Button variant="primary" size="sm">Small Button</Button>

<Button variant="primary" size="default">Default Button</Button>

<Button variant="primary" size="lg">Large Button</Button>`}>
            <Button variant="primary" size="sm">Small Button</Button>
            <Button variant="primary" size="default">Default Button</Button>
            <Button variant="primary" size="lg">Large Button</Button>
          </CodePreview>
        </SectionCard>

        {/* ICON BUTTONS */}
        <SectionCard>
          <SectionTitle>Icon Buttons</SectionTitle>

          <CodePreview code={`import { Button } from '@/components/ui/button'
import { Zap, Share2, Settings, Trash2 } from 'lucide-react'

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
</Button>`}>
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
          </CodePreview>
        </SectionCard>

        {/* PHILOSOPHY */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Button Hierarchy Philosophy"
        >
          <p>→ <strong>Primary (Purple):</strong> Your main action - use once per view</p>
          <p>→ <strong>Secondary (Coral):</strong> Alternative important action</p>
          <p>→ <strong>Gradient:</strong> ONLY for premium upgrades - use sparingly!</p>
          <p>→ <strong>Outline:</strong> Cancel, back, or secondary navigation</p>
          <p>→ <strong>Ghost:</strong> Subtle navigation in menus</p>
          <p>→ <strong>Destructive:</strong> Delete, remove - always confirm first!</p>
        </PhilosophyCard>
      </div>
    </div>
  )
}
