import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Check } from 'lucide-react';

const PricingSection = () => {
  const [isYearly, setIsYearly] = useState(true);

  const pricingPlans = [
    {
      name: "Free",
      price: "Free",
      yearlyPrice: "Free",
      description: "Free",
      features: [
        "10 credits free(1 image edit)",
        "7 days cloud storage"
      ],
      buttonText: "Get Started",
      buttonStyle: "bg-gray-500",
      isPopular: false,
      cardStyle: "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border"
    },
    {
      name: "Pro",
      price: "$29 / Month",
      yearlyPrice: "$14.5 / Month",
      description: "8000 credits per month",
      features: [
        "8000 credits per month",
        "Forever cloud storage",
        "Commercial License",
        "Unrestricted Usage Rights",
        "Priority processing speed"
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "bg-yellow-400 hover:bg-yellow-500 text-black",
      isPopular: true,
      cardStyle: "border-2 shadow-xl",
      featuresHeader: "Everything in Pro +",
      checkmarkStyle: "bg-yellow-400/20 border-yellow-400/50",
      checkColor: "text-yellow-700"
    },
    {
      name: "Basic",
      price: "$20 / Month",
      yearlyPrice: "$10 / Month",
      description: "2000 credits per month",
      features: [
        "2000 credits per month",
        "30 days cloud storage"
      ],
      buttonText: "Subscribe Now",
      buttonStyle: "bg-gray-500",
      isPopular: false,
      cardStyle: "bg-[#F3F4F6] dark:bg-[#F9FAFB]/[0.02] border border-border"
    }
  ];

  return (
    <div className="relative overflow-hidden">
      <h1 className="text-center font-bold rounded-xl pt-3 text-white text-4xl mb-4">
        Nano Banana AI 价格
      </h1>
      
      <div className="min-h-screen mt-10 sm:mt-20 px-2">
        <div className="relative w-full overflow-hidden py-20">
          <header className="mb-6 lg:mb-12 text-center max-w-5xl mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
              Nano Banana AI 灵活套餐
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              免费试用 Nano Banana AI，然后选择适合您图像编辑需求的订阅套餐。
            </p>
          </header>

          <div className="w-full max-w-6xl mx-auto px-6">
            <div className="relative">
              {/* Billing Toggle */}
              <div className="mb-8">
                <div className="relative flex w-fit items-center rounded-full border p-0.5 backdrop-blur-sm cursor-pointer h-9 flex-row bg-muted mx-auto">
                  <button 
                    onClick={() => setIsYearly(false)}
                    className={`relative z-[1] px-3 h-8 flex items-center justify-center cursor-pointer ${
                      !isYearly ? 'text-white' : 'text-muted-foreground'
                    }`}
                  >
                    {!isYearly && (
                      <div 
                        className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46] shadow-md border border-border"
                        style={{ opacity: 1 }}
                      />
                    )}
                    <span className="relative block text-sm font-medium duration-200 shrink-0">
                      Monthly
                    </span>
                  </button>
                  <button 
                    onClick={() => setIsYearly(true)}
                    className={`relative px-3 h-8 flex items-center justify-center cursor-pointer z-0 ${
                      isYearly ? 'text-white' : 'text-muted-foreground'
                    }`}
                  >
                    {isYearly && (
                      <div 
                        className="absolute inset-0 rounded-full bg-white dark:bg-[#3F3F46] shadow-md border border-border"
                        style={{ opacity: 1 }}
                      />
                    )}
                    <span className="relative block text-sm font-medium duration-200 shrink-0">
                      Yearly
                      <span className="ml-2 text-xs font-semibold text-green-600 dark:text-green-400">
                        Save 50%
                      </span>
                    </span>
                  </button>
                </div>
              </div>

              <p className="text-xs text-center text-green-600 dark:text-green-400 mb-6 font-medium">
                Cancel anytime • Unused credits roll over monthly
              </p>

              {/* Pricing Cards */}
              <div className="grid gap-4 w-full grid-cols-1 lg:grid-cols-3">
                {pricingPlans.map((plan, index) => (
                  <div
                    key={index}
                    className={`rounded-xl grid grid-rows-[180px_auto_1fr] relative h-fit ${plan.cardStyle}`}
                  >
                    {/* Header */}
                    <div className="flex flex-col gap-4 p-6">
                      <p className="text-sm font-medium text-white">
                        {plan.name}
                        {plan.isPopular && (
                          <span className="bg-gradient-to-b from-yellow-400/50 from-[1.92%] to-yellow-400 to-[100%] text-black h-6 inline-flex w-fit items-center justify-center px-3 rounded-full text-xs ml-2 font-bold shadow-[0px_6px_6px_-3px_rgba(0,0,0,0.08),0px_3px_3px_-1.5px_rgba(0,0,0,0.08),0px_1px_1px_-0.5px_rgba(0,0,0,0.08),0px_0px_0px_1px_rgba(255,255,255,0.12)_inset,0px_1px_0px_0px_rgba(255,255,255,0.12)_inset]">
                            POPULAR
                          </span>
                        )}
                      </p>
                      <div className="flex items-baseline mt-2">
                        <span 
                          className="text-4xl font-semibold text-white"
                          style={{ opacity: 1, filter: 'blur(0px)', transform: 'none' }}
                        >
                          {isYearly ? plan.yearlyPrice : plan.price}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-1">
                        {plan.description}
                      </p>
                    </div>

                    {/* Button */}
                    <div className="flex flex-col gap-2 px-6">
                      <Button 
                        className={`h-12 w-full flex items-center justify-center text-sm font-semibold tracking-wide rounded-full px-6 cursor-pointer transition-all ease-out active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed disabled:active:scale-100 ${plan.buttonStyle}`}
                      >
                        {plan.buttonText}
                      </Button>
                    </div>

                    {/* Divider */}
                    <hr className="border-border dark:border-white/10 m-6" />

                    {/* Features */}
                    <div className="p-6">
                      {plan.featuresHeader && (
                        <p className="text-sm text-muted-foreground mb-4 font-medium">
                          {plan.featuresHeader}
                        </p>
                      )}
                      <ul className="space-y-3">
                        {plan.features.map((feature, featureIndex) => (
                          <li key={featureIndex} className="flex items-center gap-3">
                            <div className={`size-5 rounded-full border flex items-center justify-center flex-shrink-0 ${
                              plan.checkmarkStyle || 'border-primary/20 bg-primary/5'
                            }`}>
                              <Check className={`w-3 h-3 ${plan.checkColor || 'text-primary'}`} />
                            </div>
                            <span className="text-sm text-white">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PricingSection;