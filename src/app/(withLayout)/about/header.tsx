import React from 'react';


const Header = () => {
  return (
    <div>
      <section className="">
        <div className="justify-items-start
               bg-indigo-300	background-color: rgb(165 180 252)
               text-black py-5">
          <div className="container mx-auto flex flex-col md:flex-row justify-items-center">
            <div className="flex flex-col w-full lg:w-1/3 justify-items-start p-8">
              <h1 className="text-3xl md:text-5xl my-5 text-black tracking-loose ">
                About Us
              </h1>

              <nav
                className="flex mt-2   rounded-lg   dark:bg-gray-800 dark:border-gray-700"
                aria-label="Breadcrumb"
              >
                <ol className="inline-flex items-center space-x-1 md:space-x-2 rtl:space-x-reverse">
                  <li className="inline-flex items-center">
                    <a
                      href="/"
                      className="inline-flex items-center text-lg font-medium text-black-700 hover:text-blue-600 dark:text-gray-400 dark:hover:text-black"
                    >
                      <svg
                        className="w-3 h-3 me-2.5"
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="fill-black"
                        viewBox="0 0 20 20"
                      >
                        <path d="m19.707 9.293-2-2-7-7a1 1 0 0 0-1.414 0l-7 7-2 2a1 1 0 0 0 1.414 1.414L2 10.414V18a2 2 0 0 0 2 2h3a1 1 0 0 0 1-1v-4a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1v4a1 1 0 0 0 1 1h3a2 2 0 0 0 2-2v-7.586l.293.293a1 1 0 0 0 1.414-1.414Z" />
                      </svg>
                      Home
                    </a>
                  </li>
                  <li>
                    <div className="flex items-center">
                      <svg
                        className="rtl:rotate-180 block w-3 h-3 mx-1 text-gray-400 "
                        aria-hidden="true"
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 6 10"
                      >
                        <path
                          stroke="black"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="m1 9 4-4-4-4"
                        />
                      </svg>
                      <a
                        href="#"
                        className="ms-1 text-lg font-medium text-black-700 hover:text-blue-600 md:ms-2 dark:text-gray-400 dark:hover:text-white"
                      >
                        About us
                      </a>
                    </div>
                  </li>
                </ol>
              </nav>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Header;