import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { whyChooseFeatures } from '../../data'

export default function WhyChooseMe() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-surface-800/30">
      <div className="orb w-[400px] h-[400px] bg-accent-500/[0.05] top-1/2 right-[-8%] -translate-y-1/2" />
      <div className="orb w-[300px] h-[300px] bg-brand-500/[0.04] bottom-0 left-[5%]" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-14 lg:gap-20 items-center">

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

            {/* Satisfaction card */}
            <div className="glass-card gradient-border p-5 relative overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/[0.06] to-orange-500/[0.04] rounded-2xl" />
              <div className="relative flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-yellow-500/15 border border-yellow-500/25 flex items-center justify-center text-2xl shrink-0">
                  🏆
                </div>
                <div>
                  <h4 className="font-display font-semibold text-white mb-1.5">100% Client Satisfaction</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">
                    Every client I've worked with has recommended me to their network. Results, not promises.
                  </p>
                  {/* Stars */}
                  <div className="flex gap-1 mt-3">
                    {[...Array(5)].map((_, j) => (
                      <span key={j} className="text-yellow-400 text-sm">★</span>
                    ))}
                    <span className="text-gray-500 text-xs font-mono ml-2 self-center">5.0 avg rating</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right — Feature grid (1 col on xs, 2 cols on sm+) */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {whyChooseFeatures.map((feature, i) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: 0.1 + i * 0.08, duration: 0.5 }}
                className="glass-card gradient-border p-4 group hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                {/* Emoji icon with hover scale */}
                <div className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.08] flex items-center justify-center text-xl mb-3 group-hover:scale-110 transition-transform duration-300">
                  {feature.icon}
                </div>
                <h4 className="font-display font-semibold text-sm text-white mb-1.5">{feature.title}</h4>
                <p className="text-gray-500 text-xs leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
