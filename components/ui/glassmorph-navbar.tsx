"use client"

import Image from "next/image"
import Link from "next/link"
import { useState, useEffect, useRef } from "react"
import { ChevronDown, Linkedin, Instagram, Github, Youtube } from "lucide-react"

export default function GlassmorphNavbar() {
  // Dropdown state
  const [isSeasonsOpen, setIsSeasonsOpen] = useState(false)
  const [isResourcesOpen, setIsResourcesOpen] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  // Refs for click-outside detection
  const seasonsRef = useRef<HTMLDivElement>(null)
  const resourcesRef = useRef<HTMLDivElement>(null)
  const mobileMenuRef = useRef<HTMLDivElement>(null)

  // Close dropdowns when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      const target = event.target as Node
      const element = target as Element
      
      // Check if clicking on a link - if so, don't interfere at all
      const clickedLink = element?.closest("a")
      if (clickedLink) {
        // If it's a link, completely skip the click-outside logic
        return
      }
      
      // Handle desktop dropdowns
      if (seasonsRef.current && !seasonsRef.current.contains(target)) {
        setIsSeasonsOpen(false)
      }
      if (resourcesRef.current && !resourcesRef.current.contains(target)) {
        setIsResourcesOpen(false)
      }

      // Handle mobile menu - only close if clicking outside and not on a link
      if (mobileMenuRef.current && !mobileMenuRef.current.contains(target)) {
        setIsMobileMenuOpen(false)
      }
    }

    // Use mousedown for immediate response, but check for links first
    document.addEventListener("mousedown", handleClickOutside)
    // For touch devices, use touchstart
    document.addEventListener("touchstart", handleClickOutside)
    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside)
      document.removeEventListener("touchstart", handleClickOutside)
    }
  }, [])

  // Navigation items configuration
  const navItems = [
    { label: "Home", href: "/" },
    { label: "Team", href: "/team" },
    {
      label: "Seasons",
      dropdown: true,
      items: [{ label: "2024-2025", href: "/seasons/2025" }],
    },
    {
      label: "Resources",
      dropdown: true,
      items: [
        { label: "CAD Videos", href: "/resources/build/cad" },
        { label: "Website Building", href: "/resources/website-building" },
        { label: "Portfolio Building", href: "/resources/portfolio-building" },
        { label: "Past Portfolios", href: "/resources/portfolios" },
      ],
    },
    { label: "Sponsors", href: "/sponsors" },
    { label: "Contact", href: "/contact" },
  ]

  const socialLinks = [
    { icon: Youtube, href: "https://www.youtube.com/@sshsroboticsclub8", label: "Youtube" },
    { icon: Instagram, href: "https://www.instagram.com/sshsfirstrobotics", label: "Instagram" },
    { icon: Github, href: "https://github.com/luca-flood/Decode-20381#", label: "GitHub" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/20381-killer-instinct", label: "LinkedIn" },
    
  ]

  // Dropdown toggle handlers
  const toggleDropdown = (dropdown: "seasons" | "resources") => {
    if (dropdown === "seasons") {
      setIsSeasonsOpen(!isSeasonsOpen)
      setIsResourcesOpen(false)
    } else {
      setIsResourcesOpen(!isResourcesOpen)
      setIsSeasonsOpen(false)
    }
  }

  const closeAllDropdowns = () => {
    setIsSeasonsOpen(false)
    setIsResourcesOpen(false)
    setIsMobileMenuOpen(false)
  }

  // Render dropdown items
  const renderDropdown = (items: any[], closeHandler: () => void, width = "w-32") => (
    <div
      className={`absolute top-full mt-2 right-0 ${width} bg-black/80 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden`}
    >
      {items.map((item, index) => (
        <Link
          key={index}
          href={item.href}
          onClick={closeHandler}
          className="block px-4 py-2 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium text-sm"
        >
          {item.label}
        </Link>
      ))}
    </div>
  )

  // Render navigation link or dropdown
  const renderNavItem = (item: any, isMobile = false) => {
    if (item.dropdown) {
      const isOpen = item.label === "Seasons" ? isSeasonsOpen : isResourcesOpen
      const ref = item.label === "Seasons" ? seasonsRef : resourcesRef
      const toggle = () => toggleDropdown(item.label === "Seasons" ? "seasons" : "resources")

      if (isMobile) {
        return (
          <div key={item.label} className="relative">
            <button
              onClick={(e) => {
                e.stopPropagation()
                toggle()
              }}
              className="w-full flex items-center justify-between px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
            >
              {item.label}
              <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
            </button>
            {isOpen && (
              <div className="bg-white/5 border-t border-white/10">
                {item.items.map((subItem: any, index: number) => (
                  <Link
                    key={index}
                    href={subItem.href}
                    onClick={(e) => {
                      // Stop all event propagation
                      e.stopPropagation()
                      // Close menu - navigation will happen via Next.js Link
                      setIsSeasonsOpen(false)
                      setIsResourcesOpen(false)
                      setIsMobileMenuOpen(false)
                    }}
                    onMouseDown={(e) => {
                      // Also stop mousedown to prevent any interference
                      e.stopPropagation()
                    }}
                    onTouchStart={(e) => {
                      // Stop touch events too
                      e.stopPropagation()
                    }}
                    className="block px-8 py-2 text-white/80 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium text-sm cursor-pointer"
                  >
                    {subItem.label}
                  </Link>
                ))}
              </div>
            )}
          </div>
        )
      }

      return (
        <div key={item.label} className="relative" ref={ref}>
          <button
            onClick={(e) => {
              e.stopPropagation()
              toggle()
            }}
            className="flex items-center gap-1 text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium text-sm"
          >
            {item.label}
            <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`} />
          </button>
          {isOpen &&
            renderDropdown(
              item.items,
              () => (item.label === "Seasons" ? setIsSeasonsOpen(false) : setIsResourcesOpen(false)),
              item.label === "Resources" ? "w-44" : "w-32",
            )}
        </div>
      )
    }

    if (isMobile) {
      return (
        <Link
          key={item.label}
          href={item.href}
          onClick={(e) => {
            e.stopPropagation()
            closeAllDropdowns()
          }}
          onTouchEnd={(e) => {
            e.stopPropagation()
            closeAllDropdowns()
          }}
          className="px-4 py-3 text-white/90 hover:text-white hover:bg-white/10 transition-colors duration-200 font-sans font-medium"
        >
          {item.label}
        </Link>
      )
    }

    return (
      <Link
        key={item.label}
        href={item.href}
        className="text-white/90 hover:text-white transition-colors duration-200 font-sans font-medium text-sm"
      >
        {item.label}
      </Link>
    )
  }

  return (
    <nav className="fixed left-1/2 top-0 z-50 mt-7 px-5 flex h-16 w-11/12 max-w-7xl -translate-x-1/2 items-center justify-between rounded-full bg-background/10 backdrop-blur-md">
      {/* Logo and Title */}
      <Link href="/" className="flex items-center gap-2">
        <Image src="/images/logo.png" alt="logo" width={48} height={48} />
        <h1 className="text-2xl font-bold font-sans text-white">Killer Instinct</h1>
      </Link>

      {/* Desktop Navigation */}
      <div className="hidden md:flex items-center pr-4">
        {/* Main Navigation Links */}
        <div className="flex items-center gap-4">{navItems.map((item) => renderNavItem(item))}</div>

        {/* Social Media Icons */}
        <div className="flex items-center gap-2.5 ml-4 pl-2.5 border-l border-white/20">
          {socialLinks.map((social) => (
            <a
              key={social.label}
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
              aria-label={social.label}
            >
              <social.icon className="w-4.5 h-4.5" />
            </a>
          ))}
        </div>
      </div>

      {/* Mobile Menu Button */}
      <div className="md:hidden relative">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
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
          <div 
            ref={mobileMenuRef}
            className="absolute top-full right-0 mt-2 w-screen max-w-sm bg-black/90 backdrop-blur-md border border-white/20 rounded-lg shadow-lg overflow-hidden z-50"
          >
            <div className="flex flex-col py-2">
              {/* Mobile Navigation Items */}
              {navItems.map((item) => renderNavItem(item, true))}

              {/* Mobile Social Icons */}
              <div className="flex items-center justify-center gap-6 px-4 py-3 border-t border-white/20 mt-2">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-cyan-400 hover:text-cyan-300 transition-colors duration-200"
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
