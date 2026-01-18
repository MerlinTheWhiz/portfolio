import Image from "next/image";
import mediaxis from "@/public/mediaxis.png";
import portfolio from "@/public/portfolio.png";
import { ArrowUpRight, Github } from "lucide-react";

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: "MediAxis",
      description:
        "A hospital management system that streamlines patient records, appointments, billing, and staff workflows through a unified dashboard.",
      image: mediaxis,
      tags: ["React", "Django", "PostgreSQL", "Tailwind", "Framer Motion"],
      link: "#",
      github: "#",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "My personal portfolio showcasing selected projects, design experiments, and interactive UI with smooth animations.",
      image: portfolio,
      tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
      link: "#",
      github: "#",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-background flex justify-center items-center"
    >
      <div className="min-h-screen w-full relative bg-background-card/50 flex py-20 sm:py-30 justify-center px-6 lg:px-8">
        <div
          className="absolute inset-0 z-0 pointer-events-none"
          style={{
            backgroundImage: `
        linear-gradient(
          to right,
          var(--color-background-card) 1px,
          transparent 1px
        ),
        linear-gradient(
          to bottom,
          var(--color-background-card) 1px,
          transparent 1px
        ),
        radial-gradient(
          circle,
          color-mix(in srgb, var(--color-accent-primary) 35%, transparent) 1px,
          transparent 1px
        )
      `,
            backgroundSize: "20px 20px, 20px 20px, 20px 20px",
          }}
        />

        <div className="max-w-7xl w-full flex flex-col relative z-10">
          <div className="flex flex-col text-left mb-16">
            <span className="inline-block px-4 w-fit py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
              Featured Work
            </span>
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Selected <span className="text-accent-primary">Projects</span>
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
