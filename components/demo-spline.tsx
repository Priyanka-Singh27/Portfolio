'use client'

import { SplineScene } from "@/components/ui/splite";
import { Card } from "@/components/ui/card"
import { Spotlight } from "@/components/ui/spotlight"
import { SpotlightCursor } from "@/components/ui/spotlight-cursor"

export function SplineSceneBasic() {
  return (
    <Card className="w-full h-full bg-black/[0.96] relative overflow-hidden flex flex-col md:flex-row border-none rounded-none group">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <SpotlightCursor size={400} />

      <div className="relative h-full w-full flex">
        {/* Floating Left content */}
        <div className="p-8 md:p-16 lg:pl-40 xl:pl-56 relative z-10 flex flex-col justify-center w-full md:w-[45%] pointer-events-none">
          <div className="pointer-events-auto">
            <h1 className="text-2xl md:text-4xl font-light text-neutral-400 tracking-tight leading-tight">
              Hello, I'm
              <br />
              <span className="text-4xl md:text-7xl lg:text-[6rem] font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 inline-block mt-2 tracking-tighter">
                PRIYANKA<br />SINGH
              </span>
            </h1>
            <p className="mt-6 md:mt-8 text-xl md:text-2xl text-neutral-300 font-light tracking-wide">
              A 2nd Year B. Tech CSE AIML Student.
            </p>
          </div>
        </div>

        {/* Canvas perfectly centered from the right */}
        <div className="absolute top-0 bottom-0 right-0 w-full md:w-[75vw] lg:w-[70vw] z-0">
          <SplineScene
            scene="https://prod.spline.design/kZDDjO5HuC9GJUM2/scene.splinecode"
            className="w-full h-full"
          />
        </div>
      </div>
    </Card>
  )
}
