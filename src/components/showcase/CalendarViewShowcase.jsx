import CalendarView from '@/components/ui/CalendarView'
import { Card } from '@/components/ui/card'
import { AlertCircle } from 'lucide-react'
import { CodePreview, SectionCard, SectionTitle, ShowcaseHeader, PhilosophyCard } from './shared'

export default function CalendarViewShowcase() {
  // Demo posts data - using current month for better visibility
  const today = new Date()
  const currentMonth = today.getMonth()
  const currentYear = today.getFullYear()

  const demoPosts = [
    // Day 8
    {
      id: 1,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 8),
      scheduledTime: '9:00 AM',
      image: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=200&q=80',
      caption: '☕ Good morning! Starting the day with motivation',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    {
      id: 2,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 8),
      scheduledTime: '3:00 PM',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=200&q=80',
      caption: '📈 Tip of the Day: How to boost your engagement',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: true,
      variants: 1,
    },
    // Day 10
    {
      id: 3,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 10),
      scheduledTime: '10:00 AM',
      image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=200&q=80',
      caption: '🚀 New AI features launching today!',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: false,
      variants: 2,
    },
    {
      id: 4,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 10),
      scheduledTime: '2:00 PM',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=200&q=80',
      caption: '📊 Weekly analytics report - Performance tracking',
      platforms: ['instagram'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 5,
      status: 'draft',
      scheduledDate: new Date(currentYear, currentMonth, 10),
      scheduledTime: '6:00 PM',
      image: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=200&q=80',
      caption: 'Evening thoughts: Building better products together',
      platforms: ['facebook'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 12
    {
      id: 6,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 12),
      scheduledTime: '11:00 AM',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80',
      caption: '💡 Innovation Friday: Check out our latest updates',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    {
      id: 7,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 12),
      scheduledTime: '4:00 PM',
      image: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=200&q=80',
      caption: 'Team spotlight: Meet our amazing developers',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: true,
      variants: 2,
    },
    // Day 15
    {
      id: 8,
      status: 'draft',
      scheduledDate: new Date(currentYear, currentMonth, 15),
      scheduledTime: '9:00 AM',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=200&q=80',
      caption: 'Behind the scenes content 🎬',
      platforms: ['facebook'],
      isAgencyContent: false,
      variants: 1,
    },
    {
      id: 9,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 15),
      scheduledTime: '1:00 PM',
      image: 'https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=200&q=80',
      caption: '🎯 Midweek motivation to keep you going!',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 17
    {
      id: 10,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 17),
      scheduledTime: '10:00 AM',
      image: 'https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=200&q=80',
      caption: 'Product demo: See how easy it is to get started',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 11,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 17),
      scheduledTime: '5:00 PM',
      image: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=200&q=80',
      caption: 'Weekend prep: Tools to stay productive',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 18
    {
      id: 12,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 18),
      scheduledTime: '8:00 AM',
      image: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=200&q=80',
      caption: 'Tutorial: Social Media Strategy for beginners',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: false,
      variants: 3,
    },
    {
      id: 13,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 18),
      scheduledTime: '12:00 PM',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=200&q=80',
      caption: 'Lunch break ideas for busy professionals 🍕',
      platforms: ['instagram'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 14,
      status: 'draft',
      scheduledDate: new Date(currentYear, currentMonth, 18),
      scheduledTime: '7:00 PM',
      image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=200&q=80',
      caption: 'Teamwork makes the dream work 💪',
      platforms: ['facebook'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 20
    {
      id: 15,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 20),
      scheduledTime: '11:00 AM',
      image: 'https://images.unsplash.com/photo-1557804506-669a67965ba0?w=200&q=80',
      caption: 'Product announcement! You haven\'t seen this before 🎉',
      platforms: ['instagram'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 16,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 20),
      scheduledTime: '3:00 PM',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=80',
      caption: 'Customer testimonials that inspire us daily ❤️',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: false,
      variants: 2,
    },
    // Day 22
    {
      id: 17,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 22),
      scheduledTime: '9:30 AM',
      image: 'https://images.unsplash.com/photo-1551434678-e076c223a692?w=200&q=80',
      caption: 'Monday motivation: Start strong! 💪',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    {
      id: 18,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 22),
      scheduledTime: '4:00 PM',
      image: 'https://images.unsplash.com/photo-1531482615713-2afd69097998?w=200&q=80',
      caption: 'Big update coming! Now available on all channels 🚀',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: false,
      variants: 2,
    },
    // Day 24
    {
      id: 19,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 24),
      scheduledTime: '10:00 AM',
      image: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=200&q=80',
      caption: 'Collaboration tips for remote teams',
      platforms: ['facebook'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 20,
      status: 'draft',
      scheduledDate: new Date(currentYear, currentMonth, 24),
      scheduledTime: '2:00 PM',
      image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=200&q=80',
      caption: 'Strategy session: Planning for growth',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 25
    {
      id: 21,
      status: 'draft',
      scheduledDate: new Date(currentYear, currentMonth, 25),
      scheduledTime: '10:30 AM',
      image: 'https://images.unsplash.com/photo-1553877522-43269d4ea984?w=200&q=80',
      caption: 'New Tutorial Video: Step by Step Guide 📹',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    {
      id: 22,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 25),
      scheduledTime: '5:00 PM',
      image: 'https://images.unsplash.com/photo-1563986768609-322da13575f3?w=200&q=80',
      caption: 'Friday feature: What we shipped this week 🎁',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: true,
      variants: 2,
    },
    // Day 27
    {
      id: 23,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 27),
      scheduledTime: '9:00 AM',
      image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=200&q=80',
      caption: 'Sunday inspiration: Rest and recharge 🌅',
      platforms: ['instagram'],
      isAgencyContent: false,
      variants: 1,
    },
    // Day 28
    {
      id: 24,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 28),
      scheduledTime: '1:00 PM',
      image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=200&q=80',
      caption: 'Customer Success Story - Impressive Results 🎯',
      platforms: ['facebook'],
      isAgencyContent: true,
      variants: 1,
    },
    {
      id: 25,
      status: 'scheduled',
      scheduledDate: new Date(currentYear, currentMonth, 28),
      scheduledTime: '6:00 PM',
      image: 'https://images.unsplash.com/photo-1552581234-26160f608093?w=200&q=80',
      caption: 'Wrapping up the month with gratitude 🙏',
      platforms: ['instagram', 'facebook'],
      isAgencyContent: false,
      variants: 1,
    },
  ]

  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Calendar View"
        description="Schedule and manage posts with drag & drop calendar - switch between Day, Week, and Month views"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Calendar View Features"
          variant="soft-purple"
        >
          <p>→ <strong>Multiple Views:</strong> Switch between Day, Week, and Month views</p>
          <p>→ <strong>Drag & Drop:</strong> Move posts between days/times by dragging</p>
          <p>→ <strong>Visual Overview:</strong> See all scheduled posts at a glance</p>
          <p>→ <strong>Post Previews:</strong> Thumbnail, status, caption, and time</p>
          <p>→ <strong>Smart Navigation:</strong> Switch between periods with icon buttons</p>
          <p>→ <strong>Click to Edit:</strong> Click on any post to open detail overlay</p>
        </PhilosophyCard>

        {/* Interactive Demo */}
        <SectionCard>
          <SectionTitle>Interactive Calendar Demo</SectionTitle>

          <CodePreview code={`import CalendarView from '@/components/ui/CalendarView'

// Prepare your posts data
const posts = [
  {
    id: 1,
    status: 'scheduled',     // 'scheduled' | 'draft'
    scheduledDate: new Date(2025, 0, 15),
    scheduledTime: '10:00 AM',
    image: 'https://...',
    caption: 'Your post caption',
    platforms: ['instagram', 'facebook'],
    isAgencyContent: false,
    variants: 1,
  },
  // ... more posts
]

// Render calendar
<CalendarView posts={posts} />

// View switcher and navigation built-in
// Users can drag & drop to reschedule`}>
            <div className="mb-4">
              <Card variant="gradient" className="p-4 text-center">
                <p className="text-white font-semibold text-sm mb-2">🎮 Try the Interactive Demo</p>
                <p className="text-white/90 text-xs">
                  Use view buttons to switch between Month/Week/Day • Drag posts to reschedule
                </p>
              </Card>
            </div>
            <CalendarView posts={demoPosts} />
          </CodePreview>
        </SectionCard>

        {/* Features Grid */}
        <SectionCard>
          <SectionTitle>Key Features</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-purple-50 rounded-xl p-6 border-2 border-purple-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="font-bold text-foreground">Multiple Views</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Switch between Day, Week, and Month views with icon buttons for different planning perspectives
              </p>
            </div>

            <div className="bg-blue-50 rounded-xl p-6 border-2 border-blue-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="font-bold text-foreground">Drag & Drop</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Intuitive rescheduling by dragging posts to different days or time slots with visual feedback
              </p>
            </div>

            <div className="bg-emerald-50 rounded-xl p-6 border-2 border-emerald-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full"></div>
                <span className="font-bold text-foreground">Time Slots</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Day and Week views show hourly time slots (24h format) for precise scheduling
              </p>
            </div>

            <div className="bg-orange-50 rounded-xl p-6 border-2 border-orange-200">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-orange-500 rounded-full"></div>
                <span className="font-bold text-foreground">Smart Navigation</span>
              </div>
              <p className="text-sm text-muted-foreground">
                Quick navigation with icon buttons that adapt to view mode (day/week/month) plus "Today" shortcut
              </p>
            </div>
          </div>
        </SectionCard>

        {/* Drag & Drop Guide */}
        <Card variant="soft-purple" className="p-8">
          <SectionTitle>💡 Drag & Drop Examples</SectionTitle>

          <div className="space-y-4 text-sm text-muted-foreground">
            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-xs">
                1
              </div>
              <div>
                <p className="font-semibold mb-1 text-foreground">Month View Drag & Drop</p>
                <p>Hover over any post card and drag it to a different day. The target day will highlight in orange.</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-xs">
                2
              </div>
              <div>
                <p className="font-semibold mb-1 text-foreground">Week View Drag & Drop</p>
                <p>Switch to Week view and drag posts between different days AND time slots. Great for precise scheduling!</p>
              </div>
            </div>

            <div className="flex items-start gap-3">
              <div className="w-6 h-6 bg-primary rounded-lg flex items-center justify-center shrink-0 text-white font-bold text-xs">
                3
              </div>
              <div>
                <p className="font-semibold mb-1 text-foreground">Day View Drag & Drop</p>
                <p>In Day view, focus on a single day and move posts between hourly time slots for detailed planning.</p>
              </div>
            </div>

            <div className="bg-purple-100 rounded-xl p-4 mt-4">
              <p className="text-xs font-medium text-purple-900">
                <strong>🎯 Pro Tip:</strong> Open your browser console to see the drag & drop events being logged.
                In production, these would trigger your state management and API calls to update the post schedule.
              </p>
            </div>
          </div>
        </Card>

        {/* Component Breakdown */}
        <Card variant="glass" className="p-8">
          <SectionTitle>Design System Components Used</SectionTitle>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">Card Component</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Header Card for navigation</p>
                <p>• Main calendar grid card</p>
                <p>• Daily post preview cards</p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">Badge Components</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Status badges (SCHEDULED/DRAFT)</p>
                <p>• Agency content gradient badge</p>
                <p>• Time badges for scheduling</p>
              </div>
            </div>

            <div className="bg-background/50 rounded-xl p-6">
              <h5 className="font-bold mb-3 text-foreground">View Modes</h5>
              <div className="space-y-2 text-sm text-muted-foreground">
                <p>• Day View - Hourly schedule</p>
                <p>• Week View - 7-day overview</p>
                <p>• Month View - Full month grid</p>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  )
}
