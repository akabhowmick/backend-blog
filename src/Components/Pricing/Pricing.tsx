import { MembershipPricing } from "../Types/interfaces";
import { PricingCard } from "./PricingCard";

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
        "Drive more earnings for writers",
        "Customize app icon",
      ],
    },
  ];

  return (
    <section className="bg-white">
      <div className="container max-w-full mx-auto py-24 px-6">
        <h1 className="text-center text-4xl text-black font-medium leading-snug tracking-wider">
          Pricing
        </h1>
        <p className="text-center text-lg text-gray-700 mt-2 px-6">
          Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
          laudantium, totam rem aperiam.
        </p>
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>

        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            {pricingPlans.map((plan, index) => {
              return <PricingCard key={index} pricingOption={plan} />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
