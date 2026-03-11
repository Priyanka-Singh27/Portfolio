'use client'

/**
 * @author: @emerald-ui
 * @description: A 3D marquee component that rotates images in a 3D space.
 * @version: 1.0.0
 * @date: 2026-02-12
 * @license: MIT
 * @website: https://emerald-ui.com
 */
import { motion } from 'framer-motion'
import { clsx } from 'clsx'
import { twMerge } from 'tailwind-merge'

function cn(...inputs: any[]) { return twMerge(clsx(inputs)) }

interface ThreeDMarqueeProps {
  images?: string[]
  className?: string
}

const defaultImages = [
  '/gallery/drawing1.jpeg',
  '/gallery/drawing2.jpeg',
  '/gallery/food1.jpeg',
  '/gallery/food2.jpeg',
  '/gallery/photo1.jpeg',
  '/gallery/drawing1.jpeg',
  '/gallery/drawing2.jpeg',
  '/gallery/food1.jpeg',
  '/gallery/food2.jpeg',
  '/gallery/photo1.jpeg',
  '/gallery/drawing1.jpeg',
  '/gallery/drawing2.jpeg',
]

const ThreeDMarquee = ({
  images = defaultImages,
  className,
}: ThreeDMarqueeProps) => {
  const chunkSize = Math.ceil(images.length / 3)
  const chunks = Array.from({ length: 3 }, (_, colIndex) => {
    const start = colIndex * chunkSize
    return images.slice(start, start + chunkSize)
  })

  return (
    <div
      className={cn(
        'mx-auto block h-[35rem] w-full overflow-hidden rounded-md max-xl:h-[30rem] max-sm:h-[25rem]',
        className
      )}
    >
      <div className='flex h-full w-full items-center justify-center'>
        <div className='aspect-square size-[45rem] shrink-0 scale-[1.35] max-xl:size-full max-xl:scale-[1.10] max-sm:scale-[1.30]'>
          <div
            style={{
              transform: 'rotateX(45deg) rotateY(0deg) rotateZ(45deg)',
              transformStyle: 'preserve-3d'
            }}
            className='relative top-0 right-[-55%] grid h-full w-full origin-top-left grid-cols-3 gap-5 max-xl:-top-30 max-xl:right-[-45%] max-sm:top-0 max-sm:gap-2'
          >
            {chunks.map((subarray, colIndex) => (
              <motion.figure
                animate={{ y: colIndex % 2 === 0 ? 60 : -60 }}
                transition={{
                  duration: colIndex % 2 === 0 ? 10 : 15,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  ease: "linear"
                }}
                key={colIndex + 'marquee'}
                className='flex flex-col items-start gap-6 max-sm:gap-3'
              >
                {subarray.map((src, imageIndex) => (
                  <div className='relative w-full aspect-[4/3]' key={imageIndex + src}>
                    <img
                      className='absolute inset-0 h-full w-full rounded-lg bg-neutral-100 object-cover shadow-2xl shadow-neutral-900/50 select-none dark:bg-neutral-900'
                      src={src}
                      draggable={false}
                      alt={`Image ${imageIndex + 1}`}
                    />
                  </div>
                ))}
              </motion.figure>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ThreeDMarquee
