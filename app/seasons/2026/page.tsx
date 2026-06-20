"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Trophy, Target, Cog, Zap, Camera, Cpu, Calendar, Award, FileText, Users } from "lucide-react"

export default function Season2026Page() {
  return (
    <div className="min-h-screen bg-black pt-24 pb-16">
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle 1200px at 50% 20%, rgba(13, 148, 137, 0.15) 0%, rgba(13, 148, 136, 0.2) 20%, rgba(13, 148, 137, 0) 40%, transparent 70%)",
        }}
      />
      <div className="relative pt-16 z-10 max-w-7xl mx-auto px-8 md:px-16 lg:px-24">
        <div className="text-center mb-16">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">2054-2026 Season</Badge>
          <h1 className="text-4xl md:text-5xl font-bold font-sans text-white mb-6">FTC Decode</h1>
          <p className="text-xl text-white/80 font-sans max-w-3xl mx-auto"> 
            Add description here
          </p>
        </div>

        <section className="mb-32">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans text-center">Our 2026 Team</h2>
          <div className="max-w-5xl mx-auto">
            <div className="aspect-video">
              <img
                src="/images/team2025.JPG"
                alt="Team Killer Instinct 2025-2026 Season"
                className="w-full h-full object-cover rounded-[20px]"
              />
            </div>
          </div>
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
                      Collect and shoot artifacts (wiffle balls) into a team goal
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Index artifacts in a specific order to score extra points
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Park both robots in a designated area for endgame points
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white mb-4 font-sans">Key Field Features</h3>
                  <ul className="space-y-3 text-white/80 font-sans">
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Two Depots with a ramp to store artifacts
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                      Artifacts in two colors: red and blue
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        Designated shooting areas: one close and one far
                    </li>
                    <li className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        Designated endgame parking areas
                    </li>
                  </ul>
                </div>
              </div>
            </CardContent>
          </Card>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Season Goals</h2>

          {/* Mobile Layout */}
          <div className="lg:hidden">
            {/* Robot Image First on Mobile */}
            <div className="mb-8">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans text-center">Competition Robot</h3>
              <div className="aspect-square max-w-md mx-auto">
                <img
                  src="/images/robot.jpg" //add new robot or 3d model here
                  alt="Competition Robot - Final Design"
                  className="w-full h-full object-cover rounded-[20px]"
                />
              </div>
            </div>

            {/* Goal Cards in Mobile Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Users className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white font-sans">Community</h3>
                  </div>
                  <p className="text-white/80 font-sans"> 
                    Maximize our community impact with our robotics.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <FileText className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white font-sans">Documentation</h3>
                  </div>
                  <p className="text-white/80 font-sans">
                  Document the engineering process of our robot with CAD.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cpu className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white font-sans">Optimization</h3>
                  </div>
                  <p className="text-white/80 font-sans">
                  Optimize our robot’s autonomous routines
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Cog className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-lg font-bold text-white font-sans">Reliability</h3>
                  </div>
                  <p className="text-white/80 font-sans">
                  Improve robot reliability throughout the season.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden lg:grid grid-cols-3 gap-6">
            {/* Top Row - Two Goals */}
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Users className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Community</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Maximize our community impact with our robotics.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <FileText className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Documentation</h3>
                </div>
                <p className="text-white/80 font-sans">
                Document the engineering process of our robot with CAD.
                </p>
              </CardContent>
            </Card>

            <div className="row-span-2 flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Competition Robot</h3>
              <div className="flex-grow">
                <div className="aspect-square">
                  <img
                    src="/images/robot.jpg"
                    alt="Competition Robot - Final Design"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cpu className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Optimization</h3>
                </div>
                <p className="text-white/80 font-sans">
                 Optimize our robot’s autonomous routines
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Cog className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white font-sans">Reliability</h3>
                </div>
                <p className="text-white/80 font-sans">
                  Improve robot reliability throughout the season.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>

        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Key Achievements</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Trophy className="w-12 h-12 text-yellow-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Cog className="w-12 h-12 text-cyan-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Zap className="w-12 h-12 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Camera className="w-12 h-12 text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Award className="w-12 h-12 text-orange-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Cpu className="w-12 h-12 text-blue-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Add key acheviements</h3>
                <p className="text-cyan-400 text-lg font-bold">100% Stat Here</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Brief description here.
                </p>
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
                  <li>• Add in bullet list of characteristics at each meet</li>
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
                  <li>• Add in bullet list of characteristics at each meet</li>
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
                <li>• Add in bullet list of characteristics at each meet</li>
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
                <li>• Add in bullet list of characteristics at each meet</li>
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
              <div className="flex-grow">
                <div className="aspect-video">
                  <img
                    src="/images/auton.png"
                    alt="60-Point Autonomous Development"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
            <div className="flex flex-col">
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Add in sensor pipeline descirption here</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 flex-grow">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="space-y-3 text-white/80 font-sans">
                    <p>
                      <strong className="text-cyan-400">Camera:</strong> Logitech C920x captures frames
                    </p>
                   
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Add in turret tracking description here</h3>
                <div className="space-y-3 text-white/80 font-sans">
                  <p>
                    <strong className="text-cyan-400">Physics:</strong> Motor torque → force conversion calculations
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
              <div className="grid md:grid-cols-3 gap-8 text-center"> //change ts to match last season results
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1st</div>
                  <p className="text-white/80 font-sans">League Placement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">16th</div>
                  <p className="text-white/80 font-sans">SoCal Regional Placement</p>
                </div>
                <div>
                  <div className="text-4xl font-bold text-cyan-400 mb-2">1st</div>
                  <p className="text-white/80 font-sans">Control Award Placement</p>
                </div> 
              </div>
              
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}
