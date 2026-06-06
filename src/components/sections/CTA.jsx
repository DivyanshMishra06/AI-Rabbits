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
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative overflow-hidden bg-[#0A0A0F]">
      {/* Professional background image */}
      <div className="absolute inset-0">
        <img
          src="/images/cta-office.jpg"
          alt=""
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#0A0A0F]/90" />
      </div>

      {/* Red geometric grid */}
      <div className="absolute inset-0 grid-pattern opacity-40" />

      {/* Radial red glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 50%, rgba(227,24,55,0.07) 0%, transparent 70%)' }}
      />

      {/* Top divider */}
      <div className="absolute inset-x-0 top-0 section-divider" />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="tag mb-6 inline-block">Let's Build Together</span>

          <h2 className="font-display font-extrabold text-4xl sm:text-5xl md:text-[3.2rem] text-white leading-tight tracking-tight mb-5">
            Ready to Build Your{' '}
            <span className="text-brand-400">Next Digital Product?</span>
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-2xl mx-auto">
            Let's turn your idea into a professional web application or enterprise platform. Our team offers a free 30-minute consultation — no strings attached.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap gap-4 justify-center mb-10">
            <Link to="/contact" className="btn-accent flex items-center gap-2.5 px-8 py-4 text-base shadow-lg shadow-brand-500/25">
              <FiCalendar className="w-5 h-5" />
              Book Free Consultation
            </Link>
            <Link
              to="/portfolio"
              className="flex items-center gap-2.5 px-8 py-4 text-base font-display font-semibold rounded-lg border border-white/20 text-white hover:bg-white/8 hover:border-white/35 transition-all duration-200"
            >
              View Our Work
              <FiArrowRight className="w-5 h-5" />
            </Link>
          </div>

          {/* Trust signals */}
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            {trust.map((item) => (
              <span key={item} className="flex items-center gap-2 text-sm text-gray-400">
                <FiCheck className="w-4 h-4 text-brand-400 shrink-0" />
                {item}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
