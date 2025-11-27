export default function Pricing() {
  return (
    <div className=" container  mt-48 w-full mx-auto">
      <div className="flex flex-row">
        <div className="w-[40%] mx-25">
          <h3 className="text-4xl font-medium mb-15">Unbeatable pricing</h3>
          <p className="text-[20px] mb-4">
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>
          <a href="" className="text-blue-400 font-medium text-[1.2rem]">
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="w-[60%] flex flex-row justify-center ml-20 h-60">
          <div className="border border-gray-300 w-1/2 flex flex-col items-center justify-center">
            <p className="font-semibold text-5xl">₹0</p>
            <p className=" mx-20 text-[20px] mb-4 text-center mt-10">
              Free equity delivery and direct mutual funds
            </p>
          </div>
          <div className="border border-gray-300 w-1/2 flex flex-col items-center justify-center">
            <p className="font-semibold text-5xl">₹20</p>
            <p className="text-[20px] mb-4 mt-10">Intraday and F&O</p>
          </div>
        </div>
      </div>
    </div>
  );
}
