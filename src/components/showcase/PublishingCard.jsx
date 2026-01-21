import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Calendar, Send, Clock, FileText } from 'lucide-react'

export default function PublishingCard({
  selectedChannels,
  channelConfig,
  quickSchedule,
  onQuickScheduleChange,
  hasCustomSchedule,
  scheduleRange,
  onPublishClick,
  onScheduleClick,
  onCustomScheduleClick,
  onSaveDraftClick
}) {
  // Group channels by platform for display
  const getGroupedChannels = () => {
    const activeChannels = Object.keys(selectedChannels).filter(key => selectedChannels[key])
    const grouped = {}

    activeChannels.forEach(channelKey => {
      const config = channelConfig[channelKey]
      const platform = config.name // "Instagram", "Facebook", etc.
      
      if (!grouped[platform]) {
        grouped[platform] = {
          platform,
          name: config.name,
          icon: config.icon,
          bgColor: config.bgColor,
          formats: []
        }
      }
      
      grouped[platform].formats.push(config.type)
    })

    return Object.values(grouped)
  }

  const getActiveChannelCount = () => {
    return getGroupedChannels().length
  }

  const getActiveFormatCount = () => {
    return Object.keys(selectedChannels).filter(key => selectedChannels[key]).length
  }

  const groupedChannels = getGroupedChannels()
  const activeChannelCount = getActiveChannelCount()
  const activeFormatCount = getActiveFormatCount()

  return (
    <Card variant="elevated" className="p-6">
      <div className="space-y-4">
        {/* Header */}
        <div>
          <h3 className="text-lg font-bold text-foreground">Publishing</h3>
          <p className="text-sm text-muted-foreground">
            {activeChannelCount} channel{activeChannelCount !== 1 ? 's' : ''} • {activeFormatCount} format{activeFormatCount !== 1 ? 's' : ''}
          </p>
        </div>

        <Separator />

        {/* Schedule Section */}
        {hasCustomSchedule ? (
          <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
            <div className="flex items-start gap-3">
              <Calendar className="w-5 h-5 text-blue-600 shrink-0 mt-0.5" />
              <div className="flex-1">
                <h4 className="text-sm font-semibold text-foreground mb-1">
                  Custom Schedule Active
                </h4>
                <p className="text-xs text-muted-foreground">
                  {scheduleRange.start && scheduleRange.end 
                    ? `Scheduled between ${scheduleRange.start} - ${scheduleRange.end}`
                    : 'Different times set for each channel'}
                </p>
              </div>
              <Button 
                variant="ghost" 
                size="sm"
                onClick={onCustomScheduleClick}
              >
                Edit
              </Button>
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            <div className="flex items-center justify-between">
              <h4 className="text-sm font-semibold text-foreground">
                Schedule
              </h4>
              <Button 
                variant="outline" 
                size="sm"
                onClick={onCustomScheduleClick}
              >
                Customize per Channel
              </Button>
            </div>

            <div className="grid grid-cols-2 gap-3">
              <div>
                <Label htmlFor="schedule-date" className="text-xs text-muted-foreground mb-1">
                  Date
                </Label>
                <Input
                  id="schedule-date"
                  type="date"
                  value={quickSchedule.date}
                  onChange={(e) => onQuickScheduleChange({ ...quickSchedule, date: e.target.value })}
                  className="text-sm"
                />
              </div>
              <div>
                <Label htmlFor="schedule-time" className="text-xs text-muted-foreground mb-1">
                  Time
                </Label>
                <Input
                  id="schedule-time"
                  type="time"
                  value={quickSchedule.time}
                  onChange={(e) => onQuickScheduleChange({ ...quickSchedule, time: e.target.value })}
                  className="text-sm"
                />
              </div>
            </div>
          </div>
        )}

        <Separator />

        {/* Grouped Channel Display */}
        <div>
          <h4 className="text-sm font-semibold text-foreground mb-3">
            Active Channels
          </h4>
          <div className="grid grid-cols-2 gap-3">
            {groupedChannels.map((group) => (
              <Card 
                key={group.platform}
                className="p-4 border-2 border-viralspoon-purple bg-purple-50"
              >
                <div className="flex items-start gap-3">
                  <div className={`w-9 h-9 rounded-lg ${group.bgColor} flex items-center justify-center shrink-0`}>
                    {group.icon}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-foreground mb-1">
                      {group.name}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {group.formats.join(' & ')}
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
          {groupedChannels.length === 0 && (
            <div className="text-center py-8">
              <p className="text-sm text-muted-foreground">
                No channels selected
              </p>
            </div>
          )}
        </div>

        <Separator />

        {/* Publishing Actions */}
        <div className="space-y-3">
          <Button 
            variant="primary" 
            className="w-full"
            onClick={onPublishClick}
            disabled={activeChannelCount === 0}
          >
            <Send className="w-4 h-4 mr-2" />
            Publish Now
          </Button>

          <Button 
            variant="secondary" 
            className="w-full"
            onClick={onScheduleClick}
            disabled={activeChannelCount === 0 || (!quickSchedule.date && !quickSchedule.time && !hasCustomSchedule)}
          >
            <Clock className="w-4 h-4 mr-2" />
            Schedule Post
          </Button>

          <Button 
            variant="outline" 
            className="w-full"
            onClick={onSaveDraftClick}
          >
            <FileText className="w-4 h-4 mr-2" />
            Save as Draft
          </Button>
        </div>
      </div>
    </Card>
  )
}