import React from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { ChevronRight, BookOpen } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export const guidesData = [
  {
    id: "getting-started",
    title: "Getting Started with Syde",
    desc: "Learn how to install Syde on your iOS device in just a few steps.",
    content: "Step 1: Download the IPA... Step 2: Install via AltStore or SideStore first time... Step 3: Trust the certificate..."
  },
  {
    id: "fixing-app-icons",
    title: "Fixing App Icons",
    desc: "Tutorial on how to customize and fix app icons within Syde.",
    content: "If your app icons are white or missing, go to Settings > Refresh Cache. This will rebuild the icon database on your device."
  },
  {
    id: "getting-started-repositories",
    title: "Getting Started with Repositories",
    desc: "Learn how to add and manage custom repositories in Syde.",
    content: "To add a repo, navigate to the Sources tab, tap the + icon in the top right, and paste your repository URL."
  },
  {
    id: "troubleshooting-issues",
    title: "Troubleshooting Common Issues",
    desc: "Solutions for common problems with Syde and app installation.",
    content: "If installation fails, ensure you have a valid internet connection and that your Apple ID is not locked or hit the 3-app limit."
  },
  {
    id: "understanding-expiration",
    title: "Understanding App Expiration",
    desc: "Learn about app expiration and how signing methods handle it.",
    content: "Apps signed with free Apple Developer accounts expire every 7 days. Use Syde's background refresh to prevent this."
  }
];

const Guides: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-20">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
              Installation <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0609D] via-[#BF4386] to-[#D0609D] animate-text-gradient">Guides</span>
            </h1>
            <p className="text-gray-400 text-xl max-w-2xl mx-auto leading-relaxed">
              Everything you need to know about sideloading, troubleshooting, and getting the most out of Syde.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {guidesData.map((guide, idx) => (
            <FadeIn key={idx} delay={idx * 100}>
              <div 
                onClick={() => navigate(`/guides/${guide.id}`)}
                className="bg-[#151525] border border-white/5 rounded-[2rem] p-8 h-full flex flex-col hover:bg-white/5 hover:border-white/20 transition-all cursor-pointer group"
              >
                {/* Standard Icon with subtle glow */}
                <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-[#D0609D]/30 group-hover:bg-[#D0609D]/5 transition-all">
                  <BookOpen className="text-gray-400 group-hover:text-[#D0609D] transition-colors" size={28} />
                </div>
                
                <h3 className="text-2xl font-bold mb-4 group-hover:text-white transition-colors">{guide.title}</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed flex-grow">{guide.desc}</p>
                
                <div className="flex items-center gap-2 text-white/50 font-bold group-hover:text-[#D0609D] group-hover:translate-x-1 transition-all">
                  <span>Read Guide</span>
                  <ChevronRight size={20} />
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Guides;