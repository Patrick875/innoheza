"use client"

import { motion } from "framer-motion"

export const CirclePattern = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.circle
          cx="60"
          cy="60"
          r="40"
          stroke="#10b981"
          strokeWidth="2"
          strokeDasharray="251.2"
          initial={{ strokeDashoffset: 251.2 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
        />
        <motion.circle
          cx="60"
          cy="60"
          r="50"
          stroke="#059669"
          strokeWidth="1"
          strokeDasharray="314"
          initial={{ strokeDashoffset: 314 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 3,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.5,
          }}
        />
        <motion.circle
          cx="60"
          cy="60"
          r="30"
          stroke="#34d399"
          strokeWidth="1.5"
          strokeDasharray="188.4"
          initial={{ strokeDashoffset: 188.4 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            ease: "easeInOut",
            delay: 0.2,
          }}
        />
      </svg>
    </div>
  )
}

export const WavyLine = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="200" height="30" viewBox="0 0 200 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <motion.path
          d="M0 15C20 5 40 25 60 15C80 5 100 25 120 15C140 5 160 25 180 15C200 5 220 25 240 15"
          stroke="#10b981"
          strokeWidth="2"
          initial={{ pathLength: 0, opacity: 0.2 }}
          animate={{ pathLength: 1, opacity: 1 }}
          transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY, repeatType: "loop", ease: "easeInOut" }}
        />
      </svg>
    </div>
  )
}

export const Dots = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
        {[...Array(5)].map((_, row) =>
          [...Array(5)].map((_, col) => (
            <motion.circle
              key={`${row}-${col}`}
              cx={10 + col * 20}
              cy={10 + row * 20}
              r="3"
              fill="#10b981"
              initial={{ opacity: 0.2 }}
              animate={{ opacity: [0.2, 1, 0.2] }}
              transition={{
                duration: 2,
                repeat: Number.POSITIVE_INFINITY,
                delay: (row + col) * 0.1,
                ease: "easeInOut",
              }}
            />
          )),
        )}
      </svg>
    </div>
  )
}

export const FloatingHearts = ({ className = "", count = 5 }: { className?: string; count?: number }) => {
  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {[...Array(count)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          initial={{
            x: Math.random() * 100 - 50,
            y: Math.random() * 100,
            opacity: 0,
          }}
          animate={{
            y: [null, -100 - Math.random() * 100],
            opacity: [0, 1, 0],
          }}
          transition={{
            duration: 3 + Math.random() * 2,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
              fill={`rgba(16, 185, 129, ${0.3 + Math.random() * 0.7})`}
            />
          </svg>
        </motion.div>
      ))}
    </div>
  )
}

export const BackgroundGradient = ({ className = "" }: { className?: string }) => {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
      <motion.div
        className="absolute -inset-[100px] bg-gradient-to-r from-emerald-50 via-transparent to-emerald-50 opacity-60"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
      />
    </div>
  )
}

export const MedicalIcons = ({ className = "" }: { className?: string }) => {
  const icons = [
    "M12 4.5v15m7.5-7.5h-15", // Plus
    "M9 12h.01M12 12h.01M15 12h.01M9 15h.01M12 15h.01M15 15h.01M9 18h.01M12 18h.01M15 18h.01M19.5 3.75h-15a1.5 1.5 0 00-1.5 1.5v15a1.5 1.5 0 001.5 1.5h15a1.5 1.5 0 001.5-1.5v-15a1.5 1.5 0 00-1.5-1.5z", // Calendar
    "M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z", // Heart
    "M12 3c.132 0 .263 0 .393 0a7.5 7.5 0 0 0 7.92 12.446a9 9 0 1 1 -8.313 -12.454z", // Moon
    "M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z", // Document
  ]

  return (
    <div className={`absolute pointer-events-none ${className}`}>
      {icons.map((d, i) => (
        <motion.svg
          key={i}
          className="absolute"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
          }}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          initial={{ opacity: 0.1, scale: 0.8 }}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [0.8, 1, 0.8],
            rotate: [0, 10, 0, -10, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        >
          <path d={d} stroke="#10b981" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </motion.svg>
      ))}
    </div>
  )
}
