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
      <div className="container my-20  mx-auto px-4">
        <div className="flex flex-row items-center gap-12 justify-center ">
          <div className="w-[60%] flex items-center justify-center">
            <img src={imageURL} alt="" />
          </div>
          <div className="w-[35%] pr-12 flex flex-col  ">
            <h3 className="font-semibold text-3xl mb-8">{productName}</h3>
            <p className="text-[110%] mb-4 pr-30">{productDescription}</p>
            <div>
              <a href={tryDemo} className="text-[110%] mr-20 text-blue-600">
                Try demo →
              </a>
              <a href={learnMore} className="text-[110%] text-blue-600">
                Learn more →
              </a>
            </div>
            <div className="flex flex-row mt-5">
              <a href={appStore} className="mr-10">
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
