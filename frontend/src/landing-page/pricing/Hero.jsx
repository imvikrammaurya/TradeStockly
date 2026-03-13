export default function Hero() {
  return (
    <>
      <div className="container my-10 sm:my-20  mx-auto px-4">
        <div className="flex flex-col items-center gap-4 sm:gap-8 justify-center mx-0 sm:mx-70">
          <div className="text-center m-8 sm:m-16">
            <h4 className="text-xl sm:text-2xl font-normal p-2 sm:p-5">
              Charges
            </h4>
            <p className="text-gray-400 text-lg sm:text-xl ">
              List of all charges and taxes
            </p>
          </div>
          <div className="flex flex-col sm:flex-row ">
            <div className="text-center w-full sm:w-1/3 px-4 flex flex-col items-center mb-8 sm:mb-0">
              <img
                src="\public\media\images\pricingEquity.svg"
                alt=""
                className="w-[60%] sm:w-[80%] p-3"
              />
              <h4 className="text-lg sm:text-2xl font-medium text-gray-700 pb-3">
                Free equity delivery
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
            <div className="text-center w-full sm:w-1/3 px-4 flex flex-col items-center mb-8 sm:mb-0">
              <img
                src="\public\media\images\intradayTrades.svg"
                alt=""
                className="w-[60%] sm:w-[80%] p-3"
              />
              <h4 className="text-lg sm:text-2xl font-medium text-gray-700 pb-3">
                Intraday and F&O trades
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
            <div className="text-center w-full sm:w-1/3 px-4 flex flex-col items-center">
              <img
                src="\public\media\images\pricingEquity.svg"
                alt=""
                className="w-[60%] sm:w-[80%] p-3"
              />
              <h4 className="text-lg sm:text-2xl font-medium text-gray-700 pb-3">
                Free direct MF
              </h4>
              <p className="text-gray-600 text-xs sm:text-sm">
                All direct mutual fund investments are absolutely free — ₹ 0
                commissions & DP charges.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
