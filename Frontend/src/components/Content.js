export const Content = () => {
  return (
    <div id="abc">
    <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
      <div className="flex flex-col max-w-screen-lg overflow-hidden bg-green border rounded shadow-sm lg:flex-row sm:mx-auto">
        <div className="relative lg:w-1/2">
          {/*<img
            src="https://images.pexels.com/photos/11678683/pexels-photo-11678683.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1/.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
            alt=""
            className="object-cover w-full lg:absolute h-80 lg:h-full"
  />*/}
          {/* <svg
            className="absolute top-0 right-0 hidden h-full text-green lg:inline-block"
            viewBox="0 0 20 104"
            fill="currentColor"
          >
            <polygon points="17.3036738 5.68434189e-14 20 5.68434189e-14 20 104 0.824555778 104" />
          </svg> */}
        </div>
        <div className="flex flex-col justify-center p-8 bg-green lg:p-16 lg:pl-10 lg:w-1/2">
          <div>
          </div>
          <h5 className="mb-3 text-3xl font-bold leading-none sm:text-4xl">
            Decentralized Co-Charging
          </h5>
          <p className="mb-5 text-gray-800">
            <span className="font-bold">Decentralized Co-charging</span>  refers to the implementation of a decentralized co-charging system where electric vehicles can connect to charging stations to replenish their battery levels, promoting sustainable transportation and reducing reliance on traditional fuel sources.
          </p>
          <div className="flex items-center">
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-green transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-900 focus:shadow-outline focus:outline-none"
            >
              Chargers
            </button>
            <button
              type="submit"
              className="inline-flex items-center justify-center h-12 px-6 mr-6 font-medium tracking-wide text-green transition duration-200 rounded shadow-md bg-green-700 hover:bg-green-900 focus:shadow-outline focus:outline-none"
            >
              Client
            </button>
             <a
                href="/"
                aria-label=""
                className="inline-flex items-center font-semibold transition-colors duration-200 text-green-700 hover:text-green-900"
              >
                Client
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a> 
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};
