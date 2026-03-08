import { useState } from 'react';
import { motion } from 'motion/react';
import { Maximize2, X } from 'lucide-react';
import SeoHead from '../components/SeoHead';
import BeforeAfterSlider from '../components/BeforeAfterSlider';

export default function Gallery() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [filter, setFilter] = useState('all');

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'garage', label: 'Garages' },
    { id: 'patio', label: 'Patios' },
    { id: 'commercial', label: 'Commercial' },
  ];

  const images = [
    { id: 1, category: 'garage', src: 'https://picsum.photos/seed/garage1/800/600', alt: 'Garage Floor Coating Before and After' },
    { id: 2, category: 'patio', src: 'https://picsum.photos/seed/patio1/800/600', alt: 'Patio Concrete Coating' },
    { id: 3, category: 'commercial', src: 'https://picsum.photos/seed/warehouse1/800/600', alt: 'Commercial Warehouse Floor' },
    { id: 4, category: 'garage', src: 'https://picsum.photos/seed/garage2/800/600', alt: 'Epoxy Garage Floor' },
    { id: 5, category: 'patio', src: 'https://picsum.photos/seed/patio2/800/600', alt: 'Outdoor Patio Coating' },
    { id: 6, category: 'commercial', src: 'https://picsum.photos/seed/retail1/800/600', alt: 'Retail Space Flooring' },
    { id: 7, category: 'garage', src: 'https://picsum.photos/seed/garage3/800/600', alt: 'Polyaspartic Garage Floor' },
    { id: 8, category: 'patio', src: 'https://picsum.photos/seed/patio3/800/600', alt: 'Slip Resistant Patio' },
    { id: 9, category: 'commercial', src: 'https://picsum.photos/seed/industrial1/800/600', alt: 'Industrial Floor Coating' },
  ];

  const filteredImages = filter === 'all' ? images : images.filter(img => img.category === filter);

  return (
    <div className="w-full pt-20">
      <SeoHead
        title="Concrete Coating & Epoxy Gallery | Lubbock TX Projects"
        description="Before and after concrete coating projects in Lubbock, TX. Garage floors, decorative flake epoxy, commercial floors, outdoor patios."
      />
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Project gallery"
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">Project Gallery</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light">
              See the difference a premium concrete coating can make. Garage floors, decorative flake epoxy, commercial floors, outdoor patios.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="py-24 bg-white min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Before/After Slider */}
          <div className="max-w-5xl mx-auto mb-16">
            <h2 className="font-heading text-2xl font-bold text-slate-900 mb-6 text-center">Before & After</h2>
            <BeforeAfterSlider
              beforeSrc="/images/before-garage.jpg"
              afterSrc="/images/after-garage.jpg"
              fallbackBefore="https://images.unsplash.com/photo-1582735689369-4fe89db7114c?w=800&q=80"
              fallbackAfter="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80"
              beforeAlt="Before coating"
              afterAlt="After epoxy coating"
            />
          </div>

          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`px-6 py-2 rounded font-bold uppercase tracking-wider text-sm transition-colors ${
                  filter === cat.id 
                    ? 'bg-black text-white' 
                    : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>

          {/* Grid */}
          <motion.div 
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {filteredImages.map((image) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                key={image.id}
                className="group relative aspect-[4/3] overflow-hidden rounded bg-slate-100 cursor-pointer shadow-sm hover:shadow-xl transition-all"
                onClick={() => setSelectedImage(image.src)}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors flex items-center justify-center">
                  <div className="w-12 h-12 bg-black text-white rounded-full flex items-center justify-center opacity-0 group-hover:opacity-100 transform scale-50 group-hover:scale-100 transition-all duration-300">
                    <Maximize2 className="w-5 h-5" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-slate-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                  <p className="text-white font-bold text-sm">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>

        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div className="fixed inset-0 z-[100] bg-slate-950/95 backdrop-blur-sm flex items-center justify-center p-4">
          <button 
            onClick={() => setSelectedImage(null)}
            className="absolute top-6 right-6 w-12 h-12 bg-white/10 hover:bg-black text-white rounded-full flex items-center justify-center transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
          <img 
            src={selectedImage} 
            alt="Enlarged view" 
            className="max-w-full max-h-[90vh] object-contain rounded shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </div>
  );
}
