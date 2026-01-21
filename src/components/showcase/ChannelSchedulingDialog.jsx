import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Switch } from '@/components/ui/switch'
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogFooter } from '@/components/ui/dialog'
import { Lock } from 'lucide-react'

export default function ChannelSchedulingDialog({ 
  open, 
  onOpenChange, 
  channelSchedules, 
  onChannelSchedulesChange 
}) {
  const toggleChannelSchedule = (channel) => {
    if (!channelSchedules[channel].available) return
    
    onChannelSchedulesChange({
      ...channelSchedules,
      [channel]: { ...channelSchedules[channel], enabled: !channelSchedules[channel].enabled }
    })
  }

  const updateSchedule = (channel, field, value) => {
    onChannelSchedulesChange({
      ...channelSchedules,
      [channel]: { ...channelSchedules[channel], [field]: value }
    })
  }

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-5xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl font-black">Channel-Specific Scheduling</DialogTitle>
          <DialogDescription>
            Set individual publish times for each platform and content type
          </DialogDescription>
        </DialogHeader>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Facebook Post */}
          <Card className={`p-6 border-2 transition-all ${
            channelSchedules.facebook.available
              ? 'border-blue-200 bg-blue-50/50'
              : 'border-border bg-muted/50 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                  channelSchedules.facebook.available ? 'bg-[#1877F2]' : 'bg-muted-foreground'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                  </svg>
                  {!channelSchedules.facebook.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-foreground">Facebook</h5>
                  <p className="text-xs text-muted-foreground">Post</p>
                </div>
              </div>
              <Switch
                checked={channelSchedules.facebook.enabled}
                onCheckedChange={() => toggleChannelSchedule('facebook')}
                disabled={!channelSchedules.facebook.available}
              />
            </div>

            {channelSchedules.facebook.enabled && channelSchedules.facebook.available && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="fb-date" className="text-xs mb-2">Date</Label>
                    <Input
                      id="fb-date"
                      type="date"
                      value={channelSchedules.facebook.date}
                      onChange={(e) => updateSchedule('facebook', 'date', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="fb-time" className="text-xs mb-2">Time</Label>
                    <Input
                      id="fb-time"
                      type="time"
                      value={channelSchedules.facebook.time}
                      onChange={(e) => updateSchedule('facebook', 'time', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {!channelSchedules.facebook.available && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Not available for this content</span>
              </div>
            )}
          </Card>

          {/* Twitter Tweet */}
          <Card className={`p-6 border-2 transition-all ${
            channelSchedules.twitter.available
              ? 'border-blue-200 bg-blue-50/50'
              : 'border-border bg-muted/50 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                  channelSchedules.twitter.available 
                    ? 'bg-linear-to-br from-[#1DA1F2] to-[#0d8bd9]' 
                    : 'bg-muted-foreground'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                  </svg>
                  {!channelSchedules.twitter.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-foreground">Twitter</h5>
                  <p className="text-xs text-muted-foreground">Tweet</p>
                </div>
              </div>
              <Switch
                checked={channelSchedules.twitter.enabled}
                onCheckedChange={() => toggleChannelSchedule('twitter')}
                disabled={!channelSchedules.twitter.available}
              />
            </div>

            {channelSchedules.twitter.enabled && channelSchedules.twitter.available && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="tw-date" className="text-xs mb-2">Date</Label>
                    <Input
                      id="tw-date"
                      type="date"
                      value={channelSchedules.twitter.date}
                      onChange={(e) => updateSchedule('twitter', 'date', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="tw-time" className="text-xs mb-2">Time</Label>
                    <Input
                      id="tw-time"
                      type="time"
                      value={channelSchedules.twitter.time}
                      onChange={(e) => updateSchedule('twitter', 'time', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {!channelSchedules.twitter.available && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Not available for this content</span>
              </div>
            )}
          </Card>

          {/* LinkedIn Post */}
          <Card className={`p-6 border-2 transition-all ${
            channelSchedules.linkedin.available
              ? 'border-blue-200 bg-blue-50/50'
              : 'border-border bg-muted/50 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                  channelSchedules.linkedin.available ? 'bg-[#0A66C2]' : 'bg-muted-foreground'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                  </svg>
                  {!channelSchedules.linkedin.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-foreground">LinkedIn</h5>
                  <p className="text-xs text-muted-foreground">Post</p>
                </div>
              </div>
              <Switch
                checked={channelSchedules.linkedin.enabled}
                onCheckedChange={() => toggleChannelSchedule('linkedin')}
                disabled={!channelSchedules.linkedin.available}
              />
            </div>

            {channelSchedules.linkedin.enabled && channelSchedules.linkedin.available && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="li-date" className="text-xs mb-2">Date</Label>
                    <Input
                      id="li-date"
                      type="date"
                      value={channelSchedules.linkedin.date}
                      onChange={(e) => updateSchedule('linkedin', 'date', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="li-time" className="text-xs mb-2">Time</Label>
                    <Input
                      id="li-time"
                      type="time"
                      value={channelSchedules.linkedin.time}
                      onChange={(e) => updateSchedule('linkedin', 'time', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {!channelSchedules.linkedin.available && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Not available for this content</span>
              </div>
            )}
          </Card>

          {/* Instagram Feed Post */}
          <Card className={`p-6 border-2 transition-all ${
            channelSchedules.instagram_feed.available
              ? 'border-purple-200 bg-purple-50/50'
              : 'border-border bg-muted/50 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                  channelSchedules.instagram_feed.available
                    ? 'bg-linear-to-br from-purple-500 via-pink-500 to-orange-500'
                    : 'bg-muted-foreground'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  {!channelSchedules.instagram_feed.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-foreground">Instagram</h5>
                  <p className="text-xs text-muted-foreground">Feed Post</p>
                </div>
              </div>
              <Switch
                checked={channelSchedules.instagram_feed.enabled}
                onCheckedChange={() => toggleChannelSchedule('instagram_feed')}
                disabled={!channelSchedules.instagram_feed.available}
              />
            </div>

            {channelSchedules.instagram_feed.enabled && channelSchedules.instagram_feed.available && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="ig-feed-date" className="text-xs mb-2">Date</Label>
                    <Input
                      id="ig-feed-date"
                      type="date"
                      value={channelSchedules.instagram_feed.date}
                      onChange={(e) => updateSchedule('instagram_feed', 'date', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ig-feed-time" className="text-xs mb-2">Time</Label>
                    <Input
                      id="ig-feed-time"
                      type="time"
                      value={channelSchedules.instagram_feed.time}
                      onChange={(e) => updateSchedule('instagram_feed', 'time', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {!channelSchedules.instagram_feed.available && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Not available for this content</span>
              </div>
            )}
          </Card>

          {/* Instagram Story */}
          <Card className={`p-6 border-2 transition-all ${
            channelSchedules.instagram_story.available
              ? 'border-purple-200 bg-purple-50/50'
              : 'border-border bg-muted/50 opacity-60'
          }`}>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center relative ${
                  channelSchedules.instagram_story.available
                    ? 'bg-linear-to-br from-purple-500 via-pink-500 to-orange-500'
                    : 'bg-muted-foreground'
                }`}>
                  <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                  </svg>
                  {!channelSchedules.instagram_story.available && (
                    <div className="absolute inset-0 flex items-center justify-center bg-gray-900/50 rounded-xl">
                      <Lock className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
                <div>
                  <h5 className="font-bold text-sm text-foreground">Instagram</h5>
                  <p className="text-xs text-muted-foreground">Story</p>
                </div>
              </div>
              <Switch
                checked={channelSchedules.instagram_story.enabled}
                onCheckedChange={() => toggleChannelSchedule('instagram_story')}
                disabled={!channelSchedules.instagram_story.available}
              />
            </div>

            {channelSchedules.instagram_story.enabled && channelSchedules.instagram_story.available && (
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="ig-story-date" className="text-xs mb-2">Date</Label>
                    <Input
                      id="ig-story-date"
                      type="date"
                      value={channelSchedules.instagram_story.date}
                      onChange={(e) => updateSchedule('instagram_story', 'date', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                  <div>
                    <Label htmlFor="ig-story-time" className="text-xs mb-2">Time</Label>
                    <Input
                      id="ig-story-time"
                      type="time"
                      value={channelSchedules.instagram_story.time}
                      onChange={(e) => updateSchedule('instagram_story', 'time', e.target.value)}
                      className="text-sm"
                    />
                  </div>
                </div>
              </div>
            )}

            {!channelSchedules.instagram_story.available && (
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <Lock className="w-3 h-3" />
                <span>Not available for this content</span>
              </div>
            )}
          </Card>
        </div>

        <DialogFooter className="gap-2">
          <Button variant="outline" onClick={() => onOpenChange(false)}>
            Cancel
          </Button>
          <Button variant="primary" onClick={() => onOpenChange(false)}>
            Save Schedule
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}