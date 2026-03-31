import { Card, CardContent, CardHeader, CardTitle } from '../ui/card'

export function PlayerCard({ player }) {
  return (
    <Card className="overflow-hidden transition duration-300 hover:-translate-y-1 hover:shadow-md">
      {/* Replace with official player portrait/headshot */}
      <img src={player.image} alt={player.name} className="h-52 w-full object-cover" />
      <CardHeader>
        <CardTitle>{player.name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="font-medium text-primary">{player.position}</p>
        <p className="mt-1 text-slate-600">Jersey #{player.number}</p>
      </CardContent>
    </Card>
  )
}
