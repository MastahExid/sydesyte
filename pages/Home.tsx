import React from 'react';
import { ArrowRight, Download, ChevronRight } from 'lucide-react';
import FadeIn from '../components/FadeIn';
import AppTrain from '../components/AppTrain';
import BackgroundGradients from '../components/BackgroundGradients';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B15] text-white overflow-hidden relative">
      <BackgroundGradients />

      <div className="relative z-10 pt-32 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* HERO SECTION */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-32">
          <div className="space-y-8 text-center lg:text-left">
            <FadeIn direction="up">
              <h1 className="text-6xl sm:text-7xl lg:text-8xl tracking-tight mb-6">
                <span className="font-light italic">Just</span>{' '}
                <span className="font-black text-transparent bg-clip-text bg-gradient-to-r from-[#D0609D] via-[#BF4386] to-[#D0609D] animate-text-gradient">SYDE</span>{' '}
                <span className="font-normal">It.</span>
              </h1>
            </FadeIn>
            
            <FadeIn delay={200}>
              <p className="text-xl text-gray-300 max-w-lg mx-auto lg:mx-0 leading-relaxed">
                Discover and Install iOS Apps Beyond the App Store. 
                A Third-party iOS sideloading store that lets you discover, manage, 
                and install iOS apps through repositories and our collections!
              </p>
            </FadeIn>

            <FadeIn delay={400}>
              <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link 
                  to="/install"
                  className="px-8 py-4 bg-white text-black rounded-full font-bold text-lg hover:scale-105 transition-transform flex items-center justify-center gap-2"
                >
                  <Download size={20} />
                  Download
                </Link>
                <Link 
                  to="/guides"
                  className="px-8 py-4 bg-white/10 text-white border border-white/10 rounded-full font-bold text-lg hover:bg-white/20 transition-all flex items-center justify-center gap-2 backdrop-blur-sm"
                >
                  Get Started
                  <ArrowRight size={20} />
                </Link>
              </div>
            </FadeIn>
          </div>

          <FadeIn direction="left" delay={600} className="relative mx-auto w-full max-w-sm lg:max-w-md">
            {/* Sync: The outer wrapper handles the float, so the border moves WITH the content */}
            <div className="animate-float">
              <div className="relative p-1.5 rounded-[3.5rem] bg-gradient-to-br from-[#D0609D] via-[#2444CD] to-[#BF4386] animate-pulse-slow shadow-2xl">
                <div className="relative z-10 rounded-[3rem] border-8 border-gray-900 bg-[#151525] overflow-hidden">
                  <img 
                    src="https://raw.githubusercontent.com/MastahExid/SydeIPAs/refs/heads/main/App-Screenshot.png" 
                    alt="App Screenshot" 
                    className="w-full h-auto object-cover"
                    loading="eager"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none"></div>
                </div>
              </div>
            </div>
            {/* Glow also follows the float */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-[#D0609D] blur-[100px] opacity-20 -z-10 animate-float"></div>
          </FadeIn>
        </div>

        {/* FEATURES TRAIN SECTION */}
        <div className="mb-48">
          <FadeIn>
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-6xl font-extrabold mb-6">Install Any IPA Files</h2>
              <p className="text-gray-400 text-xl">Powerful features wrapped in a beautiful interface.</p>
            </div>
          </FadeIn>
          <div className="mt-20">
            <AppTrain />
          </div>
        </div>

        {/* BEHIND SYDE SECTION */}
        <div className="mb-32">
          <FadeIn>
            <div className="flex items-center gap-4 mb-12">
              <div className="h-px bg-gray-800 flex-1"></div>
              <h2 className="text-3xl md:text-4xl font-bold text-center px-4">Behind Syde</h2>
              <div className="h-px bg-gray-800 flex-1"></div>
            </div>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {/* Moe // Exid */}
            <FadeIn delay={100} direction="right">
              <a 
                href="https://x.com/fwmexid" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block p-1 rounded-3xl bg-gradient-to-br from-[#2444CD] to-[#BF000A] transition-transform hover:-translate-y-2"
              >
                <div className="bg-[#151525] rounded-[22px] p-8 h-full relative overflow-hidden">
                  <div className="flex items-center gap-6">
                    <img 
                      src="https://avatars.githubusercontent.com/u/186554475" 
                      alt="Moe" 
                      className="w-20 h-20 rounded-full border-2 border-white/20 object-cover" 
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-[#2444CD] transition-colors">
                        Moe <span className="text-gray-600">// Exid</span>
                      </h3>
                      <p className="text-gray-400 font-medium">Lead Developer</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                  <p className="mt-6 text-gray-400">
                    Lead architecture and core systems. Ensuring Syde remains the fastest on-device installer.
                  </p>
                </div>
              </a>
            </FadeIn>

            {/* Dyllie */}
            <FadeIn delay={300} direction="left">
              <a 
                href="https://beacons.ai/dyllie/mediakit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative block p-1 rounded-3xl bg-gradient-to-br from-gray-700 to-gray-900 transition-transform hover:-translate-y-2"
              >
                <div className="bg-[#151525] rounded-[22px] p-8 h-full relative overflow-hidden">
                   <div className="flex items-center gap-6">
                    <img 
                      src="https://cdn.beacons.ai/user_content/1x1zYXHD51UdQLC8pds1MfLMi6z2/profile_dyllie.png?t=1726274768770" 
                      alt="Dyllie" 
                      className="w-20 h-20 rounded-full border-2 border-white/20 object-cover" 
                    />
                    <div>
                      <h3 className="text-2xl font-bold text-white group-hover:text-gray-300 transition-colors">Dyllie</h3>
                      <p className="text-gray-400 font-medium">Creative Director</p>
                    </div>
                    <div className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity -translate-x-4 group-hover:translate-x-0">
                      <ChevronRight size={24} />
                    </div>
                  </div>
                   <p className="mt-6 text-gray-400">
                    Crafting the premium visual identity and user experience that makes Syde stand out.
                  </p>
                </div>
              </a>
            </FadeIn>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Home;