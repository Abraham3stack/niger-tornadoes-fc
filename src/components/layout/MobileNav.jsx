import { Menu } from 'lucide-react'
import { useState } from 'react'
import { clubData } from '../../data/clubData'
import { Button } from '../ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../ui/dialog'
import { NavLinks } from './NavLinks'

export function MobileNav({ activeSection, onNavigate }) {
  const [open, setOpen] = useState(false)

  const navigateAndClose = (id) => {
    onNavigate(id)
    setOpen(false)
  }

  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/90 px-4 py-3 backdrop-blur lg:hidden">
      <div className="flex items-center justify-between">
        <h1 className="text-base font-bold text-primary">{clubData.clubName}</h1>
        <Dialog open={open} onOpenChange={setOpen}>
          <DialogTrigger asChild>
            <Button size="sm" variant="outline" aria-label="Open navigation">
              <Menu className="h-4 w-4" />
            </Button>
          </DialogTrigger>
          <DialogContent className="max-w-sm">
            <DialogHeader>
              <DialogTitle>Navigation</DialogTitle>
              <DialogDescription>Browse club sections</DialogDescription>
            </DialogHeader>
            <NavLinks activeSection={activeSection} onNavigate={navigateAndClose} />
          </DialogContent>
        </Dialog>
      </div>
    </header>
  )
}
