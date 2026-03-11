"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Developing intelligent models and automated systems",
    imageSrc: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 2,
    title: "Full-Stack Development",
    description: "Building end-to-end web applications with React and Next.js",
    imageSrc: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=2070&auto=format&fit=crop",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 3,
    title: "Data Visualization",
    description: "Transforming complex datasets into actionable insights",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 4,
    title: "Secure Architecture",
    description: "Designing robust systems built for scale and security",
    imageSrc: "https://images.unsplash.com/photo-1618477247222-ac60c6470d14?q=80&w=2070&auto=format&fit=crop",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 5,
    title: "Problem Solving",
    description: "Approaching complex challenges with a methodical mindset",
    imageSrc: "https://images.unsplash.com/photo-1531297122534-8fa12def1114?q=80&w=2070&auto=format&fit=crop",
    href: "https://github.com/Priyanka-Singh27",
  },
];

export default function CardStackDemoPage() {
  return (
    <div className="w-full">
      <div className="mx-auto w-full max-w-4xl p-2 md:p-8">
        <CardStack
          items={items}
          initialIndex={0}
          autoAdvance
          intervalMs={2000}
          pauseOnHover
          showDots
          cardWidth={600}
          cardHeight={400}
          spreadDeg={60}
          activeScale={1.05}
          inactiveScale={0.92}
        />
      </div>
    </div>
  );
}
