"use client"

export const BackgroundPattern = () => {
  return (
    <div className="fixed inset-0 z-[-1] opacity-10 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
          <pattern id="circles" width="100" height="100" patternUnits="userSpaceOnUse">
            <circle cx="50" cy="50" r="20" fill="none" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#grid)" />
        <rect width="100%" height="100%" fill="url(#circles)" />
      </svg>
    </div>
  )
}
