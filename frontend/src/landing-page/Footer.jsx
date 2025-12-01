export default function Footer() {
  const COMPANY = [
    "Company",
    "About",
    "Products",
    "Pricing",
    "Referral programme",
    "Careers",
    "TradeStockly.tech",
    "Press & media",
    "TradeStockly cares [CSR]",
  ];
  const SUPPORT = [
    "Support",
    "Contact",
    "Z-Connect blog",
    "List of charges",
    "Downloads & resources",
  ];
  const ACCOUNT = [
    "Account",
    "Open an account",
    "Fund transfer",
    "60 day challenge",
  ];

  const FLINKS = [
    "NSE",
    "BSE",
    "mcx",
    "Terms & Conditions",
    "Policies & procedures",
    "Privacy policy",
    "Disclosure",
    "For investor's attention",
  ];

  // Helper function to keep code clean and reusable
  const renderListItems = (items) => {
    return items.map((route, i) => (
      <li
        key={route}
        className={
          i === 0
            ? "text-xl font-semibold text-black mb-4 mt-2" // Index 0 styles
            : "text-sm text-gray-600 mb-2 hover:text-black cursor-pointer" // Normal item styles
        }
      >
        {route}
      </li>
    ));
  };

  return (
    <>
      <div className="container mt-20  mx-auto px-4">
        <div className="grid grid-cols-4 gap-12 justify-center mb-10">
          <ul className="mt-6 text-sm text-gray-600 mb-2">
            {/* 1st list item */}
            <li>
              <img
                src="public\media\images\vikrammaurya_logo.png"
                className="w-[80%] mb-7"
                alt=""
              />
              <p className="mb-2">
                © 2010 - 2024, Not TradeStockly Broking Ltd.
              </p>
              <p className="mb-7">All rights reserved.</p>
              <div className="">
                <i class="fa-brands fa-x-twitter text-3xl mr-2 mb-5"></i>
                <i class="fa-brands fa-square-facebook text-3xl mr-2 mb-5"></i>
                <i class="fa-brands fa-instagram text-3xl mr-2 mb-5"></i>
                <i class="fa-brands fa-square-linkedin text-3xl mr-2 mb-5"></i>
                <i class="fa-brands fa-telegram text-3xl mr-2 mb-5"></i>
              </div>
            </li>
          </ul>
          {/* 2nd list item */}
          <ul>{renderListItems(COMPANY)}</ul>
          {/* 3rd list item */}
          <ul>{renderListItems(SUPPORT)}</ul>
          {/* 4th list item */}
          <ul>{renderListItems(ACCOUNT)}</ul>
        </div>
        <div className="flex flex-col item text-xs text-gray-400 mb-2">
          <p>
            TradeStockly Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
            Registration no.: INZ0002343433431633 CDSL/NSDL: Depository services
            through TradeStockly Broking Ltd. – SEBI Registration no.:
            IN-DP-4341-20149 Registered Address: TradeStockly Broking Ltd.,
            #1534/1544, 4th Cross, Dollars Colony, Opp. Clarence Public School,
            J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any
            complaints pertaining to securities broking please write to{" "}
            <a href="" className="text-blue-400">
              complaints@TradeStockly.com
            </a>
            , for DP related to{" "}
            <a href="" className="text-blue-400">
              dp@TradeStockly.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <br />
          <p>
            Procedure to file a complaint on{" "}
            <a href="" className="text-blue-400">
              SEBI SCORES:
            </a>{" "}
            SEBI SCORES: Register on SCORES portal. Mandatory details for filing
            complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID.
            Benefits: Effective Communication, Speedy redressal of the
            grievances
          </p>
          <br />
          <p>
            {" "}
            <a href="" className="text-blue-400">
              Smart Online Dispute Resolution | Grievances Redressal Mechanism
            </a>{" "}
          </p>
          <br />
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <br />
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <br />
          <p>
            India's largest broker based on networth as per NSE.{" "}
            <a href="" className="text-blue-400">
              NSE broker factsheet
            </a>{" "}
          </p>
          <br />
          <p>
            "Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual Fund etc.), you need not undergo the same
            process again when you approach another intermediary." Dear
            Investor, if you are subscribing to an IPO, there is no need to
            issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of non allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of TradeStockly and offering such services,
            please{" "}
            <a href="" className="text-blue-400">
              create a ticket here
            </a>{" "}
            .
          </p>
          <br />
          <p>
            *Customers availing insurance advisory services offered by Ditto
            (Tacterial Consulting Private Limited | IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.
          </p>
          <br />
          <p className="text-center">
            <ul className="flex flex-row font-semibold justify-center">
              {FLINKS.map((routes, i) => {
                return (
                  <li className="m-4" key={routes}>
                    {routes}
                  </li>
                );
              })}
            </ul>
          </p>
          <p className="text-center">Investor charter</p>
        </div>
      </div>
    </>
  );
}
