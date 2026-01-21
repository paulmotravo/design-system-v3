import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, Mail, Lock, User, Search } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function FormsShowcase() {
  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Forms & Inputs"
        description="Form elements for user input and data collection"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Forms Philosophy"
          variant="soft-purple"
        >
          <p>→ <strong>Clear Labels:</strong> Every input has a descriptive label</p>
          <p>→ <strong>Visual Feedback:</strong> Focus states, validation, and error messages</p>
          <p>→ <strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation</p>
          <p>→ <strong>Consistent Sizing:</strong> Inputs match button heights for alignment</p>
        </PhilosophyCard>

        {/* Basic Input */}
        <SectionCard>
          <SectionTitle>Basic Input</SectionTitle>

          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="email">Email</Label>
  <Input
    id="email"
    type="email"
    placeholder="Enter your email"
  />
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Input with Icon */}
        <SectionCard>
          <SectionTitle>Input with Icon</SectionTitle>

          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Search, User } from 'lucide-react'

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email-icon">Email Address</Label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        id="email-icon"
        type="email"
        placeholder="you@example.com"
        className="pl-10"
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="search">Search</Label>
    <div className="relative">
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        id="search"
        placeholder="Search posts..."
        className="pl-10"
      />
    </div>
  </div>
</div>`}>
            <div className="max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="email-icon">Email Address</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="email-icon"
                    type="email"
                    placeholder="you@example.com"
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="search">Search</Label>
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="search"
                    placeholder="Search posts..."
                    className="pl-10"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="username">Username</Label>
                <div className="relative">
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="username"
                    placeholder="Enter username"
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Textarea */}
        <SectionCard>
          <SectionTitle>Textarea</SectionTitle>

          <CodePreview code={`import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="caption">Post Caption</Label>
  <Textarea
    id="caption"
    placeholder="Write your caption here..."
    className="min-h-30"
  />
  <p className="text-xs text-muted-foreground">
    Maximum 2,200 characters
  </p>
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="caption">Post Caption</Label>
                <Textarea
                  id="caption"
                  placeholder="Write your caption here..."
                  className="min-h-30"
                />
                <p className="text-xs text-muted-foreground">
                  Maximum 2,200 characters
                </p>
              </div>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Password Input */}
        <SectionCard>
          <SectionTitle>Password Input</SectionTitle>

          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lock } from 'lucide-react'

<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
    <Input
      id="password"
      type="password"
      placeholder="Enter your password"
      className="pl-10"
    />
  </div>
  <p className="text-xs text-muted-foreground">
    Must be at least 8 characters
  </p>
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                  <Input
                    id="password"
                    type="password"
                    placeholder="Enter your password"
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-muted-foreground">
                  Must be at least 8 characters
                </p>
              </div>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Disabled State */}
        <SectionCard>
          <SectionTitle>Disabled State</SectionTitle>

          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="disabled" className="text-muted-foreground">
    Account Email (cannot be changed)
  </Label>
  <Input
    id="disabled"
    type="email"
    value="user@example.com"
    disabled
  />
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="disabled" className="text-muted-foreground">
                  Account Email (cannot be changed)
                </Label>
                <Input
                  id="disabled"
                  type="email"
                  defaultValue="user@example.com"
                  disabled
                />
              </div>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Complete Form Example */}
        <SectionCard>
          <SectionTitle>Complete Form Example</SectionTitle>

          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Lock, User } from 'lucide-react'

<form className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="form-name">Full Name</Label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        id="form-name"
        placeholder="John Doe"
        className="pl-10"
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="form-email">Email Address</Label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        id="form-email"
        type="email"
        placeholder="you@example.com"
        className="pl-10"
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="form-password">Password</Label>
    <div className="relative">
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
      <Input
        id="form-password"
        type="password"
        placeholder="Create a password"
        className="pl-10"
      />
    </div>
  </div>

  <div className="space-y-2">
    <Label htmlFor="form-bio">Bio</Label>
    <Textarea
      id="form-bio"
      placeholder="Tell us about yourself..."
      className="min-h-25"
    />
  </div>

  <div className="flex gap-3">
    <Button variant="outline" type="button">
      Cancel
    </Button>
    <Button variant="primary" type="submit">
      Create Account
    </Button>
  </div>
</form>`}>
            <div className="max-w-md">
              <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
                <div className="space-y-2">
                  <Label htmlFor="form-name">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="form-name"
                      placeholder="John Doe"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-email">Email Address</Label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="form-email"
                      type="email"
                      placeholder="you@example.com"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-password">Password</Label>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <Input
                      id="form-password"
                      type="password"
                      placeholder="Create a password"
                      className="pl-10"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="form-bio">Bio</Label>
                  <Textarea
                    id="form-bio"
                    placeholder="Tell us about yourself..."
                    className="min-h-25"
                  />
                </div>

                <div className="flex gap-3">
                  <Button variant="outline" type="button">
                    Cancel
                  </Button>
                  <Button variant="primary" type="submit">
                    Create Account
                  </Button>
                </div>
              </form>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-foreground">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>→ <strong>Labels:</strong> Always use Label component for accessibility</p>
            <p>→ <strong>Icons:</strong> Add left padding (pl-10) when using icons inside inputs</p>
            <p>→ <strong>Helper Text:</strong> Use small gray text below inputs for hints or validation</p>
            <p>→ <strong>Textarea:</strong> Set min-h-30 or similar for comfortable typing area</p>
            <p>→ <strong>Disabled:</strong> Use disabled prop for read-only fields</p>
            <p>→ <strong>Form Spacing:</strong> Use space-y-6 between form groups for breathing room</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
