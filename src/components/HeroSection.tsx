import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Textarea } from '@/components/ui/textarea';
import { Upload, Image, Type, Sparkles, ChevronLeft, ChevronRight } from 'lucide-react';

const HeroSection = () => {
  const [activeTab, setActiveTab] = useState('image');
  const [prompt, setPrompt] = useState('');
  const [selectedImages, setSelectedImages] = useState(1);
  const [currentExample, setCurrentExample] = useState(0);

  const examples = [
    {
      prompt: "Transform this photo into a character figurine. Place a box with the character's image behind it, and next to it is a computer displaying the Blender modeling process. Add a circular plastic base in front of the box, with the character figurine standing on it. If possible, set the scene indoors.",
      before: "https://nanobananaai.ai/examples/1b.png",
      after: "https://nanobananaai.ai/examples/1a.png"
    }
  ];

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (files) {
      console.log('Files uploaded:', files);
    }
  };

  return (
    <section className="w-full">
      <div className="grid place-items-center lg:max-w-screen-xl mx-auto py-16 md:py-32">
        {/* Hero Text */}
        <div className="text-center space-y-8 sm:pb-20 mt-2">
          <Badge className="inline-flex items-center rounded-full border px-2.5 font-semibold text-sm bg-muted py-2">
            <span className="mr-2">
              <Badge className="bg-background text-foreground hover:bg-background">
                New
              </Badge>
            </span>
            <span> Nano Banana AI ! </span>
          </Badge>

          <div className="max-w-7xl mx-auto text-center text-4xl md:text-6xl font-bold">
            <h1 className="text-white">Nano Banana AI图片编辑器</h1>
          </div>

          <p className="max-w-5xl mx-auto text-xl text-muted-foreground">
            Nano Banana是一款革命性的AI图片编辑工具，让您只需一句话就能将图片编辑成任何您想要的样子。
          </p>
        </div>

        {/* Main Editor Interface */}
        <div className="w-full mx-auto text-white">
          <div className="w-full mx-auto px-6 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Column - Controls */}
              <div className="space-y-6">
                {/* Tab Switcher */}
                <div className="flex gap-2 p-1 bg-gray-900/50 rounded-lg border border-gray-800">
                  <button
                    onClick={() => setActiveTab('image')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all ${
                      activeTab === 'image' 
                        ? 'bg-nano-yellow/20 text-white border border-nano-yellow/30' 
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <Image className="w-4 h-4" />
                    <span className="text-sm font-medium">Image Edit</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('text')}
                    className={`flex-1 flex items-center justify-center gap-2 px-4 py-3 rounded-md transition-all ${
                      activeTab === 'text' 
                        ? 'bg-nano-yellow/20 text-white border border-nano-yellow/30' 
                        : 'text-gray-400 hover:text-gray-300 hover:bg-gray-800/50'
                    }`}
                  >
                    <Type className="w-4 h-4" />
                    <span className="text-sm font-medium">Text to Image</span>
                  </button>
                </div>

                {/* Image Upload */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <p className="text-lg font-semibold mb-2">Image Upload</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Upload images to edit (up to 5 images).
                  </p>
                  <div className="border-2 border-dashed rounded-xl p-8 text-center transition-all cursor-pointer hover:border-gray-600 border-gray-700">
                    <div className="flex flex-col items-center pointer-events-none">
                      <Upload className="w-12 h-12 text-gray-500 mb-4" />
                      <p className="text-gray-300 font-medium mb-2">Upload Images</p>
                      <p className="text-gray-500 text-sm mb-4">
                        Upload up to 5 images (JPEG, PNG or WEBP, max 10MB each)
                      </p>
                    </div>
                    <input 
                      type="file" 
                      accept="image/*" 
                      multiple 
                      className="hidden" 
                      onChange={handleFileUpload}
                    />
                  </div>
                </div>

                {/* Prompt */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <p className="text-lg font-semibold mb-2">Prompt</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Describe what you want to change in the image
                  </p>
                  <Textarea
                    placeholder="Example: Change the background to a blue sky."
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    maxLength={5000}
                    className="w-full h-32 px-4 py-3 bg-black/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:border-gray-600 focus:outline-none resize-none"
                  />
                  <div className="text-right text-gray-500 text-sm mt-2">
                    {prompt.length}/5000
                  </div>
                </div>

                {/* Number of Images */}
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <p className="text-lg font-semibold mb-2">Number of Images</p>
                  <p className="text-gray-400 text-sm mb-4">
                    Select how many images to generate
                  </p>
                  <div className="grid grid-cols-4 gap-2">
                    {[1, 2, 3, 4].map((num) => (
                      <button
                        key={num}
                        onClick={() => setSelectedImages(num)}
                        className={`py-2 px-4 rounded-lg border transition-all font-medium flex flex-col items-center justify-center ${
                          selectedImages === num
                            ? 'bg-gradient-to-r from-blue-500/20 to-purple-500/20 border-blue-500/50 text-white'
                            : 'bg-black/30 border-gray-700 text-gray-400 hover:border-gray-600 hover:text-gray-300'
                        }`}
                      >
                        <span className="text-xl font-bold">{num}</span>
                        <span className="text-xs">{num === 1 ? 'Image' : 'Images'}</span>
                      </button>
                    ))}
                  </div>
                </div>

                {/* Generate Button */}
                <Button 
                  disabled={!prompt.trim()}
                  className="w-full py-4 bg-nano-yellow text-black font-semibold rounded-lg hover:bg-nano-yellow/90 disabled:opacity-30 disabled:cursor-not-allowed transition-all flex items-center justify-center gap-2 shadow-lg hover:shadow-xl"
                >
                  Generate Image
                  <Sparkles className="w-5 h-5" />
                </Button>

                {/* Credits Info */}
                <div className="flex items-center justify-center gap-2 bg-black/30 rounded-lg p-3">
                  <svg className="w-4 h-4 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm text-gray-300">
                    Credits required: <span className="font-semibold text-white">10</span>
                  </span>
                </div>
              </div>

              {/* Right Column - Examples */}
              <div className="space-y-6">
                <div className="bg-gray-900/50 rounded-xl p-6 border border-gray-800">
                  <p className="text-lg font-semibold mb-4">Examples</p>
                  
                  <div className="relative">
                    {/* Example Navigation */}
                    <div className="flex items-center justify-between mb-4">
                      <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <ChevronLeft className="w-5 h-5" />
                      </button>
                      <div className="text-center flex-1">
                        <p className="text-white font-medium italic px-4">
                          "{examples[currentExample].prompt}"
                        </p>
                      </div>
                      <button className="p-2 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors">
                        <ChevronRight className="w-5 h-5" />
                      </button>
                    </div>

                    {/* Before/After Images */}
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <p className="text-gray-400 text-sm mb-2">Before</p>
                        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                          <img 
                            src={examples[currentExample].before} 
                            alt="Before" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                      <div>
                        <p className="text-gray-400 text-sm mb-2">After</p>
                        <div className="relative bg-gray-800 rounded-lg overflow-hidden">
                          <img 
                            src={examples[currentExample].after} 
                            alt="After" 
                            className="w-full h-full object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    {/* Pagination Dots */}
                    <div className="flex justify-center gap-2 mt-4">
                      <button className="w-2 h-2 rounded-full transition-all bg-white w-6"></button>
                      <button className="w-2 h-2 rounded-full transition-all bg-gray-600"></button>
                      <button className="w-2 h-2 rounded-full transition-all bg-gray-600"></button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;