import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { AlertCircle, TrendingUp, Users, DollarSign, Calendar, Heart, MessageCircle, Share2, Sparkles, Star, Award, Zap, Copy, CheckCircle, Eye, Code2 } from 'lucide-react'
import { useState } from 'react'

// Code Preview Component with Copy Button
function CodePreview({ code, children }) {
  const [copied, setCopied] = useState(false)

  const handleCopy = () => {
    navigator.clipboard.writeText(code)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <Tabs defaultValue="preview" className="w-full">
      <TabsList className="inline-flex w-auto">
        <TabsTrigger value="preview">
          <Eye className="w-4 h-4" />
        </TabsTrigger>
        <TabsTrigger value="code">
          <Code2 className="w-4 h-4" />
        </TabsTrigger>
      </TabsList>
      
      <TabsContent value="preview" className="mt-4">
        {children}
      </TabsContent>
      
      <TabsContent value="code" className="mt-4">
        <div className="relative">
          <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 overflow-x-auto">
            <pre className="text-sm text-gray-100 dark:text-gray-200">
              <code>{code}</code>
            </pre>
          </div>
          <Button
            variant="ghost"
            size="sm"
            className="absolute top-2 right-2"
            onClick={handleCopy}
          >
            {copied ? (
              <>
                <CheckCircle className="w-4 h-4 mr-2" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-4 h-4 mr-2" />
                Copy
              </>
            )}
          </Button>
        </div>
      </TabsContent>
    </Tabs>
  )
}

export default function CardsShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Cards</h3>
        <p className="text-gray-600 dark:text-gray-400">Versatile container components for organizing content with multiple visual styles</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Card Design Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Visual Hierarchy:</strong> Cards organize content, buttons drive action - they don't compete</p>
                <p>→ <strong>Soft Colors:</strong> Pastels create gentle visual groupings without overwhelming</p>
                <p>→ <strong>Purpose-Driven:</strong> Each variant serves a specific content organization need</p>
                <p>→ <strong>Gradient = Premium:</strong> Only for premium features, agency content, and upgrades</p>
                <p>→ <strong>Hover Feedback:</strong> Subtle elevation changes provide interactive confirmation</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Basic Variants */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Basic Variants
          </h4>
          
          <CodePreview code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'

<Card variant="default">
  <CardHeader>
    <CardTitle>Default</CardTitle>
    <CardDescription>Clean white with subtle border</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Standard content container.</p>
  </CardContent>
</Card>

<Card variant="elevated">
  <CardHeader>
    <CardTitle>Elevated</CardTitle>
    <CardDescription>Enhanced shadow prominence</CardDescription>
  </CardHeader>
</Card>

<Card variant="flat">
  <CardHeader>
    <CardTitle>Flat</CardTitle>
    <CardDescription>Subtle gray minimal shadow</CardDescription>
  </CardHeader>
</Card>

<Card variant="outline">
  <CardHeader>
    <CardTitle>Outline</CardTitle>
    <CardDescription>Emphasized brand border</CardDescription>
  </CardHeader>
</Card>`}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <Card variant="default">
                <CardHeader>
                  <CardTitle className="text-lg">Default</CardTitle>
                  <CardDescription>Clean white with subtle border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Standard content container. Use for most general content.
                  </p>
                </CardContent>
              </Card>

              <Card variant="elevated">
                <CardHeader>
                  <CardTitle className="text-lg">Elevated</CardTitle>
                  <CardDescription>Enhanced shadow prominence</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Important sections that need to stand out more.
                  </p>
                </CardContent>
              </Card>

              <Card variant="flat">
                <CardHeader>
                  <CardTitle className="text-lg">Flat</CardTitle>
                  <CardDescription>Subtle gray minimal shadow</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Secondary information, background sections.
                  </p>
                </CardContent>
              </Card>

              <Card variant="outline">
                <CardHeader>
                  <CardTitle className="text-lg">Outline</CardTitle>
                  <CardDescription>Emphasized brand border</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Highlight selected items or focus attention.
                  </p>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </Card>

        {/* Pastell Variants - wird zu lang, ich teile sie auf */}
        {/* Soft Purple & Coral */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Pastell Variants - Primary & Secondary
          </h4>
          
          <CodePreview code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Star, Users } from 'lucide-react'

<Card variant="soft-purple">
  <CardHeader>
    <div className="flex items-center justify-between mb-2">
      <div className="w-10 h-10 bg-viralspoon-purple rounded-xl flex items-center justify-center">
        <Star className="w-5 h-5 text-white" />
      </div>
      <Badge variant="purple">Primary</Badge>
    </div>
    <CardTitle>Soft Purple</CardTitle>
    <CardDescription>Primary brand features</CardDescription>
  </CardHeader>
  <CardContent>
    <p>→ Main features</p>
    <p>→ Primary information</p>
  </CardContent>
</Card>

<Card variant="soft-coral">
  <CardHeader>
    <div className="flex items-center justify-between mb-2">
      <div className="w-10 h-10 bg-viralspoon-coral rounded-xl flex items-center justify-center">
        <Users className="w-5 h-5 text-white" />
      </div>
      <Badge variant="coral">Secondary</Badge>
    </div>
    <CardTitle>Soft Coral</CardTitle>
    <CardDescription>Alternative features</CardDescription>
  </CardHeader>
</Card>`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="soft-purple">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-viralspoon-purple dark:bg-purple-600 rounded-xl flex items-center justify-center">
                      <Star className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="purple">Primary</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Purple</CardTitle>
                  <CardDescription>Primary brand features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>→ Main features</p>
                    <p>→ Primary information</p>
                    <p>→ Important sections</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-coral">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-viralspoon-coral dark:bg-orange-600 rounded-xl flex items-center justify-center">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="coral">Secondary</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Coral</CardTitle>
                  <CardDescription>Alternative features</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>→ Alternative features</p>
                    <p>→ Community content</p>
                    <p>→ Engagement metrics</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </Card>

        {/* Soft Blue, Green, Pink */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Pastell Variants - Info, Success, Accent
          </h4>
          
          <CodePreview code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { TrendingUp, Award, Heart } from 'lucide-react'

<Card variant="soft-blue">
  <CardHeader>
    <CardTitle>Soft Blue</CardTitle>
    <CardDescription>Informational content</CardDescription>
  </CardHeader>
</Card>

<Card variant="soft-green">
  <CardHeader>
    <CardTitle>Soft Green</CardTitle>
    <CardDescription>Success & positive metrics</CardDescription>
  </CardHeader>
</Card>

<Card variant="soft-pink">
  <CardHeader>
    <CardTitle>Soft Pink</CardTitle>
    <CardDescription>Alternative accent</CardDescription>
  </CardHeader>
</Card>`}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card variant="soft-blue">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-blue-500 dark:bg-blue-600 rounded-xl flex items-center justify-center">
                      <TrendingUp className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="soft-blue">Info</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Blue</CardTitle>
                  <CardDescription>Informational content</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>→ Analytics & stats</p>
                    <p>→ Information blocks</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-green">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-emerald-500 dark:bg-emerald-600 rounded-xl flex items-center justify-center">
                      <Award className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="green">Success</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Green</CardTitle>
                  <CardDescription>Success & positive metrics</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>→ Success messages</p>
                    <p>→ Positive metrics</p>
                  </div>
                </CardContent>
              </Card>

              <Card variant="soft-pink">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <div className="w-10 h-10 bg-pink-500 dark:bg-pink-600 rounded-xl flex items-center justify-center">
                      <Heart className="w-5 h-5 text-white" />
                    </div>
                    <Badge variant="pink">Accent</Badge>
                  </div>
                  <CardTitle className="text-lg">Soft Pink</CardTitle>
                  <CardDescription>Alternative accent</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
                    <p>→ Engagement features</p>
                    <p>→ Social content</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </CodePreview>
        </Card>

        {/* Premium Variants */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Premium/Special Variants
          </h4>
          
          <CodePreview code={`import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'

<Card variant="glass">
  <CardHeader>
    <CardTitle>Glass Effect</CardTitle>
    <CardDescription>Premium sections with backdrop blur</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Frosted glass effect with backdrop blur.</p>
  </CardContent>
</Card>

<Card variant="gradient">
  <CardHeader>
    <CardTitle className="text-white">Gradient</CardTitle>
    <CardDescription className="text-white/80">Bold premium features</CardDescription>
  </CardHeader>
  <CardContent>
    <p className="text-white/90">Eye-catching gradient for premium content.</p>
  </CardContent>
</Card>

<Card variant="gradient-vibrant">
  <CardHeader>
    <CardTitle className="text-white">Gradient Vibrant</CardTitle>
    <CardDescription className="text-white/90">Maximum impact - use sparingly!</CardDescription>
  </CardHeader>
  <CardFooter>
    <Button variant="secondary-inverse">Upgrade Now</Button>
  </CardFooter>
</Card>`}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <Card variant="glass">
                <CardHeader>
                  <Badge variant="soft-purple">Special</Badge>
                  <CardTitle>Glass Effect</CardTitle>
                  <CardDescription>Premium sections with backdrop blur</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-gray-600 dark:text-gray-400">
                    Frosted glass effect with backdrop blur. Creates a premium, modern aesthetic.
                  </p>
                </CardContent>
              </Card>

              <Card variant="gradient">
                <CardHeader>
                  <Badge variant="outline" className="border-white/30 text-white">Premium Only</Badge>
                  <CardTitle className="text-white">Gradient</CardTitle>
                  <CardDescription className="text-white/80">Bold premium features</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-white/90">
                    Eye-catching gradient for premium content. Use sparingly for maximum impact.
                  </p>
                </CardContent>
              </Card>

              <Card variant="gradient-vibrant" className="md:col-span-2">
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-5 h-5 text-white" />
                    <Badge variant="outline" className="border-white/30 text-white">🔥 Premium Feature</Badge>
                  </div>
                  <CardTitle className="text-white text-2xl">Gradient Vibrant</CardTitle>
                  <CardDescription className="text-white/90">
                    The "nuclear option" - maximum impact for premium features only
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-white/90 text-sm">
                    The most eye-catching variant with vibrant colors and dramatic hover effects. Reserve ONLY for the most important premium features and upgrade prompts.
                  </p>
                </CardContent>
                <CardFooter className="gap-3">
                  <Button variant="secondary-inverse" size="lg">
                    <Sparkles className="w-4 h-4" />
                    Upgrade Now
                  </Button>
                  <Button variant="outline-inverse" size="lg">
                    Learn More
                  </Button>
                </CardFooter>
              </Card>
            </div>
          </CodePreview>
        </Card>

        {/* Real-World Examples bleiben ohne Tabs (sind Demo-Showcases) */}
        <div>
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Analytics Dashboard Example
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card variant="soft-blue">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Total Reach</CardTitle>
                  <TrendingUp className="w-5 h-5 text-blue-500" />
                </div>
                <CardDescription>Last 30 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-blue-600 dark:text-blue-400 mb-2">
                  24.8K
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>+12.5% from last month</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="soft-purple">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">Engagement</CardTitle>
                  <Heart className="w-5 h-5 text-purple-500" />
                </div>
                <CardDescription>Average rate</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-purple-600 dark:text-purple-400 mb-2">
                  4.2%
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>+0.8% improvement</span>
                </div>
              </CardContent>
            </Card>

            <Card variant="soft-coral">
              <CardHeader>
                <div className="flex items-center justify-between mb-2">
                  <CardTitle className="text-lg">New Followers</CardTitle>
                  <Users className="w-5 h-5 text-orange-500" />
                </div>
                <CardDescription>This week</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="text-4xl font-black text-orange-600 dark:text-orange-400 mb-2">
                  +342
                </div>
                <div className="flex items-center gap-2 text-sm text-emerald-600 dark:text-emerald-400">
                  <TrendingUp className="w-4 h-4" />
                  <span>Above average growth</span>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Social Media Post Examples */}
        <div>
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Social Media Post Example
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Regular Post */}
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?w=600&h=600&fit=crop" 
                  alt="Post preview"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="soft-purple">Scheduled</Badge>
                    <Badge variant="soft-blue">Instagram</Badge>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    🚀 Excited to announce our new AI-powered features! Now available to all users.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>1.2K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>89</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>45</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Agency Content Post */}
            <Card variant="elevated" className="overflow-hidden">
              <CardContent className="p-0">
                <img 
                  src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=600&h=600&fit=crop" 
                  alt="Agency post preview"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="gradient">Agency Content</Badge>
                    <Badge variant="soft-coral">Multi-Platform</Badge>
                  </div>
                  <p className="text-sm text-gray-700 dark:text-gray-300 mb-4">
                    📊 Weekly analytics: Your social media performance is improving! Check out the insights.
                  </p>
                  <div className="flex items-center gap-4 text-sm text-gray-500 dark:text-gray-400">
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>2.4K</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageCircle className="w-4 h-4" />
                      <span>156</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Share2 className="w-4 h-4" />
                      <span>92</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Calendar Example */}
        <div>
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Content Calendar Example
          </h4>

          <Card variant="elevated">
            <CardHeader>
              <div className="flex items-center justify-between">
                <div>
                  <CardTitle>January 2025</CardTitle>
                  <CardDescription>Scheduled posts overview</CardDescription>
                </div>
                <Button variant="primary" size="sm">
                  <Calendar className="w-4 h-4" />
                  Add Post
                </Button>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-7 gap-2">
                {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
                  <div key={day} className="text-center text-xs font-semibold text-gray-500 dark:text-gray-400 pb-2">
                    {day}
                  </div>
                ))}
                
                {/* Calendar Days */}
                {[...Array(31)].map((_, i) => (
                  <Card 
                    key={i}
                    variant={i === 14 ? 'soft-purple' : i === 21 ? 'soft-coral' : 'flat'}
                    className="aspect-square p-2 flex flex-col items-start justify-start hover:shadow-md transition-shadow cursor-pointer"
                  >
                    <span className="text-xs font-semibold text-gray-900 dark:text-white">{i + 1}</span>
                    {i === 14 && (
                      <div className="mt-1 flex gap-1">
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                        <div className="w-1.5 h-1.5 bg-purple-500 rounded-full" />
                      </div>
                    )}
                    {i === 21 && (
                      <div className="mt-1">
                        <div className="w-1.5 h-1.5 bg-orange-500 rounded-full" />
                      </div>
                    )}
                  </Card>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-8">
          <h4 className="font-bold text-lg mb-4 text-gray-900 dark:text-white">Usage Guidelines</h4>
          <div className="space-y-3 text-sm text-gray-700 dark:text-gray-300">
            <p>→ <strong>Default/Elevated/Flat/Outline:</strong> Your everyday cards for standard content containers</p>
            <p>→ <strong>Soft Pastells (Purple/Coral/Blue/Green/Pink):</strong> Organize and group related content with gentle visual cues</p>
            <p>→ <strong>Glass:</strong> Reserve for premium sections, hero areas, or special overlays - use sparingly</p>
            <p>→ <strong>Gradient:</strong> ONLY for premium features, agency content, and upgrade CTAs - never for regular content</p>
            <p>→ <strong>Gradient Vibrant:</strong> The "nuclear option" - absolutely ONLY for the most important premium features</p>
            <p>→ <strong>Cards vs Buttons:</strong> Cards organize content (soft), Buttons drive action (bold) - they complement each other</p>
          </div>
        </Card>
      </div>
    </div>
  )
}