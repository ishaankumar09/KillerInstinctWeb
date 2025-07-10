"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Cog, Zap, Camera, Cpu, Calendar, Award } from "lucide-react"

export default function Season2025Page() {
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
        {/* Header */}
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">2024-2025 Season</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">FTC Into the Deep</h1>
          <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto">
            Our most successful season yet, featuring advanced autonomous programming, computer vision, and a
            revolutionary lift system that achieved our highest autonomous score in team history.
          </p>
        </div>

        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans text-center">Our Championship Team</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden max-w-5xl mx-auto">
            <CardContent className="p-0">
              <div className="aspect-video bg-white/5 flex items-center justify-center">
                <img
                  src="/images/team-pic.png"
                  alt="Team Killer Instinct 2024-2025 Season"
                  className="w-full h-full object-cover"
                />
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Challenge Overview</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-sans">Game Objectives</h3>
                  <ul className="space-y-3 text-white/80 font-sans">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Collect and deliver colored specimens (blocks)
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Place specimens into submersible structure at specific heights
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Perform autonomous scoring during 30-second pre-programmed phase
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Climb rungs for endgame points (up to 3 levels high)
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-sans">Key Field Features</h3>
                  <ul className="space-y-3 text-white/80 font-sans">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Submersible structure with low, mid, and high clip points
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Specimens in three team colors: red, blue, yellow
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      High basket goals for placement
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Hanging bars for robot ascent and climb-based points
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Season Goals</h2>
          <div className="grid grid-cols-3 gap-6">
            {/* Top Row - Two Goals */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Target className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Improve Knowledge Transfer</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Encourage multi-member collaboration on core subsystems and reduce dependency on individual
                  contributors.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Camera className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Utilize Odometry & Computer Vision</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Move beyond encoder-only navigation by integrating RoadRunner and OpenCV for vision-assisted
                  autonomous targeting.
                </p>
              </CardContent>
            </Card>

            <div className="row-span-2 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Competition Robot</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden flex-grow">
                <CardContent className="p-0 h-full">
                  <div className="aspect-square bg-white/5 flex items-center justify-center h-full">
                    <img
                      src="/placeholder.svg?height=400&width=400"
                      alt="Competition Robot - Final Design"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Strengthen Autonomous Strategy</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Create a consistent multi-specimen autonomous program reaching 60+ point thresholds.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cog className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Maximize Lift Capability</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Build a strong, stable lift system capable of reaching high baskets and supporting full 3rd-level
                  ascent.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">Highest Autonomous Score</h3>
                <p className="text-cyan-400 text-2xl font-bold mb-2">60 Points</p>
                <p className="text-white/70 font-sans text-sm">3-specimen autonomous program</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Cog className="w-12 h-12 text-cyan-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">Custom Lift System</h3>
                <p className="text-cyan-400 text-lg font-bold mb-2">Kevlar Strings</p>
                <p className="text-white/70 font-sans text-sm">Dual-string mechanism with tent tensioners</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-green-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">RoadRunner Integration</h3>
                <p className="text-cyan-400 text-lg font-bold mb-2">3-Pod Odometry</p>
                <p className="text-white/70 font-sans text-sm">Spline navigation system</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Camera className="w-12 h-12 text-purple-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">Computer Vision</h3>
                <p className="text-cyan-400 text-lg font-bold mb-2">OpenCV</p>
                <p className="text-white/70 font-sans text-sm">Auto-alignment claw system</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">3rd-Level Climb</h3>
                <p className="text-cyan-400 text-lg font-bold mb-2">Spring-Loaded</p>
                <p className="text-white/70 font-sans text-sm">Idle hooks for endgame ascent</p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6">
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4" />
                <h3 className="text-lg font-bold text-white mb-2 font-sans">Physics-Based Design</h3>
                <p className="text-cyan-400 text-lg font-bold mb-2">Torque Equations</p>
                <p className="text-white/70 font-sans text-sm">Lift weight modeling</p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Development Timeline</h2>
          <div className="space-y-6">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Meet 0 - Foundation</h3>
                  <Badge variant="outline" className="border-cyan-400/50 text-cyan-300">
                    Early Season
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                  <li>• Basic Misumi slide lift with paracord string</li>
                  <li>• Claw had no auto-close, required manual driver alignment</li>
                  <li>• Holonomic drive train with basic vector control</li>
                  <li>• Limitations: No hanging capability, fraying string, unstable grip</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Meet 1 - Major Overhaul</h3>
                  <Badge variant="outline" className="border-yellow-400/50 text-yellow-300">
                    Mid Season
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                  <li>• Switched to 200 lb Kevlar string with improved spool geometry</li>
                  <li>• Added tent tensioner system for constant string tension</li>
                  <li>• Dual-string (up/down) mechanics improved hang potential</li>
                  <li>• Issue: Down-pull string still detached mid-match</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Meet 2-3 - Midseason Innovation</h3>
                  <Badge variant="outline" className="border-orange-400/50 text-orange-300">
                    Innovation Phase
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                  <li>• Added second set of Misumi slides for more vertical reach</li>
                  <li>• Proximity sensor enabled automatic claw closure</li>
                  <li>• Began RoadRunner research and integration</li>
                  <li>• Added yaw-axis wrist rotation and mounted camera</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Post-ILT - Competitive Peak</h3>
                  <Badge variant="outline" className="border-green-400/50 text-green-300">
                    Peak Performance
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                  <li>• Full RoadRunner + RRPathGen implementation</li>
                  <li>• 3-pod odometry for high-precision spline movement</li>
                  <li>• Achieved autonomous clip of 3 specimens, fully independent</li>
                  <li>• Finalized idle hook climbing system for consistent 3rd-level ascent</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Technical Innovations</h2>
          <div className="grid lg:grid-cols-2 gap-12 mb-8">
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Autonomous Development</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 overflow-hidden flex-grow">
                <CardContent className="p-0 h-full">
                  <div className="aspect-video bg-white/5 flex items-center justify-center">
                    <img
                      src="/images/auton.png"
                      alt="60-Point Autonomous Development"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardContent>
              </Card>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Computer Vision Pipeline</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 flex-grow">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="space-y-3 text-white/80 font-sans">
                    <p>
                      <strong className="text-cyan-400">Camera:</strong> Logitech C920x captures frames
                    </p>
                    <p>
                      <strong className="text-cyan-400">Processing:</strong> RGB → HSV color filtering
                    </p>
                    <p>
                      <strong className="text-cyan-400">Detection:</strong> Gaussian blur + Suzuki-Abe contours
                    </p>
                    <p>
                      <strong className="text-cyan-400">Alignment:</strong> Auto-align button (Y) for in-match
                      correction
                    </p>
                    <p>
                      <strong className="text-cyan-400">Result:</strong> Reduced driver error, aligned claw in &lt; 1
                      second
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Lift Mechanism Engineering</h3>
                <div className="space-y-3 text-white/80 font-sans">
                  <p>
                    <strong className="text-cyan-400">Physics:</strong> Motor torque → force conversion calculations
                  </p>
                  <p>
                    <strong className="text-cyan-400">Materials:</strong> 200 lb Kevlar strings with tent tensioners
                  </p>
                  <p>
                    <strong className="text-cyan-400">Climbing:</strong> Spring-loaded idle hooks for 3-level ascent
                  </p>
                  <p>
                    <strong className="text-cyan-400">Control:</strong> Dual-string mechanism with optimal pivot
                    placement
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <section>
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Season Results</h2>
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="grid md:grid-cols-3 gap-8 text-center">
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1st</div>
                  <p className="text-white/80 font-sans">League Placement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">16th</div>
                  <p className="text-white/80 font-sans">ILT Placement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">60</div>
                  <p className="text-white/80 font-sans">Highest Autonomous Score</p>
                </div>
              </div>
              <div className="mt-8 text-center">
                <p className="text-xl text-white/90 font-sans">
                  Our most technically advanced and successful season, featuring groundbreaking innovations in
                  autonomous programming, computer vision, and mechanical engineering.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
