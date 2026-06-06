import { useState, useEffect, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { testimonials } from '../../data'

export default function Testimonials() {
  const [current,   setCurrent]   = useState(0)
  const [direction, setDirection] = useState(1)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1)
      setCurrent(c => (c + 1) % testimonials.length)
    }, 6000)
    return () => clearInterval(timer)
  }, [])

  const prev = () => { setDirection(-1); setCurrent(c => (c - 1 + testimonials.length) % testimonials.length) }
  const next = () => { setDirection(1);  setCurrent(c => (c + 1) % testimonials.length) }
  const t = testimonials[current]

  return (
    <section ref={ref} className="py-24 relative bg-white">
      <div className="absolute inset-x-0 top-0 section-divider-light" />
      <div className="absolute inset-x-0 bottom-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-14"
        >
          <span className="tag mb-4 inline-block">Client Feedback</span>
          <h2 className="section-title mb-3">
            What Our Clients{' '}
            <span className="gradient-text">Say</span>
          </h2>
          <p className="section-subtitle">Trusted by businesses across India and worldwide</p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          {/* Testimonial card */}
          <div
            className="glass-card p-8 md:p-10 relative overflow-hidden mb-7 border-l-4"
            style={{ borderLeftColor: '#E31837' }}
          >
            {/* Large decorative quote */}
            <div
              className="absolute top-4 right-6 font-display font-black text-8xl leading-none select-none pointer-events-none"
              style={{ color: 'rgba(227,24,55,0.06)' }}
            >"</div>

            {/* Stars */}
            <div className="flex gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-sm">★</span>
              ))}
            </div>

            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                initial={{ opacity: 0, x: direction * 24 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -direction * 24 }}
                transition={{ duration: 0.35 }}
              >
                <blockquote className="text-gray-700 text-lg leading-relaxed mb-8 italic">
                  "{t.text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="w-11 h-11 rounded-xl overflow-hidden shrink-0 border border-gray-200 shadow-sm">
                    {t.avatarImg ? (
                      <img src={t.avatarImg} alt={t.name} className="w-full h-full object-cover" />
                    ) : (
                      <div className={`w-full h-full bg-gradient-to-br ${t.avatarColor} flex items-center justify-center text-white font-display font-bold text-sm`}>
                        {t.avatar}
                      </div>
                    )}
                  </div>
                  <div>
                    <p className="font-display font-semibold text-gray-900">{t.name}</p>
                    <p className="text-gray-500 text-sm">
                      {t.role} at{' '}
                      <span className="text-brand-500 font-medium">{t.company}</span>
                    </p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => { setDirection(i > current ? 1 : -1); setCurrent(i) }}
                  className={`transition-all duration-300 rounded-full ${
                    i === current ? 'w-8 h-2 bg-brand-500' : 'w-2 h-2 bg-gray-200 hover:bg-gray-300'
                  }`}
                />
              ))}
            </div>
            <div className="flex gap-2">
              <button
                onClick={prev}
                className="w-9 h-9 rounded-lg glass-card text-gray-600 hover:text-brand-500 hover:border-brand-500/40 transition-all flex items-center justify-center"
              >
                <FiChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={next}
                className="w-9 h-9 rounded-lg glass-card text-gray-600 hover:text-brand-500 hover:border-brand-500/40 transition-all flex items-center justify-center"
              >
                <FiChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
