const LogoGrid = ({ title, images = [] }) => {
  return (
    <div>
      <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-6 leading-tight">{title}</h3>

      {images.length === 0 ? (
        <div className="bg-gray-50 border border-gray-200 rounded-lg p-6 text-gray-600">
          Logos will appear automatically when images are added to this folder.
        </div>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 sm:gap-5">
          {images.map((src, idx) => (
            <div
              key={`${title}-${idx}`}
              className="bg-white border border-gray-200 rounded-lg p-4 flex items-center justify-center shadow-sm hover:shadow-md transition-shadow"
            >
              <img
                src={src}
                alt={`${title} Logo ${idx + 1}`}
                className="max-h-12 w-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default LogoGrid

