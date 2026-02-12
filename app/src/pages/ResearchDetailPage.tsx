import { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { getResearchItemBySlug } from '../data/research';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function ResearchDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const item = slug ? getResearchItemBySlug(slug) : undefined;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!item) {
    navigate('/404', { replace: true });
    return null;
  }

  const typeLabels = {
    publication: 'Publication',
    project: 'Project',
    policy: 'Policy Work',
    fun: 'Fun',
  };

  return (
    <div className="relative min-h-screen bg-cream">
      <Navigation />

      <main className="relative w-full py-24 md:py-32">
        <article className="w-full px-6 lg:px-12">
          <div className="max-w-[45rem] mx-auto">
            {/* Back Button */}
            <Link
              to="/#research"
              className="inline-flex items-center gap-2 text-sm text-charcoal-light hover:text-terracotta transition-colors duration-300 mb-8"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Back to research</span>
            </Link>

            {/* Header */}
            <header className="mb-12">
              {/* Category Badge */}
              <div className="mb-6">
                <span className="inline-block px-3 py-1 bg-terracotta/10 text-terracotta text-sm uppercase tracking-wider">
                  {typeLabels[item.type]}
                </span>
              </div>

              {/* Title */}
              <h1 className="font-serif heading-editorial text-display text-charcoal mb-4">
                {item.title}
              </h1>

              {/* Subtitle */}
              {item.subtitle && (
                <p className="text-title text-charcoal-light mb-6 leading-relaxed">
                  {item.subtitle}
                </p>
              )}

              {/* Meta Bar */}
              <div className="flex flex-wrap items-center gap-3 text-caption text-warm-gray">
                <span>{item.date}</span>
                <span className="w-1 h-1 rounded-full bg-warm-gray/50" />
                <span>{item.venue}</span>
                {item.tags.length > 0 && (
                  <>
                    <span className="w-1 h-1 rounded-full bg-warm-gray/50" />
                    <div className="flex flex-wrap gap-2">
                      {item.tags.map((tag) => (
                        <span key={tag}>#{tag}</span>
                      ))}
                    </div>
                  </>
                )}
              </div>
            </header>

            {/* Overview */}
            <div className="mb-12">
              <p className="body-editorial text-body leading-relaxed text-charcoal-light">
                {item.fullContent.overview}
              </p>
            </div>

            {/* Sections */}
            <div className="space-y-12">
              {item.fullContent.sections.map((section, index) => (
                <section key={index}>
                  <h2 className="font-serif text-subtitle text-charcoal mb-4">
                    {section.heading}
                  </h2>
                  <p className="body-editorial text-body leading-relaxed text-charcoal-light whitespace-pre-line mb-6">
                    {section.content}
                  </p>
                  {/* Section Images */}
                  {section.images && section.images.length > 0 && (
                    <div className={`mt-8 grid gap-4 ${section.images.length === 1 ? 'grid-cols-1' : 'grid-cols-1 md:grid-cols-2'}`}>
                      {section.images.map((image, imgIndex) => (
                        <div key={imgIndex} className="overflow-hidden bg-cream-dark">
                          <img
                            src={image}
                            alt={`${section.heading} - Image ${imgIndex + 1}`}
                            className="w-full h-auto object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>

            {/* External Links */}
            {item.fullContent.externalLinks && item.fullContent.externalLinks.length > 0 && (
              <div className="mt-16 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-subtitle text-charcoal mb-6">
                  External Resources
                </h3>
                <div className="flex flex-col gap-4">
                  {item.fullContent.externalLinks.map((link, index) => (
                    <a
                      key={index}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-3 px-6 py-4 bg-charcoal text-white hover:bg-terracotta transition-colors duration-300 group"
                    >
                      <span className="text-body">{link.label}</span>
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                  ))}
                </div>
              </div>
            )}

            {/* Back to Research */}
            <div className="mt-16 pt-12 border-t border-charcoal/10">
              <Link
                to="/#research"
                className="inline-flex items-center gap-2 text-body text-charcoal hover:text-terracotta transition-colors duration-300"
              >
                <ArrowLeft className="w-4 h-4" />
                <span>Back to all research</span>
              </Link>
            </div>
          </div>
        </article>
      </main>

      <Footer />
    </div>
  );
}

export default ResearchDetailPage;
