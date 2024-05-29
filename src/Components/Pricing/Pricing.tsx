import { MembershipPricing } from "../Types/interfaces";
import { DummyPricing, PricingCard } from "./PricingCard";

export const Pricing = () => {
  const pricingPlans: MembershipPricing[] = [
    {
      name: "Basic Plan",
      price: 0,
      perks: ["Unlimited Posts", "Unlimited Comments", "Limited Views on Premium Posts"],
    },
    {
      name: "Medium Member",
      price: 5,
      perks: [
        "Read member-only stories",
        "Support writers you read most",
        "Listen to audio narrations",
        "Create your own publications",
      ],
    },
    {
      name: "Friend of Medium",
      price: 15,
      perks: [
        "All Medium Member Benefits",
        "Share member-only stories with anyone and drive more earnings for writers",
        "Customize app icon",
      ],
    },
  ];

  return (
    <div>
      <section className="p-4">
        <div className="relative bg-clip-border bg-black text-gray-700 flex h-full min-h-[314px] w-full flex-col items-center justify-center rounded-xl px-8">
          <div className="container mx-auto text-center">
            <h2 className="block antialiased tracking-normal font-sans text-4xl font-semibold leading-[1.3] text-white mb-4">
              Pricing
            </h2>
            <p className="block antialiased font-sans text-xl font-normal leading-relaxed text-white mb-8 opacity-70">
              Choose the perfect plan for your blogging experience
            </p>
          </div>
        </div>
        <div className="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {pricingPlans.map((pricingPlan) => {
              return <PricingCard key={pricingPlan.name} pricingOption={pricingPlan} />;
            })}
          </div>
          <DummyPricing />
        </div>
      </section>
    </div>
  );
};
