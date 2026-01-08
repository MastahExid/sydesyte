
import React from 'react';

const row1 = [
  { name: 'Flappy Bird', desc: 'The Bird is Back!', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/RiEITLw4yd1tWykizYiw.png' },
  { name: 'PPSSPP', desc: 'PSP Emulator for iOS', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/DVZUQ96qxhj8EAiPeFWO.png' },
  { name: 'UTM', desc: 'Virtual machines for iOS (with JIT).', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/RvPMBVq0DoL4djAJKuIW.png' },
  { name: 'Dopamine', desc: 'Untethered Jailbreak for 15.0 - 16.6.1', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/4hJHqoUcqd2RgMA6mTFq.png' },
  { name: 'PojavLauncher', desc: 'Minecraft Java Edition Client for iOS', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/0nrsB52X8lOX24zWYqma.png' },
];

const row2 = [
  { name: 'TrollInstallerX', desc: 'Universal TrollStore Installer', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/TYHwxBJaSoJBAUxlcOLA.png' },
  { name: 'MeloNX', desc: 'Nintendo Switch Emulator', icon: 'https://avatars.githubusercontent.com/u/183658658' },
  { name: 'Lightroom', desc: 'AI Image Retouch, Blur, Remove', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/QuLMqZvmJG0oAUHWYTkP.png' },
  { name: 'LiveContainer', desc: 'Run iOS apps without installation', icon: 'https://avatars.githubusercontent.com/u/206676373' },
  { name: 'RetroArch', desc: 'A frontend for Emulators', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/eaqgne9OniuJigutGo4R.png' },
];

const row3 = [
  { name: 'Delta', desc: 'All-in-one Emulator for iOS', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/3ip81JVwon4M6tYFt1dK.jpg' },
  { name: 'Nuvio Streaming', desc: 'A Simple Media Hub', icon: 'https://raw.githubusercontent.com/tapframe/NuvioStreaming/refs/heads/main/assets/ios/iTunesArtwork%403x.png' },
  { name: 'FL Studio Mobile', desc: 'Music creation in your pocket', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/FweP9CoUtoNhCNM6eqZe.png' },
  { name: 'Alight Motion', desc: 'Motion Design & Video Effects', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/A5oFbn0H1nqfYfwvqojp.png' },
  { name: 'Photoshop', desc: 'Photo Editor & Graphic Design', icon: 'https://storage.googleapis.com/glide-prod.appspot.com/uploads-v2/Q5FXaGFXxTAuWj5Jc0Rz/pub/b88eoXWAMFdGl4L3MI3s.jpg' },
];

// Correctly typing AppCard with React.FC to include standard attributes like 'key'
const AppCard: React.FC<{ app: any }> = ({ app }) => (
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
