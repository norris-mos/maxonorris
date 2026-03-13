import { useEffect, useRef } from 'react';
import headshot from '@/assets/headshot.jpg';

const About = () => {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const elements = entry.target.querySelectorAll('.reveal-item');
            elements.forEach((el, index) => {
              setTimeout(() => {
                el.classList.add('revealed');
              }, index * 100);
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

  const experiences = [
    {
      period: '2024 — Present',
      role: 'Founder & Engineer',
      institution: 'Broonie (AI for Schools)',
      description: 'Building privacy-first AI tools for schools with on-premise GPU infrastructure, curriculum-aware workflows, and direct collaboration with educators on safe deployment.',
    },
    {
      period: '2023 — Present',
      role: 'PhD Researcher',
      institution: 'University of Edinburgh',
      description: 'Researching interpretable AI and personalised tutoring systems. UKRI-funded studentship supervised by Dr Sahan Bulathwela and Professor Kobi Gal on computational models of human learning and student behaviour.',
    },
    {
      period: '2025 — 2026',
      role: 'Lecturer / TA',
      institution: 'UCL',
      description: 'Delivering lectures on AI for knowledge management and education, supervising projects on classroom-facing AI systems and educational applications.',
    },
    {
      period: '2022 — 2023',
      role: 'Applied Data Scientist',
      institution: 'Kidsloop',
      description: 'Developed speech recognition and knowledge tracing models deployed globally to education partners for personalised support and learner progress modelling.',
    },
    {
      period: '2018 — 2019',
      role: 'Analyst',
      institution: 'CITIC CLSA, Hong Kong',
      description: 'Facilitated meetings between global asset managers and major listed companies. Supported senior analysts on China technology and industrial sectors.',
    },
  ];

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative w-full py-32 bg-cream"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Two Column Layout */}
          <div className="grid lg:grid-cols-12 gap-16">
            {/* Left Column - Bio */}
            <div className="lg:col-span-7">
              <span className="reveal-item section-reveal tag-editorial mb-6">
                About
              </span>
              
              <h2 className="reveal-item section-reveal font-serif heading-editorial text-title text-charcoal mb-8">
                Building <em className="text-terracotta">AI models</em> of learning
                and cognition.
              </h2>

              <div className="reveal-item section-reveal space-y-6 body-editorial text-body">
                <p>
                  My work sits at the intersection of AI, cognitive science, and education.
                  I'm interested in how we can model what learners know, how their behaviour
                  changes over time, and which interventions actually help them make progress.
                </p>
                <p>
                  At the University of Edinburgh's Centre for Doctoral Training in NLP, I
                  research interpretable AI and intelligent tutoring systems under the
                  supervision of Dr Sahan Bulathwela and Professor Kobi Gal. I build models
                  that infer latent knowledge, predict learning trajectories, and make
                  educational decision-making more transparent to teachers, researchers, and
                  institutions.
                </p>
                <p>
                  Educational settings are where these questions matter most. Through work at
                  Broonie, Kidsloop, and UCL, I've built and taught systems for knowledge
                  tracing, speech recognition, curriculum-aligned generation, and privacy-first
                  AI deployment in schools.
                </p>
                <p>
                  That combination of research and deployment shapes how I work: rigorous
                  modelling, careful evaluation, and close collaboration with educators so
                  that AI reflects the realities of human learning rather than flattening
                  them into abstract benchmarks.
                </p>
              </div>

              {/* Languages */}
              <div className="reveal-item section-reveal mt-12 pt-12 border-t border-charcoal/10">
                <h3 className="font-serif text-body font-medium text-charcoal mb-4">
                  Languages
                </h3>
                <div className="flex flex-wrap gap-4">
                  <span className="tag-editorial">Mandarin — Professional</span>
                  <span className="tag-editorial">Cantonese — Conversational</span>
                  <span className="tag-editorial">English — Native</span>
                </div>
              </div>

              {/* Quote */}
              <blockquote className="reveal-item section-reveal pull-quote mt-12">
                "The key to transformation is not to standardize education, but to
                personalize it, to build achievement on discovering the individual
                talents of each child." — Sir Ken Robinson
              </blockquote>
            </div>

            {/* Right Column - Experience */}
            <div className="lg:col-span-5">
              {/* Profile Photo */}
              <div className="reveal-item section-reveal mb-12">
                <div className="w-48 h-48 mx-auto lg:mx-0 overflow-hidden rounded-lg border border-charcoal/10 shadow-sm">
                  <img
                    src={headshot}
                    alt="Max Norris"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              <h3 className="reveal-item section-reveal font-serif text-heading-sm text-charcoal mb-8">
                Where I've worked
              </h3>

              <div className="space-y-8">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="reveal-item section-reveal group"
                  >
                    <div className="text-caption text-warm-gray mb-2">
                      {exp.period}
                    </div>
                    <h4 className="font-serif text-body font-medium text-charcoal group-hover:text-terracotta transition-colors duration-300">
                      {exp.role}
                    </h4>
                    <div className="text-body-sm text-warm-gray mb-2">
                      {exp.institution}
                    </div>
                    <p className="text-body-sm text-charcoal-light leading-relaxed">
                      {exp.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
