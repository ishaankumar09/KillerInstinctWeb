"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ArrowRight, Trophy, Calendar, Target } from "lucide-react"
import Link from "next/link"

export default function Portfolios() {
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
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Past Portfolios </h1>
          <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
            Explore our journey through the years of FIRST Tech Challenge competitions, showcasing our growth,
            innovations, and achievements.
          </p>
        </div>

        <div className="grid gap-8">
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">2024-2025</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-sans">FTC Into the Deep</h2>
                  <p className="text-white/80 font-sans mb-6">
                    Final season portfolio for our 2024-2025 FTC season, "Into the Deep". 
                    Highlights our robot design, subsystems developed, and additional outreach efforts.
                  </p>
                  <Button
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans"
                    asChild
                  >
                    <Link target="_blank" href="/documents/2025_portfolio.pdf" className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div>
                      <img
                        src="/images/intothedeep.png"
                        width={150}
                        height={150}
                        alt="FTC Into the Deep"
                        className="rounded-lg"
                      />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-white/10 backdrop-blur-sm pt-4 border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-[1.02]">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 items-center">
                <div className="md:col-span-2">
                  <div className="flex items-center gap-4 mb-4">
                    <Badge className="bg-cyan-500/20 text-cyan-300 border-cyan-400/30">2025-2026</Badge>
                  </div>
                  <h2 className="text-3xl font-bold text-white mb-4 font-sans">FTC Decode</h2>
                  <p className="text-white/80 font-sans mb-6">
                    Final season portfolio for our 2025-2026 FTC season, "Decode". 
                    Highlights our robot design, subsystems developed, and additional outreach efforts.
                  </p>
                  <Button
                    size="lg"
                    className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans"
                    asChild
                  >
                    <Link target="_blank" href="/documents/2026_portfolio.pdf" className="flex items-center gap-2">
                      View Details
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </Button>
                </div>
                <div className="flex justify-center">
                  <div>
                      <img
                        src="/images/decode.png"
                        width={150}
                        height={150}
                        alt="FTC Decode"
                        className="rounded-lg"
                      />
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
          <div className="max-w-6xl mx-auto text-center">
            <div className="bg-gray-800/30 border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold font-sans text-white mb-4">Want to make your own portfolio??</h3>
              <p className="text-white/90 font-sans mb-6">
                Check out our Portfolio Building guide with all the tips to make a portfolio worthy of an Inspire Award. If you need any more help or have any questions, feel free to reach out to us! We are always happy to
                help answer any questions you may have.
              </p>
              <Button
                size="lg"
                className="bg-cyan-500 hover:bg-cyan-600 text-white transition-all duration-300 hover:scale-105 font-sans"
                asChild
              >
                <Link href="/resources/portfolio-building" className="flex items-center gap-3">
                  Portfolio Building Guide
                  <ArrowRight className="w-6 h-6" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
