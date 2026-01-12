import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, Check, X, Clock, TrendingUp, Users, Calendar, Copy, CheckCircle, Eye, Code2 } from 'lucide-react'
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

export default function BadgesShowcase() {
  const [selectedFilter, setSelectedFilter] = useState('all')
  const [text, setText] = useState('')

  // Platform character limits
  const limits = {
    twitter: 280,
    instagram: 2200,
    facebook: 63206,
    linkedin: 3000
  }

  const getCountVariant = (count, limit) => {
    const percentage = (count / limit) * 100
    if (percentage >= 100) return 'counter-over'
    if (percentage >= 90) return 'counter-warning'
    return 'counter-safe'
  }

  const formatNumber = (num) => {
    if (num > 9999) return `${(num / 1000).toFixed(1)}K`
    return num
  }

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Badges</h3>
        <p className="text-gray-600 dark:text-gray-400">Status indicators, labels, and interactive filters</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Badge Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Solid Badges:</strong> Strong colors for important labels</p>
                <p>→ <strong>Soft Badges:</strong> Pastels for subtle, non-distracting info</p>
                <p>→ <strong>Filter Badges:</strong> Interactive, clickable selection</p>
                <p>→ <strong>Counter Badges:</strong> Real-time character limits per platform</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Solid Variants - Brand Colors */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Solid Variants - Brand Colors
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'

<Badge variant="purple">Purple Badge</Badge>
<Badge variant="coral">Coral Badge</Badge>
<Badge variant="gradient">Gradient Badge</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="purple">Purple Badge</Badge>
              <Badge variant="coral">Coral Badge</Badge>
              <Badge variant="gradient">Gradient Badge</Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Solid Variants - Status */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Solid Variants - Status with Icons
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Check, TrendingUp, X } from 'lucide-react'

<Badge variant="green">
  <Check className="w-3 h-3 mr-1" />
  Success
</Badge>

<Badge variant="pink">
  <TrendingUp className="w-3 h-3 mr-1" />
  Trending
</Badge>

<Badge variant="destructive">
  <X className="w-3 h-3 mr-1" />
  Error
</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="green">
                <Check className="w-3 h-3 mr-1" />
                Success
              </Badge>
              <Badge variant="pink">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
              <Badge variant="destructive">
                <X className="w-3 h-3 mr-1" />
                Error
              </Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Soft Variants */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Soft Variants (Subtle Pastels)
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Clock, Users, Calendar, Check, TrendingUp } from 'lucide-react'

<Badge variant="soft-purple">
  <Clock className="w-3 h-3 mr-1" />
  Scheduled
</Badge>

<Badge variant="soft-coral">
  <Users className="w-3 h-3 mr-1" />
  Team Content
</Badge>

<Badge variant="soft-blue">
  <Calendar className="w-3 h-3 mr-1" />
  Draft
</Badge>

<Badge variant="soft-green">
  <Check className="w-3 h-3 mr-1" />
  Published
</Badge>

<Badge variant="soft-pink">
  <TrendingUp className="w-3 h-3 mr-1" />
  Boosted
</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="soft-purple">
                <Clock className="w-3 h-3 mr-1" />
                Scheduled
              </Badge>
              <Badge variant="soft-coral">
                <Users className="w-3 h-3 mr-1" />
                Team Content
              </Badge>
              <Badge variant="soft-blue">
                <Calendar className="w-3 h-3 mr-1" />
                Draft
              </Badge>
              <Badge variant="soft-green">
                <Check className="w-3 h-3 mr-1" />
                Published
              </Badge>
              <Badge variant="soft-pink">
                <TrendingUp className="w-3 h-3 mr-1" />
                Boosted
              </Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Soft Badges on Images */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Soft Badges on Images (with backdrop-blur)
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'

<div className="relative">
  <img src="..." className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex items-center justify-center gap-2">
    <Badge variant="soft-purple">On Image</Badge>
    <Badge variant="soft-coral">Readable</Badge>
    <Badge variant="soft-blue">With Blur</Badge>
  </div>
</div>`}>
            <Card className="relative h-40 overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80" 
                alt="Background" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap p-4">
                <Badge variant="soft-purple">On Image</Badge>
                <Badge variant="soft-coral">Readable</Badge>
                <Badge variant="soft-blue">With Blur</Badge>
              </div>
            </Card>
          </CodePreview>
        </Card>

        {/* Filter Badges - Solid */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Filter Badges - Solid Style
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Clock, Check } from 'lucide-react'

const [selected, setSelected] = useState('all')

<Badge 
  variant={selected === 'all' ? 'filter-purple' : 'filter'}
  onClick={() => setSelected('all')}
>
  All Posts
</Badge>

<Badge 
  variant={selected === 'scheduled' ? 'filter-purple' : 'filter'}
  onClick={() => setSelected('scheduled')}
>
  <Clock className="w-3 h-3 mr-1" />
  Scheduled
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedFilter === 'all' ? 'filter-purple' : 'filter'}
                onClick={() => setSelectedFilter('all')}
              >
                All Posts
              </Badge>
              <Badge 
                variant={selectedFilter === 'scheduled' ? 'filter-purple' : 'filter'}
                onClick={() => setSelectedFilter('scheduled')}
              >
                <Clock className="w-3 h-3 mr-1" />
                Scheduled
              </Badge>
              <Badge 
                variant={selectedFilter === 'published' ? 'filter-purple' : 'filter'}
                onClick={() => setSelectedFilter('published')}
              >
                <Check className="w-3 h-3 mr-1" />
                Published
              </Badge>
              <Badge 
                variant={selectedFilter === 'draft' ? 'filter-purple' : 'filter'}
                onClick={() => setSelectedFilter('draft')}
              >
                Draft
              </Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Filter Badges - Soft Purple */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Filter Badges - Soft Purple Style
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'

const [selected, setSelected] = useState('all')

<Badge 
  variant={selected === 'all' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
  onClick={() => setSelected('all')}
>
  All
</Badge>

<Badge 
  variant={selected === 'instagram' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
  onClick={() => setSelected('instagram')}
>
  Instagram
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedFilter === 'all' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                onClick={() => setSelectedFilter('all')}
              >
                All
              </Badge>
              <Badge 
                variant={selectedFilter === 'instagram' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                onClick={() => setSelectedFilter('instagram')}
              >
                Instagram
              </Badge>
              <Badge 
                variant={selectedFilter === 'facebook' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                onClick={() => setSelectedFilter('facebook')}
              >
                Facebook
              </Badge>
              <Badge 
                variant={selectedFilter === 'twitter' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                onClick={() => setSelectedFilter('twitter')}
              >
                Twitter
              </Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Filter Badges - Soft Coral */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Filter Badges - Soft Coral Style
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'

const [selected, setSelected] = useState('all')

<Badge 
  variant={selected === 'all' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
  onClick={() => setSelected('all')}
>
  All Types
</Badge>

<Badge 
  variant={selected === 'image' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
  onClick={() => setSelected('image')}
>
  Images
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge 
                variant={selectedFilter === 'all' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
                onClick={() => setSelectedFilter('all')}
              >
                All Types
              </Badge>
              <Badge 
                variant={selectedFilter === 'image' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
                onClick={() => setSelectedFilter('image')}
              >
                Images
              </Badge>
              <Badge 
                variant={selectedFilter === 'video' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
                onClick={() => setSelectedFilter('video')}
              >
                Videos
              </Badge>
              <Badge 
                variant={selectedFilter === 'carousel' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}
                onClick={() => setSelectedFilter('carousel')}
              >
                Carousels
              </Badge>
            </div>
          </CodePreview>
        </Card>

        {/* Character Counter Badges - Live Demo */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Character Counter Badges - Live Demo
          </h4>
          
          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'

const limits = { twitter: 280, instagram: 2200 }

const getCountVariant = (count, limit) => {
  const pct = (count / limit) * 100
  if (pct >= 100) return 'counter-over'
  if (pct >= 90) return 'counter-warning'
  return 'counter-safe'
}

<Textarea 
  value={text} 
  onChange={(e) => setText(e.target.value)} 
/>

<Badge variant={getCountVariant(text.length, limits.twitter)}>
  <TwitterIcon className="w-4 h-4" />
  {text.length}/{limits.twitter}
</Badge>`}>
            <div className="space-y-4">
              <div>
                <Label htmlFor="counter-demo" className="mb-2">Type to see counters update</Label>
                <Textarea
                  id="counter-demo"
                  placeholder="Type your message here..."
                  value={text}
                  onChange={(e) => setText(e.target.value)}
                  className="min-h-[120px] resize-none"
                />
              </div>

              <div className="flex flex-wrap gap-3">
                <Badge variant={getCountVariant(text.length, limits.twitter)} className="gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  {text.length}/{limits.twitter}
                </Badge>

                <Badge variant={getCountVariant(text.length, limits.instagram)} className="gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  {text.length}/{formatNumber(limits.instagram)}
                </Badge>

                <Badge variant={getCountVariant(text.length, limits.facebook)} className="gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  {text.length}/{formatNumber(limits.facebook)}
                </Badge>

                <Badge variant={getCountVariant(text.length, limits.linkedin)} className="gap-2">
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                  </svg>
                  {text.length}/{formatNumber(limits.linkedin)}
                </Badge>
              </div>
            </div>
          </CodePreview>
        </Card>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-gray-900 dark:text-white">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>→ <strong>Solid Badges:</strong> Use for important, attention-grabbing labels</p>
            <p>→ <strong>Soft Badges:</strong> Use for subtle info, especially on images</p>
            <p>→ <strong>Filter Badges:</strong> Use for interactive filtering and selection</p>
            <p>→ <strong>Counter Badges:</strong> Use for real-time character counting with platform icons</p>
            <p>→ <strong>Icons:</strong> Add icons before text for better recognition</p>
          </div>
        </Card>
      </div>
    </div>
  )
}