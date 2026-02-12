import { useEffect, useRef } from 'react';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px' }
    );

    const elements = contentRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex items-center bg-cream"
    >
      <div
        ref={contentRef}
        className="relative z-10 w-full px-6 lg:px-12 py-32"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Small intro text */}
          <p className="reveal-item font-serif text-body text-warm-gray mb-8 italic">
            AI Researcher · Geopolitical Analyst · Founder
          </p>

          {/* Main Headline */}
          <h1 className="font-serif heading-editorial text-display-sm md:text-display text-charcoal mb-8">
            <span className="reveal-item block opacity-0 translate-y-6 transition-all duration-700 ease-expo-out delay-100">
              I study how AI systems
            </span>
            <span className="reveal-item block opacity-0 translate-y-6 transition-all duration-700 ease-expo-out delay-200">
              shape <em className="text-terracotta">global power</em>.
            </span>
          </h1>

          {/* Description */}
          <p className="reveal-item opacity-0 translate-y-6 transition-all duration-700 ease-expo-out delay-300 body-editorial text-body-lg max-w-2xl mx-auto mb-12">
            I'm a PhD researcher at the University of Edinburgh working on interpretable AI 
            and AI governance. Raised in Hong Kong with deep regional expertise across 
            Greater China and ASEAN, I bridge technical AI research with geopolitical analysis.
          </p>

          {/* CTA Buttons */}
          <div className="reveal-item opacity-0 translate-y-6 transition-all duration-700 ease-expo-out delay-400 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={scrollToAbout}
              className="btn-editorial"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4" />
            </button>
            <a
              href="#contact"
              className="btn-editorial-outline"
            >
              Get in touch
            </a>
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute bottom-12 left-1/2 -translate-x-1/2">
          <div className="w-px h-16 bg-gradient-to-b from-charcoal/20 to-transparent" />
        </div>
      </div>

      {/* Subtle background texture */}
      <div 
        className="absolute inset-0 opacity-[0.02] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />
    </section>
  );
};

export default Hero;
