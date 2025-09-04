import { Button } from '@/components/ui/button';

const HowToUseSection = () => {
  const steps = [
    {
      number: 1,
      title: "上传您的图片",
      description: "拖放任何您想编辑的照片。JPEG、PNG或任何常见格式都完美支持。您甚至可以上传多张图片进行组合。"
    },
    {
      number: 2,
      title: "描述您的愿景",
      description: "用简单的语言输入您想要改变的内容。设置您喜欢的宽高比，并根据需要调整高级设置。"
    },
    {
      number: 3,
      title: "下载和分享",
      description: "点击"生成"，等待不到一分钟。您的专业编辑图片已准备好下载并在任何地方使用！"
    }
  ];

  return (
    <section id="how-to-use" className="sm:pb-32 py-12 md:py-32">
      <div className="container">
        <div className="max-w-7xl mx-auto px-4 md:px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              如何使用Nano Banana？
            </h2>
            <p className="text-gray-400 text-lg max-w-3xl mx-auto">
              3个简单步骤转换您的照片——无需经验！
            </p>
          </div>

          <div className="relative px-2 md:px-4">
            <div className="absolute inset-4 bg-nano-yellow/5 opacity-30 blur-3xl rounded-3xl"></div>
            
            <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 lg:gap-16 pt-5">
              {steps.map((step, index) => (
                <div key={index} className="relative group">
                  {/* Connector Line */}
                  {index < steps.length - 1 && (
                    <div className="hidden md:block absolute top-16 left-full w-12 lg:w-16 h-0.5 z-0">
                      <div className="w-full h-full bg-nano-yellow/60 relative overflow-hidden">
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent w-1/3 animate-pulse"></div>
                      </div>
                      <div className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-1">
                        <div className="w-3 h-3 rotate-45 bg-nano-yellow border-r-2 border-b-2 border-nano-yellow"></div>
                      </div>
                    </div>
                  )}

                  {/* Step Card */}
                  <div className="relative bg-white/[0.03] backdrop-blur-xl rounded-3xl py-6 px-2 md:py-8 md:px-4 border border-white/10 group-hover:border-nano-yellow/30 transition-all duration-700 group-hover:shadow-2xl group-hover:shadow-nano-yellow/20 group-hover:scale-105 overflow-hidden">
                    <div className="absolute inset-0 bg-nano-yellow/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-3xl"></div>
                    
                    <div className="relative z-10">
                      <div className="mb-6 flex justify-center">
                        <div className="relative p-2">
                          <div className="w-20 h-20 rounded-2xl bg-nano-yellow/20 flex items-center justify-center group-hover:rotate-6 transition-transform duration-500 shadow-lg">
                            <span className="text-3xl font-bold text-nano-yellow group-hover:text-white transition-colors duration-500">
                              {step.number}
                            </span>
                          </div>
                          <div className="absolute inset-0 rounded-2xl border-2 border-nano-yellow/20 group-hover:border-nano-yellow/40 group-hover:scale-110 transition-all duration-500"></div>
                        </div>
                      </div>
                      
                      <h3 className="text-xl font-bold text-center text-white mb-4 group-hover:text-nano-yellow transition-colors duration-500">
                        {step.title}
                      </h3>
                      
                      <p className="text-center text-gray-400 leading-relaxed text-sm group-hover:text-gray-300 transition-colors duration-500">
                        {step.description}
                      </p>
                    </div>
                    
                    <div className="absolute bottom-0 left-2 right-2 h-1 bg-nano-yellow opacity-0 group-hover:opacity-100 transition-opacity duration-700 rounded-full"></div>
                  </div>
                </div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button className="group relative bg-neutral-800 rounded-full p-px overflow-hidden">
                <span className="absolute inset-0 rounded-full overflow-hidden">
                  <span className="inset-0 absolute pointer-events-none select-none">
                    <span 
                      className="block -translate-x-1/2 -translate-y-1/3 size-24 blur-xl"
                      style={{
                        background: "linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"
                      }}
                    ></span>
                  </span>
                </span>
                <span 
                  className="inset-0 absolute pointer-events-none select-none animate-border-glow-translate"
                >
                  <span 
                    className="block z-0 h-full w-12 blur-xl -translate-x-1/2 rounded-full animate-border-glow-scale"
                    style={{
                      background: "linear-gradient(135deg, rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"
                    }}
                  ></span>
                </span>
                <span className="flex items-center justify-center gap-1 relative z-[1] bg-white rounded-full w-full h-12 px-6 text-base">
                  <span className="relative group-hover:scale-105 transition-transform group-hover:rotate-[360deg] duration-500">
                    <div className="w-6 h-6 bg-gray-300 rounded"></div>
                    <span 
                      className="rounded-full size-11 absolute opacity-0 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 blur-lg animate-star-shine"
                      style={{
                        background: "linear-gradient(135deg, rgb(59, 196, 242), rgb(122, 105, 249), rgb(242, 99, 120), rgb(245, 131, 63))"
                      }}
                    ></span>
                  </span>
                  <span className="bg-gradient-to-b ml-1.5 from-gray-700 to-gray-900 bg-clip-text text-transparent group-hover:scale-105 transition transform-gpu text-base">
                    免费试用Nano Banana
                  </span>
                </span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowToUseSection;