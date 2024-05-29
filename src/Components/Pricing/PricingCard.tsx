import { MembershipPricing } from "../Types/interfaces";

export const PricingCard = ({ pricingOption }: { pricingOption: MembershipPricing }) => {
  const perks = pricingOption.perks.map((perk, index) => {
    return (
      <li key={index} className="flex items-center gap-2 py-1 text-gray-700">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="2"
          stroke="currentColor"
          aria-hidden="true"
          className="w-5 h-5 text-inherit"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
        </svg>
        <p className="block antialiased font-sans text-base leading-relaxed font-normal text-inherit">
          {perk}
        </p>
      </li>
    );
  });

  return (
    <div className="px-10 pt-8 pb-16 -mt-16 lg:px-30 xl:px-40">
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        <div className="relative flex flex-col bg-clip-border rounded-xl bg-white text-gray-700 shadow-md lg:h-max lg:scale-105 z-10 translate-y-0">
          <div className="p-6 text-center">
            <h5 className="antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-green-500 flex justify-center mt-2 mb-2">
              {pricingOption.name}
            </h5>
            <h3 className="antialiased tracking-normal font-sans text-3xl font-semibold leading-snug text-blue-gray-900 flex justify-center mt-5 mb-2">
              {pricingOption.price}
              <span className="block antialiased tracking-normal font-sans text-xl font-semibold leading-snug text-blue-gray-900 self-end -translate-y-1">
                /per month
              </span>
            </h3>
            <ul className="flex flex-col items-center justify-start gap-3 pt-6 mt-2 mb-5">
              {perks}
            </ul>
            <button
              className="align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full flex items-center justify-center gap-4"
              type="button"
            >
              join
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                aria-hidden="true"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                ></path>
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export const DummyPricing = () => {
  return (
    <section>
      <div className="container max-w-full mx-auto py-24 px-6">
        <div className="h-1 mx-auto bg-indigo-200 w-24 opacity-75 mt-4 rounded"></div>
        <div className="max-w-full md:max-w-6xl mx-auto my-3 md:px-8">
          <div className="relative flex flex-col md:flex-row items-center">
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-mr-4">
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Hobby
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">FREE</h2>
                  Stripe offers everything needed to run an online business at scale. 
                </div>

                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">No setup</span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">No setups</span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">Speed</span>
                    </li>
                  </ul>
                </div>
                <div className="flex items-center p-8  uppercase">
                  <button className="mt-3 text-lg font-semibold  bg-black w-full text-white rounded-lg px-6 py-3 block shadow-xl hover:bg-gray-700">
                    Select
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full max-w-md sm:w-2/3 lg:w-1/3 sm:my-5 my-8 relative z-10 bg-white rounded-lg shadow-lg">
              <div className="text-sm leading-none rounded-t-lg bg-gray-200 text-black font-semibold uppercase py-4 text-center tracking-wide">
                Most Popular
              </div>
              <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                  Expert
                </h1>
                <h2 className="text-sm text-gray-500 text-center pb-6">
                  <span className="text-3xl">€19</span> /mo
                </h2>
                Stripe offers everything needed to run an online business at scale. Get in touch for
                details.
              </div>
              <div className="flex pl-12 justify-start sm:justify-start mt-3">
                <ul>
                  <li className="flex items-center">
                    <div className="rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">No setup</span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">Hidden fees</span>
                  </li>
                  <li className="flex items-center">
                    <div className=" rounded-full p-2 fill-current text-green-700">
                      <svg
                        className="w-6 h-6 align-middle"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      >
                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                        <polyline points="22 4 12 14.01 9 11.01"></polyline>
                      </svg>
                    </div>
                    <span className="text-gray-700 text-lg ml-3">Original</span>
                  </li>
                </ul>
              </div>

              <div className="flex items-center p-8  uppercase">
                <button
                  className="mt-3 text-lg font-semibold 
	bg-black w-full text-white rounded-lg 
	px-6 py-3 block shadow-xl hover:bg-gray-700"
                >
                  Select
                </button>
              </div>
            </div>
            <div className="w-11/12 max-w-sm sm:w-3/5 lg:w-1/3 sm:my-5 my-8 relative z-0 rounded-lg shadow-lg md:-ml-4">
              <div className="bg-white text-black rounded-lg shadow-lg overflow-hidden">
                <div className="block text-left text-sm sm:text-md max-w-sm mx-auto mt-2 text-black px-8 lg:px-6">
                  <h1 className="text-lg font-medium uppercase p-3 pb-0 text-center tracking-wide">
                    Enterprise
                  </h1>
                  <h2 className="text-sm text-gray-500 text-center pb-6">€39 /mo</h2>
                  Stripe offers everything needed to run an online business at scale. Get in touch
                  for details.
                </div>
                <div className="flex flex-wrap mt-3 px-6">
                  <ul>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">Electric</span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">Monthly</span>
                    </li>
                    <li className="flex items-center">
                      <div className=" rounded-full p-2 fill-current text-green-700">
                        <svg
                          className="w-6 h-6 align-middle"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          stroke-width="2"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        >
                          <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
                          <polyline points="22 4 12 14.01 9 11.01"></polyline>
                        </svg>
                      </div>
                      <span className="text-gray-700 text-lg ml-3">No setup</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
