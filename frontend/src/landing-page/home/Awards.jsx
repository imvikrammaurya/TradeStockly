export default function Awards() {
  const Award = [
    "Futures and Options",
    "Stocks & IPOs",
    "Commodity derivatives",
    "Direct mutual funds",
    "Currency derivatives",
    "Bonds and Gov",
  ];
  return (
    <div className="container my-20  mx-auto px-4">
      <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12">
        <div className="flex flex-col w-full sm:w-[50%]  mx-0 sm:mx-25">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="flex flex-col w-full sm:w-[50%] ">
          <h3 className="font-semibold text-2xl sm:text-4xl mb-4">
            Largest stock broker in India
          </h3>
          <p className="text-lg sm:text-[20px] mb-6 sm:mb-10">
            2+ million TradeStockly clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-5 list-disc pl-5 mt-4">
            {Award.map((element, index) => (
              <li key={index} className="">
                <p>{element}</p>
              </li>
            ))}
          </ul>
          <img
            src="public\media\images\pressLogos.png"
            alt=""
            className="mt-10 w-full sm:w-[90%]"
          />
        </div>
      </div>
    </div>
  );
}
