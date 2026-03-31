import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'

export function JoinUsPage() {
  return (
    <SectionWrapper id="join-us" title="Join / Trials" subtitle="Apply for open trials and player assessments">
      <Card className="mx-auto max-w-2xl">
        <CardHeader>
          <CardTitle>Player Trial Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form className="grid gap-3 sm:grid-cols-2">
            <Input type="text" placeholder="Name" className="sm:col-span-2" />
            <Input type="number" placeholder="Age" />
            <Input type="text" placeholder="Position" />
            <Input type="text" placeholder="Experience" className="sm:col-span-2" />
            <Button type="submit" className="sm:col-span-2">
              Submit Trial Request
            </Button>
          </form>
        </CardContent>
      </Card>
    </SectionWrapper>
  )
}
