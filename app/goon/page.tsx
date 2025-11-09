"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, Trophy, Calendar } from "lucide-react"
import Link from "next/link"
import { useEffect, useState } from "react"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import DotGrid from "@/components/DotGrid"

export default function HomePage() {
  const [showFirstLine, setShowFirstLine] = useState(false)
  const [showSecondLine, setShowSecondLine] = useState(false)
  const [showDesktopTypewriter, setShowDesktopTypewriter] = useState(false)

  useEffect(() => {
    const timer1 = setTimeout(() => {
      setShowFirstLine(true)
      setShowDesktopTypewriter(true)
    }, 500)
    const timer2 = setTimeout(() => {
      setShowSecondLine(true)
    }, 2500)
    return () => {
      clearTimeout(timer1)
      clearTimeout(timer2)
    }
  }, [])

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <DotGrid
        dotSize={5}
        gap={15}
        baseColor="#3d3365ff"
        activeColor="#2BD951"
        proximity={100}
        shockRadius={250}
        shockStrength={5}
        resistance={750}
        returnDuration={1.5}
      />
      <div className="relative z-10">
        <section className="relative min-h-screen flex items-center justify-center px-8 md:px-16 lg:px-24">
          <div className="relative z-10 max-w-7xl text-center">
            <p className="text-white/90 text-xl md:text-2xl lg:text-3xl mb-6 font-sans font-medium">
              Introducing FTC Team 20381
            </p>
            <div className="mb-6">
              <div className="block md:hidden">
                <h1
                  className={`text-white text-6xl font-bold font-sans leading-tight ${
                    showFirstLine ? "typewriter-mobile-first" : "opacity-0"
                  }`}
                >
                  Killer
                </h1>
                <h1
                  className={`text-white text-6xl font-bold font-sans leading-tight ${
                    showSecondLine ? "typewriter-mobile-second" : "opacity-0"
                  }`}
                >
                  Instinct.
                </h1>
              </div>
              <h1
                className={`hidden md:inline-block text-white text-7xl md:text-8xl lg:text-9xl font-bold font-sans leading-tight ${
                  showDesktopTypewriter ? "typewriter typewriter-delay" : "opacity-0"
                }`}
              >
                Killer Instinct.
              </h1>
            </div>
            <p className="text-white/90 text-2xl md:text-3xl lg:text-4xl mb-12 font-sans font-medium">
              Santa Susana High School
            </p>
            <Button
              size="lg"
              className="bg-cyan-500 hover:bg-cyan-600 text-white px-10 py-6 text-xl rounded-lg transition-all duration-300 hover:scale-105 font-sans"
              asChild
            >
              <Link href="#about" className="flex items-center gap-3">
                About Us
                <ArrowRight className="w-6 h-6" />
              </Link>
            </Button>
          </div>
        </section>

        <section className="relative py-8 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold font-sans text-white mb-4">Our Sponsors</h2>
              <p className="text-lg text-white/70 font-sans">
                Proudly supported by industry leaders who believe in STEM education
              </p>
            </div>
            <div className="relative overflow-hidden">
              <div className="flex space-x-20 items-center justify-center sponsor-scroll">
                {[
                  "Hass.png",
                  "army.png",
                  "SpaceVector.png",
                  "Panasonic.png",
                  "pcbway.png",
                  "edm.png",
                  "polymaker.png",
                  "elks.png",
                  "tieche.png",
                  "simi-police.png",
                ].map((img, i) => (
                  <img
                    key={i}
                    src={`/images/${img}`}
                    alt={img.split(".")[0]}
                    className="flex-shrink-0 w-48 h-24 object-contain transition-transform duration-300 hover:scale-110"
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="relative pt-16 pb-20 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">About Our Team</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="text-left">
                <p className="text-xl text-white/80 font-sans mb-8">
                  Killer Instinct is Santa Susana High School's premier FIRST Tech Challenge robotics team. We're
                  passionate about engineering, innovation, and making a positive impact in our community.
                </p>
                <Button
                  size="lg"
                  className="bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-4 text-lg rounded-lg transition-all duration-300 hover:scale-105 font-sans"
                  asChild
                >
                  <Link href="/team" className="flex items-center gap-3">
                    View our Team
                    <ArrowRight className="w-6 h-6" />
                  </Link>
                </Button>
              </div>
              <div className="relative">
                <Carousel
                  className="w-full max-w-sm mx-auto"
                  plugins={[
                    Autoplay({
                      delay: 2000,
                      stopOnInteraction: true,
                      stopOnMouseEnter: true,
                    }),
                  ]}
                  opts={{
                    align: "start",
                    loop: true,
                  }}
                >
                  <CarouselContent>
                    {["teampic.JPG", "pic1.JPG", "pic2.JPG", "jonas.jpg", "pic3.JPG", "pic4.JPG", "kasra-goon.JPG"].map(
                      (img, i) => (
                        <CarouselItem key={i}>
                          <div className="p-1">
                            <div className="aspect-video overflow-hidden rounded-lg">
                              <img src={`/images/${img}`} alt={img} className="w-full h-full object-cover" />
                            </div>
                          </div>
                        </CarouselItem>
                      ),
                    )}
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Our Achievements</h2>
              <p className="text-xl text-white/80 font-sans">
                Celebrating our journey of success and continuous improvement
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "4", text: "Years Active" },
                { title: "1st", text: "2025 League Placement" },
                { title: "16th", text: "2025 SoCal Regional Placement" },
                { title: "3", text: "Awards Won" },
              ].map((a, i) => (
                <Card
                  key={i}
                  className="text-center bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105"
                >
                  <CardContent className="pt-6">
                    <div className="text-3xl font-bold text-cyan-400 mb-2 transition-colors duration-300 hover:text-cyan-300">
                      {a.title}
                    </div>
                    <p className="text-white/80 font-sans">{a.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-400/30 transition-all duration-300 hover:bg-cyan-500/30">
                Current Season
              </Badge>
              <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">2025-2026 Season</h2>
              <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
                Follow our journey through this year's FIRST Tech Challenge season as we tackle new engineering
                challenges and push the boundaries of innovation.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-6 font-sans">This Season's Challenge</h3>
                <p className="text-white/80 mb-6 font-sans">
                  Our team is working hard to design and build a robot for this years FTC challenge "DECODE". DECODE is
                  centered around collecting artifacts and scoring them into team goals using various subsytems
                  incorporated into our innovative design.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                    <Calendar className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/90 font-sans">Season runs September 2025 - April 2026</span>
                  </div>
                  <div className="flex items-center gap-3 transition-all duration-300 hover:translate-x-2">
                    <Trophy className="w-5 h-5 text-cyan-400" />
                    <span className="text-white/90 font-sans">Regional Championships in March</span>
                  </div>
                </div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm border border-white/20 p-8 rounded-lg transition-all duration-300 hover:bg-white/15">
                <h4 className="text-xl font-bold text-white mb-4 font-sans">Upcoming Events</h4>
                <div className="space-y-3">
                  {[
                    ["Meet 0 @ Ojai Valley School", "Oct 18"],
                    ["Meet 1 @ Ojai Valley School", "Nov 1"],
                    ["Meet 2 @ Ojai Valley School", "Nov 13"],
                  ].map(([name, date], i) => (
                    <div
                      key={i}
                      className="flex justify-between items-center transition-all duration-300 hover:translate-x-1"
                    >
                      <span className="text-white/90 font-sans">{name}</span>
                      <Badge
                        variant="outline"
                        className="border-cyan-400/50 text-cyan-300 transition-colors duration-300 hover:border-cyan-300"
                      >
                        {date}
                      </Badge>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 px-8 md:px-16 lg:px-24 bg-black">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Join Our Journey</h2>
            <p className="text-xl text-white/80 mb-12 font-sans">
              Interested in robotics? Want to support our team? Get in touch with us!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 text-white backdrop-blur-sm bg-transparent transition-all duration-300 hover:scale-105 hover:border-white/50 font-sans"
                asChild
              >
                <a
                  target="_blank"
                  href="https://www.instagram.com/sshsfirstrobotics"
                  className="flex items-center gap-3"
                  rel="noreferrer"
                >
                  Follow our Progress
                  <ArrowRight className="w-6 h-6" />
                </a>
              </Button>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
