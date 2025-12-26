import React from "react";

import Menu from "./Menu";

const TopBar = () => {
  return (
    <div className="w-full h-[10vh] flex items-center shadow-md z-[9]">
      <div className="basis-[32%] h-full py-2.5 px-5 border-r border-gray-200 flex items-center justify-around box-border">
        <div className="basis-[40%] flex items-center justify-evenly -z-[2]">
          <p className="text-[0.8rem] font-medium uppercase text-gray-600 whitespace-nowrap hover:cursor-pointer">NIFTY 50</p>
          <p className="text-[0.8rem] font-medium text-red-500">{100.2} </p>
          <p className="text-[0.8rem] font-normal text-gray-400"> </p>
        </div>
        <div className="basis-[40%] flex items-center justify-evenly">
          <p className="text-[0.8rem] font-medium uppercase text-gray-600 whitespace-nowrap hover:cursor-pointer">SENSEX</p>
          <p className="text-[0.8rem] font-medium text-red-500">{100.2}</p>
          <p className="text-[0.8rem] font-normal text-gray-400"></p>
        </div>
      </div>

      <Menu />
    </div>
  );
};

export default TopBar;
