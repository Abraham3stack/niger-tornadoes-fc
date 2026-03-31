import { navItems } from '../../data/academyData'
import { cn } from '../../lib/utils'

export function NavLinks({ activeSection, onNavigate }) {
  return (
    <nav className="space-y-1">
      {navItems.map((item) => (
        <button
          key={item.id}
          onClick={() => onNavigate(item.id)}
          className={cn(
            'w-full rounded-md px-3 py-2 text-left text-sm font-medium transition-colors',
            activeSection === item.id
              ? 'bg-primary text-white'
              : 'text-slate-700 hover:bg-slate-100 hover:text-contrast'
          )}
        >
          {item.label}
        </button>
      ))}
    </nav>
  )
}
