import React from "react";

const Summary = () => {
  return (
    <>
      <div className="flex items-center mb-5">
        <h6 className="text-2xl font-normal text-gray-700">Hi, User!</h6>
        <hr className="border-none bg-gray-300 h-px my-5" />
      </div>

      <div className="pb-5 border-b border-gray-200 mb-5">
        <span className="flex items-center mb-2">
          <p className="inline-block text-xl font-light">Equity</p>
        </span>

        <div className="w-1/2 flex items-center justify-between">
          <div className="basis-1/2">
            <h3 className="text-4xl font-light text-gray-700">3.74k</h3>
            <p className="text-xs text-gray-400">Margin available</p>
          </div>
          <hr className="border-l border-gray-200 h-[70px]" />

          <div className="basis-1/2 pl-5">
            <p className="text-xs text-gray-400 mb-2.5 whitespace-nowrap">
              Margins used <span className="inline ml-2 text-sm text-gray-600">0</span>{" "}
            </p>
            <p className="text-xs text-gray-400 mb-2.5 whitespace-nowrap">
              Opening balance <span className="inline ml-2 text-sm text-gray-600">3.74k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="border-none bg-gray-300 h-px mt-5" />
      </div>

      <div className="pb-5 border-b border-gray-200 mb-5">
        <span className="flex items-center mb-2">
          <p className="inline-block text-xl font-light">Holdings (13)</p>
        </span>

        <div className="w-1/2 flex items-center justify-between">
          <div className="basis-1/2">
            <h3 className="text-4xl font-light text-green-500">
              1.55k <small className="text-xs text-green-500">+5.20%</small>{" "}
            </h3>
            <p className="text-xs text-gray-400">P&L</p>
          </div>
          <hr className="border-l border-gray-200 h-[70px]" />

          <div className="basis-1/2 pl-5">
            <p className="text-xs text-gray-400 mb-2.5 whitespace-nowrap">
              Current Value <span className="inline ml-2 text-sm text-gray-600">31.43k</span>{" "}
            </p>
            <p className="text-xs text-gray-400 mb-2.5 whitespace-nowrap">
              Investment <span className="inline ml-2 text-sm text-gray-600">29.88k</span>{" "}
            </p>
          </div>
        </div>
        <hr className="border-none bg-gray-300 h-px mt-5" />
      </div>
    </>
  );
};

export default Summary;
