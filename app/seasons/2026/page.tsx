"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Cog, Zap, Flower, Cpu, Calendar, CircleGauge, FileText, Users, LifeBuoy, CableCar, SquareArrowUpIcon } from "lucide-react"

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
                  Optimize our robot’s autonomous routines.
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
                 Optimize our robot’s autonomous routines.
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
          <h2 className="text-3xl font-bold text-white mb-8 font-sans">Robot Features</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Zap className="w-12 h-12 text-yellow-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Strongest FTC-Legal Servos</h3>
                <p className="text-cyan-400 text-lg font-bold">6V Servo Power Hub</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                6V servo power hub, instead of 4.8V control hubs used by other teams
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <CableCar className="w-12 h-12 text-cyan-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Compact Slide System</h3>
                <p className="text-cyan-400 text-lg font-bold">200lb Kevlar Strings</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                High-torque, hyper-compact aluminum pullies and kevlar strings
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <LifeBuoy className="w-12 h-12 text-green-400 mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">MEGA-NUM Wheels</h3>
                <p className="text-cyan-400 text-lg font-bold">64% Weight Decrease</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Aluminum 3D-printed wheels, custom-made in Fusion 360
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <SquareArrowUpIcon className="w-12 h-12 text-purple-400 mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Instant Intake System</h3>
                <p className="text-cyan-400 text-lg font-bold">0.17s per Artifact</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Rubber band roller with custom nylon spools, powered by a 1150 RPM motor
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <Flower className="w-12 h-12 text-orange-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Compact Extension Pulleys</h3>
                <p className="text-cyan-400 text-lg font-bold">Smallest Extension Pulleys Ever</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                The world's smallest extension pulleys; extremely strong with low volume
                </p>
              </CardContent>
            </Card>

            <Card className="group h-60 bg-white/10 hover:bg-white/30 transition-colors duration-300 backdrop-blur-sm border-white/20 text-center">
              <CardContent className="p-6 py-1 h-full flex flex-col items-center justify-evenly">
                <CircleGauge className="w-12 h-12 text-blue-400 mx-auto mb-4 transition-transform duration-300 group-hover:scale-90" />
                <h3 className="text-lg font-bold text-white font-sans">Tele-Op Auto Controls</h3>
                <p className="text-cyan-400 text-lg font-bold">3/3 Primary Functions</p>
                <p className="text-white/70 mb-0 font-sans text-sm overflow-hidden max-h-0 opacity-0 group-hover:max-h-10 group-hover:opacity-100 transition-all duration-300">
                Automatic aiming, automatic shooting, and automatic intake, to assist the driver
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        {/*i might make this a table, since in the portfolio the meets are a bunch of different timelines based on what part was being worked on -vishwa*/}
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
                  <li>• Slow intake time (2.37sec)</li>
                  <li>• Limitation: Only fit 1 artifact, no preloading artifacts</li>
                  <li>• Dual-roller design</li>
                  <li>• Problem: Intake system frequently broke down</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Meet 1-2 - Midseason Innovation</h3>
                  <Badge variant="outline" className="border-orange-400/50 text-orange-300">
                    Mid-Season
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                <li>• Near-instant intake time (0.17sec)</li>
                <li>• Could store up to 3 artifacts</li>
                <li>• Limitation: Slow servo</li>
                </ul>
              </CardContent>
            </Card>
            

            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  <Calendar className="w-6 h-6 text-cyan-400" />
                  <h3 className="text-xl font-bold text-white font-sans">Meet 3-ILT - Competitive Peak</h3>
                  <Badge variant="outline" className="border-green-400/50 text-green-300">
                    Peak Performance
                  </Badge>
                </div>
                <ul className="space-y-2 text-white/80 font-sans ml-9">
                <li>• Near-instant intake time (0.17sec)</li>
                <li>• Short, wide flap intake → no jamming</li>
                <li>• Could store up to 3 artifacts, with preloading</li>
                <li>• Fast servo for quick intake speeds</li>
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
              <h3 className="text-2xl font-bold text-white mb-6 font-sans">Sensors</h3>
              <Card className="bg-white/10 backdrop-blur-sm border-white/20 flex-grow">
                <CardContent className="p-6 h-full flex flex-col justify-center">
                  <div className="space-y-3 text-white/80 font-sans">
                    <p><strong className="text-cyan-400">Limelight:</strong> April Tag Detection</p>
                    <p><strong className="text-cyan-400">Logitech C920:</strong> Color Blobs</p>
                    <p><strong className="text-cyan-400">Color:</strong> Artifact Transfer</p>
                    <p><strong className="text-cyan-400">Proximity:</strong> Robot Pose</p>
                    <p><strong className="text-cyan-400">Encoders:</strong> Flywheel Velocity & Turret Position</p>
                   
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
          <div className="grid md:grid-cols-1 gap-8">
            <Card className="bg-white/10 backdrop-blur-sm border-white/20">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-white mb-4 font-sans">Turret Tracking</h3>
                <div className="space-y-3 text-white/80 font-sans">
                  <p><strong className="text-cyan-400">Kinematic Turret Tracking:</strong>Ensure the turret is facing the depot </p>
                  <p><strong className="text-cyan-400">Limelight Turret Tracking:</strong>Give us accurate tracking not affected by drift</p>
                  <p><strong className="text-cyan-400"> Camera tracking PIDF:</strong>Ensure exact precision </p>
                  <p><strong className="text-cyan-400"> Dual Tracking:</strong>If the robot velocity fall under 5 in /sec then the tracking will switch to limelight, otherwise it will always be kinematic.</p>
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
