"use client"
import { Carousel, CarouselContent, CarouselItem } from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"

const teamMembers = [
  {
    name: "Kasra Hoor",
    role: "Mechanical Lead",
    image: "/images/kasra.jpg",
  },
  {
    name: "Cain Guevera",
    role: "",
    image: "/images/cain.jpg",
  },
  {
    name: "James Vu",
    role: "",
    image: "/images/james.jpg",
  },
  {
    name: "Arsh Gandhi",
    role: "",
    image: "/images/arsh.jpg",
  },
]


const programmingMembers = [
  {
    name: "Luca Flood",
    role: "Programming Lead",
    image: "/images/luca.png",
  },
  {
    name: "Adithi Murlidas",
    role: "",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Nathan Widman",
    role: "",
    image: "/images/nathan.jpg",
  },
  {
    name: "Sean Hang",
    role: "",
    image: "/images/sean.jpg",
  },
  {
    name: "Seth Lin",
    role: "",
    image: "/images/seth.jpg",
  },
  {
    name: "Aarya Nigam",
    role: "",
    image: "/images/aarya.jpg",
  },
]


const cadMembers = [
  {
    name: "Gavin Hudson",
    role: "Club President",
    image: "/images/gavin.jpg",
  },
  {
    name: "Harpreet Gill",
    role: "Club Secretary",
    image: "/images/harpreet.jpg",
  },
  {
    name: "Caden Weaver",
    role: "",
    image: "/images/caden.png",
  },
  {
    name: "Jules Picache",
    role: "",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const outreachMembers = [
  {
    name: "Daniel Zaki",
    role: "Outreach Lead",
    image: "/images/daniel.jpg",
  },
  {
    name: "Chloe Asidera",
    role: "",
    image: "/images/chloe.jpg",
  },
  {
    name: "Ishaan Kumar",
    role: "",
    image: "/images/ishaank.jpg",
  },
  {
    name: "Mingun Cho",
    role: "",
    image: "/images/mingun.png",
  },
  {
    name: "Ryan Nian",
    role: "",
    image: "/images/ryan.png",
  },
  {
    name: "Gabriella Aguilar",
    role: "",
    image: "/images/gabby.jpg",
  },
  {
    name: "Trish Nguyen",
    role: "",
    image: "/images/trish.png",
  },
  {
    name: "Aiden Long",
    role: "",
    image: "/images/aiden.JPG",
  },
]

export default function TeamPage() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div
        className="absolute inset-0 z-0"
        style={{
          background:
            "radial-gradient(circle 1600px at 50% 50%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
          minHeight: "100vh",
        }}
      />

      <div className="relative z-10 px-8 md:px-16 lg:px-24 py-16">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="flex flex-col justify-center">
              <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-8">2025-2026 Team Roster</h1>
              <p className="text-lg text-white/90 font-sans leading-relaxed">
                We are a tight knit team of dedicated and curious students who thrive on collaboration, problem-solving,
                and constant growth. We come from diverse backgrounds and bring our unique strengths to the table
                through our 4 diverse sectors, Mechanical Engineering, Programming, Computer Aided Design, and Community
                Outreach.
              </p>
            </div>

            <div className="flex items-center justify-center">
              <div className="w-full max-w-lg">
                <Carousel
                  className="w-full"
                  plugins={[
                    Autoplay({
                      delay: 3000,
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
                    <CarouselItem>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img src="/images/teampic.JPG" alt="Team pic" className="w-full h-full object-cover" />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/images/pic1.JPG"
                          alt="Robot in competition"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img 
                          src="/images/pic2.JPG" 
                          alt="Award ceremony" 
                          className="w-full h-full object-cover"
                         />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="p-1">
                        <div className="aspect-video overflow-hidden rounded-lg">
                          <img
                            src="/images/jonas.jpg"
                            alt="jonas with robot"
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/images/pic3.JPG"
                          alt="Team at competition"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="aspect-video overflow-hidden rounded-lg">
                        <img
                          src="/images/kasra-goon.JPG"
                          alt="kasra goon"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                </Carousel>
              </div>
            </div>
          </div>

          <div className="space-y-12">
            <div>
              <h2 className="text-3xl font-bold font-sans text-white mb-8">Mechanical</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {teamMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-white/20 transition-all duration-300 hover:scale-105">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white font-sans mb-1">{member.name}</h3>
                    {member.role && <p className="text-sm text-cyan-400 font-sans">{member.role}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-sans text-white mb-8">Programming</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {programmingMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-white/20 transition-all duration-300 hover:scale-105">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white font-sans mb-1">{member.name}</h3>
                    {member.role && <p className="text-sm text-cyan-400 font-sans">{member.role}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-sans text-white mb-8">CAD</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {cadMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-white/20 transition-all duration-300 hover:scale-105">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white font-sans mb-1">{member.name}</h3>
                    {member.role && <p className="text-sm text-cyan-400 font-sans">{member.role}</p>}
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-bold font-sans text-white mb-8">Outreach</h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {outreachMembers.map((member, index) => (
                  <div key={index} className="text-center">
                    <div className="w-full h-48 mb-4 overflow-hidden rounded-lg bg-white/20 transition-all duration-300 hover:scale-105">
                      <img
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-lg font-bold text-white font-sans mb-1">{member.name}</h3>
                    {member.role && <p className="text-sm text-cyan-400 font-sans">{member.role}</p>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
