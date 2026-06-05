import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight, FiCalendar, FiCheck } from 'react-icons/fi'

const trust = [
  'Free consultation',
  'No hidden charges',
  'Response within 24h',
  '30-day post-launch support',
]

export default function CTA() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 aurora-bg opacity-70" />
      <div className="orb w-[650px] h-[450px] bg-brand-500/[0.09] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2" />
      <div className="orb w-[350px] h-[350px] bg-accent-500/[0.07] -top-20 right-[-5%]" />
      <div className="orb w-[280px] h-[280px] bg-rose-500/[0.05] bottom-0 -left-10" />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: 'radial-gradient(circle, rgba(56,189,248,0.9) 1px, transparent 1px)',
          backgroundSize: '36px 36px',
          maskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 80% 80% at 50% 50%, black 30%, transparent 100%)',
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 32 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
        >
          {/* Glass card wrapper */}
          <div className="glass-card gradient-border p-8 sm:p-12 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-brand-500/[0.04] to-accent-500/[0.04] rounded-2xl" />
            <div className="relative z-10">

              <span className="tag mb-6 inline-block">Let's Build Together</span>

              <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-6xl text-white leading-tight mb-6">
                Ready to Build Your{' '}
                <span className="gradient-text">Next Digital Product?</span>
              </h2>

              <p className="text-gray-400 text-lg sm:text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
                Let's turn your idea into a professional website or web application. Book a free 30-minute consultation — no strings attached.
              </p>

              {/* CTA buttons */}
              <div className="flex flex-wrap gap-4 justify-center mb-10">
                <Link
                  to="/contact"
                  className="btn-primary flex items-center gap-2.5 px-8 py-4 text-base"
                >
                  <FiCalendar className="w-5 h-5" />
                  Book Free Consultation
                </Link>
                <Link
                  to="/portfolio"
                  className="btn-secondary flex items-center gap-2.5 px-8 py-4 text-base"
                >
                  View Portfolio
                  <FiArrowRight className="w-5 h-5" />
                </Link>
              </div>

              {/* Trust signals */}
              <div className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
                {trust.map((item) => (
                  <span key={item} className="flex items-center gap-1.5 text-sm text-gray-400">
                    <span className="w-4 h-4 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center shrink-0">
                      <FiCheck className="w-2.5 h-2.5 text-emerald-400" />
                    </span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
