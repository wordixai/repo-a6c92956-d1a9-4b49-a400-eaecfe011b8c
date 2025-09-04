import { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQSection = () => {
  const [openItems, setOpenItems] = useState<number[]>([0]);

  const faqs = [
    {
      question: "Nano Banana是什么？",
      answer: "Nano Banana是一款AI驱动的图片编辑器，让您使用简单的文字描述来转换照片。只需说出您想要改变的内容，它就会保持其他一切完美不变。"
    },
    {
      question: "使用Nano Banana需要设计技能吗？",
      answer: "完全不需要！如果您能输入您想要的内容，您就能使用Nano Banana。不需要技术知识、设计经验或复杂的软件技能。"
    },
    {
      question: "编辑有多精确？",
      answer: "Nano Banana使用先进的AI来保持惊人的一致性。您不想改变的人物、物体和细节保持完全相同，同时只应用您请求的编辑。"
    },
    {
      question: "支持哪些文件格式？",
      answer: "Nano Banana支持所有常见的图片格式，包括JPEG、PNG、WebP等。您可以从手机、相机或电脑上传照片。"
    },
    {
      question: "我可以将编辑后的图片用于商业用途吗？",
      answer: "可以！所有使用Nano Banana编辑的图片都属于您，可以随意使用——用于个人项目、社交媒体、商业或商业目的。"
    },
    {
      question: "编辑一张照片需要多长时间？",
      answer: "大多数编辑在60秒内完成。复杂的转换可能需要多几秒钟，但您永远不会等待太久。"
    },
    {
      question: "我可以同时编辑多张照片吗？",
      answer: "可以！您可以上传两张图片并结合它们的最佳特征，或者使用相同的编辑指令批量处理多张照片。"
    },
    {
      question: "Nano Banana理解哪些语言？",
      answer: "Nano Banana理解任何语言的指令。用英语、西班牙语、中文或任何您觉得舒适的语言描述您想要的内容。"
    },
    {
      question: "我能编辑多少次有限制吗？",
      answer: "免费用户每天获得大量的编辑次数。如需无限创意自由，请查看我们的无限制高级计划。"
    },
    {
      question: "我的数据安全吗？",
      answer: "绝对安全。您的照片被安全处理，从不共享。我们使用企业级加密，并在下载后删除处理过的图片。"
    }
  ];

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  return (
    <section className="sm:pb-32 py-20 md:py-32">
      <div className="container">
        <header className="mb-6 lg:mb-12 text-center max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            常见问题
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            关于Nano Banana您需要知道的一切
          </p>
        </header>

        <div className="max-w-screen-md mx-auto">
          <div className="space-y-2">
            {faqs.map((faq, index) => (
              <details
                key={index}
                className="group border-b border-gray-800 pb-4"
                open={openItems.includes(index)}
              >
                <summary
                  className="flex items-center justify-between py-4 font-medium text-xl cursor-pointer list-none [&::-webkit-details-marker]:hidden hover:underline transition-all text-left"
                  onClick={(e) => {
                    e.preventDefault();
                    toggleItem(index);
                  }}
                >
                  <h3 className="flex-1 pr-4 text-white">{faq.question}</h3>
                  <ChevronDown 
                    className={`h-4 w-4 shrink-0 transition-transform duration-200 ${
                      openItems.includes(index) ? 'rotate-180' : ''
                    }`} 
                  />
                </summary>
                {openItems.includes(index) && (
                  <div className="pb-4 pt-0 text-lg text-gray-300 leading-relaxed">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </details>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-sm text-gray-400">
              没有找到您要找的答案？联系我们的支持团队：
              <a 
                href="mailto:support@nanobananaai.ai" 
                className="text-nano-yellow hover:text-nano-yellow transition-colors ml-1"
              >
                support@nanobananaai.ai
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;