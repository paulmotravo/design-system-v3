import { useState } from 'react'
import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
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
  ChevronRight
} from 'lucide-react'

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

export default function Sidebar({ className }) {
  const [activeItem, setActiveItem] = useState('/editorial')

  return (
    <div className={cn(
      "w-72 h-screen bg-sidebar text-sidebar-foreground flex flex-col fixed left-0 top-0",
      className
    )}>
      {/* Logo */}
      <div className="p-6 pb-8">
        <div className="flex items-center gap-2">
          <svg width="32" height="40" viewBox="0 0 32 40" fill="none" className="shrink-0">
            <path d="M8 4C8 2 10 0 12 2L16 6C18 8 16 12 14 10L8 4Z" fill="currentColor"/>
            <circle cx="16" cy="8" r="2" className="fill-sidebar-accent"/>
            <circle cx="20" cy="6" r="1.5" className="fill-sidebar-accent"/>
            <circle cx="18" cy="4" r="1" className="fill-sidebar-accent"/>
            <rect x="6" y="12" width="4" height="24" rx="2" fill="currentColor"/>
          </svg>
          <div className="flex items-baseline">
            <span className="text-2xl font-bold text-sidebar-accent">Viral</span>
            <span className="text-2xl font-light text-sidebar-foreground">Spoon</span>
          </div>
        </div>
      </div>

      {/* Menu Items with ScrollArea */}
      <ScrollArea className="flex-1 px-4">
        <nav className="space-y-6 pb-4">
          {menuItems.map((section, idx) => (
            <div key={idx}>
              {section.section && (
                <div className="px-3 mb-3 text-xs font-semibold text-sidebar-muted-foreground uppercase tracking-wider">
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
                      onClick={() => setActiveItem(item.path)}
                      className={cn(
                        "w-full justify-start gap-3 h-11 px-3 font-medium",
                        isActive
                          ? "bg-sidebar-accent/10 text-sidebar-foreground hover:bg-sidebar-accent/15"
                          : "text-sidebar-muted-foreground hover:bg-sidebar-accent/5 hover:text-sidebar-foreground"
                      )}
                    >
                      <Icon className="w-5 h-5" />
                      <span className="flex-1 text-left">{item.label}</span>
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
        <Separator className="bg-sidebar-border" />

        <Button
          variant="ghost"
          className="w-full justify-start gap-3 h-11 px-3 text-sidebar-muted-foreground hover:bg-sidebar-accent/5 hover:text-sidebar-foreground font-medium"
        >
          <Settings className="w-5 h-5" />
          <span>Settings</span>
        </Button>

        <div className="flex items-center gap-3 px-3 py-2.5 rounded-lg bg-sidebar-accent/5">
          <Avatar className="h-8 w-8">
            <AvatarImage src="" alt="Paul Kissel" />
            <AvatarFallback className="bg-linear-to-br from-primary to-secondary text-primary-foreground text-sm font-semibold">
              PK
            </AvatarFallback>
          </Avatar>
          <div className="flex-1 min-w-0">
            <div className="text-sm font-medium text-sidebar-foreground truncate">Paul Kissel</div>
          </div>
        </div>
      </div>
    </div>
  )
}
