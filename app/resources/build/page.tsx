"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Cog, Puzzle, BrickWall, ComputerIcon } from "lucide-react"
import Link from "next/link"

export default function BuildHub() {
  const buildSections = [
    {
      title: "Mechanisms 101",
      description: "Basic guide to understanding common mechanisms used in FTC robotics.",
      icon: Cog,
      href: "resources/build/robot",
    },
    {
      title: "Sourcing Parts",
      description: "How to properly source parts to build a robot for FTC competitions.",
      icon: Puzzle,
      href: "resources/build/portfolios",
    },
    {
      title: "Choosing Materials",
      description: "Navigating material selection for building a competitive robot.",
      icon: BrickWall,
      href: "resources/build/achievements",
    },
    {
      title: "CAD",
      description: "Basics for learning Computer Aided Design (CAD) for robot design.",
      icon: ComputerIcon,
      href: "resources/build/resources",
    },
  ]

  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 1200px at 50% 20%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16 pt-16">
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Build Hub</h1>
          <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
            Explore our journey through years of innovation, growth, and achievement in FIRST Tech Challenge. Select a
            category below to dive deeper into our build section.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {buildSections.map((section) => {
            return (
              <Card
                key={section.title}
                className="bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]"
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center justify-center space-y-4 text-center min-h-[150px]">
                    <section.icon className="w-12 h-12 text-cyan-500" />
                    <h2 className="text-2xl font-bold text-white font-sans">{section.title}</h2>
                    <p className="text-white/80 font-sans">{section.description}</p>
                    <Button
                      className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans mt-4"
                      asChild
                    >
                      <Link href={section.href} className="flex items-center gap-2">
                        Explore
                        <ArrowRight className="w-4 h-4" />
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-gray-800/30 border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold font-sans text-white mb-4">Need Help Building Your Own?</h3>
            <p className="text-white/90 font-sans mb-6">
              If there is any issues that you arer having that is not covered in these resources, feel free to reach out to
            </p>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans"
              asChild
            >
              <Link href="/contact" className="flex items-center gap-3">
                Contact Us
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
