import { motion } from 'framer-motion';
import { Target, Eye, Heart, Award, Users, Globe, TrendingUp, Lightbulb, Rocket, Building2, Brain, Cloud, Plane, Layers, Sparkles } from 'lucide-react';
import { PageHeader, SectionReveal, StaggerContainer, StaggerItem, Counter } from '../components/ui';
import CTA from '../components/CTA';
import { stats } from '../data/content';

const timeline = [
  { year: '2020', title: 'Company Founded', desc: 'Nexora Tech is founded with a vision to build intelligent software for enterprises.', icon: Rocket },
  { year: '2021', title: 'First Enterprise Clients', desc: 'Delivered our first large-scale banking platform, serving 500K users.', icon: Building2 },
  { year: '2022', title: 'Expanded Software Development Services', desc: 'Grew our engineering teams and added web, mobile, and cloud practices.', icon: Layers },
  { year: '2023', title: 'Introduced AI & Cloud Solutions', desc: 'Launched a dedicated AI division and a Cloud Center of Excellence with AWS, Azure, and GCP partnerships.', icon: Brain },
  { year: '2024', title: 'Launched International Projects', desc: 'Opened offices in London and Singapore, expanding to 42 countries served.', icon: Plane },
  { year: '2025', title: 'Expanded Team & Technology Stack', desc: 'Grew to 200+ professionals and adopted next-gen technologies across the stack.', icon: Users },
  { year: '2026', title: 'Delivering Enterprise Digital Transformation & AI Solutions Worldwide', desc: 'Today we ship enterprise digital transformation and AI solutions to leading companies across the globe.', icon: Sparkles },
];

const values = [
  { icon: Lightbulb, title: 'Innovation', desc: 'We embrace emerging technologies and push the boundaries of what software can do.' },
  { icon: Award, title: 'Excellence', desc: 'We hold ourselves to the highest standards of craft, quality, and engineering.' },
  { icon: Users, title: 'Partnership', desc: 'We act as an extension of your team, invested in your long-term success.' },
  { icon: Heart, title: 'Integrity', desc: 'We communicate openly, deliver on promises, and always do right by our clients.' },
];

export default function About() {
  return (
    <>
      <PageHeader
        badge="About Us"
        title="We build software that moves enterprises forward."
        subtitle="Nexora Tech is a global software engineering partner combining strategy, design, and technology to ship products that create real business impact."
      />

      {/* Story */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
          <SectionReveal>
            <span className="tag-badge mb-5">Our Story</span>
            <h2 className="section-title mb-5">From a small team to a global engineering partner.</h2>
            <div className="space-y-4 text-white/70 leading-relaxed">
              <p>Nexora Tech began in 2015 with a simple belief: enterprise software should be as elegant and intuitive as the best consumer products. What started as a team of five engineers has grown into a global organization of 200+ professionals.</p>
              <p>Over a decade, we have delivered 450+ projects across 42 countries, serving clients in finance, healthcare, manufacturing, retail, logistics, and the public sector. We have stayed true to our founding principle: build software that creates measurable business value.</p>
              <p>Today we are a trusted partner to enterprises and high-growth companies alike, helping them navigate digital transformation, adopt AI, and ship products their users love.</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.2}>
            <div className="relative rounded-2xl overflow-hidden glow-blue premium-img-wrap">
              <img
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt="Nexora Tech team collaborating"
                loading="lazy"
                className="w-full h-[450px] object-cover premium-img"
              />
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Mission / Vision */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
          <SectionReveal>
            <div className="glass-card p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-white/10">
                <Target size={24} className="text-blue-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Mission</h3>
              <p className="text-white/70 leading-relaxed">To engineer software that creates measurable business value — combining technical excellence with deep domain understanding to help enterprises thrive in a digital world.</p>
            </div>
          </SectionReveal>
          <SectionReveal delay={0.15}>
            <div className="glass-card p-8 h-full">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-purple-500/20 to-cyan-500/20 flex items-center justify-center mb-4 border border-white/10">
                <Eye size={24} className="text-purple-400" />
              </div>
              <h3 className="text-xl font-bold mb-3">Our Vision</h3>
              <p className="text-white/70 leading-relaxed">To be the most trusted software engineering partner for enterprises worldwide — known for craft, integrity, and the ability to turn ambitious ideas into products that scale.</p>
            </div>
          </SectionReveal>
        </div>
      </section>

      {/* Values */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Values</span>
            <h2 className="section-title mb-4">The principles that guide us.</h2>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((v) => {
              const Icon = v.icon;
              return (
                <StaggerItem key={v.title}>
                  <div className="glass-card glass-card-hover p-6 h-full text-center">
                    <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mx-auto mb-4 border border-white/10">
                      <Icon size={26} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{v.title}</h3>
                    <p className="text-white/60 text-sm leading-relaxed">{v.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
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

      {/* Timeline */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Journey</span>
            <h2 className="section-title mb-4">A growth story in the making.</h2>
            <p className="section-subtitle max-w-2xl mx-auto">From a small startup to a global software engineering partner — here is how we got here.</p>
          </SectionReveal>
          <div className="relative">
            <div className="absolute left-4 sm:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-500/40 via-purple-500/40 to-transparent" />
            {timeline.map((item, i) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.year}
                  className={`relative flex items-center mb-8 ${i % 2 === 0 ? 'sm:flex-row' : 'sm:flex-row-reverse'}`}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-80px' }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <div className="hidden sm:block sm:w-1/2" />
                  <div className="absolute left-4 sm:left-1/2 -translate-x-1/2 w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-purple-500 ring-4 ring-[#0a0f1e] flex items-center justify-center shadow-lg shadow-blue-500/20">
                    <Icon size={20} className="text-white" />
                  </div>
                  <div className={`ml-16 sm:ml-0 sm:w-1/2 ${i % 2 === 0 ? 'sm:pr-12 sm:text-right' : 'sm:pl-12'}`}>
                    <motion.div
                      className="glass-card glass-card-hover p-5 group"
                      whileHover={{ y: -4 }}
                    >
                      <span className="inline-block px-3 py-1 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-blue-400 font-bold text-sm mb-3">
                        {item.year}
                      </span>
                      <h3 className="font-semibold mb-1 group-hover:text-blue-400 transition-colors">{item.title}</h3>
                      <p className="text-white/60 text-sm">{item.desc}</p>
                    </motion.div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Office images */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="text-center mb-12">
            <span className="tag-badge mb-5">Our Offices</span>
            <h2 className="section-title mb-4">Where we build.</h2>
          </SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { city: 'San Francisco', img: 'https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
              { city: 'London', img: 'https://images.pexels.com/photos/3184325/pexels-photo-3184325.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
              { city: 'Singapore', img: 'https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' },
            ].map((o) => (
              <StaggerItem key={o.city}>
                <div className="relative rounded-2xl overflow-hidden h-64 group premium-img-wrap">
                  <img src={o.img} alt={`${o.city} office`} loading="lazy" className="w-full h-full object-cover premium-img" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <h3 className="text-lg font-bold">{o.city}</h3>
                    <p className="text-white/60 text-sm">Nexora Tech HQ</p>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA title="Want to work with us?" subtitle="We would love to hear about your project." />
    </>
  );
}
