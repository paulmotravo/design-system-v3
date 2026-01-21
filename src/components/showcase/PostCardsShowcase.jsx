import { useState } from 'react'
import PostCard from '@/components/ui/PostCard'
import PostCardMasonry from '@/components/ui/PostCardMasonry'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, Grid3x3, LayoutGrid } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function PostCardsShowcase() {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'

  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Post Cards"
        description="Social Media Post Components - Combining multiple Design System elements"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Complex UI Pattern - Two Layout Variants"
          variant="soft-purple"
        >
          <p>→ <strong>Grid Layout:</strong> Structured dashboard view with equal card heights</p>
          <p>→ <strong>Masonry Layout:</strong> Pinterest-style with variable heights, more dynamic</p>
          <p>→ Combines: <strong>Card</strong> + <strong>Badges</strong> + <strong>Buttons</strong></p>
          <p>→ Real-world example: Social Media Dashboard</p>
        </PhilosophyCard>

        {/* Basic PostCard Usage */}
        <SectionCard>
          <SectionTitle>Basic PostCard - Draft Status</SectionTitle>

          <CodePreview code={`import PostCard from '@/components/ui/PostCard'

<PostCard
  status="draft"
  platforms={['instagram', 'facebook']}
  contentTypes={['feed']}
  scheduledDate="Today"
  scheduledTime="3:00 PM"
  image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
  caption="🚀 New to AI tools? Here are 5 tips to get you started! #AI #Tutorial"
  onPreview={() => alert('Open preview')}
  onPost={() => alert('Publish post')}
/>`}>
            <div className="max-w-sm mx-auto">
              <PostCard
                status="draft"
                platforms={['instagram', 'facebook']}
                contentTypes={['feed']}
                scheduledDate="Today"
                scheduledTime="3:00 PM"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                caption="🚀 New to AI tools? Here are 5 tips to get you started! #AI #Tutorial"
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Publish post')}
              />
            </div>
          </CodePreview>
        </SectionCard>

        {/* Scheduled with Agency Badge */}
        <SectionCard>
          <SectionTitle>Scheduled Post - Agency Content</SectionTitle>

          <CodePreview code={`import PostCard from '@/components/ui/PostCard'

<PostCard
  status="scheduled"
  platforms={['instagram']}
  contentTypes={['reel', 'story']}
  scheduledDate="Nov 13"
  scheduledTime="2:00 PM"
  variants={2}
  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
  caption="📊 Dashboard Analytics - Performance Tracking"
  isAgencyContent={true}
  onPreview={() => alert('Open preview')}
  onPost={() => alert('Edit scheduled post')}
/>`}>
            <div className="max-w-sm mx-auto">
              <PostCard
                status="scheduled"
                platforms={['instagram']}
                contentTypes={['reel', 'story']}
                scheduledDate="Nov 13"
                scheduledTime="2:00 PM"
                variants={2}
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                caption="📊 Dashboard Analytics - Performance Tracking"
                isAgencyContent={true}
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Edit scheduled post')}
              />
            </div>
          </CodePreview>
        </SectionCard>

        {/* Published with Media Count */}
        <SectionCard>
          <SectionTitle>Published Post - Multiple Media</SectionTitle>

          <CodePreview code={`import PostCard from '@/components/ui/PostCard'

<PostCard
  status="published"
  platforms={['facebook', 'instagram']}
  contentTypes={['feed']}
  scheduledDate="Nov 18"
  scheduledTime="12:45 AM"
  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
  caption="Behind the Scenes 🎬"
  mediaCount={4}
  onPreview={() => alert('Open preview')}
  onPost={() => alert('Share post again')}
/>`}>
            <div className="max-w-sm mx-auto">
              <PostCard
                status="published"
                platforms={['facebook', 'instagram']}
                contentTypes={['feed']}
                scheduledDate="Nov 18"
                scheduledTime="12:45 AM"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                caption="Behind the Scenes 🎬"
                mediaCount={4}
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Share post again')}
              />
            </div>
          </CodePreview>
        </SectionCard>

        {/* Grid Layout Example */}
        <SectionCard>
          <SectionTitle>Grid Layout - Dashboard View</SectionTitle>

          <CodePreview code={`import PostCard from '@/components/ui/PostCard'

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  <PostCard status="draft" ... />
  <PostCard status="scheduled" ... />
  <PostCard status="published" ... />
</div>`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <PostCard
                status="draft"
                platforms={['instagram', 'facebook']}
                contentTypes={['feed']}
                scheduledDate="Today"
                scheduledTime="3:00 PM"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                caption="🚀 New to AI tools? Here are 5 tips to get you started! #AI #Tutorial"
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Publish post')}
              />

              <PostCard
                status="scheduled"
                platforms={['instagram']}
                contentTypes={['reel', 'story']}
                scheduledDate="Nov 13"
                scheduledTime="2:00 PM"
                variants={2}
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                caption="📊 Dashboard Analytics - Performance Tracking"
                isAgencyContent={true}
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Edit scheduled post')}
              />

              <PostCard
                status="published"
                platforms={['facebook', 'instagram']}
                contentTypes={['feed']}
                scheduledDate="Nov 18"
                scheduledTime="12:45 AM"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                caption="Behind the Scenes 🎬"
                mediaCount={4}
                onPreview={() => alert('Open preview')}
                onPost={() => alert('Share post again')}
              />
            </div>
          </CodePreview>
        </SectionCard>

        {/* Masonry Layout Example */}
        <SectionCard>
          <SectionTitle>Masonry Layout - Pinterest Style</SectionTitle>

          <CodePreview code={`import PostCardMasonry from '@/components/ui/PostCardMasonry'

<div className="columns-1 md:columns-3 gap-6">
  <PostCardMasonry status="draft" contentTypes={['feed']} ... />
  <PostCardMasonry status="scheduled" contentTypes={['reel']} ... />
  <PostCardMasonry status="published" contentTypes={['feed']} ... />
</div>`}>
            <div className="columns-1 md:columns-3 gap-6">
              <PostCardMasonry
                status="draft"
                platforms={['instagram', 'facebook']}
                contentTypes={['feed']}
                scheduledDate="Today"
                scheduledTime="3:00 PM"
                image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                caption="🚀 New to AI tools? Here are 5 tips for more productivity!"
                onPreview={() => alert('Preview')}
                onPost={() => alert('Post')}
              />

              <PostCardMasonry
                status="scheduled"
                platforms={['instagram']}
                contentTypes={['reel']}
                scheduledDate="Nov 13"
                scheduledTime="2:00 PM"
                variants={2}
                image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
                caption="📊 Tutorial: Social Media Strategy for Beginners"
                isAgencyContent={true}
                onPreview={() => alert('Preview')}
                onPost={() => alert('Edit')}
              />

              <PostCardMasonry
                status="published"
                platforms={['facebook', 'instagram']}
                contentTypes={['feed']}
                scheduledDate="Nov 18"
                scheduledTime="12:45 AM"
                image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                caption="Behind the Scenes - How we create our content 🎬"
                onPreview={() => alert('Preview')}
                onPost={() => alert('Share again')}
              />

              <PostCardMasonry
                status="scheduled"
                platforms={['instagram']}
                contentTypes={['reel', 'story']}
                scheduledDate="Tomorrow"
                scheduledTime="9:00 AM"
                image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                caption="Product Announcement! You haven't seen this before 🎉"
                isAgencyContent={true}
                onPreview={() => alert('Preview')}
                onPost={() => alert('Edit')}
              />

              <PostCardMasonry
                status="draft"
                platforms={['instagram']}
                contentTypes={['story']}
                scheduledDate="Nov 20"
                scheduledTime="6:30 PM"
                image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                caption="Quick Tip: How to boost your reach! ⚡"
                onPreview={() => alert('Preview')}
                onPost={() => alert('Post')}
              />

              <PostCardMasonry
                status="scheduled"
                platforms={['instagram']}
                contentTypes={['feed']}
                scheduledDate="Nov 21"
                scheduledTime="12:00 PM"
                variants={3}
                image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                caption="Big update coming! Now available on all channels 🚀"
                mediaCount={6}
                onPreview={() => alert('Preview')}
                onPost={() => alert('Edit')}
              />
            </div>
          </CodePreview>
        </SectionCard>

        {/* Interactive View Toggle Demo */}
        <SectionCard>
          <SectionTitle>Interactive Demo - Switch Between Layouts</SectionTitle>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <h5 className="font-semibold text-foreground">Choose Layout Style:</h5>
              <div className="flex gap-2">
                <Badge
                  variant={viewMode === 'grid' ? 'filter-purple' : 'filter'}
                  onClick={() => setViewMode('grid')}
                  className="cursor-pointer"
                >
                  <Grid3x3 className="w-3 h-3 mr-1" />
                  Grid Layout
                </Badge>
                <Badge
                  variant={viewMode === 'masonry' ? 'filter-purple' : 'filter'}
                  onClick={() => setViewMode('masonry')}
                  className="cursor-pointer"
                >
                  <LayoutGrid className="w-3 h-3 mr-1" />
                  Masonry Layout
                </Badge>
              </div>
            </div>

            {viewMode === 'grid' && (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <PostCard
                  status="draft"
                  platforms={['instagram', 'facebook']}
                  contentTypes={['feed']}
                  scheduledDate="Today"
                  scheduledTime="3:00 PM"
                  image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=800&q=80"
                  caption="🚀 New to AI tools? Here are 5 tips to get you started! #AI #Tutorial"
                  onPreview={() => alert('Open preview')}
                  onPost={() => alert('Publish post')}
                />

                <PostCard
                  status="scheduled"
                  platforms={['instagram']}
                  contentTypes={['reel', 'story']}
                  scheduledDate="Nov 13"
                  scheduledTime="2:00 PM"
                  variants={2}
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80"
                  caption="📊 Dashboard Analytics - Performance Tracking"
                  isAgencyContent={true}
                  onPreview={() => alert('Open preview')}
                  onPost={() => alert('Edit scheduled post')}
                />

                <PostCard
                  status="published"
                  platforms={['facebook', 'instagram']}
                  contentTypes={['feed']}
                  scheduledDate="Nov 18"
                  scheduledTime="12:45 AM"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  caption="Behind the Scenes 🎬"
                  mediaCount={4}
                  onPreview={() => alert('Open preview')}
                  onPost={() => alert('Share post again')}
                />
              </div>
            )}

            {viewMode === 'masonry' && (
              <div className="columns-1 md:columns-3 gap-6">
                <PostCardMasonry
                  status="draft"
                  platforms={['instagram', 'facebook']}
                  contentTypes={['feed']}
                  scheduledDate="Today"
                  scheduledTime="3:00 PM"
                  image="https://images.unsplash.com/photo-1677442136019-21780ecad995?w=600&q=80"
                  caption="🚀 New to AI tools? Here are 5 tips for more productivity!"
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Post')}
                />

                <PostCardMasonry
                  status="scheduled"
                  platforms={['instagram']}
                  contentTypes={['reel']}
                  scheduledDate="Nov 13"
                  scheduledTime="2:00 PM"
                  variants={2}
                  image="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&q=80"
                  caption="📊 Tutorial: Social Media Strategy for Beginners"
                  isAgencyContent={true}
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Edit')}
                />

                <PostCardMasonry
                  status="published"
                  platforms={['facebook', 'instagram']}
                  contentTypes={['feed']}
                  scheduledDate="Nov 18"
                  scheduledTime="12:45 AM"
                  image="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&q=80"
                  caption="Behind the Scenes - How we create our content 🎬"
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Share again')}
                />

                <PostCardMasonry
                  status="scheduled"
                  platforms={['instagram']}
                  contentTypes={['reel', 'story']}
                  scheduledDate="Tomorrow"
                  scheduledTime="9:00 AM"
                  image="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=600&q=80"
                  caption="Product Announcement! 🎉"
                  isAgencyContent={true}
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Edit')}
                />

                <PostCardMasonry
                  status="draft"
                  platforms={['instagram']}
                  contentTypes={['story']}
                  scheduledDate="Nov 20"
                  scheduledTime="6:30 PM"
                  image="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&q=80"
                  caption="Quick Tip: How to boost your reach! ⚡"
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Post')}
                />

                <PostCardMasonry
                  status="scheduled"
                  platforms={['instagram']}
                  contentTypes={['feed']}
                  scheduledDate="Nov 21"
                  scheduledTime="12:00 PM"
                  variants={3}
                  image="https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&q=80"
                  caption="Big update coming! 🚀"
                  mediaCount={6}
                  onPreview={() => alert('Preview')}
                  onPost={() => alert('Edit')}
                />
              </div>
            )}
          </div>
        </SectionCard>

        {/* Status Variants */}
        <SectionCard>
          <SectionTitle>Status Variants</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-bold text-foreground">DRAFT</span>
              </div>
              <p className="text-sm text-muted-foreground">Post is being created, not yet ready</p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-bold text-foreground">SCHEDULED</span>
              </div>
              <p className="text-sm text-muted-foreground">Post is scheduled for future publishing</p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-bold text-foreground">PUBLISHED</span>
              </div>
              <p className="text-sm text-muted-foreground">Post has been published successfully</p>
            </div>
          </div>
        </SectionCard>

        {/* Component Breakdown */}
        <Card variant="glass" className="p-8">
          <SectionTitle>Design System Components Used</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">Card Component</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Base: <code className="bg-muted px-2 py-0.5 rounded text-xs">Card</code> with <code className="bg-muted px-2 py-0.5 rounded text-xs">elevated</code></p>
                <p>• Hover: <code className="bg-muted px-2 py-0.5 rounded text-xs">hover:shadow-xl</code></p>
                <p>• Transition: <code className="bg-muted px-2 py-0.5 rounded text-xs">duration-300</code></p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">Badge Components</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Status: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="coral|green"</code></p>
                <p>• Type: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="soft-pink"</code></p>
                <p>• Agency: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="gradient"</code></p>
                <p>• Schedule: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="soft-purple"</code></p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">Button Components</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• View: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="outline"</code></p>
                <p>• Schedule: <code className="bg-muted px-2 py-0.5 rounded text-xs">variant="primary"</code></p>
                <p>• Icons: <code className="bg-muted px-2 py-0.5 rounded text-xs">leftIcon</code> prop</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-foreground">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>→ <strong>Grid Layout:</strong> Use for structured dashboards with consistent card sizes</p>
            <p>→ <strong>Masonry Layout:</strong> Use for dynamic feeds with varying content types (Feed/Reel/Story)</p>
            <p>→ <strong>Status Colors:</strong> Orange for Draft, Blue for Scheduled, Green for Published</p>
            <p>→ <strong>Agency Badge:</strong> Add `isAgencyContent={true}` for gradient premium badge</p>
            <p>→ <strong>Platform Icons:</strong> Automatically shown based on `platforms` array</p>
            <p>→ <strong>Content Types:</strong> Determines aspect ratio in masonry layout</p>
          </div>
        </Card>
      </div>
    </div>
  )
}
