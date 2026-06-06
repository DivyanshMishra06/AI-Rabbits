import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiTarget, FiHeart, FiStar, FiUsers, FiGlobe, FiAward } from 'react-icons/fi'
import PageWrapper from '../ui/PageWrapper'
import CTA from '../sections/CTA'
import { technologies } from '../../data'

const expertise = [
  { name: 'Frontend Development', level: 95, color: 'bg-brand-500' },
  { name: 'Backend Development',  level: 88, color: 'bg-brand-600' },
  { name: 'UI/UX Design',         level: 82, color: 'bg-brand-500' },
  { name: 'Database Architecture',level: 85, color: 'bg-brand-600' },
  { name: 'DevOps & Cloud',       level: 78, color: 'bg-gray-700' },
  { name: 'API Development',      level: 92, color: 'bg-brand-500' },
]

const teamStats = [
  { icon: <FiUsers className="w-5 h-5" />, value: '15+', label: 'Team Members',     color: 'text-brand-500', bg: 'bg-brand-500/8',    border: 'border-brand-500/20' },
  { icon: <FiAward className="w-5 h-5" />, value: '50+', label: 'Projects Delivered', color: 'text-gray-700',  bg: 'bg-gray-100',      border: 'border-gray-200' },
  { icon: <FiGlobe className="w-5 h-5" />, value: '10+', label: 'Countries Served',  color: 'text-emerald-600', bg: 'bg-emerald-50',  border: 'border-emerald-200' },
]

function ExpertiseBar({ item, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-body text-gray-700">{item.name}</span>
        <span className="text-sm font-mono text-brand-500 font-semibold">{item.level}%</span>
      </div>
      <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${item.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full ${item.color}`}
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const expertiseRef = useRef(null)
  const expertiseInView = useInView(expertiseRef, { once: true, margin: '-80px' })
  const techRef = useRef(null)
  const techInView = useInView(techRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      {/* Hero — light, KPIT style */}
      <section className="relative pt-36 pb-20 overflow-hidden bg-[#F4F6F9] lg:pt-[calc(9rem+28px)]">
        <div className="absolute inset-x-0 bottom-0 section-divider-light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <span className="tag mb-5 inline-block">Who We Are</span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-gray-900 mb-6 leading-tight">
                Your Trusted{' '}
                <span className="gradient-text">IT Solutions Partner</span>
              </h1>
              <p className="text-gray-600 text-lg leading-relaxed mb-5">
                AI Rabbits is a professional IT company specializing in custom web development, SaaS platforms, and digital transformation for businesses across India and worldwide.
              </p>
              <p className="text-gray-500 leading-relaxed mb-5">
                Our team of experienced developers, designers, and strategists works together to deliver modern, high-performance digital products that help businesses grow and compete in the digital era.
              </p>
              <p className="text-gray-500 leading-relaxed">
                We believe great software lives at the intersection of clean code and thoughtful design. Every project we take on gets our full attention — from system architecture to pixel-level detail.
              </p>

              {/* Team stat chips */}
              <div className="flex flex-wrap gap-3 mt-8">
                {teamStats.map((s) => (
                  <div key={s.label} className={`flex items-center gap-2 px-4 py-2 rounded-xl ${s.bg} border ${s.border}`}>
                    <span className={s.color}>{s.icon}</span>
                    <span className={`font-display font-bold text-sm ${s.color}`}>{s.value}</span>
                    <span className="text-gray-500 text-xs">{s.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Company card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="glass-card overflow-hidden max-w-sm w-full shadow-lg">
                {/* Cover image */}
                <div className="relative h-44 overflow-hidden">
                  <img
                    src="/images/about-team-card.jpg"
                    alt="AI Rabbits team"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
                  <div className="absolute bottom-4 left-5">
                    <p className="text-white font-display font-bold text-lg leading-tight">AI Rabbits</p>
                    <p className="text-brand-300 text-sm font-mono">IT Solutions Company</p>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex flex-wrap gap-2 mb-5">
                    {['Web Development', 'SaaS', 'UI/UX Design', 'Cloud'].map(t => (
                      <span key={t} className="tag text-xs">{t}</span>
                    ))}
                  </div>
                  <div className="grid grid-cols-3 gap-3 border-t border-gray-100 pt-5">
                    {[
                      { value: '3+', label: 'Years Active' },
                      { value: '50+', label: 'Projects' },
                      { value: '30+', label: 'Clients' },
                    ].map(s => (
                      <div key={s.label} className="text-center">
                        <p className="font-display font-bold text-xl gradient-text">{s.value}</p>
                        <p className="text-gray-400 text-xs mt-0.5">{s.label}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FiTarget className="w-6 h-6 text-brand-500" />,
                title: 'Mission',
                text: 'To empower businesses with digital products that are not just functional, but transformative — helping them reach new heights online.',
                topBorder: '#E31837',
              },
              {
                icon: <FiStar className="w-6 h-6 text-gray-600" />,
                title: 'Vision',
                text: 'To become the most trusted software development partner for growing businesses, known for exceptional quality and lasting partnerships.',
                topBorder: '#374151',
              },
              {
                icon: <FiHeart className="w-6 h-6 text-pink-500" />,
                title: 'Philosophy',
                text: 'Every line of code should serve a purpose. Every pixel should have intent. We build with empathy, and ship with confidence.',
                topBorder: '#ec4899',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className="glass-card p-6 border-t-4"
                style={{ borderTopColor: item.topBorder }}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-gray-900 text-lg mb-3">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Wide team/office banner */}
      <section className="py-8 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-sm"
            style={{ height: '320px' }}
          >
            <img
              src="/images/about-team-banner.jpg"
              alt="AI Rabbits team at work"
              className="w-full h-full object-cover"
            />
            <div
              className="absolute inset-0"
              style={{ background: 'linear-gradient(to right, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)' }}
            />
            <div className="absolute inset-0 flex items-center px-10 lg:px-16">
              <div className="max-w-lg">
                <p className="text-brand-300 text-[11px] font-mono font-bold tracking-[0.2em] uppercase mb-3">
                  AI Rabbits · Est. 2021
                </p>
                <h3 className="font-display font-bold text-3xl md:text-4xl text-white leading-tight mb-4">
                  A team obsessed with<br />digital excellence
                </h3>
                <p className="text-white/70 text-base leading-relaxed">
                  15+ engineers, designers, and strategists — building products that make a lasting impact for businesses across India and worldwide.
                </p>
              </div>
            </div>
            {/* Floating stat badges */}
            <div className="absolute bottom-6 right-8 hidden md:flex gap-4">
              {[
                { v: '50+', l: 'Projects' },
                { v: '30+', l: 'Clients' },
                { v: '3+', l: 'Years' },
              ].map((s) => (
                <div
                  key={s.l}
                  className="text-center bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl px-5 py-3"
                >
                  <p className="font-display font-extrabold text-white text-xl leading-none">{s.v}</p>
                  <p className="text-white/60 text-xs font-mono mt-1">{s.l}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Expertise */}
      <section ref={expertiseRef} className="py-20 bg-[#F4F6F9]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={expertiseInView ? { opacity: 1, x: 0 } : {}}
            >
              <span className="tag mb-4 inline-block">Our Expertise</span>
              <h2 className="section-title mb-4">
                Skills &{' '}
                <span className="gradient-text">Proficiency</span>
              </h2>
              <p className="section-subtitle mb-8">
                Our team continuously learns and grows. Here's where we stand across different development domains.
              </p>
              <div className="space-y-5">
                {expertise.map((item, i) => (
                  <ExpertiseBar key={item.name} item={item} index={i} inView={expertiseInView} />
                ))}
              </div>
            </motion.div>

            {/* Company values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '⚡', title: 'Speed Matters',  desc: 'Fast delivery without compromising quality.' },
                { emoji: '💎', title: 'Quality First',  desc: 'Production-grade code in every project.' },
                { emoji: '🤝', title: 'Transparency',   desc: 'Regular updates, zero surprises.' },
                { emoji: '🚀', title: 'Growth Focus',   desc: 'Built to scale with your business.' },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={expertiseInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-4 shadow-sm"
                >
                  <div className="text-2xl mb-2">{val.emoji}</div>
                  <h4 className="font-display font-semibold text-gray-900 text-sm mb-1">{val.title}</h4>
                  <p className="text-gray-500 text-xs">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech grid */}
      <section ref={techRef} className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="tag mb-4 inline-block">Tech Stack</span>
            <h2 className="section-title mb-4">
              Technologies We{' '}
              <span className="gradient-text">Work With</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 lg:grid-cols-8 gap-3">
            {technologies.map((tech, i) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={techInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ delay: i * 0.05 }}
                className="glass-card p-3 text-center group hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-1">{tech.icon}</div>
                <p className="text-gray-400 text-[10px] font-mono group-hover:text-gray-700 transition-colors">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  )
}
