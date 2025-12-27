import React from "react";
import { Link } from "react-router-dom";

const Funds = () => {
  return (
    <>
      <div className="w-full text-right flex items-center justify-end">
        <p className="text-[0.8rem] text-gray-400 mr-2">
          Instant, zero-cost fund transfers with UPI{" "}
        </p>
        <Link className="no-underline px-5 py-2.5 rounded text-white mx-0.5 bg-green-500 hover:bg-green-400">
          Add funds
        </Link>
        <Link className="no-underline px-5 py-2.5 rounded text-white mx-0.5 bg-blue-500 hover:bg-blue-400">
          Withdraw
        </Link>
      </div>

      <div className="w-full flex items-center justify-evenly mt-10">
        <div className="basis-[48%] text-left">
          <span className="flex items-center mb-2">
            <p className="inline-block text-xl font-light">Equity</p>
          </span>

          <div className="border border-gray-200 p-[5%_8%]">
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Available margin</p>
              <p className="text-2xl text-gray-800 ">4,043.10</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Used margin</p>
              <p className="text-2xl text-gray-800">3,757.30</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Available cash</p>
              <p className="text-2xl text-gray-800">4,043.10</p>
            </div>
            <hr className="border-none bg-gray-300 h-px mb-5" />
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Opening Balance</p>
              <p>4,043.10</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Opening Balance</p>
              <p>3736.40</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Payin</p>
              <p>4064.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">SPAN</p>
              <p>0.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Delivery margin</p>
              <p>0.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Exposure</p>
              <p>0.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Options premium</p>
              <p>0.00</p>
            </div>
            <hr className="border-none bg-gray-300 h-px mb-5" />
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">
                Collateral (Liquid funds)
              </p>
              <p>0.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Collateral (Equity)</p>
              <p>0.00</p>
            </div>
            <div className="flex items-center justify-between mb-5">
              <p className="text-base text-gray-400">Total Collateral</p>
              <p>0.00</p>
            </div>
          </div>
        </div>

        <div className="basis-[48%] text-left">
          <div className="p-[2%_8%] text-center">
            <p className="mb-[10%] text-gray-400">
              You don't have a commodity account
            </p>
            <Link className="no-underline px-5 py-2.5 rounded text-white mx-0.5 bg-blue-500 hover:bg-blue-400">
              Open Account
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Funds;
