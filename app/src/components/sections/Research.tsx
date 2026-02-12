import { useEffect, useRef, useState } from 'react';
import { ArrowUpRight, FileText } from 'lucide-react';

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

  const filters = [
    { id: 'all', label: 'Everything' },
    { id: 'publication', label: 'Publications' },
    { id: 'project', label: 'Projects' },
    { id: 'policy', label: 'Policy Work' },
  ];

  const researchItems = [
    {
      id: 1,
      type: 'publication',
      title: 'Next Token Knowledge Tracing',
      venue: 'arXiv Preprint',
      date: '2024',
      excerpt: 'A novel student modelling framework using LoRA fine-tuning for personalised knowledge tracing. Trained on 15M+ student interactions, achieving state-of-the-art performance across benchmarks.',
      link: 'https://arxiv.org/abs/2511.02599',
      tags: ['AI', 'Education', 'Personalisation'],
    },
    {
      id: 2,
      type: 'policy',
      title: 'Advising Dutch Ministry of Economic Affairs on AI Strategy',
      venue: 'Policy Advisory',
      date: '2024',
      excerpt: 'Advised on strategic funding priorities for national moonshot AI programmes, including evaluation of governance risks and high-impact research directions for safe AI deployment.',
      link: '#',
      tags: ['AI Governance', 'Policy', 'Europe'],
    },
    {
      id: 3,
      type: 'project',
      title: 'Broonie — Privacy-First GenAI for Schools',
      venue: 'Production System',
      date: '2024–Present',
      excerpt: 'Built GDPR-compliant AI platform with on-premise GPU cluster. Led LoRA fine-tuning pipeline achieving 40% lower perplexity on KS3 maths. Deployed in 3 pilot schools.',
      link: '#',
      tags: ['EdTech', 'Privacy', 'Deployment'],
    },
    {
      id: 4,
      type: 'publication',
      title: 'Curriculum Planning with Neurally Guided MCTS',
      venue: 'Research in Progress',
      date: '2024',
      excerpt: 'Investigating model-based planning algorithms for intelligent curriculum design and adaptive teaching strategies using Monte Carlo Tree Search guided by neural networks.',
      link: '#',
      tags: ['Planning', 'RL', 'Education'],
    },
    {
      id: 5,
      type: 'project',
      title: 'PIXEL LLM — Tokenizer-Free Language Models',
      venue: 'Collaboration with CDT NLP',
      date: '2023',
      excerpt: 'Developed extensions to pre-processing pipeline for pixel-based language models. Improved GLUE benchmark performance by 10 percentage points through novel tokenization-free approach.',
      link: '#',
      tags: ['NLP', 'Computer Vision', 'Models'],
    },
    {
      id: 6,
      type: 'project',
      title: 'Contenti — Bloom\'s Taxonomy Content Generator',
      venue: 'MSc Thesis',
      date: '2023',
      excerpt: 'Platform for teachers to generate educational content aligned with Bloom\'s Taxonomy levels. Used participatory design with educators to iteratively refine the system.',
      link: 'https://github.com/norris-mos/contenti-mono',
      tags: ['EdTech', 'LLMs', 'Design'],
    },
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
                  <a
                    href={item.link}
                    className="flex items-center gap-1 text-sm text-charcoal hover:text-terracotta transition-colors duration-300"
                  >
                    <span>View</span>
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                  </a>
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
