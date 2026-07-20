import { Link } from 'react-router-dom';
import { ArrowRight, Factory, HeartPulse, GraduationCap, Landmark, Truck, ShoppingBag, Users, Building2, Bot, Database, Contact, type LucideIcon } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { solutions } from '../data/content';

const iconMap: Record<string, LucideIcon> = {
  Factory, HeartPulse, GraduationCap, Landmark, Truck, ShoppingBag, Users, Building2, Bot, Database, Contact,
};

export default function Solutions() {
  return (
    <>
      <PageHeader
        badge="Industry Solutions"
        title="Solutions built for your industry."
        subtitle="We bring deep domain expertise and proven patterns to every industry we serve."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map((sol) => {
              const Icon = iconMap[sol.icon] || Factory;
              return (
                <StaggerItem key={sol.slug}>
                  <Link to={`/solutions/${sol.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                    <div className="relative h-48 overflow-hidden">
                      <img src={sol.image} alt={sol.title} loading="lazy" className="w-full h-full object-cover premium-img" />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-[#0a0f1e]/50 to-transparent" />
                      <div className="absolute top-3 left-3 w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500/30 to-purple-500/30 flex items-center justify-center border border-white/20 backdrop-blur-sm">
                        <Icon size={22} className="text-white" />
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-semibold mb-2 group-hover:text-blue-400 transition-colors">{sol.title}</h3>
                      <p className="text-white/60 text-sm mb-4 leading-relaxed">{sol.shortDesc}</p>
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
