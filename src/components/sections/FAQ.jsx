import { useState, useRef } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import { FiPlus, FiMinus } from 'react-icons/fi'
import { Link } from 'react-router-dom'
import { faqs } from '../../data'

function FAQItem({ faq, index, isOpen, toggle }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      className={`glass-card overflow-hidden transition-all duration-200 ${isOpen ? 'border-l-4 shadow-sm' : ''}`}
      style={isOpen ? { borderLeftColor: '#E31837' } : {}}
    >
      <button
        onClick={toggle}
        className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
      >
        <span className={`font-display font-semibold text-sm pr-4 ${isOpen ? 'text-brand-500' : 'text-gray-800'}`}>
          {faq.question}
        </span>
        <div className={`w-7 h-7 rounded-lg shrink-0 flex items-center justify-center transition-colors ${
          isOpen ? 'bg-brand-500/10 text-brand-500' : 'bg-gray-100 text-gray-500'
        }`}>
          {isOpen ? <FiMinus className="w-3.5 h-3.5" /> : <FiPlus className="w-3.5 h-3.5" />}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.28, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-5 pt-1 border-t border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0)
  const ref    = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  return (
    <section ref={ref} className="py-24 relative bg-white">
      <div className="absolute inset-x-0 top-0 section-divider-light" />
      <div className="absolute inset-x-0 bottom-0 section-divider-light" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-start">

          {/* Left */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="tag mb-4 inline-block">Got Questions?</span>
            <h2 className="section-title mb-5">
              Frequently Asked{' '}
              <span className="gradient-text">Questions</span>
            </h2>
            <p className="section-subtitle mb-8">
              Everything you need to know before starting your project. Can't find an answer? Reach out to us directly.
            </p>
            <Link to="/contact" className="btn-primary inline-flex items-center gap-2">
              Ask a Question
            </Link>
          </motion.div>

          {/* Right */}
          <motion.div
            initial={{ opacity: 0, x: 24 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="space-y-2"
          >
            {faqs.map((faq, i) => (
              <FAQItem
                key={i}
                faq={faq}
                index={i}
                isOpen={openIndex === i}
                toggle={() => setOpenIndex(openIndex === i ? -1 : i)}
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
