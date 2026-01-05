import React, { useState, useEffect } from "react";

import axios from "axios";

import { positions } from "../data/data";

const Positions = () => {
  const [allPositions, setAllPositions] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3002/allPositions").then((res) => {
      console.log(res.data);
      setAllPositions(res.data);
    });
  }, []);

  return (
    <>
      <h3 className="text-xl text-gray-700 font-light mb-5">
        Positions ({allPositions.length})
      </h3>

      <div className="w-full border-collapse">
        <table className="w-full border-collapse">
          <tr className="border-t border-b border-gray-200">
            <th className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
              Product
            </th>
            <th className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
              Instrument
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Qty.
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Avg.
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              LTP
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              P&L
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Chg.
            </th>
          </tr>
          {allPositions.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index} className="border-t border-b border-gray-200">
                <td className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
                  {stock.product}
                </td>
                <td className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
                  {stock.name}
                </td>
                <td className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
                  {stock.qty}
                </td>
                <td className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
                  {stock.avg.toFixed(2)}
                </td>
                <td className="text-right px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
                  {stock.price.toFixed(2)}
                </td>

                <td
                  className={`text-right px-2.5 py-4 text-gray-500 font-light text-xs ${profClass}`}
                >
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>

                <td
                  className={`text-right px-2.5 py-4 text-gray-500 font-light text-xs ${dayClass}`}
                >
                  {stock.day}
                </td>
              </tr>
            );
          })}
        </table>
      </div>
    </>
  );
};

export default Positions;
