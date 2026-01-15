import { useMemo, useState } from 'react'

const ProjectDescription = ({ description }) => {
  const [expanded, setExpanded] = useState(false)

  const hasContent = useMemo(() => typeof description === 'string' && description.trim().length > 0, [description])

  if (!hasContent) return null

  return (
    <div>
      <div
        className={`text-gray-600 leading-relaxed whitespace-pre-line text-sm ${
          expanded ? '' : 'line-clamp-4'
        }`}
      >
        {description}
      </div>

      <button
        type="button"
        onClick={() => setExpanded((v) => !v)}
        className="mt-3 text-primary-700 font-semibold text-sm hover:text-primary-800 transition-colors cursor-pointer"
      >
        {expanded ? 'See less' : 'See more…'}
      </button>
    </div>
  )
}

export default ProjectDescription

