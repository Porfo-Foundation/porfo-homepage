import React from "react";

function FeaturesSection() {
  const features = [
    {
      title: "Crystal Clear P&L System",
      description: "Simplified and transparent tracking of your profits and losses.",
      image: "1",
    },
    {
      title: "Gasless Transactions",
      description: "Trade and transact without the worry of gas fees.",
      image: "2",
    },
    {
      title: "Seamless Onboarding and Key Management",
      description: "Easy and secure setup of your wallet. Explore the crypto world in minutes.",
      image: "3",
    },
    {
      title: "Automated Accounting",
      description: "Auto-generated transaction receipts and smart logs for effortless record-keeping",
      image: "4",
    },
    {
      title: "Automated Smart Wallets",
      description: "Command-following bot integrations for managing your crypto assets.",
      image: "5",
    },
    {
      title: "One-Click Portfolio Management",
      description: "Distribute funds, sweep, and copy portfolios instantly.",
      image: "6",
    },
  ];
  const FeatureCard = ({ title, description, image }) => {
    return (
      <div className="bg-[#06010E] border border-white border-opacity-10 rounded-xl h-full">
        <img src={`/landing-page/feature-${image}.svg`} className="w-full" />
        <div className="px-8 pb-3">
          <p className="from-[rgba(255,255,255,0.7)] to-[rgba(255,255,255,1)] inline-block text-transparent bg-clip-text bg-gradient-to-t text-2xl font-light mb-4">{title}</p>
          <p className="text-[#9B96B0] text-xl font-light">{description}</p>
        </div>
      </div>
    );
  };
  return (
    <div className="max-w-screen-xl mx-auto px-6 pt-20 xl:pt-52">
      <p className="font-bold text-3xl xl:text-5xl">Built-in features</p>
      <div className="grid grid-cols-2 mt-28 gap-6 md:gap-0">
        <div className="hidden md:block">
          {features?.slice(0, 3)?.map((feature, index) => (
            <div className={`${index == 0 ? "md:mr-20 md:mt-24" : index == 1 ? "md:ml-20 md:mt-16" : "md:ml-10 md:mr-10 md:mt-16"}`} key={index}>
              <FeatureCard title={feature.title} description={feature.description} image={feature.image} />
            </div>
          ))}
        </div>
        <div className="hidden md:block">
          {features?.slice(3, 6)?.map((feature, index) => (
            <div className={index == 0 ? "md:mr-20" : "md:ml-20 md:mt-16"} key={index}>
              <FeatureCard title={feature.title} description={feature.description} image={feature.image} />
            </div>
          ))}
        </div>
        {features?.map((feature, index) => (
          <div className="block md:hidden col-span-2 sm:col-span-1" key={index}>
            <FeatureCard title={feature.title} description={feature.description} image={feature.image} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturesSection;
