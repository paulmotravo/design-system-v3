import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Play, Edit, Calendar, Sparkles } from 'lucide-react'

export default function PostCardMasonry({ 
  status = 'draft', 
  platforms = ['instagram'],
  contentTypes = ['feed'],
  image,
  caption,
  scheduledDate,
  scheduledTime,
  variants,
  isAgencyContent = false, // NEW: Marks agency-provided content
  mediaCount = 1, // NEW: Number of media items in carousel
  onPreview,
  onPost
}) {
  // Status Badge Variants
  const statusConfig = {
    draft: { variant: 'coral', text: 'DRAFT' },
    scheduled: { variant: 'purple', text: 'SCHEDULED' },
    published: { variant: 'green', text: 'PUBLISHED' }
  }

  // Platform Icons
  const platformIcons = {
    instagram: <Instagram className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    twitter: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>,
    linkedin: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/></svg>
  }

  // Content Type Badges & Aspect Ratios
  const typeConfig = {
    feed: { icon: '📸', text: 'Feed', aspect: 'aspect-[4/5]', badgeVariant: 'soft-blue' },
    reel: { icon: '🎬', text: 'Reel', aspect: 'aspect-[9/16]', badgeVariant: 'soft-pink' },
    story: { icon: '⚡', text: 'Story', aspect: 'aspect-[9/16]', badgeVariant: 'soft-coral' }
  }

  // Determine aspect ratio based on content types
  const primaryType = contentTypes[0]
  const aspectRatio = typeConfig[primaryType]?.aspect || 'aspect-[4/5]'

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300 break-inside-avoid mb-6">
      {/* Image/Video Preview - NO bottom section, only image! */}
      <div className={`relative bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-700 dark:to-gray-800 overflow-hidden ${aspectRatio}`}>
        {image ? (
          <img src={image} alt="Post preview" className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-12 h-12 text-gray-400 dark:text-gray-500" />
          </div>
        )}
        
        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300" />
        
        {/* Carousel Navigation - Show if multiple media */}
        {mediaCount > 1 && (
          <>
            {/* Left Arrow - Always visible */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer transition-all shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            
            {/* Right Arrow - Always visible */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-sm cursor-pointer transition-all shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}
        
        {/* Top Section - Status & Platforms */}
        <div className="absolute top-3 left-3 right-3 flex items-start justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Badge variant={statusConfig[status].variant} className="w-fit">
              {statusConfig[status].text}
            </Badge>
            
            {/* Agency Content Badge - Gradient for special highlight */}
            {isAgencyContent && (
              <Badge variant="gradient" className="w-fit shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                Agency Content
              </Badge>
            )}
            
            {/* Content Types */}
            <div className="flex flex-wrap gap-1.5">
              {contentTypes.map(type => (
                <Badge key={type} variant={typeConfig[type]?.badgeVariant}>
                  {typeConfig[type]?.icon} {typeConfig[type]?.text}
                </Badge>
              ))}
            </div>
          </div>
          
          <div className="flex gap-1.5">
            {platforms.map(platform => (
              <div 
                key={platform}
                className="w-8 h-8 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 rounded-full flex items-center justify-center shadow-md"
              >
                {platformIcons[platform]}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Section - Date/Time & Variants */}
        <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between gap-2">
          {/* Date & Time - Always visible */}
          {(scheduledDate || scheduledTime) && (
            <Badge variant="soft-purple" className="shadow-lg">
              <Calendar className="w-3.5 h-3.5 mr-1.5" />
              <span className="font-bold">
                {scheduledDate}{scheduledTime && `, ${scheduledTime}`}
              </span>
            </Badge>
          )}

          {/* Variants - Always visible if exists */}
          {variants && variants > 1 && (
            <Badge variant="soft-purple" className="shadow-md">
              <span className="font-semibold">📋 {variants} Variants</span>
            </Badge>
          )}
        </div>

        {/* Caption & Action Buttons - Only on Hover */}
        <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-6">
          {/* Caption Preview */}
          {caption && (
            <p className="text-sm text-white font-medium mb-4 line-clamp-3 text-center max-w-md">
              {caption}
            </p>
          )}

          {/* Action Buttons */}
          <div className="flex gap-3">
            <Button 
              variant="secondary-inverse"
              size="lg"
              leftIcon={<Edit className="w-4 h-4" />}
              onClick={onPreview}
            >
              View
            </Button>
            <Button 
              variant="primary" 
              size="lg"
              leftIcon={<Calendar className="w-4 h-4" />}
              onClick={onPost}
            >
              Schedule
            </Button>
          </div>
        </div>
      </div>
      {/* NO content section below - everything is in the image! */}
    </Card>
  )
}