import { useEffect, useRef } from 'react';

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
      description: 'Built privacy-first GenAI platform with on-premise GPU infrastructure. Secured £40k non-dilutive funding, working directly with schools on responsible AI adoption.',
    },
    {
      period: '2023 — Present',
      role: 'PhD Researcher',
      institution: 'University of Edinburgh',
      description: 'Research on interpretable AI and personalised tutoring systems. UKRI-funded studentship working with Professor Kobi Gal on computational models of human learning.',
    },
    {
      period: '2025 — 2026',
      role: 'Lecturer / TA',
      institution: 'UCL',
      description: 'Delivering lectures on AI for knowledge management and education, supervising student projects on AI-powered educational applications.',
    },
    {
      period: '2022 — 2023',
      role: 'Applied Data Scientist',
      institution: 'Kidsloop',
      description: 'Developed speech recognition and knowledge tracing models deployed globally to education partners.',
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
                Bridging <em className="text-terracotta">AI research</em> with 
                geopolitical reality.
              </h2>

              <div className="reveal-item section-reveal space-y-6 body-editorial text-body">
                <p>
                  I grew up in Hong Kong, surrounded by the energy of a city that sits 
                  at the intersection of East and West. That upbringing shaped how I see 
                  the world—and how I approach my work in AI.
                </p>
                <p>
                  Today, I'm a PhD researcher at the University of Edinburgh's Centre for 
                  Doctoral Training in NLP, where I work on interpretable AI and intelligent 
                  tutoring systems. My research focuses on making AI systems more transparent, 
                  accountable, and safe to deploy—particularly in sensitive contexts like 
                  education and personalised decision-making.
                </p>
                <p>
                  My regional expertise runs deep. I spent two years at National Taiwan 
                  University, hold a degree in Economics and Chinese from SOAS, and speak 
                  Mandarin at professional fluency. I've advised the Dutch Ministry of 
                  Economic Affairs on strategic AI funding priorities and have built 
                  relationships across government, industry, and academia in both Europe 
                  and Asia.
                </p>
                <p>
                  As founder of Broonie, I've experienced firsthand the challenges of 
                  deploying AI responsibly—from navigating GDPR compliance to working 
                  directly with schools and local authorities on adoption strategies.
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
            </div>

            {/* Right Column - Experience */}
            <div className="lg:col-span-5">
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

              {/* Quote */}
              <blockquote className="reveal-item section-reveal pull-quote mt-12">
                "The most important questions in AI aren't technical—they're 
                about who holds power and how decisions get made."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
