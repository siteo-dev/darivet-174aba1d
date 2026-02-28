import { useState, useEffect, useRef } from 'react';
import { Menu, X, Shield, Award, Users, Clock, Star, Phone, Mail, MapPin, Instagram, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from '@/components/ui/accordion';
import { Avatar, AvatarImage, AvatarFallback } from '@/components/ui/avatar';
import { Marquee } from '@/components/magicui/marquee';
import { NumberTicker } from '@/components/magicui/number-ticker';
import { BorderBeam } from '@/components/magicui/border-beam';
import { ShimmerButton } from '@/components/magicui/shimmer-button';
import { ShineBorder } from '@/components/magicui/shine-border';
import { AnimatedShinyText } from '@/components/magicui/animated-shiny-text';
import { DotPattern } from '@/components/magicui/dot-pattern';
import { BentoCard, BentoGrid } from '@/components/magicui/bento-grid';
import { ProgressiveBlur } from '@/components/magicui/progressive-blur';
import LightRays from './LightRays';
import DemoBanner from './DemoBanner';
import { cn } from '@/lib/utils';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  const navLinks = [
    { id: 'hero', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'why-us', label: 'Why Us' },
    { id: 'reviews', label: 'Reviews' },
    { id: 'faq', label: 'FAQ' },
    { id: 'contact', label: 'Contact' }
  ];

  const stats = [
    { value: 500, suffix: '+', label: 'Happy Pets' },
    { value: 5, suffix: '', label: 'Years Experience' },
    { value: 100, suffix: '%', label: 'Satisfaction Guarantee' },
    { value: 24, suffix: '/7', label: 'Support' }
  ];

  const whyUsFeatures = [
    {
      Icon: Shield,
      name: "Expert Care",
      description: "Our certified veterinarians provide professional treatments with attention to detail and safety.",
      className: "col-span-3 lg:col-span-1",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent" />
    },
    {
      Icon: Award,
      name: "Quality Standards",
      description: "We maintain the highest standards in pet health services with regular quality checks.",
      className: "col-span-3 lg:col-span-2",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    },
    {
      Icon: Users,
      name: "Customer Focus",
      description: "Over 500 pets have been treated by our team, all with positive feedback and results.",
      className: "col-span-3 lg:col-span-2",
      background: <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 via-cyan-500/5 to-transparent" />
    },
    {
      Icon: Clock,
      name: "Timely Service",
      description: "Fast appointment scheduling and service delivery to keep your pet healthy and happy.",
      className: "col-span-3 lg:col-span-1",
      background: <DotPattern opacity={0.15} className="absolute inset-0 [mask-image:linear-gradient(to_top,transparent_30%,#000_100%)]" />
    }
  ];

  const reviews = [
    {
      name: "Maria T.",
      gender: "F",
      text: "The deworming process was quick and painless for my puppy. I love the follow-up care instructions!",
      rating: 5
    },
    {
      name: "Ion G.",
      gender: "M",
      text: "My cat's vaccination went smoothly thanks to Darivet's gentle approach. Highly recommended!",
      rating: 5
    },
    {
      name: "Andreea L.",
      gender: "F",
      text: "The grooming service made my dog look amazing! Great attention to detail and cleanliness.",
      rating: 5
    }
  ];

  const faqItems = [
    {
      question: "How often should I deworm my pet?",
      answer: "We recommend deworming every 3 months for puppies and every 6 months for adult pets."
    },
    {
      question: "Do you offer home visits?",
      answer: "Yes, we provide mobile services for certain treatments upon request."
    },
    {
      question: "What should I bring to the appointment?",
      answer: "Please bring your pet's medical records or vaccination history if available."
    },
    {
      question: "How long does a deworming treatment take?",
      answer: "The process typically takes 15-20 minutes depending on your pet's size."
    },
    {
      question: "Can I book an appointment online?",
      answer: "Yes, you can schedule through WhatsApp or by calling our phone number."
    },
    {
      question: "Do you offer emergency services?",
      answer: "We provide urgent care for health emergencies outside regular hours."
    }
  ];

  const services = [
    {
      name: "Deworming",
      description: "Complete parasite removal treatment",
      price: "400 RON"
    },
    {
      name: "Vaccination",
      description: "Preventive care for common diseases",
      price: "350 RON"
    },
    {
      name: "Grooming",
      description: "Professional bathing and styling services",
      price: "250 RON"
    },
    {
      name: "Consultation",
      description: "Personalized health advice from experts",
      price: "150 RON"
    }
  ];

  const valueProps = [
    {
      Icon: Shield,
      title: "Licensed Veterinarians",
      description: "Our certified professionals provide expert care with attention to detail and safety."
    },
    {
      Icon: Award,
      title: "Premium Quality Products",
      description: "All products sourced from trusted suppliers for the best results."
    },
    {
      Icon: Users,
      title: "Personalized Care Plans",
      description: "Customized treatment plans designed specifically for each pet's needs."
    },
    {
      Icon: MapPin,
      title: "Convenient Location",
      description: "Located in Domnesti, Ilfov, serving the entire region with easy access."
    }
  ];

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 640);
    handleResize();
    window.addEventListener('resize', handleResize);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { 
        if (e.isIntersecting) { 
          e.target.classList.add('visible'); 
          observer.unobserve(e.target); 
        } 
      }),
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );

    document.querySelectorAll('.animate-on-scroll').forEach((el) => observer.observe(el));
    
    return () => {
      window.removeEventListener('resize', handleResize);
      observer.disconnect();
    };
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMenuOpen(false);
    }
  };

  return (
    <>
      <DemoBanner />
      
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6">
        <div className="max-w-6xl mx-auto mt-4">
          <div className="flex items-center justify-between h-14 px-4 sm:px-6 rounded-full bg-black/60 backdrop-blur-xl border border-white/[0.08]">
            <a href="#" className="font-semibold text-base tracking-tight text-white">Darivet</a>
            
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); }}
                  className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white rounded-full hover:bg-white/[0.05] transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

          {isMenuOpen && (
            <div className="md:hidden mt-2 rounded-2xl bg-black/80 backdrop-blur-xl border border-white/[0.08] p-4">
              {navLinks.map(link => (
                <a 
                  key={link.id} 
                  href={`#${link.id}`} 
                  onClick={(e) => { e.preventDefault(); scrollToSection(link.id); setIsMenuOpen(false); }}
                  className="block py-2 text-sm text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </header>

      {/* Hero Section */}
      <section 
        id="hero" 
        className="pt-40 pb-24 sm:pt-48 sm:pb-32 min-h-screen flex items-center relative overflow-x-clip"
      >
        <div className="absolute inset-0 z-0">
          <LightRays 
            raysOrigin="top-center" 
            raysColor="#07bcd4" 
            raysSpeed={1} 
            lightSpread={isMobile ? 2 : 0.5} 
            rayLength={isMobile ? 3 : 1} 
            followMouse={true} 
            mouseInfluence={0.05} 
            noiseAmount={0} 
            distortion={0} 
            pulsating={false} 
            fadeDistance={1} 
            saturation={1} 
          />
        </div>
        
        <DotPattern opacity={0.15} className="absolute inset-0 z-0" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8 relative z-10">
          <div className="text-center">
            <div className="hero-blur hero-delay-1 inline-flex items-center rounded-full border border-white/10 bg-white/[0.03] px-4 py-1.5 backdrop-blur-sm mb-8">
              <AnimatedShinyText className="text-sm font-medium">Premium Pet Care Services</AnimatedShinyText>
            </div>
            
            <h1 className="hero-blur hero-delay-2 max-w-4xl mx-auto text-5xl sm:text-6xl lg:text-7xl font-bold tracking-tight leading-[1.05] bg-gradient-to-b from-white to-cyan-400 bg-clip-text text-transparent mb-6">
              Your Pet's Health is Our Priority
            </h1>
            
            <p className="hero-blur hero-delay-3 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Professional pet care services with a focus on wellness and happiness. Serving the Ilfov region since 2019.
            </p>
            
            <div className="hero-blur hero-delay-4 flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(7,188,212,1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
              
              <Button 
                variant="outline" 
                className="h-12 px-6 rounded-full border-white/10 text-white hover:bg-white/5 btn-hover"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
            </div>
            
            <div className="hero-blur hero-delay-5 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-12">
              {stats.map((stat, i) => (
                <div key={i} className={cn("text-center", i > 0 && "sm:border-l sm:border-white/10 sm:pl-12")}>
                  <NumberTicker 
                    value={stat.value} 
                    suffix={stat.suffix} 
                    className="text-4xl font-black bg-gradient-to-r from-white to-cyan-400 bg-clip-text text-transparent drop-shadow-[0_0_24px_rgba(7,188,212,0.6)]" 
                  />
                  <p className="text-xs text-muted-foreground uppercase tracking-wider mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-0 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-cyan-500/[0.05] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Why Choose Darivet?
            </h2>
            <p className="text-lg text-muted-foreground">
              We are passionate about pet wellness and provide professional care with attention to detail.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
            {valueProps.map((prop, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <prop.Icon className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{prop.title}</h3>
                      <p className="text-sm text-muted-foreground">{prop.description}</p>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/[0.06] rounded-full blur-[130px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Our Pet Care Solutions
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services designed for your pet's health and happiness.
            </p>
          </div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
            {services.map((service, index) => (
              <Card 
                key={index} 
                className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover"
              >
                <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="relative p-8">
                  <div className="flex items-start gap-5 mb-6">
                    <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                      <Shield className="w-6 h-6 text-cyan-400" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold group-hover:text-cyan-50 transition-colors mb-2">{service.name}</h3>
                      <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                      <Separator className="mb-4 bg-white/[0.06]" />
                      <div className="text-2xl font-black bg-gradient-to-r from-cyan-300 to-cyan-500 bg-clip-text text-transparent">
                        {service.price}
                      </div>
                    </div>
                  </div>
                  <ShimmerButton className="w-full shadow-2xl btn-hover" background="rgba(7,188,212,1)">
                    <span className="text-sm font-medium text-black">Book Now</span>
                  </ShimmerButton>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section id="why-us" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute bottom-0 left-1/4 w-72 h-72 bg-cyan-500/[0.05] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Sets Us Apart
            </h2>
            <p className="text-lg text-muted-foreground">
              We offer more than just basic pet care. Here's why pet owners trust us:
            </p>
          </div>
          
          <BentoGrid className="lg:grid-rows-2">
            {whyUsFeatures.map((feature, index) => (
              <BentoCard 
                key={index} 
                className={cn(feature.className, "hover:border-cyan-500/20")} 
                background={feature.background}
              >
                <div className="flex items-start gap-5">
                  <div className="flex-shrink-0 w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/15 to-cyan-600/5 border border-cyan-500/10 flex items-center justify-center group-hover:scale-110 group-hover:shadow-[0_0_20px_rgba(7,188,212,0.15)] transition-all duration-500">
                    <feature.Icon className="w-6 h-6 text-cyan-400" />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold mb-2 group-hover:text-cyan-50 transition-colors">{feature.name}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </BentoCard>
            ))}
          </BentoGrid>
        </div>
      </section>

      {/* Reviews Section */}
      <section id="reviews" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-0 right-1/4 w-64 h-64 bg-cyan-500/[0.06] rounded-full blur-[100px] pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-cyan-500/[0.04] rounded-full blur-[140px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              What Pet Parents Say
            </h2>
            <p className="text-lg text-muted-foreground">
              Real experiences from real pet owners who trust our services.
            </p>
          </div>
          
          <div className="relative flex max-w-6xl mx-auto flex-col items-center justify-center overflow-hidden">
            <Marquee pauseOnHover className="[--duration:30s]">
              {reviews.map((review, index) => (
                <Card 
                  key={index} 
                  className="group relative bg-white/[0.02] border-white/[0.06] backdrop-blur-sm rounded-2xl overflow-hidden hover:border-cyan-500/20 transition-all duration-500 card-hover mx-4 max-w-sm"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/[0.04] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <BorderBeam size={80} duration={20} delay={index * 1.5} colorFrom="#07bcd4" colorTo="#07bcd4" className="opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative p-6">
                    <div className="flex items-center mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star key={i} className={`w-4 h-4 ${i < review.rating ? 'fill-cyan-400 text-cyan-400' : 'text-muted-foreground'}`} />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{review.text}</p>
                    <div className="flex items-center">
                      <Avatar className="w-8 h-8 mr-3">
                        <AvatarImage src={`/assets/people/${review.gender === 'M' ? 'boy_1' : 'girl_1'}.jpg`} alt={review.name} />
                        <AvatarFallback>{review.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                      <span className="text-sm font-medium">{review.name}</span>
                    </div>
                  </div>
                </Card>
              ))}
            </Marquee>
            <div className="from-background pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r"></div>
            <div className="from-background pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about our services and how we care for your pets.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto">
            <Accordion type="single" collapsible className="w-full">
              {faqItems.map((item, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`} 
                  className="animate-on-scroll delay-1 border-b border-white/[0.06] mb-4"
                >
                  <AccordionTrigger className="text-left hover:bg-white/[0.02] transition-colors duration-200 py-4">
                    {item.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-4 text-muted-foreground">
                    {item.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="relative overflow-x-clip py-24 sm:py-32">
        <div className="absolute top-1/3 left-0 w-72 h-72 bg-cyan-500/[0.07] rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 sm:px-8">
          <div className="text-center max-w-2xl mx-auto mb-16 sm:mb-20">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Let's Get Your Pet Healthy Together
            </h2>
            <p className="text-lg text-muted-foreground">
              Contact us today to schedule an appointment or learn more about our pet care services.
            </p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <Phone className="w-6 h-6 text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <p className="text-muted-foreground text-sm">+4075728379480</p>
                  </div>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <Mail className="w-6 h-6 text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">Email</h3>
                    <p className="text-muted-foreground text-sm">contact@darivet.com</p>
                  </div>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <MapPin className="w-6 h-6 text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">Address</h3>
                    <p className="text-muted-foreground text-sm">domnesti, ilfov, romania</p>
                  </div>
                </Card>
                
                <Card className="bg-white/[0.02] border-white/[0.05] backdrop-blur-sm">
                  <div className="p-6">
                    <Instagram className="w-6 h-6 text-cyan-400 mb-3" />
                    <h3 className="font-semibold mb-1">Instagram</h3>
                    <p className="text-muted-foreground text-sm">instagram.com/darivet</p>
                  </div>
                </Card>
              </div>
              
              <ShimmerButton className="shadow-2xl btn-hover" background="rgba(7,188,212,1)">
                <span className="text-sm font-medium text-black">Book Appointment</span>
              </ShimmerButton>
            </div>
            
            <div className="h-[350px] sm:h-[400px] lg:h-[500px] rounded-2xl overflow-hidden">
              <iframe
                src={"https://www.google.com/maps?q=" + encodeURIComponent("domnesti, ilfov, romania") + "&output=embed"}
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="relative overflow-x-clip py-8 pb-32">
        <Separator />
        <div className="max-w-6xl mx-auto px-6 sm:px-8 mt-8 flex flex-col sm:flex-row items-center justify-between">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Darivet. All rights reserved.
          </p>
          
          <div className="flex gap-3 mt-4 sm:mt-0">
            <a 
              href="https://www.instagram.com/darivet" 
              target="_blank" 
              rel="noopener noreferrer"
              className="h-10 w-10 rounded-full bg-white/[0.05] flex items-center justify-center hover:bg-cyan-500/20 transition-colors duration-200"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </footer>

      {/* Progressive Blur Overlay */}
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 hidden sm:block">
        <ProgressiveBlur position="bottom" height="250px" />
      </div>
      <div className="pointer-events-none fixed inset-x-0 bottom-0 z-50 sm:hidden">
        <ProgressiveBlur position="bottom" height="150px" />
      </div>
    </>
  );
}
