import { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Clock, Send, Navigation, Linkedin, Twitter, Github, CheckCircle2 } from 'lucide-react';
import { PageHeader, SectionReveal } from '../components/ui';
import { supabase } from '../lib/supabase';

const offices = [
  { city: 'San Francisco', address: '535 Mission St, 14th Floor, San Francisco, CA 94105', phone: '+1 (415) 555-0199' },
  { city: 'London', address: '1 Finsbury Avenue, London EC2M 2PF, United Kingdom', phone: '+44 20 7946 0199' },
  { city: 'Singapore', address: '8 Marina View, #45-01, Singapore 018960', phone: '+65 6555 0199' },
];

const hours = [
  { day: 'Monday – Friday', time: '9:00 AM – 6:00 PM' },
  { day: 'Saturday', time: '10:00 AM – 2:00 PM' },
  { day: 'Sunday', time: 'Closed' },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

    const { error } = await supabase
      .from('contact_messages')
      .insert([
       {
         name: form.name,
         email: form.email,
         subject: form.company,
         message: form.message,
        },
      ]);

    if (error) {
      console.error(error);
      alert('Failed to send message.');
      return;
    }

    setSent(true);
    setForm({
      name: '',
      email: '',
      company: '',
      message: '',
    });

    setTimeout(() => setSent(false), 5000);
  };

  return (
    <>
      <PageHeader
        badge="Contact"
        title="Let's build something together."
        subtitle="Tell us about your project. We will respond within 24 hours with next steps."
      />

      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-10">
          {/* Form */}
          <SectionReveal>
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
              {sent && (
                <motion.div initial={{ opacity: 0, y: -10 }} animate={{ opacity: 1, y: 0 }} className="mb-5 p-4 rounded-lg bg-green-500/10 border border-green-500/30 flex items-center gap-2 text-green-400 text-sm">
                  <CheckCircle2 size={18} /> Thank you! We will be in touch within 24 hours.
                </motion.div>
              )}
              <form onSubmit={handleSubmit} className="space-y-5">
                <div>
                  <label className="block text-sm text-white/70 mb-2">Full Name</label>
                  <input required value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Jane Doe" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Email</label>
                  <input required type="email" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="jane@company.com" />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Company</label>
                  <input value={form.company} onChange={(e) => setForm({ ...form, company: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors" placeholder="Acme Inc." />
                </div>
                <div>
                  <label className="block text-sm text-white/70 mb-2">Message</label>
                  <textarea required rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white placeholder-white/40 focus:outline-none focus:border-blue-500/50 transition-colors resize-none" placeholder="Tell us about your project..." />
                </div>
                <button type="submit" className="btn-primary w-full justify-center"><span>Send Message</span><Send size={18} /></button>
              </form>
            </div>
          </SectionReveal>

          {/* Info */}
          <SectionReveal delay={0.1}>
            <div className="space-y-6">
              {/* Offices */}
              <div className="glass-card p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2"><MapPin size={18} className="text-blue-400" /> Our Offices</h3>
                <div className="space-y-4">
                  {offices.map((o) => (
                    <div key={o.city} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                      <p className="font-semibold text-sm">{o.city}</p>
                      <p className="text-white/60 text-sm mt-1">{o.address}</p>
                      <p className="text-white/60 text-sm flex items-center gap-1 mt-1"><Phone size={12} /> {o.phone}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Business hours */}
              <div className="glass-card p-6">
                <h3 className="font-bold mb-4 flex items-center gap-2"><Clock size={18} className="text-blue-400" /> Business Hours</h3>
                <div className="space-y-2">
                  {hours.map((h) => (
                    <div key={h.day} className="flex justify-between text-sm">
                      <span className="text-white/60">{h.day}</span>
                      <span className="text-white/80">{h.time}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct contact */}
              <div className="glass-card p-6">
                <h3 className="font-bold mb-4">Direct Contact</h3>
                <div className="space-y-3">
                  <a href="mailto:hello@nexoratech.com" className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors text-sm"><Mail size={16} /> hello@nexoratech.com</a>
                  <a href="tel:+14155550199" className="flex items-center gap-2 text-white/70 hover:text-blue-400 transition-colors text-sm"><Phone size={16} /> +1 (415) 555-0199</a>
                </div>
                <div className="flex gap-3 mt-5">
                  {[Linkedin, Twitter, Github].map((Icon, i) => (
                    <a key={i} href="#" className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-blue-500/50 transition-all" aria-label="Social link">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>

              {/* Map */}
              <div className="glass-card p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold flex items-center gap-2"><MapPin size={18} className="text-blue-400" /> Find Us</h3>
                  <a
                    href="https://www.google.com/maps/dir/?api=1&destination=535+Mission+St+San+Francisco+CA+94105"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary !py-2 !px-4 text-sm"
                  >
                    <span>Get Directions</span><Navigation size={16} />
                  </a>
                </div>
                <div className="relative h-64 rounded-xl overflow-hidden border border-white/10">
                  <iframe
                    title="Nexora Tech Headquarters"
                    src="https://www.google.com/maps?q=535+Mission+St+San+Francisco+CA+94105&output=embed"
                    className="w-full h-full"
                    style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg) saturate(0.4) brightness(0.9)' }}
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    allowFullScreen
                  />
                </div>
                <p className="text-white/50 text-xs mt-3">535 Mission St, 14th Floor, San Francisco, CA 94105</p>
              </div>
            </div>
          </SectionReveal>
        </div>
      </section>
    </>
  );
}
