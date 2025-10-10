"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function PortfolioGuide() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div className="relative">
        <div
          className="absolute inset-0 z-0"
          style={{
            background:
              "radial-gradient(circle 1600px at 10% 60%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
            minHeight: "100vh",
          }}
        />

        <div className="relative pt-16 z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Portfolio Guide</h1>
            <p className="text-lg text-white/80 font-sans max-w-3xl mx-auto">
              A comprehensive guide to creating an outstanding portfolio for your team. Follow these steps to showcase
              your work and tell your team's story effectively.
            </p>
          </div>
        </div>

        <section id="design" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Pick your design</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 flex items-center">
                <img 
                    src="/images/canva.png" 
                    className="w-full h-auto rounded-lg"
                 />
              </div>
              <div className="order-2 flex items-center">
                <div className="text-white/80 space-y-4 text-base">
                  <p>
                    Choose a platform to create your portfolio on such as{" "}
                        <span className="font-bold text-cyan-400">Canva</span> or{" "}
                        <span className="font-bold text-cyan-400">Adobe InDesign</span>. 
                    Once you've chosen your software, we recommend creating a color scheme and font that you'll keep consistent throughout your portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="plan" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Create a plan</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="text-white/80 text-base">
                  <p>
                    We prefer to begin by creating a template for what we want on each page of our portfolio. This means
                    we figure out what each page will be on, how many pages will be dedicated to build, code, etc… and
                    then we figure out how much text and pictures we want on each page. Make sure to{" "}
                    <span className="font-bold text-cyan-400">keep your text SHORT!!! </span> 
                    Not many people want to volunteer their time to read essays so keep it short and simple with a lot of descriptive photos.
                  </p>
                </div>
              </div>
              <div className="order-2">
                <img 
                    src="/images/portfolio-outline.png" 
                    className="w-full h-auto rounded-lg" 
                />
              </div>
            </div>
          </div>
        </section>

        <section id="pictures" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Pictures! A lot of them!</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <img 
                    src="/images/google-drive.png" 
                    className="w-full h-auto rounded-lg" 
                />
              </div>
              <div className="order-2">
                <div className="text-white/80 text-base">
                  <p>
                    <span className="font-bold text-cyan-400">Take pictures of everything</span> throughout your season.
                    Every meeting, every event, every checkpoint is important! You should include pictures of your
                    team's progression throughout the season in the portfolio. Your portfolio isn't just a place to show
                    your bot and systems but it should 
                    <span className="font-bold text-cyan-400"> tell a story  </span>
                    of a team that has put in the work to deserve the INSPIRE Award.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="proofread" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Proofread and Practice</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="text-white/80 text-base">
                  <p>
                    The worst thing that could happen during your presentation is looking like you have no idea you know
                    what you're talking about. Make sure you practice presenting and the material that judges{" "}
                    <span className="font-bold text-cyan-400">WILL BE ASKING QUESTIONS </span> 
                    about. Also make sure that
                    yours has no spelling or grammar issues in your portfolio. The last thing you want are the judges
                    pointing out grammar mistakes! Finally, make sure you know who's going to answer questions when the
                    judges start asking them. It's important your team doesn't speak over each other and that the person
                    who knows the most about the asked subject is the person who answers.
                  </p>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="/images/poster-team-photo.jpg"
                  className="w-2/3 h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="relative pt-16 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <div className="bg-gray-800/30 border border-white/20 rounded-lg p-8">
              <h3 className="text-2xl font-bold font-sans text-white mb-4">Need Any More Help?</h3>
              <p className="text-white/90 font-sans mb-6">
                If you need any more help or have any questions, feel free to reach out to us! We are always happy to
                help answer any questions you may have.
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
        </section>
      </div>
    </div>
  )
}
