import { cn } from '@/lib/utils'

export function ShineBorder({ borderWidth = 1, duration = 14, shineColor = '#000000', className, style, children, ...props }) {
  return (
    <div className={cn('relative rounded-lg', className)} {...props}>
      <div
        style={{
          '--border-width': borderWidth + 'px',
          '--duration': duration + 's',
          backgroundImage: 'radial-gradient(transparent,transparent, ' + (Array.isArray(shineColor) ? shineColor.join(',') : shineColor) + ',transparent,transparent)',
          backgroundSize: '300% 300%',
          mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
          padding: 'var(--border-width)',
          ...style,
        }}
        className="animate-shine pointer-events-none absolute inset-0 size-full rounded-[inherit] will-change-[background-position]"
      />
      {children}
    </div>
  )
}
