export default function Hero() {
  return (
    <>
      <div className="container mt-24 mx-auto">
        <div className="flex flex-col items-center">
          <img
            src="media/images/homeHero.png"
            className="mb-12 w-[75%]"
            alt=""
          />
          <h3 className="mt-12 font-semibold text-4xl mb-4">
            Invest in everything
          </h3>
          <p className="mb-4">
            Online platform to invest in stocks, derivatives, mutual funds, and
            more
          </p>
          <button className="cursor-pointer mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-16 rounded mb-12">
            Signup Now
          </button>
        </div>
      </div>
    </>
  );
}
