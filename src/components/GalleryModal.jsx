import { useState, useEffect } from 'react'
import ImageLightbox from './ImageLightbox'

/**
 * Gallery Modal Component
 * Displays all images for a service in a grid, with lightbox support
 */
const GalleryModal = ({ serviceTitle, images, onClose }) => {
  const [lightboxIndex, setLightboxIndex] = useState(null)

  // Close on Escape key and prevent body scroll when modal is open
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape' && lightboxIndex === null) {
        onClose()
      }
    }

    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [lightboxIndex, onClose])

  const handleImageClick = (index) => {
    setLightboxIndex(index)
  }

  const handleCloseLightbox = () => {
    setLightboxIndex(null)
  }

  const handleNextImage = () => {
    if (lightboxIndex < images.length - 1) {
      setLightboxIndex(lightboxIndex + 1)
    }
  }

  const handlePreviousImage = () => {
    if (lightboxIndex > 0) {
      setLightboxIndex(lightboxIndex - 1)
    }
  }

  const safeImages = Array.isArray(images) ? images : []

  return (
    <>
      {/* Gallery Modal */}
      <div
        className="fixed inset-0 z-40 flex items-center justify-center"
        aria-modal="true"
        role="dialog"
      >
        {/* Dark overlay */}
        <button
          type="button"
          className="absolute inset-0 bg-black/70 backdrop-blur-sm"
          onClick={onClose}
          aria-label="Close gallery"
        />

        {/* Modal content */}
        <div className="relative z-50 max-w-6xl w-full max-h-[90vh] mx-4 bg-white rounded-xl shadow-2xl border border-gray-200 overflow-hidden flex flex-col">
          {/* Header */}
          <div className="flex items-center justify-between px-5 sm:px-6 py-4 border-b border-gray-200 bg-gray-50">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-gray-900">
                {serviceTitle || 'Service Gallery'}
              </h3>
              <p className="mt-1 text-xs sm:text-sm text-gray-500">
                {safeImages.length} image{safeImages.length === 1 ? '' : 's'} in this gallery
              </p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="inline-flex items-center justify-center w-9 h-9 rounded-full border border-gray-300 bg-white text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 transition-colors"
              aria-label="Close"
            >
              <span className="text-lg leading-none">&times;</span>
            </button>
          </div>

          {/* Body - Image Grid */}
          <div className="flex-1 overflow-auto p-4 sm:p-5 md:p-6 bg-gray-50">
            {safeImages.length === 0 ? (
              <div className="flex items-center justify-center min-h-[260px]">
                <div className="text-center max-w-md">
                  <div className="mx-auto mb-3 w-12 h-12 rounded-full bg-white border border-gray-200 flex items-center justify-center text-gray-500">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M3 7h2l2-2h10l2 2h2v12a2 2 0 01-2 2H5a2 2 0 01-2-2V7z"
                      />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 13a3 3 0 100-6 3 3 0 000 6z" />
                    </svg>
                  </div>
                  <p className="text-gray-700 font-semibold">No images in this gallery yet</p>
                  <p className="text-gray-500 text-sm mt-1">
                    Images will appear automatically as soon as they are added to the project folder.
                  </p>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-4">
                {safeImages.map((src, idx) => (
                  <figure
                    key={idx}
                    className="relative overflow-hidden rounded-lg bg-gray-100 shadow-sm border border-gray-200 cursor-pointer group hover:shadow-md transition-shadow"
                    onClick={() => handleImageClick(idx)}
                  >
                    <img
                      src={src}
                      alt={`${serviceTitle || 'Gallery'} - Image ${idx + 1}`}
                      className="w-full h-32 sm:h-36 md:h-40 object-cover transition-transform duration-300 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors flex items-center justify-center">
                      <svg
                        className="w-8 h-8 text-white opacity-0 group-hover:opacity-100 transition-opacity"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v6m3-3H7"
                        />
                      </svg>
                    </div>
                  </figure>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Image Lightbox */}
      {lightboxIndex !== null && safeImages[lightboxIndex] && (
        <ImageLightbox
          imageSrc={safeImages[lightboxIndex]}
          imageAlt={`${serviceTitle || 'Gallery'} - Image ${lightboxIndex + 1}`}
          onClose={handleCloseLightbox}
          onNext={handleNextImage}
          onPrevious={handlePreviousImage}
          hasNext={lightboxIndex < safeImages.length - 1}
          hasPrevious={lightboxIndex > 0}
        />
      )}
    </>
  )
}

export default GalleryModal

