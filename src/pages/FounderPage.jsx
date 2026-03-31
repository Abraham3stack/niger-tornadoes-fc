import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import founderImage from '../assets/founder.jpg'

export function FounderPage({ academyData }) {
  return (
    <SectionWrapper id="founder" title="Founder">
      <Card className="overflow-hidden">
        <div className="grid grid-cols-1 md:grid-cols-2">
          {/* Replace this placeholder with official founder portrait */}
          <div className="bg-gray-100 w-full">
            <img
              src={founderImage}
              alt={academyData.founder.name}
              className="w-full h-auto object-contain"
            />
          </div>
          <div>
            <CardHeader>
              <CardTitle>{academyData.founder.name}</CardTitle>
            </CardHeader>
            <CardContent>{academyData.founder.bio}</CardContent>
          </div>
        </div>
      </Card>
    </SectionWrapper>
  )
}
