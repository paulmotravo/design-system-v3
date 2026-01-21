import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Switch } from '@/components/ui/switch'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group'
import { AlertCircle, Check, X } from 'lucide-react'
import { useState } from 'react'

export default function PlatformCardsShowcase() {
  const [connections, setConnections] = useState({
    instagram: true,
    facebook: true,
    twitter: false,
    linkedin: true,
    tiktok: false,
  })

  const toggleConnection = (platform) => {
    setConnections(prev => ({ ...prev, [platform]: !prev[platform] }))
  }

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-foreground">Platform Cards</h3>
        <p className="text-muted-foreground">Social media connection cards for managing platforms</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple rounded-2xl flex items-center justify-center shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-foreground">Platform Cards Philosophy</h4>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>→ <strong>Clear Status:</strong> Connected vs disconnected immediately visible</p>
                <p>→ <strong>Quick Toggle:</strong> Enable/disable platforms with one click</p>
                <p>→ <strong>Visual Hierarchy:</strong> Platform branding with consistent styling</p>
                <p>→ <strong>Actionable:</strong> Clear CTAs for each state</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Connected State */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Connected Platforms
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Instagram - Connected */}
            <Card className="p-6 border-2 border-purple-200 bg-purple-50/50">
              <div className="flex items-start gap-4">
                <Card className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shrink-0 border-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                </Card>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-lg text-foreground">Instagram</h5>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Feed Post + Story</p>
                  <Separator className="my-3" />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="instagram-toggle" className="text-sm cursor-pointer">
                      {connections.instagram ? 'Active' : 'Paused'}
                    </Label>
                    <Switch 
                      id="instagram-toggle"
                      checked={connections.instagram}
                      onCheckedChange={() => toggleConnection('instagram')}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* Facebook - Connected */}
            <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
              <div className="flex items-start gap-4">
                <Card className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center shrink-0 border-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                </Card>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-lg text-foreground">Facebook</h5>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Post</p>
                  <Separator className="my-3" />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="facebook-toggle" className="text-sm cursor-pointer">
                      {connections.facebook ? 'Active' : 'Paused'}
                    </Label>
                    <Switch 
                      id="facebook-toggle"
                      checked={connections.facebook}
                      onCheckedChange={() => toggleConnection('facebook')}
                    />
                  </div>
                </div>
              </div>
            </Card>

            {/* LinkedIn - Connected */}
            <Card className="p-6 border-2 border-blue-200 bg-blue-50/50">
              <div className="flex items-start gap-4">
                <Card className="w-14 h-14 rounded-2xl bg-[#0A66C2] flex items-center justify-center shrink-0 border-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                  </svg>
                </Card>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-lg text-foreground">LinkedIn</h5>
                    <Badge className="bg-green-100 text-green-700 border-0">
                      <Check className="w-3 h-3 mr-1" />
                      Connected
                    </Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Post</p>
                  <Separator className="my-3" />
                  <div className="flex items-center justify-between">
                    <Label htmlFor="linkedin-toggle" className="text-sm cursor-pointer">
                      {connections.linkedin ? 'Active' : 'Paused'}
                    </Label>
                    <Switch 
                      id="linkedin-toggle"
                      checked={connections.linkedin}
                      onCheckedChange={() => toggleConnection('linkedin')}
                    />
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Disconnected State */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Available Platforms
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Twitter - Disconnected */}
            <Card className="p-6 border-2 border-border hover:border-border/80 transition-colors">
              <div className="flex items-start gap-4">
                <Card className="w-14 h-14 rounded-2xl bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center shrink-0 border-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                </Card>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-lg text-foreground">Twitter</h5>
                    <Badge variant="secondary">Not Connected</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Tweet</p>
                  <Separator className="my-3" />
                  <Button variant="primary" size="sm" className="w-full">
                    Connect Account
                  </Button>
                </div>
              </div>
            </Card>

            {/* TikTok - Disconnected */}
            <Card className="p-6 border-2 border-border hover:border-border/80 transition-colors">
              <div className="flex items-start gap-4">
                <Card className="w-14 h-14 rounded-2xl bg-black flex items-center justify-center shrink-0 border-0 shadow-lg">
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.10-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
                  </svg>
                </Card>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <h5 className="font-bold text-lg text-foreground">TikTok</h5>
                    <Badge variant="secondary">Not Connected</Badge>
                  </div>
                  <p className="text-sm text-muted-foreground mb-3">Video</p>
                  <Separator className="my-3" />
                  <Button variant="primary" size="sm" className="w-full">
                    Connect Account
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </Card>

        {/* Compact Selection Cards - For Publishing */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Platform Selection Cards (Publishing Flow)
          </h4>

          <div className="space-y-8">
            <p className="text-sm text-muted-foreground">
              Compact cards for selecting platforms when creating/scheduling a post. Click platform to enable/disable, click time to set schedule.
            </p>

            {/* Variant 1: Horizontal Compact with Time */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 1: Horizontal with Schedule Time</div>
              <div className="flex flex-wrap gap-3">
                <Card className="p-3 border-2 border-purple-200 bg-purple-50/50 cursor-pointer hover:shadow-lg transition-all min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <Card className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center shrink-0 border-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                      </svg>
                    </Card>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground">Instagram</div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:bg-purple-100">
                        9:00 AM
                      </Button>
                    </div>
                    <Switch checked={true} />
                  </div>
                </Card>

                <Card className="p-3 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-lg transition-all min-w-[180px]">
                  <div className="flex items-center gap-3">
                    <Card className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center shrink-0 border-0">
                      <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Card>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold text-sm text-foreground">Facebook</div>
                      <Button variant="ghost" size="sm" className="h-6 px-2 text-xs hover:bg-blue-100">
                        9:00 AM
                      </Button>
                    </div>
                    <Switch checked={true} />
                  </div>
                </Card>
              </div>
            </div>

            {/* Variant 2: Vertical Compact List */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 2: Vertical List (Sidebar Style)</div>
              <div className="max-w-xs space-y-2">
                <Card className="p-3 border-2 border-purple-200 bg-purple-50/50 cursor-pointer hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Card className="w-8 h-8 rounded-lg bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center border-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                        </svg>
                      </Card>
                      <div>
                        <div className="font-semibold text-sm text-foreground">Instagram</div>
                        <Button variant="link" className="h-auto p-0 text-xs text-purple-600">
                          Set time
                        </Button>
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </Card>

                <Card className="p-3 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-md transition-all">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <Card className="w-8 h-8 rounded-lg bg-[#1877F2] flex items-center justify-center border-0">
                        <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Card>
                      <div>
                        <div className="font-semibold text-sm text-foreground">Facebook</div>
                        <span className="text-xs text-blue-600">3:00 PM</span>
                      </div>
                    </div>
                    <Switch checked={true} />
                  </div>
                </Card>
              </div>
            </div>

            {/* Variant 3: Grid Cards with Checkmark Indicator */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 3: Grid Selection Cards (Publishing Modal Style)</div>
              <div className="grid grid-cols-2 gap-3 max-w-lg">
                <Card className="p-4 border-2 border-purple-200 bg-purple-50/50 cursor-pointer hover:shadow-lg transition-all relative">
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <Card className="w-12 h-12 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center border-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                      </svg>
                    </Card>
                    <div>
                      <div className="font-bold text-sm text-foreground">Instagram</div>
                      <div className="text-xs text-muted-foreground">Feed Post + Story</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-lg transition-all relative">
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <Card className="w-12 h-12 rounded-xl bg-[#1877F2] flex items-center justify-center border-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Card>
                    <div>
                      <div className="font-bold text-sm text-foreground">Facebook</div>
                      <div className="text-xs text-muted-foreground">Post</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-lg transition-all relative">
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <Card className="w-12 h-12 rounded-xl bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center border-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </Card>
                    <div>
                      <div className="font-bold text-sm text-foreground">Twitter</div>
                      <div className="text-xs text-muted-foreground">Tweet</div>
                    </div>
                  </div>
                </Card>

                <Card className="p-4 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-lg transition-all relative">
                  <div className="absolute top-3 right-3">
                    <div className="w-5 h-5 rounded-full bg-green-500 flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex flex-col items-center text-center gap-2">
                    <Card className="w-12 h-12 rounded-xl bg-[#0A66C2] flex items-center justify-center border-0">
                      <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                      </svg>
                    </Card>
                    <div>
                      <div className="font-bold text-sm text-foreground">LinkedIn</div>
                      <div className="text-xs text-muted-foreground">Post</div>
                    </div>
                  </div>
                </Card>
              </div>
            </div>

            {/* Variant 4: Chip Style Selection */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 4: Chip Style (Inline Multi-Select)</div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="px-4 py-2 border-2 border-purple-500 bg-purple-50 cursor-pointer hover:shadow-md transition-all">
                  <Card className="w-6 h-6 rounded-md bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center border-0 mr-2">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </Card>
                  <span className="font-semibold text-sm">Instagram</span>
                  <Check className="w-4 h-4 ml-2" />
                </Badge>

                <Badge variant="outline" className="px-4 py-2 border-2 border-blue-500 bg-blue-50 cursor-pointer hover:shadow-md transition-all">
                  <Card className="w-6 h-6 rounded-md bg-[#1877F2] flex items-center justify-center border-0 mr-2">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </Card>
                  <span className="font-semibold text-sm">Facebook</span>
                  <Check className="w-4 h-4 ml-2" />
                </Badge>

                <Badge variant="outline" className="px-4 py-2 cursor-pointer hover:border-muted-foreground transition-all">
                  <Card className="w-6 h-6 rounded-md bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center border-0 mr-2">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </Card>
                  <span className="font-semibold text-sm">Twitter</span>
                </Badge>

                <Badge variant="outline" className="px-4 py-2 border-2 border-blue-500 bg-blue-50 cursor-pointer hover:shadow-md transition-all">
                  <Card className="w-6 h-6 rounded-md bg-[#0A66C2] flex items-center justify-center border-0 mr-2">
                    <svg className="w-3.5 h-3.5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                  </Card>
                  <span className="font-semibold text-sm">LinkedIn</span>
                  <Check className="w-4 h-4 ml-2" />
                </Badge>
              </div>
            </div>

            {/* Variant 5: Large Cards with Stats */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 5: Large Cards with Stats (Dashboard Style)</div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Card className="p-6 border-2 border-purple-200 bg-purple-50/50 cursor-pointer hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Card className="w-14 h-14 rounded-2xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center border-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                      </svg>
                    </Card>
                    <Switch checked={true} />
                  </div>
                  <h5 className="font-bold text-lg mb-1 text-foreground">Instagram</h5>
                  <p className="text-sm text-muted-foreground mb-4">Feed Post + Story</p>
                  <div className="flex items-center justify-between pt-4 border-t border-purple-200">
                    <div>
                      <div className="text-xs text-muted-foreground">This month</div>
                      <div className="font-bold text-lg text-foreground">24 posts</div>
                    </div>
                    <Badge className="bg-purple-100 text-purple-700 border-0">
                      Active
                    </Badge>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Card className="w-14 h-14 rounded-2xl bg-[#1877F2] flex items-center justify-center border-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                      </svg>
                    </Card>
                    <Switch checked={true} />
                  </div>
                  <h5 className="font-bold text-lg mb-1 text-foreground">Facebook</h5>
                  <p className="text-sm text-muted-foreground mb-4">Post</p>
                  <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                    <div>
                      <div className="text-xs text-muted-foreground">This month</div>
                      <div className="font-bold text-lg text-foreground">18 posts</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-0">
                      Active
                    </Badge>
                  </div>
                </Card>

                <Card className="p-6 border-2 border-blue-200 bg-blue-50/50 cursor-pointer hover:shadow-xl transition-all">
                  <div className="flex items-start justify-between mb-4">
                    <Card className="w-14 h-14 rounded-2xl bg-[#0A66C2] flex items-center justify-center border-0 shadow-lg">
                      <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                      </svg>
                    </Card>
                    <Switch checked={true} />
                  </div>
                  <h5 className="font-bold text-lg mb-1 text-foreground">LinkedIn</h5>
                  <p className="text-sm text-muted-foreground mb-4">Post</p>
                  <div className="flex items-center justify-between pt-4 border-t border-blue-200">
                    <div>
                      <div className="text-xs text-muted-foreground">This month</div>
                      <div className="font-bold text-lg text-foreground">12 posts</div>
                    </div>
                    <Badge className="bg-blue-100 text-blue-700 border-0">
                      Active
                    </Badge>
                  </div>
                </Card>
              </div>
            </div>

            {/* Variant 6: Minimal List with Radio */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 6: Minimal List (Single Select)</div>
              <RadioGroup defaultValue="instagram" className="max-w-md space-y-2">
                <Label htmlFor="r-instagram" className="cursor-pointer">
                  <Card className="p-4 border-2 border-purple-500 bg-purple-50/50 cursor-pointer hover:shadow-md transition-all">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="instagram" id="r-instagram" />
                      <Card className="w-10 h-10 rounded-lg bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center border-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                        </svg>
                      </Card>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-foreground">Instagram</div>
                        <div className="text-xs text-muted-foreground">Feed Post + Story</div>
                      </div>
                    </div>
                  </Card>
                </Label>

                <Label htmlFor="r-facebook" className="cursor-pointer">
                  <Card className="p-4 cursor-pointer hover:border-muted-foreground transition-all">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="facebook" id="r-facebook" />
                      <Card className="w-10 h-10 rounded-lg bg-[#1877F2] flex items-center justify-center border-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Card>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-foreground">Facebook</div>
                        <div className="text-xs text-muted-foreground">Post</div>
                      </div>
                    </div>
                  </Card>
                </Label>

                <Label htmlFor="r-twitter" className="cursor-pointer">
                  <Card className="p-4 cursor-pointer hover:border-muted-foreground transition-all">
                    <div className="flex items-center gap-3">
                      <RadioGroupItem value="twitter" id="r-twitter" />
                      <Card className="w-10 h-10 rounded-lg bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center border-0">
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                        </svg>
                      </Card>
                      <div className="flex-1">
                        <div className="font-semibold text-sm text-foreground">Twitter</div>
                        <div className="text-xs text-muted-foreground">Tweet</div>
                      </div>
                    </div>
                  </Card>
                </Label>
              </RadioGroup>
            </div>

            {/* Variant 7: Icon Grid (Minimal) */}
            <div>
              <div className="font-semibold mb-4 text-foreground">Variant 7: Icon Grid (Ultra Compact)</div>
              <div className="flex gap-3">
                <Card className="w-16 h-16 rounded-2xl border-2 border-purple-500 bg-purple-50 cursor-pointer hover:shadow-lg transition-all flex items-center justify-center relative">
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                    </svg>
                  </div>
                </Card>

                <Card className="w-16 h-16 rounded-2xl border-2 border-blue-500 bg-blue-50 cursor-pointer hover:shadow-lg transition-all flex items-center justify-center relative">
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#1877F2] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                    </svg>
                  </div>
                </Card>

                <Card className="w-16 h-16 rounded-2xl border-2 border-border bg-background cursor-pointer hover:border-muted-foreground transition-all flex items-center justify-center">
                  <div className="w-10 h-10 rounded-xl bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                    </svg>
                  </div>
                </Card>

                <Card className="w-16 h-16 rounded-2xl border-2 border-blue-500 bg-blue-50 cursor-pointer hover:shadow-lg transition-all flex items-center justify-center relative">
                  <div className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-green-500 border-2 border-background flex items-center justify-center">
                    <Check className="w-3 h-3 text-white" />
                  </div>
                  <div className="w-10 h-10 rounded-xl bg-[#0A66C2] flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                    </svg>
                  </div>
                </Card>
              </div>
            </div>

            {/* Usage Info */}
            <Card variant="soft-blue" className="p-6">
              <div className="font-bold text-sm mb-3 text-foreground">Usage Context</div>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>→ <strong>Variant 1:</strong> Horizontal post composer, shows time at a glance</p>
                <p>→ <strong>Variant 2:</strong> Sidebar or compact views, mobile-friendly</p>
                <p>→ <strong>Variant 3:</strong> Publishing modal grid layout, clear checkmarks</p>
                <p>→ <strong>Variant 4:</strong> Inline chip selection, quick multi-select</p>
                <p>→ <strong>Variant 5:</strong> Dashboard with stats, comprehensive view</p>
                <p>→ <strong>Variant 6:</strong> Minimal list, single platform selection</p>
                <p>→ <strong>Variant 7:</strong> Ultra compact icon grid, space-efficient</p>
              </div>
            </Card>
          </div>
        </Card>

        {/* Code Example */}
        <Card variant="glass" className="p-6">
          <div className="font-bold mb-4 text-foreground">Usage Example</div>
          <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-100">
              <code>{`import { Card, Badge, Switch, Button, Label, Separator } 
from '@/components/ui'

// Connected Platform Card
<Card className="p-6 border-2 border-purple-200">
  <Card className="w-14 h-14 rounded-2xl 
    bg-linear-to-br from-purple-500 
    to-orange-500 border-0">
    {/* Icon */}
  </Card>
  <Badge className="bg-green-100 text-green-700">
    <Check /> Connected
  </Badge>
  <Separator />
  <Label>Active</Label>
  <Switch checked={isActive} />
</Card>

// Grid Selection Card (Variant 3)
<Card className="p-4 border-2 border-purple-200 
  bg-purple-50/50 relative">
  <div className="absolute top-3 right-3">
    <div className="w-5 h-5 rounded-full bg-green-500">
      <Check className="w-3 h-3 text-white" />
    </div>
  </div>
  <div className="flex flex-col items-center">
    <Card className="w-12 h-12 rounded-xl 
      bg-linear-to-br from-purple-500 
      to-orange-500 border-0">
      {/* Icon */}
    </Card>
    <div className="font-bold">Instagram</div>
    <div className="text-xs">Feed Post + Story</div>
  </div>
</Card>`}</code>
            </pre>
          </div>
        </Card>
      </div>
    </div>
  )
}