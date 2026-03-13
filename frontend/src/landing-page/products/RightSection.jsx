export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mb-10 sm:mb-20 mx-auto px-4 sm:px-24">
        <div className="flex flex-col sm:flex-row items-center  justify-end">
          <div className="w-full sm:w-[35%] flex flex-col justify-center items-start sm:items-end mt-5 sm:mt-10">
            <div className="text-left w-full sm:w-[90%]">
              <h3 className="font-semibold text-2xl sm:text-3xl mb-4 sm:mb-8">
                {productName}
              </h3>

              <p className="text-sm sm:text-[110%] mb-4 w-full sm:w-5/6 text-gray-600">
                {productDescription}
              </p>

              <a
                href={learnMore}
                className="text-sm sm:text-[110%] text-blue-600"
              >
                Learn more →
              </a>
            </div>
          </div>

          <div className="w-full sm:w-[55%] flex items-center justify-center sm:justify-end mt-5 sm:mt-0">
            <img src={imageURL} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
