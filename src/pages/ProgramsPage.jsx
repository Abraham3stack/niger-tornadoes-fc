import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'

export function ProgramsPage({ academyData }) {
  return (
    <SectionWrapper id="programs" title="Programs">
      <div className="grid gap-4 md:grid-cols-3">
        {academyData.programs.map((program) => (
          <Card key={program.title} className="transition duration-300 hover:shadow-md">
            <CardHeader>
              <CardTitle>{program.title}</CardTitle>
            </CardHeader>
            <CardContent>{program.description}</CardContent>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  )
}
