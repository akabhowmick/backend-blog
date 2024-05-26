import "./Home.css";
export const Home = () => {
  return (
    <div>
      <link
        href="https://fonts.googleapis.com/css?family=Abhaya+Libre:400,800|Montserrat:600|Alegreya+Sans:500&display=swap"
        rel="stylesheet"
      />
      <main className="bg-white font-abhaya-libre relative">
        <header className="h-24 sm:h-32 flex items-center absolute top-0 right-0 z-20">
          <div className="container mx-auto px-6 sm:px-12 flex items-center justify-end">
            <nav className="flex items-center">
              <a
                href="#"
                className="hidden xl:block font-abhaya-libre uppercase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline"
              >
                Home
              </a>
              <a
                href="#"
                className="hidden xl:block font-abhaya-libre uppercase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline"
              >
                About
              </a>
              <a
                href="#"
                className="hidden xl:block font-abhaya-libre uppercase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline"
              >
                Gallery
              </a>
              <a
                href="#"
                className="hidden xl:block font-abhaya-libre uppercase text-gray-800 tracking-wider px-4 xl:px-8 py-2 text-lg hover:underline"
              >
                Contact
              </a>
              <button className="ml-4 xl:ml-8 flex flex-col">
                <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
                <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
                <span className="w-8 h-1 bg-gray-800 mb-1 rounded"></span>
              </button>
            </nav>
          </div>
        </header>
        <div className="container mx-auto px-6 sm:px-12 flex flex-col sm:flex-row items-center relative z-10">
          <div className="sm:w-1/2 xl:w-2/6 flex flex-col items-start py-24 sm:py-0">
            <h1 className="text-6xl xl:text-10xl font-abhaya-libre text-green-900 font-bold leading-none">
              Medium Blog Page 
            </h1>
            <h2 className="text-xl xl:text-3xl font-abhaya-libre text-green-900 uppercase font-bold leading-none tracking-widest -mt-2 mb-6">
              Landing page
            </h2>
            <p className="xl:text-lg tracking-wider text-gray-700 font-alegraya-sans">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh minim
              veniam, quis nostrud
            </p>
            <p className="xl:text-lg tracking-wider text-gray-700 font-alegraya-sans">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh minim
              veniam, quis nostrud
            </p>\
            <a
              href="#"
              className="font-montserrat text-white sm:font-xl uppercase py-3 px-6 sm:py-4 sm:px-8 rounded-full shadow-lg bg-green-900 hover:bg-green-800 mt-8 sm:mt-16"
            >
              Read more
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};
