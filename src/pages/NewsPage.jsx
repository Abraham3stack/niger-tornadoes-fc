import { NewsCard } from '../components/cards/NewsCard'
import { SectionWrapper } from '../components/layout/SectionWrapper'

export function NewsPage({ clubData }) {
  return (
    <SectionWrapper id="news" title="Latest News" subtitle="Match results, announcements, and trial updates">
      <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
        {clubData.news.map((item) => (
          <NewsCard key={item.title} item={item} />
        ))}
      </div>
    </SectionWrapper>
  )
}
