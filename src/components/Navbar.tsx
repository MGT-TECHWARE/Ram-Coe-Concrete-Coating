import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Gallery', path: '/gallery' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-md border-b border-slate-200 py-3'
          : 'bg-transparent border-b border-transparent py-5 text-white'
      )}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <Link to="/" className={cn("flex items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 rounded-md", isScrolled ? "focus-visible:ring-slate-400" : "focus-visible:ring-white focus-visible:ring-offset-transparent")}>
            <img
              src="/images/logo-ram-and-co.png?v=2"
              alt="Ram & Co Concrete Coatings"
              className="h-28 sm:h-32 md:h-40 w-auto object-contain min-h-[7rem]"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className={cn(
                  'text-sm font-semibold uppercase tracking-wider transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-slate-400 focus-visible:ring-offset-2 rounded-md py-1',
                  location.pathname === link.path
                    ? 'text-black'
                    : isScrolled
                    ? 'text-slate-600 hover:text-black'
                    : 'text-white/95 hover:text-white'
                )}
              >
                {link.name}
              </Link>
            ))}
            <a
              href="tel:+18065550123"
              className={cn(
                "flex items-center gap-2 px-5 py-2.5 rounded-md font-bold text-sm uppercase tracking-wider transition-all duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
                isScrolled
                  ? "bg-black text-white hover:bg-slate-800 hover:-translate-y-0.5 hover:shadow-lg focus-visible:ring-slate-400"
                  : "bg-white text-black hover:bg-white/95 hover:-translate-y-0.5 focus-visible:ring-white/50"
              )}
            >
              <Phone className="w-4 h-4" />
              <span>(806) 555-0123</span>
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-4">
            <a
              href="tel:+18065550123"
              className={cn(
                "p-2 rounded-md",
                isScrolled ? "bg-slate-100 text-slate-900" : "bg-white/20 text-white hover:bg-white/30"
              )}
            >
              <Phone className="w-5 h-5" />
            </a>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={cn(
                "p-2 rounded-md",
                isScrolled ? "text-slate-900 hover:bg-slate-100" : "text-white hover:bg-white/20"
              )}
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsMobileMenuOpen(false)}
                className={cn(
                  'block px-3 py-4 text-base font-bold uppercase tracking-wider border-b border-slate-100',
                  location.pathname === link.path ? 'text-black' : 'text-slate-900'
                )}
              >
                {link.name}
              </Link>
            ))}
            <div className="pt-4 px-3">
              <a
                href="tel:+18065550123"
                className="flex items-center justify-center gap-2 w-full px-5 py-3 rounded-md bg-black text-white font-bold text-sm uppercase tracking-wider hover:bg-slate-800"
              >
                <Phone className="w-4 h-4" />
                <span>Call Now: (806) 555-0123</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
