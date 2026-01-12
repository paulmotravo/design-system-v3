import { useState, useEffect } from 'react'
import { Button } from '@/components/ui/button'
import { Menu, X, Moon, Sun } from 'lucide-react'
import ButtonsShowcase from '@/components/showcase/ButtonsShowcase'
import CardsShowcase from '@/components/showcase/CardsShowcase'
import BadgesShowcase from '@/components/showcase/BadgesShowcase'
import PostCardsShowcase from '@/components/showcase/PostCardsShowcase'
import FormsShowcase from '@/components/showcase/FormsShowcase'
import AlertsShowcase from '@/components/showcase/AlertsShowcase'
import NavigationShowcase from '@/components/showcase/NavigationShowcase'
import UtilitiesShowcase from '@/components/showcase/UtilitiesShowcase'
import LayoutShowcase from '@/components/showcase/LayoutShowcase'
import ChannelCustomizationShowcase from '@/components/showcase/ChannelCustomizationShowcase'
import ChannelSchedulingShowcase from '@/components/showcase/ChannelSchedulingShowcase'
import ChannelMediaCustomizationShowcase from '@/components/showcase/ChannelMediaCustomizationShowcase'

function App() {
  const [activeSection, setActiveSection] = useState('buttons')
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem('darkMode')
    return saved ? JSON.parse(saved) : false
  })

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    localStorage.setItem('darkMode', JSON.stringify(darkMode))
  }, [darkMode])

  const sections = [
    { 
      id: 'buttons', 
      label: 'Buttons', 
      component: ButtonsShowcase,
      category: 'Foundation'
    },
    { 
      id: 'cards', 
      label: 'Cards', 
      component: CardsShowcase,
      category: 'Foundation'
    },
    { 
      id: 'badges', 
      label: 'Badges', 
      component: BadgesShowcase,
      category: 'Foundation'
    },
    { 
      id: 'forms', 
      label: 'Forms', 
      component: FormsShowcase,
      category: 'Components'
    },
    { 
      id: 'alerts', 
      label: 'Alerts', 
      component: AlertsShowcase,
      category: 'Components'
    },
    { 
      id: 'navigation', 
      label: 'Navigation', 
      component: NavigationShowcase,
      category: 'Components'
    },
    { 
      id: 'utilities', 
      label: 'Utilities', 
      component: UtilitiesShowcase,
      category: 'Components'
    },
    { 
      id: 'layout', 
      label: 'Layout', 
      component: LayoutShowcase,
      category: 'Components'
    },
    { 
      id: 'postcards', 
      label: 'Post Cards', 
      component: PostCardsShowcase,
      category: 'Social Media'
    },
    { 
      id: 'channel-customization', 
      label: 'Channel Customization', 
      component: ChannelCustomizationShowcase,
      category: 'Social Media'
    },
    { 
      id: 'channel-scheduling', 
      label: 'Channel Scheduling', 
      component: ChannelSchedulingShowcase,
      category: 'Social Media'
    },
    { 
      id: 'channel-media', 
      label: 'Channel Media', 
      component: ChannelMediaCustomizationShowcase,
      category: 'Social Media'
    },
  ]

  const categories = [...new Set(sections.map(s => s.category))]

  const ActiveComponent = sections.find(s => s.id === activeSection)?.component

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      {/* Header */}
      <header className="bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl font-black text-gray-900 dark:text-white">
                ViralSpoon Design System
              </h1>
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hidden sm:block">
                Production-ready components for social media management
              </p>
            </div>
            <div className="flex items-center gap-2 sm:gap-3">
              <button
                onClick={() => setDarkMode(!darkMode)}
                className="p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Toggle dark mode"
              >
                {darkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
              </button>
              <Button variant="outline" size="sm" className="hidden sm:flex">
                GitHub
              </Button>
              <Button variant="primary" size="sm">
                Docs
              </Button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-lg"
              >
                {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Desktop Navigation */}
      <nav className="hidden lg:block bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-[73px] z-40">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex gap-1 overflow-x-auto py-2 scrollbar-hide">
            {sections.map((section) => (
              <button
                key={section.id}
                onClick={() => setActiveSection(section.id)}
                className={`px-4 py-2 text-sm font-medium rounded-lg whitespace-nowrap transition-colors ${
                  activeSection === section.id
                    ? 'bg-viralspoon-purple text-white'
                    : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                }`}
              >
                {section.label}
              </button>
            ))}
          </div>
        </div>
      </nav>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white dark:bg-gray-950 border-b border-gray-200 dark:border-gray-800 sticky top-[73px] z-40">
          <div className="max-w-7xl mx-auto px-4 py-4 max-h-[60vh] overflow-y-auto">
            {categories.map((category) => (
              <div key={category} className="mb-6">
                <h3 className="text-xs font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-2">
                  {category}
                </h3>
                <div className="space-y-1">
                  {sections
                    .filter(s => s.category === category)
                    .map((section) => (
                      <button
                        key={section.id}
                        onClick={() => {
                          setActiveSection(section.id)
                          setMobileMenuOpen(false)
                        }}
                        className={`w-full text-left px-4 py-2.5 text-sm font-medium rounded-lg transition-colors ${
                          activeSection === section.id
                            ? 'bg-viralspoon-purple text-white'
                            : 'text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800'
                        }`}
                      >
                        {section.label}
                      </button>
                    ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {ActiveComponent && <ActiveComponent />}
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 mt-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-center sm:text-left">
              <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400">
                Built with shadcn/ui, React, and Tailwind CSS
              </p>
              <p className="text-xs text-gray-500 dark:text-gray-500 mt-1">
                © 2025 ViralSpoon. All rights reserved.
              </p>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-viralspoon-purple transition-colors">
                Documentation
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-viralspoon-purple transition-colors">
                GitHub
              </a>
              <a href="#" className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 hover:text-viralspoon-purple transition-colors">
                License
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App