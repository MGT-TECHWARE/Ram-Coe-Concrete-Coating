import { Link } from 'react-router-dom';
import { Facebook, Instagram, MapPin, Phone, Mail, Clock } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded-md">
              <img src="/images/logo-ram-and-co.png?v=2" alt="Ram & Co Concrete Coatings" className="h-24 w-auto object-contain" />
            </Link>
            <p className="text-sm leading-relaxed text-slate-400">
              Specializing in high-quality concrete coatings in Lubbock, TX. Durable, beautiful coatings for garages, patios, driveways, and commercial spaces.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 flex items-center justify-center hover:bg-white hover:text-slate-900 transition-colors">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Quick Links</h3>
            <ul className="space-y-4">
              <li><Link to="/" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded py-1">Home</Link></li>
              <li><Link to="/about" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded py-1">About Us</Link></li>
              <li><Link to="/services" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded py-1">Services</Link></li>
              <li><Link to="/gallery" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded py-1">Gallery</Link></li>
              <li><Link to="/contact" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-950 rounded py-1">Contact</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Our Services</h3>
            <ul className="space-y-4">
              <li><Link to="/services#garage" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded py-1">Garage Floor Coatings</Link></li>
              <li><Link to="/services#patio" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded py-1">Patio Coatings</Link></li>
              <li><Link to="/services#driveway" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded py-1">Driveway Coatings</Link></li>
              <li><Link to="/services#commercial" className="text-sm hover:text-white transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 rounded py-1">Commercial Coatings</Link></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-bold uppercase tracking-wider mb-6">Contact Us</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm">Serving Lubbock, TX and surrounding areas</span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-slate-400 shrink-0" />
                <a href="tel:+18065550123" className="text-sm hover:text-white transition-colors">(806) 555-0123</a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-slate-400 shrink-0" />
                <a href="mailto:info@ramandcocoatings.com" className="text-sm hover:text-white transition-colors">info@ramandcocoatings.com</a>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-slate-400 shrink-0 mt-0.5" />
                <span className="text-sm">Mon-Fri: 8am - 6pm<br/>Sat: 9am - 2pm</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} Ram & Co Concrete Coatings. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-xs text-slate-500">
            <span className="px-2 py-1 bg-slate-900 rounded border border-slate-800">
              Member of Small Businesses of LBK since Jan 2026
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
