import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Separator } from '@/components/ui/separator'
import { Heart, MessageCircle, Share2, Bookmark, MoreHorizontal, Send } from 'lucide-react'
import { useState } from 'react'

export default function ContentPreviewShowcase() {
  const [selectedPlatform, setSelectedPlatform] = useState('instagram')
  const [selectedFormat, setSelectedFormat] = useState('feed')

  // Sample content
  const sampleContent = {
    author: "Paul Kissel",
    authorInitials: "PK",
    text: "Frischer Look für den Herbst! ✂️💇",
    hashtags: "#friseur #hairstyle #neulook",
    image: "https://images.unsplash.com/photo-1605497788044-5a32c7078486?w=800&auto=format&fit=crop"
  }

  return (
    <div className="mb-20">
      <div className="flex items-center justify-center">
        <div className="w-full max-w-md space-y-6">
          {/* Platform Selection */}
          <Card variant="elevated" className="p-6">
            <div className="space-y-4">
              <div className="flex flex-wrap gap-3">
                <Button
                  variant={selectedPlatform === 'instagram' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedPlatform('instagram')
                    setSelectedFormat('feed')
                  }}
                  className="gap-2"
                >
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </div>
                  Instagram
                </Button>

                <Button
                  variant={selectedPlatform === 'facebook' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedPlatform('facebook')
                    setSelectedFormat('post')
                  }}
                  className="gap-2"
                >
                  <div className="w-5 h-5 rounded-md bg-[#1877F2] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                  Facebook
                </Button>

                <Button
                  variant={selectedPlatform === 'twitter' ? 'primary' : 'outline'}
                  size="sm"
                  onClick={() => {
                    setSelectedPlatform('twitter')
                    setSelectedFormat('tweet')
                  }}
                  className="gap-2"
                >
                  <div className="w-5 h-5 rounded-md bg-gradient-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center">
                    <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                  Twitter
                </Button>
              </div>

              {/* Format Selection */}
              {selectedPlatform === 'instagram' && (
                <Tabs value={selectedFormat} onValueChange={setSelectedFormat}>
                  <TabsList className="w-full">
                    <TabsTrigger value="feed" className="flex-1">Feed Post</TabsTrigger>
                    <TabsTrigger value="story" className="flex-1">Story</TabsTrigger>
                    <TabsTrigger value="reel" className="flex-1">Reel</TabsTrigger>
                  </TabsList>
                </Tabs>
              )}

              {selectedPlatform === 'facebook' && (
                <Tabs value={selectedFormat} onValueChange={setSelectedFormat}>
                  <TabsList className="w-full">
                    <TabsTrigger value="post" className="flex-1">Post</TabsTrigger>
                    <TabsTrigger value="story" className="flex-1">Story</TabsTrigger>
                  </TabsList>
                </Tabs>
              )}
            </div>
          </Card>

          {/* iPhone Mockup */}
          <Card variant="elevated" className="p-6 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
            <div className="flex justify-center">
              {selectedPlatform === 'instagram' && selectedFormat === 'feed' && (
                <InstagramFeedMockup content={sampleContent} />
              )}
              {selectedPlatform === 'instagram' && selectedFormat === 'story' && (
                <InstagramStoryMockup content={sampleContent} />
              )}
              {selectedPlatform === 'instagram' && selectedFormat === 'reel' && (
                <InstagramReelMockup content={sampleContent} />
              )}
              {selectedPlatform === 'facebook' && selectedFormat === 'post' && (
                <FacebookPostMockup content={sampleContent} />
              )}
              {selectedPlatform === 'facebook' && selectedFormat === 'story' && (
                <FacebookStoryMockup content={sampleContent} />
              )}
              {selectedPlatform === 'twitter' && (
                <TwitterMockup content={sampleContent} />
              )}
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}

// iPhone Frame Component (9:19.5 aspect ratio = 1080x1920)
function IPhoneFrame({ children }) {
  return (
    <div className="relative" style={{ width: '360px' }}>
      {/* Phone Frame - 1080x1920 scaled to 360x640 */}
      <Card className="relative bg-gray-900 dark:bg-black rounded-[3.5rem] p-3 shadow-2xl border-8 border-gray-800 dark:border-gray-950" style={{ 
        width: '360px',
        height: '640px'
      }}>
        {/* Dynamic Island */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-8 bg-gray-900 dark:bg-black rounded-b-3xl z-10"></div>
        
        {/* Screen Content */}
        <div className="relative bg-white dark:bg-gray-900 rounded-[2.75rem] overflow-hidden h-full">
          {children}
        </div>
      </Card>
    </div>
  )
}

// Instagram Feed Post Mockup
function InstagramFeedMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="h-full flex flex-col">
        {/* Instagram Header */}
        <Card className="p-4 border-b border-gray-200 dark:border-gray-800 flex-shrink-0 rounded-none">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold text-sm">
                {content.authorInitials}
              </div>
              <div className="font-semibold text-sm text-gray-900 dark:text-white">{content.author}</div>
            </div>
            <Button variant="ghost" size="icon" className="w-6 h-6">
              <MoreHorizontal className="w-6 h-6 text-gray-900 dark:text-white" />
            </Button>
          </div>
        </Card>

        {/* Image */}
        <div className="flex-1 bg-gray-200 dark:bg-gray-800 relative">
          <img src={content.image} alt="Post" className="w-full h-full object-cover" />
        </div>

        {/* Actions & Caption */}
        <Card className="p-4 space-y-3 flex-shrink-0 rounded-none border-0">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <Button variant="ghost" size="icon" className="w-7 h-7 p-0">
                <Heart className="w-7 h-7 text-gray-900 dark:text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 p-0">
                <MessageCircle className="w-7 h-7 text-gray-900 dark:text-white" />
              </Button>
              <Button variant="ghost" size="icon" className="w-7 h-7 p-0">
                <Send className="w-7 h-7 text-gray-900 dark:text-white" />
              </Button>
            </div>
            <Button variant="ghost" size="icon" className="w-7 h-7 p-0">
              <Bookmark className="w-7 h-7 text-gray-900 dark:text-white" />
            </Button>
          </div>

          <div className="space-y-1">
            <p className="text-sm">
              <span className="font-semibold text-gray-900 dark:text-white">{content.author}</span>{' '}
              <span className="text-gray-900 dark:text-white">{content.text}</span>
            </p>
            <p className="text-sm text-viralspoon-purple dark:text-purple-400">{content.hashtags}</p>
          </div>
        </Card>
      </div>
    </IPhoneFrame>
  )
}

// Instagram Story Mockup
function InstagramStoryMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="relative h-full bg-black">
        <img src={content.image} alt="Story" className="w-full h-full object-cover" />
        
        {/* Story UI Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent">
          {/* Top Bar */}
          <div className="p-4 space-y-2">
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold text-xs">
                {content.authorInitials}
              </div>
              <span className="text-white font-semibold text-sm">{content.author}</span>
              <Badge variant="secondary" className="h-5 text-xs bg-white/20 text-white border-0 backdrop-blur-sm">
                2h
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}

// Instagram Reel Mockup
function InstagramReelMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="relative h-full bg-black">
        <img src={content.image} alt="Reel" className="w-full h-full object-cover" />
        
        {/* Reel UI Overlay */}
        <div className="absolute inset-0">
          {/* Right Side Actions */}
          <div className="absolute right-4 bottom-24 space-y-6">
            <div className="flex flex-col items-center gap-1">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-0 hover:bg-white/20">
                <Heart className="w-7 h-7 text-white" />
              </Button>
              <Badge variant="secondary" className="bg-transparent text-white text-xs font-semibold border-0">
                1.2K
              </Badge>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-0 hover:bg-white/20">
                <MessageCircle className="w-7 h-7 text-white" />
              </Button>
              <Badge variant="secondary" className="bg-transparent text-white text-xs font-semibold border-0">
                89
              </Badge>
            </div>
            <div className="flex flex-col items-center gap-1">
              <Button variant="ghost" size="icon" className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border-0 hover:bg-white/20">
                <Send className="w-7 h-7 text-white" />
              </Button>
            </div>
          </div>

          {/* Bottom Info */}
          <div className="absolute bottom-4 left-4 right-20 space-y-2">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold text-xs">
                {content.authorInitials}
              </div>
              <span className="text-white font-semibold text-sm">{content.author}</span>
              <Button variant="outline" size="sm" className="h-6 text-xs border-white text-white hover:bg-white/20 hover:text-white">
                Follow
              </Button>
            </div>
            <p className="text-white text-sm font-medium">{content.text}</p>
            <p className="text-purple-300 text-sm">{content.hashtags}</p>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}

// Facebook Post Mockup
function FacebookPostMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="h-full flex flex-col bg-white dark:bg-[#18191a]">
        <Card className="p-4 space-y-3 flex-shrink-0 rounded-none border-0">
          {/* Header */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold">
                {content.authorInitials}
              </div>
              <div>
                <div className="font-semibold text-sm text-gray-900 dark:text-white">{content.author}</div>
                <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                  <span>2h</span>
                  <span>·</span>
                  <span>🌍</span>
                </div>
              </div>
            </div>
            <Button variant="ghost" size="icon">
              <MoreHorizontal className="w-5 h-5 text-gray-600 dark:text-gray-400" />
            </Button>
          </div>

          {/* Content */}
          <div className="space-y-2">
            <p className="text-sm text-gray-900 dark:text-white">{content.text}</p>
            <p className="text-sm text-[#1877F2]">{content.hashtags}</p>
          </div>
        </Card>

        {/* Image */}
        <div className="flex-1 bg-gray-200 dark:bg-gray-800">
          <img src={content.image} alt="Post" className="w-full h-full object-cover" />
        </div>

        {/* Actions */}
        <Card className="p-4 border-t border-gray-200 dark:border-gray-700 flex-shrink-0 rounded-none border-x-0 border-b-0">
          <div className="flex items-center justify-around">
            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Heart className="w-5 h-5" />
              <span className="text-sm font-medium">Like</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <MessageCircle className="w-5 h-5" />
              <span className="text-sm font-medium">Comment</span>
            </Button>
            <Button variant="ghost" size="sm" className="flex-1 gap-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800">
              <Share2 className="w-5 h-5" />
              <span className="text-sm font-medium">Share</span>
            </Button>
          </div>
        </Card>
      </div>
    </IPhoneFrame>
  )
}

// Facebook Story Mockup
function FacebookStoryMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="relative h-full bg-black">
        <img src={content.image} alt="Story" className="w-full h-full object-cover" />
        
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-transparent">
          <div className="p-4 space-y-2">
            <div className="h-1 bg-white/30 rounded-full overflow-hidden">
              <div className="h-full w-1/2 bg-white rounded-full"></div>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold text-xs">
                {content.authorInitials}
              </div>
              <span className="text-white font-semibold text-sm">{content.author}</span>
              <Badge variant="secondary" className="h-5 text-xs bg-white/20 text-white border-0 backdrop-blur-sm">
                2h
              </Badge>
            </div>
          </div>
        </div>
      </div>
    </IPhoneFrame>
  )
}

// Twitter Mockup
function TwitterMockup({ content }) {
  return (
    <IPhoneFrame>
      <div className="h-full overflow-y-auto bg-white dark:bg-black">
        <Card className="p-4 space-y-3 border-b border-gray-200 dark:border-gray-800 rounded-none border-x-0 border-t-0">
          <div className="flex gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral flex items-center justify-center text-white font-bold flex-shrink-0">
              {content.authorInitials}
            </div>
            <div className="flex-1 space-y-2">
              <div className="flex items-center gap-2">
                <span className="font-bold text-sm text-gray-900 dark:text-white">{content.author}</span>
                <Badge variant="secondary" className="text-xs">
                  @paulkissel
                </Badge>
                <span className="text-sm text-gray-500 dark:text-gray-400">· 2h</span>
              </div>
              <p className="text-sm text-gray-900 dark:text-white">{content.text}</p>
              <p className="text-sm text-[#1DA1F2]">{content.hashtags}</p>
              
              <Card className="mt-3 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800">
                <img src={content.image} alt="Tweet" className="w-full aspect-[16/9] object-cover" />
              </Card>

              <Separator className="my-3" />

              <div className="flex items-center justify-between max-w-md">
                <Button variant="ghost" size="sm" className="gap-2 text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
                  <MessageCircle className="w-4 h-4" />
                  <span className="text-xs font-medium">42</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-500 dark:text-gray-400 hover:text-green-500 hover:bg-green-500/10">
                  <Share2 className="w-4 h-4" />
                  <span className="text-xs font-medium">18</span>
                </Button>
                <Button variant="ghost" size="sm" className="gap-2 text-gray-500 dark:text-gray-400 hover:text-red-500 hover:bg-red-500/10">
                  <Heart className="w-4 h-4" />
                  <span className="text-xs font-medium">124</span>
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-500 dark:text-gray-400 hover:text-[#1DA1F2] hover:bg-[#1DA1F2]/10">
                  <Bookmark className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </IPhoneFrame>
  )
}