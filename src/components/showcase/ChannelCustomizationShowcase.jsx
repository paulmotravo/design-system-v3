import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Textarea } from '@/components/ui/textarea'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Separator } from '@/components/ui/separator'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger, DialogFooter } from '@/components/ui/dialog'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { AlertCircle, Sparkles, AtSign, MapPin, Smile, Bold, Italic, Type, Code2, Copy, Check } from 'lucide-react'
import { useState } from 'react'

export default function ChannelCustomizationShowcase() {
  const [open, setOpen] = useState(false)
  const [showCode, setShowCode] = useState(false)
  const [copiedStates, setCopiedStates] = useState({
    dialog: false,
    instagram: false,
    facebook: false,
    twitter: false,
    linkedin: false
  })
  
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

  const handleCopy = (section) => {
    const codeMap = {
      dialog: dialogCode,
      instagram: instagramCardCode,
      facebook: facebookCardCode,
      twitter: twitterCardCode,
      linkedin: linkedinCardCode
    }
    
    navigator.clipboard.writeText(codeMap[section])
    setCopiedStates({ ...copiedStates, [section]: true })
    setTimeout(() => {
      setCopiedStates({ ...copiedStates, [section]: false })
    }, 2000)
  }

  const handleGenerateAll = () => {
    console.log('Generating for all channels...')
  }

  const handleGenerateSingle = (platform) => {
    console.log(`Generating for ${platform}...`)
  }

  const insertText = (platform, insertion) => {
    setChannelTexts({
      ...channelTexts,
      [platform]: { ...channelTexts[platform], text: channelTexts[platform].text + insertion }
    })
  }

  const limits = {
    twitter: 280,
    instagram: 2200,
    facebook: 63206,
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

  const emojis = ['😊', '🎉', '✨', '💪', '🔥', '❤️', '👍', '🎨', '📸', '🌟', '💯', '✂️', '💇', '🎯', '📱', '🚀', '💡', '⭐', '🎊', '🌈']
  const specialChars = ['→', '•', '★', '▸', '◆', '►', '✓', '×', '±', '≈', '∞', '™', '©', '®', '€', '$', '£', '¥']

  // Code snippets
  const dialogCode = `<Dialog open={open} onOpenChange={setOpen}>
  <DialogTrigger asChild>
    <Button variant="primary" size="lg">
      <Sparkles className="w-4 h-4 mr-2" />
      Open Channel Customization
    </Button>
  </DialogTrigger>
  <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
    <DialogHeader>
      <DialogTitle className="text-2xl font-black">
        Channel-Specific Adjustments
      </DialogTitle>
      <DialogDescription>
        AI automatically adapts content for each channel
      </DialogDescription>
    </DialogHeader>

    {/* Auto-Adapt Section */}
    <Card variant="soft-purple" className="p-6">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-viralspoon-purple rounded-xl flex items-center justify-center">
            <Sparkles className="w-5 h-5 text-white" />
          </div>
          <div>
            <div className="font-bold text-sm text-foreground">
              Automatic Adaptation
            </div>
            <div className="text-xs text-muted-foreground">
              AI adapts content automatically for every channel
            </div>
          </div>
        </div>
        <Button variant="primary" size="default" onClick={handleGenerateAll}>
          <Sparkles className="w-4 h-4 mr-2" />
          Adapt for All Channels
        </Button>
      </div>
    </Card>

    <Separator />

    {/* Channel Grid with platform cards */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {/* Platform Cards Here */}
    </div>

    <DialogFooter className="gap-2">
      <Button variant="outline" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => setOpen(false)}>
        Save Changes
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`

  const instagramCardCode = `<Card className="p-6 border-2 border-purple-200 bg-purple-50/50">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-sm text-foreground">Instagram</h5>
        <p className="text-xs text-muted-foreground">Feed Post + Story</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    {/* Post Text with integrated counter */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label htmlFor="instagram-text" className="text-xs">Post Text</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 text-xs">
              <Type className="w-3 h-3 mr-1" />
              Unicode
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {/* Emoji and Special Character Picker */}
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative">
        <Textarea
          id="instagram-text"
          value={channelTexts.instagram.text}
          onChange={(e) => setChannelTexts({
            ...channelTexts,
            instagram: { ...channelTexts.instagram, text: e.target.value }
          })}
          className="min-h-[120px] resize-none text-sm pr-24 pb-8"
          placeholder="Adapted text for Instagram..."
        />
        <Badge 
          variant={getCountVariant(channelTexts.instagram.text.length, 2200)} 
          className="absolute bottom-2 right-2 text-xs"
        >
          {channelTexts.instagram.text.length}/{formatNumber(2200)}
        </Badge>
      </div>
    </div>

    {/* AI Buttons directly under text */}
    <div className="flex gap-2">
      <Badge variant="soft-purple" className="gap-1">
        <Sparkles className="w-3 h-3" />
        Copilot
      </Badge>
      <Button variant="primary" size="sm" onClick={() => handleGenerateSingle('instagram')}>
        <Sparkles className="w-4 h-4 mr-2" />
        Generate
      </Button>
    </div>

    <Separator />

    {/* Hashtags */}
    <div>
      <Label htmlFor="instagram-hashtags" className="text-xs mb-2">Hashtags</Label>
      <Input
        id="instagram-hashtags"
        value={channelTexts.instagram.hashtags}
        className="text-sm"
        placeholder="Hashtags for Instagram..."
      />
    </div>

    {/* CTA */}
    <div>
      <Label htmlFor="instagram-cta" className="text-xs mb-2">Call to Action</Label>
      <Input
        id="instagram-cta"
        value={channelTexts.instagram.cta}
        className="text-sm"
        placeholder="CTA for Instagram"
      />
    </div>

    {/* Platform-specific features */}
    <div className="grid grid-cols-2 gap-2">
      <Button variant="outline" size="sm" className="justify-start">
        <AtSign className="w-4 h-4 mr-2" />
        Mention
      </Button>
      <Button variant="outline" size="sm" className="justify-start">
        <MapPin className="w-4 h-4 mr-2" />
        Location
      </Button>
    </div>
  </div>
</Card>`

  const facebookCardCode = `<Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-sm text-foreground">Facebook</h5>
        <p className="text-xs text-muted-foreground">Post</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    {/* Post Text with counter */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label htmlFor="facebook-text" className="text-xs">Post Text</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 text-xs">
              <Type className="w-3 h-3 mr-1" />
              Unicode
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {/* Emoji and Special Character Picker */}
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative">
        <Textarea
          id="facebook-text"
          value={channelTexts.facebook.text}
          className="min-h-[120px] resize-none text-sm pr-24 pb-8"
          placeholder="Adapted text for Facebook..."
        />
        <Badge 
          variant={getCountVariant(channelTexts.facebook.text.length, 63206)} 
          className="absolute bottom-2 right-2 text-xs"
        >
          {channelTexts.facebook.text.length}/{formatNumber(63206)}
        </Badge>
      </div>
    </div>

    {/* AI Buttons */}
    <div className="flex gap-2">
      <Badge variant="soft-blue" className="gap-1">
        <Sparkles className="w-3 h-3" />
        Copilot
      </Badge>
      <Button variant="primary" size="sm" onClick={() => handleGenerateSingle('facebook')}>
        <Sparkles className="w-4 h-4 mr-2" />
        Generate
      </Button>
    </div>

    <Separator />

    {/* Hashtags */}
    <div>
      <Label htmlFor="facebook-hashtags" className="text-xs mb-2">Hashtags</Label>
      <Input id="facebook-hashtags" className="text-sm" placeholder="Hashtags..." />
    </div>

    {/* CTA + Link */}
    <div>
      <Label htmlFor="facebook-cta" className="text-xs mb-2">Call to Action + Link</Label>
      <Input id="facebook-cta" className="text-sm mb-2" placeholder="CTA for Facebook" />
      <Input id="facebook-link" className="text-sm" placeholder="Link URL (https://...)" />
    </div>

    {/* Platform features */}
    <div className="grid grid-cols-2 gap-2">
      <Button variant="outline" size="sm" className="justify-start">
        <AtSign className="w-4 h-4 mr-2" />
        Mention
      </Button>
      <Button variant="outline" size="sm" className="justify-start">
        <MapPin className="w-4 h-4 mr-2" />
        Location
      </Button>
    </div>
  </div>
</Card>`

  const twitterCardCode = `<Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-sm text-foreground">Twitter</h5>
        <p className="text-xs text-muted-foreground">Tweet</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    {/* Post Text */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label htmlFor="twitter-text" className="text-xs">Post Text</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 text-xs">
              <Type className="w-3 h-3 mr-1" />
              Unicode
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {/* Emoji and Special Character Picker */}
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative">
        <Textarea
          id="twitter-text"
          value={channelTexts.twitter.text}
          className="min-h-[120px] resize-none text-sm pr-24 pb-8"
          placeholder="Adapted text for Twitter..."
        />
        <Badge 
          variant={getCountVariant(channelTexts.twitter.text.length, 280)} 
          className="absolute bottom-2 right-2 text-xs"
        >
          {channelTexts.twitter.text.length}/280
        </Badge>
      </div>
    </div>

    {/* AI Buttons */}
    <div className="flex gap-2">
      <Badge variant="soft-blue" className="gap-1">
        <Sparkles className="w-3 h-3" />
        Copilot
      </Badge>
      <Button variant="primary" size="sm" onClick={() => handleGenerateSingle('twitter')}>
        <Sparkles className="w-4 h-4 mr-2" />
        Generate
      </Button>
    </div>

    <Separator />

    {/* Hashtags */}
    <div>
      <Label htmlFor="twitter-hashtags" className="text-xs mb-2">Hashtags</Label>
      <Input id="twitter-hashtags" className="text-sm" placeholder="Hashtags..." />
    </div>

    {/* CTA */}
    <div>
      <Label htmlFor="twitter-cta" className="text-xs mb-2">Call to Action</Label>
      <Input id="twitter-cta" className="text-sm" placeholder="CTA for Twitter" />
    </div>

    {/* Twitter only supports mentions */}
    <div>
      <Button variant="outline" size="sm" className="w-full justify-start">
        <AtSign className="w-4 h-4 mr-2" />
        Mention
      </Button>
    </div>
  </div>
</Card>`

  const linkedinCardCode = `<Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
  <div className="flex items-center justify-between mb-4">
    <div className="flex items-center gap-3">
      <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center">
        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
        </svg>
      </div>
      <div>
        <h5 className="font-bold text-sm text-foreground">LinkedIn</h5>
        <p className="text-xs text-muted-foreground">Post</p>
      </div>
    </div>
  </div>

  <div className="space-y-4">
    {/* Post Text */}
    <div>
      <div className="flex items-center justify-between mb-2">
        <Label htmlFor="linkedin-text" className="text-xs">Post Text</Label>
        <Popover>
          <PopoverTrigger asChild>
            <Button variant="ghost" size="sm" className="h-6 text-xs">
              <Type className="w-3 h-3 mr-1" />
              Unicode
            </Button>
          </PopoverTrigger>
          <PopoverContent className="w-80">
            {/* Emoji and Special Character Picker */}
          </PopoverContent>
        </Popover>
      </div>
      <div className="relative">
        <Textarea
          id="linkedin-text"
          value={channelTexts.linkedin.text}
          className="min-h-[120px] resize-none text-sm pr-24 pb-8"
          placeholder="Adapted text for LinkedIn..."
        />
        <Badge 
          variant={getCountVariant(channelTexts.linkedin.text.length, 3000)} 
          className="absolute bottom-2 right-2 text-xs"
        >
          {channelTexts.linkedin.text.length}/{formatNumber(3000)}
        </Badge>
      </div>
    </div>

    {/* AI Buttons */}
    <div className="flex gap-2">
      <Badge variant="soft-blue" className="gap-1">
        <Sparkles className="w-3 h-3" />
        Copilot
      </Badge>
      <Button variant="primary" size="sm" onClick={() => handleGenerateSingle('linkedin')}>
        <Sparkles className="w-4 h-4 mr-2" />
        Generate
      </Button>
    </div>

    <Separator />

    {/* Hashtags */}
    <div>
      <Label htmlFor="linkedin-hashtags" className="text-xs mb-2">Hashtags</Label>
      <Input id="linkedin-hashtags" className="text-sm" placeholder="Hashtags..." />
    </div>

    {/* CTA + Link */}
    <div>
      <Label htmlFor="linkedin-cta" className="text-xs mb-2">Call to Action + Link</Label>
      <Input id="linkedin-cta" className="text-sm mb-2" placeholder="CTA for LinkedIn" />
      <Input id="linkedin-link" className="text-sm" placeholder="Link URL (https://...)" />
    </div>

    {/* LinkedIn only supports mentions */}
    <div>
      <Button variant="outline" size="sm" className="w-full justify-start">
        <AtSign className="w-4 h-4 mr-2" />
        Mention
      </Button>
    </div>
  </div>
</Card>`

  return (
    <div className="mb-20">
      <div className="mb-8">
        <div className="flex items-center justify-between">
          <div>
            <h3 className="text-3xl font-black mb-2 text-foreground">Channel Customization Dialog</h3>
            <p className="text-muted-foreground">Platform-specific content adjustments with AI assistance</p>
          </div>
          <Button
            variant={showCode ? "primary" : "outline-solid"}
            size="sm"
            onClick={() => setShowCode(!showCode)}
            className="gap-2"
          >
            <Code2 className="w-4 h-4" />
            {showCode ? 'Hide' : 'Show'} Code
          </Button>
        </div>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Channel Customization Philosophy</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>→ <strong>AI Assistance:</strong> Copilot and Generate buttons directly under text field</p>
                <p>→ <strong>Unicode Editor:</strong> Emojis and special characters in dropdown</p>
                <p>→ <strong>Integrated Counter:</strong> Character count in bottom-right of textarea</p>
                <p>→ <strong>Platform Features:</strong> Mentions/Location only where supported</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Demo Trigger */}
        <Card variant="elevated" className="p-8">
          <div className="flex items-center justify-between mb-6">
            <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider">
              Interactive Demo
            </h4>
            {showCode && (
              <Button
                variant="ghost"
                size="sm"
                onClick={() => handleCopy('dialog')}
                className="gap-2"
              >
                {copiedStates.dialog ? (
                  <>
                    <Check className="w-4 h-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    Copy Dialog Code
                  </>
                )}
              </Button>
            )}
          </div>

          {showCode ? (
            <div className="relative">
              <pre className="bg-zinc-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-800">
                <code>{dialogCode}</code>
              </pre>
            </div>
          ) : (
            <div className="flex flex-col items-center justify-center py-12">
              <div className="mb-6 text-center">
                <div className="w-16 h-16 bg-linear-to-br from-viralspoon-purple to-viralspoon-coral rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>
                <h5 className="text-lg font-bold text-foreground mb-2">Customize Content per Channel</h5>
                <p className="text-sm text-muted-foreground max-w-md">
                  Adapt your post for each social media platform with AI assistance or manual editing
                </p>
              </div>

              <Dialog open={open} onOpenChange={setOpen}>
                <DialogTrigger asChild>
                  <Button variant="primary" size="lg">
                    <Sparkles className="w-4 h-4 mr-2" />
                    Open Channel Customization
                  </Button>
                </DialogTrigger>
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
                        <div className="w-10 h-10 bg-viralspoon-purple rounded-xl flex items-center justify-center">
                          <Sparkles className="w-5 h-5 text-white" />
                        </div>
                        <div>
                          <div className="font-bold text-sm text-foreground">Automatic Adaptation</div>
                          <div className="text-xs text-muted-foreground">AI adapts content automatically for every channel</div>
                        </div>
                      </div>
                      <Button 
                        variant="primary" 
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
                    {/* Instagram */}
                    <Card className="p-6 border-2 border-purple-200 bg-purple-50/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-foreground">Instagram</h5>
                            <p className="text-xs text-muted-foreground">Feed Post + Story</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Post Text with integrated counter */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="instagram-text" className="text-xs">Post Text</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 text-xs">
                                  <Type className="w-3 h-3 mr-1" />
                                  Unicode
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Emojis</div>
                                    <div className="flex flex-wrap gap-1">
                                      {emojis.map((emoji, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-base hover:bg-purple-100"
                                          onClick={() => insertText('instagram', emoji)}
                                        >
                                          {emoji}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                  <Separator />
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Special Characters</div>
                                    <div className="flex flex-wrap gap-1">
                                      {specialChars.map((char, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-sm hover:bg-purple-100"
                                          onClick={() => insertText('instagram', char)}
                                        >
                                          {char}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="relative">
                            <Textarea
                              id="instagram-text"
                              value={channelTexts.instagram.text}
                              onChange={(e) => setChannelTexts({
                                ...channelTexts,
                                instagram: { ...channelTexts.instagram, text: e.target.value }
                              })}
                              className="min-h-[120px] resize-none text-sm pr-24 pb-8"
                              placeholder="Adapted text for Instagram..."
                            />
                            <Badge 
                              variant={getCountVariant(channelTexts.instagram.text.length, limits.instagram)} 
                              className="absolute bottom-2 right-2 text-xs"
                            >
                              {channelTexts.instagram.text.length}/{formatNumber(limits.instagram)}
                            </Badge>
                          </div>
                        </div>

                        {/* AI Buttons directly under text */}
                        <div className="flex gap-2">
                          <Badge variant="soft-purple" className="gap-1">
                            <Sparkles className="w-3 h-3" />
                            Copilot
                          </Badge>
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => handleGenerateSingle('instagram')}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
                        </div>

                        <Separator />

                        {/* Hashtags */}
                        <div>
                          <Label htmlFor="instagram-hashtags" className="text-xs mb-2">Hashtags</Label>
                          <Input
                            id="instagram-hashtags"
                            value={channelTexts.instagram.hashtags}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              instagram: { ...channelTexts.instagram, hashtags: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Hashtags for Instagram..."
                          />
                        </div>

                        {/* CTA */}
                        <div>
                          <Label htmlFor="instagram-cta" className="text-xs mb-2">Call to Action</Label>
                          <Input
                            id="instagram-cta"
                            value={channelTexts.instagram.cta}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              instagram: { ...channelTexts.instagram, cta: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="CTA for Instagram"
                          />
                        </div>

                        {/* Platform-specific features: Mention & Location (Instagram supports both) */}
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="justify-start">
                            <AtSign className="w-4 h-4 mr-2" />
                            Mention
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            <MapPin className="w-4 h-4 mr-2" />
                            Location
                          </Button>
                        </div>
                      </div>
                    </Card>

                    {/* Facebook */}
                    <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-foreground">Facebook</h5>
                            <p className="text-xs text-muted-foreground">Post</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Post Text */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="facebook-text" className="text-xs">Post Text</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 text-xs">
                                  <Type className="w-3 h-3 mr-1" />
                                  Unicode
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Emojis</div>
                                    <div className="flex flex-wrap gap-1">
                                      {emojis.map((emoji, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-base hover:bg-blue-100"
                                          onClick={() => insertText('facebook', emoji)}
                                        >
                                          {emoji}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                  <Separator />
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Special Characters</div>
                                    <div className="flex flex-wrap gap-1">
                                      {specialChars.map((char, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-sm hover:bg-blue-100"
                                          onClick={() => insertText('facebook', char)}
                                        >
                                          {char}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="relative">
                            <Textarea
                              id="facebook-text"
                              value={channelTexts.facebook.text}
                              onChange={(e) => setChannelTexts({
                                ...channelTexts,
                                facebook: { ...channelTexts.facebook, text: e.target.value }
                              })}
                              className="min-h-[120px] resize-none text-sm pr-24 pb-8"
                              placeholder="Adapted text for Facebook..."
                            />
                            <Badge 
                              variant={getCountVariant(channelTexts.facebook.text.length, limits.facebook)} 
                              className="absolute bottom-2 right-2 text-xs"
                            >
                              {channelTexts.facebook.text.length}/{formatNumber(limits.facebook)}
                            </Badge>
                          </div>
                        </div>

                        {/* AI Buttons */}
                        <div className="flex gap-2">
                          <Badge variant="soft-blue" className="gap-1">
                            <Sparkles className="w-3 h-3" />
                            Copilot
                          </Badge>
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => handleGenerateSingle('facebook')}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
                        </div>

                        <Separator />

                        {/* Hashtags */}
                        <div>
                          <Label htmlFor="facebook-hashtags" className="text-xs mb-2">Hashtags</Label>
                          <Input
                            id="facebook-hashtags"
                            value={channelTexts.facebook.hashtags}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              facebook: { ...channelTexts.facebook, hashtags: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Hashtags for Facebook..."
                          />
                        </div>

                        {/* CTA + Link */}
                        <div>
                          <Label htmlFor="facebook-cta" className="text-xs mb-2">Call to Action + Link</Label>
                          <Input
                            id="facebook-cta"
                            value={channelTexts.facebook.cta}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              facebook: { ...channelTexts.facebook, cta: e.target.value }
                            })}
                            className="text-sm mb-2"
                            placeholder="CTA for Facebook"
                          />
                          <Input
                            id="facebook-link"
                            value={channelTexts.facebook.link}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              facebook: { ...channelTexts.facebook, link: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Link URL (https://...)"
                          />
                        </div>

                        {/* Platform features: Mention & Location (Facebook supports both) */}
                        <div className="grid grid-cols-2 gap-2">
                          <Button variant="outline" size="sm" className="justify-start">
                            <AtSign className="w-4 h-4 mr-2" />
                            Mention
                          </Button>
                          <Button variant="outline" size="sm" className="justify-start">
                            <MapPin className="w-4 h-4 mr-2" />
                            Location
                          </Button>
                        </div>
                      </div>
                    </Card>

                    {/* Twitter */}
                    <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-foreground">Twitter</h5>
                            <p className="text-xs text-muted-foreground">Tweet</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Post Text */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="twitter-text" className="text-xs">Post Text</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 text-xs">
                                  <Type className="w-3 h-3 mr-1" />
                                  Unicode
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Emojis</div>
                                    <div className="flex flex-wrap gap-1">
                                      {emojis.map((emoji, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-base hover:bg-blue-100"
                                          onClick={() => insertText('twitter', emoji)}
                                        >
                                          {emoji}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                  <Separator />
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Special Characters</div>
                                    <div className="flex flex-wrap gap-1">
                                      {specialChars.map((char, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-sm hover:bg-blue-100"
                                          onClick={() => insertText('twitter', char)}
                                        >
                                          {char}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="relative">
                            <Textarea
                              id="twitter-text"
                              value={channelTexts.twitter.text}
                              onChange={(e) => setChannelTexts({
                                ...channelTexts,
                                twitter: { ...channelTexts.twitter, text: e.target.value }
                              })}
                              className="min-h-[120px] resize-none text-sm pr-24 pb-8"
                              placeholder="Adapted text for Twitter..."
                            />
                            <Badge 
                              variant={getCountVariant(channelTexts.twitter.text.length, limits.twitter)} 
                              className="absolute bottom-2 right-2 text-xs"
                            >
                              {channelTexts.twitter.text.length}/{limits.twitter}
                            </Badge>
                          </div>
                        </div>

                        {/* AI Buttons */}
                        <div className="flex gap-2">
                          <Badge variant="soft-blue" className="gap-1">
                            <Sparkles className="w-3 h-3" />
                            Copilot
                          </Badge>
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => handleGenerateSingle('twitter')}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
                        </div>

                        <Separator />

                        {/* Hashtags */}
                        <div>
                          <Label htmlFor="twitter-hashtags" className="text-xs mb-2">Hashtags</Label>
                          <Input
                            id="twitter-hashtags"
                            value={channelTexts.twitter.hashtags}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              twitter: { ...channelTexts.twitter, hashtags: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Hashtags for Twitter..."
                          />
                        </div>

                        {/* CTA */}
                        <div>
                          <Label htmlFor="twitter-cta" className="text-xs mb-2">Call to Action</Label>
                          <Input
                            id="twitter-cta"
                            value={channelTexts.twitter.cta}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              twitter: { ...channelTexts.twitter, cta: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="CTA for Twitter"
                          />
                        </div>

                        {/* Twitter only supports mentions, no location */}
                        <div>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <AtSign className="w-4 h-4 mr-2" />
                            Mention
                          </Button>
                        </div>
                      </div>
                    </Card>

                    {/* LinkedIn */}
                    <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center gap-3">
                          <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center">
                            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                            </svg>
                          </div>
                          <div>
                            <h5 className="font-bold text-sm text-foreground">LinkedIn</h5>
                            <p className="text-xs text-muted-foreground">Post</p>
                          </div>
                        </div>
                      </div>

                      <div className="space-y-4">
                        {/* Post Text */}
                        <div>
                          <div className="flex items-center justify-between mb-2">
                            <Label htmlFor="linkedin-text" className="text-xs">Post Text</Label>
                            <Popover>
                              <PopoverTrigger asChild>
                                <Button variant="ghost" size="sm" className="h-6 text-xs">
                                  <Type className="w-3 h-3 mr-1" />
                                  Unicode
                                </Button>
                              </PopoverTrigger>
                              <PopoverContent className="w-80">
                                <div className="space-y-3">
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Emojis</div>
                                    <div className="flex flex-wrap gap-1">
                                      {emojis.map((emoji, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-base hover:bg-blue-100"
                                          onClick={() => insertText('linkedin', emoji)}
                                        >
                                          {emoji}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                  <Separator />
                                  <div>
                                    <div className="text-xs font-semibold mb-2 text-foreground">Special Characters</div>
                                    <div className="flex flex-wrap gap-1">
                                      {specialChars.map((char, idx) => (
                                        <Button
                                          key={idx}
                                          variant="ghost"
                                          size="sm"
                                          className="w-8 h-8 p-0 text-sm hover:bg-blue-100"
                                          onClick={() => insertText('linkedin', char)}
                                        >
                                          {char}
                                        </Button>
                                      ))}
                                    </div>
                                  </div>
                                </div>
                              </PopoverContent>
                            </Popover>
                          </div>
                          <div className="relative">
                            <Textarea
                              id="linkedin-text"
                              value={channelTexts.linkedin.text}
                              onChange={(e) => setChannelTexts({
                                ...channelTexts,
                                linkedin: { ...channelTexts.linkedin, text: e.target.value }
                              })}
                              className="min-h-[120px] resize-none text-sm pr-24 pb-8"
                              placeholder="Adapted text for LinkedIn..."
                            />
                            <Badge 
                              variant={getCountVariant(channelTexts.linkedin.text.length, limits.linkedin)} 
                              className="absolute bottom-2 right-2 text-xs"
                            >
                              {channelTexts.linkedin.text.length}/{formatNumber(limits.linkedin)}
                            </Badge>
                          </div>
                        </div>

                        {/* AI Buttons */}
                        <div className="flex gap-2">
                          <Badge variant="soft-blue" className="gap-1">
                            <Sparkles className="w-3 h-3" />
                            Copilot
                          </Badge>
                          <Button 
                            variant="primary" 
                            size="sm"
                            onClick={() => handleGenerateSingle('linkedin')}
                          >
                            <Sparkles className="w-4 h-4 mr-2" />
                            Generate
                          </Button>
                        </div>

                        <Separator />

                        {/* Hashtags */}
                        <div>
                          <Label htmlFor="linkedin-hashtags" className="text-xs mb-2">Hashtags</Label>
                          <Input
                            id="linkedin-hashtags"
                            value={channelTexts.linkedin.hashtags}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              linkedin: { ...channelTexts.linkedin, hashtags: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Hashtags for LinkedIn..."
                          />
                        </div>

                        {/* CTA + Link */}
                        <div>
                          <Label htmlFor="linkedin-cta" className="text-xs mb-2">Call to Action + Link</Label>
                          <Input
                            id="linkedin-cta"
                            value={channelTexts.linkedin.cta}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              linkedin: { ...channelTexts.linkedin, cta: e.target.value }
                            })}
                            className="text-sm mb-2"
                            placeholder="CTA for LinkedIn"
                          />
                          <Input
                            id="linkedin-link"
                            value={channelTexts.linkedin.link}
                            onChange={(e) => setChannelTexts({
                              ...channelTexts,
                              linkedin: { ...channelTexts.linkedin, link: e.target.value }
                            })}
                            className="text-sm"
                            placeholder="Link URL (https://...)"
                          />
                        </div>

                        {/* LinkedIn only supports mentions, no location */}
                        <div>
                          <Button variant="outline" size="sm" className="w-full justify-start">
                            <AtSign className="w-4 h-4 mr-2" />
                            Mention
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </div>

                  <DialogFooter className="gap-2">
                    <Button variant="outline" onClick={() => setOpen(false)}>
                      Cancel
                    </Button>
                    <Button variant="primary" onClick={() => setOpen(false)}>
                      Save Changes
                    </Button>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          )}
        </Card>

        {/* Platform-specific Code Examples */}
        {showCode && (
          <>
            {/* Instagram Card Code */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-foreground">Instagram Card</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('instagram')}
                  className="gap-2"
                >
                  {copiedStates.instagram ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-zinc-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-800">
                <code>{instagramCardCode}</code>
              </pre>
            </Card>

            {/* Facebook Card Code */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-foreground">Facebook Card</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('facebook')}
                  className="gap-2"
                >
                  {copiedStates.facebook ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-zinc-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-800">
                <code>{facebookCardCode}</code>
              </pre>
            </Card>

            {/* Twitter Card Code */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-foreground">Twitter Card</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('twitter')}
                  className="gap-2"
                >
                  {copiedStates.twitter ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-zinc-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-800">
                <code>{twitterCardCode}</code>
              </pre>
            </Card>

            {/* LinkedIn Card Code */}
            <Card variant="elevated" className="p-6">
              <div className="flex items-center justify-between mb-4">
                <h4 className="text-sm font-bold text-foreground">LinkedIn Card</h4>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => handleCopy('linkedin')}
                  className="gap-2"
                >
                  {copiedStates.linkedin ? (
                    <>
                      <Check className="w-4 h-4" />
                      Copied!
                    </>
                  ) : (
                    <>
                      <Copy className="w-4 h-4" />
                      Copy Code
                    </>
                  )}
                </Button>
              </div>
              <pre className="bg-zinc-900 text-gray-100 p-6 rounded-xl overflow-x-auto text-sm border border-gray-800">
                <code>{linkedinCardCode}</code>
              </pre>
            </Card>
          </>
        )}

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-foreground">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-muted-foreground">
            <p>→ <strong>Copilot Badge + Generate Button:</strong> Positioned directly under Post Text field</p>
            <p>→ <strong>Unicode Editor:</strong> Popover with Emojis and Special Characters tabs</p>
            <p>→ <strong>Character Counter:</strong> Integrated in bottom-right corner of textarea</p>
            <p>→ <strong>Platform Features:</strong> Instagram/Facebook = Mention + Location, Twitter/LinkedIn = Mention only</p>
            <p>→ <strong>Generate Button:</strong> Triggers AI content generation per channel</p>
          </div>
        </Card>
      </div>
    </div>
  )
}