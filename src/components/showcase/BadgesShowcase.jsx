import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { AlertCircle, Check, X, Clock, TrendingUp, Users, Calendar } from 'lucide-react'
import { useState } from 'react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

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
      <ShowcaseHeader
        title="Badges"
        description="Status indicators, labels, and interactive filters"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Badge Philosophy"
        >
          <p>→ <strong>Solid Badges:</strong> Strong colors for important labels</p>
          <p>→ <strong>Soft Badges:</strong> Pastels for subtle, non-distracting info</p>
          <p>→ <strong>Filter Badges:</strong> Interactive, clickable selection</p>
          <p>→ <strong>Counter Badges:</strong> Real-time character limits per platform</p>
        </PhilosophyCard>

        {/* Solid Variants - Brand Colors */}
        <SectionCard>
          <SectionTitle>Solid Variants - Brand Colors</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'

<Badge variant="primary">Primary Badge</Badge>
<Badge variant="secondary">Secondary Badge</Badge>
<Badge variant="gradient">Gradient Badge</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="primary">Primary Badge</Badge>
              <Badge variant="secondary">Secondary Badge</Badge>
              <Badge variant="gradient">Gradient Badge</Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Solid Variants - Status */}
        <SectionCard>
          <SectionTitle>Solid Variants - Status with Icons</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Check, TrendingUp, X } from 'lucide-react'

<Badge variant="success">
  <Check className="w-3 h-3 mr-1" />
  Success
</Badge>

<Badge variant="info">
  <TrendingUp className="w-3 h-3 mr-1" />
  Trending
</Badge>

<Badge variant="destructive">
  <X className="w-3 h-3 mr-1" />
  Error
</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="success">
                <Check className="w-3 h-3 mr-1" />
                Success
              </Badge>
              <Badge variant="info">
                <TrendingUp className="w-3 h-3 mr-1" />
                Trending
              </Badge>
              <Badge variant="destructive">
                <X className="w-3 h-3 mr-1" />
                Error
              </Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Soft Variants */}
        <SectionCard>
          <SectionTitle>Soft Variants (Subtle Pastels)</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Clock, Users, Calendar, Check, TrendingUp } from 'lucide-react'

<Badge variant="soft-primary">
  <Clock className="w-3 h-3 mr-1" />
  Scheduled
</Badge>

<Badge variant="soft-secondary">
  <Users className="w-3 h-3 mr-1" />
  Team Content
</Badge>

<Badge variant="soft-info">
  <Calendar className="w-3 h-3 mr-1" />
  Draft
</Badge>

<Badge variant="soft-success">
  <Check className="w-3 h-3 mr-1" />
  Published
</Badge>

<Badge variant="soft-warning">
  <TrendingUp className="w-3 h-3 mr-1" />
  Boosted
</Badge>`}>
            <div className="flex flex-wrap gap-3">
              <Badge variant="soft-primary">
                <Clock className="w-3 h-3 mr-1" />
                Scheduled
              </Badge>
              <Badge variant="soft-secondary">
                <Users className="w-3 h-3 mr-1" />
                Team Content
              </Badge>
              <Badge variant="soft-info">
                <Calendar className="w-3 h-3 mr-1" />
                Draft
              </Badge>
              <Badge variant="soft-success">
                <Check className="w-3 h-3 mr-1" />
                Published
              </Badge>
              <Badge variant="soft-warning">
                <TrendingUp className="w-3 h-3 mr-1" />
                Boosted
              </Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Soft Badges on Images */}
        <SectionCard>
          <SectionTitle>Soft Badges on Images (with backdrop-blur)</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'

<div className="relative">
  <img src="..." className="w-full h-full object-cover" />
  <div className="absolute inset-0 flex items-center justify-center gap-2">
    <Badge variant="soft-primary">On Image</Badge>
    <Badge variant="soft-secondary">Readable</Badge>
    <Badge variant="soft-info">With Blur</Badge>
  </div>
</div>`}>
            <Card className="relative h-40 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=800&q=80"
                alt="Background"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 flex-wrap p-4">
                <Badge variant="soft-primary">On Image</Badge>
                <Badge variant="soft-secondary">Readable</Badge>
                <Badge variant="soft-info">With Blur</Badge>
              </div>
            </Card>
          </CodePreview>
        </SectionCard>

        {/* Filter Badges - Solid */}
        <SectionCard>
          <SectionTitle>Filter Badges - Solid Style</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'
import { Clock, Check } from 'lucide-react'

const [selected, setSelected] = useState('all')

<Badge
  variant={selected === 'all' ? 'filter-primary' : 'filter'}
  onClick={() => setSelected('all')}
>
  All Posts
</Badge>

<Badge
  variant={selected === 'scheduled' ? 'filter-primary' : 'filter'}
  onClick={() => setSelected('scheduled')}
>
  <Clock className="w-3 h-3 mr-1" />
  Scheduled
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedFilter === 'all' ? 'filter-primary' : 'filter'}
                onClick={() => setSelectedFilter('all')}
              >
                All Posts
              </Badge>
              <Badge
                variant={selectedFilter === 'scheduled' ? 'filter-primary' : 'filter'}
                onClick={() => setSelectedFilter('scheduled')}
              >
                <Clock className="w-3 h-3 mr-1" />
                Scheduled
              </Badge>
              <Badge
                variant={selectedFilter === 'published' ? 'filter-primary' : 'filter'}
                onClick={() => setSelectedFilter('published')}
              >
                <Check className="w-3 h-3 mr-1" />
                Published
              </Badge>
              <Badge
                variant={selectedFilter === 'draft' ? 'filter-primary' : 'filter'}
                onClick={() => setSelectedFilter('draft')}
              >
                Draft
              </Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Filter Badges - Soft Primary */}
        <SectionCard>
          <SectionTitle>Filter Badges - Soft Primary Style</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'

const [selected, setSelected] = useState('all')

<Badge
  variant={selected === 'all' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
  onClick={() => setSelected('all')}
>
  All
</Badge>

<Badge
  variant={selected === 'instagram' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
  onClick={() => setSelected('instagram')}
>
  Instagram
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedFilter === 'all' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
                onClick={() => setSelectedFilter('all')}
              >
                All
              </Badge>
              <Badge
                variant={selectedFilter === 'instagram' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
                onClick={() => setSelectedFilter('instagram')}
              >
                Instagram
              </Badge>
              <Badge
                variant={selectedFilter === 'facebook' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
                onClick={() => setSelectedFilter('facebook')}
              >
                Facebook
              </Badge>
              <Badge
                variant={selectedFilter === 'twitter' ? 'filter-soft-primary' : 'filter-soft-primary-unselected'}
                onClick={() => setSelectedFilter('twitter')}
              >
                Twitter
              </Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Filter Badges - Soft Secondary */}
        <SectionCard>
          <SectionTitle>Filter Badges - Soft Secondary Style</SectionTitle>

          <CodePreview code={`import { Badge } from '@/components/ui/badge'

const [selected, setSelected] = useState('all')

<Badge
  variant={selected === 'all' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
  onClick={() => setSelected('all')}
>
  All Types
</Badge>

<Badge
  variant={selected === 'image' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
  onClick={() => setSelected('image')}
>
  Images
</Badge>`}>
            <div className="flex flex-wrap gap-2">
              <Badge
                variant={selectedFilter === 'all' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
                onClick={() => setSelectedFilter('all')}
              >
                All Types
              </Badge>
              <Badge
                variant={selectedFilter === 'image' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
                onClick={() => setSelectedFilter('image')}
              >
                Images
              </Badge>
              <Badge
                variant={selectedFilter === 'video' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
                onClick={() => setSelectedFilter('video')}
              >
                Videos
              </Badge>
              <Badge
                variant={selectedFilter === 'carousel' ? 'filter-soft-secondary' : 'filter-soft-secondary-unselected'}
                onClick={() => setSelectedFilter('carousel')}
              >
                Carousels
              </Badge>
            </div>
          </CodePreview>
        </SectionCard>

        {/* Character Counter Badges - Live Demo */}
        <SectionCard>
          <SectionTitle>Character Counter Badges - Live Demo</SectionTitle>

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
        </SectionCard>

        {/* Usage Guidelines */}
        <Card variant="soft-info" className="p-6">
          <div className="font-bold text-sm mb-3 text-foreground">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-muted-foreground">
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
