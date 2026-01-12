import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, Eye, Code2, Copy, CheckCircle, Mail, Lock, User, Search } from 'lucide-react'
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

export default function FormsShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Forms & Inputs</h3>
        <p className="text-gray-600 dark:text-gray-400">Form elements for user input and data collection</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Forms Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Clear Labels:</strong> Every input has a descriptive label</p>
                <p>→ <strong>Visual Feedback:</strong> Focus states, validation, and error messages</p>
                <p>→ <strong>Accessibility:</strong> Proper ARIA labels and keyboard navigation</p>
                <p>→ <strong>Consistent Sizing:</strong> Inputs match button heights for alignment</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Basic Input */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Basic Input
          </h4>
          
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
        </Card>

        {/* Input with Icon */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Input with Icon
          </h4>
          
          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Mail, Search, User } from 'lucide-react'

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="email-icon">Email Address</Label>
    <div className="relative">
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
      <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                  <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    id="username" 
                    placeholder="Enter username" 
                    className="pl-10"
                  />
                </div>
              </div>
            </div>
          </CodePreview>
        </Card>

        {/* Textarea */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Textarea
          </h4>
          
          <CodePreview code={`import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="caption">Post Caption</Label>
  <Textarea 
    id="caption" 
    placeholder="Write your caption here..." 
    className="min-h-[120px]"
  />
  <p className="text-xs text-gray-500">
    Maximum 2,200 characters
  </p>
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="caption">Post Caption</Label>
                <Textarea 
                  id="caption" 
                  placeholder="Write your caption here..." 
                  className="min-h-[120px]"
                />
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Maximum 2,200 characters
                </p>
              </div>
            </div>
          </CodePreview>
        </Card>

        {/* Password Input */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Password Input
          </h4>
          
          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Lock } from 'lucide-react'

<div className="space-y-2">
  <Label htmlFor="password">Password</Label>
  <div className="relative">
    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
    <Input 
      id="password" 
      type="password" 
      placeholder="Enter your password" 
      className="pl-10"
    />
  </div>
  <p className="text-xs text-gray-500">
    Must be at least 8 characters
  </p>
</div>`}>
            <div className="max-w-md">
              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <Input 
                    id="password" 
                    type="password" 
                    placeholder="Enter your password" 
                    className="pl-10"
                  />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  Must be at least 8 characters
                </p>
              </div>
            </div>
          </CodePreview>
        </Card>

        {/* Disabled State */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Disabled State
          </h4>
          
          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'

<div className="space-y-2">
  <Label htmlFor="disabled" className="text-gray-400">
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
                <Label htmlFor="disabled" className="text-gray-400">
                  Account Email (cannot be changed)
                </Label>
                <Input 
                  id="disabled" 
                  type="email" 
                  value="user@example.com" 
                  disabled 
                />
              </div>
            </div>
          </CodePreview>
        </Card>

        {/* Complete Form Example */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Complete Form Example
          </h4>
          
          <CodePreview code={`import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Button } from '@/components/ui/button'
import { Mail, Lock, User } from 'lucide-react'

<form className="space-y-6">
  <div className="space-y-2">
    <Label htmlFor="form-name">Full Name</Label>
    <div className="relative">
      <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
      <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
      className="min-h-[100px]"
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
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
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
                    className="min-h-[100px]"
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
        </Card>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-gray-900 dark:text-white">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>→ <strong>Labels:</strong> Always use Label component for accessibility</p>
            <p>→ <strong>Icons:</strong> Add left padding (pl-10) when using icons inside inputs</p>
            <p>→ <strong>Helper Text:</strong> Use small gray text below inputs for hints or validation</p>
            <p>→ <strong>Textarea:</strong> Set min-h-[120px] or similar for comfortable typing area</p>
            <p>→ <strong>Disabled:</strong> Use disabled prop for read-only fields</p>
            <p>→ <strong>Form Spacing:</strong> Use space-y-6 between form groups for breathing room</p>
          </div>
        </Card>
      </div>
    </div>
  )
}