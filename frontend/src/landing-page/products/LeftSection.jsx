export default function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <>
      <div className="container my-5 sm:my-10  mx-auto px-4">
        <div className="flex flex-col sm:flex-row items-center gap-8 sm:gap-12 justify-center ">
          <div className="w-full sm:w-[60%] flex items-center justify-center">
            <img src={imageURL} alt="" />
          </div>
          <div className="w-full sm:w-[35%] pr-0 sm:pr-12 flex flex-col  ">
            <h3 className="font-semibold text-2xl sm:text-3xl mb-4 sm:mb-8">
              {productName}
            </h3>
            <p className="text-sm sm:text-[110%] mb-4 pr-0 sm:pr-30 text-gray-600">
              {productDescription}
            </p>
            <div>
              <a
                href={tryDemo}
                className="text-sm sm:text-[110%] mr-10 sm:mr-20 text-blue-600"
              >
                Try demo →
              </a>
              <a
                href={learnMore}
                className="text-sm sm:text-[110%] text-blue-600"
              >
                Learn more →
              </a>
            </div>
            <div className="flex flex-row mt-5">
              <a href={appStore} className="mr-4 sm:mr-10">
                <img src="\public\media\images\googlePlayBadge.svg" alt="" />
              </a>
              <a href={googlePlay}>
                <img src="\public\media\images\appstoreBadge.svg" alt="" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
