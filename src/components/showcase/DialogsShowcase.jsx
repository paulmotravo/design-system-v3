import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { AlertCircle, Trash2, Edit, Eye, Code2, Copy, CheckCircle } from 'lucide-react'

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

export default function DialogsShowcase() {
  const [simpleOpen, setSimpleOpen] = useState(false)
  const [formOpen, setFormOpen] = useState(false)
  const [confirmOpen, setConfirmOpen] = useState(false)
  const [previewOpen, setPreviewOpen] = useState(false)

  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">Dialogs & Modals</h3>
        <p className="text-gray-600 dark:text-gray-400">Overlay dialogs for user interactions and confirmations</p>
      </div>

      <div className="space-y-6">
        {/* Philosophy */}
        <Card variant="soft-purple" className="p-8">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
              <AlertCircle className="w-6 h-6 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">Dialog Philosophy</h4>
              <div className="space-y-1 text-sm text-gray-700 dark:text-gray-300">
                <p>→ <strong>Focus:</strong> Locks user attention to important actions</p>
                <p>→ <strong>Backdrop Blur:</strong> Visual separation from background content</p>
                <p>→ <strong>Escape Routes:</strong> Always provide a way to close or cancel</p>
                <p>→ <strong>Animations:</strong> Smooth fade and zoom transitions</p>
              </div>
            </div>
          </div>
        </Card>

        {/* Simple Dialog */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Simple Dialog
          </h4>
          
          <CodePreview code={`import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useState } from 'react'

const [open, setOpen] = useState(false)

<Button variant="outline" onClick={() => setOpen(true)}>
  <Eye className="w-4 h-4 mr-2" />
  Open Simple Dialog
</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogClose onClick={() => setOpen(false)} />
    <DialogHeader>
      <DialogTitle>Simple Dialog</DialogTitle>
      <DialogDescription>
        This is a basic dialog with a title, description, and action buttons.
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <p className="text-sm text-gray-600">
        Dialogs are great for showing important information or asking for 
        user confirmation before performing critical actions.
      </p>
    </div>
    <DialogFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => setOpen(false)}>
        Got it
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
            <div className="flex justify-center py-8">
              <Button variant="outline" onClick={() => setSimpleOpen(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Open Simple Dialog
              </Button>
            </div>
          </CodePreview>
        </Card>

        {/* Form Dialog */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Form Dialog
          </h4>
          
          <CodePreview code={`import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { Edit } from 'lucide-react'
import { useState } from 'react'

const [open, setOpen] = useState(false)

<Button variant="primary" onClick={() => setOpen(true)}>
  <Edit className="w-4 h-4 mr-2" />
  Edit Post
</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent>
    <DialogClose onClick={() => setOpen(false)} />
    <DialogHeader>
      <DialogTitle>Edit Post</DialogTitle>
      <DialogDescription>
        Make changes to your post details below.
      </DialogDescription>
    </DialogHeader>
    <div className="space-y-4 py-4">
      <div className="space-y-2">
        <Label>Post Title</Label>
        <Input placeholder="Enter post title" />
      </div>
      <div className="space-y-2">
        <Label>Caption</Label>
        <Textarea placeholder="Write your caption here..." />
      </div>
    </div>
    <DialogFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="primary" onClick={() => setOpen(false)}>
        Save Changes
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
            <div className="flex justify-center py-8">
              <Button variant="primary" onClick={() => setFormOpen(true)}>
                <Edit className="w-4 h-4 mr-2" />
                Edit Post
              </Button>
            </div>
          </CodePreview>
        </Card>

        {/* Confirmation Dialog */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Confirmation Dialog
          </h4>
          
          <CodePreview code={`import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Trash2 } from 'lucide-react'
import { useState } from 'react'

const [open, setOpen] = useState(false)

<Button variant="danger" onClick={() => setOpen(true)}>
  <Trash2 className="w-4 h-4 mr-2" />
  Delete Post
</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-md">
    <DialogClose onClick={() => setOpen(false)} />
    <DialogHeader>
      <DialogTitle>Delete Post?</DialogTitle>
      <DialogDescription>
        This action cannot be undone. This will permanently delete your 
        post and remove it from our servers.
      </DialogDescription>
    </DialogHeader>
    <DialogFooter>
      <Button variant="ghost" onClick={() => setOpen(false)}>
        Cancel
      </Button>
      <Button variant="danger" onClick={() => setOpen(false)}>
        <Trash2 className="w-4 h-4 mr-2" />
        Delete Post
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
            <div className="flex justify-center py-8">
              <Button variant="danger" onClick={() => setConfirmOpen(true)}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Post
              </Button>
            </div>
          </CodePreview>
        </Card>

        {/* Preview Dialog */}
        <Card className="p-8 bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-bold text-gray-500 dark:text-gray-400 uppercase tracking-wider mb-6">
            Preview Dialog (Large)
          </h4>
          
          <CodePreview code={`import { Dialog, DialogContent, DialogHeader, DialogFooter, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog'
import { Button } from '@/components/ui/button'
import { Eye } from 'lucide-react'
import { useState } from 'react'

const [open, setOpen] = useState(false)

<Button variant="ghost" onClick={() => setOpen(true)}>
  <Eye className="w-4 h-4 mr-2" />
  Preview Post
</Button>

<Dialog open={open} onOpenChange={setOpen}>
  <DialogContent className="max-w-2xl">
    <DialogClose onClick={() => setOpen(false)} />
    <DialogHeader>
      <DialogTitle>Post Preview</DialogTitle>
      <DialogDescription>
        See how your post will look on social media
      </DialogDescription>
    </DialogHeader>
    <div className="py-4">
      <div className="bg-gray-100 rounded-xl p-6 space-y-4">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
          <div>
            <div className="font-semibold">Your Brand</div>
            <div className="text-xs text-gray-500">2 hours ago</div>
          </div>
        </div>
        <p className="text-sm text-gray-700">
          🚀 Excited to announce our new AI-powered content creation tool! 
          This will revolutionize how you create social media posts. 
          #SocialMedia #AI #ContentCreation
        </p>
        <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg" />
      </div>
    </div>
    <DialogFooter>
      <Button variant="primary" onClick={() => setOpen(false)}>
        Looks Good!
      </Button>
    </DialogFooter>
  </DialogContent>
</Dialog>`}>
            <div className="flex justify-center py-8">
              <Button variant="ghost" onClick={() => setPreviewOpen(true)}>
                <Eye className="w-4 h-4 mr-2" />
                Preview Post
              </Button>
            </div>
          </CodePreview>
        </Card>

        {/* All Dialog Instances */}
        <Dialog open={simpleOpen} onOpenChange={setSimpleOpen}>
          <DialogContent>
            <DialogClose onClick={() => setSimpleOpen(false)} />
            <DialogHeader>
              <DialogTitle>Simple Dialog</DialogTitle>
              <DialogDescription>
                This is a basic dialog with a title, description, and action buttons.
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Dialogs are great for showing important information or asking for user confirmation
                before performing critical actions.
              </p>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setSimpleOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setSimpleOpen(false)}>
                Got it
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={formOpen} onOpenChange={setFormOpen}>
          <DialogContent>
            <DialogClose onClick={() => setFormOpen(false)} />
            <DialogHeader>
              <DialogTitle>Edit Post</DialogTitle>
              <DialogDescription>
                Make changes to your post details below.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4 py-4">
              <div className="space-y-2">
                <Label>Post Title</Label>
                <Input placeholder="Enter post title" />
              </div>
              <div className="space-y-2">
                <Label>Caption</Label>
                <Textarea placeholder="Write your caption here..." />
              </div>
            </div>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setFormOpen(false)}>
                Cancel
              </Button>
              <Button variant="primary" onClick={() => setFormOpen(false)}>
                Save Changes
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
          <DialogContent className="max-w-md">
            <DialogClose onClick={() => setConfirmOpen(false)} />
            <DialogHeader>
              <DialogTitle>Delete Post?</DialogTitle>
              <DialogDescription>
                This action cannot be undone. This will permanently delete your post and remove it from our servers.
              </DialogDescription>
            </DialogHeader>
            <DialogFooter>
              <Button variant="ghost" onClick={() => setConfirmOpen(false)}>
                Cancel
              </Button>
              <Button variant="danger" onClick={() => setConfirmOpen(false)}>
                <Trash2 className="w-4 h-4 mr-2" />
                Delete Post
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        <Dialog open={previewOpen} onOpenChange={setPreviewOpen}>
          <DialogContent className="max-w-2xl">
            <DialogClose onClick={() => setPreviewOpen(false)} />
            <DialogHeader>
              <DialogTitle>Post Preview</DialogTitle>
              <DialogDescription>
                See how your post will look on social media
              </DialogDescription>
            </DialogHeader>
            <div className="py-4">
              <div className="bg-gray-100 dark:bg-gray-800 rounded-xl p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500" />
                  <div>
                    <div className="font-semibold text-gray-900 dark:text-white">Your Brand</div>
                    <div className="text-xs text-gray-500 dark:text-gray-400">2 hours ago</div>
                  </div>
                </div>
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  🚀 Excited to announce our new AI-powered content creation tool! This will revolutionize how you create social media posts. #SocialMedia #AI #ContentCreation
                </p>
                <div className="aspect-video bg-gradient-to-br from-purple-400 to-pink-400 rounded-lg" />
              </div>
            </div>
            <DialogFooter>
              <Button variant="primary" onClick={() => setPreviewOpen(false)}>
                Looks Good!
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>

        {/* Usage Guidelines */}
        <Card variant="soft-blue" className="p-6">
          <div className="font-bold text-sm mb-3 text-gray-900 dark:text-white">Usage Guidelines</div>
          <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300">
            <p>→ <strong>Simple Dialog:</strong> For informational messages and basic confirmations</p>
            <p>→ <strong>Form Dialog:</strong> For editing content or collecting user input</p>
            <p>→ <strong>Confirmation Dialog:</strong> For destructive actions requiring explicit confirmation</p>
            <p>→ <strong>Preview Dialog:</strong> For showing larger content previews (use max-w-2xl or larger)</p>
            <p>→ <strong>Always include:</strong> DialogClose for X button, Cancel option in footer</p>
          </div>
        </Card>
      </div>
    </div>
  )
}