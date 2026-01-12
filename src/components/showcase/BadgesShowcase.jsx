import { Badge } from '@/components/ui/badge'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { AlertCircle, Check, X, Clock, TrendingUp, Users, Calendar } from 'lucide-react'
import { useState } from 'react'

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

        {/* Solid Variants */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Solid Variants (Strong Colors)
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Brand Colors</div>
              <div className="flex flex-wrap gap-3">
                <Badge variant="purple">Purple Badge</Badge>
                <Badge variant="coral">Coral Badge</Badge>
                <Badge variant="gradient">Gradient Badge</Badge>
              </div>
            </div>

            <Separator />

            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Status Colors</div>
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
            </div>
          </div>
        </Card>

        {/* Soft/Pastell Variants */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Soft Variants (Subtle Colors)
          </h4>
          
          <div className="space-y-4">
            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Basic Soft Badges</div>
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
            </div>

            <Separator />

            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">On Image (with backdrop-blur)</div>
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
            </div>
          </div>
        </Card>

        {/* Filter Badges */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Filter Badges (Interactive)
          </h4>
          
          <div className="space-y-6">
            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Solid Filter Style</div>
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
            </div>

            <Separator />

            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Soft Filter Style (Purple)</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant={selectedFilter === 'all' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}>
                  All
                </Badge>
                <Badge variant={selectedFilter === 'instagram' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}>
                  Instagram
                </Badge>
                <Badge variant={selectedFilter === 'facebook' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}>
                  Facebook
                </Badge>
                <Badge variant={selectedFilter === 'twitter' ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}>
                  Twitter
                </Badge>
              </div>
            </div>

            <Separator />

            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">Soft Filter Style (Coral)</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant={selectedFilter === 'all' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}>
                  All Types
                </Badge>
                <Badge variant={selectedFilter === 'image' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}>
                  Images
                </Badge>
                <Badge variant={selectedFilter === 'video' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}>
                  Videos
                </Badge>
                <Badge variant={selectedFilter === 'carousel' ? 'filter-soft-coral' : 'filter-soft-coral-unselected'}>
                  Carousels
                </Badge>
              </div>
            </div>
          </div>
        </Card>

        {/* Character Counter Badges */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Character Counter Badges
          </h4>

          <div className="space-y-6">
            <div>
              <Label htmlFor="counter-demo" className="mb-2">Type to see character counters update</Label>
              <Textarea
                id="counter-demo"
                placeholder="Was möchtest du teilen? Beschreibe deine Idee und lass die KI den perfekten Post erstellen..."
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

            <Separator />

            <div>
              <div className="font-semibold mb-3 text-gray-900 dark:text-white">All Counter States</div>
              <div className="space-y-3">
                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Safe (0-89%)</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="counter-safe" className="gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      0/280
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Warning (90-99%)</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="counter-warning" className="gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      252/280
                    </Badge>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-gray-500 dark:text-gray-400 mb-2">Over Limit (100%+)</div>
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="counter-over" className="gap-2">
                      <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                      285/280
                    </Badge>
                  </div>
                </div>
              </div>
            </div>
          </div>
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

        {/* Code Example */}
        <Card variant="glass" className="p-6">
          <div className="font-bold mb-4 text-gray-900 dark:text-white">Usage Example</div>
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-gray-100 dark:text-gray-200">
              <code>{`import { Badge } from '@/components/ui/badge'

// Solid badge
<Badge variant="purple">Label</Badge>

// Soft badge with icon
<Badge variant="soft-purple">
  <Clock className="w-3 h-3 mr-1" />
  Scheduled
</Badge>

// Filter badge (interactive)
<Badge 
  variant={selected ? 'filter-purple' : 'filter'}
  onClick={() => setSelected(!selected)}
>
  Filter
</Badge>

// Character counter badge
<Badge variant="counter-safe" className="gap-2">
  <TwitterIcon className="w-4 h-4" />
  {count}/{limit}
</Badge>

// Counter with logic
const getVariant = (count, limit) => {
  const pct = (count / limit) * 100
  if (pct >= 100) return 'counter-over'
  if (pct >= 90) return 'counter-warning'
  return 'counter-safe'
}

<Badge variant={getVariant(count, limit)}>
  {count}/{limit}
</Badge>`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  )
}