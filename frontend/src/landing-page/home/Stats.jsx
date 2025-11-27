export default function Stats() {
  return (
    <div className=" container  mt-48 w-full mx-auto">
      <div className="flex flex-row">
        <div className="w-[40%] mx-25">
          <h3 className="text-5xl font-medium mb-15">Trust with confidence</h3>

          <h4 className="text-3xl font-medium mt-20">Customer-first always</h4>
          <p className="text-[1.2rem] text-gray-600 mt-2">
            That's why 1.3+ crore customers trust Zerodha with ₹3.5+ lakh crores
            worth of equity investments.
          </p>

          <h4 className="text-3xl font-medium mt-8">No spam or gimmicks</h4>
          <p className="text-[1.2rem] text-gray-600 mt-2">
            No gimmicks, spam, "gamification", or annoying push notifications.
            High quality apps that you use at your pace, the way you like.
          </p>

          <h4 className="text-3xl font-medium mt-8">The Zerodha universe</h4>
          <p className="text-[1.2rem] text-gray-600 mt-2">
            Not just an app, but a whole ecosystem. Our investments in 30+
            fintech startups offer you tailored services specific to your needs.
          </p>

          <h4 className="text-3xl font-medium mt-8">Do better with money</h4>
          <p className="text-[1.2rem] text-gray-600 mt-2">
            With initiatives like Nudge and Kill Switch, we don't just
            facilitate transactions, but actively help you do better with your
            money.
          </p>
        </div>

        <div className="w-[60%] flex flex-col items-center">
          <img
            src="public\media\images\ecosystem.png"
            className="w-[90%] ml-16"
            alt=""
          />
          <div>
            <a
              href=""
              className="text-blue-400 font-medium text-[1.2rem] mx-16"
            >
              Explore our products{" "}
              <i className="fa-solid fa-arrow-right-long"></i>
            </a>
            <a href="" className="text-blue-400 font-medium text-[1.2rem]">
              Try Kite demo <i className="fa-solid fa-arrow-right-long"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
