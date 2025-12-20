export default function Hero() {
  return (
    <>
      <div className="container my-20  mx-auto px-4">
        <div className="flex flex-col items-center gap-12 justify-center">
          <div>
            <h4 className="text-3xl font-semibold p-5">Charges</h4>
            <p className="text-gray-400">List of all charges and taxes</p>
          </div>
          <div className="flex flex-row">
            <div className="text-center">
              <img src="\public\media\images\pricingEquity.svg" alt="" />
              <h4 className="text-2xl font-semibold text-black pb-3">
                Free equity delivery
              </h4>
              <p className="text-gray-600 text-xl">
                All equity delivery investments (NSE, BSE), are absolutely free
                — ₹ 0 brokerage.
              </p>
            </div>
            <div className="text-center">
              <img src="\public\media\images\intradayTrades.svg" alt="" />
              <h4 className="text-2xl font-semibold text-black pb-3">
                Intraday and F&O trades
              </h4>
              <p className="text-gray-600 text-xl">
                Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
                intraday trades across equity, currency, and commodity trades.
                Flat ₹20 on all option trades.
              </p>
            </div>
            <div className="text-center">
              <img src="\public\media\images\pricingEquity.svg" alt="" />
              <h4 className="text-2xl font-semibold text-black pb-3">
                Free direct MF
              </h4>
              <p className="text-gray-600 text-xl">
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
