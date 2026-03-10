import Image from "next/image";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";

export default function Projects() {
  return (
    <main className="flex flex-col relative bg-background py-20 sm:py-30 justify-center items-center px-16 sm:items-start">
      <div className="grid lg:grid-cols-2 gap-8 mb-16 max-w-6xl mx-auto">
        {projects
          .filter((p) => p.featured)
          .map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl overflow-hidden border transition-all duration-500
                         bg-background-card border-border-default hover:border-accent-primary/40 
                          dark:hover:border-accent-primary/40 p-6"
            >
              <div className="aspect-10/5 overflow-hidden rounded-2xl mb-6">
                <Image
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs bg-[#dbeafe] dark:bg-white/5 text-text-secondary"
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
                    className="p-2 rounded-full transition-colors bg-[#dbeafe] dark:bg-white/5 hover:bg-[#cfe5ff] dark:hover:bg-white/10"
                  >
                    <LuGithub size={18} className="text-text-muted" />
                  </a>
                </div>
              </div>
            </div>
          ))}
      </div>
    </main>
  );
}
