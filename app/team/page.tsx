"use client"
import Image from 'next/image'


const teamMembers = [
  {
    name: "Kasra Hoor",
    role: "President",
    image: "/images/kasra.jpg",
  },
  {
    name: "Cain Guevera",
    role: "Mechanical Lead",
    image: "/images/cain.jpg",
  },
  {
    name: "Arsh Gandhi",
    role: "",
    image: "/images/arsh.jpg",
  },
  {
    name: "Harpreet Gill",
    role: "",
    image: "/images/harpreet.jpg",
  },
  {
    name: "Jules Picache",
    role: "",
    image: "/images/jules.jpg",
  },
]


const programmingMembers = [
  {
    name: "Luca Flood",
    role: "Programming Lead",
    image: "/images/luca.png",
  },
   {
    name: "Ishaan Kumar",
    role: "",
    image: "/images/ishaank.jpg",
  },
  {
    name: "Adithi Murlidas",
    role: "",
    image: "/images/adithi.jpg",
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


const outreachMembers = [
  {
    name: "Daniel Zaki",
    role: "Outreach Lead",
    image: "/images/daniel.jpg",
  },
  {
    name: "Aiden Long",
    role: "Club Secratery",
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
            "radial-gradient(circle 1600px at 80% 15%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
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
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img src="/images/team2025.JPG" alt="Team pic" className="w-full h-full object-cover" />
                </div>
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
                      <Image
                        src={member.image || "/placeholder.svg"}
                        alt={member.name}
                        width={256}
                        height={256}
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
