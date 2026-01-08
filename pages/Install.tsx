import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { Download, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Install: React.FC = () => {
  const [showThankYou, setShowThankYou] = useState(false);

  const handleDownloadClick = () => {
    setShowThankYou(true);
    // Trigger download from the provided direct download link
    const link = document.createElement('a');
    link.href = 'https://github.com/MastahExid/SydeIPAs/raw/refs/heads/main/Syde-28-12-25-Test.ipa'; 
    link.download = 'Syde.ipa';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />

      {/* Thank You Notification */}
      <div className={`fixed bottom-10 right-10 z-50 transition-all duration-500 transform ${showThankYou ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0 pointer-events-none'}`}>
        <div className="bg-syde-blue/90 backdrop-blur-xl border border-white/10 text-white px-8 py-6 rounded-2xl shadow-[0_0_50px_rgba(36,68,205,0.3)] flex items-center gap-4">
          <div className="bg-white/20 p-2 rounded-full"><CheckCircle2 size={24} /></div>
          <div>
            <h4 className="font-bold text-lg">Thank you for downloading Syde!</h4>
            <p className="text-sm opacity-80">Your sideloading journey starts here.</p>
          </div>
          <button onClick={() => setShowThankYou(false)} className="ml-4 hover:bg-white/10 p-1 rounded"><X size={16}/></button>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-6xl font-extrabold mb-6 tracking-tight">Download Syde</h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Get the latest version of Syde IPA. This is the official release for all supported iOS devices.</p>
          </div>
        </FadeIn>

        <div className="max-w-xl mx-auto mb-16">
          <FadeIn delay={100}>
            <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-white/20 transition-all shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-[#D0609D] group-hover:scale-110 transition-transform">
                  <Download size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Latest - v1.0.3</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Download the IPA file directly to your device and install using AltStore, SideStore, or your preferred sideloading method.
                </p>
              </div>
              <button 
                onClick={handleDownloadClick}
                className="w-full py-5 bg-[#D0609D] hover:bg-[#BF4386] text-white rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-[#D0609D]/20"
              >
                Download IPA
              </button>
            </div>
          </FadeIn>
        </div>

        <div className="mt-20 text-center">
          <p className="text-gray-400 text-lg mb-6">Don't know how to install?</p>
          <Link 
            to="/guides" 
            className="group inline-flex items-center gap-4 bg-white/5 hover:bg-white/10 px-10 py-5 rounded-full transition-all border border-white/5 hover:border-white/20"
          >
            <span className="font-bold text-lg">Getting Started with Syde</span>
            <ChevronRight className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>
    </div>
  );
};

export default Install;