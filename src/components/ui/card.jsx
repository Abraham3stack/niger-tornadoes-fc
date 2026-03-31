import { cn } from '../../lib/utils'

export function Card({ className, children }) {
  return (
    <div className={cn('rounded-xl border bg-white shadow-sm', className)}>
      {children}
    </div>
  )
}

export function CardHeader({ className, children }) {
  return <div className={cn('p-5 pb-3', className)}>{children}</div>
}

export function CardTitle({ className, children }) {
  return <h3 className={cn('text-lg font-semibold text-contrast', className)}>{children}</h3>
}

export function CardContent({ className, children }) {
  return <div className={cn('p-5 pt-0 text-sm text-slate-700', className)}>{children}</div>
}
