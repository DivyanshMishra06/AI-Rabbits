// ScrollProgress.jsx
import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight
      const prog = totalHeight > 0 ? (window.scrollY / totalHeight) * 100 : 0
      setProgress(prog)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <div
      id="scroll-progress"
      style={{ width: `${progress}%` }}
    />
  )
}
