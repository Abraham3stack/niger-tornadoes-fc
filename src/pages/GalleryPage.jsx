import { motion as Motion } from 'framer-motion'
import { SectionWrapper } from '../components/layout/SectionWrapper'

export function GalleryPage({ clubData }) {
  return (
    <SectionWrapper id="gallery" title="Gallery" subtitle="Match photos and training sessions">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {clubData.gallery.map((item, index) => (
          <Motion.div key={item.image} whileHover={{ scale: 1.02 }} className="group relative overflow-hidden rounded-lg">
            {/* Replace this placeholder gallery image with official match/training media */}
            <img
              src={item.image}
              alt={`Niger Tornadoes gallery ${index + 1}`}
              className="h-36 w-full object-cover md:h-48"
            />
            <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/60 to-transparent p-3 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100">
              {item.title}
            </div>
          </Motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
