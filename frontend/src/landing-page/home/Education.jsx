export default function Education() {
  return (
    <div className="container mt-40  mx-auto px-4">
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col w-[50%]  items-start">
          <img
            src="public\media\images\education.svg"
            className="w-[80%]"
            alt=""
          />
        </div>
        <div className="flex flex-col w-[50%] ">
          <h3 className="font-semibold text-4xl mb-12">
            Free and open market education
          </h3>
          <p className="text-[20px] mb-6">
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>
          <a href="" className="text-blue-400 font-medium text-[1.2rem]">
            Versity <i className="fa-solid fa-arrow-right-long"></i>
          </a>
          <p className="text-[20px] mb-6 mt-16">
            TradingQ&A, the most active trading and investment community in
            India for all your market related queries.
          </p>
          <a href="" className="text-blue-400 font-medium text-[1.2rem]">
            TradingQ&A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
