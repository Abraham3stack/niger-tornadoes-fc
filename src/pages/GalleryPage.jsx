import { motion as Motion } from 'framer-motion'
import { SectionWrapper } from '../components/layout/SectionWrapper'

export function GalleryPage({ academyData }) {
  return (
    <SectionWrapper id="gallery" title="Gallery">
      <div className="grid grid-cols-2 gap-3 md:grid-cols-3">
        {academyData.gallery.map((image, index) => (
          <Motion.div key={image} whileHover={{ scale: 1.02 }} className="overflow-hidden rounded-lg">
            {/* Replace this placeholder gallery image with academy media */}
            <img
              src={image}
              alt={`Academy gallery ${index + 1}`}
              className="h-36 w-full object-cover md:h-48"
            />
          </Motion.div>
        ))}
      </div>
    </SectionWrapper>
  )
}
