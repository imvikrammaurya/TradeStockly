import React, { useState } from "react";

export default function Ticket() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleSection = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const supportTopics = [
    {
      icon: "fa-circle-plus",
      title: "Account Opening",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      icon: "fa-user",
      title: "Your Zerodha Account",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      icon: "fa-chart-line",
      title: "Kite",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      icon: "fa-indian-rupee-sign",
      title: "Funds",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      icon: "fa-terminal",
      title: "Console",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      icon: "fa-coins",
      title: "Coin",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  return (
    <div className="container mx-auto px-4 my-20">
      <div className="mx-70">
        {/* --- HEADER --- */}
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-4xl text-gray-700 font-semibold ">
            Support Portal
          </h2>
          <button className="bg-[#387ED1] border rounded-[5px] p-2 text-xl text-white font-medium">
            Track tickets
          </button>
        </div>

        {/* --- SEARCH BAR --- */}
        <div className="relative mb-14 border-b border-gray-200 pb-10">
          <h3 className="text-xl text-gray-800 font-normal mb-6"></h3>
          <div className="relative">
            <input
              type="text"
              placeholder="Eg: How do I activate F&O, why is my order rejected ..."
              className="w-full py-4 pl-14 pr-4 border border-gray-300 rounded-sm focus:outline-none focus:border-blue-500 shadow-sm text-gray-600"
            />
            <i className="fa-solid fa-magnifying-glass absolute left-5 top-1/2 -translate-y-1/2 text-gray-400"></i>
          </div>
        </div>

        {/* --- MAIN CONTENT GRID --- */}
        <div className="flex flex-row gap-12">
          {/* LEFT COLUMN: Accordion Menu */}
          <div className="w-2/3 flex flex-col gap-4">
            {supportTopics.map((topic, index) => {
              const isOpen = openIndex === index;

              return (
                <div key={index} className="border border-gray-200 rounded-sm">
                  {/* The Clickable Header */}
                  <div
                    onClick={() => toggleSection(index)}
                    className="flex items-center justify-between p-6 cursor-pointer hover:bg-gray-50 transition-colors bg-white"
                  >
                    <div className="flex items-center gap-4">
                      {/* CHANGED: text-gray-500 -> text-blue-600 */}
                      <i
                        className={`fa-solid ${topic.icon} text-blue-600 text-lg`}
                      ></i>

                      <span className="text-gray-800 text-base font-normal">
                        {topic.title}
                      </span>
                    </div>
                    {/* Arrow / Chevron */}
                    <i
                      className={`fa-solid fa-chevron-down text-gray-400 text-sm transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    ></i>
                  </div>

                  {/* The Expandable Content */}
                  {isOpen && (
                    <div className="px-6 pb-6 pt-2 bg-white border-t border-gray-100">
                      <ul className="flex flex-col gap-3 ml-8 list-none">
                        {topic.links.map((link, i) => (
                          <li key={i}>
                            <a
                              href="#"
                              className="text-blue-600 hover:text-gray-900 text-sm transition-colors"
                            >
                              {link}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          {/* RIGHT COLUMN: Featured & Quick Links */}
          <div className="w-1/3 flex flex-col gap-8">
            {/* Featured Box (Orange bg) */}
            <div className="bg-orange-50 border-l-4 border-orange-400 p-4">
              <h4 className="text-lg font-medium text-gray-800 mb-4 flex items-center gap-2">
                <i className="fa-solid fa-bullhorn"></i> Featured
              </h4>
              <ul className="list-disc ml-5 text-blue-600 space-y-3 underline text-sm">
                <li>
                  <a href="#">
                    Latest Intraday leverages and Square-off timings
                  </a>
                </li>
                <li>
                  <a href="#">Surveillance measure on scrips - December 2025</a>
                </li>
              </ul>
            </div>

            {/* Quick Links Box - Table Style */}
            <div className=" border border-gray-200 rounded-sm overflow-hidden">
              {/* Table Header */}
              <div className="bg-gray-50 px-6 py-4 border-b border-gray-200">
                <h4 className="text-lg font-medium text-gray-800">
                  Quick links
                </h4>
              </div>

              {/* Table Body (List) */}
              <ul className="flex flex-col bg-white">
                <li>
                  <a
                    href="#"
                    className="block px-6 py-4 text-blue-600 hover:bg-gray-50 hover:underline text-sm border-b border-gray-200"
                  >
                    1. Track account opening
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-4 text-blue-600 hover:bg-gray-50 hover:underline text-sm border-b border-gray-200"
                  >
                    2. Track segment activation
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-4 text-blue-600 hover:bg-gray-50 hover:underline text-sm border-b border-gray-200"
                  >
                    3. Intraday margins
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="block px-6 py-4 text-blue-600 hover:bg-gray-50 hover:underline text-sm border-b border-gray-200"
                  >
                    4. Kite user manual
                  </a>
                </li>
                <li>
                  {/* Last item has no border-bottom */}
                  <a
                    href="#"
                    className="block px-6 py-4 text-blue-600 hover:bg-gray-50 hover:underline text-sm"
                  >
                    5. Learn how to create a ticket
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
