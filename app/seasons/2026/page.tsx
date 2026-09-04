"use client"

import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Script from "next/script"
import { useEffect, useState } from "react"
import {
  ArrowRight,
  Boxes,
  CableCar,
  CircleGauge,
  Cog,
  Crosshair,
  ExternalLink,
  FileText,
  Flag,
  Flower,
  LifeBuoy,
  Radar,
  SquareArrowUpIcon,
  Target,
  Timer,
  Trophy,
  Users,
  Zap,
} from "lucide-react"

const headlineStats = [
  { value: "0.17s", label: "Intake per artifact", detail: "down from 2.37s at Meet 0" },
  { value: "3", label: "Artifacts stored", detail: "with preloading" },
  { value: "64%", label: "Lighter wheels", detail: "custom MEGA-NUM design" },
  { value: "1st", label: "Control Award", detail: "league placement" },
]

const challengePhases = [
  {
    icon: Target,
    title: "Scoring",
    points: [
      "Collect and shoot artifacts (wiffle balls) into a team goal",
      "Index artifacts in a specific order for bonus points",
      "Two launch zones — one close, one far",
    ],
  },
  {
    icon: Boxes,
    title: "The Field",
    points: [
      "Two depots with a ramp to store artifacts",
      "Artifacts come in two colors: red and blue",
      "Designated endgame parking areas",
    ],
  },
  {
    icon: Flag,
    title: "Endgame",
    points: [
      "Park both alliance robots in the designated area",
      "Position matters — the driver-assist handles aiming so parking comes first",
    ],
  },
]

const seasonGoals = [
  { icon: Users, title: "Community", text: "Maximize our community impact with our robotics." },
  { icon: FileText, title: "Documentation", text: "Document the engineering process of our robot with CAD." },
  { icon: CircleGauge, title: "Optimization", text: "Optimize our robot's autonomous routines." },
  { icon: Cog, title: "Reliability", text: "Improve robot reliability throughout the season." },
]

const robotFeatures = [
  {
    icon: SquareArrowUpIcon,
    color: "text-purple-400",
    stat: "0.17s",
    title: "Instant Intake System",
    text: "Rubber band roller with custom nylon spools, powered by a 1150 RPM motor.",
  },
  {
    icon: Zap,
    color: "text-yellow-400",
    stat: "6V",
    title: "Strongest FTC-Legal Servos",
    text: "A 6V servo power hub instead of the 4.8V control hubs used by other teams.",
  },
  {
    icon: LifeBuoy,
    color: "text-green-400",
    stat: "-64%",
    title: "MEGA-NUM Wheels",
    text: "Aluminum 3D-printed wheels, custom-made in Fusion 360.",
  },
  {
    icon: CableCar,
    color: "text-cyan-400",
    stat: "200lb",
    title: "Compact Slide System",
    text: "High-torque, hyper-compact aluminum pulleys running Kevlar strings.",
  },
  {
    icon: Flower,
    color: "text-orange-400",
    stat: "Smallest",
    title: "Compact Extension Pulleys",
    text: "The world's smallest extension pulleys — extremely strong with very low volume.",
  },
  {
    icon: CircleGauge,
    color: "text-blue-400",
    stat: "3 / 3",
    title: "Tele-Op Auto Controls",
    text: "Automatic aiming, shooting, and intake all assist the driver in-match.",
  },
]

const timeline = [
  {
    meet: "Meet 0",
    phase: "Foundation",
    accent: "border-cyan-400/50 text-cyan-300",
    dot: "bg-cyan-400",
    metric: "2.37s intake",
    wins: ["Dual-roller intake design brought online"],
    limits: ["Only fit 1 artifact, no preloading", "Intake system frequently broke down"],
  },
  {
    meet: "Meet 1–2",
    phase: "Midseason Innovation",
    accent: "border-orange-400/50 text-orange-300",
    dot: "bg-orange-400",
    metric: "0.17s intake",
    wins: ["Near-instant intake — a 14x speedup", "Storage capacity raised to 3 artifacts"],
    limits: ["Servo speed became the new bottleneck"],
  },
  {
    meet: "Meet 3 – ILT",
    phase: "Competitive Peak",
    accent: "border-green-400/50 text-green-300",
    dot: "bg-green-400",
    metric: "0.17s + preload",
    wins: [
      "Short, wide flap intake eliminated jamming",
      "3-artifact storage with preloading",
      "Fast servo to match the intake speed",
    ],
    limits: [],
  },
]

const sensors = [
  { name: "Limelight", use: "April Tag detection" },
  { name: "Logitech C920", use: "Color blob tracking" },
  { name: "Color", use: "Artifact transfer" },
  { name: "Proximity", use: "Robot pose" },
  { name: "Encoders", use: "Flywheel velocity & turret position" },
]

const turretTracking = [
  {
    title: "Kinematic Tracking",
    text: "Math-driven aiming that keeps the turret facing the depot at any robot velocity.",
  },
  {
    title: "Limelight Tracking",
    text: "April Tag vision gives accurate tracking that isn't affected by odometry drift.",
  },
  {
    title: "Camera PIDF",
    text: "A tuned PIDF loop closes the last few degrees for exact precision.",
  },
  {
    title: "Dual Tracking Handoff",
    text: "Below 5 in/sec the turret switches to Limelight; above it, kinematic tracking takes over.",
  },
]

function SectionHeading({
  eyebrow,
  title,
  subtitle,
  center = false,
}: {
  eyebrow: string
  title: string
  subtitle?: string
  center?: boolean
}) {
  return (
    <div className={`mb-8 ${center ? "text-center" : ""}`}>
      <p className="text-sm font-semibold uppercase tracking-[0.2em] text-cyan-400 font-sans mb-2">{eyebrow}</p>
      <h2 className="text-3xl font-bold text-white font-sans">{title}</h2>
      {subtitle && (
        <p className={`text-white/70 font-sans mt-3 max-w-2xl ${center ? "mx-auto" : ""}`}>{subtitle}</p>
      )}
    </div>
  )
}

export default function Season2026Page() {

  const [showContent, setShowContent] = useState(false)
  const [mounted, setMounted] = useState(false)
  
    useEffect(() => {
      setMounted(true)
      const timer = setTimeout(() => {
        setShowContent(true)
      }, 300)
  
      return () => clearTimeout(timer)
    }, [])
  

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
        {/* Hero */}
        <section className="text-center mb-14">
          <Badge className="mb-4 bg-cyan-500/20 text-cyan-300 border-cyan-400/30">2025-2026 Season</Badge>
          <h1 className="text-4xl md:text-6xl font-bold font-sans text-white mb-4">FTC Decode</h1>
          <p className="text-lg md:text-xl text-cyan-400 font-sans font-semibold mb-6">
            Our answer: Shock Blue
          </p>
          <p className="text-lg text-white/80 font-sans max-w-3xl mx-auto">
            Decode asks alliances to launch artifacts into a team goal, chain them in the right order for bonus points,
            and park before the buzzer. We built a turret-based shooter around a 0.17-second intake, dual kinematic and
            vision aiming, and tele-op automation that lets the driver focus on the field instead of the shot.
          </p>

        </section>

        {/* Team */}
        <section className="mb-24">
          <SectionHeading eyebrow="" title="The People Behind Shock Blue" center />
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

        {/* Challenge */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="The Challenge"
            title="How Decode Is Played"
            subtitle="Every design decision below traces back to one of these three phases."
          />
          <div className="grid md:grid-cols-3 gap-6">
            {challengePhases.map((phase) => (
              <Card key={phase.title} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <phase.icon className="w-6 h-6 text-cyan-400" />
                    <h3 className="text-xl font-bold text-white font-sans">{phase.title}</h3>
                  </div>
                  <ul className="space-y-3 text-white/80 font-sans text-sm">
                    {phase.points.map((point) => (
                      <li key={point} className="flex items-start gap-3">
                        <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                        {point}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* The robot + season goals */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="The Build"
            title="Shock Blue"
            subtitle="One robot, four season-long goals it had to satisfy."
          />
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-2">
              <div className="aspect-square max-w-sm mx-auto lg:max-w-none">
                
                {/* Image Code - No Longer in Use:
                <img
                  src="/images/shock_blue.png"
                  alt="Shock Blue - our 2025-2026 competition robot"
                  className="w-full h-full object-cover rounded-[20px]"
                />
                */}

                { /*3d model*/ }
                <Script
                type="module"
                src="https://ajax.googleapis.com/ajax/libs/model-viewer/3.3.0/model-viewer.min.js"
                strategy="afterInteractive"
                />
                {mounted && (
                // @ts-ignore - model-viewer is a custom web component
                <model-viewer
                src="/models/robot.glb"
                alt="3D model of the robot"
                camera-controls
                touch-action="pan-y"
                auto-rotate
                auto-rotate-delay="0"
                rotation-per-second="20deg"
                interaction-prompt="none"
                
                exposure="0.7"
                shadow-intensity="1"
                style={{ width: "100%", height: "480px", backgroundColor: "transparent" }}
                />
                )}
              </div>
            </div>
            <div className="lg:col-span-3 grid sm:grid-cols-2 gap-4">
              {seasonGoals.map((goal) => (
                <Card key={goal.title} className="bg-white/10 backdrop-blur-sm border-white/20">
                  <CardContent className="p-5">
                    <div className="flex items-center gap-3 mb-2">
                      <goal.icon className="w-5 h-5 text-cyan-400" />
                      <h3 className="text-base font-bold text-white font-sans">{goal.title}</h3>
                    </div>
                    <p className="text-white/70 font-sans text-sm">{goal.text}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Robot features */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Engineering"
            title="What Makes It Fast"
            subtitle="Six subsystems we designed, printed, or over-built ourselves."
          />
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {robotFeatures.map((feature) => (
              <Card
                key={feature.title}
                className="bg-white/10 hover:bg-white/[0.16] transition-colors duration-300 backdrop-blur-sm border-white/20"
              >
                <CardContent className="p-6">
                  <div className="flex items-start justify-between gap-4 mb-4">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                    <span className="text-2xl font-bold text-cyan-400 font-sans leading-none">{feature.stat}</span>
                  </div>
                  <h3 className="text-lg font-bold text-white font-sans mb-2">{feature.title}</h3>
                  <p className="text-white/70 font-sans text-sm">{feature.text}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Timeline */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Iteration"
            title="Intake, Meet by Meet"
            subtitle="The intake was our bottleneck all season. Here's how it got 14x faster."
          />
          <div className="relative pl-8 md:pl-10">
            <div className="absolute left-[7px] md:left-[9px] top-2 bottom-2 w-px bg-white/20" />
            <div className="space-y-6">
              {timeline.map((stage) => (
                <div key={stage.meet} className="relative">
                  <div
                    className={`absolute -left-8 md:-left-10 top-6 w-4 h-4 rounded-full ${stage.dot} ring-4 ring-black`}
                  />
                  <Card className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-6">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <h3 className="text-xl font-bold text-white font-sans">{stage.meet}</h3>
                        <Badge variant="outline" className={stage.accent}>
                          {stage.phase}
                        </Badge>
                        <span className="ml-auto inline-flex items-center gap-2 text-cyan-400 font-sans font-bold">
                          <Timer className="w-4 h-4" />
                          {stage.metric}
                        </span>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-x-8 gap-y-2">
                        <ul className="space-y-2 text-white/80 font-sans text-sm">
                          {stage.wins.map((win) => (
                            <li key={win} className="flex items-start gap-2">
                              <span className="text-green-400 leading-5">+</span>
                              {win}
                            </li>
                          ))}
                        </ul>
                        <ul className="space-y-2 text-white/60 font-sans text-sm">
                          {stage.limits.map((limit) => (
                            <li key={limit} className="flex items-start gap-2">
                              <span className="text-orange-400 leading-5">–</span>
                              {limit}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </CardContent>
                  </Card>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Software */}
        <section className="mb-24">
          <SectionHeading
            eyebrow="Software"
            title="Aiming Without the Driver"
            subtitle="Sensor fusion, a tuned turret loop, and an autonomous routine built on top of both."
          />

          <div className="grid lg:grid-cols-2 gap-8 mb-10">
            <div className="flex flex-col">
              <div className="flex items-center gap-3 mb-4">
                <Crosshair className="w-6 h-6 text-cyan-400" />
                <h3 className="text-xl font-bold text-white font-sans">Turret Tracking</h3>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {turretTracking.map((item) => (
                  <Card key={item.title} className="bg-white/10 backdrop-blur-sm border-white/20">
                    <CardContent className="p-5">
                      <h4 className="text-cyan-400 font-bold font-sans text-sm mb-2">{item.title}</h4>
                      <p className="text-white/75 font-sans text-sm">{item.text}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-xl font-bold text-white mb-4 font-sans">Autonomous Development</h3>
              <div className="flex-grow">
                <div className="h-5/6 w-5/6">
                  <img
                    src="/images/2026_auton.png"
                    alt="Autonomous routine development"
                    className="w-full h-full object-cover rounded-[20px]"
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="flex items-center gap-3 mb-4">
            <Radar className="w-6 h-6 text-cyan-400" />
            <h3 className="text-xl font-bold text-white font-sans">Sensor Suite</h3>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {sensors.map((sensor) => (
              <Card key={sensor.name} className="bg-white/10 backdrop-blur-sm border-white/20">
                <CardContent className="p-5">
                  <h4 className="text-cyan-400 font-bold font-sans text-sm mb-2">{sensor.name}</h4>
                  <p className="text-white/75 font-sans text-sm">{sensor.use}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Results */}
        <section>
          <SectionHeading eyebrow="Results" title="Season Results" />
          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardContent className="p-8">
              <div className="flex flex-col md:flex-row items-center gap-8">
                <div className="flex items-center gap-5">
                  <Trophy className="w-14 h-14 text-yellow-400 flex-shrink-0" />
                  <div>
                    <div className="text-4xl font-bold text-cyan-400 font-sans">1st</div>
                    <p className="text-white font-sans font-semibold">Control Award Placement</p>
                  </div>
                </div>
                <p className="text-white/75 font-sans md:border-l md:border-white/15 md:pl-8">
                  Recognized for the work above — dual kinematic and Limelight turret tracking, a five-sensor pose and
                  transfer suite, and tele-op automation covering all three of the robot's primary functions.
                </p>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  )
}