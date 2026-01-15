import { useMemo } from 'react'
import { buildServiceImageMap } from '../utils/serviceImages'

/**
 * Reusable Core Service Card component
 * Displays a service card with gallery indicator if images are available
 */
const CoreServiceCard = ({ service, onClick, className = '' }) => {
  const serviceImages = useMemo(() => buildServiceImageMap(), [])
  const hasImages = serviceImages[service.key] && serviceImages[service.key].length > 0

  return (
    <div
      className={`bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow p-5 sm:p-6 md:p-7 cursor-pointer group relative ${className}`}
      onClick={() => onClick && onClick(service.key)}
    >
      {/* Gallery Indicator Badge - Top Right */}
      {hasImages && (
        <div className="absolute top-3 right-3 sm:top-4 sm:right-4 z-10">
          <div className="bg-primary-600 text-white px-2.5 py-1.5 rounded-md shadow-md flex items-center gap-1.5 text-xs font-semibold">
            <svg
              className="w-3.5 h-3.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
            <span>Gallery</span>
          </div>
        </div>
      )}

      {/* Icon */}
      <div className="bg-primary-100 text-primary-600 w-14 h-14 sm:w-16 sm:h-16 rounded-lg flex items-center justify-center mb-4 sm:mb-5">
        {service.icon}
      </div>

      {/* Title */}
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-3 sm:mb-4 leading-tight pr-16">
        {service.title}
      </h2>

      {/* Description */}
      <p className="text-gray-600 text-sm sm:text-base leading-relaxed">{service.description}</p>
    </div>
  )
}

export default CoreServiceCard











