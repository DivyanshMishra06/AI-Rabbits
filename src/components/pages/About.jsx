import { useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiCode, FiTarget, FiHeart, FiStar } from 'react-icons/fi'
import PageWrapper from '../ui/PageWrapper'
import CTA from '../sections/CTA'
import { technologies } from '../../data'

const skills = [
  { name: 'Frontend Development', level: 95, color: 'from-brand-500 to-cyan-400' },
  { name: 'Backend Development', level: 85, color: 'from-accent-500 to-purple-400' },
  { name: 'UI/UX Design', level: 80, color: 'from-pink-500 to-rose-400' },
  { name: 'Database Design', level: 85, color: 'from-emerald-500 to-teal-400' },
  { name: 'DevOps & Deployment', level: 75, color: 'from-orange-500 to-amber-400' },
  { name: 'API Development', level: 90, color: 'from-indigo-500 to-violet-400' },
]

function SkillBar({ skill, index, inView }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ delay: index * 0.1 }}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-sm font-body text-gray-300">{skill.name}</span>
        <span className="text-sm font-mono text-brand-400">{skill.level}%</span>
      </div>
      <div className="h-2 bg-white/[0.06] rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${skill.level}%` } : {}}
          transition={{ duration: 1.2, delay: 0.3 + index * 0.1, ease: 'easeOut' }}
          className={`h-full rounded-full bg-gradient-to-r ${skill.color}`}
        />
      </div>
    </motion.div>
  )
}

export default function About() {
  const skillsRef = useRef(null)
  const skillsInView = useInView(skillsRef, { once: true, margin: '-80px' })
  const techRef = useRef(null)
  const techInView = useInView(techRef, { once: true, margin: '-80px' })

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-96 h-96 bg-brand-500/[0.06] top-0 right-0" />
        <div className="orb w-80 h-80 bg-accent-500/[0.05] bottom-0 left-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Text */}
            <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
              <span className="tag mb-5 inline-block">About Me</span>
              <h1 className="font-display font-extrabold text-3xl sm:text-5xl text-white mb-6 leading-tight">
                Hi, I'm{' '}
                <span className="gradient-text">Divyansh</span> 👋
              </h1>
              <p className="text-gray-300 text-lg leading-relaxed mb-5">
                I'm a passionate full-stack developer with 3+ years of experience building premium digital products for businesses across India and worldwide.
              </p>
              <p className="text-gray-400 leading-relaxed mb-5">
                My journey started with a curiosity about how websites work. Today, I specialize in building modern, high-performance web applications using React, Node.js, and cutting-edge technologies.
              </p>
              <p className="text-gray-400 leading-relaxed">
                I believe great software is born at the intersection of clean code and thoughtful design. Every project I take on gets my full attention — from architecture to pixel-level detail.
              </p>
            </motion.div>

            {/* Profile card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex justify-center"
            >
              <div className="glass-card gradient-border p-8 max-w-sm w-full text-center">
                {/* Avatar */}
                <div className="w-28 h-28 rounded-3xl bg-gradient-to-br from-brand-500 to-accent-500 flex items-center justify-center mx-auto mb-5 shadow-2xl shadow-brand-500/30">
                  <FiCode className="w-14 h-14 text-white" />
                </div>
                <h2 className="font-display font-bold text-2xl text-white mb-1">Divyansh</h2>
                <p className="text-brand-400 text-sm font-mono mb-4">Full-Stack Developer</p>
                <div className="flex flex-wrap justify-center gap-2 mb-5">
                  {['React', 'Node.js', 'MongoDB'].map(t => (
                    <span key={t} className="tag text-xs">{t}</span>
                  ))}
                </div>
                <div className="grid grid-cols-3 gap-3 border-t border-white/[0.06] pt-5">
                  {[
                    { value: '3+', label: 'Years Exp.' },
                    { value: '50+', label: 'Projects' },
                    { value: '30+', label: 'Clients' },
                  ].map(s => (
                    <div key={s.label}>
                      <p className="font-display font-bold text-xl gradient-text">{s.value}</p>
                      <p className="text-gray-500 text-xs">{s.label}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission / Vision / Philosophy */}
      <section className="py-20 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: <FiTarget className="w-6 h-6 text-brand-400" />,
                title: 'Mission',
                text: 'To empower businesses with digital products that are not just functional, but transformative — helping them reach new heights online.',
                color: 'from-brand-500/10 to-cyan-500/10',
                border: 'border-brand-500/20',
              },
              {
                icon: <FiStar className="w-6 h-6 text-accent-400" />,
                title: 'Vision',
                text: 'To become the most trusted software development partner for growing businesses, known for exceptional quality and lasting partnerships.',
                color: 'from-accent-500/10 to-purple-500/10',
                border: 'border-accent-500/20',
              },
              {
                icon: <FiHeart className="w-6 h-6 text-pink-400" />,
                title: 'Philosophy',
                text: 'Every line of code should serve a purpose. Every pixel should have intent. Build with empathy, ship with confidence.',
                color: 'from-pink-500/10 to-rose-500/10',
                border: 'border-pink-500/20',
              },
            ].map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.15 }}
                className={`glass-card bg-gradient-to-br ${item.color} border ${item.border} p-6`}
              >
                <div className="mb-4">{item.icon}</div>
                <h3 className="font-display font-bold text-white text-lg mb-3">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.text}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section ref={skillsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={skillsInView ? { opacity: 1, x: 0 } : {}}
            >
              <span className="tag mb-4 inline-block">Expertise</span>
              <h2 className="section-title mb-4">
                Skills &{' '}
                <span className="gradient-text">Proficiency</span>
              </h2>
              <p className="section-subtitle mb-8">
                Continuously learning, constantly improving. Here's where I stand across different development domains.
              </p>
              <div className="space-y-5">
                {skills.map((skill, i) => (
                  <SkillBar key={skill.name} skill={skill} index={i} inView={skillsInView} />
                ))}
              </div>
            </motion.div>

            {/* Personal values */}
            <div className="grid grid-cols-2 gap-4">
              {[
                { emoji: '⚡', title: 'Speed Matters', desc: 'Fast delivery without compromising quality.' },
                { emoji: '💎', title: 'Quality First', desc: 'Production-grade code in every project.' },
                { emoji: '🤝', title: 'Transparency', desc: 'Regular updates, zero surprises.' },
                { emoji: '🚀', title: 'Growth Focus', desc: 'Built to scale with your business.' },
              ].map((val, i) => (
                <motion.div
                  key={val.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={skillsInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card gradient-border p-4"
                >
                  <div className="text-2xl mb-2">{val.emoji}</div>
                  <h4 className="font-display font-semibold text-white text-sm mb-1">{val.title}</h4>
                  <p className="text-gray-500 text-xs">{val.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Tech grid */}
      <section ref={techRef} className="py-20 bg-surface-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={techInView ? { opacity: 1, y: 0 } : {}}
            className="text-center mb-12"
          >
            <span className="tag mb-4 inline-block">Tech Stack</span>
            <h2 className="section-title mb-4">
              Technologies I{' '}
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
                className="glass-card gradient-border p-3 text-center group hover:bg-white/[0.06] hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <div className="text-2xl mb-1">{tech.icon}</div>
                <p className="text-gray-500 text-[10px] font-mono group-hover:text-gray-300 transition-colors">{tech.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA />
    </PageWrapper>
  )
}
