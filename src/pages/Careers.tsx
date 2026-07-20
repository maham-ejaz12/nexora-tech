import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, MapPin, Clock, Heart, Users, TrendingUp, Coffee, Award } from 'lucide-react';
import { PageHeader, SectionReveal, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { careers } from '../data/content';

const benefits = [
  { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive medical, dental, and vision coverage for you and your family.' },
  { icon: TrendingUp, title: 'Growth Budget', desc: '$2,500 annual learning budget for courses, conferences, and certifications.' },
  { icon: Clock, title: 'Flexible Time Off', desc: 'Unlimited PTO with a 3-week minimum. We want you rested and sharp.' },
  { icon: Coffee, title: 'Remote-First', desc: 'Work from anywhere. Hybrid offices in SF, London, and Singapore.' },
  { icon: Award, title: 'Equity', desc: 'Every full-time employee receives equity. We win together.' },
  { icon: Users, title: 'Top-Tier Team', desc: 'Work alongside senior engineers from top companies and universities.' },
];

const hiringSteps = [
  { step: '01', title: 'Application', desc: 'Submit your application. We review every one within 5 business days.' },
  { step: '02', title: 'Intro Call', desc: '30-minute conversation with a recruiter to align on role and goals.' },
  { step: '03', title: 'Technical Interview', desc: 'Deep dive into your craft with a panel of senior engineers.' },
  { step: '04', title: 'System Design', desc: 'A collaborative design session focused on real-world problems.' },
  { step: '05', title: 'Culture Fit', desc: 'Meet the team and learn how we work, collaborate, and grow.' },
  { step: '06', title: 'Offer', desc: 'We move fast — most offers go out within 2 weeks of first contact.' },
];

const culture = [
  'We hire for craft, curiosity, and care — not credentials.',
  'We default to async, deep work, and written communication.',
  'We measure outcomes, not hours or butts in seats.',
  'We invest in your growth — and expect you to invest in others.',
];

export default function Careers() {
  return (
    <>
      <PageHeader
        badge="Careers"
        title="Build the future with us."
        subtitle="We are a team of senior engineers, designers, and strategists building software that matters. Come build with us."
      />

      {/* Open positions */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="mb-8"><h2 className="text-2xl font-bold">Open Positions</h2></SectionReveal>
          <StaggerContainer className="space-y-4">
            {careers.map((job) => (
              <StaggerItem key={job.slug}>
                <div className="glass-card glass-card-hover overflow-hidden flex flex-col sm:flex-row">
                  {job.image && (
                    <div className="sm:w-40 h-32 sm:h-auto overflow-hidden premium-img-wrap flex-shrink-0">
                      <img src={job.image} alt={job.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                    </div>
                  )}
                  <div className="p-6 flex flex-col sm:flex-row sm:items-center justify-between gap-4 flex-1">
                    <div>
                      <h3 className="font-semibold text-lg group-hover:text-blue-400 transition-colors">{job.title}</h3>
                      <div className="flex flex-wrap gap-3 mt-2 text-sm text-white/50">
                        <span className="flex items-center gap-1"><Users size={14} /> {job.department}</span>
                        <span className="flex items-center gap-1"><MapPin size={14} /> {job.location}</span>
                        <span className="flex items-center gap-1"><Clock size={14} /> {job.type}</span>
                      </div>
                    </div>
                    <Link to="/contact" className="btn-primary !py-2.5 !px-5 text-sm whitespace-nowrap">
                      <span>Apply Now</span><ArrowRight size={16} />
                    </Link>
                  </div>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8 text-center"><h2 className="section-title mb-4">Why join Nexora?</h2><p className="section-subtitle max-w-2xl mx-auto">We take care of our people so they can do their best work.</p></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {benefits.map((b) => {
              const Icon = b.icon;
              return (
                <StaggerItem key={b.title}>
                  <div className="glass-card glass-card-hover p-6 h-full">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center mb-4 border border-white/10">
                      <Icon size={22} className="text-blue-400" />
                    </div>
                    <h3 className="font-semibold mb-2">{b.title}</h3>
                    <p className="text-white/60 text-sm">{b.desc}</p>
                  </div>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      {/* Hiring process */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <SectionReveal className="mb-8 text-center"><h2 className="section-title mb-4">Our hiring process</h2><p className="section-subtitle max-w-2xl mx-auto">Transparent, fast, and respectful of your time.</p></SectionReveal>
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {hiringSteps.map((s) => (
              <StaggerItem key={s.step}>
                <div className="glass-card p-6 h-full">
                  <div className="text-blue-400 font-bold text-sm mb-2">Step {s.step}</div>
                  <h3 className="font-semibold mb-2">{s.title}</h3>
                  <p className="text-white/60 text-sm">{s.desc}</p>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Culture */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <SectionReveal className="mb-8 text-center"><h2 className="section-title mb-4">Our culture</h2></SectionReveal>
          <div className="grid sm:grid-cols-2 gap-4">
            {culture.map((c, i) => (
              <motion.div key={i} initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card p-5 flex items-start gap-3">
                <span className="text-blue-400 font-bold">0{i + 1}</span>
                <p className="text-white/70 text-sm">{c}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTA title="Don't see your role?" subtitle="Send us your resume and we will reach out when the right opportunity comes up." />
    </>
  );
}
