"use client";

import Image from "next/image";
import Link from "next/link";
import mediaxis from "@/public/mediaxis.png";
import portfolio from "@/public/portfolio.png";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";

const Projects = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  const projects = [
    {
      id: 1,
      title: "MediAxis",
      description:
        "A hospital management system that streamlines patient records, appointments, billing, and staff workflows through a unified dashboard.",
      image: mediaxis,
      tags: ["React", "Django", "PostgreSQL", "Tailwind", "Framer Motion"],
      link: "https://mediaxis-blue.vercel.app/",
      github: "https://github.com/MerlinTheWhiz/mediaxis",
      featured: true,
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "My personal portfolio showcasing selected projects, design experiments, and interactive UI with smooth animations.",
      image: portfolio,
      tags: ["Next.js", "Tailwind", "TypeScript", "Framer Motion"],
      link: "https://michaelanokam.vercel.app/",
      github: "https://github.com/MerlinTheWhiz/portfolio",
      featured: true,
    },
  ];

  return (
    <section
      id="projects"
      className="relative bg-background py-20 sm:py-30 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-col relative z-10 px-6 ">
        <div className="flex flex-col text-left mb-16">
          <span className="inline-block px-4 w-fit py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
            Featured Work
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Selected <span className="text-accent-primary">Projects</span>
          </h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
          {projects
            .filter((p) => p.featured)
            .map((project) => (
              <div
                key={project.id}
                onMouseEnter={() => setHoveredProject(project.id)}
                onMouseLeave={() => setHoveredProject(null)}
                className="group relative rounded-3xl overflow-hidden border transition-all duration-500
                 bg-background-card border-border-default hover:border-accent-primary/40 
                  dark:hover:border-accent-primary/40 p-6"
              >
                <div className="aspect-10/5 overflow-hidden rounded-2xl mb-6">
                  <Image
                    src={project.image}
                    alt={project.title}
                    className={`w-full h-full object-cover transition-transform duration-500 ${
                      hoveredProject === project.id ? "scale-110" : "scale-100"
                    }`}
                  />
                </div>

                <div className="">
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-white/5 text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                  <p className="line-clamp-2 mb-6 text-text-muted">
                    {project.description}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
                    >
                      View Project <ArrowUpRight size={16} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full transition-colors bg-gray-100 dark:bg-white/5 hover:bg-gray-200 dark:hover:bg-white/10"
                    >
                      <LuGithub size={18} className="text-text-muted" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
        </div>
        <Link href="/projects" className="w-fit mx-auto">
          <span className="flex font-semibold group rounded-full gap-2 bg-accent-primary/5 dark:bg-accent-primary/10 
          hover:bg-accent-primary/10 hover:dark:bg-accent-primary/20 border-2 border-accent-primary 
          text-accent-primary px-8 py-4 ease-in-out md:hover:scale-102 transition-all duration-300
          justify-center items-center">
            View All Projects <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"/>
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
