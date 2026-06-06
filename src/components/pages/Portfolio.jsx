import { useState, useRef } from 'react'
import { Link } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiGithub, FiExternalLink, FiX, FiCheck, FiArrowRight } from 'react-icons/fi'
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.9, y: 24 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 24 }}
        transition={{ type: 'spring', damping: 25 }}
        className="glass-card max-w-2xl w-full max-h-[90vh] overflow-y-auto no-scrollbar border-l-4 shadow-2xl"
        style={{ borderLeftColor: '#E31837' }}
        onClick={e => e.stopPropagation()}
      >
        {/* Image area */}
        <div className="h-56 relative overflow-hidden rounded-t-xl">
          {project.image ? (
            <img src={project.image} alt={project.title} className="w-full h-full object-cover" />
          ) : (
            <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
          )}
          <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-40`} />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-white/90 border border-white/50 text-gray-700 flex items-center justify-center hover:bg-white transition-colors z-10 shadow-sm"
          >
            <FiX className="w-4 h-4" />
          </button>
        </div>

        <div className="p-7">
          <div className="flex items-center justify-between mb-3">
            <span className="tag text-xs">{project.category}</span>
            <div className="flex gap-2">
              <a href={project.live} className="w-8 h-8 rounded-lg bg-brand-500/10 border border-brand-500/20 flex items-center justify-center text-brand-500 hover:bg-brand-500/20 transition-colors">
                <FiExternalLink className="w-3.5 h-3.5" />
              </a>
              <a href={project.github} className="w-8 h-8 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-gray-900 hover:bg-gray-200 transition-colors">
                <FiGithub className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <h2 className="font-display font-bold text-2xl text-gray-900 mb-3">{project.title}</h2>
          <p className="text-gray-600 leading-relaxed mb-6">{project.longDesc}</p>

          <div className="grid grid-cols-2 gap-6 mb-6">
            <div>
              <h4 className="font-display font-semibold text-gray-900 text-sm mb-3">Key Features</h4>
              <ul className="space-y-1.5">
                {project.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-sm text-gray-600">
                    <FiCheck className="w-3.5 h-3.5 text-brand-500 shrink-0" />
                    {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-display font-semibold text-gray-900 text-sm mb-3">Tech Stack</h4>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.map(t => (
                  <span key={t} className="text-[11px] font-mono px-2 py-1 rounded-md bg-gray-100 text-gray-600 border border-gray-200">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            {project.slug && (
              <Link
                to={`/case-study/${project.slug}`}
                className="btn-primary flex items-center gap-2 justify-center w-full"
              >
                Read Full Case Study
                <FiArrowRight className="w-4 h-4" />
              </Link>
            )}
            <div className="flex gap-3">
              <a href={project.live} className="btn-secondary flex items-center gap-2 flex-1 justify-center">
                <FiExternalLink className="w-4 h-4" />
                View Live
              </a>
              <a href={project.github} className="flex items-center gap-2 flex-1 justify-center px-6 py-3 font-display font-semibold text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:border-gray-300 transition-all duration-200">
                <FiGithub className="w-4 h-4" />
                GitHub
              </a>
            </div>
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
      className="glass-card overflow-hidden cursor-pointer group hover:-translate-y-1 transition-all duration-300 shadow-sm hover:shadow-md"
    >
      <div className="h-44 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
        )}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.color} opacity-30`} />
        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="text-white text-sm font-display font-semibold bg-brand-500 px-4 py-1.5 rounded-full">View Details →</span>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-center justify-between mb-2">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] text-brand-500 bg-brand-500/8 px-2.5 py-0.5 rounded border border-brand-500/15">
            {project.category}
          </span>
          {project.featured && (
            <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-amber-50 text-amber-700 border border-amber-200">
              Featured
            </span>
          )}
        </div>
        <h3 className="font-display font-bold text-gray-900 mb-1.5">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-3 line-clamp-2">{project.description}</p>
        <div className="flex flex-wrap gap-1 mb-3">
          {project.tech.slice(0, 3).map(t => (
            <span key={t} className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200">
              {t}
            </span>
          ))}
          {project.tech.length > 3 && (
            <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-gray-100 text-gray-500 border border-gray-200">
              +{project.tech.length - 3}
            </span>
          )}
        </div>
        {project.slug && (
          <Link
            to={`/case-study/${project.slug}`}
            onClick={e => e.stopPropagation()}
            className="inline-flex items-center gap-1 text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors group/cs"
          >
            Case Study
            <FiArrowRight className="w-3 h-3 group-hover/cs:translate-x-0.5 transition-transform" />
          </Link>
        )}
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
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#F4F6F9] lg:pt-[calc(9rem+28px)]">
        <div className="absolute inset-x-0 bottom-0 section-divider-light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Portfolio</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Projects That{' '}
              <span className="gradient-text">Speak for Themselves</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto leading-relaxed">
              Real solutions, real results. Explore our work across websites, web apps, dashboards, and e-commerce platforms.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter */}
      <section className="py-6 bg-white border-b border-gray-100 sticky top-[56px] lg:top-[calc(64px+28px)] z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-display font-medium transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-brand-500 text-white shadow-sm shadow-brand-500/25'
                    : 'bg-gray-100 text-gray-600 hover:text-gray-900 hover:bg-gray-200 border border-gray-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="pb-24 pt-8 bg-white">
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
