"use client";

import { CardStack, CardStackItem } from "@/components/ui/card-stack";

const items: CardStackItem[] = [
  {
    id: 1,
    title: "AI & Machine Learning",
    description: "Predicting PCOS risk from clinical data",
    imageSrc: "/projects/pcos-app.jpeg",
    tags: ["Python", "ML", "Flask"],
    githubUrl: "https://github.com/Priyanka-Singh27/PCOS-Detection-using-ML",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 2,
    title: "Change Impact Analyzer",
    description: "Know exactly what breaks before you merge",
    imageSrc: "/projects/Ripple.png",
    tags: ["React", "FastAPI", "PostgreSQL", "Redis", "LLM"],
    githubUrl: "https://github.com/Priyanka-Singh27/Ripple-CIA",
    href: "https://github.com/Priyanka-Singh27",

  },
  {
    id: 3,
    title: "Full-Stack ML Engineering",
    description: "End-to-end automated model deployment",
    imageSrc: "/projects/Auto-ML.png",
    tags: ["Docker", "FastAPI", "Python"],
    githubUrl: "https://github.com/Priyanka-Singh27/AutoML-Pipeline",
    href: "https://github.com/Priyanka-Singh27",
  },
  {
    id: 4,
    title: "NLP & Deep Learning",
    description: "Real-time fake news & bias detection",
    imageSrc: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop",
    tags: ["React", "RoBERTa", "Chrome Extension"],
    href: "https://github.com/Priyanka-Singh27",

  },
  {
    id: 5,
    title: "Systems Programming",
    description: "Real-time OS simulation under exam load conditions",
    imageSrc: "/projects/os.jpeg",
    tags: ["C", "POSIX Threads", "ncurses", "OS Concepts"],
    githubUrl: "https://github.com/Priyanka-Singh27/exam-os-simulation",
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
          cardWidth={520}
          cardHeight={320}
          spreadDeg={60}
          activeScale={1.05}
          inactiveScale={0.92}
        />
      </div>
    </div>
  );
}
