import { Link } from 'react-router-dom'
import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { FiArrowRight, FiExternalLink } from 'react-icons/fi'
import { projects } from '../../data'

const featured = projects.filter(p => p.featured)

function ProjectCard({ project, index }) {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 32 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.55 }}
      className="glass-card overflow-hidden group hover:-translate-y-1 transition-all duration-300"
    >
      {/* Image */}
      <div className="h-48 relative overflow-hidden">
        {project.image ? (
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className={`w-full h-full bg-gradient-to-br ${project.color}`} />
        )}
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/25 group-hover:bg-black/15 transition-colors duration-300" />
        {/* Category badge */}
        <div className="absolute top-3 left-3">
          <span className="text-[10px] font-mono font-bold uppercase tracking-[0.12em] px-2.5 py-1 rounded bg-white/90 text-gray-800 shadow-sm">
            {project.category}
          </span>
        </div>
        {/* Live link */}
        <a
          href={project.live}
          className="absolute top-3 right-3 w-8 h-8 rounded-lg bg-white/90 border border-white/50 flex items-center justify-center text-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 hover:bg-white shadow-sm"
        >
          <FiExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-display font-bold text-base text-gray-900 mb-2">{project.title}</h3>
        <p className="text-gray-600 text-sm leading-relaxed mb-4 line-clamp-2">{project.description}</p>

        {/* Tech chips */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-gray-100 text-gray-600 border border-gray-200">
              {t}
            </span>
          ))}
        </div>

        {project.slug && (
          <Link
            to={`/case-study/${project.slug}`}
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-brand-500 hover:text-brand-600 transition-colors group/cs"
          >
            Read Case Study
            <FiArrowRight className="w-3 h-3 group-hover/cs:translate-x-0.5 transition-transform" />
          </Link>
        )}
      </div>
    </motion.div>
  )
}

export default function FeaturedProjects() {
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-[#F4F6F9]">
      <div className="absolute inset-x-0 top-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14"
        >
          <div>
            <span className="tag mb-4 inline-block">Recent Work</span>
            <h2 className="section-title mb-3">
              Featured{' '}
              <span className="gradient-text">Projects</span>
            </h2>
            <p className="section-subtitle max-w-lg">
              Real solutions for real businesses — each project solving a measurable problem with precision engineering.
            </p>
          </div>
          <Link to="/portfolio" className="btn-secondary inline-flex items-center gap-2 shrink-0 self-start md:self-auto">
            View All Work
            <FiArrowRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
