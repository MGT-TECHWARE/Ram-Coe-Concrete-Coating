import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';
import { motion } from 'motion/react';
import SeoHead from '../components/SeoHead';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    projectType: 'garage',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', phone: '', email: '', projectType: 'garage', message: '' });
      setTimeout(() => setSubmitStatus('idle'), 5000);
    }, 1500);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <div className="w-full pt-20">
      <SeoHead
        title="Contact | Free Concrete Coating Estimate Lubbock TX"
        description="Get a free estimate for concrete coatings in Lubbock, TX. Contact Ram & Co for garage, patio, driveway, and commercial flooring."
      />
      {/* Page Header */}
      <section className="bg-slate-900 text-white py-24 relative overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=1920&q=80"
            alt="Contact Ram & Co"
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
            <h1 className="font-heading text-5xl md:text-6xl font-bold tracking-tight mb-4">Contact Us</h1>
            <p className="text-xl text-slate-300 max-w-2xl font-light">
              Ready for a free estimate? Reach out today and let's discuss your concrete coating project in Lubbock, TX.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Contact Info & Map */}
            <div className="space-y-12">
              <div>
                <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight mb-8">Get in Touch</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-1">Call Us</h3>
                      <a href="tel:+18065550123" className="text-lg text-slate-600 hover:text-black transition-colors font-medium">(806) 555-0123</a>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-1">Email Us</h3>
                      <a href="mailto:info@ramandcocoatings.com" className="text-lg text-slate-600 hover:text-black transition-colors font-medium">info@ramandcocoatings.com</a>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-1">Service Area</h3>
                      <p className="text-lg text-slate-600 font-medium">Lubbock, TX and surrounding areas</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-slate-100 text-slate-700 rounded flex items-center justify-center shrink-0">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h3 className="font-bold text-slate-900 uppercase tracking-wider text-sm mb-1">Business Hours</h3>
                      <p className="text-lg text-slate-600 font-medium">Mon-Fri: 8:00 AM - 6:00 PM<br/>Sat: 9:00 AM - 2:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map Embed */}
              <div className="bg-white p-2 rounded shadow-sm border border-slate-200">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d106368.12571732924!2d-101.95679549525412!3d33.57670196237699!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86fe12adecceea71%3A0x81d4fa66ac23decc!2sLubbock%2C%20TX!5e0!3m2!1sen!2sus!4v1709841234567!5m2!1sen!2sus" 
                  width="100%" 
                  height="300" 
                  style={{ border: 0, borderRadius: '0.25rem' }} 
                  allowFullScreen={false} 
                  loading="lazy" 
                  referrerPolicy="no-referrer-when-downgrade"
                  title="Lubbock Service Area"
                ></iframe>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-10 rounded shadow-xl border border-slate-200">
              <h2 className="font-heading text-3xl font-bold text-slate-900 tracking-tight mb-2">Request Your Free Estimate</h2>
              <p className="text-slate-600 mb-8">Fill out the form below and we'll get back to you within 24 hours.</p>

              {submitStatus === 'success' && (
                <div className="mb-8 p-4 bg-green-50 border border-green-200 text-green-700 rounded flex items-start gap-3">
                  <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0 mt-0.5">
                    <svg className="w-4 h-4 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                  </div>
                  <div>
                    <h4 className="font-bold">Message Sent Successfully!</h4>
                    <p className="text-sm">Thank you for reaching out. We will contact you shortly to schedule your free estimate.</p>
                  </div>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label htmlFor="name" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">Full Name *</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name" 
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0 focus-visible:border-slate-500"
                      placeholder="John Doe"
                    />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">Phone Number *</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0 focus-visible:border-slate-500"
                      placeholder="(806) 555-0123"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0 focus-visible:border-slate-500"
                    placeholder="john@example.com"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="projectType" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">Project Type *</label>
                  <select 
                    id="projectType" 
                    name="projectType" 
                    required
                    value={formData.projectType}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0 focus-visible:border-slate-500 appearance-none"
                  >
                    <option value="garage">Garage Floor Coating</option>
                    <option value="patio">Patio Coating</option>
                    <option value="driveway">Driveway Coating</option>
                    <option value="commercial">Commercial/Industrial Flooring</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="block text-sm font-bold text-slate-900 uppercase tracking-wider">Project Details *</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-md transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-500 focus-visible:ring-offset-0 focus-visible:border-slate-500 resize-none"
                    placeholder="Please describe your project (approximate square footage, current condition of concrete, etc.)"
                  ></textarea>
                </div>

                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="btn-primary w-full disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
                >
                  {isSubmitting ? 'Sending...' : 'Request Your Free Estimate'}
                  {!isSubmitting && <Send className="w-5 h-5" aria-hidden />}
                </button>
                <p className="text-xs text-slate-500 text-center mt-4">
                  We respect your privacy. Your information will never be shared.
                </p>
              </form>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
