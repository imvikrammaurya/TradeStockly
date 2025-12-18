import UniverseComponents from "./UniverseComponents";

export default function Universe() {
  return (
    <>
      <div className="container my-10  mx-auto px-4 mt-20">
        <div className="flex flex-col items-center gap-4 justify-center ">
          <h3 className="text-3xl font-semibold text-gray-600">
            The Zerodha Universe
          </h3>
          <p className="text-gray-600 text-xl">
            Extend your trading and investment experience even further with our
            partner platforms
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 mt-8 w-[60%]">
            <UniverseComponents
              imageUrl="\public\media\images\VM_logo.png"
              productDescription="Our asset management venture that is creating simple and transparent index funds to help you save for your goals."
            />

            <UniverseComponents
              imageUrl="\public\media\images\sensibullLogo.svg"
              productDescription="Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more."
            />
            <UniverseComponents
              imageUrl="\public\media\images\tijori.svg"
              productDescription="Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more."
            />
            <UniverseComponents
              imageUrl="\public\media\images\streakLogo.png"
              productDescription="Systematic trading platform that allows you to create and backtest strategies without coding."
            />
            <UniverseComponents
              imageUrl="\public\media\images\smallcaseLogo.png"
              productDescription="Thematic investing platform that helps you invest in diversified baskets of stocks on ETFs."
            />
            <UniverseComponents
              imageUrl="\public\media\images\dittoLogo.png"
              productDescription="Personalized advice on life and health insurance. No spam and no mis-selling."
            />
          </div>
          <button className="my-10 bg-blue-500 text-white font-semibold text-lg px-8 py-3 rounded-sm hover:bg-gray-900 transition-colors duration-300">
            Sign up for free
          </button>
        </div>
      </div>
    </>
  );
}
