import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Slider } from '@/components/ui/slider'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Image, Wand2, Sparkles, Maximize2, Square, Crop, Lock, Globe, Video, FileImage, Upload, FolderOpen, Grid3x3, Pencil, X } from 'lucide-react'
import { useState } from 'react'

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

const defaultChannelMedia = {
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
    preview: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&h=900&fit=crop',
    hasCustomization: true,
    fitMode: 'blur',
    blur: 15
  },
  instagram_reel: {
    available: true,
    enabled: true,
    platform: 'instagram',
    format: 'reel',
    aspectRatio: '9:16',
    dimensions: '1080x1920',
    preview: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=500&h=900&fit=crop',
    hasCustomization: true,
    fitMode: 'contain',
    blur: 0
  },
  facebook_post: {
    available: true,
    enabled: true,
    platform: 'facebook',
    format: 'post',
    aspectRatio: '1.91:1',
    dimensions: '1200x630',
    preview: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&h=400&fit=crop',
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
    preview: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=450&fit=crop',
    hasCustomization: true,
    fitMode: 'crop',
    blur: 0
  },
  linkedin_post: {
    available: true,
    enabled: true,
    platform: 'linkedin',
    format: 'post',
    aspectRatio: '1.91:1',
    dimensions: '1200x627',
    preview: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=800&h=400&fit=crop',
    hasCustomization: false,
    fitMode: 'cover',
    blur: 0
  },
  youtube_shorts: {
    available: true,
    enabled: true,
    platform: 'youtube',
    format: 'shorts',
    aspectRatio: '9:16',
    dimensions: '1080x1920',
    preview: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=500&h=900&fit=crop',
    hasCustomization: true,
    fitMode: 'blur',
    blur: 20
  },
  tiktok_post: {
    available: true,
    enabled: true,
    platform: 'tiktok',
    format: 'post',
    aspectRatio: '9:16',
    dimensions: '1080x1920',
    preview: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=500&h=900&fit=crop',
    hasCustomization: true,
    fitMode: 'contain',
    blur: 0
  },
  pinterest_pin: {
    available: true,
    enabled: true,
    platform: 'pinterest',
    format: 'pin',
    aspectRatio: '2:3',
    dimensions: '1000x1500',
    preview: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=500&h=750&fit=crop',
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
    preview: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=500&h=900&fit=crop',
    hasCustomization: false,
    fitMode: 'cover',
    blur: 0
  }
}

// Image Editor Dialog
function ImageEditorDialog({ isOpen, onClose, image, onSave }) {
  const [brightness, setBrightness] = useState(100)
  const [contrast, setContrast] = useState(100)
  const [saturation, setSaturation] = useState(100)

  const handleSave = () => {
    onSave({
      ...image,
      filters: { brightness, contrast, saturation }
    })
    onClose()
  }

  if (!image) return null

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Pencil className="w-5 h-5 text-viralspoon-purple dark:text-purple-400" />
            Edit Image
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
              <img
                src={image}
                alt="Preview"
                className="w-full h-full object-cover"
                style={{
                  filter: `brightness(${brightness}%) contrast(${contrast}%) saturate(${saturation}%)`
                }}
              />
            </div>
          </div>

          <div className="space-y-6">
            <div>
              <Label className="text-sm font-medium mb-2 block">Brightness</Label>
              <Slider
                value={[brightness]}
                onValueChange={(value) => setBrightness(value[0])}
                min={0}
                max={200}
                step={1}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{brightness}%</span>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">Contrast</Label>
              <Slider
                value={[contrast]}
                onValueChange={(value) => setContrast(value[0])}
                min={0}
                max={200}
                step={1}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{contrast}%</span>
            </div>

            <div>
              <Label className="text-sm font-medium mb-2 block">Saturation</Label>
              <Slider
                value={[saturation]}
                onValueChange={(value) => setSaturation(value[0])}
                min={0}
                max={200}
                step={1}
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{saturation}%</span>
            </div>

            <div className="flex gap-3 pt-4">
              <Button variant="outline" onClick={onClose} className="flex-1">
                Cancel
              </Button>
              <Button variant="primary" onClick={handleSave} className="flex-1">
                Save Changes
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Design Templates Dialog
function DesignTemplatesDialog({ isOpen, onClose, onApply }) {
  const [selectedTemplate, setSelectedTemplate] = useState(null)
  const [headline, setHeadline] = useState('')
  const [subheadline, setSubheadline] = useState('')
  const [isGenerating, setIsGenerating] = useState(false)

  const templates = [
    { id: 1, name: 'Modern Minimal', preview: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=400&h=400&fit=crop' },
    { id: 2, name: 'Bold & Vibrant', preview: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=400&h=400&fit=crop' },
    { id: 3, name: 'Elegant Dark', preview: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=400&h=400&fit=crop' },
    { id: 4, name: 'Pastel Dreams', preview: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=400&h=400&fit=crop' },
  ]

  const handleGenerateText = async () => {
    setIsGenerating(true)
    setTimeout(() => {
      setHeadline('Your Perfect Moment')
      setSubheadline('Captured in stunning detail')
      setIsGenerating(false)
    }, 1500)
  }

  const handleApply = () => {
    if (!selectedTemplate) return
    onApply({
      template: selectedTemplate,
      headline,
      subheadline
    })
    onClose()
    setSelectedTemplate(null)
    setHeadline('')
    setSubheadline('')
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Wand2 className="w-5 h-5 text-viralspoon-purple dark:text-purple-400" />
            Choose Design Template
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-5 gap-6 mt-4">
          <div className="col-span-3">
            <h3 className="text-sm font-semibold text-gray-900 dark:text-white mb-3">Select Template</h3>
            <div className="grid grid-cols-2 gap-3">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`relative aspect-video group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedTemplate?.id === template.id
                      ? 'border-viralspoon-purple ring-4 ring-purple-200 dark:ring-purple-900'
                      : 'border-gray-200 dark:border-gray-700 hover:border-viralspoon-purple dark:hover:border-purple-500'
                  }`}
                  onClick={() => setSelectedTemplate(template)}
                >
                  <img
                    src={template.preview}
                    alt={template.name}
                    className="w-full h-full object-cover"
                  />
                  {selectedTemplate?.id === template.id && (
                    <div className="absolute top-2 right-2 w-6 h-6 bg-viralspoon-purple rounded-full flex items-center justify-center">
                      <svg className="w-4 h-4 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2">
                    <p className="text-xs text-white font-medium">{template.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-gray-900 dark:text-white">Add Text</h3>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={handleGenerateText}
                  disabled={isGenerating}
                  className="text-xs h-7"
                >
                  <Sparkles className="w-3 h-3 mr-1" />
                  {isGenerating ? 'Generating...' : 'AI Generate'}
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <Label className="text-xs font-medium mb-1 block">
                    Headline
                  </Label>
                  <Input
                    placeholder="Enter headline..."
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                  />
                </div>

                <div>
                  <Label className="text-xs font-medium mb-1 block">
                    Subheadline
                  </Label>
                  <Textarea
                    placeholder="Enter subheadline..."
                    value={subheadline}
                    onChange={(e) => setSubheadline(e.target.value)}
                    rows={3}
                    className="resize-none"
                  />
                </div>
              </div>
            </div>

            {selectedTemplate && (
              <div className="border-2 border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-gray-50 dark:bg-gray-900/50">
                <h4 className="text-xs font-semibold text-gray-700 dark:text-gray-300 mb-2">Preview</h4>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <img
                    src={selectedTemplate.preview}
                    alt={selectedTemplate.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center p-4 bg-black/20">
                    {headline && (
                      <h3 className="text-white font-bold text-lg mb-1 drop-shadow-lg">
                        {headline}
                      </h3>
                    )}
                    {subheadline && (
                      <p className="text-white text-xs drop-shadow-lg">
                        {subheadline}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>

        <div className="flex items-center justify-between pt-4 border-t border-gray-200 dark:border-gray-800 mt-4">
          <p className="text-xs text-gray-500 dark:text-gray-400">
            {selectedTemplate ? `Selected: ${selectedTemplate.name}` : 'Select a template to continue'}
          </p>
          <div className="flex gap-2">
            <Button variant="outline" onClick={onClose}>
              Cancel
            </Button>
            <Button 
              variant="primary" 
              onClick={handleApply}
              disabled={!selectedTemplate}
            >
              Apply Template
            </Button>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// Video Templates Dialog
function VideoTemplatesDialog({ isOpen, onClose, onApply }) {
  const templates = [
    { id: 1, name: 'Product Showcase', duration: '15s', preview: 'https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=400&h=400&fit=crop' },
    { id: 2, name: 'Story Template', duration: '10s', preview: 'https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=400&fit=crop' },
    { id: 3, name: 'Promo Video', duration: '20s', preview: 'https://images.unsplash.com/photo-1611162618071-b39a2ec055fb?w=400&h=400&fit=crop' },
    { id: 4, name: 'Tutorial Intro', duration: '8s', preview: 'https://images.unsplash.com/photo-1611162618479-ee3d24aaef0b?w=400&h=400&fit=crop' },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Video className="w-5 h-5 text-viralspoon-coral dark:text-orange-400" />
            Choose Video Template
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative aspect-video group cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-viralspoon-coral dark:hover:border-orange-500 transition-all"
              onClick={() => {
                onApply(template)
                onClose()
              }}
            >
              <img
                src={template.preview}
                alt={template.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary-inverse" size="sm">
                  Apply
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-sm text-white font-medium">{template.name}</p>
                <Badge variant="soft-coral" className="text-xs mt-1">
                  {template.duration}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
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

export default function ChannelMediaCustomizationDialog({ 
  open, 
  onOpenChange, 
  channelMedia: externalChannelMedia,
  onChannelMediaChange
}) {
  // Internal state management
  const [internalChannelMedia, setInternalChannelMedia] = useState(defaultChannelMedia)
  const [selectedPlatforms, setSelectedPlatforms] = useState(['all'])
  const [globalFitMode, setGlobalFitMode] = useState('cover')
  const [globalBlur, setGlobalBlur] = useState(0)
  const [editingImage, setEditingImage] = useState(null)
  const [designTemplatesOpen, setDesignTemplatesOpen] = useState(false)
  const [videoTemplatesOpen, setVideoTemplatesOpen] = useState(false)

  // Use external data if provided, otherwise use internal state
  const channelMedia = externalChannelMedia && Object.keys(externalChannelMedia).length > 0 
    ? externalChannelMedia 
    : internalChannelMedia

  const handleChannelMediaChange = (newData) => {
    if (onChannelMediaChange) {
      onChannelMediaChange(newData)
    } else {
      setInternalChannelMedia(newData)
    }
  }

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
    
    handleChannelMediaChange({
      ...channelMedia,
      [channel]: { ...channelMedia[channel], enabled: !channelMedia[channel].enabled }
    })
  }

  const updateChannelSettings = (channel, field, value) => {
    handleChannelMediaChange({
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
    handleChannelMediaChange(updated)
  }

  const openStudio = (channel) => {
    console.log(`Opening ViralSpoon Studio for ${channel}`)
  }

  const handleImageEdit = (preview) => {
    setEditingImage(preview)
  }

  const handleImageSave = (editedImage) => {
    setEditingImage(null)
  }

  const handleDesignApply = (designData) => {
    console.log('Design applied:', designData)
  }

  const handleVideoTemplateApply = (template) => {
    console.log('Video template applied:', template)
  }

  const getFilteredChannels = () => {
    return Object.entries(channelMedia).filter(([key, data]) => {
      if (selectedPlatforms.includes('all')) return true
      return selectedPlatforms.includes(data.platform)
    })
  }

  const enabledCount = Object.values(channelMedia).filter(c => c.enabled).length
  const totalAvailable = Object.values(channelMedia).filter(c => c.available).length

  return (
    <>
      <Dialog open={open} onOpenChange={onOpenChange}>
        <DialogContent className="max-w-7xl max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-3">
            <DialogTitle className="text-2xl font-black">Channel Media Customization</DialogTitle>
            <DialogDescription className="text-base">
              {enabledCount} of {totalAvailable} channels enabled • Customize media for each platform
            </DialogDescription>
          </DialogHeader>

          {/* Global Settings */}
          <Card variant="soft-purple" className="p-6">
            <div className="flex items-center gap-4 mb-5">
              <div className="w-10 h-10 bg-viralspoon-purple dark:bg-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-bold text-base text-gray-900 dark:text-white">Global Settings</h4>
                <p className="text-sm text-gray-600 dark:text-gray-400">Apply settings to all enabled channels at once</p>
              </div>
            </div>

            <div className="grid grid-cols-4 gap-3 mb-4">
              {fitModes.map(mode => (
                <button
                  key={mode.value}
                  onClick={() => setGlobalFitMode(mode.value)}
                  className={`p-3 rounded-lg border-2 transition-all ${
                    globalFitMode === mode.value
                      ? 'border-viralspoon-purple bg-purple-50 dark:bg-purple-950/20'
                      : 'border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700'
                  }`}
                >
                  <mode.icon className={`w-5 h-5 mx-auto mb-2 ${
                    globalFitMode === mode.value ? 'text-viralspoon-purple' : 'text-gray-400'
                  }`} />
                  <div className="text-sm font-medium text-gray-900 dark:text-white">
                    {mode.label}
                  </div>
                </button>
              ))}
            </div>

            {globalFitMode === 'blur' && (
              <div className="mb-4">
                <Label htmlFor="global-blur" className="text-sm mb-3 block">
                  Blur Intensity: {globalBlur}px
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
              size="default" 
              className="w-full"
              onClick={applyGlobalSettings}
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Apply to {enabledCount} Enabled Channel{enabledCount !== 1 ? 's' : ''}
            </Button>
          </Card>

          {/* ViralSpoon Studio Actions */}
          <Card variant="soft-purple" className="p-6 border-2 border-purple-300 dark:border-purple-700">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-xl flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="font-bold text-lg text-gray-900 dark:text-white">ViralSpoon Studio</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">AI-powered design templates and video editing</div>
                </div>
              </div>
              <div className="flex gap-3">
                <Button 
                  variant="outline" 
                  size="default"
                  onClick={() => setDesignTemplatesOpen(true)}
                >
                  <Wand2 className="w-4 h-4 mr-2" />
                  Design Templates
                </Button>
                <Button 
                  variant="primary" 
                  size="default"
                  onClick={() => setVideoTemplatesOpen(true)}
                >
                  <Video className="w-4 h-4 mr-2" />
                  Video Templates
                </Button>
              </div>
            </div>
          </Card>

          {/* Platform Filter Badges */}
          <div className="flex flex-wrap gap-3">
            {platforms.map(platform => {
              const isSelected = selectedPlatforms.includes(platform.value)
              return (
                <Badge
                  key={platform.value}
                  variant={isSelected ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                  className="cursor-pointer inline-flex items-center gap-2 text-sm py-2 px-4"
                  onClick={() => togglePlatform(platform.value)}
                >
                  <div className={`w-5 h-5 rounded flex items-center justify-center ${
                    isSelected 
                      ? 'bg-purple-400 dark:bg-purple-600' 
                      : 'bg-purple-200 dark:bg-purple-800/50'
                  }`}>
                    {getPlatformIcon(platform.value, 'w-3.5 h-3.5')}
                  </div>
                  {platform.label}
                </Badge>
              )
            })}
          </div>

          {/* 3-Column Channel Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {getFilteredChannels().map(([key, data]) => {
              const platformName = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
              
              return (
                <Card key={key} className={`p-5 border-2 transition-all ${
                  data.available 
                    ? getPlatformBorderClass(key) 
                    : 'border-gray-200 dark:border-gray-800 bg-gray-50/50 dark:bg-gray-950/20 opacity-60'
                }`}>
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                        data.available ? getPlatformColorClass(key) : 'bg-gray-400 dark:bg-gray-600'
                      }`}>
                        {getPlatformIcon(data.platform, 'w-5 h-5')}
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
                    <div className="space-y-4">
                      <div 
                        className="relative w-full rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800 group cursor-pointer"
                        style={{ aspectRatio: data.aspectRatio.replace(':', '/') }}
                        onClick={() => handleImageEdit(data.preview)}
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
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                          <Button variant="secondary-inverse" size="sm">
                            <Pencil className="w-3 h-3 mr-1.5" />
                            Edit Image
                          </Button>
                        </div>
                      </div>

                      <div className="space-y-3">
                        <div>
                          <Label htmlFor={`${key}-fit`} className="text-sm mb-2 block">Fit Mode</Label>
                          <Select 
                            value={data.fitMode}
                            onValueChange={(value) => updateChannelSettings(key, 'fitMode', value)}
                          >
                            <SelectTrigger id={`${key}-fit`}>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {fitModes.map(mode => (
                                <SelectItem key={mode.value} value={mode.value}>
                                  <div className="flex items-center gap-2">
                                    <mode.icon className="w-4 h-4" />
                                    <span>{mode.label}</span>
                                  </div>
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>

                        {data.fitMode === 'blur' && (
                          <div>
                            <Label htmlFor={`${key}-blur`} className="text-sm mb-2 block">
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
                          className="flex-1"
                          onClick={() => openStudio(key)}
                        >
                          <Wand2 className="w-3.5 h-3.5 mr-1.5" />
                          Studio
                        </Button>
                        <Button 
                          variant="outline" 
                          size="sm"
                          className="px-3"
                        >
                          <FileImage className="w-3.5 h-3.5" />
                        </Button>
                      </div>
                    </div>
                  )}

                  {!data.available && (
                    <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
                      <Lock className="w-4 h-4" />
                      <span>Not available for this content</span>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>

          {getFilteredChannels().length === 0 && (
            <Card className="p-16 text-center">
              <Image className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h4 className="font-bold text-lg text-gray-900 dark:text-white mb-2">No channels match your filter</h4>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Select a different platform or click "All Platforms"
              </p>
            </Card>
          )}

          <DialogFooter className="gap-3">
            <Button variant="outline" onClick={() => onOpenChange(false)} size="lg">
              Cancel
            </Button>
            <Button variant="primary" onClick={() => onOpenChange(false)} size="lg">
              Apply Changes
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {/* Sub-Dialogs */}
      <ImageEditorDialog
        isOpen={!!editingImage}
        onClose={() => setEditingImage(null)}
        image={editingImage}
        onSave={handleImageSave}
      />
      <DesignTemplatesDialog
        isOpen={designTemplatesOpen}
        onClose={() => setDesignTemplatesOpen(false)}
        onApply={handleDesignApply}
      />
      <VideoTemplatesDialog
        isOpen={videoTemplatesOpen}
        onClose={() => setVideoTemplatesOpen(false)}
        onApply={handleVideoTemplateApply}
      />
    </>
  )
}