import { useState } from 'react'
import { PlayerCard } from '../components/cards/PlayerCard'
import { SectionWrapper } from '../components/layout/SectionWrapper'

export function SquadPage({ clubData }) {
  const [selectedPosition, setSelectedPosition] = useState('All')
  const [selectedPlayer, setSelectedPlayer] = useState(null)

  const positions = ['All', ...new Set((clubData.squad || []).map((p) => p.position))]

  const filteredPlayers =
    selectedPosition === 'All'
      ? clubData.squad
      : clubData.squad.filter((p) => p.position === selectedPosition)

  return (
    <SectionWrapper id="squad" title="First Team Squad" subtitle="Current registered players">
      <div className="mb-4 flex flex-wrap gap-2">
        {positions.map((pos) => (
          <button
            key={pos}
            onClick={() => setSelectedPosition(pos)}
            className={`px-3 py-1 rounded-full text-sm border ${
              selectedPosition === pos
                ? 'bg-blue-600 text-white'
                : 'bg-white text-gray-700'
            }`}
          >
            {pos}
          </button>
        ))}
      </div>

      <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
        {filteredPlayers.map((player) => (
          <div key={`${player.number}-${player.name}`}>
            <PlayerCard player={player} />
            <button
              onClick={() => setSelectedPlayer(player)}
              className="mt-2 w-full rounded bg-blue-700 px-3 py-2 text-white hover:bg-blue-800"
            >
              View Profile
            </button>
          </div>
        ))}
      </div>

      {selectedPlayer && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="w-[90%] max-w-md rounded-lg bg-white p-4">
            <h3 className="text-xl font-bold mb-2">{selectedPlayer.name}</h3>
            <p className="text-sm text-gray-600">Position: {selectedPlayer.position}</p>
            <p className="text-sm text-gray-600">Number: {selectedPlayer.number}</p>

            <div className="mt-4 flex justify-end">
              <button
                onClick={() => setSelectedPlayer(null)}
                className="rounded bg-blue-700 px-4 py-2 text-white hover:bg-blue-800"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </SectionWrapper>
  )
}
