import { Button } from '@/components/ui/button';

const CTASection = () => {
  return (
    <section className="sm:pb-32 py-20 md:py-32">
      <div className="container">
        <div className="mx-auto">
          <div className="rounded-lg border text-card-foreground bg-background border-none shadow-none text-center flex flex-col items-center justify-center">
            <div className="flex flex-col space-y-1.5 p-6">
              <h2 className="text-4xl md:text-5xl font-bold text-white">
                准备好转换您的照片了吗？
              </h2>
            </div>
            <div className="p-6 pt-0 lg:w-[80%] text-xl text-muted-foreground">
              加入成千上万使用Nano Banana仅凭文字就能编辑图片的创作者。无需注册，无需信用卡。在几秒钟内开始创建惊人的编辑效果。
            </div>
            <div className="flex items-center p-6 pt-0">
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

export default CTASection;