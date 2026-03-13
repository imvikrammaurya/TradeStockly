export default function Team() {
  return (
    <>
      <div className=" w-full ">
        <div className="container mx-auto px-4 sm:px-98">
          <div className="flex flex-col sm:flex-row items-center content-center mt-10 sm:mt-20">
            <div className="w-full sm:w-1/3 flex flex-col items-center">
              <img
                src=".\public\media\images\s.png"
                alt=""
                className="rounded-full grayscale size-32 sm:size-50 mb-5"
              />
              <p>Nithin Kamath</p>
              <p className="text-[70%] mt-3">Founder, CEO</p>
            </div>
            <div className="w-full sm:w-2/3 p-4 sm:p-10">
              <h4 className="mb-8 sm:mb-15 font-semibold text-2xl sm:text-3xl">
                People
              </h4>
              <p className="mb-5">
                Nithin bootstrapped and founded Zerodha in 2010 to overcome the
                hurdles he faced during his decade long stint as a trader.
                Today, Zerodha has changed the landscape of the Indian broking
                industry.
              </p>
              <p className="mb-5">
                He is a member of the SEBI Secondary Market Advisory Committee
                (SMAC) and the Market Data Advisory Committee (MDAC).
              </p>
              <p className="mb-5">Playing basketball is his zen.</p>
              <p className="mb-5">
                Connect on{" "}
                <a href="" className="text-blue-600">
                  Homepage
                </a>{" "}
                /{" "}
                <a href="" className="text-blue-600">
                  TradingQnA
                </a>{" "}
                /{" "}
                <a href="" className="text-blue-600">
                  Twitter
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
