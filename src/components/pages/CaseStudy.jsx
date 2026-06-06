import { useParams, Link, Navigate } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef, useEffect, useState } from 'react'
import { FiArrowLeft, FiArrowRight, FiClock, FiUsers, FiBriefcase, FiCheck } from 'react-icons/fi'
import PageWrapper from '../ui/PageWrapper'
import { projects, testimonials } from '../../data'

function AnimatedNumber({ value, duration = 1.5 }) {
  const [display, setDisplay] = useState('0')
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const numeric = parseFloat(value.replace(/[^0-9.]/g, ''))
    const prefix = value.match(/^[^0-9]*/)?.[0] ?? ''
    const suffix = value.match(/[^0-9.]*$/)?.[0] ?? ''
    if (isNaN(numeric)) { setDisplay(value); return }

    const steps = 50
    const interval = (duration * 1000) / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      const progress = step / steps
      const eased = 1 - Math.pow(1 - progress, 3)
      const current = numeric * eased
      const formatted = Number.isInteger(numeric) ? Math.round(current) : current.toFixed(1)
      setDisplay(`${prefix}${formatted}${suffix}`)
      if (step >= steps) { setDisplay(value); clearInterval(timer) }
    }, interval)
    return () => clearInterval(timer)
  }, [inView, value, duration])

  return <span ref={ref}>{display}</span>
}

function ProcessStep({ step, index, total }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })
  const isLast = index === total - 1

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.12, duration: 0.5 }}
      className="relative flex gap-5"
    >
      {!isLast && (
        <div className="absolute left-5 top-10 bottom-0 w-px bg-gradient-to-b from-brand-500/40 to-transparent" />
      )}
      <div className="shrink-0 w-10 h-10 rounded-full bg-brand-500/10 border border-brand-500/30 flex items-center justify-center z-10">
        <span className="font-mono text-xs font-bold text-brand-500">{String(index + 1).padStart(2, '0')}</span>
      </div>
      <div className="pb-10 flex-1">
        <div className="flex flex-wrap items-center gap-3 mb-2">
          <h4 className="font-display font-bold text-gray-900">{step.phase}</h4>
          <span className="inline-flex items-center gap-1 text-[11px] font-mono px-2 py-0.5 rounded-full bg-gray-100 border border-gray-200 text-gray-500">
            <FiClock className="w-3 h-3" />
            {step.duration}
          </span>
        </div>
        <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
      </div>
    </motion.div>
  )
}

export default function CaseStudy() {
  const { slug } = useParams()
  const project = projects.find(p => p.slug === slug)

  if (!project || !project.caseStudy) return <Navigate to="/portfolio" replace />

  const cs = project.caseStudy
  const testimonial = cs.testimonialId != null
    ? testimonials.find(t => t.id === cs.testimonialId)
    : null

  const related = projects
    .filter(p => p.id !== project.id && (p.category === project.category || p.featured))
    .slice(0, 3)

  const heroRef = useRef(null)
  const inViewHero = useInView(heroRef, { once: true })

  return (
    <PageWrapper>
      {/* Hero — dark with project image */}
      <section className="relative pt-28 pb-0 overflow-hidden min-h-[60vh] flex flex-col justify-end lg:pt-[calc(7rem+28px)]">
        <div className="absolute inset-0">
          <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-60`} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0F] via-[#0A0A0F]/70 to-[#0A0A0F]/20" />
        </div>

        <div ref={heroRef} className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
          <motion.div
            initial={{ opacity: 0, x: -16 }}
            animate={inViewHero ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.5 }}
            className="mb-8"
          >
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
            >
              <FiArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
              Back to Portfolio
            </Link>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={inViewHero ? { opacity: 1, y: 0 } : {}}
            transition={{ delay: 0.1, duration: 0.6 }}
          >
            <span className="tag mb-4 inline-block">{project.category} · Case Study</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-white mb-4 leading-tight max-w-3xl">
              {project.title}
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl leading-relaxed mb-8">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                { icon: FiBriefcase, label: 'Client',   value: cs.client },
                { icon: FiUsers,     label: 'Industry', value: cs.industry },
                { icon: FiClock,     label: 'Timeline', value: cs.timeline },
                { icon: FiUsers,     label: 'Team',     value: cs.teamSize },
              ].map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/[0.08] backdrop-blur border border-white/10 text-sm">
                  <Icon className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                  <span className="text-gray-400">{label}:</span>
                  <span className="text-white font-medium">{value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results bar — light */}
      <section className="py-12 bg-[#F4F6F9] border-y border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
            {cs.results.map((r, i) => (
              <motion.div
                key={r.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="text-center"
              >
                <div className="text-3xl mb-2">{r.icon}</div>
                <div className="font-display font-extrabold text-3xl sm:text-4xl mb-1 text-brand-500">
                  <AnimatedNumber value={r.metric} />
                </div>
                <p className="text-gray-500 text-sm">{r.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Main content — light */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-3 gap-16">

            {/* Left: main story */}
            <div className="lg:col-span-2 space-y-16">

              {/* Overview */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="tag mb-4 inline-block">Overview</span>
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">About the Project</h2>
                <p className="text-gray-600 leading-relaxed text-base">{cs.overview}</p>
              </motion.section>

              {/* Problem */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="tag mb-4 inline-block">The Challenge</span>
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">The Problem We Had to Solve</h2>
                <div className="glass-card p-6 border-l-4 shadow-sm" style={{ borderLeftColor: '#E31837' }}>
                  <p className="text-gray-600 leading-relaxed text-base">{cs.problem}</p>
                </div>
              </motion.section>

              {/* Solution */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="tag mb-4 inline-block">Our Approach</span>
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-4">How We Solved It</h2>
                <div className="glass-card p-6 border-l-4 shadow-sm" style={{ borderLeftColor: '#22c55e' }}>
                  <p className="text-gray-600 leading-relaxed text-base">{cs.solution}</p>
                </div>
              </motion.section>

              {/* Process timeline */}
              <motion.section
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <span className="tag mb-4 inline-block">Process</span>
                <h2 className="font-display font-bold text-2xl text-gray-900 mb-8">How We Worked</h2>
                <div>
                  {cs.process.map((step, i) => (
                    <ProcessStep key={step.phase} step={step} index={i} total={cs.process.length} />
                  ))}
                </div>
              </motion.section>

              {/* Testimonial */}
              {testimonial && (
                <motion.section
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span className="tag mb-4 inline-block">Client Feedback</span>
                  <h2 className="font-display font-bold text-2xl text-gray-900 mb-6">What the Client Said</h2>
                  <div className="glass-card p-7 relative overflow-hidden shadow-sm border-l-4" style={{ borderLeftColor: '#E31837' }}>
                    <p className="text-lg text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.text}"
                    </p>
                    <div className="flex items-center gap-4">
                      {testimonial.avatarImg ? (
                        <img src={testimonial.avatarImg} alt={testimonial.name} className="w-12 h-12 rounded-xl object-cover ring-2 ring-gray-200" />
                      ) : (
                        <div className="w-12 h-12 rounded-xl bg-brand-500/10 flex items-center justify-center font-bold text-brand-500">
                          {(testimonial.name || testimonial.author || '?')[0]}
                        </div>
                      )}
                      <div>
                        <p className="font-display font-bold text-gray-900">{testimonial.name || testimonial.author}</p>
                        <p className="text-sm text-gray-500">{testimonial.role}</p>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {Array.from({ length: 5 }).map((_, j) => (
                          <span key={j} className="text-yellow-400 text-sm">★</span>
                        ))}
                      </div>
                    </div>
                  </div>
                </motion.section>
              )}
            </div>

            {/* Right: sidebar */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card p-6 sticky top-[80px] lg:top-[calc(80px+28px)] shadow-sm border-t-4"
                style={{ borderTopColor: '#E31837' }}
              >
                <h3 className="font-display font-bold text-gray-900 mb-4">Tech Stack</h3>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map(t => (
                    <span key={t} className="text-[11px] font-mono px-2.5 py-1 rounded-md bg-brand-500/8 text-brand-500 border border-brand-500/20">
                      {t}
                    </span>
                  ))}
                </div>

                <h3 className="font-display font-bold text-gray-900 mb-4">Key Deliverables</h3>
                <ul className="space-y-2 mb-6">
                  {project.features.map(f => (
                    <li key={f} className="flex items-center gap-2.5 text-sm text-gray-600">
                      <div className="w-4 h-4 rounded-full bg-brand-500/10 flex items-center justify-center shrink-0">
                        <FiCheck className="w-2.5 h-2.5 text-brand-500" />
                      </div>
                      {f}
                    </li>
                  ))}
                </ul>

                <div className="pt-4 border-t border-gray-100 flex flex-col gap-3">
                  <Link to="/contact" className="btn-primary w-full text-center justify-center">
                    Start a Similar Project
                  </Link>
                  <Link to="/portfolio" className="btn-secondary w-full text-center justify-center">
                    View All Projects
                  </Link>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Related Projects */}
          {related.length > 0 && (
            <motion.section
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-24 pt-16 border-t border-gray-200"
            >
              <div className="flex items-center justify-between mb-10">
                <div>
                  <span className="tag mb-3 inline-block">More Work</span>
                  <h2 className="font-display font-bold text-2xl text-gray-900">Related Projects</h2>
                </div>
                <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 text-sm shrink-0">
                  View All
                  <FiArrowRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {related.map((rel, i) => (
                  <motion.div
                    key={rel.id}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300 shadow-sm"
                  >
                    <div className="h-36 relative overflow-hidden">
                      <img src={rel.image} alt={rel.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                      <div className={`absolute inset-0 bg-gradient-to-br ${rel.color} opacity-40`} />
                    </div>
                    <div className="p-5">
                      <span className="tag text-[10px] mb-2 inline-block">{rel.category}</span>
                      <h4 className="font-display font-bold text-gray-900 mb-1">{rel.title}</h4>
                      <p className="text-gray-500 text-xs line-clamp-2 mb-3">{rel.description}</p>
                      {rel.slug && (
                        <Link
                          to={`/case-study/${rel.slug}`}
                          className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors"
                        >
                          Read Case Study
                          <FiArrowRight className="w-3 h-3" />
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
        </div>
      </div>
    </PageWrapper>
  )
}
