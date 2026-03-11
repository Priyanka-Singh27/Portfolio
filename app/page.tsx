"use client"

import { useState } from "react"
import { ArrowRight, Github, Linkedin } from "lucide-react"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { Spotlight } from "@/components/ui/spotlight"
import { SplineSceneBasic } from "@/components/demo-spline"
import { EvervaultCardDemo } from "@/components/demo-evervault"
import CardStackDemoPage from "@/components/demo-card-stack"

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  // Wait to change UI until loading effectively finishes for any dynamic content needs
  // The overlay handles its own content visibility.

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <LoadingOverlay onComplete={() => setLoadingComplete(true)}>

        {/* FIRST SEGMENT: 100vh Full Screen */}
        <section className="w-full h-screen bg-black relative z-10">

          {/* Top Left Logo/Name */}
          <div className="absolute top-0 left-0 p-8 md:p-12 z-50 pointer-events-auto">
            <a href="#" className="text-xl md:text-2xl font-bold tracking-tighter text-white flex items-center gap-2 group">
              priyanka<span className="text-neutral-500">.dev</span>
            </a>
          </div>

          {/* Centered Email */}
          <div className="hidden md:flex absolute top-0 left-1/2 -translate-x-1/2 p-8 md:p-12 z-50 pointer-events-auto items-center">
            <a href="mailto:singhpriyanka272005@gmail.com" className="text-sm font-light text-neutral-400 tracking-wide hover:text-white transition-colors">
              singhpriyanka272005@gmail.com
            </a>
          </div>

          {/* Fixed Navigation Header */}
          <header className="absolute top-0 right-0 p-8 md:p-12 z-50 pointer-events-auto">
            <nav className="flex gap-12 md:gap-16 text-base md:text-lg lg:text-xl font-medium text-neutral-300">
              <a href="#about" className="hover:text-white transition-colors relative group">
                About
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#projects" className="hover:text-white transition-colors relative group">
                Projects
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
              </a>
              <a href="#contact" className="hover:text-white transition-colors relative group">
                Contact
                <span className="absolute -bottom-1 left-0 w-0 h-px bg-white transition-all group-hover:w-full"></span>
              </a>
            </nav>
          </header>

          {/* Fixed Social Links Bottom Left */}
          <div className="absolute bottom-0 left-0 p-8 md:p-12 z-50 pointer-events-auto">
            <div className="flex flex-col gap-6 items-center">
              {/* Github */}
              <a
                href="https://github.com/Priyanka-Singh27"
                target="_blank"
                rel="noreferrer"
                className="relative group p-2.5"
              >
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
                <Github className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 transition-all duration-300 group-hover:text-white group-hover:scale-110 relative z-10" />
              </a>

              {/* LinkedIn */}
              <a
                href="#"
                target="_blank"
                rel="noreferrer"
                className="relative group p-2.5"
              >
                <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 scale-50 transition-all duration-300 ease-out group-hover:opacity-100 group-hover:scale-100" />
                <Linkedin className="w-5 h-5 md:w-6 md:h-6 text-neutral-400 transition-all duration-300 group-hover:text-white group-hover:scale-110 relative z-10" />
              </a>
            </div>
          </div>

          {/* 3D Spline Canvas */}
          <SplineSceneBasic />
        </section>

        {/* SECOND SEGMENT: Evervault Card */}
        <section id="about" className="w-full min-h-screen bg-black flex flex-col md:flex-row items-center justify-center py-24 px-8 md:px-24 relative z-10 overflow-hidden">

          <div className="w-full md:w-1/2 flex justify-center items-center relative z-10">
            <EvervaultCardDemo />
          </div>
          <div className="w-full md:w-1/2 flex flex-col justify-center mt-12 md:mt-0 md:pl-16">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight">
              About Me
            </h2>
            <p className="mt-8 text-2xl text-neutral-300 font-light leading-relaxed max-w-xl">
              I'm a second-year CS (AI & ML) student at VIT Pune with a CGPA of 9.25, who enjoys solving problems and building things that make a difference. I like understanding how things work, breaking them down and rebuilding them better. Outside of code, I sketch and design — so I tend to care a lot about how things look and feel, not just how they work. I'm comfortable working alone or in a team.
            </p>
          </div>
        </section>

        {/* THIRD SEGMENT: Card Stack Desktop (Projects) */}
        <section id="projects" className="w-full min-h-screen bg-black flex flex-col items-center justify-center py-24 px-8 md:px-24 relative z-10 overflow-hidden">
          <div className="text-center mb-16 relative z-10">
            <h2 className="text-4xl md:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 tracking-tight">
              Projects
            </h2>
          </div>
          {/* Card Stack Centered */}
          <div className="w-full max-w-4xl flex justify-center items-center relative z-10">
            <CardStackDemoPage />
          </div>
        </section>

      </LoadingOverlay>
    </div>
  )
}
