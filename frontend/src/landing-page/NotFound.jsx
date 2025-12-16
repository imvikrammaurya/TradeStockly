export default function NotFound() {
  return (
    <>
      <div className="container mt-24 mx-auto">
        <div className="flex flex-col items-center">
          <h1 className="mt-12 font-semibold text-4xl mb-4">404 Not Found</h1>
          <p className="mb-4">
            Sorry, the page you are looking for does not exist.
          </p>
          <button className="cursor-pointer mt-4 bg-blue-500 hover:bg-blue-700 text-white py-2 px-16 rounded mb-12">
            Go Home
          </button>
        </div>
      </div>
    </>
  );
}
