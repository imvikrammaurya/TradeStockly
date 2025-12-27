import React from "react";
import { holdings } from "../data/data";
const Holdings = () => {
  return (
    <>
      <h3 className="text-xl text-gray-700 font-light mb-5">
        Holdings ({holdings.length})
      </h3>

      <div className="w-full border-collapse">
        <table className="w-full border-collapse">
          <tr className="border-t border-b border-gray-200">
            <th className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
              Instrument
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Qty.
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Avg. cost
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
              LTP
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Cur. val
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              P&L
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Net chg.
            </th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
              Day chg.
            </th>
          </tr>
          {holdings.map((stock, index) => {
            const curValue = stock.price * stock.qty;
            const isProfit = curValue - stock.avg * stock.qty >= 0.0;
            const profClass = isProfit ? "profit" : "loss";
            const dayClass = stock.isLoss ? "loss" : "profit";
            return (
              <tr key={index} className="border-t border-b border-gray-200">
                <td className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">
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
                <td className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">
                  {curValue.toFixed(2)}
                </td>
                <td
                  className={`text-right px-2.5 py-4 text-gray-500 font-light text-xs ${profClass}`}
                >
                  {(curValue - stock.avg * stock.qty).toFixed(2)}
                </td>
                <td
                  className={`text-right px-2.5 py-4 text-gray-500 font-light text-xs ${profClass}`}
                >
                  {stock.net}
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

      <div className="w-full flex items-center justify-between mt-10">
        <div className="basis-[33%]">
          <h5 className="text-3xl text-gray-700 font-light">
            29,875.<span className="font-light text-sm">55</span>{" "}
          </h5>
          <p className="text-xs text-gray-400 font-light mt-2">
            Total investment
          </p>
        </div>
        <div className="basis-[33%]">
          <h5 className="text-3xl text-gray-700 font-light">
            31,428.<span className="font-light text-sm">95</span>{" "}
          </h5>
          <p className="text-xs text-gray-400 font-light mt-2">Current value</p>
        </div>
        <div className="basis-[33%]">
          <h5 className="text-3xl text-green-500 font-light">
            1,553.40 (+5.20%)
          </h5>
          <p className="text-xs text-gray-400 font-light mt-2">P&L</p>
        </div>
      </div>
    </>
  );
};

export default Holdings;
