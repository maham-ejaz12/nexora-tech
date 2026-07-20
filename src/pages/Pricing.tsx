import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight, Sparkles } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { pricingPlans } from '../data/content';

const features = [
  { title: 'No hidden fees', desc: 'Transparent pricing with no surprises. What you see is what you pay.' },
  { title: 'Cancel anytime', desc: 'No long-term lock-in. Scale up or down as your needs change.' },
  { title: 'Dedicated team', desc: 'Work with the same engineers, designers, and PM throughout.' },
  { title: 'Source code ownership', desc: 'You own everything we build. Full IP transfer on completion.' },
];

export default function Pricing() {
  return (
    <>
      <PageHeader
        badge="Pricing"
        title="Pricing that scales with you."
        subtitle="From startups to enterprises, we have a plan that fits. No hidden fees, no surprises."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <StaggerContainer className="grid md:grid-cols-3 gap-6 items-start">
            {pricingPlans.map((plan) => (
              <StaggerItem key={plan.name}>
                <div className={`glass-card p-8 h-full relative ${plan.highlighted ? 'border-blue-500/50 glow-blue lg:-translate-y-4' : ''}`}>
                  {plan.highlighted && (
                    <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-blue-500 to-purple-500 text-white text-xs font-semibold px-4 py-1 rounded-full inline-flex items-center gap-1">
                      <Sparkles size={12} /> Most Popular
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
                    {plan.cta} <ArrowRight size={16} />
                  </Link>
                </div>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((f) => (
              <StaggerItem key={f.title}>
                <div className="glass-card p-6 h-full text-center">
                  <h3 className="font-semibold mb-2">{f.title}</h3>
                  <p className="text-white/60 text-sm">{f.desc}</p>
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
