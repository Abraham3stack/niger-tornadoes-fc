import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function HistoryPage({ academyData }) {
  return (
    <SectionWrapper id="history" title="Our Story">
      <p className="max-w-4xl text-slate-700">{academyData.history}</p>
      <div className="mt-8 space-y-4 border-l-2 border-primary pl-5">
        <Card>
          <CardHeader>
            <CardTitle>Foundation & Partnership</CardTitle>
          </CardHeader>
          <CardContent>Sweden-linked development initiative rooted in Nigerian grassroots football.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Player Pathways</CardTitle>
          </CardHeader>
          <CardContent>Supported youth prospects with opportunities and exposure in Europe.</CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Global Participation</CardTitle>
          </CardHeader>
          <CardContent>Regular participation in international tournaments including Gothia Cup.</CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
