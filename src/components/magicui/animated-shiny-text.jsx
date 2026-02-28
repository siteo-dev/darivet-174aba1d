import { cn } from '@/lib/utils'

export function AnimatedShinyText({ children, className, shimmerWidth = 100, shimmerColor, ...props }) {
  const gradientStyle = shimmerColor
    ? { '--shiny-width': shimmerWidth + 'px', '--shimmer-color': shimmerColor }
    : { '--shiny-width': shimmerWidth + 'px' }
  return (
    <span
      style={gradientStyle}
      className={cn(
        !shimmerColor && 'text-neutral-600/70 dark:text-neutral-400/70',
        'mx-auto max-w-md',
        'animate-shiny-text [background-size:var(--shiny-width)_100%] bg-clip-text [background-position:0_0] bg-no-repeat [transition:background-position_1s_cubic-bezier(.6,.6,0,1)_infinite]',
        shimmerColor
          ? 'bg-gradient-to-r from-transparent via-[var(--shimmer-color)] via-50% to-transparent'
          : 'bg-gradient-to-r from-transparent via-black/80 via-50% to-transparent dark:via-white/80',
        className
      )}
      {...props}
    >
      {children}
    </span>
  )
}
