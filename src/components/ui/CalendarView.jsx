import { useState } from 'react'
import { Card } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ChevronLeft, ChevronRight, Calendar, GripVertical, Instagram, Facebook, LayoutGrid, Columns3 } from 'lucide-react'

export default function CalendarView({ posts = [], viewMode: externalViewMode, onViewModeChange }) {
  const [internalViewMode, setInternalViewMode] = useState('month')
  const viewMode = externalViewMode || internalViewMode
  const setViewMode = onViewModeChange || setInternalViewMode
  
  const [currentDate, setCurrentDate] = useState(new Date())
  const [draggedPost, setDraggedPost] = useState(null)
  const [dragOverDay, setDragOverDay] = useState(null)
  const [dragOverTime, setDragOverTime] = useState(null)

  // Get calendar data
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()
  const date = currentDate.getDate()

  // Navigation functions
  const previousMonth = () => setCurrentDate(new Date(year, month - 1, 1))
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1))
  const previousWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 7)
    setCurrentDate(newDate)
  }
  const nextWeek = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 7)
    setCurrentDate(newDate)
  }
  const previousDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() - 1)
    setCurrentDate(newDate)
  }
  const nextDay = () => {
    const newDate = new Date(currentDate)
    newDate.setDate(newDate.getDate() + 1)
    setCurrentDate(newDate)
  }
  const goToToday = () => setCurrentDate(new Date())

  // Config
  const statusConfig = {
    draft: { variant: 'coral', text: 'DRAFT' },
    scheduled: { variant: 'purple', text: 'SCHEDULED' },
    published: { variant: 'green', text: 'PUBLISHED' }
  }

  const platformIcons = {
    instagram: <Instagram className="w-3 h-3" />,
    facebook: <Facebook className="w-3 h-3" />
  }

  // Get posts for specific day
  const getPostsForDay = (targetDate) => {
    return posts.filter(post => {
      const postDate = new Date(post.scheduledDate)
      return postDate.getDate() === targetDate.getDate() && 
             postDate.getMonth() === targetDate.getMonth() && 
             postDate.getFullYear() === targetDate.getFullYear()
    })
  }

  // Get posts for specific time slot
  const getPostsForTimeSlot = (targetDate, hour) => {
    return posts.filter(post => {
      const postDate = new Date(post.scheduledDate)
      const timeStr = post.scheduledTime || '12:00 AM'
      const postHour = parseInt(timeStr.split(':')[0])
      const isPM = timeStr.includes('PM')
      let actualHour = postHour
      if (isPM && postHour !== 12) actualHour = postHour + 12
      if (!isPM && postHour === 12) actualHour = 0
      
      return postDate.getDate() === targetDate.getDate() && 
             postDate.getMonth() === targetDate.getMonth() && 
             postDate.getFullYear() === targetDate.getFullYear() &&
             actualHour === hour
    })
  }

  // Drag handlers
  const handleDragStart = (e, post) => {
    setDraggedPost(post)
    e.dataTransfer.effectAllowed = 'move'
  }

  const handleDragOver = (e, day, time = null) => {
    e.preventDefault()
    e.dataTransfer.dropEffect = 'move'
    setDragOverDay(day)
    if (time !== null) setDragOverTime(time)
  }

  const handleDragLeave = () => {
    setDragOverDay(null)
    setDragOverTime(null)
  }

  const handleDrop = (e, day, time = null) => {
    e.preventDefault()
    if (draggedPost) {
      const timeStr = time !== null ? ` at ${time}:00` : ''
      console.log(`Move post ${draggedPost.id} to ${day.toDateString()}${timeStr}`)
      setDraggedPost(null)
      setDragOverDay(null)
      setDragOverTime(null)
    }
  }

  // Post Card Component - Compact version for calendar
  const PostCard = ({ post, compact = false }) => (
    <div
      draggable
      onDragStart={(e) => handleDragStart(e, post)}
      className="group relative cursor-move transition-all flex-shrink-0"
      onClick={() => console.log('Open post overlay', post.id)}
    >
      <div className="absolute left-1 top-1 opacity-0 group-hover:opacity-100 transition-opacity z-10">
        <GripVertical className="w-3 h-3 text-white drop-shadow-lg" />
      </div>

      {/* Thumbnail with Time Overlay */}
      <div className="relative w-16 h-16 rounded-lg overflow-hidden bg-gray-200 dark:bg-gray-700 shadow-sm hover:shadow-md transition-shadow">
        {post.image && (
          <img src={post.image} alt="Post preview" className="w-full h-full object-cover" />
        )}
        
        {/* Time Badge Overlay */}
        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent px-1.5 py-1">
          <span className="text-[10px] font-bold text-white block text-center drop-shadow-md">
            {post.scheduledTime}
          </span>
        </div>
        
        {/* Status Indicator - Small dot in top right */}
        <div className={`absolute top-1 right-1 w-2 h-2 rounded-full ${
          post.status === 'scheduled' ? 'bg-purple-500' : 
          post.status === 'draft' ? 'bg-orange-500' : 
          'bg-green-500'
        } ring-2 ring-white`}></div>
      </div>
    </div>
  )

  // === MONTH VIEW ===
  const renderMonthView = () => {
    const firstDay = new Date(year, month, 1)
    const lastDay = new Date(year, month + 1, 0)
    const daysInMonth = lastDay.getDate()
    const startingDayOfWeek = firstDay.getDay()
    const calendarDays = []
    
    // Empty cells before month starts
    for (let i = 0; i < startingDayOfWeek; i++) {
      calendarDays.push(<div key={`empty-${i}`} className="h-32 bg-gray-50/50 dark:bg-gray-900/50" />)
    }
    
    // Days of the month
    for (let day = 1; day <= daysInMonth; day++) {
      const dayDate = new Date(year, month, day)
      const dayPosts = getPostsForDay(dayDate)
      const isToday = day === new Date().getDate() && 
                      month === new Date().getMonth() && 
                      year === new Date().getFullYear()
      const isDragOver = dragOverDay?.getDate() === day && dragOverDay?.getMonth() === month
      
      calendarDays.push(
        <div
          key={day}
          className={`h-32 border border-gray-200 dark:border-gray-700 p-2 transition-all ${
            isToday 
              ? 'bg-purple-50 dark:bg-purple-900/20 ring-2 ring-viralspoon-purple dark:ring-purple-500' 
              : 'bg-white dark:bg-gray-800'
          } ${isDragOver ? 'ring-2 ring-viralspoon-coral dark:ring-orange-500 bg-orange-50/50 dark:bg-orange-900/20' : ''}`}
          onDragOver={(e) => handleDragOver(e, dayDate)}
          onDragLeave={handleDragLeave}
          onDrop={(e) => handleDrop(e, dayDate)}
        >
          {/* Day Number */}
          <div className={`text-sm font-bold mb-2 ${isToday ? 'text-viralspoon-purple dark:text-purple-400' : 'text-gray-700 dark:text-gray-300'}`}>
            {day}
          </div>

          {/* Scrollable Posts Container - 2 columns */}
          <div className="overflow-y-auto overflow-x-hidden h-[calc(100%-28px)] pr-1" style={{ scrollbarWidth: 'thin' }}>
            <div className="grid grid-cols-2 gap-1.5">
              {dayPosts.map((post) => <PostCard key={post.id} post={post} />)}
            </div>
          </div>
        </div>
      )
    }

    return <div className="grid grid-cols-7">{calendarDays}</div>
  }

  // === WEEK VIEW ===
  const renderWeekView = () => {
    const startOfWeek = new Date(currentDate)
    startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
    
    const weekDays = Array.from({ length: 7 }, (_, i) => {
      const day = new Date(startOfWeek)
      day.setDate(startOfWeek.getDate() + i)
      return day
    })

    const hours = Array.from({ length: 24 }, (_, i) => i)

    return (
      <div className="overflow-x-auto">
        <div className="min-w-[1200px]">
          <div className="grid grid-cols-[80px_repeat(7,1fr)]">
            {/* Header */}
            <div className="bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700 p-3"></div>
            {weekDays.map((day, i) => {
              const isToday = day.toDateString() === new Date().toDateString()
              return (
                <div
                  key={i}
                  className={`text-center border-b border-l border-gray-200 dark:border-gray-700 p-3 ${
                    isToday ? 'bg-purple-50 dark:bg-purple-900/20' : 'bg-gray-100 dark:bg-gray-800'
                  }`}
                >
                  <div className="text-xs font-medium text-gray-600 dark:text-gray-400">
                    {['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'][day.getDay()]}
                  </div>
                  <div className={`text-lg font-bold ${isToday ? 'text-viralspoon-purple dark:text-purple-400' : 'text-gray-900 dark:text-white'}`}>
                    {day.getDate()}
                  </div>
                </div>
              )
            })}

            {/* Time slots */}
            {hours.map(hour => (
              <>
                <div key={`time-${hour}`} className="border-b border-gray-200 dark:border-gray-700 p-2 bg-gray-50 dark:bg-gray-900 text-xs text-gray-600 dark:text-gray-400 text-right">
                  {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                </div>
                {weekDays.map((day, i) => {
                  const dayPosts = getPostsForTimeSlot(day, hour)
                  const isDragOver = dragOverDay?.toDateString() === day.toDateString() && dragOverTime === hour
                  
                  return (
                    <div
                      key={`${i}-${hour}`}
                      className={`h-16 border-b border-l border-gray-200 dark:border-gray-700 p-1 transition-all ${
                        isDragOver ? 'ring-2 ring-viralspoon-coral dark:ring-orange-500 bg-orange-50/50 dark:bg-orange-900/20' : 'bg-white dark:bg-gray-800'
                      }`}
                      onDragOver={(e) => handleDragOver(e, day, hour)}
                      onDragLeave={handleDragLeave}
                      onDrop={(e) => handleDrop(e, day, hour)}
                    >
                      <div className="overflow-x-auto overflow-y-hidden h-full flex gap-1 pb-1" style={{ scrollbarWidth: 'thin' }}>
                        {dayPosts.map(post => <PostCard key={post.id} post={post} compact />)}
                      </div>
                    </div>
                  )
                })}
              </>
            ))}
          </div>
        </div>
      </div>
    )
  }

  // === DAY VIEW ===
  const renderDayView = () => {
    const hours = Array.from({ length: 24 }, (_, i) => i)
    const dayDate = new Date(year, month, date)

    return (
      <div className="max-w-2xl mx-auto">
        <div className="grid grid-cols-[80px_1fr]">
          {hours.map(hour => {
            const hourPosts = getPostsForTimeSlot(dayDate, hour)
            const isDragOver = dragOverTime === hour
            
            return (
              <>
                <div key={`time-${hour}`} className="border-b border-gray-200 dark:border-gray-700 p-3 bg-gray-50 dark:bg-gray-900 text-sm text-gray-600 dark:text-gray-400 text-right">
                  {hour === 0 ? '12 AM' : hour < 12 ? `${hour} AM` : hour === 12 ? '12 PM' : `${hour - 12} PM`}
                </div>
                <div
                  key={`slot-${hour}`}
                  className={`min-h-[80px] border-b border-l border-gray-200 dark:border-gray-700 p-2 transition-all ${
                    isDragOver ? 'ring-2 ring-viralspoon-coral dark:ring-orange-500 bg-orange-50/50 dark:bg-orange-900/20' : 'bg-white dark:bg-gray-800'
                  }`}
                  onDragOver={(e) => handleDragOver(e, dayDate, hour)}
                  onDragLeave={handleDragLeave}
                  onDrop={(e) => handleDrop(e, dayDate, hour)}
                >
                  <div className="flex flex-wrap gap-1.5">
                    {hourPosts.map(post => <PostCard key={post.id} post={post} />)}
                  </div>
                </div>
              </>
            )
          })}
        </div>
      </div>
    )
  }

  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  const weekDays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']

  const handlePrevious = viewMode === 'day' ? previousDay : viewMode === 'week' ? previousWeek : previousMonth
  const handleNext = viewMode === 'day' ? nextDay : viewMode === 'week' ? nextWeek : nextMonth

  const getDateDisplay = () => {
    if (viewMode === 'day') {
      return `${monthNames[month]} ${date}, ${year}`
    } else if (viewMode === 'week') {
      const startOfWeek = new Date(currentDate)
      startOfWeek.setDate(currentDate.getDate() - currentDate.getDay())
      const endOfWeek = new Date(startOfWeek)
      endOfWeek.setDate(startOfWeek.getDate() + 6)
      return `${monthNames[startOfWeek.getMonth()]} ${startOfWeek.getDate()} - ${monthNames[endOfWeek.getMonth()]} ${endOfWeek.getDate()}, ${year}`
    }
    return `${monthNames[month]} ${year}`
  }

  return (
    <div className="space-y-6">
      <Card variant="elevated" className="p-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">{getDateDisplay()}</h2>
            <Button variant="outline" size="sm" onClick={goToToday}>
              <Calendar className="w-4 h-4 mr-2" />
              Today
            </Button>
          </div>
          
          <div className="flex items-center gap-3">
            {/* View Mode Switcher */}
            <div className="flex items-center gap-2 mr-2">
              <Button
                variant={viewMode === 'month' ? 'primary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('month')}
                title="Month View"
              >
                <Calendar className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'week' ? 'primary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('week')}
                title="Week View"
              >
                <Columns3 className="w-4 h-4" />
              </Button>
              <Button
                variant={viewMode === 'day' ? 'primary' : 'ghost'}
                size="icon"
                onClick={() => setViewMode('day')}
                title="Day View"
              >
                <LayoutGrid className="w-4 h-4" />
              </Button>
            </div>
            
            {/* Navigation */}
            <Button variant="outline" size="icon" onClick={handlePrevious}>
              <ChevronLeft className="w-5 h-5" />
            </Button>
            <Button variant="outline" size="icon" onClick={handleNext}>
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>
        </div>

        {/* Legend */}
        <div className="flex items-center gap-6 pt-4 border-t border-gray-200 dark:border-gray-700">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-400">Legend:</span>
          <div className="flex items-center gap-2">
            <Badge variant="purple" className="text-[10px] px-2 py-0.5">SCHEDULED</Badge>
            <span className="text-xs text-gray-600 dark:text-gray-400">Ready to publish</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="coral" className="text-[10px] px-2 py-0.5">DRAFT</Badge>
            <span className="text-xs text-gray-600 dark:text-gray-400">Work in progress</span>
          </div>
          <div className="flex items-center gap-2">
            <Badge variant="green" className="text-[10px] px-2 py-0.5">PUBLISHED</Badge>
            <span className="text-xs text-gray-600 dark:text-gray-400">Already posted</span>
          </div>
        </div>
      </Card>

      <Card variant="elevated" className="overflow-hidden">
        {viewMode === 'month' && (
          <>
            <div className="grid grid-cols-7 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-gray-700">
              {weekDays.map((day) => (
                <div key={day} className="text-center text-sm font-bold text-gray-700 dark:text-gray-300 py-3">
                  {day}
                </div>
              ))}
            </div>
            {renderMonthView()}
          </>
        )}
        {viewMode === 'week' && renderWeekView()}
        {viewMode === 'day' && renderDayView()}
      </Card>
    </div>
  )
}