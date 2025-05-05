"use client"

import { useState } from "react"
import Link from "next/link"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X } from "lucide-react"

export const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const menuVariants = {
    closed: {
      opacity: 0,
      x: "100%",
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      x: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  }

  const linkVariants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  }

  return (
    <div className="md:hidden">
      <button onClick={toggleMenu} className="p-2 text-emerald-800 focus:outline-none" aria-label="Toggle menu">
        <Menu size={24} />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="fixed inset-0 z-50 bg-white flex flex-col p-6"
          >
            <div className="flex justify-between items-center mb-8">
              <p className="font-bold text-emerald-800 text-xl">INNOHEZA</p>
              <button onClick={toggleMenu} className="p-2 text-emerald-800 focus:outline-none" aria-label="Close menu">
                <X size={24} />
              </button>
            </div>

            <nav className="flex-1">
              <ul className="space-y-6">
                {["about", "mission", "product", "team", "donate", "contact"].map((item, index) => (
                  <motion.li
                    key={item}
                    custom={index}
                    variants={linkVariants}
                    className="border-b border-gray-100 pb-2"
                  >
                    <Link
                      href={`#${item}`}
                      className="text-xl font-medium text-gray-800 hover:text-emerald-700 transition-colors block py-2"
                      onClick={toggleMenu}
                    >
                      {item.charAt(0).toUpperCase() + item.slice(1).replace("-", " ")}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>

            <motion.button
              variants={linkVariants}
              custom={6}
              className="w-full p-3 rounded-[8px] text-white bg-teal-800 mt-6"
              whileHover={{ scale: 1.02, backgroundColor: "#115e59" }}
              whileTap={{ scale: 0.98 }}
              onClick={toggleMenu}
            >
              Donate
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}
