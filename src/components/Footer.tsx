const Footer = () => {
  const languages = [
    { flag: "🇺🇸", name: "English" },
    { flag: "🇪🇸", name: "Español" },
    { flag: "🇩🇪", name: "Deutsch" },
    { flag: "🇫🇷", name: "Français" },
    { flag: "🇯🇵", name: "日本語" },
    { flag: "🇰🇷", name: "한국어" },
    { flag: "🇵🇹", name: "Português" },
    { flag: "🇹🇭", name: "ไทย" },
    { flag: "🇻🇳", name: "Tiếng Việt" },
    { flag: "🇨🇳", name: "中文" },
  ];

  return (
    <footer id="footer" className="bg-black border-t border-gray-900">
      <div className="container pb-8 lg:pb-16">
        {/* Main Footer Content */}
        <div className="p-10 bg-gray-900/50 border border-gray-800 rounded-2xl mt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-8 lg:gap-12">
            {/* Logo and Contact */}
            <div className="md:col-span-1 lg:col-span-1">
              <a href="#" className="flex font-bold items-center">
                <span className="flex items-center">
                  <img 
                    src="https://nanobananaai.ai/logo.png" 
                    alt="Nano Banana Logo" 
                    width={32} 
                    height={32} 
                    className="mr-2 lg:w-10 lg:h-10"
                  />
                  <span className="text-lg lg:text-xl text-white">
                    Nano Banana AI
                  </span>
                </span>
              </a>
              <p className="text-sm mt-4 text-nano-yellow">
                support@nanobananaai.ai
              </p>
            </div>

            {/* Legal */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2 text-white">Legal</h3>
              <div className="flex flex-col gap-2">
                <a href="#" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  Terms of Service
                </a>
                <a href="#" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  Refund Policy
                </a>
              </div>
            </div>

            {/* Support */}
            <div className="flex flex-col gap-2">
              <h3 className="font-bold text-lg mb-2 text-white">Support</h3>
              <div className="flex flex-col gap-2">
                <a href="#faq" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  FAQ
                </a>
                <a href="#" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  Contact Us
                </a>
                <a href="mailto:support@nanobananaai.ai" className="opacity-60 hover:opacity-100 text-sm text-gray-300 hover:text-white transition-colors">
                  support@nanobananaai.ai
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Language Selection */}
        <div className="border-t border-gray-900">
          <div className="container py-6">
            <div className="flex flex-wrap items-center gap-3 md:gap-4">
              {languages.map((lang, index) => (
                <button
                  key={index}
                  type="button"
                  className="flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900/50 border border-gray-800 text-gray-300 text-sm hover:bg-gray-800/50 hover:border-orange-500/30 transition-all duration-300"
                >
                  <span className="text-lg leading-none">{lang.flag}</span>
                  <span>{lang.name}</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-900">
          <div className="container py-6">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6">
                <p className="text-gray-500 text-xs">
                  © 2025 Nano Banana. All rights reserved.
                </p>
                <div className="hidden md:block w-px h-4 bg-gray-800"></div>
                <p className="text-gray-600 text-xs">
                  Powered by Advanced AI Technology
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="h-[1px] bg-gradient-to-r from-transparent via-orange-500/50 to-transparent"></div>
      </div>
    </footer>
  );
};

export default Footer;