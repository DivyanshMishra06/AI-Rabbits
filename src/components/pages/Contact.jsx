import { useState, useRef } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { FiMail, FiPhone, FiMapPin, FiSend, FiCheck, FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi'
import { FaWhatsapp } from 'react-icons/fa'
import PageWrapper from '../ui/PageWrapper'

const projectTypes = [
  'Business Website', 'Landing Page', 'Web Application', 'E-Commerce Store',
  'SaaS Product', 'Dashboard / Admin Panel', 'Custom Software', 'Website Redesign', 'Other',
]

const budgets = [
  'Under ₹15,000', '₹15,000 – ₹30,000', '₹30,000 – ₹60,000',
  '₹60,000 – ₹1,00,000', 'Above ₹1,00,000', "Let's Discuss",
]

export default function Contact() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '', company: '', projectType: '', budget: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)

  const ref = useRef(null)
  const inView = useInView(ref, { once: true, margin: '-80px' })

  const validate = () => {
    const e = {}
    if (!form.name.trim()) e.name = 'Name is required'
    if (!form.email.trim()) e.email = 'Email is required'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Enter a valid email'
    if (!form.message.trim()) e.message = 'Message is required'
    return e
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setSubmitting(true)
    await new Promise(r => setTimeout(r, 1500))
    setSubmitting(false)
    setSubmitted(true)
  }

  const handleChange = (field, value) => {
    setForm(f => ({ ...f, [field]: value }))
    if (errors[field]) setErrors(e => ({ ...e, [field]: '' }))
  }

  const inputClass = (field) =>
    `w-full border ${errors[field] ? 'border-red-400' : 'border-gray-200'} rounded-lg px-4 py-3 text-gray-900 text-sm placeholder-gray-400 font-body focus:outline-none focus:border-brand-500 focus:ring-2 focus:ring-brand-500/15 transition-all duration-200 bg-white`

  return (
    <PageWrapper>
      {/* Hero */}
      <section className="relative pt-36 pb-16 overflow-hidden bg-[#F4F6F9] lg:pt-[calc(9rem+28px)]">
        <div className="absolute inset-x-0 bottom-0 section-divider-light" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }}>
            <span className="tag mb-5 inline-block">Get In Touch</span>
            <h1 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl text-gray-900 mb-6 leading-tight">
              Let's Build Something{' '}
              <span className="gradient-text">Amazing</span>
            </h1>
            <p className="text-gray-600 text-xl max-w-2xl mx-auto">
              Have a project in mind? We'd love to hear about it. Send us a message and our team will get back to you within 24 hours.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main content */}
      <section ref={ref} className="pb-24 pt-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-10">
            {/* Contact info */}
            <motion.div
              initial={{ opacity: 0, x: -24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              className="space-y-4"
            >
              {/* Contact cards */}
              {[
                {
                  icon: <FiMail className="w-5 h-5 text-brand-500" />,
                  label: 'Email',
                  value: 'divyansh@ai.com',
                  href: 'mailto:divyansh@ai.com',
                },
                {
                  icon: <FaWhatsapp className="w-5 h-5 text-emerald-600" />,
                  label: 'WhatsApp',
                  value: '+91 98765 43210',
                  href: 'https://wa.me/919876543210',
                },
                {
                  icon: <FiPhone className="w-5 h-5 text-purple-600" />,
                  label: 'Phone',
                  value: '+91 98765 43210',
                  href: 'tel:+919876543210',
                },
                {
                  icon: <FiMapPin className="w-5 h-5 text-orange-600" />,
                  label: 'Location',
                  value: 'India (Remote Worldwide)',
                  href: null,
                },
              ].map((contact) => (
                <div
                  key={contact.label}
                  className="glass-card p-4 flex items-center gap-4 shadow-sm border-l-4"
                  style={{ borderLeftColor: 'rgba(227,24,55,0.4)' }}
                >
                  <div className="w-10 h-10 rounded-lg bg-gray-50 border border-gray-200 flex items-center justify-center shrink-0">
                    {contact.icon}
                  </div>
                  <div>
                    <p className="text-gray-400 text-xs font-mono">{contact.label}</p>
                    {contact.href ? (
                      <a href={contact.href} className="text-gray-900 text-sm hover:text-brand-500 transition-colors font-medium">
                        {contact.value}
                      </a>
                    ) : (
                      <p className="text-gray-900 text-sm font-medium">{contact.value}</p>
                    )}
                  </div>
                </div>
              ))}

              {/* Availability */}
              <div className="glass-card p-5 shadow-sm">
                <div className="flex items-center gap-2 mb-3">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                  <span className="text-emerald-700 text-sm font-mono font-medium">Available for Projects</span>
                </div>
                <p className="text-gray-600 text-sm leading-relaxed">
                  We're currently accepting new projects. Typical response time is <strong className="text-gray-900">under 24 hours</strong>.
                </p>
              </div>

              {/* Social */}
              <div className="glass-card p-5 shadow-sm">
                <h3 className="font-display font-semibold text-gray-900 text-sm mb-4">Connect on Social</h3>
                <div className="flex gap-2">
                  {[
                    { icon: FiGithub,   href: '#', label: 'GitHub' },
                    { icon: FiLinkedin, href: '#', label: 'LinkedIn' },
                    { icon: FiTwitter,  href: '#', label: 'Twitter' },
                  ].map(({ icon: Icon, href, label }) => (
                    <a
                      key={label}
                      href={href}
                      aria-label={label}
                      className="flex-1 py-2.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-500 hover:bg-brand-500/8 hover:border-brand-500/30 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ delay: 0.1 }}
              className="lg:col-span-2"
            >
              {submitted ? (
                <motion.div
                  initial={{ scale: 0.9, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="glass-card p-10 text-center h-full flex flex-col items-center justify-center min-h-[400px] shadow-sm"
                >
                  <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 flex items-center justify-center mb-5">
                    <FiCheck className="w-8 h-8 text-emerald-600" />
                  </div>
                  <h3 className="font-display font-bold text-2xl text-gray-900 mb-3">Message Sent!</h3>
                  <p className="text-gray-600 leading-relaxed max-w-sm">
                    Thank you for reaching out! Our team will review your project details and get back to you within 24 hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',company:'',projectType:'',budget:'',message:'' }) }}
                    className="mt-6 btn-secondary text-sm"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="glass-card p-7 space-y-5 shadow-sm">
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Full Name *</label>
                      <input
                        type="text"
                        placeholder="John Doe"
                        value={form.name}
                        onChange={e => handleChange('name', e.target.value)}
                        className={inputClass('name')}
                      />
                      {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Email Address *</label>
                      <input
                        type="email"
                        placeholder="john@company.com"
                        value={form.email}
                        onChange={e => handleChange('email', e.target.value)}
                        className={inputClass('email')}
                      />
                      {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Phone Number</label>
                      <input
                        type="tel"
                        placeholder="+91 98765 43210"
                        value={form.phone}
                        onChange={e => handleChange('phone', e.target.value)}
                        className={inputClass('phone')}
                      />
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Company Name</label>
                      <input
                        type="text"
                        placeholder="Your Company"
                        value={form.company}
                        onChange={e => handleChange('company', e.target.value)}
                        className={inputClass('company')}
                      />
                    </div>
                  </div>

                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Project Type</label>
                      <select
                        value={form.projectType}
                        onChange={e => handleChange('projectType', e.target.value)}
                        className={`${inputClass('projectType')} appearance-none`}
                      >
                        <option value="">Select a type...</option>
                        {projectTypes.map(t => <option key={t} value={t}>{t}</option>)}
                      </select>
                    </div>
                    <div>
                      <label className="block text-gray-700 text-xs font-mono mb-1.5">Budget Range</label>
                      <select
                        value={form.budget}
                        onChange={e => handleChange('budget', e.target.value)}
                        className={`${inputClass('budget')} appearance-none`}
                      >
                        <option value="">Select budget...</option>
                        {budgets.map(b => <option key={b} value={b}>{b}</option>)}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-gray-700 text-xs font-mono mb-1.5">Project Details *</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us about your project — what you want to build, your goals, timeline, and any specific requirements..."
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      className={`${inputClass('message')} resize-none`}
                    />
                    {errors.message && <p className="text-red-500 text-xs mt-1">{errors.message}</p>}
                  </div>

                  <button
                    type="submit"
                    disabled={submitting}
                    className="btn-accent w-full flex items-center justify-center gap-2 py-4 text-base disabled:opacity-70 disabled:cursor-not-allowed"
                  >
                    {submitting ? (
                      <>
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full"
                        />
                        Sending...
                      </>
                    ) : (
                      <>
                        <FiSend className="w-4 h-4" />
                        Send Message
                      </>
                    )}
                  </button>

                  <p className="text-gray-400 text-xs text-center">
                    By submitting, you agree that we may contact you about your project. No spam, ever.
                  </p>
                </form>
              )}
            </motion.div>
          </div>
        </div>
      </section>
    </PageWrapper>
  )
}
