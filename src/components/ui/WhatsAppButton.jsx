import { motion } from 'framer-motion'
import { FaWhatsapp } from 'react-icons/fa'

export default function WhatsAppButton() {
  return (
    <motion.a
      href="https://wa.me/919876543210?text=Hi%20Divyansh!%20I%20want%20to%20discuss%20a%20project."
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 2, type: 'spring', stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-5 z-40 w-12 h-12 rounded-2xl bg-[#25d366] flex items-center justify-center shadow-lg shadow-[#25d366]/30 hover:shadow-[#25d366]/50 transition-shadow duration-300"
      aria-label="Chat on WhatsApp"
    >
      <FaWhatsapp className="w-6 h-6 text-white" />
      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-2xl bg-[#25d366] animate-ping opacity-20" />
    </motion.a>
  )
}
