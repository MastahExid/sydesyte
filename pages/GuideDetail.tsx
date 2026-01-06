import React from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { ArrowLeft, Calendar, User } from 'lucide-react';
import { guidesData } from './Guides';

const GuideDetail: React.FC = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const guide = guidesData.find(g => g.id === id);

  if (!guide) {
    return (
      <div className="min-h-screen bg-[#0B0B15] text-white pt-40 text-center relative">
        <BackgroundGradients />
        <div className="relative z-10">
          <h1 className="text-4xl font-bold mb-4">Guide not found</h1>
          <Link to="/guides" className="text-syde-blue hover:underline">Back to Guides</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn direction="none">
          <button 
            onClick={() => navigate('/guides')}
            className="flex items-center gap-2 text-gray-400 hover:text-white transition-colors mb-8 group"
          >
            <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
            <span className="font-medium text-lg">Back to Guides</span>
          </button>
        </FadeIn>

        <FadeIn>
          <h1 className="text-4xl sm:text-6xl font-extrabold mb-8 tracking-tight">{guide.title}</h1>
          
          <div className="flex flex-wrap items-center gap-6 mb-12 text-gray-400 border-b border-white/5 pb-8">
            <div className="flex items-center gap-2">
              <Calendar size={18} className="text-[#D0609D]" />
              <span>Updated recently</span>
            </div>
            <div className="flex items-center gap-2">
              <User size={18} className="text-[#D0609D]" />
              <span>Syde Team</span>
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={200}>
          <div className="prose prose-invert max-w-none">
            <p className="text-xl text-gray-300 leading-relaxed whitespace-pre-line">
              {guide.content}
            </p>
          </div>
        </FadeIn>

        {/* Suggestion / Disclaimer area if needed */}
        <FadeIn delay={400} className="mt-20 p-8 bg-syde-card border border-white/5 rounded-3xl">
          <h3 className="text-xl font-bold mb-4 text-white">Still having trouble?</h3>
          <p className="text-gray-400 mb-6">If these steps didn't resolve your issue, feel free to join our community for direct support.</p>
          <Link to="/faq" className="text-syde-blue font-bold flex items-center gap-2 hover:underline">
            Go to Community & Support <ArrowLeft className="rotate-180" size={16} />
          </Link>
        </FadeIn>
      </div>
    </div>
  );
};

export default GuideDetail;