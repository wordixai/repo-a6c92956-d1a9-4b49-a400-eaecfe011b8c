const FeaturesSection = () => {
  const features = [
    {
      title: "完美的一致性",
      description: "编辑您的照片，同时保持人物、物体和细节完全不变。只改变您想要改变的部分。",
      image: "https://nanobananaai.ai/core-features/1.png",
      reverse: false
    },
    {
      title: "自然语言编辑",
      description: "只需用简单的语言描述您想要的效果。无需复杂的工具或菜单——只要告诉Nano Banana您想看到什么。",
      image: "https://nanobananaai.ai/core-features/2.png",
      reverse: true
    },
    {
      title: "多图片魔法",
      description: "上传两张照片并结合它们的最佳特征。创造独特的效果，无缝融合多张图片的元素。",
      image: "https://nanobananaai.ai/core-features/3.png",
      reverse: false
    },
    {
      title: "闪电般的速度",
      description: "在不到一分钟内获得专业级编辑效果。无需等待，无需排队——只有即时的创意转化。",
      image: "https://nanobananaai.ai/core-features/4.png",
      reverse: true
    }
  ];

  return (
    <section id="features" className="sm:pb-32 py-20 md:py-40">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            是什么让Nano Banana与众不同？
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            革命性的AI图片编辑，真正理解您
          </p>
        </header>

        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col gap-32">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`flex flex-col lg:flex-row items-center gap-12 ${
                  feature.reverse ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className="flex-1 space-y-4">
                  <h3 className="text-3xl lg:text-4xl font-bold text-white leading-tight">
                    {feature.title}
                  </h3>
                  <p className="text-gray-400 text-lg leading-relaxed">
                    {feature.description}
                  </p>
                </div>
                <div className="flex-1">
                  <div className="relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="rounded-2xl shadow-2xl w-full max-w-lg h-auto object-cover"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;