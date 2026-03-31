import { SectionWrapper } from '../components/layout/SectionWrapper'
import { Button } from '../components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '../components/ui/card'
import { Input } from '../components/ui/input'
import { Textarea } from '../components/ui/textarea'

export function ContactPage({ academyData }) {
  return (
    <SectionWrapper id="contact" title="Contact">
      <div className="grid gap-4 lg:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>Send a Message</CardTitle>
          </CardHeader>
          <CardContent>
            <form className="space-y-3">
              <Input type="text" placeholder="Name" />
              <Input type="email" placeholder="Email" />
              <Textarea placeholder="Message" />
              <Button type="submit" className="w-full">
                Submit
              </Button>
            </form>
          </CardContent>
        </Card>
        <Card>
          <CardHeader>
            <CardTitle>Contact Details</CardTitle>
          </CardHeader>
          <CardContent>
            <p>
              <span className="font-semibold">Phone:</span> {academyData.contact.phone}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Email:</span> {academyData.contact.email}
            </p>
            <p className="mt-2">
              <span className="font-semibold">Location:</span> {academyData.contact.location}
            </p>
            <div className="mt-4 rounded-lg bg-slate-100 p-6 text-center text-sm text-slate-500">
              Map/location placeholder
            </div>
          </CardContent>
        </Card>
      </div>
    </SectionWrapper>
  )
}
