export default function Hero() {
  return (
    <>
      <div className="container my-20  mx-auto px-4">
        <div className="flex flex-row items-center gap-12 justify-center">
          <div className="flex flex-col items-center content-center my-20">
            <h3 className="font-semibold text-3xl mb-4">
              TradeStockly Products
            </h3>
            <p className="text-xl mb-4">
              Sleek, modern, and intuitive trading platforms
            </p>
            <p>
              Check out our{" "}
              <a href="" className="text-blue-600">
                investment offerings →
              </a>
            </p>
          </div>
        </div>
        <div className="h-px w-1/2 bg-gray-200 my-6 mb-20 mx-auto"></div>
      </div>
    </>
  );
}
