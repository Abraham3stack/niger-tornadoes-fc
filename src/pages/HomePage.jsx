import { useState } from 'react'
import { academyData } from '../data/academyData'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/button'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'

export function HomePage({ onJoinClick }) {
  const [open, setOpen] = useState(false)

  const handleJoinNavigation = () => {
    setOpen(false)
    requestAnimationFrame(() => {
      onJoinClick()
    })
  }

  return (
    <SectionWrapper id="home" className="pt-8 sm:pt-12">
      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center p-6 sm:p-10"
        style={{ backgroundImage: `url(${academyData.heroImage})` }}
      >
        {/* Replace this background image with official academy hero photography */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/80">Welcome</p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">{academyData.academyName}</h2>
          <p className="mt-3 text-white/90">{academyData.slogan}</p>
          <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
              <Button className="mt-6">Join Academy</Button>
            </DialogTrigger>
            <DialogContent onCloseAutoFocus={(event) => event.preventDefault()}>
              <DialogHeader>
                <DialogTitle>Ready to Join?</DialogTitle>
                <DialogDescription>
                  Proceed to the registration section to start your academy journey.
                </DialogDescription>
              </DialogHeader>
              <Button onClick={handleJoinNavigation}>Go to Join Us</Button>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </SectionWrapper>
  )
}
