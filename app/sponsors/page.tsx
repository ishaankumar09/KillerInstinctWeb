"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ExternalLink } from "lucide-react"

const sponsors = [
  {
    name: "Gene Haas Foundation",
    image: "/images/Hass.png",
    website: "https://www.ghaasfoundation.org/",
  },
  {
    name: "U.S. Navy",
    image: "/images/Navy.png",
    website: "https://www.navy.mil/",
  },
  {
    name: "Space Vector",
    image: "/images/SpaceVector.png",
    website: "https://www.spacevector.com/",
  },
  {
    name: "Panasonic",
    image: "/images/panasonic.png",
    website: "https://www.panasonic.com/",
  },
]

export default function SponsorsPage() {
  const handleSponsorClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer")
  }

  return (
    <div className="min-h-screen bg-black pt-24 pb-16 relative">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 1600px at 50% 50%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
          minHeight: "100vh",
        }}
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold font-sans text-white mb-6">Our Sponsors</h1>
            <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
              We are grateful for the support of these incredible organizations who believe in STEM education and the
              future of robotics. Click on any sponsor to learn more about their mission and contributions.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
            {sponsors.map((sponsor, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-cyan-400/50 cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.website)}
              >
                <CardContent className="p-8">
                  <div className="flex flex-col items-center text-center space-y-6">
                    {/* Sponsor Logo */}
                    <div className="w-full h-32 flex items-center justify-center">
                      <img
                        src={sponsor.image}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    {/* Sponsor Name */}
                    <h3 className="text-2xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors duration-300">
                      {sponsor.name}
                    </h3>

                    {/* Visit Website Indicator */}
                    <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-sm font-sans font-medium">Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            <Card className="md:col-span-2 bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
              <CardContent className="p-8">
                <div className="text-center">
                  <h2 className="text-3xl font-bold text-white mb-4 font-sans">Interested in Sponsoring Us?</h2>
                  <p className="text-white/80 font-sans mb-6 max-w-2xl mx-auto">
                    Join these amazing organizations in supporting STEM education and helping us inspire the next
                    generation of engineers and innovators.
                  </p>
                  <a
                    href="/contact"
                    className="inline-flex items-center gap-2 bg-cyan-500 hover:bg-cyan-600 text-white px-8 py-3 rounded-lg transition-all duration-300 hover:scale-105 font-sans font-medium"
                  >
                    Contact Us About Sponsorship
                    <ExternalLink className="w-5 h-5" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
