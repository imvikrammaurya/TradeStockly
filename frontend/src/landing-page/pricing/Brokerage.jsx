export default function Brokerage() {
  return (
    <div className="container mx-auto px-4 my-20">
      {/* 1. Account Opening Charges */}
      <div className="mx-70 mb-16">
        <h2 className="text-xl text-gray-800 mb-6 font-normal">
          Charges for account opening
        </h2>

        <div className="overflow-x-auto border border-gray-200 rounded-sm">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 font-normal text-gray-500 w-3/4">
                  Type of account
                </th>
                <th className="p-4 font-normal text-gray-500">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">Online account</td>
                <td className="p-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    Free
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">Offline account</td>
                <td className="p-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    Free
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">
                  NRI account (offline only)
                </td>
                <td className="p-4 text-gray-800">₹ 500</td>
              </tr>
              <tr>
                <td className="p-4 text-gray-800">
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td className="p-4 text-gray-800">₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* 2. Demat AMC */}
      <div className="mx-70 mb-16">
        <h2 className="text-xl text-gray-800 mb-6 font-normal">
          Demat AMC (Annual Maintenance Charge)
        </h2>

        <div className="overflow-x-auto border border-gray-200 rounded-sm mb-4">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 font-normal text-gray-500 w-3/4">
                  Value of holdings
                </th>
                <th className="p-4 font-normal text-gray-500">AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">Up to ₹ 4 lakh</td>
                <td className="p-4">
                  <span className="bg-green-500 text-white text-xs font-bold px-2 py-1 rounded uppercase">
                    Free*
                  </span>
                </td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">₹ 4 lakh - ₹ 10 lakh</td>
                <td className="p-4 text-gray-800">
                  ₹ 100 per year, charged quarterly
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-800">Above ₹ 10 lakh</td>
                <td className="p-4 text-gray-800">
                  ₹ 300 per year, charged quarterly
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <p className="text-xs text-gray-500 leading-relaxed">
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account.{" "}
          <a
            href="#"
            className="text-blue-600 hover:text-gray-900 transition-colors"
          >
            To learn more about BSDA, click here.
          </a>
        </p>
      </div>

      {/* 3. Optional Services */}
      <div className="mx-70 ">
        <h2 className="text-xl text-gray-800 mb-6 font-normal">
          Charges for optional value added services
        </h2>

        <div className="overflow-x-auto border border-gray-200 rounded-sm">
          <table className="w-full border-collapse bg-white text-left text-sm text-gray-600">
            <thead>
              <tr className="border-b border-gray-200">
                <th className="p-4 font-normal text-gray-500 w-1/3">Service</th>
                <th className="p-4 font-normal text-gray-500 w-1/3">
                  Billing Frequency
                </th>
                <th className="p-4 font-normal text-gray-500 w-1/3">Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">Tickertape</td>
                <td className="p-4 text-gray-800">Monthly / Annual</td>
                <td className="p-4 text-gray-800">Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr className="border-b border-gray-200">
                <td className="p-4 text-gray-800">Smallcase</td>
                <td className="p-4 text-gray-800">Per transaction</td>
                <td className="p-4 text-gray-800">
                  Buy & Invest More: 100 | SIP: 10
                </td>
              </tr>
              <tr>
                <td className="p-4 text-gray-800">Kite Connect</td>
                <td className="p-4 text-gray-800">Monthly</td>
                <td className="p-4 text-gray-800">
                  Connect: 500 | Personal: Free
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
