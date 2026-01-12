import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { AlertCircle, Image, Wand2, Sparkles, Video, Crop, Maximize2, Square, FileImage, Lock, Globe } from 'lucide-react'
import { useState } from 'react'

export default function ChannelMediaCustomizationShowcase() {
  const [open, setOpen] = useState(false)
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
    instagram_reel: {
      available: true,
      enabled: false,
      platform: 'instagram',
      format: 'reel',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
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
    facebook_story: {
      available: false,
      enabled: false,
      platform: 'facebook',
      format: 'story',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    facebook_reel: {
      available: false,
      enabled: false,
      platform: 'facebook',
      format: 'reel',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
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
    },
    youtube_shorts: {
      available: true,
      enabled: false,
      platform: 'youtube',
      format: 'shorts',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    tiktok_post: {
      available: true,
      enabled: false,
      platform: 'tiktok',
      format: 'post',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    pinterest_pin: {
      available: true,
      enabled: false,
      platform: 'pinterest',
      format: 'pin',
      aspectRatio: '2:3',
      dimensions: '1000x1500',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=750&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    },
    snapchat_story: {
      available: true,
      enabled: false,
      platform: 'snapchat',
      format: 'story',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=500&h=900&fit=crop',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0
    }
  })

  const platforms = [
    { value: 'all', label: 'All Platforms' },
    { value: 'instagram', label: 'Instagram' },
    { value: 'facebook', label: 'Facebook' },
    { value: 'twitter', label: 'Twitter' },
    { value: 'linkedin', label: 'LinkedIn' },
    { value: 'youtube', label: 'YouTube' },
    { value: 'tiktok', label: 'TikTok' },
    { value: 'pinterest', label: 'Pinterest' },
    { value: 'snapchat', label: 'Snapchat' },
  ]

  const fitModes = [
    { value: 'cover', label: 'Cover', icon: Maximize2 },
    { value: 'contain', label: 'Contain', icon: Square },
    { value: 'crop', label: 'Crop', icon: Crop },
    { value: 'blur', label: 'Blur BG', icon: Image },
  ]

  const togglePlatform = (platform) => {
    if (platform === 'all') {
      setSelectedPlatforms(['all'])
    } else {
      const newSelection = selectedPlatforms.includes('all')
        ? [platform]
        : selectedPlatforms.includes(platform)
          ? selectedPlatforms.filter(p => p !== platform)
          : [...selectedPlatforms.filter(p => p !== 'all'), platform]
      
      setSelectedPlatforms(newSelection.length === 0 ? ['all'] : newSelection)
    }
  }

  const toggleChannel = (channel) => {
    if (!channelMedia[channel].available) return
    
    setChannelMedia({
      ...channelMedia,
      [channel]: { ...channelMedia[channel], enabled: !channelMedia[channel].enabled }
    })
  }

  const updateChannelSettings = (channel, field, value) => {
    setChannelMedia({
      ...channelMedia,
      [channel]: { 
        ...channelMedia[channel], 
        [field]: value,
        hasCustomization: true
      }
    })
  }

  const applyGlobalSettings = () => {
    const updated = {}
    Object.keys(channelMedia).forEach(key => {
      if (channelMedia[key].enabled && channelMedia[key].available) {
        updated[key] = {
          ...channelMedia[key],
          fitMode: globalFitMode,
          blur: globalBlur,
          hasCustomization: true
        }
      } else {
        updated[key] = channelMedia[key]
      }
    })
    setChannelMedia(updated)
  }

  const openStudio = (channel) => {
    console.log(`Opening ViralSpoon Studio for ${channel}`)
  }

  const getPlatformIcon = (platform, size = 'w-4 h-4') => {
    const iconClass = `${size} text-white`
    
    if (platform === 'all') {
      return <Globe className={iconClass} />
    }
    if (platform === 'instagram') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      )
    }
    if (platform === 'facebook') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      )
    }
    if (platform === 'twitter') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      )
    }
    if (platform === 'linkedin') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
        </svg>
      )
    }
    if (platform === 'youtube') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
        </svg>
      )
    }
    if (platform === 'tiktok') {
      return <Video className={iconClass} />
    }
    if (platform === 'pinterest') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738.098.119.112.224.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.631-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
        </svg>
      )
    }
    if (platform === 'snapchat') {
      return (
        <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.206.793c.99 0 4.347.276 5.93 3.821.529 1.193.403 3.219.299 4.847l-.003.06c-.012.18-.022.345-.03.51.075.045.203.09.401.09.3 0 .72-.165 1.124-.33.414-.169.844-.345 1.193-.345.399 0 .765.203 1.068.59.301.39.466.855.466 1.311 0 .43-.203.795-.607 1.091-.375.274-.876.469-1.316.639l-.06.024c-.27.104-.604.241-.75.405-.165.203-.21.442-.21.645 0 .153.015.33.064.523l.003.01c.195.826.66 1.726 1.084 2.617.21.448.42.883.585 1.29.154.376.285.76.347 1.145.06.39.03.768-.091 1.113-.15.435-.511.792-.96 1.008-.464.225-1.015.36-1.62.42-.217.023-.435.036-.648.045l-.03.003c-.563.053-1.124.1-1.679.208-.424.081-.793.21-1.093.405-.525.319-.91.792-1.139 1.407-.274.723-.38 1.636-.464 2.467-.025.248-.045.49-.066.716l-.006.063c-.03.263-.062.534-.095.782-.08.56-.16 1.14-.248 1.651-.084.492-.19.986-.344 1.456-.15.456-.375.93-.67 1.368-.33.487-.722.887-1.168 1.19-.47.32-1.01.515-1.584.605-.589.099-1.173.15-1.665.172h-.045c-.495-.022-1.08-.073-1.67-.172-.575-.09-1.114-.285-1.584-.605-.446-.303-.838-.703-1.168-1.19-.295-.438-.52-.912-.67-1.368-.154-.47-.26-.964-.344-1.456-.088-.511-.168-1.091-.248-1.651-.033-.248-.065-.519-.095-.782l-.006-.063c-.02-.226-.04-.468-.066-.716-.083-.831-.19-1.744-.464-2.467-.229-.615-.614-1.088-1.139-1.407-.3-.195-.67-.324-1.093-.405-.555-.108-1.116-.155-1.679-.208l-.03-.003c-.213-.009-.431-.022-.648-.045-.605-.06-1.156-.195-1.62-.42-.449-.216-.81-.573-.96-1.008-.12-.345-.15-.723-.091-1.113.062-.385.193-.77.347-1.145.165-.407.375-.842.585-1.29.424-.891.889-1.791 1.084-2.617l.003-.01c.049-.193.064-.37.064-.523 0-.203-.045-.442-.21-.645-.146-.164-.48-.301-.75-.405l-.06-.024c-.44-.17-.941-.365-1.316-.639-.404-.296-.607-.661-.607-1.091 0-.456.165-.921.466-1.311.303-.387.669-.59 1.068-.59.349 0 .779.176 1.193.345.404.165.824.33 1.124.33.198 0 .326-.045.401-.09-.008-.165-.018-.33-.03-.51l-.003-.06c-.104-1.628-.23-3.654.299-4.847C7.859 1.069 11.216.793 12.206.793z"/>
        </svg>
      )
    }
    return <Globe className={iconClass} />
  }

  const getPlatformColorClass = (key) => {
    if (key.includes('instagram')) return 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500'
    if (key.includes('facebook')) return 'bg-[#1877F2]'
    if (key.includes('twitter')) return 'bg-gradient-to-br from-[#1DA1F2] to-[#0d8bd9]'
    if (key.includes('linkedin')) return 'bg-[#0A66C2]'
    if (key.includes('youtube')) return 'bg-[#FF0000]'
    if (key.includes('tiktok')) return 'bg-black'
    if (key.includes('pinterest')) return 'bg-[#E60023]'
    if (key.includes('snapchat')) return 'bg-[#FFFC00]'
    return 'bg-gray-400 dark:bg-gray-600'
  }

  const getPlatformBorderClass = (key) => {
    if (key.includes('instagram')) return 'border-purple-200 dark:border-purple-800 bg-purple-50/50 dark:bg-purple-950/20'
    if (key.includes('facebook')) return 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20'
    if (key.includes('twitter')) return 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20'
    if (key.includes('linkedin')) return 'border-blue-200 dark:border-blue-800 bg-blue-50/50 dark:bg-blue-950/20'
    if (key.includes('youtube')) return 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20'
    if (key.includes('tiktok')) return 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20'
    if (key.includes('pinterest')) return 'border-red-200 dark:border-red-800 bg-red-50/50 dark:bg-red-950/20'
    if (key.includes('snapchat')) return 'border-yellow-200 dark:border-yellow-800 bg-yellow-50/50 dark:bg-yellow-950/20'
    return 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20'
  }

  const getFilteredChannels = () => {
    return Object.entries(channelMedia).filter(([key, data]) => {
      if (selectedPlatforms.includes('all')) return true
      return selectedPlatforms.includes(data.platform)
    })
  }

  const renderChannelCard = (key, data) => {
    const platformName = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
    
    return (
      <Card key={key} className={`p-4 border-2 transition-all ${
        data.available 
          ? getPlatformBorderClass(key) 
          : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20 opacity-60'
      }`}>
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-3">
            <div className={`w-9 h-9 rounded-xl flex items-center justify-center relative ${
              data.available ? getPlatformColorClass(key) : 'bg-gray-400 dark:bg-gray-600'
            }`}>
              {getPlatformIcon(data.platform, 'w-4 h-4')}
              {!data.available && (
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                  <Lock className="w-4 h-4 text-white" />
                </div>
              )}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h5 className="font-bold text-sm text-gray-900 dark:text-white">{platformName}</h5>
                {data.hasCustomization && data.enabled && data.available && (
                  <Badge variant="green" className="text-xs">Custom</Badge>
                )}
              </div>
              <p className="text-xs text-gray-600 dark:text-gray-400">{data.aspectRatio} • {data.dimensions}</p>
            </div>
          </div>
          <Switch
            checked={data.enabled}
            onCheckedChange={() => toggleChannel(key)}
            disabled={!data.available}
          />
        </div>

        {data.enabled && data.available && (
          <div className="space-y-3">
            <div 
              className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800"
              style={{ aspectRatio: data.aspectRatio.replace(':', '/') }}
            >
              <img 
                src={data.preview} 
                alt={`${platformName} Preview`}
                className="w-full h-full"
                style={{ 
                  objectFit: data.fitMode === 'blur' ? 'contain' : data.fitMode,
                  filter: data.fitMode === 'blur' ? `blur(${data.blur}px)` : 'none'
                }}
              />
              {data.fitMode === 'blur' && (
                <img 
                  src={data.preview}
                  alt={`${platformName} Foreground`}
                  className="absolute inset-0 w-full h-full object-contain"
                />
              )}
            </div>

            <div className="space-y-2">
              <div>
                <Label htmlFor={`${key}-fit`} className="text-xs mb-1.5">Fit Mode</Label>
                <Select 
                  value={data.fitMode}
                  onValueChange={(value) => updateChannelSettings(key, 'fitMode', value)}
                >
                  <SelectTrigger id={`${key}-fit`} className="text-xs h-8">
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    {fitModes.map(mode => (
                      <SelectItem key={mode.value} value={mode.value} className="text-xs">
                        <div className="flex items-center gap-2">
                          <mode.icon className="w-3 h-3" />
                          <span>{mode.label}</span>
                        </div>
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              {data.fitMode === 'blur' && (
                <div>
                  <Label htmlFor={`${key}-blur`} className="text-xs mb-1.5">
                    Blur: {data.blur}px
                  </Label>
                  <Slider
                    id={`${key}-blur`}
                    value={[data.blur]}
                    onValueChange={(value) => updateChannelSettings(key, 'blur', value[0])}
                    min={0}
                    max={50}
                    step={1}
                  />
                </div>
              )}
            </div>

            <div className="flex gap-2">
              <Button 
                variant="outline" 
                size="sm" 
                className="flex-1 h-8 text-xs"
                onClick={() => openStudio(key)}
              >
                <Wand2 className="w-3 h-3 mr-1.5" />
                Studio
              </Button>
              <Button 
                variant="outline" 
                size="sm"
                className="h-8 text-xs px-3"
              >
                <FileImage className="w-3 h-3" />
              </Button>
            </div>
          </div>
        )}

        {!data.available && (
          <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <Lock className="w-3 h-3" />
            <span>Not available for this content</span>
          </div>
        )}
      </Card>
    )
  }

  const enabledCount = Object.values(channelMedia).filter(c => c.enabled).length
  const totalAvailable = Object.values(channelMedia).filter(c => c.available).length

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Channel Media Customization</h3>
        <p className="text-gray-600 dark:text-gray-400">Customize media across platforms with smart filtering and bulk actions</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Media Customization Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Platform Badges:</strong> Click badges with platform logos to filter channels</p>
                <p>→ <strong>3-Column Grid:</strong> Compact layout for efficient channel management</p>
                <p>→ <strong>Global Fit Mode:</strong> Apply fit settings to all enabled channels at once</p>
                <p>→ <strong>Per-Channel Control:</strong> Individual fit modes and blur adjustments</p>
                <p>→ <strong>Visual Preview:</strong> Real-time preview of all media adjustments</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Demo Trigger */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Interactive Demo
          </h4>

          <div className="flex flex-col items-center justify-center py-12">
            <div className="mb-6 text-center">
              <div className="w-16 h-16 bg-gradient-to-br from-viralspoon-purple to-viralspoon-coral rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Image className="w-8 h-8 text-white" />
              </div>
              <h5 className="text-lg font-bold text-gray-900 dark:text-white mb-2">Multi-Platform Media Manager</h5>
              <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md">
                Manage media across 12+ social platforms with badge filters and bulk actions
              </p>
            </div>

            <Dialog open={open} onOpenChange={setOpen}>
              <DialogTrigger asChild>
                <Button variant="primary" size="lg">
                  <Image className="w-4 h-4 mr-2" />
                  Customize Channel Media ({enabledCount}/{totalAvailable})
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
                <DialogHeader>
                  <DialogTitle className="text-2xl font-black">Channel Media Customization</DialogTitle>
                  <DialogDescription>
                    {enabledCount} of {totalAvailable} channels enabled • Filter by platform
                  </DialogDescription>
                </DialogHeader>

                {/* Global Settings */}
                <Card variant="soft-purple" className="p-5">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-9 h-9 bg-viralspoon-purple dark:bg-purple-600 rounded-xl flex items-center justify-center">
                      <Sparkles className="w-4 h-4 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-sm text-gray-900 dark:text-white">Global Settings</h4>
                      <p className="text-xs text-gray-600 dark:text-gray-400">Apply to all enabled channels</p>
                    </div>
                  </div>

                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {fitModes.map(mode => (
                      <button
                        key={mode.value}
                        onClick={() => setGlobalFitMode(mode.value)}
                        className={`p-2.5 rounded-lg border-2 transition-all ${
                          globalFitMode === mode.value
                            ? 'border-viralspoon-purple bg-purple-50 dark:bg-purple-950/20'
                            : 'border-gray-200 dark:border-gray-800'
                        }`}
                      >
                        <mode.icon className={`w-4 h-4 mx-auto mb-1 ${
                          globalFitMode === mode.value ? 'text-viralspoon-purple' : 'text-gray-400'
                        }`} />
                        <div className="text-xs font-medium text-gray-900 dark:text-white">
                          {mode.label}
                        </div>
                      </button>
                    ))}
                  </div>

                  {globalFitMode === 'blur' && (
                    <div className="mb-3">
                      <Label htmlFor="global-blur" className="text-xs mb-2">
                        Blur: {globalBlur}px
                      </Label>
                      <Slider
                        id="global-blur"
                        value={[globalBlur]}
                        onValueChange={(value) => setGlobalBlur(value[0])}
                        min={0}
                        max={50}
                        step={1}
                      />
                    </div>
                  )}

                  <Button 
                    variant="primary" 
                    size="sm" 
                    className="w-full h-9"
                    onClick={applyGlobalSettings}
                  >
                    <Wand2 className="w-3 h-3 mr-2" />
                    Apply to {enabledCount} Enabled Channel{enabledCount !== 1 ? 's' : ''}
                  </Button>
                </Card>

                {/* Platform Filter Badges */}
                <div className="flex flex-wrap gap-2">
                  {platforms.map(platform => {
                    const isSelected = selectedPlatforms.includes(platform.value)
                    return (
                      <Badge
                        key={platform.value}
                        variant={isSelected ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                        className="cursor-pointer inline-flex items-center gap-2"
                        onClick={() => togglePlatform(platform.value)}
                      >
                        <div className={`w-4 h-4 rounded flex items-center justify-center ${
                          isSelected 
                            ? 'bg-purple-400 dark:bg-purple-600' 
                            : 'bg-purple-200 dark:bg-purple-800/50'
                        }`}>
                          {getPlatformIcon(platform.value, 'w-3 h-3')}
                        </div>
                        {platform.label}
                      </Badge>
                    )
                  })}
                </div>

                {/* 3-Column Channel Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {getFilteredChannels().map(([key, data]) => renderChannelCard(key, data))}
                </div>

                {getFilteredChannels().length === 0 && (
                  <Card className="p-12 text-center">
                    <Image className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <h4 className="font-bold text-gray-900 dark:text-white mb-2">No channels match your filter</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      Select a different platform or click "All Platforms"
                    </p>
                  </Card>
                )}

                {/* ViralSpoon Studio Promo */}
                <Card variant="soft-purple" className="p-5 border-2 border-purple-300 dark:border-purple-700">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="w-11 h-11 bg-viralspoon-purple dark:bg-purple-600 rounded-xl flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <div className="font-bold text-base text-gray-900 dark:text-white">ViralSpoon Studio</div>
                        <div className="text-sm text-gray-600 dark:text-gray-400">Advanced AI-powered editing for all media</div>
                      </div>
                    </div>
                    <Button variant="primary" size="default" className="h-9">
                      Learn More
                    </Button>
                  </div>
                </Card>

                <DialogFooter className="gap-2">
                  <Button variant="outline" onClick={() => setOpen(false)}>
                    Cancel
                  </Button>
                  <Button variant="primary" onClick={() => setOpen(false)}>
                    Apply Changes
                  </Button>
                </DialogFooter>
              </DialogContent>
            </Dialog>
          </div>
        </Card>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-gray-900 dark:text-white">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>→ <strong>Platform Badges:</strong> Use filter-soft-purple variants for selected/unselected states</p>
            <p>→ <strong>Unified Disabled State:</strong> Disabled and unavailable channels look identical (gray, opacity 60%)</p>
            <p>→ <strong>Lock Icon:</strong> Only shows on unavailable channels for clarity</p>
            <p>→ <strong>Global Settings:</strong> Primary button for applying settings, no enable/disable all</p>
            <p>→ <strong>Studio Promo:</strong> Soft-purple card with border instead of gradient for subtlety</p>
            <p>→ <strong>Custom Badge:</strong> Green badge only shows when channel is enabled AND customized</p>
          </div>
        </Card>
      </div>
    </div>
  )
}