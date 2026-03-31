import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function AboutPage({ clubData }) {
  return (
    <SectionWrapper id="about" title="About Club" subtitle={clubData.about}>
      <div className="grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Mission</CardTitle>
          </CardHeader>
          <CardContent>{clubData.mission}</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Vision</CardTitle>
          </CardHeader>
          <CardContent>{clubData.vision}</CardContent>
        </Card>
      </div>
      <Card className="mt-4">
        <CardHeader>
          <CardTitle>Club History</CardTitle>
        </CardHeader>
        <CardContent>{clubData.history}</CardContent>
      </Card>
      <div className="mt-6 grid gap-4 sm:grid-cols-3">
        {clubData.identity.map((value) => (
          <Card key={value} className="transition-transform hover:-translate-y-1">
            <CardHeader>
              <CardTitle>{value}</CardTitle>
            </CardHeader>
            <CardContent>Core identity of Niger Tornadoes FC in the NPFL.</CardContent>
          </Card>
        ))}
      </div>
      <div className="mt-6 grid gap-4 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Club Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-semibold">Founded:</span> {clubData.founded}
            </p>
            <p className="mt-2">
              <span className="font-semibold">League:</span> {clubData.league}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Stadium:</span> {clubData.stadium}
            </p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Home Base</CardTitle>
          </CardHeader>
          <CardContent>{clubData.location}</CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
