"use client"

import { useState } from "react"
import { Sparkles, ArrowRight } from "lucide-react"
import { LoadingOverlay } from "@/components/ui/loading-overlay"
import { SplineSceneBasic } from "@/components/demo-spline"

export default function Home() {
  const [loadingComplete, setLoadingComplete] = useState(false)

  // Wait to change UI until loading effectively finishes for any dynamic content needs
  // The overlay handles its own content visibility.

  return (
    <div className="min-h-screen bg-neutral-950 text-neutral-50 selection:bg-neutral-800 selection:text-white">
      <LoadingOverlay onComplete={() => setLoadingComplete(true)}>
        
        <div className="relative min-h-screen flex flex-col justify-between">
          {/* Header */}
          <header className="p-8 flex justify-between items-center z-10">
            <div className="font-semibold text-xl tracking-tight flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-neutral-400" />
              PORTFOLIO
            </div>
            <nav className="hidden md:flex gap-8 text-sm font-medium text-neutral-400">
              <a href="#" className="hover:text-white transition-colors">Work</a>
              <a href="#" className="hover:text-white transition-colors">About</a>
              <a href="#" className="hover:text-white transition-colors">Contact</a>
            </nav>
          </header>

          {/* Main Hero Section */}
          <main className="flex-1 flex flex-col justify-center px-8 md:px-24 xl:px-32 z-10 pb-20">
            <h1 className="text-[clamp(4rem,10vw,12rem)] font-bold tracking-tighter leading-none mb-6">
              Hey.
            </h1>
            <div className="max-w-xl">
              <p className="text-xl md:text-2xl text-neutral-400 font-light leading-relaxed mb-12">
                I build digital experiences that combine powerful engineering with beautiful, interactive design.
              </p>
              <button className="group flex items-center gap-4 text-sm font-medium uppercase tracking-widest border border-neutral-800 rounded-full px-8 py-4 hover:bg-neutral-100 hover:text-neutral-950 transition-all duration-300">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
            </div>
          </main>

          {/* Decorative Background Element */}
          <div className="absolute top-0 right-0 w-full h-full md:w-2/3 pointer-events-none opacity-40">
            <img 
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=2000" 
              alt="Cyber abstract artwork" 
              className="w-full h-full object-cover rounded-bl-[100px] md:mask-image-[linear-gradient(to_right,transparent,black)] pointer-events-none"
              style={{ WebkitMaskImage: 'linear-gradient(to left, black, transparent)' }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-neutral-950 via-neutral-950/80 to-transparent mix-blend-multiply" />
          </div>

        </div>

        {/* 3D Demo Section */}
        <section className="px-8 md:px-24 xl:px-32 py-24 bg-black relative z-20">
          <SplineSceneBasic />
        </section>

      </LoadingOverlay>
    </div>
  )
}
