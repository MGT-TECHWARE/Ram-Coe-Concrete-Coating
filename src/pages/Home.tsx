import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Star, MapPin, Shield, Wrench, Award } from 'lucide-react';
import { motion } from 'motion/react';
import SeoHead from '../components/SeoHead';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

const HERO_IMAGE = '/images/hero-garage.jpg';
const FALLBACK_HERO = 'https://images.unsplash.com/photo-1562259949-e8e7689d7828?w=1920&q=80';
const BEFORE_IMAGE = '/images/before-garage.jpg';
const AFTER_IMAGE = '/images/after-garage.jpg';
const FALLBACK_BEFORE = 'https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80';
const FALLBACK_AFTER = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80';

export default function Home() {
  return (
    <div className="w-full">
      <SeoHead
        title="Concrete Coatings Lubbock TX | Garage & Epoxy Flooring — Ram & Co"
        description="Premium concrete coatings in Lubbock, TX. Garage, patio, driveway & commercial epoxy flooring. Free estimates. Member Small Businesses of LBK."
      />
      {/* Hero — fills viewport on load so no white chunk below; lighter tones for logo visibility */}
      <section className="relative min-h-screen min-h-[100dvh] flex items-center justify-center pt-20 overflow-hidden bg-slate-200">
        <div className="absolute inset-0 z-0">
          <img
            src={HERO_IMAGE}
            alt="Finished epoxy flake garage floor — Ram & Co Concrete Coatings, Lubbock TX"
            className="w-full h-full object-cover"
            onError={(e) => {
              (e.target as HTMLImageElement).src = FALLBACK_HERO;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/20 via-slate-900/40 to-black/85" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.07, delayChildren: 0.1 } },
              hidden: {},
            }}
            className="max-w-4xl mx-auto"
          >
            <motion.span
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block py-2 px-4 rounded-md bg-white/15 text-white font-bold tracking-widest uppercase text-xs mb-6 border border-white/30"
            >
              Lubbock's Premier Coating Experts
            </motion.span>
            <motion.h1
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="font-heading text-5xl md:text-7xl font-bold text-white tracking-tight mb-6 leading-[1.1] drop-shadow-sm"
            >
              Premium Concrete Coatings in Lubbock Texas
            </motion.h1>
            <motion.p
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="text-xl md:text-2xl text-white/90 max-w-[65ch] mx-auto mb-10 font-light leading-relaxed"
            >
              Durable garage, patio, driveway, and commercial concrete coating systems built to last.
            </motion.p>
            <motion.div
              variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 12 } }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex flex-col sm:flex-row items-center justify-center gap-4"
            >
              <Link to="/contact" className="btn-primary w-full sm:w-auto group">
                Get Free Estimate
                <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-200" />
              </Link>
              <a href="tel:+18065550123" className="btn-secondary w-full sm:w-auto !bg-white/15 !border-white/40 !text-white hover:!bg-white/25 hover:!border-white/50">
                Call Now
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Trust Banner — B&W */}
      <section className="bg-black py-4 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 text-white font-bold uppercase tracking-wider text-sm">
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5" />
              <span>Fully Insured</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5" />
              <span>5-Star Rated</span>
            </div>
            <div className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              <span>Professional Installation</span>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview — classic B&W */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-black tracking-tight mb-4">
              Our Coating Services
            </h2>
            <p className="text-lg text-slate-700">
              High-performance floor coatings for residential and commercial properties throughout the Lubbock area.
            </p>
          </div>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: '-40px' }}
            variants={{
              visible: { transition: { staggerChildren: 0.08, delayChildren: 0.1 } },
              hidden: {},
            }}
          >
            {[
              { title: 'Garage Floor Coatings', desc: 'Durable epoxy and polyaspartic coatings that resist oil, chemicals, and hot tire pickup.', path: '/services#garage', img: '/images/garage.jpg' },
              { title: 'Patio Concrete Coatings', desc: 'UV-resistant, slip-resistant finishes for outdoor living spaces.', path: '/services#patio', img: '/images/patio.jpg' },
              { title: 'Driveway Coatings', desc: 'Protect concrete from cracking, spalling, and weather damage.', path: '/services#driveway', img: '/images/driveway.jpg' },
              { title: 'Commercial Concrete Coatings', desc: 'Industrial-grade flooring for warehouses, retail, and showrooms.', path: '/services#commercial', img: '/images/commercial.jpg' },
            ].map((service, i) => (
              <motion.div key={i} variants={{ visible: { opacity: 1, y: 0 }, hidden: { opacity: 0, y: 16 } }} transition={{ duration: 0.25, ease: 'easeOut' }}>
                <Link
                  to={service.path}
                  className="group block bg-slate-50 rounded-md overflow-hidden border border-slate-100 hover:border-slate-400 card-hover"
                >
                  <div className="aspect-[4/3] overflow-hidden bg-slate-200">
                    <img
                      src={service.img}
                      alt={service.title}
                      className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300 ease-out"
                      loading="lazy"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${service.title.slice(0, 6)}/400/300`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-heading text-xl font-bold text-slate-900 mb-2 group-hover:text-black transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p className="text-slate-600 text-sm mb-4 line-clamp-3 leading-relaxed">{service.desc}</p>
                    <span className="text-black font-bold text-sm uppercase tracking-wider flex items-center gap-1">
                      Learn More <ArrowRight className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Before & After */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              Before & After Projects
            </h2>
            <p className="text-lg text-slate-600">
              Concrete coatings work best visually—see the difference a professional coating system makes.
            </p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.5 }}
            className="max-w-5xl mx-auto"
          >
            <BeforeAfterSlider
              beforeSrc={BEFORE_IMAGE}
              afterSrc={AFTER_IMAGE}
              fallbackBefore={FALLBACK_BEFORE}
              fallbackAfter={FALLBACK_AFTER}
              beforeAlt="Worn concrete garage floor before coating"
              afterAlt="Epoxy garage floor with decorative flakes after coating"
            />
            <p className="text-center text-sm text-slate-500 mt-4">Drag the slider to compare before and after.</p>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Ram & Co */}
      <section className="py-24 bg-concrete text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-4">
              Why Choose Ram & Co
            </h2>
            <p className="text-slate-400 text-lg">
              Trust indicators that set us apart as Lubbock's concrete coating experts.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: MapPin, title: 'Local Lubbock Business', desc: 'We live and work here. Your neighbors trust us.' },
              { icon: Shield, title: 'High Durability Systems', desc: 'Coatings built to withstand Texas heat and heavy use.' },
              { icon: Wrench, title: 'Professional Installation', desc: 'Proper prep and expert application every time.' },
              { icon: Award, title: 'Free Estimates', desc: 'No obligation. Get a clear quote before you commit.' },
            ].map((item, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-md border border-slate-600/50 hover:border-white/30 transition-colors duration-200"
              >
                <div className="w-14 h-14 mx-auto bg-white/10 text-white rounded-full flex items-center justify-center mb-6">
                  <item.icon className="w-7 h-7" />
                </div>
                <h3 className="font-heading text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-400 text-sm">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership / Trust Badge */}
      <section className="py-12 bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 text-slate-700">
            <div className="flex items-center gap-4">
              <div className="w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center">
                <Award className="w-7 h-7 text-white" />
              </div>
              <div>
                <p className="font-heading font-bold text-slate-900 uppercase tracking-wider text-sm">
                  Member of Small Businesses of LBK
                </p>
                <p className="text-sm text-slate-500">Since January 21, 2026</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-heading text-4xl md:text-5xl font-bold text-slate-900 tracking-tight mb-4">
              What Lubbock is Saying
            </h2>
            <div className="flex justify-center gap-1 text-amber-500 mb-4">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-6 h-6 fill-current" />
              ))}
            </div>
            <p className="text-slate-600">Don't just take our word for it.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { name: 'Michael T.', location: 'Lubbock, TX', text: 'Ram & Co completely transformed our 2-car garage. The team was professional, on time, and the floor looks incredible. Highly recommend their polyaspartic coating!' },
              { name: 'Sarah J.', location: 'Wolfforth, TX', text: 'We had our back patio coated before summer. Not only does it look like a high-end resort, but the slip-resistant texture gives me peace of mind with the kids running around.' },
              { name: 'David R.', location: 'Lubbock, TX', text: 'As a local business owner, I needed a floor that could handle heavy foot traffic and equipment. They knocked it out of the park. Great local guys doing great work.' },
            ].map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.28, ease: 'easeOut' }}
                className="bg-white p-8 rounded-md shadow-sm border border-slate-100 relative card-hover"
              >
                <div className="absolute top-8 right-8 text-slate-200">
                  <svg width="40" height="40" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                    <path d="M14.017 21L16.41 14.594C16.645 13.918 16.762 13.204 16.762 12.479V3H22V12.479C22 14.868 21.365 17.184 20.17 19.166C19.034 21.049 17.51 22.573 15.627 23.709L14.017 21ZM4.017 21L6.41 14.594C6.645 13.918 6.762 13.204 6.762 12.479V3H12V12.479C12 14.868 11.365 17.184 10.17 19.166C9.034 21.049 7.51 22.573 5.627 23.709L4.017 21Z" />
                  </svg>
                </div>
                <div className="flex gap-1 text-amber-500 mb-6">
                  {[...Array(5)].map((_, j) => (
                    <Star key={j} className="w-4 h-4 fill-current" />
                  ))}
                </div>
                <p className="text-slate-700 mb-6 relative z-10 italic">"{review.text}"</p>
                <div>
                  <h4 className="font-bold text-slate-900">{review.name}</h4>
                  <p className="text-sm text-slate-500">{review.location}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA — strong black for classic contrast */}
      <section className="py-24 bg-black text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="font-heading text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Get Your Free Concrete Coating Estimate
          </h2>
          <p className="text-xl text-slate-400 mb-10">
            Contact Ram & Co today for a free, no-obligation estimate. Serving Lubbock and surrounding areas.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/contact" className="btn-primary w-full sm:w-auto">
              Request Free Estimate
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a href="tel:+18065550123" className="btn-secondary w-full sm:w-auto">
              Call (806) 555-0123
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
