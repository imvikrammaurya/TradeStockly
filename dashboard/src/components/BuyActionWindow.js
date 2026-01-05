import React, { useState, useContext } from "react";
import axios from "axios";
import GeneralContext from "./GeneralContext";

const BuyActionWindow = ({ uid }) => {
  const [stockQuantity, setStockQuantity] = useState(1);
  const [stockPrice, setStockPrice] = useState(0.0);

  const { closeBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    axios.post("http://localhost:3002/newOrder", {
      name: uid,
      qty: stockQuantity,
      price: stockPrice,
      mode: "BUY",
    });
    closeBuyWindow();
  };

  const handleCancelClick = () => {
    closeBuyWindow();
  };

  return (
    <div className="relative flex-grow-0 w-[30%] h-min max-h-[600px] m-4 bg-white rounded shadow-md border border-gray-200">
      {/* Header */}
      <div className="bg-blue-500 p-4 text-white rounded-t">
        <h3 className="font-medium text-sm flex items-end gap-2">
          {uid} <span className="text-[10px] font-light mb-0.5">NSE</span>
          <span className="text-[10px] font-light ml-auto">₹ {stockPrice}</span>
        </h3>
      </div>

      {/* Body */}
      <div className="p-6 bg-white">
        <div className="flex gap-4 mb-4 border-b border-gray-100 pb-2">
          <button className="text-blue-500 text-xs font-medium border-b-2 border-blue-500 pb-2">
            Regular
          </button>
          <button className="text-gray-400 text-xs font-medium pb-2 hover:text-gray-600">
            Cover
          </button>
          <button className="text-gray-400 text-xs font-medium pb-2 hover:text-gray-600">
            AMO
          </button>
        </div>

        <div className="flex items-center gap-4">
          <fieldset className="border border-gray-300 p-2 rounded w-1/2 group focus-within:border-gray-800">
            <legend className="text-[10px] text-gray-500 px-1 ml-2">
              Qty.
            </legend>
            <input
              type="number"
              className="w-full outline-none text-lg px-2 text-gray-700 font-normal"
              onChange={(e) => setStockQuantity(e.target.value)}
              value={stockQuantity}
              min="1"
            />
          </fieldset>

          <fieldset className="border border-gray-300 p-2 rounded w-1/2 group focus-within:border-gray-800">
            <legend className="text-[10px] text-gray-500 px-1 ml-2">
              Price
            </legend>
            <input
              type="number"
              className="w-full outline-none text-lg px-2 text-gray-700 font-normal"
              onChange={(e) => setStockPrice(e.target.value)}
              value={stockPrice}
              step="0.05"
            />
          </fieldset>
        </div>
      </div>

      {/* Footer */}
      <div className="px-6 pb-6 bg-white flex items-center justify-between mt-4">
        <div className="flex gap-2">
          <button
            className="bg-blue-600 text-white py-2 px-6 rounded text-sm font-medium hover:bg-blue-700 transition-colors"
            onClick={handleBuyClick}
          >
            Buy
          </button>
          <button
            className="bg-gray-100 text-gray-600 py-2 px-6 rounded text-sm font-medium hover:bg-gray-200 transition-colors border border-gray-200"
            onClick={handleCancelClick}
          >
            Cancel
          </button>
        </div>
      </div>
    </div>
  );
};

export default BuyActionWindow;
