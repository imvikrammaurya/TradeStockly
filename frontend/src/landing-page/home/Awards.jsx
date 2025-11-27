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
      <div className="flex flex-row items-center gap-12">
        <div className="flex flex-col w-[50%]  mx-25">
          <img src="media/images/largestBroker.svg" alt="" />
        </div>
        <div className="flex flex-col w-[50%] ">
          <h3 className="font-semibold text-4xl mb-4">
            Largest stock broker in India
          </h3>
          <p className="text-[20px] mb-10">
            2+ million Zerodha clients contribute to over 15% of all retail
            order volumes in India daily by trading and investing in:
          </p>

          <ul className="grid grid-cols-2 gap-5 list-disc pl-5 mt-4">
            {Award.map((element, index) => (
              <li key={index} className="">
                <p>{element}</p>
              </li>
            ))}
          </ul>
          <img
            src="public\media\images\pressLogos.png"
            alt=""
            className="mt-10 w-[90%]"
          />
        </div>
      </div>
    </div>
  );
}
