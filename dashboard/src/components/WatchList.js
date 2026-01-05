import React, { useContext } from "react";
import GeneralContext from "./GeneralContext";
import { watchlist } from "../data/data";
import {
  KeyboardArrowDown,
  KeyboardArrowUp,
  BarChart,
  MoreHoriz,
} from "@mui/icons-material";
import { Tooltip } from "@mui/material";

const WatchList = () => {
  return (
    <div className="w-[32%] h-full overflow-y-auto border-r border-gray-200">
      {/* Search Bar */}
      <div className="sticky top-0 bg-white z-10 border-b border-gray-200 flex items-center p-2">
        <input
          type="text"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full p-3 outline-none text-sm text-gray-600"
        />
        <span className="text-gray-400 text-xs pr-3">
          {watchlist.length} / 50
        </span>
      </div>

      {/* List */}
      <ul className="list-none p-0 m-0">
        {watchlist.map((stock, index) => (
          <WatchListItem stock={stock} key={index} />
        ))}
      </ul>
    </div>
  );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
  const textColor = stock.isDown ? "text-red-500" : "text-emerald-500";

  const { openBuyWindow } = useContext(GeneralContext);

  const handleBuyClick = () => {
    openBuyWindow(stock.name);
  };

  return (
    <li className="relative flex items-center justify-between p-4 border-b border-gray-100 hover:bg-gray-50 cursor-pointer group transition-colors duration-200">
      {/* Left Side: Stock Name */}
      <div className={`text-xs lg:text-sm ${textColor} font-medium`}>
        {stock.name}
      </div>

      {/* Right Side: Price Info (Hidden on Hover) */}
      <div className="flex items-center gap-2 group-hover:hidden transition-all duration-200">
        <span className="text-xs text-gray-400">{stock.percent}</span>
        {stock.isDown ? (
          <KeyboardArrowDown className="text-red-500 !text-sm" />
        ) : (
          <KeyboardArrowUp className="text-emerald-500 !text-sm" />
        )}
        <span className="text-sm text-gray-700 font-medium">{stock.price}</span>
      </div>

      {/* Right Side: Action Buttons (Visible ONLY on Hover) */}
      <div className="hidden group-hover:flex items-center gap-2 absolute right-4 top-1/2 -translate-y-1/2">
        <Tooltip title="Buy (B)" placement="top" arrow>
          <button
            onClick={handleBuyClick}
            className="bg-blue-500 hover:bg-blue-600 text-white rounded-[2px] w-8 h-7 flex items-center justify-center text-xs font-medium transition-colors"
          >
            B
          </button>
        </Tooltip>

        <Tooltip title="Sell (S)" placement="top" arrow>
          <button className="bg-orange-500 hover:bg-orange-600 text-white rounded-[2px] w-8 h-7 flex items-center justify-center text-xs font-medium transition-colors">
            S
          </button>
        </Tooltip>

        <Tooltip title="Market Depth" placement="top" arrow>
          <button className="border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-[2px] w-8 h-7 flex items-center justify-center transition-colors">
            <BarChart className="!text-sm" />
          </button>
        </Tooltip>

        <Tooltip title="More" placement="top" arrow>
          <button className="border border-gray-300 text-gray-600 hover:bg-gray-100 rounded-[2px] w-8 h-7 flex items-center justify-center transition-colors">
            <MoreHoriz className="!text-sm" />
          </button>
        </Tooltip>
      </div>
    </li>
  );
};
