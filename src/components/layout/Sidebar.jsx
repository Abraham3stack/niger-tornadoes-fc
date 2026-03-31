import { academyData } from '../../data/academyData'
import { NavLinks } from './NavLinks'

export function Sidebar({ activeSection, onNavigate }) {
  return (
    <aside className="sticky top-0 hidden h-screen w-72 border-r border-slate-200 bg-white p-6 lg:block">
      <h1 className="text-xl font-bold text-primary">{academyData.academyName}</h1>
      <p className="mt-1 text-sm text-slate-500">{academyData.slogan}</p>
      <div className="mt-8">
        <NavLinks activeSection={activeSection} onNavigate={onNavigate} />
      </div>
    </aside>
  )
}
