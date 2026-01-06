import React from 'react';

const BackgroundGradients: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none">
      <div className="absolute top-[-10%] left-[-10%] w-[60%] h-[60%] bg-[#2444CD] rounded-full blur-[140px] opacity-15 animate-pulse"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-[#D0609D] rounded-full blur-[140px] opacity-15 animate-pulse" style={{ animationDelay: '2s' }}></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40%] h-[40%] bg-purple-600 rounded-full blur-[160px] opacity-5"></div>
    </div>
  );
};

export default BackgroundGradients;