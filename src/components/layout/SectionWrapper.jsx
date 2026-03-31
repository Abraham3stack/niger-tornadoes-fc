import { motion as Motion } from 'framer-motion'

export function SectionWrapper({ id, title, subtitle, children, className = '' }) {
  return (
    <Motion.section
      id={id}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={`scroll-mt-24 border-b border-slate-200 px-4 py-12 sm:px-8 lg:px-12 ${className}`}
    >
      {(title || subtitle) && (
        <div className="mb-8 max-w-3xl">
          {title && <h2 className="text-2xl font-bold text-contrast sm:text-3xl">{title}</h2>}
          {subtitle && <p className="mt-2 text-slate-600">{subtitle}</p>}
        </div>
      )}
      {children}
    </Motion.section>
  )
}
