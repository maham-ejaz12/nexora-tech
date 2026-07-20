import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { PageHeader, StaggerContainer, StaggerItem } from '../components/ui';
import CTA from '../components/CTA';
import { team } from '../data/content';

export default function Team() {
  return (
    <>
      <PageHeader
        badge="Our Team"
        title="The people behind Nexora."
        subtitle="A senior team of engineers, designers, and strategists who have built products used by millions."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <StaggerContainer className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {team.map((m) => (
              <StaggerItem key={m.slug}>
                <Link to={`/team/${m.slug}`} className="glass-card glass-card-hover overflow-hidden h-full block group premium-img-wrap">
                  <div className="relative h-80 overflow-hidden">
                    <img src={m.photo} alt={m.name} loading="lazy" className="w-full h-full object-cover premium-img" />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1e] via-transparent to-transparent" />
                  </div>
                  <div className="p-5">
                    <h3 className="font-semibold group-hover:text-blue-400 transition-colors">{m.name}</h3>
                    <p className="text-blue-400 text-sm">{m.position}</p>
                    <p className="text-white/50 text-sm mt-1">{m.experience} experience</p>
                    <div className="flex flex-wrap gap-1.5 mt-3">
                      {m.skills.slice(0, 3).map((s) => <span key={s} className="text-xs px-2 py-0.5 rounded-full bg-white/5 border border-white/10 text-white/60">{s}</span>)}
                    </div>
                    <span className="text-blue-400 text-sm font-medium inline-flex items-center gap-1 mt-4 group-hover:gap-2 transition-all">
                      View Profile <ArrowRight size={14} />
                    </span>
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </StaggerContainer>
        </div>
      </section>

      <CTA />
    </>
  );
}
