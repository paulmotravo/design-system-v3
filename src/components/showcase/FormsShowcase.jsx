import { Card } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { AlertCircle } from 'lucide-react'

export default function FormsShowcase() {
  return (
    <div className="mb-20">
      <div className="mb-8">
        <h3 className="text-3xl font-black mb-2 text-gray-900 dark:text-white">
          ✅ FORMS SHOWCASE WORKS!
        </h3>
        <p className="text-gray-600 dark:text-gray-400">
          If you can see this, the component is loaded correctly!
        </p>
      </div>

      <Card variant="soft-purple" className="p-8">
        <div className="flex items-start gap-4">
          <div className="w-12 h-12 bg-viralspoon-purple dark:bg-purple-600 rounded-2xl flex items-center justify-center flex-shrink-0">
            <AlertCircle className="w-6 h-6 text-white" />
          </div>
          <div>
            <h4 className="font-bold text-lg mb-2 text-gray-900 dark:text-white">
              Test erfolgreich! 🎉
            </h4>
            <p className="text-sm text-gray-700 dark:text-gray-300">
              Die FormsShowcase Komponente wird korrekt importiert und gerendert.
            </p>
            <Button variant="primary" className="mt-4">
              Test Button
            </Button>
          </div>
        </div>
      </Card>
    </div>
  )
}