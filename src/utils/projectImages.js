// Automatically import all images from the projects folders using Vite's import.meta.glob()
// Supports CER and Residential project images

// Load all project images recursively
const projectImageModules = import.meta.glob('../assets/projects/**/*.{jpg,jpeg,png,webp,avif,heic}', {
  eager: true,
  import: 'default',
})

/**
 * Builds a map of project folder paths to their image arrays
 * @returns {Object} Map of projectPath -> array of image URLs
 */
export const buildProjectImageMap = () => {
  const map = {}

  Object.entries(projectImageModules).forEach(([path, src]) => {
    // Extract the project folder path
    // Examples:
    // '../assets/projects/cer/sg-city-63a/dharampur/image.jpg' -> 'cer/sg-city-63a/dharampur'
    // '../assets/projects/cer/tikkli-gps-primary/image.jpg' -> 'cer/tikkli-gps-primary'
    // '../assets/projects/residential/orchard-avenue-1/image.jpg' -> 'residential/orchard-avenue-1'
    const match = path.match(/projects\/(cer|residential)\/(.+?)\/[^/]+\.(jpg|jpeg|png|webp|avif|heic)$/)
    if (!match) return

    const category = match[1]
    const folderPath = match[2] // Full path like 'sg-city-63a/dharampur' or 'tikkli-gps-primary'
    const projectKey = `${category}/${folderPath}`
    
    if (!map[projectKey]) {
      map[projectKey] = []
    }
    map[projectKey].push(src)
  })

  // Sort images for stable order within each project
  Object.keys(map).forEach((key) => {
    map[key] = map[key].sort()
  })

  return map
}

/**
 * Normalizes a project title to match folder naming conventions
 */
const normalizeProjectName = (title) => {
  if (!title) return ''
  return title
    .toLowerCase()
    .replace(/[^\w\s-]/g, '') // Remove special characters except hyphens
    .replace(/\s+/g, '-') // Replace spaces with hyphens
    .replace(/-+/g, '-') // Replace multiple hyphens with single
    .trim()
}

/**
 * Maps project titles to folder names based on known patterns
 * This handles the mismatch between display titles and folder names
 */
const getProjectFolderMapping = () => {
  return {
    // CER Projects - exact folder matches
    'gps-nurpur-jhamrsa': 'cer/sg-city-63a/nurpur-jhamrsa',
    'gps-dharampur': 'cer/sg-city-63a/dharampur',
    'gps-hasanpur': 'cer/sg-city-63a/hasanpur',
    'gps-mohammad-heri-primary-school': 'cer/millennia-3/mohammad-heri',
    'gps-babupur-primary-school': 'cer/millennia-3/babpur',
    'gms-dharampur-middle-school': 'cer/millennia-3/gms-dharampur',
    'govt-sr-secondary-school-khoh': 'cer/twin-tower-dxp/khoh-school',
    'govt-girls-primary-school-tikkli': 'cer/tikkli-gps-primary',
    'govt-sr-secondary-school-tikkli': 'cer/tikkli-govt-sr-secondary',
    'multiple-csr-school-projects-gurugram': 'cer/tikkli-multiple-csr',
    
    // Residential Projects
    'orchard-avenue-1-sector-93-gurugram': 'residential/orchard-avenue-1',
    'orchard-avenue-2-sector-93-gurugram': 'residential/orchard-avenue-2',
    'roselia-1-sector-95a-gurugram': 'residential/roselia-1',
    'roselia-2-sector-95a-gurugram': 'residential/roselia-2',
  }
}

/**
 * Get images for a specific project based on its title
 * @param {string} projectTitle - The project title to lookup
 * @param {string} category - 'cer' or 'residential' or 'Residential & Infrastructure'
 * @returns {Array} Array of image URLs, or empty array if none found
 */
export const getProjectImages = (projectTitle, category = 'cer') => {
  const projectImageMap = buildProjectImageMap()
  
  if (!projectTitle) return []
  
  // Normalize category
  const normalizedCategory = category.toLowerCase().includes('residential') ? 'residential' : 'cer'
  
  // Normalize project title
  const normalizedTitle = normalizeProjectName(projectTitle)
  
  // Check mapping table first
  const mapping = getProjectFolderMapping()
  const mappedKey = mapping[normalizedTitle]
  if (mappedKey && projectImageMap[mappedKey] && projectImageMap[mappedKey].length > 0) {
    return projectImageMap[mappedKey]
  }
  
  // Try direct match with category prefix
  const directKey = `${normalizedCategory}/${normalizedTitle}`
  if (projectImageMap[directKey] && projectImageMap[directKey].length > 0) {
    return projectImageMap[directKey]
  }
  
  // Try partial matching - extract key words from title
  const searchTerms = normalizedTitle.split('-').filter(term => term.length > 2)
  
  for (const key in projectImageMap) {
    if (!key.startsWith(`${normalizedCategory}/`)) continue
    
    const folderPath = key.replace(`${normalizedCategory}/`, '')
    const folderParts = folderPath.split('/')
    
    // Check if any search term matches folder parts
    const hasMatch = searchTerms.some(term => 
      folderParts.some(part => part.includes(term) || term.includes(part))
    )
    
    if (hasMatch && projectImageMap[key].length > 0) {
      return projectImageMap[key]
    }
  }
  
  return []
}





