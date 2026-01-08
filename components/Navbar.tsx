import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Install', path: '/install' },
    { name: 'Guides', path: '/guides' },
    { name: 'FAQ', path: '/faq' },
  ];

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 border-b ${
        scrolled 
          ? 'bg-[#0B0B15]/80 backdrop-blur-md border-white/10 py-0' 
          : 'bg-transparent border-transparent py-2'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex-shrink-0 flex items-center gap-2 group">
            <img 
              src="https://raw.githubusercontent.com/MastahExid/SydeIPAs/refs/heads/main/AppIcon.png" 
              alt="Syde" 
              className="h-10 w-10 rounded-xl object-cover transition-transform group-hover:scale-105"
            />
            <span className="font-bold text-xl tracking-tight hidden sm:block">Syde</span>
          </Link>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                    location.pathname === link.path 
                      ? 'text-white bg-white/10 shadow-inner' 
                      : 'text-gray-300 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          <div className="hidden md:block">
            <Link 
              to="/install"
              className="bg-white text-[#0B0B15] hover:bg-gray-100 px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,255,255,0.2)] flex items-center gap-2"
            >
              <Download size={16} />
              Get Syde
            </Link>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-[#0B0B15]/95 backdrop-blur-xl border-b border-white/10">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-300 hover:text-white hover:bg-white/10"
              >
                {link.name}
              </Link>
            ))}
             <Link 
              to="/install"
              onClick={() => setIsOpen(false)}
              className="block w-full text-center mt-4 bg-white text-[#0B0B15] px-4 py-3 rounded-xl font-bold"
            >
              Download Now
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;