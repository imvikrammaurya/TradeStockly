import React from "react";

const Positions = () => {
  return (
    <>
      <h3 className="text-xl text-gray-700 font-light mb-5">Positions (2)</h3>

      <div className="w-full border-collapse">
        <table className="w-full border-collapse">
          <tr className="border-t border-b border-gray-200">
            <th className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">Product</th>
            <th className="text-left px-2.5 py-4 text-gray-500 font-light text-xs border-r border-gray-200">Instrument</th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">Qty.</th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">Avg.</th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">LTP</th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">P&L</th>
            <th className="text-right px-2.5 py-4 text-gray-500 font-light text-xs">Chg.</th>
          </tr>
        </table>
      </div>
    </>
  );
};

export default Positions;
