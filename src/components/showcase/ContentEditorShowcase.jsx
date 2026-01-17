import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Sparkles, AlertCircle, Link as LinkIcon, FileText, Image as ImageIcon, X, ArrowDown, ArrowUp, BookOpen, Smile, Edit3, Zap, Hash, Lightbulb, Bold, Italic, Underline } from 'lucide-react'
import { useState, useRef } from 'react'

// Code Preview Component
function CodePreview({ code, children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <div className="flex gap-2">
          <Button variant="outline" size="sm" onClick={handleCopy}>
            {copied ? (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                Copied!
              </>
            ) : (
              <>
                <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
                </svg>
                Copy Code
              </>
            )}
          </Button>
        </div>
      </div>
      
      <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 bg-gray-50 dark:bg-gray-900/50">
        {children}
      </div>
      
      <div className="relative">
        <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
          <pre className="text-sm text-gray-100 dark:text-gray-200">
            <code>{code}</code>
          </pre>
        </div>
      </div>
    </div>
  )
}

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

// Simplified Emoji Toolbar (removed Unicode formatting)
function EmojiToolbar({ textareaRef, onTextUpdate }) {
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
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="h-9"
        >
          <Smile className="w-4 h-4 mr-2" />
          Add Emoji
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80 p-0" align="start">
        <EmojiPicker onSelect={insertEmoji} />
      </PopoverContent>
    </Popover>
  )
}

// Unicode Editor Toolbar mit Bold/Italic/Underline
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
        // Unicode Mathematical Bold für A-Z, a-z, 0-9
        formattedText = selectedText.split('').map(char => {
          const code = char.charCodeAt(0)
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119743) // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119737) // a-z
          if (code >= 48 && code <= 57) return String.fromCharCode(code + 120734) // 0-9
          return char // Umlaute und Sonderzeichen bleiben normal
        }).join('')
        break
      case 'italic':
        // Unicode Mathematical Italic für A-Z, a-z
        formattedText = selectedText.split('').map(char => {
          const code = char.charCodeAt(0)
          if (code >= 65 && code <= 90) return String.fromCharCode(code + 119795) // A-Z
          if (code >= 97 && code <= 122) return String.fromCharCode(code + 119789) // a-z
          return char // Zahlen und Sonderzeichen bleiben normal
        }).join('')
        break
      case 'underline':
        // Combining Low Line (U+0332) für jeden Buchstaben
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

// Content Editor Demo
function ContentEditorDemo() {
  const textareaRef = useRef(null)
  const [activeTab, setActiveTab] = useState('manual')
  const [textVersions, setTextVersions] = useState([''])
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0)
  const [sourceFile, setSourceFile] = useState(null)
  const [sourceUrl, setSourceUrl] = useState('')
  const [contextText, setContextText] = useState('')
  const [hashtags, setHashtags] = useState('#example #demo #viralspoon')
  const [selectedCta, setSelectedCta] = useState('learn-more')
  const [ctaLink, setCtaLink] = useState('https://example.com')
  const [hasChannelCustomizations, setHasChannelCustomizations] = useState(true)
  const [customizationDetails, setCustomizationDetails] = useState({
    customTextCount: 2,
    customHashtagsCount: 1,
    customCtaCount: 3
  })
  const [showTopicIdeas, setShowTopicIdeas] = useState(false)

  const platformLimits = {
    instagram: { name: 'Instagram', limit: 2200, icon: '📷' },
    facebook: { name: 'Facebook', limit: 63206, icon: '👍' },
    twitter: { name: 'Twitter', limit: 280, icon: '🐦' }
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

  const topicIdeas = [
    { id: 1, label: 'Product Launch', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: 2, label: 'Behind the Scenes', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: 3, label: 'Customer Success', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    { id: 4, label: 'Industry News', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: 5, label: 'Tips & Tricks', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400' },
  ]

  const getCounterVariant = (length, limit) => {
    const percentage = (length / limit) * 100
    if (percentage >= 100) return 'counter-over'
    if (percentage >= 90) return 'counter-warning'
    return 'counter-safe'
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSourceFile(file)
    }
  }

  const removeFile = () => {
    setSourceFile(null)
  }

  const generateFromSource = () => {
    let generated = "✨ AI-generierter Content aus "
    if (activeTab === 'url') generated += `URL: ${sourceUrl}`
    else if (activeTab === 'pdf') generated += `PDF: ${sourceFile?.name}`
    else if (activeTab === 'image') generated += `Bild: ${sourceFile?.name}`
    
    if (contextText) {
      generated += `\n\nKontext: ${contextText}`
    }
    
    setTextVersions([...textVersions, generated])
    setCurrentVersionIndex(textVersions.length)
    setActiveTab('manual')
  }

  const getCurrentText = () => {
    return textVersions[currentVersionIndex] || ''
  }

  const handleTextChange = (value) => {
    const newVersions = [...textVersions]
    newVersions[currentVersionIndex] = value
    setTextVersions(newVersions)
  }

  const generateHashtags = () => {
    const generated = '#AI #SocialMedia #ContentCreation #ViralSpoon #Marketing'
    setHashtags(generated)
  }

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white">Post Text</h3>
            <p className="text-sm text-gray-600 dark:text-gray-400">
              {activeTab === 'manual' ? 'Write manually or generate from source' : 'Generate content from source'}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <Button 
              variant="outline" 
              size="sm"
              onClick={() => setShowTopicIdeas(!showTopicIdeas)}
            >
              <Lightbulb className="w-4 h-4 mr-2" />
              Topic Ideas
            </Button>
            <Button variant="primary" size="sm">
              Customize per Channel
            </Button>
          </div>
        </div>

        {/* Topic Ideas */}
        {showTopicIdeas && (
          <div className="animate-in slide-in-from-top-2 duration-200">
            <div className="bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/30 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-orange-950/10 border border-purple-200 dark:border-purple-900/50 rounded-lg p-4">
              <div className="flex items-center gap-2 mb-3">
                <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
                <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Popular Topics</h4>
              </div>
              <div className="flex flex-wrap gap-2">
                {topicIdeas.map((idea) => (
                  <button
                    key={idea.id}
                    className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 ${idea.color}`}
                    onClick={() => {
                      const newText = `${getCurrentText()}\n\n${idea.label}: `
                      handleTextChange(newText)
                    }}
                  >
                    {idea.label}
                  </button>
                ))}
              </div>
            </div>
          </div>
        )}

        {/* Tabs + Version Navigation */}
        <div className="flex items-center justify-between gap-4">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
            <TabsList className="w-full grid grid-cols-4">
              <TabsTrigger value="manual" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">Write</span>
              </TabsTrigger>
              <TabsTrigger value="url" className="flex items-center gap-2">
                <LinkIcon className="w-4 h-4" />
                <span className="hidden sm:inline">URL</span>
              </TabsTrigger>
              <TabsTrigger value="pdf" className="flex items-center gap-2">
                <FileText className="w-4 h-4" />
                <span className="hidden sm:inline">PDF</span>
              </TabsTrigger>
              <TabsTrigger value="image" className="flex items-center gap-2">
                <ImageIcon className="w-4 h-4" />
                <span className="hidden sm:inline">Image</span>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          {/* Version Navigation */}
          <div className="flex items-center gap-1 flex-shrink-0">
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setCurrentVersionIndex(Math.max(0, currentVersionIndex - 1))}
              disabled={currentVersionIndex === 0 || textVersions.length === 1}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </Button>
            <span className="text-xs text-gray-500 dark:text-gray-400 font-medium min-w-[3rem] text-center">
              v {currentVersionIndex + 1}/{textVersions.length}
            </span>
            <Button
              variant="ghost"
              size="sm"
              className="h-8 w-8 p-0"
              onClick={() => setCurrentVersionIndex(Math.min(textVersions.length - 1, currentVersionIndex + 1))}
              disabled={currentVersionIndex === textVersions.length - 1 || textVersions.length === 1}
            >
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>

        {/* Tab Content */}
        <Tabs value={activeTab} onValueChange={setActiveTab}>
          {/* Manual Write Tab */}
          <TabsContent value="manual" className="space-y-4 mt-4">
            <div className="relative">
              <Textarea
                ref={textareaRef}
                value={getCurrentText()}
                onChange={(e) => handleTextChange(e.target.value)}
                placeholder="Write your post text here..."
                className="min-h-[200px] pb-12"
              />
              
              {/* Character Counters */}
              <div className="absolute bottom-2 right-2 flex gap-2">
                {Object.keys(platformLimits).map((platform) => {
                  const config = platformLimits[platform]
                  const currentText = getCurrentText()
                  return (
                    <Badge 
                      key={platform}
                      variant={getCounterVariant(currentText.length, config.limit)}
                      className="text-xs"
                      title={config.name}
                    >
                      {config.icon} {currentText.length}/{config.limit}
                    </Badge>
                  )
                })}
              </div>
            </div>

          {/* Emoji Toolbar + Actions */}
<div className="flex items-center justify-between">
  {/* links: Emoji Toolbar bleibt links */}
  <EmojiToolbar textareaRef={textareaRef} onTextUpdate={handleTextChange} />

  {/* rechts: Unicode links innerhalb der rechten Gruppe, Buttons ganz rechts */}
  <div className="flex items-center gap-3 flex-1">
    {/* Unicode soll links bleiben (innerhalb der rechten Zone) */}
    <UnicodeEditorToolbar textareaRef={textareaRef} onTextUpdate={handleTextChange} />

    {/* Buttons rechts alignen */}
    <div className="flex gap-2 ml-auto">
      <CopilotButton onOptionClick={(option) => console.log("Copilot option:", option)} />
      <Button
        variant="primary"
        size="sm"
        onClick={() => {
          const generated = "🚀 Exciting news! Check out our latest features..."
          setTextVersions([...textVersions, generated])
          setCurrentVersionIndex(textVersions.length)
        }}
      >
        <Zap className="w-4 h-4 mr-2" />
        Generate
      </Button>
    </div>
  </div>
</div>



            {/* Hashtags & CTA Section */}
            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
              {/* Hashtags */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="hashtags" className="text-sm font-semibold">
                    Hashtags
                  </Label>
                  {hasChannelCustomizations && customizationDetails.customHashtagsCount > 0 && (
                    <Badge variant="soft-purple" className="text-xs">
                      {customizationDetails.customHashtagsCount} custom
                    </Badge>
                  )}
                </div>
                <div className="flex gap-2">
                  <Input
                    id="hashtags"
                    value={hashtags}
                    onChange={(e) => setHashtags(e.target.value)}
                    placeholder="#example #hashtags"
                    className="text-sm flex-1"
                  />
                  <Button
                    variant="primary"
                    size="sm"
                    onClick={generateHashtags}
                    className="flex-shrink-0"
                  >
                    <Hash className="w-4 h-4 mr-2" />
                    Generate
                  </Button>
                </div>
              </div>

              {/* CTA */}
              <div>
                <div className="flex items-center justify-between mb-2">
                  <Label htmlFor="cta" className="text-sm font-semibold">
                    Call-to-Action
                  </Label>
                  {hasChannelCustomizations && customizationDetails.customCtaCount > 0 && (
                    <Badge variant="soft-purple" className="text-xs">
                      {customizationDetails.customCtaCount} custom
                    </Badge>
                  )}
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <Select value={selectedCta} onValueChange={setSelectedCta}>
                    <SelectTrigger className="text-sm">
                      <SelectValue placeholder="Select CTA" />
                    </SelectTrigger>
                    <SelectContent>
                      {ctaOptions.map((option) => (
                        <SelectItem key={option.value} value={option.value}>
                          {option.label}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                  <Input
                    id="cta-link"
                    value={ctaLink}
                    onChange={(e) => setCtaLink(e.target.value)}
                    placeholder="https://example.com"
                    className="text-sm"
                  />
                </div>
              </div>

              {/* Customization Warning */}
              {hasChannelCustomizations && (
                <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                  <div className="flex items-start gap-2 text-sm">
                    <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                    <div className="space-y-1 text-gray-700 dark:text-gray-300">
                      <p className="font-semibold">Channel Customizations Active</p>
                      <div className="text-xs space-y-0.5">
                        {customizationDetails.customTextCount > 0 && (
                          <p>→ {customizationDetails.customTextCount} channels with custom text</p>
                        )}
                        {customizationDetails.customHashtagsCount > 0 && (
                          <p>→ {customizationDetails.customHashtagsCount} channels with custom hashtags</p>
                        )}
                        {customizationDetails.customCtaCount > 0 && (
                          <p>→ {customizationDetails.customCtaCount} channels with custom CTAs</p>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </TabsContent>

          {/* From URL Tab */}
          <TabsContent value="url" className="space-y-4 mt-4">
            <div className="space-y-4">
              <div>
                <Label htmlFor="url-input">Website URL</Label>
                <Input
                  id="url-input"
                  placeholder="https://example.com/article"
                  value={sourceUrl}
                  onChange={(e) => setSourceUrl(e.target.value)}
                  className="mt-2"
                />
              </div>

              <div>
                <Label htmlFor="url-context">Additional Context (Optional)</Label>
                <Textarea
                  id="url-context"
                  placeholder="Add context or specific instructions for the AI..."
                  value={contextText}
                  onChange={(e) => setContextText(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Die KI analysiert den Inhalt der URL und erstellt einen passenden Social Media Post
                  </p>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full"
                onClick={generateFromSource}
                disabled={!sourceUrl}
              >
                <Zap className="w-4 h-4 mr-2" />
                Generate from URL
              </Button>
            </div>
          </TabsContent>

          {/* From PDF Tab */}
          <TabsContent value="pdf" className="space-y-4 mt-4">
            <div className="space-y-4">
              {!sourceFile ? (
                <div className="border-2 border-dashed border-purple-200 dark:border-purple-900/50 rounded-xl p-8 text-center bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
                  <input 
                    type="file" 
                    accept=".pdf"
                    className="hidden" 
                    id="pdf-upload"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="pdf-upload" className="cursor-pointer">
                    <FileText className="w-12 h-12 mx-auto mb-4 text-purple-400 dark:text-purple-500" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Upload PDF Document
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Click to upload or drag and drop
                    </div>
                  </label>
                </div>
              ) : (
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                        <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-gray-900 dark:text-white">{sourceFile.name}</div>
                        <div className="text-xs text-gray-500 dark:text-gray-400">
                          {(sourceFile.size / 1024 / 1024).toFixed(2)} MB
                        </div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm" onClick={removeFile}>
                      <X className="w-4 h-4" />
                    </Button>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="pdf-context">Additional Context (Optional)</Label>
                <Textarea
                  id="pdf-context"
                  placeholder="z.B. 'Fokussiere auf die Hauptergebnisse' oder 'Erstelle einen kurzen Teaser'"
                  value={contextText}
                  onChange={(e) => setContextText(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <Button 
                variant="primary" 
                className="w-full"
                onClick={generateFromSource}
                disabled={!sourceFile}
              >
                <Zap className="w-4 h-4 mr-2" />
                Generate from PDF
              </Button>
            </div>
          </TabsContent>

          {/* From Image Tab */}
          <TabsContent value="image" className="space-y-4 mt-4">
            <div className="space-y-4">
              {!sourceFile ? (
                <div className="border-2 border-dashed border-orange-200 dark:border-orange-900/50 rounded-xl p-8 text-center bg-gradient-to-br from-orange-50/50 to-pink-50/30 dark:from-orange-950/20 dark:to-pink-950/10">
                  <input 
                    type="file" 
                    accept="image/*"
                    className="hidden" 
                    id="image-upload"
                    onChange={handleFileUpload}
                  />
                  <label htmlFor="image-upload" className="cursor-pointer">
                    <ImageIcon className="w-12 h-12 mx-auto mb-4 text-orange-400 dark:text-orange-500" />
                    <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                      Upload Image
                    </div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">
                      Click to upload or drag and drop
                    </div>
                  </label>
                </div>
              ) : (
                <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                  <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
                    <img
                      src={URL.createObjectURL(sourceFile)}
                      alt="Preview"
                      className="w-full h-full object-contain"
                    />
                    <button
                      onClick={removeFile}
                      className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              )}

              <div>
                <Label htmlFor="image-context">Additional Context (Optional)</Label>
                <Textarea
                  id="image-context"
                  placeholder="z.B. 'Beschreibe die Stimmung des Bildes' oder 'Erstelle einen motivierenden Post'"
                  value={contextText}
                  onChange={(e) => setContextText(e.target.value)}
                  className="mt-2 min-h-[100px]"
                />
              </div>

              <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                  <p className="text-gray-700 dark:text-gray-300">
                    Die KI analysiert das Bild und erstellt einen passenden Post. Dein Kontext gibt zusätzliche Informationen.
                  </p>
                </div>
              </div>

              <Button 
                variant="primary" 
                className="w-full"
                onClick={generateFromSource}
                disabled={!sourceFile}
              >
                <Zap className="w-4 h-4 mr-2" />
                Generate from Image
              </Button>
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </Card>
  )
}

// Export wiederverwendbare Komponente
export function ContentEditor({ 
  onTextChange, 
  onCustomizeClick,
  initialVersions = [''],
  platformLimits: customLimits,
  initialHashtags = '',
  initialCta = 'learn-more',
  initialCtaLink = '',
  channelCustomizations = null,
  onHashtagsChange,
  onCtaChange,
  onCtaLinkChange
}) {
  const textareaRef = useRef(null)
  const [activeTab, setActiveTab] = useState('manual')
  const [textVersions, setTextVersions] = useState(initialVersions)
  const [currentVersionIndex, setCurrentVersionIndex] = useState(0)
  const [sourceFile, setSourceFile] = useState(null)
  const [sourceUrl, setSourceUrl] = useState('')
  const [contextText, setContextText] = useState('')
  const [hashtags, setHashtags] = useState(initialHashtags)
  const [selectedCta, setSelectedCta] = useState(initialCta)
  const [ctaLink, setCtaLink] = useState(initialCtaLink)
  const [hasChannelCustomizations, setHasChannelCustomizations] = useState(!!channelCustomizations)
  const [customizationDetails, setCustomizationDetails] = useState(channelCustomizations || {
    customTextCount: 0,
    customHashtagsCount: 0,
    customCtaCount: 0
  })
  const [showTopicIdeas, setShowTopicIdeas] = useState(false)

  const platformLimits = customLimits || {
    instagram: { name: 'Instagram', limit: 2200, icon: '📷' },
    facebook: { name: 'Facebook', limit: 63206, icon: '👍' },
    twitter: { name: 'Twitter', limit: 280, icon: '🐦' }
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

  const topicIdeas = [
    { id: 1, label: 'Product Launch', color: 'bg-purple-100 text-purple-700 dark:bg-purple-900/30 dark:text-purple-400' },
    { id: 2, label: 'Behind the Scenes', color: 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400' },
    { id: 3, label: 'Customer Success', color: 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400' },
    { id: 4, label: 'Industry News', color: 'bg-orange-100 text-orange-700 dark:bg-orange-900/30 dark:text-orange-400' },
    { id: 5, label: 'Tips & Tricks', color: 'bg-pink-100 text-pink-700 dark:bg-pink-900/30 dark:text-pink-400' },
  ]

  const getCounterVariant = (length, limit) => {
    const percentage = (length / limit) * 100
    if (percentage >= 100) return 'counter-over'
    if (percentage >= 90) return 'counter-warning'
    return 'counter-safe'
  }

  const handleFileUpload = (e) => {
    const file = e.target.files[0]
    if (file) {
      setSourceFile(file)
    }
  }

  const removeFile = () => {
    setSourceFile(null)
  }

  const generateFromSource = () => {
    let generated = "✨ AI-generierter Content aus "
    if (activeTab === 'url') generated += `URL: ${sourceUrl}`
    else if (activeTab === 'pdf') generated += `PDF: ${sourceFile?.name}`
    else if (activeTab === 'image') generated += `Bild: ${sourceFile?.name}`
    
    if (contextText) {
      generated += `\n\nKontext: ${contextText}`
    }
    
    const newVersions = [...textVersions, generated]
    setTextVersions(newVersions)
    setCurrentVersionIndex(textVersions.length)
    setActiveTab('manual')
    onTextChange?.(newVersions, textVersions.length)
    
    setSourceFile(null)
    setSourceUrl('')
    setContextText('')
  }

  const getCurrentText = () => {
    return textVersions[currentVersionIndex] || ''
  }

  const handleTextChange = (value) => {
    const newVersions = [...textVersions]
    newVersions[currentVersionIndex] = value
    setTextVersions(newVersions)
    onTextChange?.(newVersions, currentVersionIndex)
  }

  const handleHashtagsChange = (value) => {
    setHashtags(value)
    onHashtagsChange?.(value)
  }

  const handleCtaChange = (value) => {
    setSelectedCta(value)
    onCtaChange?.(value)
  }

  const handleCtaLinkChange = (value) => {
    setCtaLink(value)
    onCtaLinkChange?.(value)
  }

  const generateHashtags = () => {
    const generated = '#AI #SocialMedia #ContentCreation #ViralSpoon #Marketing'
    handleHashtagsChange(generated)
  }

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h3 className="text-lg font-bold text-gray-900 dark:text-white">Post Text</h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            {activeTab === 'manual' ? 'Write manually or generate from source' : 'Generate content from source'}
          </p>
        </div>
        <div className="flex items-center gap-2">
          <Button 
            variant="outline" 
            size="sm"
            onClick={() => setShowTopicIdeas(!showTopicIdeas)}
          >
            <Lightbulb className="w-4 h-4 mr-2" />
            Topic Ideas
          </Button>
          <Button variant="outline" size="sm" onClick={onCustomizeClick}>
            Customize per Channel
          </Button>
        </div>
      </div>

      {/* Topic Ideas */}
      {showTopicIdeas && (
        <div className="animate-in slide-in-from-top-2 duration-200">
          <div className="bg-gradient-to-br from-purple-50/50 via-pink-50/30 to-orange-50/30 dark:from-purple-950/20 dark:via-pink-950/10 dark:to-orange-950/10 border border-purple-200 dark:border-purple-900/50 rounded-lg p-4">
            <div className="flex items-center gap-2 mb-3">
              <Lightbulb className="w-4 h-4 text-purple-600 dark:text-purple-400" />
              <h4 className="text-sm font-semibold text-gray-900 dark:text-white">Popular Topics</h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {topicIdeas.map((idea) => (
                <button
                  key={idea.id}
                  className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all hover:scale-105 ${idea.color}`}
                  onClick={() => {
                    const newText = `${getCurrentText()}\n\n${idea.label}: `
                    handleTextChange(newText)
                  }}
                >
                  {idea.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Tabs + Version Navigation */}
      <div className="flex items-center justify-between gap-4">
        <Tabs value={activeTab} onValueChange={setActiveTab} className="flex-1">
          <TabsList className="w-full grid grid-cols-4">
            <TabsTrigger value="manual" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">Write</span>
            </TabsTrigger>
            <TabsTrigger value="url" className="flex items-center gap-2">
              <LinkIcon className="w-4 h-4" />
              <span className="hidden sm:inline">URL</span>
            </TabsTrigger>
            <TabsTrigger value="pdf" className="flex items-center gap-2">
              <FileText className="w-4 h-4" />
              <span className="hidden sm:inline">PDF</span>
            </TabsTrigger>
            <TabsTrigger value="image" className="flex items-center gap-2">
              <ImageIcon className="w-4 h-4" />
              <span className="hidden sm:inline">Image</span>
            </TabsTrigger>
          </TabsList>
        </Tabs>

        {/* Version Navigation */}
        <div className="flex items-center gap-1 flex-shrink-0">
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setCurrentVersionIndex(Math.max(0, currentVersionIndex - 1))}
            disabled={currentVersionIndex === 0 || textVersions.length === 1}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </Button>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium min-w-[3rem] text-center">
            v {currentVersionIndex + 1}/{textVersions.length}
          </span>
          <Button
            variant="ghost"
            size="sm"
            className="h-8 w-8 p-0"
            onClick={() => setCurrentVersionIndex(Math.min(textVersions.length - 1, currentVersionIndex + 1))}
            disabled={currentVersionIndex === textVersions.length - 1 || textVersions.length === 1}
          >
            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>

      {/* Tab Content */}
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        {/* Manual Write Tab */}
        <TabsContent value="manual" className="space-y-4 mt-4">
          <div className="relative">
            <Textarea
              ref={textareaRef}
              value={getCurrentText()}
              onChange={(e) => handleTextChange(e.target.value)}
              placeholder="Write your post text here..."
              className="min-h-[200px] pb-12"
            />
            
            <div className="absolute bottom-2 right-2 flex gap-2">
              {Object.keys(platformLimits).map((platform) => {
                const config = platformLimits[platform]
                const currentText = getCurrentText()
                return (
                  <Badge 
                    key={platform}
                    variant={getCounterVariant(currentText.length, config.limit)}
                    className="text-xs"
                    title={config.name}
                  >
                    {config.icon} {currentText.length}/{config.limit}
                  </Badge>
                )
              })}
            </div>
          </div>

          <div className="flex items-center justify-between">
  <UnicodeEditorToolbar textareaRef={textareaRef} onTextUpdate={handleTextChange} />
  
  <div className="flex gap-2">
    <CopilotButton onOptionClick={(option) => console.log('Copilot option:', option)} />
    <Button 
      variant="primary" 
      size="sm"
      onClick={() => {
        const generated = "🚀 Exciting news! Check out our latest features..."
        const newVersions = [...textVersions, generated]
        setTextVersions(newVersions)
        setCurrentVersionIndex(textVersions.length)
        onTextChange?.(newVersions, textVersions.length)
      }}
    >
      <Zap className="w-4 h-4 mr-2" />
      Generate
    </Button>
  </div>
</div>

          <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-700">
            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="hashtags" className="text-sm font-semibold">
                  Hashtags
                </Label>
                {hasChannelCustomizations && customizationDetails.customHashtagsCount > 0 && (
                  <Badge variant="soft-purple" className="text-xs">
                    {customizationDetails.customHashtagsCount} custom
                  </Badge>
                )}
              </div>
              <div className="flex gap-2">
                <Input
                  id="hashtags"
                  value={hashtags}
                  onChange={(e) => handleHashtagsChange(e.target.value)}
                  placeholder="#example #hashtags"
                  className="text-sm flex-1"
                />
                <Button
                  variant="primary"
                  size="sm"
                  onClick={generateHashtags}
                  className="flex-shrink-0"
                >
                  <Hash className="w-4 h-4 mr-2" />
                  Generate
                </Button>
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-2">
                <Label htmlFor="cta" className="text-sm font-semibold">
                  Call-to-Action
                </Label>
                {hasChannelCustomizations && customizationDetails.customCtaCount > 0 && (
                  <Badge variant="soft-purple" className="text-xs">
                    {customizationDetails.customCtaCount} custom
                  </Badge>
                )}
              </div>
              <div className="grid grid-cols-2 gap-3">
                <Select value={selectedCta} onValueChange={handleCtaChange}>
                  <SelectTrigger className="text-sm">
                    <SelectValue placeholder="Select CTA" />
                  </SelectTrigger>
                  <SelectContent>
                    {ctaOptions.map((option) => (
                      <SelectItem key={option.value} value={option.value}>
                        {option.label}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
                <Input
                  id="cta-link"
                  value={ctaLink}
                  onChange={(e) => handleCtaLinkChange(e.target.value)}
                  placeholder="https://example.com"
                  className="text-sm"
                />
              </div>
            </div>

            {hasChannelCustomizations && (
              <div className="bg-purple-50 dark:bg-purple-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-3">
                <div className="flex items-start gap-2 text-sm">
                  <AlertCircle className="w-4 h-4 text-purple-600 dark:text-purple-400 mt-0.5 flex-shrink-0" />
                  <div className="space-y-1 text-gray-700 dark:text-gray-300">
                    <p className="font-semibold">Channel Customizations Active</p>
                    <div className="text-xs space-y-0.5">
                      {customizationDetails.customTextCount > 0 && (
                        <p>→ {customizationDetails.customTextCount} channels with custom text</p>
                      )}
                      {customizationDetails.customHashtagsCount > 0 && (
                        <p>→ {customizationDetails.customHashtagsCount} channels with custom hashtags</p>
                      )}
                      {customizationDetails.customCtaCount > 0 && (
                        <p>→ {customizationDetails.customCtaCount} channels with custom CTAs</p>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </TabsContent>

        {/* URL Tab */}
        <TabsContent value="url" className="space-y-4 mt-4">
          <div className="space-y-4">
            <div>
              <Label htmlFor="url-input">Website URL</Label>
              <Input
                id="url-input"
                placeholder="https://example.com/article"
                value={sourceUrl}
                onChange={(e) => setSourceUrl(e.target.value)}
                className="mt-2"
              />
            </div>

            <div>
              <Label htmlFor="url-context">Additional Context (Optional)</Label>
              <Textarea
                id="url-context"
                placeholder="Add context or specific instructions for the AI..."
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                className="mt-2 min-h-[100px]"
              />
            </div>

            <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-3">
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle className="w-4 h-4 text-blue-600 dark:text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Die KI analysiert den Inhalt der URL und erstellt einen passenden Social Media Post
                </p>
              </div>
            </div>

            <Button 
              variant="primary" 
              className="w-full"
              onClick={generateFromSource}
              disabled={!sourceUrl}
            >
              <Zap className="w-4 h-4 mr-2" />
              Generate from URL
            </Button>
          </div>
        </TabsContent>

        {/* PDF Tab */}
        <TabsContent value="pdf" className="space-y-4 mt-4">
          <div className="space-y-4">
            {!sourceFile ? (
              <div className="border-2 border-dashed border-purple-200 dark:border-purple-900/50 rounded-xl p-8 text-center bg-gradient-to-br from-purple-50/50 to-pink-50/30 dark:from-purple-950/20 dark:to-pink-950/10">
                <input 
                  type="file" 
                  accept=".pdf"
                  className="hidden" 
                  id="pdf-upload-reusable"
                  onChange={handleFileUpload}
                />
                <label htmlFor="pdf-upload-reusable" className="cursor-pointer">
                  <FileText className="w-12 h-12 mx-auto mb-4 text-purple-400 dark:text-purple-500" />
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Upload PDF Document
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Click to upload or drag and drop
                  </div>
                </label>
              </div>
            ) : (
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg p-4 bg-white dark:bg-gray-800">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center">
                      <FileText className="w-5 h-5 text-red-600 dark:text-red-400" />
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-900 dark:text-white">{sourceFile.name}</div>
                      <div className="text-xs text-gray-500 dark:text-gray-400">
                        {(sourceFile.size / 1024 / 1024).toFixed(2)} MB
                      </div>
                    </div>
                  </div>
                  <Button variant="ghost" size="sm" onClick={removeFile}>
                    <X className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="pdf-context-reusable">Additional Context (Optional)</Label>
              <Textarea
                id="pdf-context-reusable"
                placeholder="z.B. 'Fokussiere auf die Hauptergebnisse' oder 'Erstelle einen kurzen Teaser'"
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                className="mt-2 min-h-[100px]"
              />
            </div>

            <Button 
              variant="primary" 
              className="w-full"
              onClick={generateFromSource}
              disabled={!sourceFile}
            >
              <Zap className="w-4 h-4 mr-2" />
              Generate from PDF
            </Button>
          </div>
        </TabsContent>

        {/* Image Tab */}
        <TabsContent value="image" className="space-y-4 mt-4">
          <div className="space-y-4">
            {!sourceFile ? (
              <div className="border-2 border-dashed border-orange-200 dark:border-orange-900/50 rounded-xl p-8 text-center bg-gradient-to-br from-orange-50/50 to-pink-50/30 dark:from-orange-950/20 dark:to-pink-950/10">
                <input 
                  type="file" 
                  accept="image/*"
                  className="hidden" 
                  id="image-upload-reusable"
                  onChange={handleFileUpload}
                />
                <label htmlFor="image-upload-reusable" className="cursor-pointer">
                  <ImageIcon className="w-12 h-12 mx-auto mb-4 text-orange-400 dark:text-orange-500" />
                  <div className="text-sm font-semibold text-gray-900 dark:text-white mb-1">
                    Upload Image
                  </div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">
                    Click to upload or drag and drop
                  </div>
                </label>
              </div>
            ) : (
              <div className="border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
                <div className="relative aspect-video bg-gray-100 dark:bg-gray-900">
                  <img
                    src={URL.createObjectURL(sourceFile)}
                    alt="Preview"
                    className="w-full h-full object-contain"
                  />
                  <button
                    onClick={removeFile}
                    className="absolute top-2 right-2 w-8 h-8 bg-red-500 hover:bg-red-600 text-white rounded-full flex items-center justify-center shadow-lg"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>
            )}

            <div>
              <Label htmlFor="image-context-reusable">Additional Context (Optional)</Label>
              <Textarea
                id="image-context-reusable"
                placeholder="z.B. 'Beschreibe die Stimmung des Bildes' oder 'Erstelle einen motivierenden Post'"
                value={contextText}
                onChange={(e) => setContextText(e.target.value)}
                className="mt-2 min-h-[100px]"
              />
            </div>

            <div className="bg-orange-50 dark:bg-orange-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-3">
              <div className="flex items-start gap-2 text-sm">
                <AlertCircle className="w-4 h-4 text-orange-600 dark:text-orange-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-700 dark:text-gray-300">
                  Die KI analysiert das Bild und erstellt einen passenden Post. Dein Kontext gibt zusätzliche Informationen.
                </p>
              </div>
            </div>

            <Button 
              variant="primary" 
              className="w-full"
              onClick={generateFromSource}
              disabled={!sourceFile}
            >
              <Zap className="w-4 h-4 mr-2" />
              Generate from Image
            </Button>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  )
}

// Main Showcase Component
export default function ContentEditorShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Content Editor</h3>
        <p className="text-gray-600 dark:text-gray-400">Advanced text editor with emoji support and version management</p>
      </div>

      <div className="space-y-6">
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Content Editor Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Emoji Picker:</strong> 80+ Emojis zum direkten Einfügen (Unicode-Formatierung entfernt, da sie auf vielen Plattformen nicht funktioniert)</p>
                <p>→ <strong>Smart Layout:</strong> Version Navigation neben Tabs</p>
                <p>→ <strong>Topic Ideas:</strong> In Header neben Customize Button</p>
                <p>→ <strong>CTA Dropdown:</strong> 10 vordefinierte Options + Custom</p>
                <p>→ <strong>Hashtag Generator:</strong> Button neben Input-Feld</p>
                <p>→ <strong>Multi-Source Input:</strong> Manual, URL, PDF, Image - alle funktionsfähig</p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Complete Content Editor
          </h4>
          
          <CodePreview code={`import { ContentEditor } from '@/components/showcase/ContentEditorShowcase'

<ContentEditor
  onTextChange={(versions, index) => console.log('Updated')}
  onCustomizeClick={() => setModalOpen(true)}
  initialCta="learn-more"
  channelCustomizations={{
    customTextCount: 2,
    customHashtagsCount: 1,
    customCtaCount: 3
  }}
/>`}>
            <ContentEditorDemo />
          </CodePreview>
        </Card>
      </div>
    </div>
  )
}