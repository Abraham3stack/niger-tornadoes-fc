import { clubData } from '../data/clubData'
import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/button'

export function HomePage({ onSquadClick, onNewsClick }) {
  return (
    <SectionWrapper id="home" className="pt-8 sm:pt-12">
      <div
        className="relative overflow-hidden rounded-2xl bg-cover bg-center p-6 sm:p-10"
        style={{ backgroundImage: `url(${clubData.heroImage})` }}
      >
        {/* Replace this background image with official stadium or first-team action image */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/30" />
        <div className="relative z-10 max-w-2xl">
          <p className="mb-2 text-sm uppercase tracking-[0.2em] text-white/80">{clubData.nickname}</p>
          <h2 className="text-3xl font-bold text-white sm:text-5xl">{clubData.fullName}</h2>
          <p className="mt-3 text-white/90">{clubData.slogan}</p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Button onClick={onSquadClick}>View Squad</Button>
            <Button variant="outline" onClick={onNewsClick} className="border-white/70 bg-white/10 text-white hover:bg-white hover:text-contrast">
              Latest News
            </Button>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
