import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const menuItems = [
    { label: 'Create', href: '#' },
    { label: 'My Creations', href: '#' },
    { label: 'Pricing', href: '#' },
    { label: 'Contact Us', href: '#' },
  ];

  return (
    <>
      <header className="fixed top-0 left-0 right-0 z-40 transition-all duration-500 w-full">
        <nav className="relative transition-all duration-500 w-full bg-gradient-to-b from-black/60 to-black/40 backdrop-blur-xl px-4 lg:px-6 py-3">
          <div className="flex items-center justify-between h-12">
            {/* Logo */}
            <div className="flex items-center z-10 h-full">
              <a href="#" className="flex font-bold items-center">
                <span className="flex items-center">
                  <img 
                    src="https://nanobananaai.ai/logo.png" 
                    alt="Nano Banana Logo" 
                    width={32} 
                    height={32} 
                    className="mr-2 lg:w-10 lg:h-10"
                  />
                  <span className="hidden sm:block text-lg lg:text-xl text-white">
                    Nano Banana AI
                  </span>
                </span>
              </a>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center gap-1 bg-white/5 backdrop-blur-sm rounded-xl p-1">
                {menuItems.map((item) => (
                  <a
                    key={item.label}
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                  >
                    {item.label}
                  </a>
                ))}
              </div>
            </div>

            {/* Desktop Right Side */}
            <div className="hidden lg:flex items-center gap-3 h-full">
              {/* Language Selector */}
              <Button 
                variant="ghost"
                className="w-8 h-8 sm:w-auto sm:h-9 rounded-full sm:rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200 focus:outline-none focus:ring-1 focus:ring-white/20"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🇨🇳</span>
                  <span className="text-xs font-medium text-white/80 uppercase hidden sm:inline">
                    zh
                  </span>
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>

              {/* Sign In Button */}
              <div className="relative group">
                <Button className="bg-white text-black rounded-full hover:bg-gray-100 h-8 px-3 text-sm sm:px-6 shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign in
                </Button>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-white/30 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>
            </div>

            {/* Mobile Right Side */}
            <div className="flex items-center gap-2 lg:hidden h-full">
              <Button 
                variant="ghost"
                className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 border border-white/10 transition-all duration-200"
              >
                <div className="flex items-center gap-2">
                  <span className="text-base">🇨🇳</span>
                </div>
                <ChevronDown className="h-4 w-4 opacity-50" />
              </Button>

              <div className="relative group">
                <Button className="bg-white text-black rounded-full hover:bg-gray-100 h-8 px-3 text-sm shadow-lg hover:shadow-xl transition-all duration-300">
                  Sign in
                </Button>
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-3/4 h-1 bg-gradient-to-r from-transparent via-white/50 to-transparent blur-sm opacity-60 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-1/2 h-2 bg-white/30 blur-md opacity-50 group-hover:opacity-80 transition-opacity duration-300"></div>
              </div>

              <Button
                variant="ghost"
                onClick={() => setIsMobileMenuOpen(true)}
                className="rounded-xl hover:bg-white/10 h-9 w-9"
              >
                <div className="relative w-5 h-5 flex items-center justify-center">
                  <span className="absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out -translate-y-1.5"></span>
                  <span className="absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out opacity-100"></span>
                  <span className="absolute h-0.5 w-5 bg-white transform transition-all duration-300 ease-in-out translate-y-1.5"></span>
                </div>
              </Button>
            </div>
          </div>
        </nav>
      </header>

      {/* Mobile Menu Overlay */}
      <div className={`fixed inset-0 z-30 lg:hidden transition-all duration-500 ${isMobileMenuOpen ? 'visible' : 'invisible'}`}>
        <div className={`absolute inset-0 bg-black/80 backdrop-blur-xl transition-opacity duration-500 ${isMobileMenuOpen ? 'opacity-100' : 'opacity-0'}`}></div>
        <div className={`absolute inset-x-0 top-0 bg-gradient-to-b from-black via-black/95 to-black/90 transition-all duration-500 transform ${isMobileMenuOpen ? 'translate-y-0' : '-translate-y-full'}`}>
          <div className="flex items-center justify-between p-6 border-b border-white/10">
            <a href="#" className="flex font-bold items-center">
              <span className="flex items-center">
                <img 
                  src="https://nanobananaai.ai/logo.png" 
                  alt="Nano Banana Logo" 
                  width={32} 
                  height={32} 
                  className="mr-2"
                />
                <span className="text-lg text-white">Nano Banana AI</span>
              </span>
            </a>
            <Button
              variant="ghost"
              onClick={() => setIsMobileMenuOpen(false)}
              className="rounded-xl hover:bg-white/10 h-10 w-10"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          <div className="p-6">
            <nav className="space-y-2">
              {menuItems.map((item, index) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="flex items-center justify-between p-4 text-lg font-medium text-white/80 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 transform hover:translate-x-2"
                  style={{ animationDelay: `${index * 50}ms` }}
                >
                  <span>{item.label}</span>
                  <ChevronDown className="h-5 w-5 opacity-50 rotate-[-90deg]" />
                </a>
              ))}
            </nav>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;