import { useState, useRef } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiCheck } from 'react-icons/fi'
import PageWrapper from '../ui/PageWrapper'
import CTA from '../sections/CTA'
import { projects } from '../../data'

const categories = ['All', 'Websites', 'Web Apps', 'Dashboards', 'E-Commerce']

function ProjectModal({ project, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 24 }}
        transition={{ type: 'spring', damping: 25 }}
        className="glass-card border border-white/10 max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar"
        onClick={e => e.stopPropagation()}
      >
        {/* Image area */}
        <div className={`h-56 bg-gradient-to-br ${project.color} flex items-center justify-center relative`}>
          <div className="w-56 h-36 bg-black/20 rounded-xl border border-white/10 backdrop-blur-sm p-3">
            <div className="flex gap-1 mb-2">
              <div className="w-2 h-2 rounded-full bg-red-400/60" />
              <div className="w-2 h-2 rounded-full bg-yellow-400/60" />
              <div className="w-2 h-2 rounded-full bg-green-400/60" />
            </div>
            <div className="space-y-1.5">
              <div className="h-2 bg-white/20 rounded-full w-3/4" />
              <div className="h-2 bg-white/10 rounded-full w-1/2" />
              <div className="h-12 bg-white/10 rounded-lg mt-2" />
            </div>
          </div>
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/30 backdrop-blur border border-white/10 text-white flex items-center justify-center hover:bg-black/50 transition-colors"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between mb-3">
            <span className="tag text-xs">{project.category}</span>
            <div className="flex gap-2">
              <a href={project.live} className="w-8 h-8 rounded-lg bg-brand-500/20 border border-brand-500/30 flex items-center justify-center text-brand-400 hover:bg-brand-500/30 transition-colors">
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={project.github} className="w-8 h-8 rounded-lg bg-white/[0.06] border border-white/[0.08] flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-colors">
                <FiGithub className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-white mb-3">{project.title}</h2>
          <p className="text-gray-400 leading-relaxed mb-6">{project.longDesc}</p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-3">Key Features</h4>
              <ul className="space-y-1.5">
                {project.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-400">
                    <FiCheck className="w-3.5 h-3.5 text-brand-400 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-white text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-brand-500/10 text-brand-400 border border-brand-500/20">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <a href={project.live} className="btn-primary flex items-center gap-2 flex-1 justify-center">
              <FiExternalLink className="w-4 h-4" />
              View Live
            </a>
            <a href={project.github} className="btn-secondary flex items-center gap-2 flex-1 justify-center">
              <FiGithub className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  )
}

function ProjectCard({ project, onClick, index }) {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-40px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onClick={() => onClick(project)}
      className="glass-card gradient-border overflow-hidden cursor-pointer group hover:-translate-y-2 transition-all duration-500"
    >
      <div className={`h-44 bg-gradient-to-br ${project.color} relative flex items-center justify-center`}>
        <div className="w-40 h-28 bg-black/20 rounded-xl border border-white/10 backdrop-blur-sm p-2.5">
          <div className="flex gap-1 mb-1.5">
            <div className="w-1.5 h-1.5 rounded-full bg-red-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-yellow-400/60" />
            <div className="w-1.5 h-1.5 rounded-full bg-green-400/60" />
          </div>
          <div className="space-y-1">
            <div className="h-1.5 bg-white/20 rounded-full w-3/4" />
            <div className="h-1.5 bg-white/10 rounded-full w-1/2" />
            <div className="h-9 bg-white/10 rounded mt-1.5" />
          </div>
        </div>
        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-display font-semibold">View Details →</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="tag text-[10px]">{project.category}</span>
          {project.featured && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-accent-500/20 text-accent-400 border border-accent-500/30">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-white mb-1.5">{project.title}</h3>
        <p className="text-gray-400 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/[0.06] text-gray-500 border border-white/[0.06]">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}

export default function Portfolio() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [selectedProject, setSelectedProject] = useState(null)

  const filtered = activeCategory === 'All'
    ? projects
    : projects.filter(p => p.category === activeCategory)

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="absolute inset-0 mesh-gradient" />
        <div className="orb w-96 h-96 bg-accent-500/[0.06] top-0 left-1/4" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Portfolio</span>
            <h1 className="font-display font-extrabold text-5xl sm:text-6xl text-white mb-6 leading-tight">
              Projects That{' '}
              <span className="gradient-text">Speak for Themselves</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Real solutions, real results. Explore my work across websites, web apps, dashboards, and e-commerce platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-xl text-sm font-display font-medium transition-all duration-300 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-lg shadow-brand-500/30'
                    : 'glass-card border border-white/[0.08] text-gray-400 hover:text-white hover:bg-white/[0.06]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            layout
            className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5"
          >
            <AnimatePresence>
              {filtered.map((project, i) => (
                <ProjectCard
                  key={project.id}
                  project={project}
                  index={i}
                  onClick={setSelectedProject}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
        )}
      </AnimatePresence>

      <CTA />
    </PageWrapper>
  )
}
