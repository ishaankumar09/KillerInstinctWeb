"use client"
import { ArrowRight } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

export default function website_building() {
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
            <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">Website Building</h1>
            <p className="text-lg text-white/80 font-sans max-w-3xl mx-auto">
              A team website is a great way to showcase your team's achievements, share important information, and
              engage with your community. Here is a short and simple guide to help your team start building their own
              website.
            </p>
          </div>
        </div>

        <section id="Fundementals" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Before Building the Website</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1 flex items-center">
                <img 
                  src="/images/planning.jpg"
                  className="w-full h-auto rounded-lg" 
                />
              </div>
              <div className="order-2 flex items-center">
                <div className="text-white/80 space-y-4 text-base">
                  <p>
                    Before you start building your website, it's important to plan out what you want to achieve with it.
                  </p>
                  <ul className="space-y-3 ml-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-3 text-xl">•</span>
                      <span className="flex-1">
                        Do you want your website to act as a hub for your team to access information?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-3 text-xl">•</span>
                      <span className="flex-1">
                        Or do you want it to be a way to show off your achivments to sponsors and other teams?
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-3 text-xl">•</span>
                      <span className="flex-1">Maybe both?</span>
                    </li>
                  </ul>
                  <p>
                    Make sure to have all of this figured out before starting to build your website to make sure it
                    stays consistent and on track.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="Designing" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Design</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="text-white/80 text-base">
                  <p>When it comes to designing the website, think back to the purpose of the website from the first section. 
                    Your design should reflect this purpose and make it easier for your target audience to understand what you are trying to achive. 
                    Additionally you want to keep everything simple. Have consistent colors, fonts, and layouts throughout the site.
                    Tools like Figma can help you visualize your design before starting to build it and can help you save time.
                  </p>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="/images/figma.png"
                  className="w-full h-auto rounded-lg"
                />
              </div>
            </div>
          </div>
        </section>

        <section id="site-types" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">Choose a Type of Site</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <img
                  src="/images/web_tools.jpg"
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="order-2">
                <div className="text-white/80 text-base">
                  <p>
                    Once you have figured out the purpose and design of your website, how do you want to build it? There are a few
                    different options to choose from:
                  </p>
                  <ul className="space-y-3 ml-4 pt-4">
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-3 text-xl">•</span>
                      <span className="flex-1">
                        Custom Built: Building a website from scratch using HTML, CSS, and JavaScript. 
                        This option allows the most flexibility and customization, but requires more knowledge and time. 
                        We specifically used Next.js to build our site.
                      </span>
                    </li>
                    <li className="flex items-start">
                      <span className="text-teal-400 mr-3 text-xl">•</span>
                      <span className="flex-1">
                        Website Builders: Using platforms like Wix, Squarespace, or WordPress to create a website. 
                        Tools like these offer pre-designed templates and drag-and-drop functionality, making it easier for those with limited coding experience.
                      </span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="update" className="relative pt-10 pb-8 px-8 md:px-16 lg:px-24">
          <div className="max-w-8xl mx-auto">
            <div className="text-left mb-8">
              <h2 className="text-3xl font-bold font-sans text-white mb-6">After Building</h2>
            </div>
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-1">
                <div className="text-white/80 text-base">
                  <p>
                    After you have built your website, it's important to keep it updated with fresh content.
                    After meets and competitions, make sure to update your website with new photos, results, or progress on your robot so visitors (especially sponsors) know your team is active.
                    If your website was custom built, make sure you have a relaible way to host it. 
                    We specifically used Vercel to host our site for free, however other services like Cloudflare and Netlify are also great options.
                    You could even test out new features like APIs to display your team calendar, social media posts, and rankings automatically.
                  </p>
                </div>
              </div>
              <div className="order-2">
                <img
                  src="/images/vercel.png"
                  alt="Community & Impact"
                  className="w-full h-auto rounded-lg"
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
                If you need any more help or have any questions, feel free to reach out to us! We are always happy to help answer any questions you may have.
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
