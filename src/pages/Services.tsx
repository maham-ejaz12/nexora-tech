import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { services } from '../data/content';

export default function Services() {
  return (
    <>
      <PageHeader
        badge="Our Services"
        title="Software engineering, end to end."
        subtitle="From custom development to AI, cloud, and security — we cover every layer of the modern software stack."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <StaggerItem key={s.slug}>
                  <Link to={`/services/${s.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                    <div className="relative h-44 overflow-hidden">
                      <img src={s.image} alt={s.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/40 to-transparent" />
                      <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{s.title}</h3>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">{s.shortDesc}</p>
                      <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 group-hover:gap-2 transition-all">
                        Learn More <ArrowRight size={14} />
                      </span>
                    </div>
                  </Link>
                </StaggerItem>
              );
            })}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
