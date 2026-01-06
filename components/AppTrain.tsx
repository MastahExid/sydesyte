import React from 'react';

const row1 = [
  { name: 'DolphinIOS', desc: 'GameCube and Wii games on the go.', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/91/92/7d/91927d2c-88e9-4e78-9e56-1144f8f4a123/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp' },
  { name: 'PPSSPP', desc: 'PlayStation Portable games on iOS.', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/71/3b/6a/713b6ae2-2a2e-56e6-6e4a-986a4387d7b1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp' },
  { name: 'UTM', desc: 'Virtual machines for iOS (with JIT).', icon: 'https://getutm.app/img/logo.png' },
  { name: 'Blurt.blog', desc: 'A fair world of social liberty.', icon: 'https://picsum.photos/id/10/80/80' },
  { name: 'iDOS', desc: 'Play DOS games on iOS.', icon: 'https://picsum.photos/id/11/80/80' },
];

const row2 = [
  { name: 'Firebird Emu', desc: 'ARM-based TI-Nspire calculator.', icon: 'https://picsum.photos/id/12/80/80' },
  { name: 'MeloNX', desc: 'A Nintendo Switch Emulator for iOS.', icon: 'https://picsum.photos/id/13/80/80' },
  { name: 'iSH', desc: 'Linux shell for iOS.', icon: 'https://picsum.photos/id/14/80/80' },
  { name: 'MAME4iOS', desc: 'A MAME emulator for iOS.', icon: 'https://picsum.photos/id/15/80/80' },
  { name: 'RetroArch', desc: 'All-in-one emulation hub.', icon: 'https://picsum.photos/id/16/80/80' },
];

const row3 = [
  { name: 'Delta', desc: 'Nintendo games in one app.', icon: 'https://is1-ssl.mzstatic.com/image/thumb/Purple211/v4/5a/85/6a/5a856a31-6e3e-7a5a-6e4a-986a4387d7b1/AppIcon-0-0-1x_U007emarketing-0-0-0-7-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp' },
  { name: 'Provenance', desc: 'Multi-system emulator.', icon: 'https://picsum.photos/id/17/80/80' },
  { name: 'Enmity', desc: 'Enhanced Discord client.', icon: 'https://picsum.photos/id/18/80/80' },
  { name: 'Spotify+', desc: 'Music with extra features.', icon: 'https://picsum.photos/id/19/80/80' },
  { name: 'Apollo', desc: 'The best Reddit client.', icon: 'https://picsum.photos/id/20/80/80' },
];

const AppCard = ({ app }: { app: any }) => (
  <div className="flex-none w-[280px] sm:w-[340px] h-[80px] sm:h-[100px] bg-[#1a1a2e]/60 backdrop-blur-sm border border-white/5 rounded-xl sm:rounded-2xl flex items-center p-3 sm:p-4 mx-2 sm:mx-3 hover:bg-white/10 transition-colors cursor-default select-none">
    <img src={app.icon} alt={app.name} className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg sm:rounded-xl object-cover bg-black/20" />
    <div className="ml-3 sm:ml-4 overflow-hidden">
      <h4 className="font-bold text-base sm:text-lg truncate">{app.name}</h4>
      <p className="text-gray-400 text-xs sm:text-sm line-clamp-2 leading-tight">{app.desc}</p>
    </div>
  </div>
);

const AppTrain: React.FC = () => {
  return (
    <div className="relative p-[3px] rounded-[3.5rem] bg-gradient-to-br from-[#2444CD] via-[#D0609D] to-[#BF000A] overflow-hidden shadow-[0_0_60px_rgba(208,96,157,0.25)]">
      {/* Container background set to match site background exactly */}
      <div className="bg-[#0B0B15] rounded-[3.3rem] py-16 relative overflow-hidden">
        
        {/* VIGNETTES: Fixed color matching to eliminate visible "shadow" lines */}
        <div className="absolute inset-y-0 left-0 w-32 sm:w-64 bg-gradient-to-r from-[#0B0B15] via-[#0B0B15]/95 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 sm:w-64 bg-gradient-to-l from-[#0B0B15] via-[#0B0B15]/95 to-transparent z-10 pointer-events-none" />

        {/* Rows */}
        <div className="flex w-fit animate-[marquee_50s_linear_infinite] mb-8">
          {[...row1, ...row1, ...row1, ...row1, ...row1, ...row1].map((app, i) => <AppCard key={i} app={app} />)}
        </div>

        <div className="flex w-fit animate-[marquee-reverse_55s_linear_infinite] mb-8">
          {[...row2, ...row2, ...row2, ...row2, ...row2, ...row2].map((app, i) => <AppCard key={i} app={app} />)}
        </div>

        <div className="flex w-fit animate-[marquee_60s_linear_infinite]">
          {[...row3, ...row3, ...row3, ...row3, ...row3, ...row3].map((app, i) => <AppCard key={i} app={app} />)}
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
};

export default AppTrain;