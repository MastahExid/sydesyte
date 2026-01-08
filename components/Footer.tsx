import React from 'react';
import { Github, Twitter, Instagram, Disc } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-syde-card border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img src="https://raw.githubusercontent.com/MastahExid/SydeIPAs/refs/heads/main/AppIcon.png" alt="Syde" className="h-8 w-8 rounded-lg" />
              <span className="text-xl font-bold">Syde</span>
            </div>
            <p className="text-gray-400 max-w-sm">
              Discover and Install iOS Apps Beyond the App Store. A modern approach to sideloading.
            </p>
          </div>
          
          <div>
            <h3 className="font-bold text-lg mb-4">Resources</h3>
            <ul className="space-y-3 text-gray-400">
              <li><Link to="/guides" className="hover:text-white transition-colors">Guides</Link></li>
              <li><Link to="/faq" className="hover:text-white transition-colors">FAQ</Link></li>
              <li><Link to="/developers" className="hover:text-white transition-colors">For Developers</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a 
                href="https://github.com/MastahExid/SydeIPAs" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Github size={20} />
              </a>
              <a 
                href="https://x.com/fwmexid" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Twitter size={20} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Instagram size={20} />
              </a>
              <a 
                href="https://discord.gg/EEAF53sMMd" 
                target="_blank" 
                rel="noreferrer"
                className="text-gray-400 hover:text-white transition-colors p-2 bg-white/5 rounded-lg hover:bg-white/10"
              >
                <Disc size={20} />
              </a>
            </div>
          </div>
        </div>
        
        <div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">© {new Date().getFullYear()} Syde Team. All rights reserved.</p>
          <div className="flex gap-6 text-sm text-gray-500">
            <Link to="/privacy" className="hover:text-white">Privacy Policy</Link>
            <Link to="/terms" className="hover:text-white">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;