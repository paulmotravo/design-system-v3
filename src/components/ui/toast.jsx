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
    <div className="fixed top-0 right-0 z-100 flex max-h-screen w-full flex-col-reverse p-4 sm:top-auto sm:right-4 sm:bottom-4 sm:flex-col md:max-w-[420px] gap-2">
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
  success: "bg-background border-success/30 [&>svg]:text-success",
  error: "bg-background border-destructive/30 [&>svg]:text-destructive",
  warning: "bg-background border-warning/30 [&>svg]:text-warning",
  info: "bg-background border-info/30 [&>svg]:text-info",
  default: "bg-background border-border [&>svg]:text-muted-foreground",
}

function Toast({ title, description, variant = "default", onDismiss }) {
  const Icon = variantIcons[variant]

  return (
    <div
      className={cn(
        "pointer-events-auto relative flex w-full items-start gap-3 overflow-hidden rounded-lg border p-4 shadow-lg transition-all data-[swipe=cancel]:translate-x-0 data-[swipe=end]:translate-x-(--radix-toast-swipe-end-x) data-[swipe=move]:translate-x-(--radix-toast-swipe-move-x) data-[swipe=move]:transition-none data-[state=open]:animate-in data-[state=closed]:animate-out data-[swipe=end]:animate-out data-[state=closed]:fade-out-80 data-[state=closed]:slide-out-to-right-full data-[state=open]:slide-in-from-top-full sm:data-[state=open]:slide-in-from-bottom-full",
        variantStyles[variant]
      )}
    >
      <Icon className="h-5 w-5 shrink-0 mt-0.5" />
      <div className="flex-1 grid gap-1">
        {title && (
          <div className="text-sm font-semibold text-foreground">
            {title}
          </div>
        )}
        {description && (
          <div className="text-sm text-muted-foreground">
            {description}
          </div>
        )}
      </div>
      <button
        onClick={onDismiss}
        className="shrink-0 rounded-md p-1 text-muted-foreground hover:text-foreground transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  )
}

export { Toast }
