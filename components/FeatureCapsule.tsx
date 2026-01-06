import React from 'react';
import { Package, Wifi, Smartphone, Lock, Zap, Layers } from 'lucide-react';

const features = [
  {
    title: "Install IPAs",
    desc: "Sign and install any app file directly.",
    icon: <Package className="text-white" size={24} />,
    color: "from-blue-600 to-indigo-600"
  },
  {
    title: "Wireless JIT",
    desc: "Enable JIT compilation without a PC.",
    icon: <Wifi className="text-white" size={24} />,
    color: "from-purple-600 to-pink-600"
  },
  {
    title: "Repo Support",
    desc: "Add sources to discover new apps.",
    icon: <Layers className="text-white" size={24} />,
    color: "from-orange-500 to-red-500"
  },
  {
    title: "On-Device",
    desc: "No computer required after setup.",
    icon: <Smartphone className="text-white" size={24} />,
    color: "from-emerald-500 to-teal-500"
  },
  {
    title: "Secure",
    desc: "Your data stays on your device.",
    icon: <Lock className="text-white" size={24} />,
    color: "from-gray-600 to-gray-800"
  },
  {
    title: "Fast Signing",
    desc: "Optimized for speed and reliability.",
    icon: <Zap className="text-white" size={24} />,
    color: "from-yellow-500 to-amber-600"
  }
];

const FeatureCapsule: React.FC = () => {
  return (
    <div className="w-full overflow-hidden py-10 relative group">
      {/* Fade gradients for scroll indication */}
      <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-[#0B0B15] to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0B0B15] to-transparent z-10 pointer-events-none" />

      <div className="flex overflow-x-auto gap-6 px-8 pb-8 no-scrollbar snap-x">
        {features.map((feature, index) => (
          <div 
            key={index}
            className="flex-none w-72 h-48 rounded-3xl bg-syde-card border border-white/5 relative overflow-hidden group/card hover:-translate-y-2 transition-transform duration-300 snap-center cursor-default"
          >
            <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${feature.color} opacity-20 rounded-bl-full blur-2xl group-hover/card:opacity-30 transition-opacity`} />
            
            <div className="p-6 h-full flex flex-col justify-between relative z-10">
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-lg`}>
                {feature.icon}
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{feature.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureCapsule;