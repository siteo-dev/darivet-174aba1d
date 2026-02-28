import { useState } from 'react'
import { Info, X, Zap, ArrowRight, Pencil, Headphones, Clock, MessageCircle, Server, Shield, Search, Gauge, Lock, Globe, Phone, Sparkles, Check, Minus, Loader2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Card, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Separator } from '@/components/ui/separator'
import { BorderBeam } from '@/components/magicui/border-beam'
import { ShimmerButton } from '@/components/magicui/shimmer-button'
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text'
import { DotPattern } from '@/components/magicui/dot-pattern'
import { cn } from '@/lib/utils'

const ACCENT = '#07bcd4'
const ACCENT_RGB = '7,188,212'
const CHECKOUT_URL = 'https://vnckxwbzbmtdqsvgrnfg.supabase.co/functions/v1/create-checkout?submission_id=174aba1d-e45a-418a-94ca-0fef74cabf77'

const features = [
  { label: 'Included monthly editing hours', starter: '2h edits included', growth: '4h edits included', icon: Pencil },
  { label: 'Extra editing hours', starter: '45€/hr', growth: '40€/hr', icon: Clock },
  { label: 'Support hours', starter: '10:00 - 18:00', growth: '24/7', icon: Headphones },
  { label: 'Response time', starter: 'Max 24h', growth: 'Priority', icon: Clock },
  { label: 'High-speed premium hosting', starter: 'Performant hosting', growth: true, icon: Server },
  { label: '24/7 security monitoring', starter: true, growth: true, icon: Shield },
  { label: 'SEO scan & health check', starter: true, growth: true, icon: Search },
  { label: 'SSL certificate included', starter: true, growth: true, icon: Lock },
  { label: 'Domain included', starter: true, growth: true, icon: Globe },
  { label: 'WhatsApp & direct calls', starter: false, growth: true, icon: MessageCircle },
  { label: 'Loading speed optimization', starter: false, growth: true, icon: Gauge },
]

function FeatureRow({ icon: Icon, label, value, included }) {
  const active = included !== false && value !== false
  return (
    <div className="flex items-center gap-2.5 sm:gap-3">
      <Icon className={cn("w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0", active ? "" : "text-zinc-600")} style={active ? { color: ACCENT } : undefined} />
      <span className={cn("text-sm sm:text-base", active ? "text-zinc-200" : "text-zinc-500")}>
        {typeof value === 'string' ? value : label}
      </span>
    </div>
  )
}

export default function DemoBanner() {
  const [modalOpen, setModalOpen] = useState(false)
  const [loadingPlan, setLoadingPlan] = useState(null)

  const handleCheckout = (plan) => {
    setLoadingPlan(plan)
    window.location.href = \`\${CHECKOUT_URL}&plan=\${plan}\`
  }

  return (
    <div className="dark">
      <div className="fixed left-1/2 -translate-x-1/2 overflow-hidden bottom-2 p-3 px-3 z-[99] bg-black/50 backdrop-blur-sm text-white/50 rounded-full flex items-center gap-2 max-w-[calc(100vw-1rem)]" style={{ borderRight: `2px solid ${ACCENT}` }}>
        <div className="absolute right-0 top-0 h-full w-40 rounded-l-full pointer-events-none" style={{ background: `linear-gradient(to left, rgba(${ACCENT_RGB},0.3), rgba(${ACCENT_RGB},0))` }} />
        <Info className="w-4 h-4 flex-shrink-0" />
        <span className="whitespace-nowrap hidden sm:inline">This is a demo. To work with us, check our offer</span>
        <span className="whitespace-nowrap sm:hidden text-sm">This is a demo.</span>
        <Button
          onClick={() => setModalOpen(true)}
          className="ml-2 rounded-full font-semibold transition-all ease-in-out hover:px-6 whitespace-nowrap relative z-10 text-sm sm:text-base"
          style={{ backgroundColor: ACCENT, color: '#000' }}
        >
          See offer
        </Button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          <div className="absolute inset-0 bg-black/70 backdrop-blur-md animate-fade-in" />
          <Card
            onClick={(e) => e.stopPropagation()}
            className="relative z-10 w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-3xl border-white/10 bg-zinc-950/80 backdrop-blur-2xl shadow-2xl animate-modal-in"
          >
            <div className="absolute top-0 left-0 w-72 h-72 rounded-full blur-[100px] pointer-events-none" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.2)` }} />
            <div className="absolute bottom-0 right-0 w-96 h-96 rounded-full blur-[120px] pointer-events-none" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.1)` }} />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setModalOpen(false)}
              className="absolute top-6 right-6 z-20 w-10 h-10 rounded-full bg-white/5 border border-white/10 text-zinc-400 hover:text-white hover:bg-white/10"
            >
              <X className="w-5 h-5" />
            </Button>
            <CardContent className="relative z-10 p-5 sm:p-10">
              <div className="mb-5 sm:mb-8">
                <Badge variant="outline" className="uppercase tracking-widest mb-4" style={{ backgroundColor: `rgba(${ACCENT_RGB}, 0.1)`, borderColor: `rgba(${ACCENT_RGB}, 0.2)`, color: ACCENT }}>
                  <Zap className="w-3.5 h-3.5 mr-2" />
                  Exclusive Offer
                </Badge>
                <h2 className="text-2xl sm:text-4xl font-bold text-white tracking-tight mb-3">
                  Premium Website at an
                  <span style={{ background: `linear-gradient(to right, ${ACCENT}, ${ACCENT})`, WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Unbeatable Price</span>
                </h2>
                <p className="text-base sm:text-lg text-zinc-400">
                  Everything you need for a professional online presence, at a fraction of the cost of a traditional agency.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-4 sm:gap-5 mb-5 sm:mb-8">
                <Card className="rounded-2xl border-white/10 bg-white/[0.02]">
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold text-zinc-500 uppercase tracking-wider mb-2">Starter</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">89&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-sm sm:text-base text-zinc-500 mb-4 sm:mb-5">199&euro; setup</div>
                    <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.starter} included={f.starter} />
                      ))}
                    </div>
                    <Button variant="outline" disabled={loadingPlan === 'starter'} onClick={() => handleCheckout('starter')} className="w-full h-11 rounded-full border-white/10 text-white hover:bg-white/5 mt-auto text-base font-semibold">
                      {loadingPlan === 'starter' ? <Loader2 className="w-5 h-5 animate-spin" /> : 'Choose Starter'}
                    </Button>
                  </CardContent>
                </Card>
                <Card className="rounded-2xl relative overflow-hidden" style={{ borderColor: `rgba(${ACCENT_RGB}, 0.3)`, backgroundColor: `rgba(${ACCENT_RGB}, 0.05)` }}>
                  <div className="absolute top-0 right-0 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-bl-xl" style={{ backgroundColor: ACCENT, color: '#000' }}>
                    Best seller
                  </div>
                  <CardContent className="p-4 sm:p-6 flex flex-col h-full">
                    <div className="text-xs font-semibold uppercase tracking-wider mb-2" style={{ color: ACCENT }}>Growth</div>
                    <div className="flex items-baseline gap-1 mb-1">
                      <span className="text-3xl sm:text-4xl font-black text-white">119&euro;</span>
                      <span className="text-zinc-500">/ month</span>
                    </div>
                    <div className="text-sm sm:text-base text-zinc-500 mb-4 sm:mb-5">199&euro; setup</div>
                    <div className="space-y-2.5 sm:space-y-3 mb-5 sm:mb-6">
                      {features.map((f) => (
                        <FeatureRow key={f.label} icon={f.icon} label={f.label} value={f.growth} included={f.growth} />
                      ))}
                    </div>
                    <ShimmerButton disabled={loadingPlan === 'growth'} onClick={() => handleCheckout('growth')} className="w-full h-11 font-semibold text-base mt-auto" background={ACCENT} shimmerColor="rgba(0,0,0,0.2)">
                      <span className="flex items-center gap-2" style={{ color: '#000' }}>
                        {loadingPlan === 'growth' ? <Loader2 className="w-5 h-5 animate-spin" /> : <>Choose Growth<ArrowRight className="w-5 h-5" /></>}
                      </span>
                    </ShimmerButton>
                  </CardContent>
                </Card>
              </div>
              <div className="relative rounded-2xl mb-5 sm:mb-8 overflow-hidden border border-white/[0.06]" style={{ background: `linear-gradient(135deg, rgba(${ACCENT_RGB},0.06) 0%, transparent 60%)` }}>
                <DotPattern className="[mask-image:radial-gradient(ellipse_at_center,white_10%,transparent_70%)]" cr={0.8} width={20} height={20} />
                <div className="relative z-10 flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-6">
                  <Sparkles className="w-5 h-5 flex-shrink-0 hidden sm:block" style={{ color: ACCENT }} />
                  <div className="flex-1 min-w-0 text-center sm:text-left">
                    <h3 className="text-sm font-semibold text-white">Need a custom complex website?</h3>
                    <p className="text-xs text-zinc-400 mt-0.5">Unique design, complex integrations, or advanced features — call us and let's talk.</p>
                  </div>
                  <a href="tel:+40757289370" className="flex-shrink-0">
                    <ShimmerButton className="text-sm" background="rgba(0,0,0,1)" shimmerColor={ACCENT}>
                      <span className="flex items-center gap-2 text-white whitespace-nowrap">
                        <Phone className="w-4 h-4" />
                        +40 757 289 370
                      </span>
                    </ShimmerButton>
                  </a>
                </div>
              </div>

              <Card className="rounded-2xl border-white/[0.06] bg-white/[0.02] mb-5 sm:mb-8 overflow-hidden">
                <CardContent className="p-0">
                  <div className="grid grid-cols-3 text-center text-xs font-semibold uppercase tracking-wider py-3 px-4 border-b border-white/5">
                    <div className="text-left text-zinc-500">Why choose<span style={{ color: ACCENT }}> us?</span></div>
                    <div className="text-zinc-500">Others</div>
                    <div style={{ color: ACCENT }}>With Us</div>
                  </div>
                  {[
                    { label: 'Setup cost', others: '800€+', us: '199€' },
                    { label: 'Monthly maintenance', others: '150€+', us: 'from 89€' },
                    { label: 'Included edits', others: false, us: true },
                    { label: 'Dedicated support', others: false, us: true },
                  ].map((row, i) => (
                    <div key={row.label} className={cn("grid grid-cols-3 items-center text-center py-3 px-4", i < 3 && "border-b border-white/5")}>
                      <div className="text-left text-sm text-zinc-400">{row.label}</div>
                      <div>
                        {typeof row.others === 'string' ? (
                          <span className="text-sm text-zinc-500 line-through decoration-red-400/50">{row.others}</span>
                        ) : (
                          <Minus className="w-4 h-4 text-zinc-600 mx-auto" />
                        )}
                      </div>
                      <div>
                        {typeof row.us === 'string' ? (
                          <span className="text-sm text-white font-semibold">{row.us}</span>
                        ) : (
                          <Check className="w-4 h-4 mx-auto" style={{ color: ACCENT }} />
                        )}
                      </div>
                    </div>
                  ))}
                  <div className="py-4 px-4 border-t border-white/5 flex justify-center">
                    <div className="inline-flex items-center rounded-full border border-emerald-500/20 bg-emerald-500/[0.06] px-4 py-1.5 backdrop-blur-sm">
                      <AnimatedShinyText className="text-sm font-semibold text-emerald-400" shimmerWidth={120} shimmerColor="rgba(167,243,208,0.9)">
                        You save 1,300€+ per year
                      </AnimatedShinyText>
                    </div>
                  </div>
                </CardContent>
              </Card>
              <div className="text-center">
                <p className="text-zinc-500 text-base">
                  Questions? Call us directly at{' '}
                  <Button variant="link" asChild className="p-0 h-auto font-medium" style={{ color: ACCENT }}>
                    <a href="tel:0746294445">0746 294 445</a>
                  </Button>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      )}

      <style>{`
        @keyframes fade-in { from { opacity: 0; } to { opacity: 1; } }
        @keyframes modal-in { from { opacity: 0; transform: scale(0.95) translateY(10px); } to { opacity: 1; transform: scale(1) translateY(0); } }
        .animate-fade-in { animation: fade-in 0.2s ease-out; }
        .animate-modal-in { animation: modal-in 0.3s cubic-bezier(0.16, 1, 0.3, 1); }
      `}</style>
    </div>
  )
}
