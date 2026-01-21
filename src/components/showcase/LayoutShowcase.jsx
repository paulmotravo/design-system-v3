import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { ScrollArea } from '@/components/ui/scroll-area'
import {
  Home,
  PenTool,
  Image as ImageIcon,
  Calendar,
  Library,
  Wand2,
  Activity,
  CreditCard,
  Settings,
  ChevronRight,
  Bell,
  MessageSquare,
  Coins,
  AlertCircle
} from 'lucide-react'
import { useState } from 'react'
import { ShowcaseHeader, PhilosophyCard } from './shared'

export default function LayoutShowcase() {
  const [activeItem, setActiveItem] = useState('/editorial')

  const menuItems = [
    {
      section: 'Manage Posts',
      items: [
        { icon: Home, label: 'Dashboard', path: '/dashboard' },
        { icon: PenTool, label: 'Create Post', path: '/create' },
        { icon: ImageIcon, label: 'Post Overview', path: '/posts' },
        { icon: Calendar, label: 'Editorial Plan', path: '/editorial' },
      ]
    },
    {
      section: 'Tools & Analytics',
      items: [
        { icon: Library, label: 'Media Library', path: '/media' },
        { icon: Wand2, label: 'Template Editor', path: '/templates' },
        { icon: Activity, label: 'Activity', path: '/activity' },
        { icon: CreditCard, label: 'Stripe Activity', path: '/stripe' },
      ]
    },
    {
      section: 'Help & Support',
      items: []
    }
  ]

  return (
    <div className="mb-20">
      <ShowcaseHeader
        title="Layout Components"
        description="Sidebar navigation and header for dashboard"
      />

      <div className="space-y-6">
        {/* Philosophy */}
        <PhilosophyCard
          icon={<AlertCircle className="w-6 h-6 text-white" />}
          title="Layout Philosophy"
          variant="soft-purple"
        >
          <p>→ <strong>Fixed Sidebar:</strong> Always visible navigation</p>
          <p>→ <strong>Sticky Header:</strong> Actions always accessible</p>
          <p>→ <strong>Clear Hierarchy:</strong> Grouped menu items by function</p>
          <p>→ <strong>Active States:</strong> User always knows where they are</p>
        </PhilosophyCard>

        {/* Full Layout Preview */}
        <Card variant="elevated" className="p-8">
          <h4 className="text-sm font-bold text-muted-foreground uppercase tracking-wider mb-6">
            Full Layout Preview
          </h4>

          <div className="border-2 border-border rounded-xl overflow-hidden" style={{ height: '600px' }}>
            <div className="flex h-full">
              {/* Sidebar Preview */}
              <div className="w-72 bg-[#2D3561] text-white flex flex-col">
                {/* Logo */}
                <div className="p-6 pb-8">
                  <div className="flex items-center gap-2">
                    <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="shrink-0">
                      <path d="M8 4C8 2 10 0 12 2L16 6C18 8 16 12 14 10L8 4Z" fill="white"/>
                      <circle cx="16" cy="8" r="2" fill="#F97316"/>
                      <circle cx="20" cy="6" r="1.5" fill="#F97316"/>
                      <circle cx="18" cy="4" r="1" fill="#F97316"/>
                      <rect x="6" y="12" width="4" height="24" rx="2" fill="white"/>
                    </svg>
                    <div className="flex items-baseline">
                      <span className="text-2xl font-bold text-[#F97316]">Viral</span>
                      <span className="text-2xl font-light text-white">Spoon</span>
                    </div>
                  </div>
                </div>

                {/* Menu Items */}
                <ScrollArea className="flex-1 px-4">
                  <nav className="space-y-6 pb-4">
                    {menuItems.map((section, idx) => (
                      <div key={idx}>
                        {section.section && (
                          <div className="px-3 mb-3 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                            {section.section}
                          </div>
                        )}
                        <div className="space-y-1">
                          {section.items.map((item) => {
                            const Icon = item.icon
                            const isActive = activeItem === item.path

                            return (
                              <Button
                                key={item.path}
                                variant="ghost"
                                size="sm"
                                onClick={() => setActiveItem(item.path)}
                                className={`w-full justify-start gap-3 h-10 px-3 font-medium ${
                                  isActive
                                    ? "bg-white/10 text-white hover:bg-white/15"
                                    : "text-gray-300 hover:bg-white/5 hover:text-white"
                                }`}
                              >
                                <Icon className="w-5 h-5" />
                                <span className="flex-1 text-left text-sm">{item.label}</span>
                                {isActive && <ChevronRight className="w-4 h-4" />}
                              </Button>
                            )
                          })}
                        </div>
                      </div>
                    ))}
                  </nav>
                </ScrollArea>

                {/* Bottom Section */}
                <div className="p-4 space-y-2">
                  <Separator className="bg-white/10" />

                  <Button
                    variant="ghost"
                    size="sm"
                    className="w-full justify-start gap-3 h-10 px-3 text-gray-300 hover:bg-white/5 hover:text-white font-medium"
                  >
                    <Settings className="w-5 h-5" />
                    <span className="text-sm">Settings</span>
                  </Button>

                  <div className="flex items-center gap-3 px-3 py-2 rounded-lg bg-white/5">
                    <Avatar className="h-8 w-8">
                      <AvatarImage src="" alt="Paul Kissel" />
                      <AvatarFallback className="bg-linear-to-br from-purple-500 to-pink-500 text-white text-sm font-semibold">
                        PK
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1 min-w-0">
                      <div className="text-sm font-medium text-white truncate">Paul Kissel</div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col bg-muted">
                {/* Header */}
                <header className="h-16 bg-background border-b border-border flex items-center justify-between px-6">
                  {/* Social Follow */}
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-muted-foreground">Folge uns:</span>
                    <div className="flex items-center gap-1.5">
                      <Button size="icon" className="h-8 w-8 bg-linear-to-br from-purple-500 via-pink-500 to-orange-500 hover:scale-110 transition-transform">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069z"/>
                        </svg>
                      </Button>
                      <Button size="icon" className="h-8 w-8 bg-[#1877F2] hover:bg-[#1877F2]/90">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                        </svg>
                      </Button>
                      <Button size="icon" className="h-8 w-8 bg-[#0A66C2] hover:bg-[#0A66C2]/90">
                        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286z"/>
                        </svg>
                      </Button>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className="flex items-center gap-2">
                    <div className="flex items-center gap-1.5 bg-linear-to-r from-orange-500 to-orange-600 text-white px-3 py-1.5 rounded-lg text-xs">
                      <Coins className="w-4 h-4" />
                      <div>
                        <div className="text-[10px] opacity-90 leading-none">Credits</div>
                        <div className="text-sm font-bold leading-none">2,450</div>
                      </div>
                    </div>

                    <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                      <MessageSquare className="w-4 h-4" />
                      <Badge variant="destructive" className="absolute -top-1 -right-1 h-4 w-4 p-0 flex items-center justify-center rounded-full bg-linear-to-br from-purple-500 to-pink-500 border-0 text-[10px]">
                        3
                      </Badge>
                    </Button>

                    <Button variant="ghost" size="icon" className="h-9 w-9 relative">
                      <Bell className="w-4 h-4" />
                      <span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full"></span>
                    </Button>
                  </div>
                </header>

                {/* Content Area */}
                <div className="flex-1 p-6 overflow-auto">
                  <Card className="p-8 text-center">
                    <h3 className="text-xl font-bold mb-2 text-foreground">Main Content Area</h3>
                    <p className="text-muted-foreground">
                      Your dashboard content goes here
                    </p>
                  </Card>
                </div>
              </div>
            </div>
          </div>
        </Card>

        {/* Component Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Sidebar Components */}
          <Card variant="elevated" className="p-6">
            <h5 className="font-bold mb-4 text-foreground">Sidebar Components</h5>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Button</Badge>
                <span>Menu items with active states</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">ScrollArea</Badge>
                <span>Scrollable menu section</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Avatar</Badge>
                <span>User profile picture</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Separator</Badge>
                <span>Visual divider</span>
              </div>
            </div>
          </Card>

          {/* Header Components */}
          <Card variant="elevated" className="p-6">
            <h5 className="font-bold mb-4 text-foreground">Header Components</h5>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Button</Badge>
                <span>Social media links & actions</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">Badge</Badge>
                <span>Notification counters</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge>Custom</Badge>
                <span>Credits display with gradient</span>
              </div>
            </div>
          </Card>
        </div>

        {/* Code Example */}
        <Card variant="glass" className="p-6">
          <h5 className="font-bold mb-4 text-foreground">Usage in Your App</h5>
          <div className="bg-zinc-900 rounded-lg p-4 overflow-x-auto">
            <pre className="text-xs text-zinc-100"><code>{`// Create layout components in src/components/layout/
// Then wrap your app:

import Sidebar from '@/components/layout/Sidebar'
import Header from '@/components/layout/Header'

function DashboardLayout({ children }) {
  return (
    <div className="flex min-h-screen">
      <Sidebar />
      <div className="flex-1 ml-72">
        <Header />
        <main className="p-8">
          {children}
        </main>
      </div>
    </div>
  )
}`}</code></pre>
          </div>
        </Card>
      </div>
    </div>
  )
}
