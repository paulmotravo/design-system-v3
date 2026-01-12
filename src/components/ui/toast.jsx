import * as React from "react"
import { X, CheckCircle2, AlertCircle, AlertTriangle, Info } from "lucide-react"
import { cn } from "@/lib/utils"

const ToastContext = React.createContext({})

export function ToastProvider({ children }) {
  const [toasts, setToasts] = React.useState([])

  const toast = React.useCallback(({ title, description, variant = "default", duration = 5000 }) => {
    const id = Math.random().toString(36).substr(2, 9)
    const newToast = { id, title, description, variant }
    
    setToasts((prev) => [...prev, newToast])
    
    if (duration) {
      setTimeout(() => {
        setToasts((prev) => prev.filter((t) => t.id !== id))
      }, duration)
    }
    
    return id
  }, [])

  const dismiss = React.useCallback((id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id))
  }, [])

  return (
    <ToastContext.Provider value={{ toast, dismiss, toasts }}>
      {children}
    </ToastContext.Provider>
  )
}

export function useToast() {
  const context = React.useContext(ToastContext)
  if (!context) {
    throw new Error("useToast must be used within ToastProvider")
  }
  return context
}

export function ToastViewport() {
  const { toasts, dismiss } = useToast()

  if (toasts.length === 0) return null

  return (
    <div className="fixed top-0 right-0 z-[100] flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-4 sm:bottom-4 sm:flex-col md:max-w-[420px] gap-2">
      {toasts.map((toast) => (
        <Toast key={toast.id} {...toast} onDismiss={() => dismiss(toast.id)} />
      ))}
    </div>
  )
}

const variantIcons = {
  success: CheckCircle2,
  error: AlertCircle,
  warning: AlertTriangle,
  info: Info,
  default: Info,
}

const variantStyles = {
  success: "bg-white dark:bg-gray-800 border-green-200 dark:border-green-800 [&>svg]:text-green-500 dark:[&>svg]:text-green-400",
  error: "bg-white dark:bg-gray-800 border-red-200 dark:border-red-800 [&>svg]:text-red-500 dark:[&>svg]:text-red-400",
  warning: "bg-white dark:bg-gray-800 border-amber-200 dark:border-amber-800 [&>svg]:text-amber-500 dark:[&>svg]:text-amber-400",
  info: "bg-white dark:bg-gray-800 border-blue-200 dark:border-blue-800 [&>svg]:text-blue-500 dark:[&>svg]:text-blue-400",
  default: "bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 [&>svg]:text-gray-500 dark:[&>svg]:text-gray-400",
}

function Toast({ title, description, variant = "default", onDismiss }) {
  const Icon = variantIcons[variant]

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-[var(--radix-toast-swipe-end-x)] data-[swipe=move]:translate-x-[var(--radix-toast-swipe-move-x)] data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full data-[state=open]:sm:slide-in-from-bottom-full",
        variantStyles[variant]
      )}
    >
      <Icon className="h-5 w-5 flex-shrink-0 mt-0.5" />
      <div className="flex-1 grid gap-1">
        {title && (
          <div className="text-sm font-semibold text-gray-900 dark:text-white">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-gray-600 dark:text-gray-400">
            {description}
          </div>
        )}
      </div>
      <button
        onClick={onDismiss}
        className="flex-shrink-0 rounded-md p-1 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export { Toast }