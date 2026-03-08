import { Link } from 'react-router-dom';
import { ArrowRight, MapPin, Users, ShieldCheck, Wrench } from 'lucide-react';
import { motion } from 'motion/react';
import SeoHead from '../components/SeoHead';

const PREP_IMG = '/images/prep-concrete.jpg';
const INSTALL_IMG = '/images/install-coating.jpg';
const FINISHED_IMG = '/images/finished-floor.jpg';
const FALLBACK = 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80';

export default function About() {
  return (
    <div className="w-full pt-20">
      <SeoHead
        title="About Ram & Co | Concrete Coating Contractors Lubbock TX"
        description="Local Lubbock concrete coating company. Quality craftsmanship, reliable service, and durable Texas-ready coatings. Member of Small Businesses of LBK."
      />
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Lubbock Texas concrete coating"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">About Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light">
              Built on hard work, trust, and craftsmanship. We are Lubbock's premier concrete coating specialists.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <div className="aspect-[4/3] rounded-lg overflow-hidden shadow-2xl">
                <img
                  src={PREP_IMG}
                  alt="Concrete preparation"
                  className="w-full h-full object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-black text-white p-8 rounded shadow-xl max-w-xs hidden md:block">
                <div className="text-3xl font-extrabold mb-2">Local & Proud</div>
                <div className="font-bold uppercase tracking-wider text-sm opacity-90">Serving the Lubbock community with integrity.</div>
              </div>
            </div>

            <div>
              <span className="inline-block py-1 px-3 rounded bg-slate-100 text-slate-800 font-bold tracking-widest uppercase text-xs mb-4">
                Our Story
              </span>
              <h2 className="font-heading text-4xl font-bold text-slate-900 tracking-tight mb-6">
                Rooted in West Texas Values
              </h2>
              <div className="space-y-6 text-lg text-slate-600 leading-relaxed">
                <p>
                  Ram & Co Concrete Coatings was founded with a simple mission: to provide the homeowners and businesses of Lubbock with a flooring solution that actually lasts. We grew tired of seeing peeling epoxy kits and cracked concrete that couldn't stand up to the extreme West Texas weather.
                </p>
                <p>
                  We built this company on the pillars of hard work, trust, and uncompromising craftsmanship. When you hire us, you aren't just getting a contractor; you're partnering with a local team that treats your property with the same respect we treat our own.
                </p>
                <p>
                  We are a proud member of the Small Businesses of LBK (since January 21, 2026), and we believe in honest pricing, reliable service, and delivering a product that exceeds expectations every single time.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process imagery: prep, install, finished */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { src: PREP_IMG, alt: 'Concrete preparation', label: 'Preparation' },
              { src: INSTALL_IMG, alt: 'Coating installation', label: 'Installation' },
              { src: FINISHED_IMG, alt: 'Finished floor', label: 'Finished Result' },
            ].map((item, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md border border-slate-100">
                <img
                  src={item.src}
                  alt={item.alt}
                  className="w-full aspect-[4/3] object-cover"
                  onError={(e) => { (e.target as HTMLImageElement).src = FALLBACK; }}
                />
                <p className="p-4 font-heading font-bold text-slate-900 uppercase tracking-wider text-sm text-center">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl font-bold text-slate-900 tracking-tight mb-4">Our Core Values</h2>
            <p className="text-slate-600 text-lg">
              These principles guide every project we take on, from a small residential patio to a massive commercial warehouse.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Locally Focused', desc: 'We live here, we work here, and we care about our Lubbock community.' },
              { icon: Wrench, title: 'Quality Craftsmanship', desc: 'We never cut corners. Proper preparation and premium materials are our standard.' },
              { icon: ShieldCheck, title: 'Built for Texas', desc: 'Our coatings are specifically chosen to withstand extreme heat, UV rays, and harsh conditions.' },
              { icon: Users, title: 'Honest & Reliable', desc: 'Transparent pricing, clear communication, and showing up when we say we will.' }
            ].map((value, i) => (
              <div key={i} className="bg-white p-8 rounded shadow-sm border border-slate-100 text-center group hover:border-slate-400 transition-colors">
                <div className="w-16 h-16 mx-auto bg-slate-100 text-slate-700 rounded-full flex items-center justify-center mb-6 group-hover:bg-black group-hover:text-white transition-colors">
                  <value.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-600">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-concrete text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">Experience the Ram & Co Difference</h2>
          <p className="text-xl text-slate-400 mb-10">
            Ready to work with a contractor you can trust? Let's discuss your concrete coating project today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Get a Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+18065550123" className="btn-secondary w-full sm:w-auto border-slate-700 bg-slate-800 text-white hover:bg-slate-700 hover:border-slate-600">
              Call (806) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
