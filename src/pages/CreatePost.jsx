import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Separator } from '@/components/ui/separator'
import { 
  Calendar, 
  Sparkles, 
  Image as ImageIcon, 
  CalendarIcon, 
  Settings, 
  Send, 
  CheckCircle, 
  AlertTriangle
} from 'lucide-react'
import ContentPreviewShowcase from '@/components/showcase/ContentPreviewShowcase'
import { MediaUpload } from '@/components/showcase/MediaShowcase'
import { ContentEditor } from '@/components/showcase/ContentEditorShowcase'
import PublishingCard from '@/components/showcase/PublishingCard'
import ChannelCustomizationDialog from '@/components/showcase/ChannelCustomizationDialog'
import ChannelMediaCustomizationDialog from '@/components/showcase/ChannelMediaCustomizationDialog'
import ChannelSchedulingDialog from '@/components/showcase/ChannelSchedulingDialog'

export default function CreatePost() {
  // ============ STATE MANAGEMENT ============
  const [channelMode, setChannelMode] = useState('all')
  const [selectedChannels, setSelectedChannels] = useState({
    instagram_feed: true,
    instagram_story: true,
    facebook_post: true,
    facebook_story: true,
    twitter: false,
    linkedin: false
  })
  const [textVersions, setTextVersions] = useState([''])
  const [mediaFiles, setMediaFiles] = useState([])
  const [customizationOpen, setCustomizationOpen] = useState(false)
  const [mediaCustomizationOpen, setMediaCustomizationOpen] = useState(false)
  const [schedulingOpen, setSchedulingOpen] = useState(false)
  const [publishConfirmOpen, setPublishConfirmOpen] = useState(false)
  const [successNotification, setSuccessNotification] = useState({ show: false, type: '', message: '' })
  const [quickSchedule, setQuickSchedule] = useState({ date: '', time: '' })
  const [hasCustomSchedule, setHasCustomSchedule] = useState(false)
  const [scheduleRange, setScheduleRange] = useState({ start: '', end: '' })

  // ============ TEXT CUSTOMIZATION STATE ============
  const [channelTexts, setChannelTexts] = useState({
    instagram: {
      text: 'Fresh look for autumn! ✂️💇',
      hashtags: '#hairstyle #autumn #newlook',
      cta: ''
    },
    facebook: {
      text: 'Fresh look for autumn! ✂️💇',
      hashtags: '#hairstyle #autumn #newlook',
      cta: '',
      link: ''
    },
    twitter: {
      text: 'Fresh look for autumn! ✂️💇',
      hashtags: '#hairstyle #autumn #newlook',
      cta: ''
    },
    linkedin: {
      text: 'Fresh look for autumn! ✂️💇',
      hashtags: '#hairstyle #autumn #newlook',
      cta: '',
      link: ''
    }
  })

  // ============ MEDIA CUSTOMIZATION STATE ============
  const [selectedPlatforms, setSelectedPlatforms] = useState(['all'])
  const [globalFitMode, setGlobalFitMode] = useState('cover')
  const [globalBlur, setGlobalBlur] = useState(0)
  const [channelMedia, setChannelMedia] = useState({
    instagram_post: {
      available: true,
      enabled: true,
      platform: 'instagram',
      format: 'post',
      aspectRatio: '4:5',
      dimensions: '1080x1350',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=750&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    instagram_story: {
      available: true,
      enabled: true,
      platform: 'instagram',
      format: 'story',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: true,
      fitMode: 'contain',
      blur: 10
    },
    facebook_post: {
      available: true,
      enabled: true,
      platform: 'facebook',
      format: 'post',
      aspectRatio: '1.91:1',
      dimensions: '1200x630',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=400&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    twitter_post: {
      available: true,
      enabled: true,
      platform: 'twitter',
      format: 'post',
      aspectRatio: '16:9',
      dimensions: '1200x675',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=450&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    linkedin_post: {
      available: true,
      enabled: true,
      platform: 'linkedin',
      format: 'post',
      aspectRatio: '1.91:1',
      dimensions: '1200x627',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=800&h=400&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    }
  })

  // ============ SCHEDULING STATE ============
  const [channelSchedules, setChannelSchedules] = useState({
    facebook: {
      available: true,
      enabled: true,
      date: '2025-09-04',
      time: '15:00'
    },
    twitter: {
      available: true,
      enabled: true,
      date: '2025-09-04',
      time: '09:15'
    },
    linkedin: {
      available: false,
      enabled: false,
      date: '2025-09-05',
      time: '08:00'
    },
    instagram_feed: {
      available: true,
      enabled: true,
      date: '2025-09-04',
      time: '18:30'
    },
    instagram_story: {
      available: false,
      enabled: false,
      date: '2025-09-04',
      time: '18:30'
    }
  })

  // ============ CHANNEL CONFIG ============
  const channelConfig = {
    instagram_feed: {
      name: "Instagram",
      type: "Feed",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
    },
    instagram_story: {
      name: "Instagram",
      type: "Story",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500"
    },
    facebook_post: {
      name: "Facebook",
      type: "Post",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: "bg-[#1877F2]"
    },
    facebook_story: {
      name: "Facebook",
      type: "Story",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      bgColor: "bg-[#1877F2]"
    },
    twitter: {
      name: "Twitter",
      type: "Tweet",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      bgColor: "bg-gradient-to-br from-[#1DA1F2] to-[#0d8bd9]"
    },
    linkedin: {
      name: "LinkedIn",
      type: "Post",
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
        </svg>
      ),
      bgColor: "bg-[#0A66C2]"
    }
  }

  const platformLimits = {
    instagram: { name: 'Instagram', limit: 2200, icon: '📷' },
    facebook: { name: 'Facebook', limit: 63206, icon: '👍' },
    twitter: { name: 'Twitter', limit: 280, icon: '🐦' }
  }

  // ============ HELPER FUNCTIONS ============
  const toggleChannel = (channel) => {
    setSelectedChannels(prev => ({ ...prev, [channel]: !prev[channel] }))
  }

  const handleMediaChange = (files) => {
    setMediaFiles(files)
  }

  const handleMediaCustomizeClick = () => {
    setMediaCustomizationOpen(true)
  }

  const handleTextChange = (versions, currentIndex) => {
    setTextVersions(versions)
  }

  const handleTextCustomizeClick = () => {
    setCustomizationOpen(true)
  }

  const getActiveChannels = () => {
    return Object.keys(selectedChannels).filter(key => selectedChannels[key])
  }

  const handlePublishNow = () => {
    setPublishConfirmOpen(false)
    showSuccessNotification('published', 'Post published successfully!')
  }

  const handleSchedulePost = () => {
    setPublishConfirmOpen(false)
    if (hasCustomSchedule) {
      showSuccessNotification('scheduled', 'Post scheduled with custom times for each channel')
    } else if (quickSchedule.date && quickSchedule.time) {
      showSuccessNotification('scheduled', `Post scheduled for ${quickSchedule.date} at ${quickSchedule.time}`)
    } else {
      showSuccessNotification('scheduled', 'Post scheduled successfully')
    }
  }

  const handleCustomScheduling = () => {
    setSchedulingOpen(true)
  }

  const handleSaveDraft = () => {
    showSuccessNotification('draft', 'Draft saved successfully!')
  }

  const showSuccessNotification = (type, message) => {
    setSuccessNotification({ show: true, type, message })
    setTimeout(() => {
      setSuccessNotification({ show: false, type: '', message: '' })
    }, 3000)
  }

  // ============ RENDER ============
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="border-b border-gray-200 dark:border-gray-800 bg-white dark:bg-gray-900 sticky top-0 z-10">
        <div className="max-w-[1800px] mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-black text-gray-900 dark:text-white">Create Post</h1>
              <p className="text-sm text-gray-600 dark:text-gray-400">Create and schedule your social media content</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" onClick={handleSaveDraft}>Save Draft</Button>
              <Button variant="primary" onClick={() => setPublishConfirmOpen(true)}>
                <Calendar className="w-4 h-4 mr-2" />
                Publish
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <div className="max-w-[1800px] mx-auto px-6 py-6">
        <div className="grid grid-cols-12 gap-6">
          
          {/* Left Sidebar - Quick Actions */}
          <div className="col-span-2">
            <Card variant="elevated" className="p-4 sticky top-24">
              <div className="space-y-2">
                <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-3">Quick Actions</h3>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <ImageIcon className="w-4 h-4 mr-2" />
                  Media Library
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Calendar
                </Button>
                <Button variant="ghost" size="sm" className="w-full justify-start">
                  <Settings className="w-4 h-4 mr-2" />
                  Settings
                </Button>
              </div>
            </Card>
          </div>

          {/* Main Content Area */}
          <div className="col-span-6 space-y-6">
            
            {/* Channel Selector */}
            <Card variant="elevated" className="p-6">
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white">Select Channels</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400">Choose where to publish</p>
                </div>

                <Tabs value={channelMode} onValueChange={setChannelMode}>
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="all">All Channels</TabsTrigger>
                    <TabsTrigger value="select">Select Channels</TabsTrigger>
                  </TabsList>

                  <TabsContent value="all" className="mt-4">
                    {/* Leer */}
                  </TabsContent>

                  <TabsContent value="select" className="mt-4">
                    <div className="grid grid-cols-2 gap-3">
                      {Object.keys(channelConfig).map((channelKey) => {
                        const config = channelConfig[channelKey]
                        const selected = selectedChannels[channelKey]
                        
                        return (
                          <Card
                            key={channelKey}
                            className={`p-4 cursor-pointer transition-all ${
                              selected 
                                ? 'border-2 border-viralspoon-purple bg-purple-50 dark:bg-purple-950/20'
                                : 'border-2 border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                            }`}
                            onClick={() => toggleChannel(channelKey)}
                          >
                            <div className="flex items-center gap-3">
                              <div className={`w-10 h-10 rounded-xl ${config.bgColor} flex items-center justify-center`}>
                                {config.icon}
                              </div>
                              <div>
                                <div className="font-semibold text-sm text-gray-900 dark:text-white">{config.name}</div>
                                <div className="text-xs text-gray-600 dark:text-gray-400">{config.type}</div>
                              </div>
                            </div>
                          </Card>
                        )
                      })}
                    </div>
                  </TabsContent>
                </Tabs>
              </div>
            </Card>

            {/* Text Editor - JETZT ZUERST */}
            <Card variant="elevated" className="p-6">
              <ContentEditor
                onTextChange={handleTextChange}
                onCustomizeClick={handleTextCustomizeClick}
                initialVersions={textVersions}
                platformLimits={platformLimits}
              />
            </Card>

            {/* Media Upload - JETZT DANACH */}
            <Card variant="elevated" className="p-6">
              <MediaUpload
                onMediaChange={handleMediaChange}
                onCustomizeClick={handleMediaCustomizeClick}
                initialFiles={mediaFiles}
              />
            </Card>

          </div>

          {/* Right Sidebar */}
          <div className="col-span-4">
            <div className="sticky top-24 space-y-6">
              {/* Content Preview */}
              <ContentPreviewShowcase />
              
              {/* Publishing Card */}
              <PublishingCard
                selectedChannels={selectedChannels}
                channelConfig={channelConfig}
                quickSchedule={quickSchedule}
                onQuickScheduleChange={setQuickSchedule}
                hasCustomSchedule={hasCustomSchedule}
                scheduleRange={scheduleRange}
                onPublishClick={() => setPublishConfirmOpen(true)}
                onScheduleClick={handleSchedulePost}
                onCustomScheduleClick={handleCustomScheduling}
                onSaveDraftClick={handleSaveDraft}
              />
            </div>
          </div>

        </div>
      </div>

      {/* ============ IMPORTED DIALOG COMPONENTS ============ */}
      
      {/* Text Customization Dialog */}
      <ChannelCustomizationDialog
        open={customizationOpen}
        onOpenChange={setCustomizationOpen}
        channelTexts={channelTexts}
        onChannelTextsChange={setChannelTexts}
      />

      {/* Media Customization Dialog */}
      <ChannelMediaCustomizationDialog
        open={mediaCustomizationOpen}
        onOpenChange={setMediaCustomizationOpen}
        channelMedia={channelMedia}
        onChannelMediaChange={setChannelMedia}
        selectedPlatforms={selectedPlatforms}
        onSelectedPlatformsChange={setSelectedPlatforms}
        globalFitMode={globalFitMode}
        onGlobalFitModeChange={setGlobalFitMode}
        globalBlur={globalBlur}
        onGlobalBlurChange={setGlobalBlur}
      />

      {/* Scheduling Dialog */}
      <ChannelSchedulingDialog
        open={schedulingOpen}
        onOpenChange={setSchedulingOpen}
        channelSchedules={channelSchedules}
        onChannelSchedulesChange={setChannelSchedules}
      />

      {/* ============ PUBLISH CONFIRMATION DIALOG ============ */}
      <Dialog open={publishConfirmOpen} onOpenChange={setPublishConfirmOpen}>
        <DialogContent className="max-w-md">
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-full bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center">
                <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              Publish Now?
            </DialogTitle>
            <DialogDescription>
              Your post will be published immediately to {getActiveChannels().length} format{getActiveChannels().length !== 1 ? 's' : ''} across multiple channels. This action cannot be undone.
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="gap-2">
            <Button variant="outline" onClick={() => setPublishConfirmOpen(false)}>
              Cancel
            </Button>
            <Button variant="primary" onClick={handlePublishNow}>
              <Send className="w-4 h-4 mr-2" />
              Publish Now
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* ============ SUCCESS NOTIFICATION - CENTERED OVERLAY ============ */}
      {successNotification.show && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/30 dark:bg-black/50 animate-in fade-in duration-200">
          <Card className="p-8 shadow-2xl border-2 border-green-200 dark:border-green-800 bg-green-50 dark:bg-green-950/20 min-w-[400px] animate-in zoom-in-95 duration-200">
            <div className="flex flex-col items-center text-center gap-4">
              <div className="w-16 h-16 rounded-full bg-green-500 dark:bg-green-600 flex items-center justify-center">
                <CheckCircle className="w-8 h-8 text-white" />
              </div>
              <div>
                <h4 className="font-black text-xl text-gray-900 dark:text-white mb-2">
                  {successNotification.type === 'published' ? '🎉 Published!' : 
                   successNotification.type === 'scheduled' ? '⏰ Scheduled!' : 
                   '💾 Draft Saved!'}
                </h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  {successNotification.message}
                </p>
              </div>
            </div>
          </Card>
        </div>
      )}

    </div>
  )
}