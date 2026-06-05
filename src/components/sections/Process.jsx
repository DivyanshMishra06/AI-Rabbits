import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { processSteps } from '../../data'

export default function Process() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative">
      <div className="orb w-96 h-96 bg-brand-500/[0.04] bottom-0 left-1/2 -translate-x-1/2" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">How It Works</span>
          <h2 className="section-title mb-4">
            My Development{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A battle-tested, transparent process that delivers quality products on time and within budget.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line — desktop */}
          <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/50 via-accent-500/50 to-transparent -translate-x-1/2" />

          <div className="space-y-8 lg:space-y-0">
            {processSteps.map((step, i) => {
              const isLeft = i % 2 === 0
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, x: isLeft ? -40 : 40 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: i * 0.12, duration: 0.55 }}
                  className={`lg:grid lg:grid-cols-2 lg:gap-8 items-center ${isLeft ? '' : 'lg:direction-rtl'}`}
                >
                  {/* Card */}
                  <div className={`${isLeft ? 'lg:text-right lg:pr-12' : 'lg:col-start-2 lg:pl-12'} mb-4 lg:mb-8`}>
                    <div className={`glass-card gradient-border p-5 hover:bg-white/[0.05] transition-colors duration-300 ${isLeft ? 'lg:ml-auto' : ''} max-w-sm ${isLeft ? 'lg:ml-auto' : 'lg:mr-0'}`}>
                      <div className={`flex items-center gap-3 mb-3 ${isLeft ? 'lg:flex-row-reverse' : ''}`}>
                        <span className="text-2xl">{step.icon}</span>
                        <div className={isLeft ? 'lg:text-right' : ''}>
                          <span className={`text-xs font-mono ${step.accent} font-bold`}>Step {step.step}</span>
                          <h3 className="font-display font-bold text-white text-base">{step.title}</h3>
                        </div>
                      </div>
                      <p className={`text-gray-400 text-sm leading-relaxed ${isLeft ? 'lg:text-right' : ''}`}>
                        {step.description}
                      </p>
                    </div>
                  </div>

                  {/* Center dot — desktop */}
                  <div className={`hidden lg:flex absolute left-1/2 -translate-x-1/2 w-10 h-10 rounded-full bg-gradient-to-br ${step.color} border-2 border-white/20 items-center justify-center shadow-lg`}
                    style={{ top: `${(i / (processSteps.length - 1)) * 100}%`, transform: 'translateX(-50%) translateY(-50%)' }}
                  >
                    <span className="text-sm">{step.icon}</span>
                  </div>
                </motion.div>
              )
            })}
          </div>

          {/* Mobile: simple vertical */}
          <div className="lg:hidden">
            <div className="absolute left-5 top-0 bottom-0 w-px bg-gradient-to-b from-brand-500/40 to-transparent" />
          </div>
        </div>
      </div>
    </section>
  )
}
