import { useState } from 'react'
import PostCard from '@/components/ui/PostCard'
import PostCardMasonry from '@/components/ui/PostCardMasonry'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { AlertCircle, Grid3x3, LayoutGrid } from 'lucide-react'

export default function PostCardsShowcase() {
  const [viewMode, setViewMode] = useState('grid') // 'grid' or 'masonry'
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Post Cards</h3>
        <p className="text-gray-600 dark:text-gray-400">Social Media Post Components - Combining multiple Design System elements</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Complex UI Pattern - Two Layout Variants</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Grid Layout:</strong> Structured dashboard view with equal card heights</p>
                <p>→ <strong>Masonry Layout:</strong> Pinterest-style with variable heights, more dynamic</p>
                <p>→ Combines: <strong>Card</strong> + <strong>Badges</strong> + <strong>Buttons</strong></p>
                <p>→ Real-world example: Social Media Dashboard</p>
              </div>
            </div>
          </div>
        </Card>

        {/* View Toggle */}
        <Card variant="elevated" className="p-6">
          <div className="flex items-center justify-between">
            <h4 className="font-semibold text-gray-900 dark:text-white">Choose Layout Style:</h4>
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
        </Card>

        {/* Grid Layout */}
        {viewMode === 'grid' && (
          <>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Grid Layout - Structured Dashboard</h4>
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
          </>
        )}

        {/* Masonry Layout */}
        {viewMode === 'masonry' && (
          <>
            <h4 className="text-xl font-bold text-gray-900 dark:text-white">Masonry Layout - Dynamic Pinterest-Style</h4>
            <div className="columns-1 md:columns-3 gap-6">
              {/* Feed - 4:5 */}
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

              {/* Reel - 9:16 - WITH AGENCY BADGE */}
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

              {/* Feed - 4:5 */}
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

              {/* Reel + Story - 9:16 - WITH AGENCY BADGE */}
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

              {/* Story - 9:16 */}
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

              {/* Feed - 4:5 */}
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

              {/* Reel - 9:16 */}
              <PostCardMasonry
                status="draft"
                platforms={['instagram']}
                contentTypes={['reel']}
                scheduledDate="Nov 22"
                scheduledTime="4:00 PM"
                image="https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&q=80"
                caption="New Tutorial Video: Step by Step Guide 📹"
                onPreview={() => alert('Preview')}
                onPost={() => alert('Post')}
              />

              {/* Feed - 4:5 */}
              <PostCardMasonry
                status="published"
                platforms={['facebook']}
                contentTypes={['feed']}
                scheduledDate="Nov 23"
                scheduledTime="10:30 AM"
                image="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80"
                caption="Customer Success Story - Impressive Results 🎯"
                onPreview={() => alert('Preview')}
                onPost={() => alert('Share')}
              />
            </div>
          </>
        )}

        {/* Component Breakdown */}
        <Card variant="glass" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Design System Components Used
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Card Component</h5>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Base: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">Card</code> with <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">elevated</code></p>
                <p>• Hover: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">hover:shadow-xl</code></p>
                <p>• Transition: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">duration-300</code></p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Badge Components</h5>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• Status: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="coral|green"</code></p>
                <p>• Type: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="soft-pink"</code></p>
                <p>• Agency: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="gradient"</code></p>
                <p>• Schedule: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="soft-purple"</code></p>
              </div>
            </div>

            <div className="bg-white/50 dark:bg-gray-800/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-gray-900 dark:text-white">Button Components</h5>
              <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                <p>• View: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="outline"</code></p>
                <p>• Schedule: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">variant="primary"</code></p>
                <p>• Icons: <code className="bg-white dark:bg-gray-700 px-2 py-0.5 rounded text-xs">leftIcon</code> prop</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Usage Example */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            How to Use
          </h4>
          
          <div className="bg-gray-900 dark:bg-gray-950 rounded-xl p-6 overflow-x-auto">
            <pre className="text-sm text-gray-100 dark:text-gray-200"><code>{`import PostCard from '@/components/ui/PostCard'
import PostCardMasonry from '@/components/ui/PostCardMasonry'

// Grid Layout
<PostCard
  status="draft"              // 'draft' | 'scheduled' | 'published'
  platforms={['instagram', 'facebook']}
  contentTypes={['reel']}     // ['feed', 'reel', 'story']
  caption="Your post caption..."
  scheduledDate="Nov 13"
  scheduledTime="2:00 PM"
  variants={2}
  isAgencyContent={true}      // Shows gradient badge
  onPreview={() => {}}        // View button
  onPost={() => {}}           // Schedule button
/>

// Masonry Layout
<PostCardMasonry
  status="scheduled"
  platforms={['instagram']}
  contentTypes={['reel', 'story']}
  caption="Your post caption..."
  scheduledDate="Tomorrow"
  scheduledTime="9:00 AM"
  isAgencyContent={true}
  onPreview={() => {}}
  onPost={() => {}}
/>`}</code></pre>
          </div>
        </Card>

        {/* Status Variants */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Status Variants
          </h4>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border-2 border-orange-200 dark:border-orange-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-orange-500 dark:bg-orange-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">DRAFT</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Post is being created, not yet ready</p>
            </div>

            <div className="bg-blue-50 dark:bg-blue-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 dark:bg-blue-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">SCHEDULED</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Post is scheduled for future publishing</p>
            </div>

            <div className="bg-emerald-50 dark:bg-emerald-900/20 rounded-xl p-6 border-2 border-emerald-200 dark:border-emerald-800">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 dark:bg-emerald-400 rounded-full"></div>
                <span className="font-bold text-gray-900 dark:text-white">PUBLISHED</span>
              </div>
              <p className="text-sm text-gray-600 dark:text-gray-400">Post has been published successfully</p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}