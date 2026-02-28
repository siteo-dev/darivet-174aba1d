import { cn } from '@/lib/utils'

export function BorderBeam({ className, size = 200, duration = 12, delay = 0, colorFrom = '#ffaa40', colorTo = '#9c40ff', borderWidth = 1.5 }) {
  return (
    <div
      className="pointer-events-none absolute inset-0 rounded-[inherit]"
      style={{
        overflow: 'hidden',
        padding: borderWidth + 'px',
        mask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
        WebkitMaskComposite: 'xor',
        maskComposite: 'exclude',
      }}
    >
      <div
        className={cn('absolute aspect-square animate-border-beam', className)}
        style={{
          width: size,
          offsetPath: 'rect(0 auto auto 0 round ' + size + 'px)',
          background: 'linear-gradient(to left, ' + colorFrom + ', ' + colorTo + ', transparent)',
          '--duration': duration,
          animationDelay: '-' + delay + 's',
        }}
      />
    </div>
  )
}
