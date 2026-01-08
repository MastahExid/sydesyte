import React from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { Code, Download, ExternalLink, Box, Zap } from 'lucide-react';

const Developers: React.FC = () => {
  const handleDownloadAssets = () => {
    window.open('https://www.google.com', '_blank');
  };

  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="mb-20 text-center md:text-left">
            <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
              For <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0609D] via-[#BF4386] to-[#D0609D] animate-text-gradient">Developers</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-3xl leading-relaxed">
              Resources and assets to help you integrate Syde into your workflow and projects.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-12 mb-20">
          {/* Asset Section */}
          <FadeIn delay={100} direction="right">
            <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-white/20 transition-all">
              <div className="w-14 h-14 bg-syde-blue/10 text-syde-blue rounded-2xl flex items-center justify-center mb-8 border border-syde-blue/20">
                <Box size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">Media Kit</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Download official Syde logos, app icons, and brand assets for use in your websites or repos.
              </p>
              <button 
                onClick={handleDownloadAssets}
                className="flex items-center gap-3 px-8 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl font-bold transition-all w-full justify-center"
              >
                <Download size={20} />
                Download Assets
              </button>
            </div>
          </FadeIn>

          {/* Integration Section */}
          <FadeIn delay={200} direction="left">
            <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-white/20 transition-all">
              <div className="w-14 h-14 bg-purple-500/10 text-purple-500 rounded-2xl flex items-center justify-center mb-8 border border-purple-500/20">
                <Zap size={28} />
              </div>
              <h3 className="text-3xl font-bold mb-4">"Add to Syde"</h3>
              <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                Add a quick integration button to your GitHub README or website to allow users to open your repo in Syde instantly.
              </p>
              <button className="flex items-center gap-3 px-8 py-4 bg-purple-600 hover:bg-purple-700 rounded-2xl font-bold transition-all w-full justify-center shadow-lg shadow-purple-900/20">
                <ExternalLink size={20} />
                Get Badge Code
              </button>
            </div>
          </FadeIn>
        </div>

        {/* URL Scheme Section */}
        <FadeIn delay={300}>
          <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 md:p-14">
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-6">
                  <Code className="text-syde-blue" size={24} />
                  <span className="font-bold tracking-widest text-sm uppercase text-syde-blue">Documentation</span>
                </div>
                <h2 className="text-4xl font-bold mb-6">Syde URL Scheme</h2>
                <p className="text-gray-400 text-lg mb-8 leading-relaxed">
                  Deep link directly into the Syde app to install repositories or specific IPAs. This feature is perfect for website owners and repo maintainers.
                </p>
                <div className="inline-block px-4 py-2 bg-yellow-500/10 border border-yellow-500/20 text-yellow-500 rounded-lg font-bold text-sm mb-4">
                  COMING SOON
                </div>
              </div>
              
              <div className="flex-1">
                <div className="bg-black/40 rounded-3xl p-8 border border-white/5 font-mono text-sm space-y-6 shadow-2xl">
                  <div>
                    <p className="text-gray-500 mb-3">// Add a repository</p>
                    <p className="text-syde-blue break-all bg-syde-blue/5 p-3 rounded-lg border border-syde-blue/10">syde://add-repo?url=https://repo.example.com</p>
                  </div>
                  <div className="pt-6 border-t border-white/5">
                    <p className="text-gray-500 mb-3">// Install an IPA</p>
                    <p className="text-syde-blue break-all bg-syde-blue/5 p-3 rounded-lg border border-syde-blue/10">syde://install?url=https://example.com/app.ipa</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Developers;