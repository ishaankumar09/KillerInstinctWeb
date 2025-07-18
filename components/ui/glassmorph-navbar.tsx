"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Linkedin, Instagram } from "lucide-react"

export default function GlassmorphNavbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false)
  const dropdownRef = useRef<HTMLDivElement>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [isMobilePastSeasonsOpen, setIsMobilePastSeasonsOpen] = useState(false)

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsDropdownOpen(false)
      }
      // Only close mobile menu when clicking outside the navbar entirely
      const navbar = document.querySelector("nav")
      if (navbar && !navbar.contains(event.target as Node)) {
        setIsMobileMenuOpen(false)
        setIsMobilePastSeasonsOpen(false)
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

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false)
    setIsMobilePastSeasonsOpen(false)
  }

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 px-5 flex h-16 w-11/12 max-w-7xl -translate-x-1/2 items-center justify-between rounded-full bg-background/10 backdrop-blur-md">
      <div className="flex items-center gap-2">
        <Link href="/">
          <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        </Link>
        <h1 className="text-2xl font-bold font-sans text-white">Killer Instinct</h1>
      </div>

      <div className="hidden md:flex items-center pr-4">
        {/* Main navigation links with original spacing */}
        <div className="flex items-center gap-6">
          <Link
            href="/"
            onClick={() => window.scrollTo(0, 0)}
            className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
          >
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
              onClick={(e) => {
                e.stopPropagation()
                toggleDropdown()
              }}
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
        </div>

        {/* Contact and Social Media Icons grouped together */}
        <div className="flex items-center gap-2 ml-6">
          <Link
            href="/contact"
            className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium"
          >
            Contact
          </Link>

          {/* Social Media Icons */}
          <div className="flex items-center gap-3 ml-2 pl-3 border-l border-white/20">
            <a
              href="https://www.linkedin.com/company/20381-killer-instinct"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/sshsfirstrobotics"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>

      <div className="md:hidden">
        <button
          onClick={toggleMobileMenu}
          className="text-white/90 hover:text-white transition-colors duration-200"
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="absolute top-full left-0 right-0 mt-2 bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col py-2">
              <Link
                href="/"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
              >
                Home
              </Link>
              <Link
                href="/team"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
              >
                Team
              </Link>
              <div className="relative">
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    setIsMobilePastSeasonsOpen(!isMobilePastSeasonsOpen)
                  }}
                  className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
                >
                  Past Seasons
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isMobilePastSeasonsOpen ? "rotate-180" : ""}`}
                  />
                </button>
                {isMobilePastSeasonsOpen && (
                  <div className="bg-white/5 border-t border-white/10">
                    <Link
                      href="/seasons/2025"
                      onClick={() => {
                        setIsMobileMenuOpen(false)
                        setIsMobilePastSeasonsOpen(false)
                      }}
                      className="block px-8 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium text-sm"
                    >
                      2025
                    </Link>
                  </div>
                )}
              </div>
              <Link
                href="/sponsors"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
              >
                Sponsors
              </Link>
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
              >
                Contact
              </Link>

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-6 px-4 py-3 border-t border-white/20 mt-2">
                <a
                  href="https://www.linkedin.com/company/20381-killer-instinct"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-6 h-6" />
                </a>
                <a
                  href="https://www.instagram.com/sshsfirstrobotics"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
