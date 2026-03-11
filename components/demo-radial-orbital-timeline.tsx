"use client";

import { Calendar, Code, FileText, User, Clock, Terminal, MonitorSmartphone, BrainCircuit, ShieldCheck, Database } from "lucide-react";
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline";
import { Particles } from "@/components/ui/particles";

const timelineData = [
  {
    id: 1,
    title: "Backend Engineering",
    date: "Python, Node.js",
    content: "Building scalable APIs, microservices, and robust data pipelines to support complex system architectures.",
    category: "Development",
    icon: Terminal,
    relatedIds: [2, 5],
    status: "completed" as const,
    energy: 95,
  },
  {
    id: 2,
    title: "Frontend Engineering",
    date: "React, Next.js",
    content: "Crafting immersive, highly interactive user experiences with a rigorous focus on aesthetic perfection and performance.",
    category: "Design",
    icon: MonitorSmartphone,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 90,
  },
  {
    id: 3,
    title: "Machine Learning",
    date: "PyTorch, TensorFlow",
    content: "Training scalable AI models, optimizing neural networks, and deploying intelligent prediction pipelines.",
    category: "AI",
    icon: BrainCircuit,
    relatedIds: [2, 4],
    status: "in-progress" as const,
    energy: 85,
  },
  {
    id: 4,
    title: "System Architecture",
    date: "AWS, Docker",
    content: "Designing secure, available, and partition-tolerant distributed systems built for enterprise traffic.",
    category: "DevOps",
    icon: ShieldCheck,
    relatedIds: [1, 3],
    status: "completed" as const,
    energy: 80,
  },
  {
    id: 5,
    title: "Database Management",
    date: "PostgreSQL, MongoDB",
    content: "Engineering efficient schema models, indexing strategies, and complex relational or document-based queries.",
    category: "Data",
    icon: Database,
    relatedIds: [1, 4],
    status: "completed" as const,
    energy: 85,
  },
];

export default function RadialOrbitalTimelineDemo() {
  return (
    <div className="w-full relative min-h-screen pt-12 md:pt-0">
      <div className="absolute inset-0 z-0 pointer-events-none">
        <Particles quantity={400} className="h-full w-full" color="#ffffff" vx={0.1} vy={-0.1} />
      </div>
      <RadialOrbitalTimeline timelineData={timelineData} />
    </div>
  );
}
