export default function Pricing() {
  return (
    <div className=" container  mt-24 sm:mt-48 w-full mx-auto px-4">
      <div className="flex flex-col sm:flex-row">
        <div className="w-full sm:w-[40%] mx-0 sm:mx-25">
          <h3 className="text-3xl sm:text-4xl font-medium mb-8 sm:mb-15">
            Unbeatable pricing
          </h3>
          <p className="text-lg sm:text-[20px] mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a
            href=""
            className="text-blue-400 font-medium text-sm sm:text-[1.2rem]"
          >
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="w-full sm:w-[60%] flex flex-col sm:flex-row justify-center ml-0 sm:ml-20 mt-8 sm:mt-0 h-auto sm:h-60">
          <div className="border border-gray-300 w-full sm:w-1/2 flex flex-col items-center justify-center p-4 sm:p-0">
            <p className="font-semibold text-3xl sm:text-5xl">₹0</p>
            <p className="text-sm sm:text-[20px] mb-4 text-center mt-4 sm:mt-10">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="border border-gray-300 w-full sm:w-1/2 flex flex-col items-center justify-center p-4 sm:p-0">
            <p className="font-semibold text-3xl sm:text-5xl">₹20</p>
            <p className="text-sm sm:text-[20px] mb-4 mt-4 sm:mt-10">
              Intraday and F&O
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
