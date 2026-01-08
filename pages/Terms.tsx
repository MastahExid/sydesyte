import React from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';

const Terms: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <h1 className="text-5xl font-extrabold mb-10 tracking-tight">Terms of Service</h1>
          <div className="bg-[#151525] border border-white/5 rounded-[2.5rem] p-10 text-gray-400 space-y-8 text-lg leading-relaxed">
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Agreement to Terms</h2>
              <p>
                By accessing or using Syde, you agree to be bound by these Terms of Service. If you do not agree to all of the terms, you may not access the service.
              </p>
            </section>
            
            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Use of Service</h2>
              <p>
                Syde is a tool for sideloading iOS applications. You are responsible for ensuring that your use of the service complies with Apple's Terms of Service and any local laws. We do not provide or host the applications you sideload.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Disclaimer of Warranties</h2>
              <p>
                Syde is provided "as is" and "as available" without any warranty of any kind. We do not guarantee that the service will be uninterrupted or error-free. You use Syde at your own risk, including the risk of device malfunction or Apple ID suspension.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Limitation of Liability</h2>
              <p>
                The Syde team shall not be liable for any damages arising out of or in connection with your use of the service. This includes direct, indirect, incidental, and consequential damages.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-white mb-4">Governing Law</h2>
              <p>
                These terms shall be governed by and defined following the laws of the jurisdiction in which the core Syde team operates, without regard to its conflict of law provisions.
              </p>
            </section>

            <p className="text-sm pt-10 border-t border-white/5">Last Updated: October 2023</p>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default Terms;