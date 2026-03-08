import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, Shield, Droplets, Sun, Truck, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';
import SeoHead from '../components/SeoHead';

export default function Services() {
  const services = [
    {
      id: 'garage',
      title: 'Garage Floor Coatings',
      icon: Truck,
      image: 'garagefloor2',
      description: 'Transform your garage into a clean, functional, and beautiful extension of your home. Our industrial-grade epoxy and polyaspartic coatings are designed to withstand the toughest conditions.',
      benefits: [
        'Durable epoxy or polyaspartic options',
        'Highly resistant to chemicals, oil, and gas',
        'Prevents hot tire pickup and peeling',
        'Incredibly easy to clean and maintain',
        'Available in a wide variety of flake colors'
      ]
    },
    {
      id: 'patio',
      title: 'Patio Coatings',
      icon: Sun,
      image: 'patio2',
      description: 'Upgrade your outdoor living space with a coating that is as beautiful as it is durable. Perfect for Texas summers, our patio coatings provide a safe, stylish surface for entertaining.',
      benefits: [
        'Slip-resistant surfaces for safety around pools or rain',
        '100% UV resistant (will not yellow or fade)',
        'Withstands extreme temperature fluctuations',
        'Customizable stylish finishes to match your home exterior',
        'Protects underlying concrete from moisture damage'
      ]
    },
    {
      id: 'driveway',
      title: 'Driveway Coatings',
      icon: Shield,
      image: 'driveway2',
      description: 'Your driveway is the first thing people see. Enhance your curb appeal while protecting your investment from the harsh elements, vehicle traffic, and fluid leaks.',
      benefits: [
        'Protects concrete from cracking, spalling, and pitting',
        'Seals against weather damage and freeze/thaw cycles',
        'Long-lasting protection that outlasts standard sealers',
        'Resists tire marks and automotive fluids',
        'Dramatically improves curb appeal'
      ]
    },
    {
      id: 'commercial',
      title: 'Commercial Concrete Coatings',
      icon: Droplets,
      image: 'warehouse2',
      description: 'We provide heavy-duty flooring solutions for businesses that demand performance. From warehouses to retail showrooms, we install floors that work as hard as you do.',
      benefits: [
        'Ideal for warehouses, retail spaces, and industrial floors',
        'Withstands heavy forklift and foot traffic',
        'Meets safety and sanitation requirements',
        'Minimal downtime with fast-curing options',
        'Highly reflective surfaces can reduce lighting costs'
      ]
    }
  ];

  return (
    <div className="w-full pt-20">
      <SeoHead
        title="Garage Floor & Epoxy Coatings Lubbock | Ram & Co Services"
        description="Garage floor, patio, driveway, and commercial concrete coatings in Lubbock, TX. Decorative flake and epoxy systems. Free estimates."
      />
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Concrete coating services"
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">Our Services</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light">
              Professional concrete coating solutions for every surface. Durable, beautiful, and built to last.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Services List */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              
              <div className="w-full lg:w-1/2">
                <div className="relative aspect-[4/3] rounded overflow-hidden shadow-xl">
                  <img 
                    src={`/images/${service.id}.jpg`} 
                    alt={service.title} 
                    className="w-full h-full object-cover"
                    onError={(e) => { (e.target as HTMLImageElement).src = `https://picsum.photos/seed/${service.image}/800/600`; }}
                  />
                  <div className="absolute inset-0 ring-1 ring-inset ring-black/10 rounded"></div>
                </div>
              </div>

              <div className="w-full lg:w-1/2">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center shrink-0">
                    <service.icon className="w-6 h-6" />
                  </div>
                  <h2 className="font-heading text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">{service.title}</h2>
                </div>
                
                <p className="text-lg text-slate-600 mb-8 leading-relaxed">
                  {service.description}
                </p>

                <div className="bg-slate-50 p-6 rounded border border-slate-100 mb-8">
                  <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-4">Key Benefits</h3>
                  <ul className="space-y-3">
                    {service.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-start gap-3 text-slate-700">
                        <CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0 mt-0.5" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Link 
                  to="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-slate-900 hover:bg-slate-800 hover:-translate-y-0.5 active:scale-[0.98] text-white font-bold uppercase tracking-wider transition-all duration-200 gap-2 text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-2"
                >
                  Get a Quote for Your {service.title.split(' ')[0]}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>

            </div>
          ))}
        </div>
      </section>

      {/* Decorative flake / epoxy systems */}
      <section className="py-24 bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="flex-1">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded-lg flex items-center justify-center shrink-0">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight">Decorative Flake & Epoxy Systems</h2>
              </div>
              <p className="text-lg text-slate-600 mb-6 leading-relaxed">
                Customize your floor with decorative color chips and metallic epoxy options. We offer a wide range of flake colors and finishes to match your space—from subtle to bold. Our epoxy systems are industrial-grade and built to last in Texas conditions.
              </p>
              <ul className="space-y-3">
                {['Multiple flake colors and sizes', 'Metallic and solid epoxy options', 'Seamless, easy-to-clean surface', 'Residential and commercial'].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-slate-700">
                    <CheckCircle2 className="w-5 h-5 text-slate-700 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="w-full md:w-1/2 aspect-[4/3] rounded-lg overflow-hidden shadow-xl bg-slate-200">
              <img
                src="/images/garage-epoxy-flake.jpg"
                alt="Decorative flake epoxy garage floor"
                className="w-full h-full object-cover"
                onError={(e) => { (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80'; }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black text-white text-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-4xl font-bold tracking-tight mb-6">Not Sure What You Need?</h2>
          <p className="text-xl text-slate-300 mb-10">
            Our experts can assess your concrete and recommend the perfect coating system for your specific needs and budget.
          </p>
          <Link 
            to="/contact" 
            className="btn-primary bg-slate-900 hover:bg-slate-800"
          >
            Schedule a Free Consultation
            <ArrowRight className="w-5 h-5" />
          </Link>
        </div>
      </section>
    </div>
  );
}
