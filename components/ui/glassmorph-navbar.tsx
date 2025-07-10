"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown } from "lucide-react"

export default function GlassmorphNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
    }

    document.addEventListener("mousedown", handleClickOutside)
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
    }
  }, [])

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }

  const closeDropdown = () => {
    setIsDropdownOpen(false)
  }

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 px-5 flex h-16 w-11/12 max-w-7xl -translate-x-1/2 items-center justify-between rounded-full bg-background/10 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        </Link>
        <h1 className="text-2xl font-bold font-sans text-white">Killer Instinct</h1>
      </div>

      <div className="hidden md:flex items-center gap-6 pr-4">
        <Link href="/" className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium">
          Home
        </Link>
        <Link
          href="/team"
          className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
        >
          Team
        </Link>

        {/* Past Seasons Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            onClick={toggleDropdown}
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
          >
            Past Seasons
            <ChevronDown
              className={`w-4 h-4 transition-transform duration-200 ${isDropdownOpen ? "rotate-180" : ""}`}
            />
          </button>

          {isDropdownOpen && (
            <div className="absolute top-full mt-2 right-0 w-32 bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden">
              <Link
                href="/seasons/2025"
                onClick={closeDropdown}
                className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
              >
                2025
              </Link>
            </div>
          )}
        </div>

        <Link
          href="/sponsors"
          className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
        >
          Sponsors
        </Link>

        <Link
          href="/contact"
          className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
        >
          Contact
        </Link>
      </div>

      {/* Mobile menu button - you can expand this later */}
      <div className="md:hidden">
        <button className="text-white/90 hover:text-white transition-colors duration-200">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
    </nav>
  )
}
