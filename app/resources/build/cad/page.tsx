"use client"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"
import Link from "next/link"

export default function CadPage() {
  const cadVideos = [
    {
      title: "What is CAD?",
      description: "Learn what Computer Aided Design is and how it is used in robotics.",
      videoId: "iTCllQ1G3PA", 
    },
    {
      title: "Sketch Objects",
      description: "",
      videoId: "qFwJQCwVVME", 
    },
    {
      title: "Sketch Modifiers",
      description: "",
      videoId: "NWZpggDc56U", 
    },
    {
      title: "Fusion 360 Create Tab",
      description: "",
      videoId: "0C-VJJgl1jQ", 
    },
    {
      title: "Constraints Basics",
      description: "",
      videoId: "zRzo4sf-HCQ",
    },
    {
      title: "Constraints Strategies",
      description: "",
      videoId: "vJD2VY3_ado", 
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
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">CAD Tutorials</h1>
          <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
            Master Computer-Aided Design with videos from our{" "}
            <a
              href="https://www.youtube.com/@sshsroboticsclub8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-cyan-500 hover:text-cyan-400 underline transition-colors"
            >
              team channel 
            </a>
            . Learn everything from basic modeling to advanced robot design techniques.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
          {cadVideos.map((video) => {
            return (
              <div key={video.title} className="flex flex-col space-y-4">
                <div className="w-full aspect-video rounded-lg overflow-hidden bg-black/50">
                  <iframe
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${video.videoId}`}
                    title={video.title}
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full"
                  />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white font-sans mb-2">{video.title}</h2>
                  <p className="text-white/80 font-sans text-sm">{video.description}</p>
                </div>
              </div>
            )
          })}
        </div>

        <div className="max-w-4xl mx-auto text-center mt-16">
          <div className="bg-gray-800/30 border border-white/20 rounded-lg p-8">
            <h3 className="text-2xl font-bold font-sans text-white mb-4">Need Help Building Your Own?</h3>
            <p className="text-white/90 font-sans mb-6">
              If there is any issues that you are having that is not covered in these videos, 
              feel free to reach out to us
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
