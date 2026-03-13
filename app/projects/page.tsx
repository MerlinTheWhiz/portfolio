"use client";

import Image from "next/image";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";

export default function Projects() {
  return (
    <main className="flex flex-col relative items-center bg-background ">
      <div className="flex flex-col max-w-5xl border border-border-default items-center sm:items-start">
        <div className="relative w-full mb-20 sm:mb-24 md:mb-28">
          {/* Banner */}
          <div className="relative h-48 w-full sm:h-64 md:h-72 overflow-hidden">
            <Image
              src="/banner.png"
              alt="Banner"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* PFP */}
          <Image
            src="/pfp.png"
            alt="Profile"
            width={96}
            height={96}
            className="absolute left-1/2 -translate-x-1/2 -bottom-12 sm:-bottom-16 md:-bottom-20 w-24 h-24 sm:w-32 sm:h-32 md:w-36 md:h-36 rounded-full"
          />

          {/* Hire Me button */}
          <Link
            href="/"
            className="absolute right-0 -bottom-12 sm:-bottom-16 md:-bottom-20 mr-6 flex w-fit rounded-full font-semibold bg-accent-primary text-white text-sm sm:text-base px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-2 hover:bg-accent-hover transition-all duration-300"
          >
            Hire Me!
          </Link>
        </div>
        <div className="border-b border-border-default mb-10 flex flex-col items-center gap-2 md:gap-4 w-full h-48 px-6">
          <h1 className="flex flex-col items-center gap-2 md:gap-4 text-text-primary font-semibold text-xl sm:text-2xl md:text-3xl">
            <span>Hey <span className="animate-wave">👋</span>,</span>
            <span>
              Here&apos;s What I&apos;ve Been{" "}
              <span className="text-accent-primary">Building.</span>
            </span>
          </h1>
          <div>
            <span className="text-text-secondary text-sm sm:text-base">
              12 <span className="text-text-muted">Personal •</span> 4{" "}
              <span className="text-text-muted">Client •</span> 3{" "}
              <span className="text-text-muted">Open Source</span>
            </span>
          </div>
          <div></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 mb-16 px-6 sm:px-16 max-w-6xl mx-auto">
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
      </div>
    </main>
  );
}
