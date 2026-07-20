import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Play, Sparkles, Star, Quote, CheckCircle2, Search, ClipboardList, Palette, Code2, TestTube, Rocket, Wrench } from 'lucide-react';
import { SectionReveal, StaggerContainer, StaggerItem, Counter, MouseParallax } from '../components/ui';
import CTA from '../components/CTA';
import { services, solutions, technologies, projects, testimonials, stats, pricingPlans, clientLogos, team } from '../data/content';

const devProcess = [
  { step: '01', title: 'Requirement Gathering', desc: 'We dive deep into your business, users, and goals to define a precise scope.', icon: Search },
  { step: '02', title: 'Planning', desc: 'Architecture, roadmap, and resource planning aligned to your timeline and budget.', icon: ClipboardList },
  { step: '03', title: 'UI/UX Design', desc: 'Wireframes, prototypes, and design systems crafted for delightful experiences.', icon: Palette },
  { step: '04', title: 'Development', desc: 'Agile sprints with continuous integration, code reviews, and weekly demos.', icon: Code2 },
  { step: '05', title: 'Testing', desc: 'Automated and manual testing across devices, browsers, and edge cases.', icon: TestTube },
  { step: '06', title: 'Deployment', desc: 'Zero-downtime deployment with monitoring, alerts, and rollback safety nets.', icon: Rocket },
  { step: '07', title: 'Maintenance', desc: 'Ongoing support, optimization, and iteration based on real user data.', icon: Wrench },
];

const values = [
  { title: 'Innovation', desc: 'We push boundaries and adopt emerging tech to solve hard problems.' },
  { title: 'Excellence', desc: 'We hold a high bar for craft, quality, and engineering rigor.' },
  { title: 'Partnership', desc: 'We act as an extension of your team, invested in your success.' },
  { title: 'Integrity', desc: 'We communicate openly and deliver on every promise we make.' },
];

function DevProcessTimeline() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ['start center', 'end center'],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ['0%', '100%']);

  return (
    <div ref={sectionRef} className="relative">
      {/* Base line */}
      <div className="absolute left-6 sm:left-1/2 top-0 bottom-0 w-px bg-white/8 -translate-x-1/2" />
      {/* Animated progress line */}
      <motion.div
        className="absolute left-6 sm:left-1/2 top-0 w-px bg-gradient-to-b from-blue-500 via-purple-500 to-blue-500 -translate-x-1/2 origin-top"
        style={{ height: lineHeight, boxShadow: '0 0 12px rgba(99,102,241,0.6)' }}
      />
      <div className="space-y-10">
        {devProcess.map((p, i) => {
          const Icon = p.icon;
          const isLeft = i % 2 === 0;
          return (
            <motion.div
              key={p.step}
              className={`relative flex ${isLeft ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="hidden sm:block sm:w-1/2" />
              {/* Icon node */}
              <div className="absolute left-6 sm:left-1/2 -translate-x-1/2 z-10">
                <motion.div
                  className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 ring-4 ring-[#0a0f1e] flex items-center justify-center shadow-lg shadow-blue-500/30"
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <Icon size={20} className="text-white" />
                </motion.div>
              </div>
              <div className={`ml-16 sm:ml-0 sm:w-1/2 ${isLeft ? 'sm:pr-14 sm:text-right' : 'sm:pl-14'}`}>
                <motion.div
                  className="glass-card glass-card-hover p-6 group"
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  <div className={`flex items-center gap-3 mb-2 ${isLeft ? 'sm:flex-row-reverse sm:justify-start' : ''}`}>
                    <span className="text-3xl font-bold text-blue-400/30 group-hover:text-blue-400/60 transition-colors">{p.step}</span>
                    <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">{p.title}</h3>
                  </div>
                  <p className="text-white/60 text-sm leading-relaxed">{p.desc}</p>
                </motion.div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-screen flex items-center pt-24 pb-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 hero-gradient" />
        <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <motion.span
              className="tag-badge mb-6"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Sparkles size={14} className="inline mr-1" /> Enterprise Software & AI Solutions
            </motion.span>
            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[1.1] mb-6"
              style={{ fontFamily: 'Poppins, sans-serif' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Building <span className="gradient-text">Intelligent Software</span> for the Future.
            </motion.h1>
            <motion.p
              className="text-lg text-white/70 mb-8 max-w-xl leading-relaxed"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              We design, engineer, and scale enterprise software, AI systems, and digital products that transform how the world's leading companies operate.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <Link to="/contact" className="btn-primary">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Link>
              <Link to="/portfolio" className="btn-outline">
                <Play size={18} /> Watch Demo
              </Link>
            </motion.div>

            {/* Stats inline */}
            <motion.div
              className="grid grid-cols-3 gap-6 mt-12 max-w-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {stats.slice(0, 3).map((s) => (
                <div key={s.label}>
                  <div className="text-2xl sm:text-3xl font-bold gradient-text-blue">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <div className="text-xs text-white/50 mt-1">{s.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* Hero image */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <MouseParallax strength={15}>
              <div className="relative rounded-2xl overflow-hidden glow-blue premium-img-wrap">
                <img
                  src="https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                  alt="AI and software development dashboard"
                  className="w-full h-[400px] sm:h-[500px] object-cover premium-img"
                  loading="eager"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
              </div>
            </MouseParallax>

            {/* Floating cards */}
            <motion.div
              className="absolute -top-4 -left-4 glass-card p-4 hidden sm:block animate-float"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8 }}
            >
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                <span className="text-xs text-white/80">99.99% Uptime</span>
              </div>
            </motion.div>
            <motion.div
              className="absolute -bottom-4 -right-4 glass-card p-4 hidden sm:block animate-float"
              style={{ animationDelay: '2s' }}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1 }}
            >
              <div className="flex items-center gap-2">
                <Star size={14} className="text-yellow-400 fill-yellow-400" />
                <span className="text-xs text-white/80">4.9/5 Client Rating</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trusted by */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 border-y border-white/5">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-white/40 text-sm uppercase tracking-widest mb-8">Trusted by leading companies worldwide</p>
          <StaggerContainer className="flex flex-wrap items-center justify-center gap-8 sm:gap-12">
            {clientLogos.map((logo) => (
              <StaggerItem key={logo}>
                <span className="text-xl sm:text-2xl font-bold text-white/30 hover:text-white/60 transition-colors" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  {logo}
                </span>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* About preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="tag-badge mb-5">About Nexora Tech</span>
            <h2 className="section-title mb-5">A global software partner built for the modern enterprise.</h2>
            <p className="section-subtitle mb-6">
              Founded in 2015, Nexora Tech has grown into a global software engineering partner for organizations that demand more than off-the-shelf solutions. We combine strategy, design, and engineering to ship products that move businesses forward.
            </p>
            <div className="grid sm:grid-cols-2 gap-4 mb-8">
              {values.map((v) => (
                <div key={v.title} className="flex gap-3">
                  <CheckCircle2 size={20} className="text-blue-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <h4 className="font-semibold text-sm mb-1">{v.title}</h4>
                    <p className="text-white/50 text-sm">{v.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <Link to="/about" className="btn-outline">
              Learn More <ArrowRight size={16} />
            </Link>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="grid grid-cols-2 gap-4">
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text-blue mb-2"><Counter value={450} suffix="+" /></div>
                <p className="text-white/60 text-sm">Projects Delivered</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text-blue mb-2"><Counter value={180} suffix="+" /></div>
                <p className="text-white/60 text-sm">Happy Clients</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text-blue mb-2"><Counter value={42} /></div>
                <p className="text-white/60 text-sm">Countries Served</p>
              </div>
              <div className="glass-card p-6 text-center">
                <div className="text-4xl font-bold gradient-text-blue mb-2"><Counter value={99} suffix="%" /></div>
                <p className="text-white/60 text-sm">Success Rate</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Services preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Services</span>
            <h2 className="section-title mb-4">Everything you need to build, scale, and ship.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">From custom software to AI, cloud, and security — we cover the full spectrum of enterprise software engineering.</p>
          </SectionReveal>

          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.slice(0, 6).map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="glass-card glass-card-hover p-6 h-full block group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-white/10">
                      <Icon size={24} className="text-blue-400" />
                    </div>
                    <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                    <p className="text-white/60 text-sm mb-4 leading-relaxed">{s.shortDesc}</p>
                    <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      Learn More <ArrowRight size={14} />
                    </span>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>

          <div className="text-center mt-10">
            <Link to="/services" className="btn-outline">View All Services <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Solutions preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Industry Solutions</span>
            <h2 className="section-title mb-4">Tailored solutions for every industry.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">We bring deep domain expertise across the industries that matter most.</p>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {solutions.slice(0, 8).map((sol) => (
              <StaggerItem key={sol.slug}>
                <Link to={`/solutions/${sol.slug}`} className="glass-card glass-card-hover p-5 h-full block group">
                  <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{sol.title}</h3>
                  <p className="text-white/50 text-sm">{sol.shortDesc}</p>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Why choose us / stats */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Why Choose Us</span>
            <h2 className="section-title mb-4">Numbers that speak for themselves.</h2>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-2 lg:grid-cols-5 gap-6">
            {stats.map((s) => (
              <StaggerItem key={s.label}>
                <div className="glass-card p-6 text-center h-full">
                  <div className="text-3xl sm:text-4xl font-bold gradient-text mb-2">
                    <Counter value={s.value} suffix={s.suffix} />
                  </div>
                  <p className="text-white/60 text-sm">{s.label}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Technologies preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Tech Stack</span>
            <h2 className="section-title mb-4">Built with the best tools in the industry.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">We work with modern, battle-tested technologies across the stack.</p>
          </SectionReveal>
          <StaggerContainer className="grid grid-cols-3 sm:grid-cols-4 lg:grid-cols-8 gap-4">
            {technologies.map((t) => (
              <StaggerItem key={t.name}>
                <div className="glass-card glass-card-hover p-4 text-center h-full">
                  <div className="text-3xl mb-2">{t.icon}</div>
                  <p className="text-xs text-white/70 font-medium">{t.name}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-10">
            <Link to="/technologies" className="btn-outline">Explore Technologies <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Portfolio preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Work</span>
            <h2 className="section-title mb-4">Products we are proud of.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">A selection of projects that showcase our engineering and design capabilities.</p>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects.slice(0, 3).map((p) => (
              <StaggerItem key={p.slug}>
                <Link to={`/portfolio/${p.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                  <div className="relative h-52 overflow-hidden">
                    <img src={p.image} alt={p.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                    <span className="absolute top-3 left-3 tag-badge">{p.category}</span>
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold mb-2 group-hover:text-blue-400 transition-colors">{p.title}</h3>
                    <p className="text-white/60 text-sm mb-3 line-clamp-2">{p.overview}</p>
                    <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                      View Project <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
          <div className="text-center mt-10">
            <Link to="/portfolio" className="btn-outline">View All Projects <ArrowRight size={16} /></Link>
          </div>
        </div>
      </section>

      {/* Development process */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <SectionReveal className="text-center mb-16">
            <span className="tag-badge mb-5">How We Work</span>
            <h2 className="section-title mb-4">A proven development process.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Seven steps from idea to production — and beyond.</p>
          </SectionReveal>
          <DevProcessTimeline />
        </div>
      </section>

      {/* Team preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Team</span>
            <h2 className="section-title mb-4">Meet the people behind Nexora.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">A senior team of engineers, designers, and strategists.</p>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.slice(0, 3).map((m) => (
              <StaggerItem key={m.slug}>
                <Link to={`/team/${m.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                  <div className="relative h-72 overflow-hidden">
                    <img src={m.photo} alt={m.name} loading="lazy" className="w-full h-full object-cover premium-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">{m.name}</h3>
                    <p className="text-blue-400 text-sm">{m.position}</p>
                    <p className="text-white/50 text-sm mt-1">{m.experience} experience</p>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Testimonials */}
      <TestimonialsCarousel />

      {/* Pricing preview */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Pricing</span>
            <h2 className="section-title mb-4">Simple, transparent pricing.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">Choose the plan that fits your stage. Scale up anytime.</p>
          </SectionReveal>
          <StaggerContainer className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`glass-card p-8 h-full relative ${plan.highlighted ? 'border-blue-500/50 glow-blue' : ''}`}>
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
                  <p className="text-white/50 text-sm mb-4">{plan.description}</p>
                  <div className="mb-6">
                    <span className="text-4xl font-bold">{plan.price}</span>
                    <span className="text-white/50">{plan.period}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-start gap-2 text-sm text-white/70">
                        <CheckCircle2 size={16} className="text-blue-400 flex-shrink-0 mt-0.5" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className={`w-full ${plan.highlighted ? 'btn-primary' : 'btn-outline'} justify-center`}>
                    {plan.cta}
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}

function TestimonialsCarousel() {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <SectionReveal className="text-center mb-12">
          <span className="tag-badge mb-5">Testimonials</span>
          <h2 className="section-title mb-4">What our clients say.</h2>
        </SectionReveal>
        <div className="relative">
          <motion.div
            className="flex gap-6"
            animate={{ x: [0, -1200] }}
            transition={{ duration: 30, repeat: Infinity, ease: 'linear' }}
            style={{ width: 'max-content' }}
          >
            {[...testimonials, ...testimonials].map((t, i) => (
              <div key={i} className="glass-card p-6 w-[340px] sm:w-[400px] flex-shrink-0">
                <Quote size={28} className="text-blue-400/40 mb-3" />
                <p className="text-white/80 text-sm leading-relaxed mb-5">"{t.quote}"</p>
                <div className="flex items-center gap-3">
                  <img src={t.avatar} alt={t.name} loading="lazy" className="w-11 h-11 rounded-full object-cover" />
                  <div>
                    <p className="font-semibold text-sm">{t.name}</p>
                    <p className="text-white/50 text-xs">{t.role}</p>
                  </div>
                  <div className="ml-auto flex gap-0.5">
                    {Array.from({ length: t.rating }).map((_, j) => (
                      <Star key={j} size={14} className="text-yellow-400 fill-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
