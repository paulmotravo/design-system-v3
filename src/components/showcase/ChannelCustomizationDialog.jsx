import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Sparkles, AtSign, MapPin, ArrowDown, ArrowUp, BookOpen, Smile, Edit3, Bold, Italic, Underline } from 'lucide-react'
import { useState, useRef, useEffect } from 'react'

// Emoji Picker
function EmojiPicker({ onSelect }) {
  const emojis = [
    '😀', '😃', '😄', '😁', '😅', '😂', '🤣', '😊', '😇', '🙂',
    '😉', '😌', '😍', '🥰', '😘', '😗', '😙', '😚', '😋', '😛',
    '😝', '😜', '🤪', '🤨', '🧐', '🤓', '😎', '🤩', '🥳', '😏',
    '❤️', '🧡', '💛', '💚', '💙', '💜', '🖤', '🤍', '🤎', '💔',
    '❤️‍🔥', '❤️‍🩹', '💕', '💞', '💓', '💗', '💖', '💘', '💝', '💟',
    '👍', '👎', '👌', '✌️', '🤞', '🤟', '🤘', '🤙', '👈', '👉',
    '🎉', '🎊', '🎈', '🎁', '🏆', '🥇', '🥈', '🥉', '⭐', '🌟',
    '✨', '💫', '🔥', '💥', '💯', '✅', '❌', '⚠️', '🚀', '💡'
  ]

  return (
    <div className="grid grid-cols-10 gap-1 p-2 max-h-48 overflow-y-auto">
      {emojis.map((emoji, index) => (
        <button
          key={index}
          onClick={() => onSelect(emoji)}
          className="w-8 h-8 flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 rounded text-lg transition-colors"
        >
          {emoji}
        </button>
      ))}
    </div>
  )
}

// Unicode Editor Toolbar
function UnicodeEditorToolbar({ textareaRef, onTextUpdate }) {
  const insertFormatting = (type) => {
    if (!textareaRef.current) return
    
    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const selectedText = textarea.value.substring(start, end)
    const beforeText = textarea.value.substring(0, start)
    const afterText = textarea.value.substring(end)
    
    let formattedText = ''
    
    switch(type) {
      case 'bold':
        formattedText = selectedText.split('').map(char => {
          const code = char.charCodeAt(0)
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119743)
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119737)
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 120734)
          return char
        }).join('')
        break
      case 'italic':
        formattedText = selectedText.split('').map(char => {
          const code = char.charCodeAt(0)
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119795)
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119789)
          return char
        }).join('')
        break
      case 'underline':
        formattedText = selectedText.split('').map(char => char + '\u0332').join('')
        break
      default:
        formattedText = selectedText
    }
    
    const newText = beforeText + formattedText + afterText
    onTextUpdate(newText)
    
    setTimeout(() => {
      textarea.focus()
      const newPosition = start + formattedText.length
      textarea.setSelectionRange(newPosition, newPosition)
    }, 0)
  }

  const insertEmoji = (emoji) => {
    if (!textareaRef.current) return
    
    const textarea = textareaRef.current
    const start = textarea.selectionStart
    const end = textarea.selectionEnd
    const beforeText = textarea.value.substring(0, start)
    const afterText = textarea.value.substring(end)
    
    const newText = beforeText + emoji + afterText
    onTextUpdate(newText)
    
    setTimeout(() => {
      textarea.focus()
      const newPosition = start + emoji.length
      textarea.setSelectionRange(newPosition, newPosition)
    }, 0)
  }

  return (
    <div className="flex items-center gap-1 p-1 bg-gray-100 dark:bg-gray-800 rounded-lg border border-gray-200 dark:border-gray-700">
      <button
        onClick={() => insertFormatting('bold')}
        className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
        title="Bold (Unicode - nur A-Z, a-z, 0-9)"
      >
        <Bold className="w-4 h-4" />
      </button>
      <button
        onClick={() => insertFormatting('italic')}
        className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
        title="Italic (Unicode - nur A-Z, a-z)"
      >
        <Italic className="w-4 h-4" />
      </button>
      <button
        onClick={() => insertFormatting('underline')}
        className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
        title="Underline (Unicode)"
      >
        <Underline className="w-4 h-4" />
      </button>
      <div className="w-px h-5 bg-gray-300 dark:bg-gray-600 mx-1" />
      <Popover>
        <PopoverTrigger asChild>
          <button
            className="p-1.5 rounded hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 transition-colors"
            title="Insert Emoji"
          >
            <Smile className="w-4 h-4" />
          </button>
        </PopoverTrigger>
        <PopoverContent className="w-80 p-0" align="start">
          <EmojiPicker onSelect={insertEmoji} />
        </PopoverContent>
      </Popover>
    </div>
  )
}

// Copilot Button
function CopilotButton({ onOptionClick }) {
  const [open, setOpen] = useState(false)

  const options = [
    { id: 'shorter', label: 'shorter', icon: ArrowDown },
    { id: 'longer', label: 'longer', icon: ArrowUp },
    { id: 'objective', label: 'objective', icon: BookOpen },
    { id: 'emotional', label: 'emotional', icon: Smile },
    { id: 'manual', label: 'manual', icon: Edit3 },
  ]

  const handleOptionClick = (optionId) => {
    onOptionClick?.(optionId)
    setOpen(false)
  }

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button variant="secondary" size="sm">
          <Sparkles className="w-4 h-4 mr-2" />
          Copilot
        </Button>
      </PopoverTrigger>
      <PopoverContent side="top" align="end" className="w-48 p-2">
        <div className="space-y-1">
          {options.map((option) => {
            const Icon = option.icon
            return (
              <button
                key={option.id}
                onClick={() => handleOptionClick(option.id)}
                className="w-full flex items-center gap-3 px-3 py-2 text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-md transition-colors"
              >
                <Icon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                <span>{option.label}</span>
              </button>
            )
          })}
        </div>
      </PopoverContent>
    </Popover>
  )
}

const platformLimits = {
  instagram: 2200,
  facebook: 63206,
  twitter: 280,
  linkedin: 3000
}

const getCountVariant = (count, limit) => {
  const percentage = (count / limit) * 100
  if (percentage >= 100) return 'counter-over'
  if (percentage >= 90) return 'counter-warning'
  return 'counter-safe'
}

const formatNumber = (num) => {
  if (num > 9999) return `${(num / 1000).toFixed(1)}K`
  return num
}

const ctaOptions = [
  { value: 'shop-now', label: 'Shop Now' },
  { value: 'learn-more', label: 'Learn More' },
  { value: 'sign-up', label: 'Sign Up' },
  { value: 'get-started', label: 'Get Started' },
  { value: 'download', label: 'Download' },
  { value: 'book-now', label: 'Book Now' },
  { value: 'subscribe', label: 'Subscribe' },
  { value: 'contact-us', label: 'Contact Us' },
  { value: 'view-more', label: 'View More' },
  { value: 'custom', label: 'Custom...' }
]

// Channel Editor Component
function ChannelEditor({ 
  platform, 
  platformConfig, 
  channelData = {}, 
  onTextChange, 
  onFieldChange,
  onGenerate 
}) {
  const textareaRef = useRef(null)
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0)
  const [textVersions, setTextVersions] = useState([channelData.text || ''])

  // Update textVersions wenn channelData sich ändert
  useEffect(() => {
    if (channelData.text && textVersions[0] !== channelData.text) {
      setTextVersions([channelData.text])
      setCurrentVersionIndex(0)
    }
  }, [channelData.text])

  const getCurrentText = () => textVersions[currentVersionIndex] || ''

  const handleTextChange = (value) => {
    const newVersions = [...textVersions]
    newVersions[currentVersionIndex] = value
    setTextVersions(newVersions)
    onTextChange(platform, value)
  }

  const handleGenerate = () => {
    const generated = `🚀 Generated content for ${platformConfig.name}...`
    const newVersions = [...textVersions, generated]
    setTextVersions(newVersions)
    setCurrentVersionIndex(newVersions.length - 1)
    onTextChange(platform, generated)
  }

  return (
    <Card className={`p-6 border-2 ${platformConfig.borderColor} ${platformConfig.bgColor}`}>
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className={`w-10 h-10 rounded-xl ${platformConfig.iconBg} flex items-center justify-center`}>
            {platformConfig.icon}
          </div>
          <div>
            <h5 className="font-bold text-sm text-gray-900 dark:text-white">{platformConfig.name}</h5>
            <p className="text-xs text-gray-600 dark:text-gray-400">{platformConfig.subtext}</p>
          </div>
        </div>
        
        {/* Version Navigation */}
        <div className="flex items-center gap-1">
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setCurrentVersionIndex(Math.max(0, currentVersionIndex - 1))}
            disabled={currentVersionIndex === 0 || textVersions.length === 1}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium min-w-[2.5rem] text-center">
            v{currentVersionIndex + 1}/{textVersions.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-7 w-7 p-0"
            onClick={() => setCurrentVersionIndex(Math.min(textVersions.length - 1, currentVersionIndex + 1))}
            disabled={currentVersionIndex === textVersions.length - 1 || textVersions.length === 1}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      <div className="space-y-4">
        {/* Text Area */}
        <div>
          <Label htmlFor={`${platform}-text`} className="text-xs mb-2">Post Text</Label>
          <div className="relative">
            <Textarea
              ref={textareaRef}
              id={`${platform}-text`}
              value={getCurrentText()}
              onChange={(e) => handleTextChange(e.target.value)}
              className="min-h-[120px] resize-none text-sm pb-10"
              placeholder={`Adapted text for ${platformConfig.name}...`}
            />
            <Badge 
              variant={getCountVariant(getCurrentText().length, platformLimits[platform])} 
              className="absolute bottom-2 right-2 text-xs"
            >
              {getCurrentText().length}/{formatNumber(platformLimits[platform])}
            </Badge>
          </div>
        </div>

        {/* Unicode Editor + Actions */}
        <div className="flex items-center justify-between">
          <UnicodeEditorToolbar textareaRef={textareaRef} onTextUpdate={handleTextChange} />
          
          <div className="flex gap-2">
            <CopilotButton onOptionClick={(option) => console.log(`${platform} copilot:`, option)} />
            <Button 
              variant="primary" 
              size="sm"
              onClick={handleGenerate}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Generate
            </Button>
          </div>
        </div>

        <Separator />

        {/* Hashtags */}
        <div>
          <Label htmlFor={`${platform}-hashtags`} className="text-xs mb-2">Hashtags</Label>
          <Input
            id={`${platform}-hashtags`}
            value={channelData.hashtags || ''}
            onChange={(e) => onFieldChange(platform, 'hashtags', e.target.value)}
            className="text-sm"
            placeholder="Hashtags..."
          />
        </div>

        {/* CTA */}
        <div>
          <Label htmlFor={`${platform}-cta`} className="text-xs mb-2">Call to Action</Label>
          <Input
            id={`${platform}-cta`}
            list={`${platform}-cta-options`}
            value={channelData.cta || ''}
            onChange={(e) => onFieldChange(platform, 'cta', e.target.value)}
            className="text-sm"
            placeholder="Select or type CTA..."
          />
          <datalist id={`${platform}-cta-options`}>
            {ctaOptions.map((option) => (
              <option key={option.value} value={option.label} />
            ))}
          </datalist>
          
          {platformConfig.hasLink && (
            <Input
              value={channelData.link || ''}
              onChange={(e) => onFieldChange(platform, 'link', e.target.value)}
              className="text-sm mt-2"
              placeholder="Link URL (https://...)"
            />
          )}
        </div>

        {/* Erster Kommentar (nur Instagram & Facebook) */}
        {platformConfig.hasFirstComment && (
          <div>
            <Label htmlFor={`${platform}-first-comment`} className="text-xs mb-2">First Comment</Label>
            <Textarea
              id={`${platform}-first-comment`}
              value={channelData.firstComment || ''}
              onChange={(e) => onFieldChange(platform, 'firstComment', e.target.value)}
              className="text-sm min-h-[60px] resize-none"
              placeholder="First comment on the post..."
            />
          </div>
        )}

        {/* Platform Actions */}
        <div className={platformConfig.extraActions ? 'grid grid-cols-2 gap-2' : ''}>
          <Button variant="outline" size="sm" className="justify-start w-full">
            <AtSign className="w-4 h-4 mr-2" />
            Mention
          </Button>
          {platformConfig.extraActions && (
            <Button variant="outline" size="sm" className="justify-start w-full">
              <MapPin className="w-4 h-4 mr-2" />
              Location
            </Button>
          )}
        </div>
      </div>
    </Card>
  )
}

export default function ChannelCustomizationDialog({ open, onOpenChange, channelTexts, onChannelTextsChange }) {
  // Fallback: Stelle sicher dass channelTexts immer alle Plattformen hat
  const safeChannelTexts = channelTexts || {}
  const getChannelData = (platform) => safeChannelTexts[platform] || { 
    text: '', 
    hashtags: '', 
    cta: '', 
    link: '',
    firstComment: ''
  }

  const handleGenerateAll = () => {
    console.log('Generating for all channels...')
  }

  const handleTextChange = (platform, text) => {
    onChannelTextsChange({
      ...safeChannelTexts,
      [platform]: { ...getChannelData(platform), text }
    })
  }

  const handleFieldChange = (platform, field, value) => {
    onChannelTextsChange({
      ...safeChannelTexts,
      [platform]: { ...getChannelData(platform), [field]: value }
    })
  }

  const platformConfigs = {
    instagram: {
      name: 'Instagram',
      subtext: 'Feed Post + Story',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-purple-500 via-pink-500 to-orange-500',
      borderColor: 'border-purple-200 dark:border-purple-800',
      bgColor: 'bg-purple-50/50 dark:bg-purple-950/20',
      extraActions: true,
      hasLink: false,
      hasFirstComment: true  // Instagram unterstützt ersten Kommentar
    },
    facebook: {
      name: 'Facebook',
      subtext: 'Post',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      iconBg: 'bg-[#1877F2]',
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
      extraActions: true,
      hasLink: true,
      hasFirstComment: true  // Facebook unterstützt ersten Kommentar
    },
    twitter: {
      name: 'Twitter',
      subtext: 'Tweet',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      ),
      iconBg: 'bg-gradient-to-br from-[#1DA1F2] to-[#0d8bd9]',
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
      extraActions: false,
      hasLink: false,
      hasFirstComment: false  // Twitter hat keine ersten Kommentare
    },
    linkedin: {
      name: 'LinkedIn',
      subtext: 'Post',
      icon: (
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
        </svg>
      ),
      iconBg: 'bg-[#0A66C2]',
      borderColor: 'border-blue-200 dark:border-blue-800',
      bgColor: 'bg-blue-50/50 dark:bg-blue-950/20',
      extraActions: false,
      hasLink: true,
      hasFirstComment: false  // LinkedIn hat keine ersten Kommentare
    }
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black">Channel-Specific Adjustments</DialogTitle>
          <DialogDescription>
            AI automatically adapts content for each channel
          </DialogDescription>
        </DialogHeader>

        {/* Auto-Adapt Section */}
        <Card variant="soft-purple" className="p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-viralspoon-premium dark:bg-purple-600 rounded-xl flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <div className="font-bold text-sm text-gray-900 dark:text-white">Automatic Adaptation</div>
                <div className="text-xs text-gray-600 dark:text-gray-400">AI adapts content automatically for every channel</div>
              </div>
            </div>
            <Button 
              variant="gradient" 
              size="default"
              onClick={handleGenerateAll}
            >
              <Sparkles className="w-4 h-4 mr-2" />
              Adapt for All Channels
            </Button>
          </div>
        </Card>

        <Separator />

        {/* Channel Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {Object.keys(platformConfigs).map((platform) => (
            <ChannelEditor
              key={platform}
              platform={platform}
              platformConfig={platformConfigs[platform]}
              channelData={getChannelData(platform)}
              onTextChange={handleTextChange}
              onFieldChange={handleFieldChange}
            />
          ))}
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => onOpenChange(false)}>
            Save Changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}