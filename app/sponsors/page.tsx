"use client"

import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Check, ExternalLink, Minus } from "lucide-react"
import { useRouter } from "next/navigation"

const FUNDING_GOAL = 5000
const AMOUNT_RAISED = 2000

const featuredSponsor = {
  name: "Tieche Engineered Systems",
  image: "/images/tieche.png",
  website: "https://tiecheusa.com/website/",
  blurb:
    "Our lead sponsor. Tieche Engineered Systems has been the backbone of our program, providing the funding and manufacturing support that makes our robot possible season after season.",
}

const sponsors = [
  {
    name: "Gene Haas Foundation",
    image: "/images/Hass.png",
    website: "https://www.ghaasfoundation.org/",
  },
  {
    name: "U.S. Army",
    image: "/images/army.png",
    website: "https://www.army.mil/",
  },
  {
    name: "Space Vector",
    image: "/images/SpaceVector.png",
    website: "https://www.spacevector.com/",
  },
  {
    name: "Panasonic",
    image: "/images/Panasonic.png",
    website: "https://www.panasonic.com/",
  },
  {
    name: "PCBWay",
    image: "/images/pcbway.png",
    website: "https://www.pcbway.com/",
  },
  {
    name: "EDM Services",
    image: "/images/edm.png",
    website: "https://edmsvc.com/",
  },
  {
    name: "Polymaker",
    image: "/images/polymaker.png",
    website: "https://polymaker.com/",
  },
  {
    name: "Simi Valley Elks Lodge",
    image: "/images/elks.png",
    website: "https://simivalleyelks.com/",
  },
  {
    name: "Simi Valley Police Foundation",
    image: "/images/simi-police.png",
    website: "https://www.svpf.org/",
  },
]

const perks = [
  "Mentioned Sponsor on our website",
  "Included in our portfolio (seen by hundreds each year)",
  "Logo on our T-shirts / Poster",
  "Opportunities to present your company at school (bring a guest speaker!)",
  "Shout out on our Instagram (≈1000+ visitors monthly during season)",
  "Monthly updates about our competition and robot",
  "Your logo on our robot",
]

const tiers = [
  {
    name: "Bee",
    range: "$0 – $250",
    included: 2,
    accent: "border-white/20",
    highlight: false,
  },
  {
    name: "Hornet",
    range: "$250 – $999",
    included: 4,
    accent: "border-cyan-400/40",
    highlight: false,
  },
  {
    name: "Killer Wasp",
    range: "$1000+",
    included: 7,
    accent: "border-cyan-400",
    highlight: true,
  },
]

export default function SponsorsPage() {
  const router = useRouter()

  const handleSponsorClick = (website: string) => {
    window.open(website, "_blank", "noopener,noreferrer")
  }

  const handleTierClick = () => {
    router.push("/contact")
  }

  const progress = Math.min(100, Math.round((AMOUNT_RAISED / FUNDING_GOAL) * 100))

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

          <div className="max-w-md mx-auto mb-16">
            <div className="flex items-baseline justify-between text-xs font-sans text-white/60 mb-2">
              <span>Season funding</span>
              <span>
                <span className="text-white/90 font-medium">${AMOUNT_RAISED.toLocaleString()}</span> of $
                {FUNDING_GOAL.toLocaleString()}
              </span>
            </div>
            <div
              className="w-full h-1.5 rounded-full bg-white/10 overflow-hidden"
              role="progressbar"
              aria-valuenow={AMOUNT_RAISED}
              aria-valuemin={0}
              aria-valuemax={FUNDING_GOAL}
              aria-label="Season funding progress"
            >
              <div
                className="h-full rounded-full bg-cyan-400 transition-all duration-1000"
                style={{ width: `${progress}%` }}
              />
            </div>
          </div>

          {/* Title Sponsor */}
          <div className="mb-12">
            <Card
              className="group bg-white/10 backdrop-blur-sm border-cyan-400/50 transition-all duration-300 hover:bg-white/15 hover:border-cyan-400 cursor-pointer"
              onClick={() => handleSponsorClick(featuredSponsor.website)}
            >
              <CardContent className="p-8 md:p-12">
                <div className="flex flex-col md:flex-row items-center gap-8 md:gap-12">
                  <div className="w-full md:w-1/2 h-32 md:h-40 flex items-center justify-center">
                    <img
                      src={featuredSponsor.image || "/placeholder.svg"}
                      alt={featuredSponsor.name}
                      className="max-w-full max-h-full object-contain transition-transform duration-300 group-hover:scale-105"
                    />
                  </div>
                  <div className="w-full md:w-1/2 text-center md:text-left">
                    <h3 className="text-3xl md:text-4xl font-bold text-white font-sans group-hover:text-cyan-300 transition-colors duration-300">
                      {featuredSponsor.name}
                    </h3>
                    <p className="text-white/80 font-sans mt-4">{featuredSponsor.blurb}</p>
                    <div className="flex items-center justify-center md:justify-start gap-2 text-cyan-400 mt-6">
                      <span className="text-sm font-sans font-medium">Visit Website</span>
                      <ExternalLink className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
            {sponsors.map((sponsor, index) => (
              <Card
                key={index}
                className="group bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-cyan-400/50 cursor-pointer"
                onClick={() => handleSponsorClick(sponsor.website)}
              >
                <CardContent className="p-3">
                  <div className="flex flex-col items-center text-center space-y-2">
                    <div className="w-40 h-12 flex items-center justify-center">
                      <img
                        src={sponsor.image || "/placeholder.svg"}
                        alt={sponsor.name}
                        className="max-w-full max-h-full object-fill transition-transform duration-300 group-hover:scale-110"
                      />
                    </div>

                    <h3 className="pt-2 text-lg font-bold text-white font-sans group-hover:text-cyan-300 transition-colors duration-300">
                      {sponsor.name}
                    </h3>

                    {/* Visit Website Indicator */}
                    <div className="flex items-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <span className="text-xs font-sans font-medium">Visit Website</span>
                      <ExternalLink className="w-3 h-3" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4 font-sans">Sponsorship Tiers</h2>
              <p className="text-white/80 font-sans max-w-2xl mx-auto">
                Support at any level makes a difference. Here&apos;s what comes with each tier.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {tiers.map((tier) => (
                <Card
                  key={tier.name}
                  className={`group relative bg-white/10 backdrop-blur-sm ${tier.accent} transition-all duration-300 hover:bg-white/15 hover:scale-105 hover:border-cyan-400 cursor-pointer ${
                    tier.highlight ? "md:-translate-y-2" : ""
                  }`}
                  onClick={() => handleTierClick()}
                >
                  <CardContent className="p-6">
                    {tier.highlight && (
                      <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-cyan-500 text-white text-xs font-sans font-semibold px-3 py-1 rounded-full">
                        Most Impact
                      </span>
                    )}
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold text-white font-sans">{tier.name}</h3>
                      <p className="text-cyan-300 font-sans font-semibold mt-1">{tier.range}</p>
                    </div>
                    <ul className="space-y-3">
                      {perks.map((perk, i) => {
                        const included = i < tier.included
                        return (
                          <li key={perk} className="flex items-start gap-3">
                            {included ? (
                              <Check className="w-4 h-4 text-cyan-400 shrink-0 mt-1" />
                            ) : (
                              <Minus className="w-4 h-4 text-white/25 shrink-0 mt-1" />
                            )}
                            <span className={`text-sm font-sans ${included ? "text-white/90" : "text-white/35"}`}>
                              {perk}
                            </span>
                          </li>
                        )
                      })}
                    </ul>

                    <div className="flex items-center justify-center gap-2 text-cyan-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mt-6">
                      <span className="text-xs font-sans font-medium">Become a Sponsor</span>
                      <ArrowRight className="w-3 h-3" />
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div className="mb-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold text-white mb-4 font-sans">How We Use Your Support</h2>
              <p className="text-white/80 font-sans mb-6 max-w-2xl mx-auto">
                Transparency is important to us. Here&apos;s how your sponsorship directly impacts our team and helps us
                achieve our goals.
              </p>
            </div>

            <div className="w-full max-w-2xl mx-auto">
              <div>
                <img
                  src="/images/expenses.png"
                  alt="Team Expenses Breakdown"
                  className="w-full h-auto rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20 transition-all duration-300 hover:bg-white/15 hover:scale-105">
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
  )
}
