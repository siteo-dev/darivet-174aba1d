import { useEffect, useRef, useState } from 'react'
import { cn } from '@/lib/utils'

export function NumberTicker({ value, direction = 'up', delay = 0, className, decimalPlaces = 0, suffix = '', prefix = '', ...props }) {
  const ref = useRef(null)
  const [displayValue, setDisplayValue] = useState(direction === 'down' ? value : 0)
  const hasAnimated = useRef(false)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated.current) {
        hasAnimated.current = true
        setTimeout(() => {
          const start = direction === 'down' ? value : 0
          const end = direction === 'down' ? 0 : value
          const duration = 2000
          const startTime = performance.now()
          const tick = (now) => {
            const elapsed = now - startTime
            const progress = Math.min(elapsed / duration, 1)
            const eased = 1 - Math.pow(1 - progress, 4)
            const current = start + (end - start) * eased
            setDisplayValue(Number(current.toFixed(decimalPlaces)))
            if (progress < 1) requestAnimationFrame(tick)
          }
          requestAnimationFrame(tick)
        }, delay * 1000)
      }
    }, { threshold: 0.1 })
    observer.observe(el)
    return () => observer.disconnect()
  }, [value, direction, delay, decimalPlaces])

  return (
    <span ref={ref} className={cn('inline-block tabular-nums tracking-wider', className)} {...props}>
      {prefix}{Intl.NumberFormat('ro-RO').format(displayValue)}{suffix}
    </span>
  )
}
