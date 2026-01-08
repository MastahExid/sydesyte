import React from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';

const Privacy: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h1 className="text-5xl font-extrabold mb-10 tracking-tight">Privacy Policy</h1>
          <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 text-gray-400 space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Introduction</h2>
              <p>
                Syde is committed to protecting your privacy. This Privacy Policy explains how we handle your information when you use our website and services. Syde is designed as a client-side tool, meaning your data stays on your device as much as possible.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Data Collection</h2>
              <p>
                We do not collect personal identification information. We do not store your Apple ID, passwords, or certificates on our servers. All sensitive credentials used for sideloading are processed locally on your device and sent directly to Apple's authentication servers.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Local Storage</h2>
              <p>
                Syde may use local storage to save your preferences, repository lists, and session information. This data never leaves your device unless you explicitly export it.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Third-Party Services</h2>
              <p>
                Our services interact directly with Apple's servers. We are not responsible for how Apple handles your data. We recommend reviewing Apple's privacy policy for more information on how they handle developer account data.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Changes to This Policy</h2>
              <p>
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
              </p>
            </section>

            <p className="text-sm pt-10 border-t border-white/5">Last Updated: October 2023</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Privacy;