import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent } from '../components/ui/card'

export function SponsorsPage({ clubData }) {
  return (
    <SectionWrapper
      id="sponsors"
      title="Sponsors & Partners"
      subtitle="We are open to partnerships and sponsorship opportunities"
    >
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {(clubData.sponsors || []).map((sponsor) => (
          <Card key={sponsor.name} className="overflow-hidden">
            <CardContent className="flex h-32 items-center justify-center p-4">
              <img
                src={sponsor.logo}
                alt={sponsor.name}
                className="max-h-20 w-auto object-contain"
              />
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Sponsorship CTA */}
      <div className="mt-10 text-center">
        <p className="text-lg font-semibold text-gray-700">
          Become a Sponsor of Niger Tornadoes FC
        </p>
        <p className="mt-2 text-gray-500">
          Partner with us to support football development and gain brand visibility.
        </p>

        <div className="mt-6 flex justify-center">
          <a
            href="https://wa.me/2348012345678?text=Hello%20I%20am%20interested%20in%20sponsoring%20Niger%20Tornadoes%20FC"
            className="rounded bg-blue-700 px-6 py-3 text-white hover:bg-blue-800"
          >
            Become a Sponsor
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
