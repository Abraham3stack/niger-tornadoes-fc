import { SectionWrapper } from '../components/layout/SectionWrapper'

export function FixturesPage({ clubData }) {
  return (
    <SectionWrapper id="fixtures" title="Fixtures / Results" subtitle="Upcoming matches and recent outcomes">
      <div className="overflow-hidden rounded-xl border border-slate-200">
        <table className="w-full min-w-[520px] border-collapse bg-white text-left text-sm">
          <thead className="bg-slate-100">
            <tr>
              <th className="px-4 py-3 font-semibold text-slate-700">Opponent</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Date</th>
              <th className="px-4 py-3 font-semibold text-slate-700">Result</th>
            </tr>
          </thead>
          <tbody>
            {clubData.fixtures.map((fixture) => (
              <tr key={`${fixture.opponent}-${fixture.date}`} className="border-t border-slate-200">
                <td className="px-4 py-3">{fixture.opponent}</td>
                <td className="px-4 py-3">{fixture.date}</td>
                <td className="px-4 py-3 font-medium text-primary">{fixture.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  )
}
