import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiCheckCircle } from 'react-icons/fi'
import { whyChooseFeatures } from '../../data'

export default function WhyChooseMe() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-white">
      <div className="absolute inset-x-0 top-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -28 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-4 inline-block">Why Choose Us</span>
            <h2 className="section-title mb-5">
              Built Different,{' '}
              <span className="gradient-text">Delivered Better</span>
            </h2>
            <p className="section-subtitle mb-8">
              Every project is crafted with the same standards we hold ourselves to — clean code, precision design, and features that actually move the needle.
            </p>

            {/* Workspace image */}
            <div className="relative rounded-xl overflow-hidden mb-7 border border-gray-200 shadow-sm">
              <img
                src="/images/why-choose-workspace.jpg"
                alt="AI Rabbits developer workspace"
                className="w-full h-48 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
              <div className="absolute bottom-3 left-4">
                <span className="text-[11px] font-mono text-white bg-brand-500/90 px-3 py-1 rounded-full">
                  Clean code · Thoughtful design
                </span>
              </div>
            </div>

            {/* Satisfaction metric */}
            <div className="glass-card p-5 flex items-start gap-4 border-l-4" style={{ borderLeftColor: '#E31837' }}>
              <div className="w-11 h-11 rounded-lg bg-amber-50 border border-amber-200 flex items-center justify-center text-xl shrink-0">
                🏆
              </div>
              <div>
                <h4 className="font-display font-semibold text-gray-900 mb-1">100% Client Satisfaction</h4>
                <p className="text-gray-600 text-sm leading-relaxed">
                  Every client we've worked with has recommended us to their network. Results, not promises.
                </p>
                <div className="flex gap-0.5 mt-2">
                  {[...Array(5)].map((_, j) => (
                    <span key={j} className="text-yellow-400 text-sm">★</span>
                  ))}
                  <span className="text-gray-400 text-xs font-mono ml-2 self-center">5.0 avg</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — feature grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {whyChooseFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="glass-card p-5 group hover:-translate-y-1 transition-all duration-200 border-t-2"
                style={{ borderTopColor: 'rgba(227,24,55,0.4)' }}
              >
                <div className="w-9 h-9 rounded-lg bg-brand-500/8 border border-brand-500/20 flex items-center justify-center text-lg mb-3 group-hover:bg-brand-500/15 transition-colors">
                  {feature.icon}
                </div>
                <h4 className="font-display font-semibold text-sm text-gray-900 mb-1.5">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
