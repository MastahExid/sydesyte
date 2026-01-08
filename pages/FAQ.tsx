import React, { useState } from 'react';
import FadeIn from '../components/FadeIn';
import BackgroundGradients from '../components/BackgroundGradients';
import { Plus, Minus, MessageSquare } from 'lucide-react';
import { FaqItem } from '../types';

const faqData: FaqItem[] = [
  {
    question: "Is Syde free to use?",
    answer: "Yes, Syde is completely free and open source. You can use a free Apple Developer account to sign up to 3 apps at a time."
  },
  {
    question: "Do I need a computer every time?",
    answer: "Only for the initial installation and for refreshing apps every 7 days if you aren't using our WireGuard VPN trick for on-device refreshing."
  },
  {
    question: "Is it safe?",
    answer: "Syde is designed with security in mind. Apps run in sandboxes, and your credentials are only used to communicate directly with Apple's servers."
  },
  {
    question: "How do I fix 'Unable to Verify'?",
    answer: "This usually means you need an internet connection to verify the app on launch, or your 7-day certificate has expired and needs refreshing via Syde."
  },
  {
    question: "Can I receive notifications?",
    answer: "Free developer accounts do not support push notifications. You need a paid Apple Developer Program membership for that feature."
  }
];

const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-[#0B0B15] text-white pt-32 pb-20 relative overflow-hidden">
      <BackgroundGradients />
      
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <FadeIn>
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-7xl font-extrabold mb-6 tracking-tight">
              Frequently Asked <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#D0609D] via-[#BF4386] to-[#D0609D] animate-text-gradient">Questions</span>
            </h1>
            <p className="text-gray-400 text-xl">Common questions about sideloading with Syde.</p>
          </div>
        </FadeIn>

        <div className="space-y-4 mb-20">
          {faqData.map((item, index) => (
            <FadeIn key={index} delay={index * 50}>
              <div className="bg-syde-card border border-white/5 rounded-2xl overflow-hidden hover:border-white/20 transition-all">
                <button
                  className="w-full px-8 py-6 text-left flex justify-between items-center hover:bg-white/5 transition-colors"
                  onClick={() => toggleFAQ(index)}
                >
                  <span className="font-semibold text-lg pr-8">{item.question}</span>
                  {openIndex === index ? (
                    <Minus className="text-[#D0609D] shrink-0" size={20} />
                  ) : (
                    <Plus className="text-gray-400 shrink-0" size={20} />
                  )}
                </button>
                <div
                  className={`px-8 overflow-hidden transition-all duration-300 ease-in-out ${
                    openIndex === index ? 'max-h-48 pb-8 opacity-100' : 'max-h-0 opacity-0'
                  }`}
                >
                  <p className="text-gray-400 text-lg leading-relaxed">{item.answer}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        {/* Discord CTA */}
        <FadeIn delay={400}>
          <div className="rounded-[2.5rem] p-1 bg-gradient-to-br from-indigo-500 via-[#D0609D] to-pink-500 shadow-2xl shadow-indigo-500/10">
            <div className="bg-[#151525] rounded-[2.3rem] p-10 md:p-14 text-center">
              <p className="text-white font-bold mb-3 uppercase tracking-[0.2em] text-sm opacity-80">Need help?</p>
              <h2 className="text-3xl md:text-4xl font-extrabold mb-6">Join our Discord server</h2>
              <p className="text-gray-300 text-lg mb-10 max-w-lg mx-auto">
                Get real-time support from the developers and the community. Join thousands of other users!
              </p>
              <a 
                href="https://discord.gg/EEAF53sMMd" 
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-3 bg-[#5865F2] hover:bg-[#4752C4] text-white px-10 py-4 rounded-full font-bold text-lg transition-all hover:scale-105 shadow-xl shadow-indigo-900/40"
              >
                <MessageSquare size={24} />
                Join Discord
              </a>
            </div>
          </div>
        </FadeIn>
      </div>
    </div>
  );
};

export default FAQ;