import React, { useState } from "react";

export default function Pricing() {
  const [activeTab, setActiveTab] = useState("equity");

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="container mx-auto px-4 my-10">
      <div className="flex flex-col items-center gap-8 justify-center mx-70">
        {/* --- TAB HEADERS --- */}
        <div className="flex gap-12 mb-8 border-b border-gray-200 pb-2 items-center justify-start">
          <h3
            className={`cursor-pointer text-xl font-medium pb-2 transition-all ${
              activeTab === "equity"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick("equity")}
          >
            Equity
          </h3>
          <h3
            className={`cursor-pointer text-xl font-medium pb-2 transition-all ${
              activeTab === "currency"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick("currency")}
          >
            Currency
          </h3>
          <h3
            className={`cursor-pointer text-xl font-medium pb-2 transition-all ${
              activeTab === "commodity"
                ? "text-blue-600 border-b-4 border-blue-600"
                : "text-gray-500 hover:text-blue-600"
            }`}
            onClick={() => handleTabClick("commodity")}
          >
            Commodity
          </h3>
        </div>

        {/* --- TAB CONTENT --- */}

        {/* 1. EQUITY TABLE */}
        {activeTab === "equity" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-left text-sm text-gray-600">
              <thead>
                <tr className="bg-white">
                  <th className="p-4 border border-gray-200 font-normal"></th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Equity delivery
                  </th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Equity intraday
                  </th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    F&O - Futures
                  </th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    F&O - Options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200">Brokerage</td>
                  <td className="p-4 border border-gray-200">Zero Brokerage</td>
                  <td className="p-4 border border-gray-200">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="p-4 border border-gray-200">
                    Flat Rs. 20 per executed order
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">STT/CTT</td>
                  <td className="p-4 border border-gray-200">
                    0.1% on buy & sell
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.025% on the sell side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.02% on the sell side
                  </td>
                  <td className="p-4 border border-gray-200">
                    <ul className="list-disc pl-4">
                      <li>
                        0.125% of the intrinsic value on options that are bought
                        and exercised
                      </li>
                      <li>0.1% on sell side (on premium)</li>
                    </ul>
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">
                    Transaction charges
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.00297%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.00173%
                    <br />
                    BSE: 0
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.03503% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">GST</td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">SEBI charges</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">Stamp charges</td>
                  <td className="p-4 border border-gray-200">
                    0.015% or ₹1500 / crore on buy side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.003% or ₹300 / crore on buy side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.002% or ₹200 / crore on buy side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.003% or ₹300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* 2. CURRENCY TABLE */}
        {activeTab === "currency" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-left text-sm text-gray-600">
              <thead>
                <tr className="bg-white">
                  <th className="p-4 border border-gray-200 font-normal"></th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Currency futures
                  </th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Currency options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200">Brokerage</td>
                  <td className="p-4 border border-gray-200">
                    0.03% or ₹ 20/executed order whichever is lower
                  </td>
                  <td className="p-4 border border-gray-200">
                    ₹ 20/executed order
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">STT/CTT</td>
                  <td className="p-4 border border-gray-200">No STT</td>
                  <td className="p-4 border border-gray-200">No STT</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">
                    Transaction charges
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.00035%
                    <br />
                    BSE: 0.00045%
                  </td>
                  <td className="p-4 border border-gray-200">
                    NSE: 0.0311%
                    <br />
                    BSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">GST</td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">SEBI charges</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">Stamp charges</td>
                  <td className="p-4 border border-gray-200">
                    0.0001% or ₹10 / crore on buy side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.0001% or ₹10 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* 3. COMMODITY TABLE */}
        {activeTab === "commodity" && (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-200 text-left text-sm text-gray-600">
              <thead>
                <tr className="bg-white">
                  <th className="p-4 border border-gray-200 font-normal"></th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Commodity futures
                  </th>
                  <th className="p-4 border border-gray-200 font-medium text-gray-800 text-base">
                    Commodity options
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className="p-4 border border-gray-200">Brokerage</td>
                  <td className="p-4 border border-gray-200">
                    0.03% or Rs. 20/executed order whichever is lower
                  </td>
                  <td className="p-4 border border-gray-200">
                    ₹ 20/executed order
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">STT/CTT</td>
                  <td className="p-4 border border-gray-200">
                    0.01% on sell side (Non-Agri)
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.05% on sell side
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">
                    Transaction charges
                  </td>
                  <td className="p-4 border border-gray-200">
                    MCX: 0.0021%
                    <br />
                    NSE: 0.0001%
                  </td>
                  <td className="p-4 border border-gray-200">
                    MCX: 0.0418%
                    <br />
                    NSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">GST</td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td className="p-4 border border-gray-200">
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">SEBI charges</td>
                  <td className="p-4 border border-gray-200">
                    Agri: ₹1 / crore
                    <br />
                    Non-agri: ₹10 / crore
                  </td>
                  <td className="p-4 border border-gray-200">₹10 / crore</td>
                </tr>
                <tr>
                  <td className="p-4 border border-gray-200">Stamp charges</td>
                  <td className="p-4 border border-gray-200">
                    0.002% or ₹200 / crore on buy side
                  </td>
                  <td className="p-4 border border-gray-200">
                    0.003% or ₹300 / crore on buy side
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        )}

        {/* Bottom Link */}
        <div className="text-center mt-8">
          <a
            href=""
            className="text-xl text-blue-500 hover:text-gray-900 no-underline font-normal"
          >
            Calculate your costs upfront
          </a>
          <span className="text-xl text-gray-900 font-normal">
            {" "}
            using our brokerage calculator
          </span>
        </div>
      </div>
    </div>
  );
}
