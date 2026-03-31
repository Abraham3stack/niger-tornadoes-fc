import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function AboutPage({ academyData }) {
  return (
    <SectionWrapper id="about" title="About" subtitle={academyData.about}>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent>{academyData.mission}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>{academyData.vision}</CardContent>
        </Card>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {academyData.values.map((value) => (
          <Card key={value} className="transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{value}</CardTitle>
            </CardHeader>
            <CardContent>Core pillar of every player journey.</CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
