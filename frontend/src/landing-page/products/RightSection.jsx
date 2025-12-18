export default function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <>
      <div className="container mb-20 mx-auto px-24">
        <div className="flex flex-row items-center  justify-end">
          <div className="w-[35%] flex flex-col justify-center items-end mt-10">
            <div className="text-left w-[90%]">
              <h3 className="font-semibold text-3xl mb-8">{productName}</h3>

              <p className="text-[110%] mb-4 w-5/6 text-gray-600">
                {productDescription}
              </p>

              <a href={learnMore} className="text-[110%] text-blue-600">
                Learn more →
              </a>
            </div>
          </div>

          <div className="w-[55%] flex items-center justify-end">
            <img src={imageURL} alt="" />
          </div>
        </div>
      </div>
    </>
  );
}
