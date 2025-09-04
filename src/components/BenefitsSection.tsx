import { Sparkles } from 'lucide-react';

const BenefitsSection = () => {
  const benefits = [
    {
      title: "专业产品摄影",
      description: "立即转换您的产品照片。更改背景、添加标志、修改颜色或更新任何元素。非常适合电子商务、营销材料和社交媒体内容。"
    },
    {
      title: "创意魔法",
      description: "将普通照片变成非凡的艺术。添加奇幻元素、交换物体、创建超现实场景、改变风格为动漫或油画——用简单的文字实现您能想象的一切。"
    },
    {
      title: "完美肖像",
      description: "轻松提升您的自拍和肖像照。更改背景、调整照明、修改姿势或应用艺术滤镜。从任何照片获得杂志级品质的效果。"
    }
  ];

  return (
    <section id="benefits" className="sm:pb-32 py-16 md:py-32">
      <div className="container">
        <div className="max-w-7xl mx-auto px-6">
          <header className="mb-6 lg:mb-12 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              您可以用Nano Banana做什么？
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              为您的创意愿景提供无限可能
            </p>
          </header>

          <div className="mx-auto mt-8 grid gap-8 md:mt-16 md:grid-cols-3 lg:gap-10">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="rounded-lg text-card-foreground group border-0 bg-gray-900/50 backdrop-blur shadow-none hover:bg-gray-800/50 transition-all duration-300"
              >
                <div className="flex flex-col space-y-1.5 p-6 pb-4">
                  <div className="relative mx-auto size-40 [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]">
                    <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:24px_24px] opacity-30"></div>
                    <div className="absolute inset-0 m-auto flex size-14 items-center justify-center border-t border-l border-gray-700/50 bg-gray-900/80 backdrop-blur">
                      <Sparkles className="size-7 text-nano-yellow" />
                    </div>
                  </div>
                  <h3 className="mt-6 text-lg font-semibold text-white text-center">
                    {benefit.title}
                  </h3>
                </div>
                <div className="p-6 pt-0 px-2">
                  <p className="text-base text-gray-400 leading-relaxed text-center">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;