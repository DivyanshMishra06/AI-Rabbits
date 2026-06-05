import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { whyChooseFeatures } from '../../data'

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-surface-800/30">
      <div className="orb w-80 h-80 bg-accent-500/[0.04] top-1/2 right-0 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -32 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-4 inline-block">Why Work With Me</span>
            <h2 className="section-title mb-6">
              Built Different,{' '}
              <span className="gradient-text">Delivered Better</span>
            </h2>
            <p className="section-subtitle mb-8">
              Every project is crafted with the same care I'd put into my own product — clean code, stunning design, and features that actually work.
            </p>

            <div className="glass-card gradient-border p-5">
              <div className="flex items-start gap-4">
                <div className="text-3xl">🏆</div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1">100% Client Satisfaction</h4>
                  <p className="text-gray-400 text-sm">Every client I've worked with has recommended me to their network. Results, not promises.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Feature grid */}
          <div className="grid grid-cols-2 gap-3">
            {whyChooseFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="glass-card gradient-border p-4 group hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="text-2xl mb-2">{feature.icon}</div>
                <h4 className="font-display font-semibold text-sm text-white mb-1">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
