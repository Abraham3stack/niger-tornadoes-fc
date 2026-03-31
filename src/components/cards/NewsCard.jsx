import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function NewsCard({ item }) {
  return (
    <Card className="h-full transition duration-300 hover:shadow-md">
      <CardHeader>
        <p className="text-xs font-semibold uppercase tracking-wide text-primary">{item.category}</p>
        <CardTitle className="mt-1">{item.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{item.description}</p>
        <p className="mt-3 text-xs font-medium text-slate-500">{item.date}</p>
      </CardContent>
    </Card>
  )
}
