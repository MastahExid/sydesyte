import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Search, ArrowRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';

const NotFound: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B15] text-white flex items-center justify-center relative overflow-hidden px-4">
      <BackgroundGradients />
      
      <div className="relative z-10 max-w-2xl w-full text-center">
        <FadeIn direction="up">
          <div className="relative inline-block mb-8">
            <h1 className="text-[12rem] sm:text-[16rem] font-black leading-none tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white/10 to-transparent select-none">
              404
            </h1>
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="animate-float">
                <div className="w-32 h-32 bg-gradient-to-br from-[#D0609D] to-[#2444CD] rounded-3xl rotate-12 flex items-center justify-center shadow-2xl shadow-indigo-500/20 border border-white/20 backdrop-blur-sm">
                  <Search size={64} className="text-white -rotate-12" />
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <h2 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Looks like you're <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0609D] via-[#BF4386] to-[#D0609D] animate-text-gradient">Lost.</span>
          </h2>
          <p className="text-gray-400 text-xl mb-12 max-w-md mx-auto leading-relaxed">
            The page you're looking for doesn't exist or has been moved to another SYDE.
          </p>
        </FadeIn>

        <FadeIn delay={400}>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/"
              className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
            >
              <Home size={20} />
              Back to Home
            </Link>
            <Link 
              to="/guides"
              className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
            >
              View Guides
              <ArrowRight size={20} />
            </Link>
          </div>
        </FadeIn>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-2 bg-syde-blue rounded-full animate-pulse opacity-40"></div>
      <div className="absolute bottom-1/4 right-10 w-3 h-3 bg-[#D0609D] rounded-full animate-pulse opacity-40" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-1/2 right-1/4 w-1 h-1 bg-white rounded-full animate-pulse opacity-20"></div>
    </div>
  );
};

export default NotFound;