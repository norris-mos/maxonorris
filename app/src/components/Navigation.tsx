import { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Menu, X, ArrowLeft } from 'lucide-react';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isDetailPage = location.pathname.startsWith('/research/');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMobileMenuOpen(false);
    }
  };

  const navLinks = [
    { label: 'About', id: 'about' },
    { label: 'Research', id: 'research' },
    { label: 'Contact', id: 'contact' },
  ];

  return (
    <>
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-expo-out ${
          isScrolled
            ? 'bg-cream/95 backdrop-blur-sm py-4 border-b border-charcoal/5'
            : 'bg-transparent py-6'
        }`}
      >
        <div className="w-full px-6 lg:px-12 flex items-center justify-between">
          {/* Logo */}
          <Link
            to="/"
            className="group"
          >
            <span className="font-serif text-xl font-medium tracking-tight text-charcoal group-hover:text-terracotta transition-colors duration-300">
              Max Norris
            </span>
          </Link>

          {/* Detail Page Back Button (Desktop) */}
          {isDetailPage ? (
            <Link
              to="/#research"
              className="hidden md:flex items-center gap-2 text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to research</span>
            </Link>
          ) : (
            <>
              {/* Desktop Navigation */}
              <div className="hidden md:flex items-center gap-10">
                {navLinks.map((link) => (
                  <button
                    key={link.id}
                    onClick={() => scrollToSection(link.id)}
                    className="nav-link"
                  >
                    {link.label}
                  </button>
                ))}
              </div>

              {/* CTA Button */}
              <button
                onClick={() => scrollToSection('contact')}
                className="hidden md:block btn-editorial text-xs"
              >
                Get in touch
              </button>
            </>
          )}

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 text-charcoal"
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? (
              <X className="w-5 h-5" />
            ) : (
              <Menu className="w-5 h-5" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-40 bg-cream transition-transform duration-500 ease-expo-out md:hidden ${
          isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {isDetailPage ? (
            <Link
              to="/#research"
              className="flex items-center gap-2 text-xl text-charcoal hover:text-terracotta transition-colors duration-300"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              <ArrowLeft className="w-5 h-5" />
              <span>Back to research</span>
            </Link>
          ) : (
            <>
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => scrollToSection(link.id)}
                  className="font-serif text-2xl text-charcoal hover:text-terracotta transition-colors duration-300"
                >
                  {link.label}
                </button>
              ))}
              <button
                onClick={() => scrollToSection('contact')}
                className="mt-8 btn-editorial"
              >
                Get in touch
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Navigation;
