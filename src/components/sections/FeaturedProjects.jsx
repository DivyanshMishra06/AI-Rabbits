import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiGithub, FiExternalLink, FiArrowRight } from 'react-icons/fi'
import { projects } from '../../data'

const featured = projects.filter(p => p.featured)

function ProjectCard({ project, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.6 }}
      className="glass-card gradient-border overflow-hidden group hover:-translate-y-2 transition-transform duration-500"
    >
      {/* Project image / mockup area */}
      <div className={`h-52 bg-gradient-to-br ${project.color} relative overflow-hidden flex items-center justify-center`}>
        {/* Abstract mockup */}
        <div className="w-48 h-32 bg-black/20 rounded-xl border border-white/10 backdrop-blur-sm p-3">
          <div className="flex gap-1.5 mb-2">
            <div className="w-2 h-2 rounded-full bg-red-400/60" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
            <div className="w-2 h-2 rounded-full bg-green-400/60" />
          </div>
          <div className="space-y-1.5">
            <div className="h-2 bg-white/20 rounded-full w-3/4" />
            <div className="h-2 bg-white/10 rounded-full w-1/2" />
            <div className="h-8 bg-white/10 rounded-lg mt-2" />
            <div className="grid grid-cols-2 gap-1">
              <div className="h-5 bg-white/10 rounded" />
              <div className="h-5 bg-white/10 rounded" />
            </div>
          </div>
        </div>

        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3">
          <a href={project.live} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <FiExternalLink className="w-4 h-4" />
          </a>
          <a href={project.github} className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur border border-white/30 flex items-center justify-center text-white hover:bg-white/30 transition-colors">
            <FiGithub className="w-4 h-4" />
          </a>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-center justify-between mb-2">
          <span className="tag text-[10px]">{project.category}</span>
        </div>
        <h3 className="font-display font-bold text-lg text-white mb-2">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-4">{project.description}</p>

        {/* Features */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.features.slice(0, 3).map((f) => (
            <span key={f} className="text-[11px] px-2 py-0.5 rounded-full bg-white/[0.06] border border-white/[0.08] text-gray-400">
              {f}
            </span>
          ))}
        </div>

        {/* Tech stack */}
        <div className="flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
              {t}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 bg-surface-800/30 relative">
      <div className="orb w-80 h-80 bg-accent-500/[0.04] top-1/4 right-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="text-center mb-16"
        >
          <span className="tag mb-4 inline-block">Recent Work</span>
          <h2 className="section-title mb-4">
            Featured{' '}
            <span className="gradient-text">Projects</span>
          </h2>
          <p className="section-subtitle max-w-xl mx-auto">
            A selection of projects I'm proud of — each one solving a real business problem with elegant technology.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="text-center">
          <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2">
            View All Projects
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
