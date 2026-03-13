import { useEffect, useRef, useState } from 'react';
import { Mail, MapPin, Linkedin, Twitter, Github, Send, ArrowUpRight } from 'lucide-react';
import { toast } from 'sonner';

const Contact = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    toast.success("Message sent!", {
      description: "Thanks for reaching out. I'll get back to you soon.",
    });
    
    setFormData({ name: '', email: '', message: '' });
    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const socialLinks = [
    { icon: Twitter, label: 'Twitter', href: '#' },
    { icon: Github, label: 'GitHub', href: '#' },
    { icon: Linkedin, label: 'LinkedIn', href: '#' },
  ];

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative w-full py-32 bg-charcoal text-cream"
    >
      <div className="w-full px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="max-w-2xl mb-20">
            <span className="reveal-item section-reveal tag-editorial bg-cream/10 text-cream/70 mb-6">
              Contact
            </span>
            <h2 className="reveal-item section-reveal font-serif heading-editorial text-title text-cream mb-6">
              Let's <em className="text-terracotta">talk</em>.
            </h2>
            <p className="reveal-item section-reveal body-editorial text-body-lg text-cream/70">
              If you're working on educational AI, student modelling, cognition, or
              responsible deployment in schools, I'd be glad to hear from you.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-20">
            {/* Contact Form */}
            <div className="reveal-item section-reveal">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm text-cream/50 mb-2">
                    Name
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your name"
                    className="input-editorial bg-cream/5 border-cream/10 text-cream placeholder:text-cream/30 focus:border-terracotta"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm text-cream/50 mb-2">
                    Email
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="you@example.com"
                    className="input-editorial bg-cream/5 border-cream/10 text-cream placeholder:text-cream/30 focus:border-terracotta"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm text-cream/50 mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    required
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="What's on your mind?"
                    rows={5}
                    className="input-editorial bg-cream/5 border-cream/10 text-cream placeholder:text-cream/30 focus:border-terracotta resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-editorial bg-terracotta hover:bg-terracotta-light disabled:opacity-50 w-full sm:w-auto"
                >
                  {isSubmitting ? (
                    <span className="flex items-center gap-2">
                      <span className="w-4 h-4 border-2 border-cream/30 border-t-cream rounded-full animate-spin" />
                      Sending...
                    </span>
                  ) : (
                    <span className="flex items-center gap-2">
                      <Send className="w-4 h-4" />
                      Send message
                    </span>
                  )}
                </button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-12">
              {/* Direct Contact */}
              <div className="reveal-item section-reveal">
                <h3 className="font-serif text-body font-medium text-cream mb-6">
                  Direct contact
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:s2583684@ed.ac.uk"
                    className="flex items-center gap-4 group"
                  >
                    <div className="w-10 h-10 rounded bg-cream/5 flex items-center justify-center">
                      <Mail className="w-4 h-4 text-terracotta" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/50">Email</p>
                      <p className="text-body text-cream group-hover:text-terracotta transition-colors duration-300">
                        s2583684@ed.ac.uk
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 ml-auto opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </a>

                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded bg-cream/5 flex items-center justify-center">
                      <MapPin className="w-4 h-4 text-terracotta" />
                    </div>
                    <div>
                      <p className="text-sm text-cream/50">Location</p>
                      <p className="text-body text-cream">
                        Edinburgh, Scotland
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Links */}
              <div className="reveal-item section-reveal">
                <h3 className="font-serif text-body font-medium text-cream mb-6">
                  Find me online
                </h3>
                <div className="flex gap-3">
                  {socialLinks.map((social) => (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      className="w-10 h-10 rounded bg-cream/5 hover:bg-terracotta flex items-center justify-center transition-all duration-300 group"
                    >
                      <social.icon className="w-4 h-4 text-cream/70 group-hover:text-cream transition-colors duration-300" />
                    </a>
                  ))}
                </div>
              </div>

              {/* Availability */}
              <div className="reveal-item section-reveal p-6 rounded bg-cream/5">
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-2 h-2 rounded-full bg-sage animate-pulse" />
                  <span className="text-sm text-sage">Open to opportunities</span>
                </div>
                <p className="text-body-sm text-cream/50 leading-relaxed">
                  Interested in roles and collaborations in educational AI, cognitive
                  modelling, learning sciences, and applied research on human behaviour
                  in real-world settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
