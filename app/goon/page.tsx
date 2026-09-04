"use client"

import { useEffect, useState } from "react"
import Script from "next/script"

export default function GoonPage() {
  const [showContent, setShowContent] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
    const timer = setTimeout(() => {
      setShowContent(true)
    }, 300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      <Script
        type="module"
        src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
        strategy="beforeInteractive"
      />
      <div className="min-h-screen bg-black">
        <div className="relative">
          <div
            className="absolute inset-0"
            style={{
              background:
                "radial-gradient(circle 1400px at 72% 50%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
              height: "100vh",
            }}
          />

          <section className="relative min-h-screen flex flex-col md:flex-row items-center justify-center px-8 md:px-16 lg:px-24 pt-8 pb-20 gap-8 md:gap-12">
            <div className="relative z-10 w-full md:w-1/2 flex flex-col justify-center text-center md:text-left">
              <p
                className={`text-white/90 text-xl md:text-2xl lg:text-3xl mb-6 font-sans font-medium transition-opacity duration-1000 ${
                  showContent ? "opacity-100" : "opacity-0"
                }`}
              >
                Introducing
              </p>
              <div className="mb-6">
                <h1
                  className={`text-cyan-500 text-6xl md:text-7xl lg:text-8xl font-bold font-sans leading-tight transition-opacity duration-1000 delay-300 ${
                    showContent ? "opacity-100" : "opacity-0"
                  }`}
                >
                  Shock Blue
                </h1>
              </div>
              <p
                className={`text-white/90 text-lg md:text-xl lg:text-2xl font-sans font-medium transition-opacity duration-1000 delay-500 ${
                  showContent ? "opacity-100" : "opacity-0"
                }`}
              >
                Killer Instinct's approach to the 2025 FTC Decode Season
              </p>
            </div>

            <div
              className={`relative z-10 w-full md:w-1/2 flex flex-col items-center transition-opacity duration-1000 delay-700 ${
                showContent ? "opacity-100" : "opacity-0"
              }`}
            >
              {/* @ts-ignore - model-viewer is a custom web component */}
              {/* <iframe 
              src="https://gmail4350007.autodesk360.com/shares/public/SH28cd1QT2badd0ea72bf93564321f383f5c?mode=embed"
              width="640" 
              height="480" 
              allowFullScreen={true}
              frameBorder="0">
              </iframe> */}
              
              {mounted && (
                // @ts-ignore - model-viewer is a custom web component
                <model-viewer
                src="/images/robot-optimized.glb"
                alt="3D model of the robot"
                camera-controls
                touch-action="pan-y"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="20deg"
                interaction-prompt="none"
                exposure="1"
                shadow-intensity="1"
                style={{ width: "100%", height: "480px", backgroundColor: "transparent" }}
                />
              )}
              

            </div>
          </section>
        </div>
      </div>
    </>
  )
}

