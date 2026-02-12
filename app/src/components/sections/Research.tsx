import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, FileText } from 'lucide-react';
import { researchItems } from '../../data/research';

const Research = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [activeFilter, setActiveFilter] = useState('all');

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 80);
            });
          }
        });
      },
      { threshold: 0.1, rootMargin: '-50px' }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  // Re-trigger reveal animation when filter changes
  useEffect(() => {
    const elements = sectionRef.current?.querySelectorAll('.reveal-item');
    elements?.forEach((el, index) => {
      el.classList.remove('revealed');
      setTimeout(() => {
        el.classList.add('revealed');
      }, index * 80);
    });
  }, [activeFilter]);

  const filters = [
    { id: 'all', label: 'Everything' },
    { id: 'publication', label: 'Publications' },
    { id: 'project', label: 'Projects' },
    { id: 'policy', label: 'Policy Work' },
    { id: 'fun', label: 'Fun' },
  ];

  const filteredItems = activeFilter === 'all' 
    ? researchItems 
    : researchItems.filter(item => item.type === activeFilter);

  return (
    <section
      id="research"
      ref={sectionRef}
      className="relative w-full py-32 bg-cream-dark"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-16">
            <div>
              <span className="reveal-item section-reveal tag-editorial mb-6">
                Research & Projects
              </span>
              <h2 className="reveal-item section-reveal font-serif heading-editorial text-title text-charcoal">
                Selected <em className="text-terracotta">work</em>
              </h2>
            </div>

            {/* Filter Tabs */}
            <div className="reveal-item section-reveal flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter.id}
                  onClick={() => setActiveFilter(filter.id)}
                  className={`px-4 py-2 text-sm transition-all duration-300 ${
                    activeFilter === filter.id
                      ? 'bg-charcoal text-white'
                      : 'bg-white text-charcoal-light hover:text-charcoal'
                  }`}
                >
                  {filter.label}
                </button>
              ))}
            </div>
          </div>

          {/* Content Grid */}
          <div className="grid md:grid-cols-2 gap-8">
            {filteredItems.map((item) => (
              <article
                key={item.id}
                className="reveal-item section-reveal group card-editorial p-8"
              >
                {/* Meta */}
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-caption text-warm-gray uppercase tracking-wider">
                    {item.type === 'publication' ? item.venue : item.date}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-warm-gray/50" />
                  <span className="text-caption text-terracotta">
                    {item.type}
                  </span>
                </div>

                {/* Title */}
                <h3 className="font-serif text-title text-charcoal mb-4 group-hover:text-terracotta transition-colors duration-300">
                  {item.title}
                </h3>

                {/* Excerpt */}
                <p className="body-editorial text-body-sm mb-6">
                  {item.excerpt}
                </p>

                {/* Footer */}
                <div className="flex items-center justify-between">
                  <div className="flex flex-wrap gap-2">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-caption text-warm-gray"
                      >
                        #{tag}
                      </span>
                    ))}
                  </div>
                  <Link
                    to={`/research/${item.slug}`}
                    className="flex items-center gap-1 text-sm text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </Link>
                </div>
              </article>
            ))}
          </div>

          {/* View All */}
          <div className="reveal-item section-reveal mt-16 text-center">
            <a
              href="https://arxiv.org/abs/2511.02599"
              className="inline-flex items-center gap-3 text-body text-charcoal hover:text-terracotta transition-colors duration-300 group"
            >
              <FileText className="w-5 h-5" />
              <span>Read my latest paper</span>
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Research;
