import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Instagram, Facebook, Play, Edit, Calendar, Sparkles } from 'lucide-react'

export default function PostCard({
  status = 'draft',
  platforms = ['instagram'],
  contentTypes = ['feed'], // ['feed', 'reel', 'story']
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
    draft: { variant: 'secondary', text: 'DRAFT' },
    scheduled: { variant: 'primary', text: 'SCHEDULED' },
    published: { variant: 'success', text: 'PUBLISHED' }
  }

  // Platform Icons
  const platformIcons = {
    instagram: <Instagram className="w-4 h-4" />,
    facebook: <Facebook className="w-4 h-4" />,
    twitter: <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
  }

  // Content Type Config
  const typeConfig = {
    feed: { icon: '📸', text: 'Feed', badgeVariant: 'soft-info' },
    reel: { icon: '🎬', text: 'Reel', badgeVariant: 'soft-primary' },
    story: { icon: '⚡', text: 'Story', badgeVariant: 'soft-secondary' }
  }

  // Grid View: ALWAYS 4:5 for consistency
  const aspectRatio = 'aspect-4/5'

  return (
    <Card className="overflow-hidden group hover:shadow-xl transition-all duration-300">
      {/* Image/Video Preview - Always 4:5 in Grid */}
      <div className={`relative bg-linear-to-br from-muted to-muted/80 overflow-hidden ${aspectRatio}`}>
        {image ? (
          <img src={image} alt="Post preview" className="w-full h-full object-cover" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <Play className="w-16 h-16 text-muted-foreground" />
          </div>
        )}

        {/* Overlay on Hover */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300" />

        {/* Carousel Navigation - Show if multiple media */}
        {mediaCount > 1 && (
          <>
            {/* Left Arrow - Always visible */}
            <button className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-xs cursor-pointer transition-all shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M15 19l-7-7 7-7" />
              </svg>
            </button>

            {/* Right Arrow - Always visible */}
            <button className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 bg-black/60 hover:bg-black/80 rounded-full flex items-center justify-center backdrop-blur-xs cursor-pointer transition-all shadow-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          </>
        )}

        {/* Top Badges */}
        <div className="absolute top-4 left-4 right-4 flex items-start justify-between gap-2">
          <div className="flex flex-col gap-2">
            <Badge variant={statusConfig[status].variant}>
              {statusConfig[status].text}
            </Badge>

            {/* Agency Content Badge - Gradient for special highlight */}
            {isAgencyContent && (
              <Badge variant="gradient" className="shadow-lg">
                <Sparkles className="w-3 h-3 mr-1" />
                Agency Content
              </Badge>
            )}

            {/* Content Types - Show all if multiple */}
            <div className="flex flex-wrap gap-1.5">
              {contentTypes.map(contentType => (
                <Badge key={contentType} variant={typeConfig[contentType]?.badgeVariant}>
                  {typeConfig[contentType]?.icon} {typeConfig[contentType]?.text}
                </Badge>
              ))}
            </div>
          </div>

          <div className="flex gap-2">
            {platforms.map(platform => (
              <div
                key={platform}
                className="w-8 h-8 bg-background text-foreground rounded-full flex items-center justify-center shadow-md"
              >
                {platformIcons[platform]}
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Info */}
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between gap-2">
          {/* Scheduled Date/Time - Always visible */}
          {(scheduledDate || scheduledTime) && (
            <Badge variant="soft-primary" className="shadow-lg">
              <Calendar className="w-4 h-4 mr-1.5" />
              <span className="font-bold">
                {scheduledDate}{scheduledTime && `, ${scheduledTime}`}
              </span>
            </Badge>
          )}

          {/* Variants Indicator - Always visible if exists */}
          {variants && variants > 1 && (
            <Badge variant="soft-primary" className="shadow-md">
              <span className="font-semibold">📋 {variants} Variants</span>
            </Badge>
          )}
        </div>
      </div>

      {/* Content Section */}
      <div className="p-6">
        {/* Caption Preview */}
        {caption && (
          <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
            {caption}
          </p>
        )}

        {/* Action Buttons */}
        <div className="flex gap-3">
          <Button
            variant="outline"
            className="flex-1"
            leftIcon={<Edit className="w-5 h-5" />}
            onClick={onPreview}
          >
            View
          </Button>
          <Button
            variant="primary"
            className="flex-1"
            leftIcon={<Calendar className="w-5 h-5" />}
            onClick={onPost}
          >
            Schedule
          </Button>
        </div>
      </div>
    </Card>
  )
}
