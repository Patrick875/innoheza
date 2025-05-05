"use client"

import { motion } from "framer-motion"

export const PulseCircle = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="160" height="160" viewBox="0 0 160 160" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="80"
          cy="80"
          r="60"
          stroke="#10b981"
          strokeWidth="1"
          strokeOpacity="0.3"
          fill="none"
          initial={{ scale: 0.8, opacity: 0.3 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.circle
          cx="80"
          cy="80"
          r="40"
          stroke="#10b981"
          strokeWidth="1"
          strokeOpacity="0.5"
          fill="none"
          initial={{ scale: 0.8, opacity: 0.5 }}
          animate={{
            scale: [0.8, 1.2, 0.8],
            opacity: [0.5, 0.2, 0.5],
          }}
          transition={{
            duration: 4,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  )
}

export const HeartbeatLine = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="300" height="60" viewBox="0 0 300 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0,30 L60,30 L75,10 L90,50 L105,10 L120,50 L135,30 L300,30"
          stroke="#10b981"
          strokeWidth="1.5"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 0.6 }}
          transition={{
            duration: 2.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}

export const DNAHelix = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100" height="300" viewBox="0 0 100 300" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M50,0 C70,25 30,50 50,75 C70,100 30,125 50,150 C70,175 30,200 50,225 C70,250 30,275 50,300"
          stroke="#10b981"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
          }}
        />
        <motion.path
          d="M50,0 C30,25 70,50 50,75 C30,100 70,125 50,150 C30,175 70,200 50,225 C30,250 70,275 50,300"
          stroke="#10b981"
          strokeWidth="1"
          strokeOpacity="0.4"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.circle
            key={`left-${i}`}
            cx="30"
            cy={25 + i * 50}
            r="4"
            fill="#10b981"
            fillOpacity="0.6"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.6 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2,
            }}
          />
        ))}
        {[0, 1, 2, 3, 4, 5, 6].map((i) => (
          <motion.circle
            key={`right-${i}`}
            cx="70"
            cy={50 + i * 50}
            r="4"
            fill="#10b981"
            fillOpacity="0.6"
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.6 }}
            transition={{
              duration: 1.5,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "reverse",
              delay: i * 0.2 + 0.5,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export const MedicalCross = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="60" height="60" viewBox="0 0 60 60" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.rect
          x="25"
          y="10"
          width="10"
          height="40"
          rx="2"
          fill="#10b981"
          fillOpacity="0.2"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
        <motion.rect
          x="10"
          y="25"
          width="40"
          height="10"
          rx="2"
          fill="#10b981"
          fillOpacity="0.2"
          initial={{ opacity: 0.1 }}
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
      </svg>
    </div>
  )
}

export const HexagonPattern = ({ className = "", count = 12 }: { className?: string; count?: number }) => {
  const hexagons = Array.from({ length: count }, (_, i) => {
    const angle = (i / count) * Math.PI * 2
    const x = Math.cos(angle) * 100 + 120
    const y = Math.sin(angle) * 100 + 120
    return { x, y, delay: i * 0.2 }
  })

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="240" height="240" viewBox="0 0 240 240" fill="none" xmlns="http://www.w3.org/2000/svg">
        {hexagons.map((hex, i) => (
          <motion.path
            key={i}
            d="M0,-20 L17.32,-10 L17.32,10 L0,20 L-17.32,10 L-17.32,-10 Z"
            transform={`translate(${hex.x}, ${hex.y})`}
            stroke="#10b981"
            strokeWidth="1"
            strokeOpacity="0.3"
            fill="none"
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{
              scale: [0.5, 1, 0.5],
              opacity: [0, 0.3, 0],
            }}
            transition={{
              duration: 4,
              repeat: Number.POSITIVE_INFINITY,
              ease: "easeInOut",
              delay: hex.delay,
            }}
          />
        ))}
        <motion.circle
          cx="120"
          cy="120"
          r="40"
          stroke="#10b981"
          strokeWidth="1"
          strokeOpacity="0.2"
          fill="none"
          initial={{ scale: 0.8 }}
          animate={{ scale: [0.8, 1.2, 0.8] }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </svg>
    </div>
  )
}

export const MoleculeStructure = ({ className = "" }: { className?: string }) => {
  const atoms = [
    { x: 100, y: 100, r: 8 },
    { x: 150, y: 70, r: 6 },
    { x: 180, y: 130, r: 7 },
    { x: 70, y: 150, r: 5 },
    { x: 50, y: 60, r: 6 },
  ]

  const bonds = [
    { x1: 100, y1: 100, x2: 150, y2: 70 },
    { x1: 150, y1: 70, x2: 180, y2: 130 },
    { x1: 100, y1: 100, x2: 70, y2: 150 },
    { x1: 100, y1: 100, x2: 50, y2: 60 },
  ]

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="240" height="200" viewBox="0 0 240 200" fill="none" xmlns="http://www.w3.org/2000/svg">
        {bonds.map((bond, i) => (
          <motion.line
            key={i}
            x1={bond.x1}
            y1={bond.y1}
            x2={bond.x2}
            y2={bond.y2}
            stroke="#10b981"
            strokeWidth="1.5"
            strokeOpacity="0.3"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              delay: i * 0.3,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 4,
            }}
          />
        ))}
        {atoms.map((atom, i) => (
          <motion.circle
            key={i}
            cx={atom.x}
            cy={atom.y}
            r={atom.r}
            fill="#10b981"
            fillOpacity="0.4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.5,
              delay: 2 + i * 0.2,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              repeatDelay: 4,
            }}
          />
        ))}
      </svg>
    </div>
  )
}

export const DataGraph = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="200" height="100" viewBox="0 0 200 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {/* X and Y axis */}
        <line x1="10" y1="90" x2="190" y2="90" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />
        <line x1="10" y1="10" x2="10" y2="90" stroke="#10b981" strokeWidth="1" strokeOpacity="0.5" />

        {/* Data points and line */}
        <motion.path
          d="M10,70 L40,50 L70,65 L100,30 L130,45 L160,20 L190,35"
          stroke="#10b981"
          strokeWidth="2"
          strokeOpacity="0.6"
          fill="none"
          initial={{ pathLength: 0 }}
          animate={{ pathLength: 1 }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            repeatDelay: 2,
          }}
        />

        {[10, 40, 70, 100, 130, 160, 190].map((x, i) => {
          const yValues = [70, 50, 65, 30, 45, 20, 35]
          return (
            <motion.circle
              key={i}
              cx={x}
              cy={yValues[i]}
              r="4"
              fill="#10b981"
              fillOpacity="0.8"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{
                duration: 0.3,
                delay: i * 0.3,
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "loop",
                repeatDelay: 2,
              }}
            />
          )
        })}
      </svg>
    </div>
  )
}

export const MedicalBackground = () => {
  return (
    <div className="fixed inset-0 z-[-1] opacity-5 pointer-events-none overflow-hidden">
      <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="medicalGrid" width="50" height="50" patternUnits="userSpaceOnUse">
            <path d="M 50 0 L 0 0 0 50" fill="none" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
          <pattern id="medicalCross" width="100" height="100" patternUnits="userSpaceOnUse">
            <rect x="45" y="35" width="10" height="30" rx="2" fill="#10b981" />
            <rect x="35" y="45" width="30" height="10" rx="2" fill="#10b981" />
          </pattern>
          <pattern id="medicalHexagon" width="120" height="140" patternUnits="userSpaceOnUse">
            <path d="M30,0 L90,0 L120,60 L90,120 L30,120 L0,60 Z" fill="none" stroke="#10b981" strokeWidth="0.5" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#medicalGrid)" />
        <rect width="100%" height="100%" fill="url(#medicalCross)" opacity="0.3" />
        <rect width="100%" height="100%" fill="url(#medicalHexagon)" opacity="0.2" />
      </svg>
    </div>
  )
}
