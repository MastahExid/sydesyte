import React, { useState, useRef } from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { Download, ArrowRight, Globe, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { Link } from 'react-router-dom';

const Install: React.FC = () => {
  const [showSigner, setShowSigner] = useState(false);
  const [showThankYou, setShowThankYou] = useState(false);
  const [ipaMode, setIpaMode] = useState<'file' | 'url'>('file');
  const signerRef = useRef<HTMLDivElement>(null);

  // Signer Form State
  const [files, setFiles] = useState({
    ipa: null as File | null,
    ipaUrl: '',
    mobileProvision: null as File | null,
    p12: null as File | null
  });
  const [form, setForm] = useState({
    p12Password: '',
    appName: '',
    bundleId: ''
  });
  const [isSigning, setIsSigning] = useState(false);
  const [signProgress, setSignProgress] = useState(0);

  const handleDownloadClick = () => {
    setShowThankYou(true);
    // Trigger download simulation
    const link = document.createElement('a');
    link.href = '#'; 
    link.download = 'Syde_v1.0.0.ipa';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setTimeout(() => setShowThankYou(false), 5000);
  };

  const handleSignerClick = () => {
    setShowSigner(true);
    setTimeout(() => {
      signerRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, type: keyof typeof files) => {
    if (e.target.files && e.target.files[0]) {
      setFiles({ ...files, [type]: e.target.files[0] });
    }
  };

  const handleSigning = () => {
    if (!files.mobileProvision || !files.p12 || (ipaMode === 'file' && !files.ipa) || (ipaMode === 'url' && !files.ipaUrl)) {
      alert("Please fill in all required fields marked with *");
      return;
    }
    
    setIsSigning(true);
    setSignProgress(0);
    
    const interval = setInterval(() => {
      setSignProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    setTimeout(() => {
      setIsSigning(false);
      alert("Success! Your IPA has been signed and is ready for installation.");
    }, 2500);
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
            <p className="text-gray-400 text-xl max-w-2xl mx-auto">Get the latest version of Syde IPA. Choose your preferred sideloading method below.</p>
          </div>
        </FadeIn>

        {/* Selection Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <FadeIn delay={100}>
            <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-white/20 transition-all shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-[#D0609D] group-hover:scale-110 transition-transform">
                  <Download size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Direct Download</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Download the IPA file directly to your device and install using your preferred sideloading app.
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

          <FadeIn delay={200}>
            <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 h-full hover:border-white/20 transition-all shadow-xl flex flex-col justify-between group">
              <div>
                <div className="w-16 h-16 bg-white/5 rounded-2xl flex items-center justify-center mb-8 text-syde-blue group-hover:scale-110 transition-transform">
                  <Globe size={32} />
                </div>
                <h3 className="text-3xl font-bold mb-4">Sign & Install</h3>
                <p className="text-gray-400 text-lg mb-10 leading-relaxed">
                  Use our in-browser signer to sign your IPA with your certificate and install directly without a PC.
                </p>
              </div>
              <button 
                onClick={handleSignerClick}
                className="w-full py-5 bg-syde-blue hover:bg-blue-700 text-white rounded-2xl font-bold text-xl transition-all shadow-lg hover:shadow-blue-500/20 flex items-center justify-center gap-3"
              >
                Go to Signer
                <ArrowRight size={24} />
              </button>
            </div>
          </FadeIn>
        </div>

        {/* Web Signer Form */}
        {showSigner && (
          <FadeIn>
            <div ref={signerRef} className="mt-16 pt-16 border-t border-white/5">
              <div className="bg-[#151525] border border-white/10 rounded-[2rem] p-8 md:p-12 shadow-[0_0_100px_rgba(0,0,0,0.5)]">
                
                {/* IPA Row */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">IPA <span className="text-red-500">*</span></label>
                  <div className="flex gap-2">
                    {ipaMode === 'file' ? (
                      <label className="flex-1 flex items-center bg-[#0B0B15] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/30 transition-colors">
                        <span className="bg-white/5 px-6 py-4 text-sm font-bold border-r border-white/10">Choose File</span>
                        <span className="px-6 text-gray-400 text-sm truncate">{files.ipa ? files.ipa.name : "No file chosen"}</span>
                        <input type="file" accept=".ipa" className="hidden" onChange={(e) => handleFileChange(e, 'ipa')} />
                      </label>
                    ) : (
                      <input 
                        type="text" 
                        placeholder="Paste IPA Direct URL"
                        className="flex-1 px-6 py-4 bg-[#0B0B15] border border-white/10 rounded-xl text-white outline-none focus:border-syde-blue"
                        value={files.ipaUrl}
                        onChange={(e) => setFiles({...files, ipaUrl: e.target.value})}
                      />
                    )}
                    <button 
                      onClick={() => setIpaMode(ipaMode === 'file' ? 'url' : 'file')}
                      className="px-6 py-4 bg-[#212133] hover:bg-[#2a2a40] border border-white/10 rounded-xl text-sm font-bold transition-colors"
                    >
                      {ipaMode === 'file' ? 'Use a URL' : 'Use a File'}
                    </button>
                  </div>
                </div>

                {/* MobileProvision Row */}
                <div className="mb-8">
                  <label className="block text-sm font-semibold text-gray-300 mb-3">MobileProvision <span className="text-red-500">*</span></label>
                  <label className="flex w-full items-center bg-[#0B0B15] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/30 transition-colors">
                    <span className="bg-white/5 px-6 py-4 text-sm font-bold border-r border-white/10">Choose File</span>
                    <span className="px-6 text-gray-400 text-sm truncate">{files.mobileProvision ? files.mobileProvision.name : "No file chosen"}</span>
                    <input type="file" accept=".mobileprovision" className="hidden" onChange={(e) => handleFileChange(e, 'mobileProvision')} />
                  </label>
                </div>

                {/* P12 and Password Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-8">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">P12 <span className="text-red-500">*</span></label>
                    <label className="flex w-full items-center bg-[#0B0B15] border border-white/10 rounded-xl overflow-hidden cursor-pointer hover:border-white/30 transition-colors">
                      <span className="bg-white/5 px-6 py-4 text-sm font-bold border-r border-white/10">Choose File</span>
                      <span className="px-6 text-gray-400 text-sm truncate">{files.p12 ? files.p12.name : "No file chosen"}</span>
                      <input type="file" accept=".p12" className="hidden" onChange={(e) => handleFileChange(e, 'p12')} />
                    </label>
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">Password</label>
                    <input 
                      type="password" 
                      className="w-full px-6 py-4 bg-[#0B0B15] border border-white/10 rounded-xl text-white outline-none focus:border-syde-blue transition-colors"
                      value={form.p12Password}
                      onChange={(e) => setForm({...form, p12Password: e.target.value})}
                    />
                  </div>
                </div>

                {/* Optional Grid */}
                <div className="grid md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">AppName</label>
                    <input 
                      type="text" 
                      placeholder="Example App (optional)"
                      className="w-full px-6 py-4 bg-[#0B0B15] border border-white/10 rounded-xl text-white placeholder-gray-600 outline-none focus:border-syde-blue"
                      value={form.appName}
                      onChange={(e) => setForm({...form, appName: e.target.value})}
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-semibold text-gray-300 mb-3">BundleID</label>
                    <input 
                      type="text" 
                      placeholder="com.example.app (optional)"
                      className="w-full px-6 py-4 bg-[#0B0B15] border border-white/10 rounded-xl text-white placeholder-gray-600 outline-none focus:border-syde-blue"
                      value={form.bundleId}
                      onChange={(e) => setForm({...form, bundleId: e.target.value})}
                    />
                  </div>
                </div>

                {/* Signing Progress Bar */}
                {isSigning && (
                  <div className="mb-8 space-y-2">
                    <div className="flex justify-between text-xs font-bold text-gray-400">
                      <span>SIGNING IPA...</span>
                      <span>{signProgress}%</span>
                    </div>
                    <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-syde-blue transition-all duration-300" 
                        style={{ width: `${signProgress}%` }}
                      />
                    </div>
                  </div>
                )}

                <button 
                  onClick={handleSigning}
                  disabled={isSigning}
                  className="w-full py-5 bg-[#00A3FF] hover:bg-[#0082CC] text-white rounded-2xl font-bold text-xl transition-all active:scale-[0.98] shadow-lg shadow-blue-500/20 disabled:opacity-50"
                >
                  {isSigning ? "Signing..." : "Upload and Sign"}
                </button>
              </div>
            </div>
          </FadeIn>
        )}

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