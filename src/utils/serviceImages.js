// Automatically import all images from the services folders using Vite's import.meta.glob()
const serviceImageModules = import.meta.glob('../assets/services/*/*.{jpg,jpeg,png,webp,avif}', {
  eager: true,
  import: 'default',
})

/**
 * Builds a map of service keys to their image arrays
 * @returns {Object} Map of serviceKey -> array of image URLs
 */
export const buildServiceImageMap = () => {
  const map = {}

  Object.entries(serviceImageModules).forEach(([path, src]) => {
    // path example: '../assets/services/csr/csr1.jpg'
    const match = path.match(/services\/([^/]+)\//)
    if (!match) return

    const serviceKey = match[1] // csr, roads, water, stp, interiors, housing
    if (!map[serviceKey]) {
      map[serviceKey] = []
    }

    map[serviceKey].push(src)
  })

  // Sort images for stable order
  Object.keys(map).forEach((key) => {
    map[key] = map[key].sort()
  })

  return map
}











