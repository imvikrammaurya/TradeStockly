export default function Education() {
  return (
    <div className="container mt-20 sm:mt-40  mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="flex flex-col w-full sm:w-[50%]  items-start">
          <img
            src="public\media\images\education.svg"
            className="w-full sm:w-[80%]"
            alt=""
          />
        </div>
        <div className="flex flex-col w-full sm:w-[50%] ">
          <h3 className="font-semibold text-2xl sm:text-4xl mb-6 sm:mb-12">
            Free and open market education
          </h3>
          <p className="text-lg sm:text-[20px] mb-4 sm:mb-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a
            href=""
            className="text-blue-400 font-medium text-sm sm:text-[1.2rem]"
          >
            Versity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-lg sm:text-[20px] mb-4 sm:mb-6 mt-8 sm:mt-16">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a
            href=""
            className="text-blue-400 font-medium text-sm sm:text-[1.2rem]"
          >
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
