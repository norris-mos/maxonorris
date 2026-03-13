import { useLocation, Link, useNavigate } from 'react-router-dom';
import { Twitter, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const scrollToSection = (href: string) => {
    if (href.startsWith('#')) {
      if (isHomePage) {
        const element = document.getElementById(href.slice(1));
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      } else {
        navigate('/' + href);
      }
    }
  };

  const socialLinks = [
    { icon: Twitter, href: '#', label: 'Twitter' },
    { icon: Github, href: '#', label: 'GitHub' },
    { icon: Linkedin, href: '#', label: 'LinkedIn' },
  ];

  return (
    <footer className="w-full bg-charcoal text-cream py-16 border-t border-cream/10">
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-8">
            {/* Logo & Tagline */}
            <div>
              <Link
                to="/"
                className="inline-block font-serif text-xl text-cream hover:text-terracotta transition-colors duration-300 mb-2"
              >
                Max Norris
              </Link>
              <p className="text-body-sm text-cream/50">
                AI Researcher · Cognitive Modelling · Education
              </p>
            </div>

            {/* Navigation */}
            <nav className="flex flex-wrap gap-6">
              {['About', 'Research', 'Contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(`#${item.toLowerCase()}`)}
                  className="text-sm text-cream/50 hover:text-cream transition-colors duration-300"
                >
                  {item}
                </button>
              ))}
            </nav>

            {/* Social Links */}
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-9 h-9 rounded bg-cream/5 hover:bg-terracotta flex items-center justify-center transition-all duration-300"
                >
                  <social.icon className="w-4 h-4 text-cream/50" />
                </a>
              ))}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="mt-12 pt-8 border-t border-cream/10 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-caption text-cream/30">
              © {currentYear} Max Norris
            </p>
            <p className="text-caption text-cream/30">
              Modelling learning, behaviour, and cognition with AI
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
