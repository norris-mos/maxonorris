import { Link } from 'react-router-dom';
import { ArrowLeft, AlertCircle } from 'lucide-react';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';

function NotFoundPage() {
  return (
    <div className="relative min-h-screen bg-cream flex flex-col">
      <Navigation />

      <main className="relative flex-1 flex items-center justify-center px-6 lg:px-12">
        <div className="max-w-2xl mx-auto text-center">
          {/* Icon */}
          <div className="flex justify-center mb-8">
            <div className="p-6 bg-terracotta/10 rounded-full">
              <AlertCircle className="w-16 h-16 text-terracotta" />
            </div>
          </div>

          {/* Heading */}
          <h1 className="font-serif heading-editorial text-display text-charcoal mb-4">
            Page not found
          </h1>

          {/* Description */}
          <p className="body-editorial text-body text-charcoal-light mb-8 leading-relaxed">
            The page you're looking for doesn't exist or may have been moved.
            Let's get you back on track.
          </p>

          {/* Action */}
          <Link
            to="/"
            className="inline-flex items-center gap-3 px-6 py-4 bg-charcoal text-white hover:bg-terracotta transition-colors duration-300"
          >
            <ArrowLeft className="w-4 h-4" />
            <span className="text-body">Back to home</span>
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default NotFoundPage;
