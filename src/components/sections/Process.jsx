import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { processSteps } from '../../data'

export default function Process() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-[#F4F6F9]">
      <div className="absolute inset-x-0 top-0 section-divider-light" />
      <div className="absolute inset-x-0 bottom-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">How It Works</span>
          <h2 className="section-title mb-4">
            Our Development{' '}
            <span className="gradient-text">Process</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A transparent, structured methodology that delivers quality products on time and within budget — every time.
          </p>
        </motion.div>

        {/* Workflow image banner */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.3 }}
          className="relative rounded-2xl overflow-hidden mb-12 border border-gray-200 shadow-sm"
          style={{ height: '200px' }}
        >
          <img
            src="/images/process-workflow.jpg"
            alt="AI Rabbits development team at work"
            className="w-full h-full object-cover object-top"
          />
          <div
            className="absolute inset-0"
            style={{ background: 'linear-gradient(to right, rgba(244,246,249,0.97) 0%, rgba(244,246,249,0.80) 45%, rgba(244,246,249,0.10) 100%)' }}
          />
          <div className="absolute inset-0 flex items-center px-10">
            <div className="max-w-sm">
              <p className="text-brand-500 text-[11px] font-mono font-bold tracking-[0.18em] uppercase mb-2">
                Proven Methodology
              </p>
              <h3 className="font-display font-bold text-2xl text-gray-900 leading-tight mb-2">
                7-step process. Zero surprises.
              </h3>
              <p className="text-gray-600 text-sm leading-relaxed">
                Transparent, client-first delivery — from first call to post-launch support.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Step cards */}
        <div className="relative">
          {/* Connecting line desktop */}
          <div className="hidden lg:block absolute top-8 left-[10%] right-[10%] h-0.5 bg-gradient-to-r from-transparent via-brand-500/30 to-transparent" />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {processSteps.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: i * 0.12, duration: 0.5 }}
                className="glass-card p-5 relative group hover:-translate-y-1 transition-all duration-200 border-t-2"
                style={{ borderTopColor: i === 0 ? '#E31837' : 'rgba(227,24,55,0.25)' }}
              >
                {/* Step number */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/25 flex items-center justify-center">
                    <span className="font-mono font-bold text-sm text-brand-500">
                      {String(step.step).padStart(2, '0')}
                    </span>
                  </div>
                  <span className="text-2xl">{step.icon}</span>
                </div>

                <h3 className="font-display font-bold text-gray-900 text-sm mb-2">{step.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{step.description}</p>

                {/* Bottom accent line */}
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-500/0 via-brand-500/40 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-xl" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
