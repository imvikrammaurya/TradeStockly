import React, { useState } from "react";
import { Tooltip, Grow } from "@mui/icons-material";
import { watchlist } from "../data/data";
const WatchList = () => {
  return (
    <div className="basis-[32%] h-full overflow-y-auto relative border-r border-gray-200 shadow-md">
      <div className="flex items-center justify-between relative border-b border-gray-200">
        <input
          type="text"
          name="search"
          id="search"
          placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
          className="w-full h-14 p-4 text-sm text-gray-700 outline-none"
        />
        <span className="absolute right-5 text-sm text-gray-400">
          {" "}
          {watchlist.length}
        </span>
      </div>

      <ul className="list-none m-0 p-0 pb-[12%]">
        {watchlist.map((stock, index) => (
          <p>{stock.name}</p>
        ))}
      </ul>
    </div>
  );
};

export default WatchList;
