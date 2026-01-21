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
import { Upload, X, Sparkles, Image as ImageIcon, Pencil, Wand2, Video, Grid3x3, LayoutGrid, Maximize2, Square, Crop, Lock, Globe, ChevronLeft, ChevronRight, Plus, UserPlus, Users } from 'lucide-react'
import { useState } from 'react'

const platforms = [
  { value: 'all', label: 'All Platforms' },
  { value: 'instagram', label: 'Instagram' },
  { value: 'facebook', label: 'Facebook' },
  { value: 'linkedin', label: 'LinkedIn' },
]

const fitModes = [
  { value: 'cover', label: 'Cover', icon: Maximize2 },
  { value: 'contain', label: 'Contain', icon: Square },
  { value: 'crop', label: 'Crop', icon: Crop },
  { value: 'blur-sm', label: 'Blur BG', icon: ImageIcon },
]

// Aspect Ratio Presets - NUR für Formate wo es mehrere gibt
const aspectRatioPresets = {
  instagram_post: [
    { value: '1:1', label: 'Square (1:1)', dimensions: '1080x1080' },
    { value: '4:5', label: 'Portrait (4:5)', dimensions: '1080x1350' },
    { value: '16:9', label: 'Landscape (16:9)', dimensions: '1080x608' },
  ],
  facebook_post: [
    { value: '1:1', label: 'Square (1:1)', dimensions: '1200x1200' },
    { value: '4:5', label: 'Portrait (4:5)', dimensions: '1080x1350' },
    { value: '16:9', label: 'Landscape (16:9)', dimensions: '1200x675' },
    { value: '1.91:1', label: 'Wide (1.91:1)', dimensions: '1200x630' },
  ],
  linkedin_post: [
    { value: '1:1', label: 'Square (1:1)', dimensions: '1200x1200' },
    { value: '1.91:1', label: 'Wide (1.91:1)', dimensions: '1200x627' },
  ],
}

// Channels die Personen-Tagging unterstützen
const supportsTagging = ['instagram_post', 'facebook_post']

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
            <Pencil className="w-5 h-5 text-viralspoon-purple" />
            Edit Image
          </DialogTitle>
        </DialogHeader>
        
        <div className="grid grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="relative aspect-square rounded-lg overflow-hidden bg-muted">
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
              <span className="text-xs text-muted-foreground">{brightness}%</span>
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
              <span className="text-xs text-muted-foreground">{contrast}%</span>
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
              <span className="text-xs text-muted-foreground">{saturation}%</span>
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
    { 
      id: 1, 
      name: 'Modern Minimal', 
      preview: 'https://images.unsplash.com/photo-1618556450994-a6a128ef0d9d?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 2, 
      name: 'Bold & Vibrant', 
      preview: 'https://images.unsplash.com/photo-1634017839464-5c339ebe3cb4?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 3, 
      name: 'Elegant Dark', 
      preview: 'https://images.unsplash.com/photo-1618005198919-d3d4b5a92ead?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 4, 
      name: 'Pastel Dreams', 
      preview: 'https://images.unsplash.com/photo-1618556450991-2f1af64e8191?w=800&h=600&fit=crop&q=80'
    },
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
            <Wand2 className="w-5 h-5 text-viralspoon-purple" />
            Choose Design Template
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-5 gap-6 mt-4">
          <div className="col-span-3">
            <h3 className="text-sm font-semibold text-foreground mb-3">Select Template</h3>
            <div className="grid grid-cols-2 gap-3">
              {templates.map((template) => (
                <div
                  key={template.id}
                  className={`relative aspect-video group cursor-pointer rounded-lg overflow-hidden border-2 transition-all ${
                    selectedTemplate?.id === template.id
                      ? 'border-viralspoon-purple ring-4 ring-purple-200'
                      : 'border-border hover:border-viralspoon-purple'
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
                  <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-2">
                    <p className="text-xs text-white font-medium">{template.name}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="col-span-2 space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="text-sm font-semibold text-foreground">Add Text</h3>
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
              <div className="border-2 border-border rounded-lg p-4 bg-muted">
                <h4 className="text-xs font-semibold text-muted-foreground mb-2">Preview</h4>
                <div className="relative aspect-video rounded-lg overflow-hidden bg-muted">
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

        <div className="flex items-center justify-between pt-4 border-t border-border mt-4">
          <p className="text-xs text-muted-foreground">
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
    { 
      id: 1, 
      name: 'Product Showcase', 
      duration: '15s', 
      preview: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 2, 
      name: 'Story Template', 
      duration: '10s', 
      preview: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 3, 
      name: 'Promo Video', 
      duration: '20s', 
      preview: 'https://images.unsplash.com/photo-1536240478700-b869070f9279?w=800&h=600&fit=crop&q=80'
    },
    { 
      id: 4, 
      name: 'Tutorial Intro', 
      duration: '8s', 
      preview: 'https://images.unsplash.com/photo-1487017159836-4e23ece2e4cf?w=800&h=600&fit=crop&q=80'
    },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Video className="w-5 h-5 text-viralspoon-coral" />
            Choose Video Template
          </DialogTitle>
        </DialogHeader>

        <div className="grid grid-cols-2 gap-4 mt-4">
          {templates.map((template) => (
            <div
              key={template.id}
              className="relative aspect-video group cursor-pointer rounded-lg overflow-hidden border-2 border-border hover:border-viralspoon-coral transition-all"
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
              <div className="absolute bottom-0 left-0 right-0 bg-linear-to-t from-black/80 to-transparent p-3">
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

// Tag People Dialog
function TagPeopleDialog({ isOpen, onClose, onSave, existingTags = [] }) {
  const [tags, setTags] = useState(existingTags)
  const [searchQuery, setSearchQuery] = useState('')

  const handleAddTag = (person) => {
    if (!tags.find(t => t.id === person.id)) {
      setTags([...tags, person])
    }
    setSearchQuery('')
  }

  const handleRemoveTag = (id) => {
    setTags(tags.filter(t => t.id !== id))
  }

  const handleSave = () => {
    onSave(tags)
    onClose()
  }

  // Mock search results
  const searchResults = searchQuery ? [
    { id: 1, name: '@johndoe', avatar: 'https://i.pravatar.cc/150?img=1' },
    { id: 2, name: '@janedoe', avatar: 'https://i.pravatar.cc/150?img=2' },
    { id: 3, name: '@company', avatar: 'https://i.pravatar.cc/150?img=3' },
  ] : []

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-md">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <UserPlus className="w-5 h-5 text-viralspoon-purple" />
            Tag People
          </DialogTitle>
          <DialogDescription>
            Tag people or accounts in this post
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-4">
          {/* Search */}
          <div>
            <Label className="text-sm font-medium mb-2 block">Search accounts</Label>
            <Input
              placeholder="Search by username..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="mb-2"
            />
            {searchResults.length > 0 && (
              <div className="border border-border rounded-lg divide-y divide-border">
                {searchResults.map(person => (
                  <div
                    key={person.id}
                    onClick={() => handleAddTag(person)}
                    className="p-3 hover:bg-muted cursor-pointer flex items-center gap-3"
                  >
                    <img src={person.avatar} alt={person.name} className="w-8 h-8 rounded-full" />
                    <span className="text-sm font-medium text-foreground">{person.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Tagged People */}
          {tags.length > 0 && (
            <div>
              <Label className="text-sm font-medium mb-2 block">Tagged ({tags.length})</Label>
              <div className="space-y-2">
                {tags.map(tag => (
                  <div key={tag.id} className="flex items-center justify-between p-2 bg-muted rounded-lg">
                    <div className="flex items-center gap-2">
                      <img src={tag.avatar} alt={tag.name} className="w-6 h-6 rounded-full" />
                      <span className="text-sm font-medium text-foreground">{tag.name}</span>
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => handleRemoveTag(tag.id)}
                      className="h-6 w-6 p-0"
                    >
                      <X className="w-3 h-3" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save Tags
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}

// Multi-Image Manager Dialog
function MultiImageManagerDialog({ isOpen, onClose, channel, images, onSave }) {
  const [imageList, setImageList] = useState(images || [])
  const [currentIndex, setCurrentIndex] = useState(0)

  const handleAddImage = () => {
    setImageList([...imageList, { 
      id: Date.now(), 
      url: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=800&h=800&fit=crop&q=80',
      order: imageList.length 
    }])
  }

  const handleRemoveImage = (id) => {
    setImageList(imageList.filter(img => img.id !== id))
    if (currentIndex >= imageList.length - 1) {
      setCurrentIndex(Math.max(0, imageList.length - 2))
    }
  }

  const handlePrevious = () => {
    setCurrentIndex(Math.max(0, currentIndex - 1))
  }

  const handleNext = () => {
    setCurrentIndex(Math.min(imageList.length - 1, currentIndex + 1))
  }

  const handleSave = () => {
    onSave(imageList)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <Grid3x3 className="w-5 h-5 text-viralspoon-purple" />
            Manage Multiple Images for {channel}
          </DialogTitle>
          <DialogDescription>
            Add, remove, or reorder images for this channel. Perfect for carousel posts.
          </DialogDescription>
        </DialogHeader>

        {imageList.length > 0 && (
          <div className="relative">
            <div className="aspect-video rounded-lg overflow-hidden bg-muted border-2 border-border">
              <img 
                src={imageList[currentIndex]?.url} 
                alt={`Image ${currentIndex + 1}`} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {imageList.length > 1 && (
              <>
                <Button
                  variant="secondary-inverse"
                  size="sm"
                  className="absolute left-2 top-1/2 -translate-y-1/2"
                  onClick={handlePrevious}
                  disabled={currentIndex === 0}
                >
                  <ChevronLeft className="w-4 h-4" />
                </Button>
                <Button
                  variant="secondary-inverse"
                  size="sm"
                  className="absolute right-2 top-1/2 -translate-y-1/2"
                  onClick={handleNext}
                  disabled={currentIndex === imageList.length - 1}
                >
                  <ChevronRight className="w-4 h-4" />
                </Button>
                <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/70 text-white text-sm px-3 py-1 rounded-full">
                  {currentIndex + 1} / {imageList.length}
                </div>
              </>
            )}
          </div>
        )}

        <div className="grid grid-cols-6 gap-3 mt-4">
          {imageList.map((img, index) => (
            <div 
              key={img.id} 
              className={`relative group cursor-pointer ${
                index === currentIndex ? 'ring-2 ring-viralspoon-purple' : ''
              }`}
              onClick={() => setCurrentIndex(index)}
            >
              <div className="aspect-square rounded-lg overflow-hidden bg-muted border-2 border-border">
                <img src={img.url} alt={`Image ${index + 1}`} className="w-full h-full object-cover" />
              </div>
              <div className="absolute top-1 right-1 opacity-0 group-hover:opacity-100 transition-opacity">
                <Button
                  variant="destructive"
                  size="sm"
                  className="h-6 w-6 p-0"
                  onClick={(e) => {
                    e.stopPropagation()
                    handleRemoveImage(img.id)
                  }}
                >
                  <X className="w-3 h-3" />
                </Button>
              </div>
              <div className="absolute bottom-1 left-1 bg-black/70 text-white text-xs px-1.5 py-0.5 rounded">
                {index + 1}
              </div>
            </div>
          ))}
          
          <button
            onClick={handleAddImage}
            className="aspect-square rounded-lg border-2 border-dashed border-border hover:border-viralspoon-purple flex items-center justify-center transition-colors group"
          >
            <Plus className="w-6 h-6 text-gray-400 group-hover:text-viralspoon-purple " />
          </button>
        </div>

        <DialogFooter className="gap-3">
          <Button variant="outline" onClick={onClose}>
            Cancel
          </Button>
          <Button variant="primary" onClick={handleSave}>
            Save {imageList.length} Image{imageList.length !== 1 ? 's' : ''}
          </Button>
        </DialogFooter>
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
  if (platform === 'linkedin') {
    return (
      <svg className={iconClass} fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    )
  }
  return <Globe className={iconClass} />
}

const getPlatformColorClass = (key) => {
  if (key.includes('instagram')) return 'bg-linear-to-br from-purple-500 via-pink-500 to-orange-500'
  if (key.includes('facebook')) return 'bg-[#1877F2]'
  if (key.includes('linkedin')) return 'bg-[#0A66C2]'
  return 'bg-muted-foreground'
}

const getPlatformBorderClass = (key) => {
  if (key.includes('instagram')) return 'border-purple-200 bg-purple-50/50'
  if (key.includes('facebook')) return 'border-blue-200 bg-blue-50/50'
  if (key.includes('linkedin')) return 'border-blue-200 bg-blue-50/50'
  return 'border-border bg-muted/50'
}

export default function ChannelMediaCustomizationDialog({ 
  open, 
  onOpenChange
}) {
  const [channelMedia, setChannelMedia] = useState({
    instagram_post: {
      available: true,
      enabled: true,
      platform: 'instagram',
      format: 'post',
      aspectRatio: '4:5',
      dimensions: '1080x1350',
      preview: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=1080&h=1350&fit=crop&q=80',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0,
      imageCount: 1,
      taggedPeople: []
    },
    instagram_story: {
      available: true,
      enabled: true,
      platform: 'instagram',
      format: 'story',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?w=1080&h=1920&fit=crop&q=80',
      hasCustomization: true,
      fitMode: 'blur-sm',
      blur: 15,
      imageCount: 1
    },
    instagram_reel: {
      available: true,
      enabled: true,
      platform: 'instagram',
      format: 'reel',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=1080&h=1920&fit=crop&q=80',
      hasCustomization: true,
      fitMode: 'contain',
      blur: 0,
      imageCount: 1
    },
    facebook_post: {
      available: true,
      enabled: true,
      platform: 'facebook',
      format: 'post',
      aspectRatio: '1.91:1',
      dimensions: '1200x630',
      preview: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=630&fit=crop&q=80',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0,
      imageCount: 1,
      taggedPeople: []
    },
    facebook_story: {
      available: true,
      enabled: true,
      platform: 'facebook',
      format: 'story',
      aspectRatio: '9:16',
      dimensions: '1080x1920',
      preview: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?w=1080&h=1920&fit=crop&q=80',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0,
      imageCount: 1
    },
    linkedin_post: {
      available: true,
      enabled: true,
      platform: 'linkedin',
      format: 'post',
      aspectRatio: '1.91:1',
      dimensions: '1200x627',
      preview: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1200&h=627&fit=crop&q=80',
      hasCustomization: false,
      fitMode: 'cover',
      blur: 0,
      imageCount: 1
    },
  })

  const [selectedPlatforms, setSelectedPlatforms] = useState(['all'])
  const [globalFitMode, setGlobalFitMode] = useState('cover')
  const [globalBlur, setGlobalBlur] = useState(0)
  const [editingImage, setEditingImage] = useState(null)
  const [designTemplatesOpen, setDesignTemplatesOpen] = useState(false)
  const [videoTemplatesOpen, setVideoTemplatesOpen] = useState(false)
  const [multiImageChannel, setMultiImageChannel] = useState(null)
  const [tagPeopleChannel, setTagPeopleChannel] = useState(null)
  const [viewMode, setViewMode] = useState('masonry')

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
    setDesignTemplatesOpen(true)
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

  const handleReplaceImage = (channel) => {
    console.log(`Replace image for ${channel}`)
  }

  const handleDeleteImage = (channel) => {
    console.log(`Delete image for ${channel}`)
  }

  const handleTagPeopleSave = (tags) => {
    if (tagPeopleChannel) {
      setChannelMedia({
        ...channelMedia,
        [tagPeopleChannel]: {
          ...channelMedia[tagPeopleChannel],
          taggedPeople: tags
        }
      })
    }
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
        <DialogContent className="max-w-[85vw] w-full max-h-[90vh] overflow-y-auto">
          <DialogHeader className="space-y-2">
            <DialogTitle className="text-2xl font-black">Channel Media Customization</DialogTitle>
            <DialogDescription className="text-sm">
              {enabledCount} of {totalAvailable} channels enabled • Customize media for each platform
            </DialogDescription>
          </DialogHeader>

          {/* Two-Row Control Layout */}
          <div className="space-y-3 pb-4 border-b border-border">
            {/* First Row: Global Settings + Studio */}
            <div className="grid grid-cols-2 gap-4">
              {/* Global Settings */}
              <Card variant="soft-purple" className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-viralspoon-purple rounded-lg flex items-center justify-center">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm text-foreground">Global Settings</h4>
                    <p className="text-xs text-muted-foreground">Apply to all enabled channels</p>
                  </div>
                </div>

                <div className="grid grid-cols-4 gap-2 mb-3">
                  {fitModes.map(mode => (
                    <button
                      key={mode.value}
                      onClick={() => setGlobalFitMode(mode.value)}
                      className={`p-2 rounded-lg border-2 transition-all ${
                        globalFitMode === mode.value
                          ? 'border-viralspoon-purple bg-purple-50'
                          : 'border-border hover:border-gray-300'
                      }`}
                    >
                      <mode.icon className={`w-4 h-4 mx-auto mb-1 ${
                        globalFitMode === mode.value ? 'text-viralspoon-purple' : 'text-gray-400'
                      }`} />
                      <div className="text-xs font-medium text-foreground">
                        {mode.label}
                      </div>
                    </button>
                  ))}
                </div>

                {globalFitMode === 'blur-sm' && (
                  <div className="mb-3">
                    <Label className="text-xs mb-2 block">Blur: {globalBlur}px</Label>
                    <Slider
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
                  className="w-full"
                  onClick={applyGlobalSettings}
                >
                  <Wand2 className="w-3.5 h-3.5 mr-2" />
                  Apply to {enabledCount} Channel{enabledCount !== 1 ? 's' : ''}
                </Button>
              </Card>

              {/* ViralSpoon Studio */}
              <Card variant="gradient-vibrant" className="p-4">
                <div className="flex items-center gap-2 mb-3">
                  <div className="w-8 h-8 bg-white/20 backdrop-blur-xs rounded-lg flex items-center justify-center">
                    <Wand2 className="w-4 h-4 text-white" />
                  </div>
                  <div className="flex-1">
                    <div className="font-bold text-sm text-white mb-0.5">ViralSpoon Studio</div>
                    <div className="text-[10px] text-white/90 leading-tight">
                      Professional design & video templates with AI-powered text generation. Create stunning visuals in seconds.
                    </div>
                  </div>
                </div>
                <Button 
                  variant="secondary-inverse" 
                  size="default"
                  onClick={() => openStudio()}
                  className="w-full"
                >
                  <Sparkles className="w-4 h-4 mr-2" />
                  Open Studio
                </Button>
              </Card>
            </div>

            {/* Second Row: Platform Filters + View Toggle */}
            <div className="flex items-center justify-between gap-3">
              <div className="flex flex-wrap gap-2 flex-1">
                {platforms.map(platform => {
                  const isSelected = selectedPlatforms.includes(platform.value)
                  return (
                    <Badge
                      key={platform.value}
                      variant={isSelected ? 'filter-soft-purple' : 'filter-soft-purple-unselected'}
                      className="cursor-pointer inline-flex items-center gap-2 text-xs py-1.5 px-3"
                      onClick={() => togglePlatform(platform.value)}
                    >
                      <div className={`w-4 h-4 rounded flex items-center justify-center ${
                        isSelected 
                          ? 'bg-purple-400' 
                          : 'bg-purple-200'
                      }`}>
                        {getPlatformIcon(platform.value, 'w-2.5 h-2.5')}
                      </div>
                      {platform.label}
                    </Badge>
                  )
                })}
              </div>
              
              {/* View Mode Toggle */}
              <div className="flex items-center gap-2 shrink-0">
                <Button
                  variant={viewMode === 'grid' ? 'primary' : 'outline-solid'}
                  size="sm"
                  onClick={() => setViewMode('grid')}
                  title="Grid View"
                >
                  <Grid3x3 className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === 'masonry' ? 'primary' : 'outline-solid'}
                  size="sm"
                  onClick={() => setViewMode('masonry')}
                  title="Masonry View"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Channel Grid/Masonry - FIXED 4 COLUMNS */}
          <div className={
            viewMode === 'masonry' 
              ? 'columns-4 gap-3' 
              : 'grid grid-cols-4 gap-3'
          }>
            {getFilteredChannels().map(([key, data]) => {
              const platformName = key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')
              const hasAspectRatioOptions = aspectRatioPresets[key] !== undefined
              const canTagPeople = supportsTagging.includes(key)
              
              return (
                <Card key={key} className={`p-2.5 border-2 transition-all ${
                  viewMode === 'masonry' ? 'break-inside-avoid inline-block w-full mb-3' : ''
                } ${
                  data.available 
                    ? getPlatformBorderClass(key) 
                    : 'border-border opacity-60'
                }`}>
                  {/* Header */}
                  <div className="flex items-center justify-between mb-2">
                    <div className="flex items-center gap-1.5 min-w-0">
                      <div className={`w-6 h-6 rounded-md flex items-center justify-center shrink-0 ${
                        getPlatformColorClass(key)
                      }`}>
                        {getPlatformIcon(data.platform, 'w-3 h-3')}
                      </div>
                      <div className="min-w-0">
                        <div className="flex items-center gap-1">
                          <h5 className="font-bold text-[10px] text-foreground truncate">{platformName}</h5>
                          {data.hasCustomization && data.enabled && (
                            <Badge variant="soft-green" className="text-[8px] px-1 py-0 leading-none">Custom</Badge>
                          )}
                          {data.imageCount > 1 && (
                            <Badge variant="soft-blue" className="text-[8px] px-1 py-0 leading-none">{data.imageCount}</Badge>
                          )}
                          {data.taggedPeople?.length > 0 && (
                            <Badge variant="soft-coral" className="text-[8px] px-1 py-0 leading-none">
                              <Users className="w-2 h-2" />
                            </Badge>
                          )}
                        </div>
                        <p className="text-[9px] text-muted-foreground">{data.aspectRatio}</p>
                      </div>
                    </div>
                    <Switch
                      checked={data.enabled}
                      onCheckedChange={() => toggleChannel(key)}
                      disabled={!data.available}
                      className="scale-[0.65]"
                    />
                  </div>

                  {data.enabled && data.available && (
                    <>
                      {/* Preview */}
                      <div 
                        className="relative w-full rounded-md overflow-hidden bg-muted group cursor-pointer mb-2"
                        style={{ aspectRatio: data.aspectRatio.replace(':', '/') }}
                      >
                        <img 
                          src={data.preview} 
                          alt={platformName}
                          className="w-full h-full"
                          style={{ 
                            objectFit: data.fitMode === 'blur-sm' ? 'contain' : data.fitMode,
                            filter: data.fitMode === 'blur-sm' ? `blur(${data.blur}px)` : 'none'
                          }}
                        />
                        {data.fitMode === 'blur-sm' && (
                          <img 
                            src={data.preview}
                            alt=""
                            className="absolute inset-0 w-full h-full object-contain"
                          />
                        )}
                        
                        {/* Hover Actions */}
                        <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity flex flex-col items-center justify-center gap-2 p-3">
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => handleImageEdit(data.preview)}
                            className="w-full h-7 text-[10px]"
                          >
                            <Pencil className="w-3 h-3 mr-1.5" />
                            Edit Image
                          </Button>
                          <Button 
                            variant="secondary" 
                            size="sm"
                            onClick={() => handleReplaceImage(key)}
                            className="w-full h-7 text-[10px]"
                          >
                            <Upload className="w-3 h-3 mr-1.5" />
                            Replace
                          </Button>
                          <Button 
                            variant="destructive" 
                            size="sm"
                            onClick={() => handleDeleteImage(key)}
                            className="w-full h-7 text-[10px]"
                          >
                            <X className="w-3 h-3 mr-1.5" />
                            Delete
                          </Button>
                        </div>
                      </div>

                      {/* Controls - MIT MEHR ABSTAND */}
                      <div className="space-y-2">
                        {/* Aspect Ratio Selector */}
                        {hasAspectRatioOptions && (
                          <Select 
                            value={data.aspectRatio}
                            onValueChange={(value) => {
                              const preset = aspectRatioPresets[key].find(p => p.value === value)
                              updateChannelSettings(key, 'aspectRatio', value)
                              updateChannelSettings(key, 'dimensions', preset.dimensions)
                            }}
                          >
                            <SelectTrigger className="h-6 text-[9px]">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {aspectRatioPresets[key].map(preset => (
                                <SelectItem key={preset.value} value={preset.value} className="text-[9px]">
                                  {preset.label}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        )}

                        <Select 
                          value={data.fitMode}
                          onValueChange={(value) => updateChannelSettings(key, 'fitMode', value)}
                        >
                          <SelectTrigger className="h-6 text-[9px]">
                            <SelectValue />
                          </SelectTrigger>
                          <SelectContent>
                            {fitModes.map(mode => (
                              <SelectItem key={mode.value} value={mode.value} className="text-[9px]">
                                {mode.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>

                        {data.fitMode === 'blur-sm' && (
                          <Slider
                            value={[data.blur]}
                            onValueChange={(value) => updateChannelSettings(key, 'blur-sm', value[0])}
                            min={0}
                            max={50}
                            step={1}
                            className="h-0.5"
                          />
                        )}

                        {/* TAG PEOPLE BUTTON - NUR WENN VERFÜGBAR */}
                        {canTagPeople && (
                          <Button 
                            variant="outline" 
                            size="sm"
                            onClick={() => setTagPeopleChannel(key)}
                            className="w-full h-6 text-[9px]"
                          >
                            <UserPlus className="w-3 h-3 mr-1.5" />
                            {data.taggedPeople?.length > 0 
                              ? `Tagged (${data.taggedPeople.length})`
                              : 'Tag People'
                            }
                          </Button>
                        )}

                        {/* STUDIO BUTTON */}
                        <Button 
                          variant="primary" 
                          size="sm"
                          onClick={() => openStudio(key)}
                          className="w-full h-7 text-[10px]"
                        >
                          <Wand2 className="w-3 h-3 mr-1.5" />
                          Open Studio
                        </Button>
                      </div>
                    </>
                  )}

                  {!data.available && (
                    <div className="flex items-center gap-1.5 text-xs text-muted-foreground justify-center py-3">
                      <Lock className="w-3 h-3" />
                      <span className="text-[9px]">Not available</span>
                    </div>
                  )}
                </Card>
              )
            })}
          </div>

          {getFilteredChannels().length === 0 && (
            <Card className="p-12 text-center">
              <ImageIcon className="w-12 h-12 text-gray-400 mx-auto mb-3" />
              <h4 className="font-bold text-base text-foreground mb-1">No channels match</h4>
              <p className="text-xs text-muted-foreground">
                Select a different platform
              </p>
            </Card>
          )}
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
      <TagPeopleDialog
        isOpen={!!tagPeopleChannel}
        onClose={() => setTagPeopleChannel(null)}
        existingTags={tagPeopleChannel ? channelMedia[tagPeopleChannel]?.taggedPeople : []}
        onSave={handleTagPeopleSave}
      />
      <MultiImageManagerDialog
        isOpen={!!multiImageChannel}
        onClose={() => setMultiImageChannel(null)}
        channel={multiImageChannel}
        images={multiImageChannel ? channelMedia[multiImageChannel]?.images : []}
        onSave={(images) => {
          setChannelMedia({
            ...channelMedia,
            [multiImageChannel]: {
              ...channelMedia[multiImageChannel],
              images,
              imageCount: images.length
            }
          })
        }}
      />
    </>
  )
}