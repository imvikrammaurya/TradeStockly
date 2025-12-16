export default function Hero() {
  return (
    <>
      <div className=" w-full ">
        <div className="container mx-auto px-98">
          <div className="flex flex-col items-center content-center mt-30">
            <div className="text-center  mx-10 my-15">
              <p className="text-2xl font-[510] px-10">
                We pioneered the discount broking model in India. Now, we are
                breaking ground with our technology.
              </p>
            </div>
            <div className="h-px w-full bg-gray-300 my-6 mb-20"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="mb-4">
                  We kick-started operations on the 15th of August, 2010 with
                  the goal of breaking all barriers that traders and investors
                  face in India in terms of cost, support, and technology. We
                  named the company Zerodha, a combination of Zero and "Rodha",
                  the Sanskrit word for barrier.
                </p>
                <p className="mb-4">
                  Today, our disruptive pricing models and in-house technology
                  have made us the biggest stock broker in India.
                </p>
                <p className="mb-4">
                  Over 1.6+ crore clients place billions of orders every year
                  through our powerful ecosystem of investment platforms,
                  contributing over 15% of all Indian retail trading volumes.
                </p>
              </div>
              <div>
                <p className="mb-4">
                  In addition, we run a number of popular open online
                  educational and community initiatives to empower retail
                  traders and investors.
                </p>
                <p className="mb-4">
                  Rainmatter, our fintech fund and incubator, has invested in
                  several fintech startups with the goal of growing the Indian
                  capital markets.
                </p>
                <p className="mb-4">
                  And yet, we are always up to something new every day. Catch up
                  on the latest updates on our blog or see what the media is
                  saying about us or learn more about our business and product
                  philosophies.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
