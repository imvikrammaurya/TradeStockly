export default function UniverseComponents({ imageUrl, productDescription }) {
  return (
    <div className="flex flex-col items-center text-center p-2">
      <img src={imageUrl} alt="" className="h-12 mb-4 w-auto" />
      <p className="text-xs text-gray-600 leading-relaxed">
        {productDescription}
      </p>
    </div>
  );
}
