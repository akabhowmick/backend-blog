import { MembershipPricing } from "../Types/interfaces";

export const PricingCard = ({ pricingOption }: { pricingOption: MembershipPricing }) => {
  const perks = pricingOption.perks.map((perk, index) => {
    return (
      <li key={index} className="flex items-center">
        <div className=" rounded-full p-2 fill-current text-green-700">
          <svg
            className="w-6 h-6 align-middle"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
            <polyline points="22 4 12 14.01 9 11.01"></polyline>
          </svg>
        </div>
        <span className="text-gray-700 text-lg ml-3">{perk}</span>
      </li>
    );
  });

  return (
    <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
      <div className="bg-white text-black rounded-lg shadow-inner overflow-hidden">
        <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
          <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
            {pricingOption.name}
          </h1>
          <h2 className="text-sm text-gray-500 text-center pb-6">
            ${pricingOption.price}.00/per month
          </h2>
        </div>
        <div className="flex flex-wrap mt-3 px-6">
          <ul>{perks}</ul>
        </div>
        <div className="flex items-center p-8  uppercase">
          <button className="mt-3 text-lg font-semibold bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
            Select
          </button>
        </div>
      </div>
    </div>
  );
};
