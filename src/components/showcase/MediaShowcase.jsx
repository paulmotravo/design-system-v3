// MediaShowcase.jsx - MIT ECHTEM CUSTOMIZATION DIALOG
import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { Upload, X, Search, Sparkles, AlertCircle, Image as ImageIcon, FolderOpen, Grid3x3, Pencil, Wand2, Video, ExternalLink } from 'lucide-react'
import { useState } from 'react'
import ChannelMediaCustomizationDialog from '@/components/showcase/ChannelMediaCustomizationDialog'

// ===== IMAGE EDITOR DIALOG =====
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
                src={image?.type === 'upload' ? URL.createObjectURL(image.data) : image?.data?.url}
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
              <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-white">Brightness</label>
              <input
                type="range"
                min="0"
                max="200"
                value={brightness}
                onChange={(e) => setBrightness(e.target.value)}
                className="w-full"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{brightness}%</span>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-white">Contrast</label>
              <input
                type="range"
                min="0"
                max="200"
                value={contrast}
                onChange={(e) => setContrast(e.target.value)}
                className="w-full"
              />
              <span className="text-xs text-gray-500 dark:text-gray-400">{contrast}%</span>
            </div>

            <div>
              <label className="text-sm font-medium mb-2 block text-gray-900 dark:text-white">Saturation</label>
              <input
                type="range"
                min="0"
                max="200"
                value={saturation}
                onChange={(e) => setSaturation(e.target.value)}
                className="w-full"
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

// ===== DESIGN TEMPLATES DIALOG =====
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
                  {isGenerating ? 'Generating...' : 'Generate with Copilot'}
                </Button>
              </div>

              <div className="space-y-3">
                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Headline
                  </label>
                  <Input
                    placeholder="Enter headline..."
                    value={headline}
                    onChange={(e) => setHeadline(e.target.value)}
                    className="text-sm"
                  />
                </div>

                <div>
                  <label className="text-xs font-medium text-gray-700 dark:text-gray-300 mb-1 block">
                    Subheadline
                  </label>
                  <Textarea
                    placeholder="Enter subheadline..."
                    value={subheadline}
                    onChange={(e) => setSubheadline(e.target.value)}
                    rows={3}
                    className="text-sm resize-none"
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

// ===== VIDEO TEMPLATES DIALOG =====
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

// ===== MEDIA LIBRARY OVERLAY =====
function MediaLibraryOverlay({ isOpen, onClose, onSelect }) {
  const mediaLibrary = [
    { id: 1, url: 'https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=400&h=400&fit=crop', name: 'Team Meeting' },
    { id: 2, url: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=400&h=400&fit=crop', name: 'Office Space' },
    { id: 3, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=400&h=400&fit=crop', name: 'Collaboration' },
    { id: 4, url: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=400&h=400&fit=crop', name: 'Workspace' },
    { id: 5, url: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=400&fit=crop', name: 'Business Meeting' },
    { id: 6, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=400&h=400&fit=crop', name: 'Tech Team' },
  ]

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-4xl max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold flex items-center gap-2">
            <FolderOpen className="w-5 h-5 text-viralspoon-purple dark:text-purple-400" />
            Media Library
          </DialogTitle>
        </DialogHeader>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {mediaLibrary.map((image) => (
            <div
              key={image.id}
              className="relative aspect-square group cursor-pointer rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 hover:border-viralspoon-purple dark:hover:border-purple-500 transition-all"
              onClick={() => {
                onSelect({ type: 'library', data: image })
                onClose()
              }}
            >
              <img
                src={image.url}
                alt={image.name}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button variant="secondary-inverse" size="sm">
                  Select
                </Button>
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-3">
                <p className="text-xs text-white font-medium truncate">{image.name}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-4">
          <Button variant="outline">Load More</Button>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ===== STOCK MEDIA OVERLAY =====
function StockMediaOverlay({ isOpen, onClose, onSelect }) {
  const [searchQuery, setSearchQuery] = useState('')
  const [mediaType, setMediaType] = useState('all')
  const [orientation, setOrientation] = useState('any')
  const [selectedImages, setSelectedImages] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  
  const stockImages = [
    { id: 1, url: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=400&fit=crop', photographer: 'Susan Flores', dimensions: '4000x6016', type: 'photo' },
    { id: 2, url: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=600&h=400&fit=crop', photographer: 'Stephen Leonardi', dimensions: '6571x4005', type: 'photo' },
    { id: 3, url: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=600&h=400&fit=crop', photographer: 'urtimud.89', dimensions: '4000x6000', type: 'photo' },
    { id: 4, url: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=600&h=400&fit=crop', photographer: 'Jacson Ang', dimensions: '3069x4604', type: 'photo' },
    { id: 5, url: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=600&h=400&fit=crop', photographer: 'Michael Lee', dimensions: '5184x3456', type: 'photo' },
    { id: 6, url: 'https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?w=600&h=400&fit=crop', photographer: 'Emma Watson', dimensions: '4608x3072', type: 'photo' },
    { id: 7, url: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&h=400&fit=crop', photographer: 'Alex Johnson', dimensions: '5472x3648', type: 'photo' },
    { id: 8, url: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop', photographer: 'Sarah Miller', dimensions: '6000x4000', type: 'photo' },
  ]

  const toggleImageSelection = (image) => {
    setSelectedImages(prev => {
      const isSelected = prev.find(img => img.id === image.id)
      if (isSelected) {
        return prev.filter(img => img.id !== image.id)
      } else {
        return [...prev, image]
      }
    })
  }

  const isImageSelected = (imageId) => {
    return selectedImages.find(img => img.id === imageId)
  }

  const handleAddMedia = () => {
    selectedImages.forEach(image => {
      onSelect({ type: 'stock', data: image })
    })
    setSelectedImages([])
    onClose()
  }

  const handleSearch = () => {
    console.log('Searching for:', searchQuery)
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-[1400px] max-h-[90vh] p-0 gap-0">
        <div className="px-6 pt-6 pb-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-start justify-between mb-3">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pexels Library</h2>
              <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                Browse royalty-free photos and videos from Pexels or add curated suggestions.
              </p>
            </div>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex gap-3">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
              <Input
                placeholder="Search by topics, styles, or keywords"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
                className="pl-11 h-11"
              />
            </div>
            <Button 
              onClick={handleSearch}
              className="h-11 px-8"
              variant="primary"
            >
              Search
            </Button>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-gray-200 dark:border-gray-800">
          <div className="flex items-center gap-3">
            <div className="flex gap-2">
              <Button
                variant={mediaType === 'all' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMediaType('all')}
                className={mediaType === 'all' ? 'bg-viralspoon-coral hover:bg-viralspoon-coral/90' : ''}
              >
                All Media
              </Button>
              <Button
                variant={mediaType === 'photos' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMediaType('photos')}
              >
                Photos
              </Button>
              <Button
                variant={mediaType === 'videos' ? 'default' : 'ghost'}
                size="sm"
                onClick={() => setMediaType('videos')}
              >
                Videos
              </Button>
            </div>

            <div className="h-6 w-px bg-gray-200 dark:bg-gray-800" />

            <select
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
              className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-viralspoon-purple"
            >
              <option value="any">Any</option>
              <option value="landscape">Landscape</option>
              <option value="portrait">Portrait</option>
              <option value="square">Square</option>
            </select>

            <select
              className="px-3 py-1.5 text-sm border border-gray-200 dark:border-gray-700 rounded-md bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-viralspoon-purple"
            >
              <option value="any">Any</option>
            </select>
          </div>
        </div>

        {selectedImages.length > 0 && (
          <div className="px-6 py-2 bg-blue-50 dark:bg-blue-950/20 border-b border-gray-200 dark:border-gray-800">
            <p className="text-sm text-gray-700 dark:text-gray-300">
              {selectedImages.length} selected (max. 10)
            </p>
          </div>
        )}

        <div className="px-6 py-6 overflow-y-auto flex-1">
          <div className="grid grid-cols-4 gap-4">
            {stockImages.map((image) => {
              const selected = isImageSelected(image.id)
              return (
                <div
                  key={image.id}
                  className={`relative aspect-[4/3] group rounded-lg overflow-hidden cursor-pointer transition-all ${
                    selected ? 'ring-4 ring-viralspoon-purple' : 'hover:ring-2 hover:ring-gray-300 dark:hover:ring-gray-600'
                  }`}
                  onClick={() => toggleImageSelection(image)}
                >
                  <img
                    src={image.url}
                    alt={image.photographer}
                    className="w-full h-full object-cover"
                  />
                  
                  {selected && (
                    <div className="absolute top-3 left-3 w-8 h-8 bg-viralspoon-purple rounded-full flex items-center justify-center shadow-lg">
                      <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  )}

                  <button 
                    onClick={(e) => {
                      e.stopPropagation()
                      console.log('Expand image', image.id)
                    }}
                    className="absolute top-3 right-3 w-8 h-8 bg-white/90 dark:bg-gray-800/90 hover:bg-white dark:hover:bg-gray-800 rounded-md flex items-center justify-center transition-colors opacity-0 group-hover:opacity-100"
                  >
                    <svg className="w-4 h-4 text-gray-900 dark:text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4" />
                    </svg>
                  </button>

                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent p-3">
                    <p className="text-xs text-white font-medium">{image.photographer}</p>
                    <div className="flex items-center gap-2 mt-1">
                      <span className="text-xs text-white/80">{image.dimensions}</span>
                      <Badge variant="secondary" className="text-xs bg-orange-500/90 hover:bg-orange-500 text-white border-0">
                        <ImageIcon className="w-3 h-3 mr-1" />
                        Photos
                      </Badge>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        <div className="px-6 py-4 border-t border-gray-200 dark:border-gray-800">
          <div className="flex items-center justify-center mb-4">
            <div className="flex items-center gap-4">
              <button
                disabled={currentPage === 1}
                onClick={() => setCurrentPage(prev => prev - 1)}
                className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
              >
                &lt; Previous
              </button>
              <span className="text-sm text-gray-600 dark:text-gray-400">
                Page {currentPage} of 31191
              </span>
              <button
                onClick={() => setCurrentPage(prev => prev + 1)}
                className="px-3 py-1 text-sm text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
              >
                Next &gt;
              </button>
              <Input
                type="number"
                value={currentPage}
                onChange={(e) => setCurrentPage(Number(e.target.value))}
                className="w-16 h-8 text-center text-sm"
              />
            </div>
          </div>

          <div className="flex items-center justify-between">
            <a href="https://www.pexels.com/license/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-gray-600 dark:text-gray-400 hover:text-viralspoon-purple dark:hover:text-purple-400 transition-colors"
            >
              Pexels License & Terms
            </a>

            <div className="flex items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer group">
                <span className="text-sm text-gray-700 dark:text-gray-300">
                  Add photographer attribution
                </span>
                <div className="relative">
                  <input
                    type="checkbox"
                    defaultChecked={true}
                    className="sr-only peer"
                  />
                  <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-purple-300 dark:peer-focus:ring-purple-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-viralspoon-purple"></div>
                </div>
              </label>

              <Button
                variant="primary"
                onClick={handleAddMedia}
                disabled={selectedImages.length === 0}
              >
                Add {selectedImages.length} media
              </Button>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}

// ===== DEMO: Premium Design mit VERBESSERTEM User Flow =====
function PremiumMediaUploadDemo() {
  const [selectedFiles, setSelectedFiles] = useState([])
  const [libraryOpen, setLibraryOpen] = useState(false)
  const [stockOpen, setStockOpen] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [editingImage, setEditingImage] = useState(null)
  const [designTemplatesOpen, setDesignTemplatesOpen] = useState(false)
  const [videoTemplatesOpen, setVideoTemplatesOpen] = useState(false)
  const [customizationOpen, setCustomizationOpen] = useState(false)
  const [channelMedia, setChannelMedia] = useState({
    instagram: { files: [] },
    facebook: { files: [] },
    twitter: { files: [] },
    linkedin: { files: [] }
  })

  const handleFileUpload = (e) => {
    const newFiles = Array.from(e.target.files)
    setSelectedFiles(prev => [...prev, ...newFiles.map(f => ({ type: 'upload', data: f }))])
  }

  const handleDrop = (e) => {
    e.preventDefault()
    setIsDragging(false)
    
    const droppedFiles = Array.from(e.dataTransfer.files)
    const validFiles = droppedFiles.filter(file => 
      file.type.startsWith('image/') || file.type.startsWith('video/')
    )
    
    if (validFiles.length > 0) {
      setSelectedFiles(prev => [...prev, ...validFiles.map(f => ({ type: 'upload', data: f }))])
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
    setIsDragging(true)
  }

  const handleDragLeave = (e) => {
    e.preventDefault()
    setIsDragging(false)
  }

  const handleSelect = (item) => {
    setSelectedFiles(prev => [...prev, item])
  }

  const removeFile = (index) => {
    setSelectedFiles(prev => prev.filter((_, i) => i !== index))
  }

  const handleImageEdit = (image) => {
    setEditingImage(image)
  }

  const handleImageSave = (editedImage) => {
    const updatedFiles = selectedFiles.map(file => 
      file === editingImage ? editedImage : file
    )
    setSelectedFiles(updatedFiles)
    setEditingImage(null)
  }

  const handleDesignApply = (designData) => {
    console.log('Design applied:', designData)
    if (selectedFiles.length > 0) {
      const updatedFiles = [...selectedFiles]
      updatedFiles[0] = {
        ...updatedFiles[0],
        designApplied: designData
      }
      setSelectedFiles(updatedFiles)
    }
  }

  const handleVideoTemplateApply = (template) => {
    console.log('Video template applied:', template)
    if (selectedFiles.length > 0) {
      const updatedFiles = [...selectedFiles]
      updatedFiles[0] = {
        ...updatedFiles[0],
        videoTemplate: template
      }
      setSelectedFiles(updatedFiles)
    }
  }

  const handleOpenStudio = (item) => {
    console.log('Opening ViralSpoon Studio for:', item)
  }

  return (
    <div className="space-y-6">
      <div className="flex items-start justify-between">
        <div>
          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">Media & Visuals</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Add media from different sources
          </p>
        </div>
        <Button 
          variant="outline" 
          size="sm" 
          className="flex-shrink-0"
          onClick={() => setCustomizationOpen(true)}
        >
          Customize per Channel
        </Button>
      </div>

      <div 
        className={`border-2 border-dashed rounded-2xl p-8 transition-all ${
          isDragging 
            ? 'border-viralspoon-purple bg-purple-50 dark:bg-purple-950/20 scale-[1.02]' 
            : 'border-purple-200 dark:border-purple-900/50 bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/30 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-orange-950/10'
        }`}
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
      >
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-gradient-to-br from-viralspoon-purple/20 to-viralspoon-coral/20 dark:from-purple-600/20 dark:to-orange-600/20 rounded-2xl flex items-center justify-center mx-auto mb-4 backdrop-blur-sm">
            <ImageIcon className="w-8 h-8 text-viralspoon-purple dark:text-purple-400" />
          </div>
          <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
            {isDragging ? 'Drop files here' : 'Add your media'}
          </h4>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            {isDragging ? 'Release to upload' : 'Drag & Drop, Upload, Library or Stock Photos'}
          </p>
        </div>

        <div className="grid grid-cols-3 gap-4">
          <div className="relative">
            <input
              type="file"
              multiple
              accept="image/*,video/*"
              className="hidden"
              id="premium-upload"
              onChange={handleFileUpload}
            />
            <label htmlFor="premium-upload" className="cursor-pointer">
              <div className="h-32 bg-white dark:bg-gray-800 rounded-xl border-2 border-purple-200 dark:border-purple-900/50 hover:border-viralspoon-purple dark:hover:border-purple-500 hover:shadow-lg hover:shadow-purple-100 dark:hover:shadow-purple-900/20 transition-all flex flex-col items-center justify-center gap-3 group">
                <div className="w-12 h-12 bg-gradient-to-br from-purple-100 to-purple-200 dark:from-purple-900/40 dark:to-purple-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <Upload className="w-6 h-6 text-viralspoon-purple dark:text-purple-400" />
                </div>
                <div className="text-center">
                  <div className="text-sm font-semibold text-gray-900 dark:text-white">
                    Upload
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Your files
                  </div>
                </div>
              </div>
            </label>
          </div>

          <button
            onClick={() => setLibraryOpen(true)}
            className="h-32 bg-white dark:bg-gray-800 rounded-xl border-2 border-orange-200 dark:border-orange-900/50 hover:border-viralspoon-coral dark:hover:border-orange-500 hover:shadow-lg hover:shadow-orange-100 dark:hover:shadow-orange-900/20 transition-all flex flex-col items-center justify-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-orange-100 to-orange-200 dark:from-orange-900/40 dark:to-orange-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <FolderOpen className="w-6 h-6 text-viralspoon-coral dark:text-orange-400" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                Library
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Saved media
              </div>
            </div>
          </button>

          <button
            onClick={() => setStockOpen(true)}
            className="h-32 bg-white dark:bg-gray-800 rounded-xl border-2 border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-500 dark:hover:border-emerald-500 hover:shadow-lg hover:shadow-emerald-100 dark:hover:shadow-emerald-900/20 transition-all flex flex-col items-center justify-center gap-3 group"
          >
            <div className="w-12 h-12 bg-gradient-to-br from-emerald-100 to-emerald-200 dark:from-emerald-900/40 dark:to-emerald-800/40 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
              <Grid3x3 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
            </div>
            <div className="text-center">
              <div className="text-sm font-semibold text-gray-900 dark:text-white">
                Stock Media
              </div>
              <div className="text-xs text-gray-500 dark:text-gray-400">
                Professional photos
              </div>
            </div>
          </button>
        </div>
      </div>

      {selectedFiles.length > 0 && (
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white">
              Selected Media ({selectedFiles.length})
            </h4>
            <div className="flex gap-2">
              <Button
                variant="secondary"
                size="sm"
                onClick={() => setDesignTemplatesOpen(true)}
              >
                <Wand2 className="w-4 h-4 mr-2" />
                Apply Design Template
              </Button>
              <Button
                variant="primary"
                size="sm"
                onClick={() => setVideoTemplatesOpen(true)}
              >
                <Video className="w-4 h-4 mr-2" />
                Apply Video Template
              </Button>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedFiles([])}
                className="text-gray-500 hover:text-red-600"
              >
                Remove All
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-4 gap-4">
            {selectedFiles.map((item, index) => (
              <div key={index} className="relative aspect-square group">
                <img
                  src={item.type === 'upload' ? URL.createObjectURL(item.data) : item.data.url}
                  alt={`Selected ${index + 1}`}
                  className="w-full h-full object-cover rounded-xl border-2 border-gray-200 dark:border-gray-700"
                />
                
                <button
                  onClick={() => handleImageEdit(item)}
                  className="absolute top-2 left-2 w-8 h-8 bg-viralspoon-purple hover:bg-viralspoon-purple/90 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <Pencil className="w-4 h-4" />
                </button>

                <button
                  onClick={() => removeFile(index)}
                  className="absolute top-2 right-2 w-7 h-7 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity shadow-lg"
                >
                  <X className="w-4 h-4" />
                </button>

                <Badge
                  variant={
                    item.type === 'upload' ? 'soft-blue' :
                    item.type === 'library' ? 'soft-purple' :
                    'soft-green'
                  }
                  className="absolute bottom-2 left-2 text-xs shadow-lg"
                >
                  {item.type === 'upload' ? 'Upload' :
                   item.type === 'library' ? 'Library' :
                   'Stock'}
                </Badge>

                {item.filters && (
                  <Badge
                    variant="soft-purple"
                    className="absolute bottom-2 right-2 text-xs shadow-lg"
                  >
                    Edited
                  </Badge>
                )}

                {item.designApplied && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-3">
                    <Badge variant="soft-green" className="mb-2 text-xs shadow-lg">
                      <Wand2 className="w-3 h-3 mr-1" />
                      Design Applied
                    </Badge>
                    <Button
                      variant="secondary-inverse"
                      size="sm"
                      onClick={() => handleOpenStudio(item)}
                      className="text-xs h-7"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Open Studio
                    </Button>
                  </div>
                )}

                {item.videoTemplate && (
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col items-center justify-end p-3">
                    <Badge variant="soft-coral" className="mb-2 text-xs shadow-lg">
                      <Video className="w-3 h-3 mr-1" />
                      Video Template Applied
                    </Badge>
                    <Button
                      variant="secondary-inverse"
                      size="sm"
                      onClick={() => handleOpenStudio(item)}
                      className="text-xs h-7"
                    >
                      <ExternalLink className="w-3 h-3 mr-1" />
                      Open Studio
                    </Button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <MediaLibraryOverlay
        isOpen={libraryOpen}
        onClose={() => setLibraryOpen(false)}
        onSelect={handleSelect}
      />
      <StockMediaOverlay
        isOpen={stockOpen}
        onClose={() => setStockOpen(false)}
        onSelect={handleSelect}
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
      <ImageEditorDialog
        isOpen={!!editingImage}
        onClose={() => setEditingImage(null)}
        image={editingImage}
        onSave={handleImageSave}
      />
      <ChannelMediaCustomizationDialog
        open={customizationOpen}
        onOpenChange={setCustomizationOpen}
        channelMedia={channelMedia}
        onChannelMediaChange={setChannelMedia}
      />
    </div>
  )
}

// Main Showcase Component
export default function MediaShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Media Upload Patterns</h3>
        <p className="text-gray-600 dark:text-gray-400">
          Improved User Flow: Upload First, Apply Templates After
        </p>
      </div>

      <div className="space-y-8">
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Improved User Flow</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>1. Upload Media First:</strong> User adds images/videos from different sources</p>
                <p>→ <strong>2. Apply Templates:</strong> "Apply Design Template" & "Apply Video Template" buttons appear with selected media</p>
                <p>→ <strong>3. Customize:</strong> In template dialog → choose template + add headline/subheadline with Copilot</p>
                <p>→ <strong>4. Open Studio:</strong> After applying, "Open ViralSpoon Studio" button for further editing</p>
                <p>→ <strong>Visual Feedback:</strong> Badges show "Design Applied" or "Video Template Applied"</p>
                <p>→ <strong>Customize per Channel:</strong> Button opens dialog to customize media for each platform</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <div className="mb-6">
            <div className="flex items-center gap-3 mb-2">
              <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider">
                Premium Design - Improved UX
              </h4>
              <Badge variant="soft-purple">Better User Flow</Badge>
              <Badge variant="soft-green">Customize Button Fixed</Badge>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              "Customize per Channel" button now opens a dialog for platform-specific media customization
            </p>
          </div>

          <PremiumMediaUploadDemo />
        </Card>
      </div>
    </div>
  )
}

// Export Production Component
export function MediaUpload({ 
  onMediaChange, 
  onCustomizeClick, 
  initialFiles = [],
  hasCustomizations = false 
}) {
  return <PremiumMediaUploadDemo />
}