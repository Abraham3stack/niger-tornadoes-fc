import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent } from '../components/ui/card'

export function SponsorsPage({ clubData }) {
  return (
    <SectionWrapper id="sponsors" title="Sponsors" subtitle="Proud partners supporting Niger Tornadoes FC">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {clubData.sponsors.map((sponsor) => (
          <Card key={sponsor.name} className="overflow-hidden">
            <CardContent className="flex h-32 items-center justify-center p-4">
              {/* Replace with official sponsor logo asset */}
              <img src={sponsor.logo} alt={sponsor.name} className="max-h-20 w-auto object-contain" />
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
