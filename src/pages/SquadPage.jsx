import { PlayerCard } from '../components/cards/PlayerCard'
import { SectionWrapper } from '../components/layout/SectionWrapper'

export function SquadPage({ clubData }) {
  return (
    <SectionWrapper id="squad" title="First Team Squad" subtitle="Current registered players">
      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {clubData.squad.map((player) => (
          <PlayerCard key={`${player.number}-${player.name}`} player={player} />
        ))}
      </div>
    </SectionWrapper>
  )
}
