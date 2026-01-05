import React, { useContext } from "react";
import { Route, Routes } from "react-router-dom";

import Apps from "./Apps";
import Funds from "./Funds";
import Holdings from "./Holdings";
import Orders from "./Orders";
import Positions from "./Positions";
import Summary from "./Summary";
import WatchList from "./WatchList";

import GeneralContext, { GeneralContextProvider } from "./GeneralContext";
import BuyActionWindow from "./BuyActionWindow";

const Dashboard = () => {
  return (
    <GeneralContextProvider>
      <DashboardInner />
    </GeneralContextProvider>
  );
};

export default Dashboard;

const DashboardInner = () => {
  const { isBuyWindowOpen, selectedStockUID } = useContext(GeneralContext);

  return (
    <div className="w-full h-[90vh] flex items-start bg-white overflow-hidden">
      <WatchList />

      {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}

      <div className="flex-1 h-full overflow-y-auto p-[3%_2%] bg-white border-l border-gray-200">
        <Routes>
          <Route exact path="/" element={<Summary />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/holdings" element={<Holdings />} />
          <Route path="/positions" element={<Positions />} />
          <Route path="/funds" element={<Funds />} />
          <Route path="/apps" element={<Apps />} />
        </Routes>
      </div>
    </div>
  );
};
