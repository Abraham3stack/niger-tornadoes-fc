import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function CoachesPage({ academyData }) {
  return (
    <SectionWrapper id="coaches" title="Coaches">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {academyData.coaches.map((coach) => (
          <Card key={coach.name} className="overflow-hidden">
            {/* Replace with real coach profile images */}
            <img src={coach.image} alt={coach.name} className="h-48 w-full object-cover" />
            <CardHeader>
              <CardTitle>{coach.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="font-medium text-primary">{coach.role}</p>
              <p className="mt-2">{coach.bio}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
