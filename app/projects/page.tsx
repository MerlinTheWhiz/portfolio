"use client";

import Image from "next/image";
import { projects, ProjectCategory } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import Link from "next/link";
import { useState } from "react";

type FilterTab = "All" | ProjectCategory;

const TABS: FilterTab[] = ["All", "Personal", "Client", "Open Source"];

const count = (cat: ProjectCategory) =>
  projects.filter((p) => p.category === cat).length;

export default function Projects() {
  const [activeTab, setActiveTab] = useState<FilterTab>("All");

  const filtered =
    activeTab === "All"
      ? projects
      : projects.filter((p) => p.category === activeTab);

  return (
    <main className="flex flex-col relative items-center bg-background ">
      <div className="flex flex-col max-w-5xl w-full border border-border-default items-center sm:items-start">
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
            <div className="inset-0 top-2 sm:top-0 absolute flex flex-col md:gap-2 text-center justify-center items-center font-aubette text-white text-xl sm:text-2xl md:text-3xl [text-shadow:0_2px_8px_rgba(0,0,0,0.8)]">
              <span>“THE MOST REMARKABLE COMPUTER EVER INVENTED</span>
              <span>IS THE HUMAN BRAIN“</span>
            </div>
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
            href="/#contact"
            className="absolute right-0 -bottom-12 sm:-bottom-16 md:-bottom-20 mr-6 flex w-fit rounded-full font-semibold bg-accent-primary text-white text-sm sm:text-base px-4 py-1 sm:px-6 sm:py-2 md:px-8 md:py-2 hover:bg-accent-hover transition-all duration-300"
          >
            Hire Me!
          </Link>
        </div>
        <div className="border-b border-border-default mb-10 flex flex-col items-center gap-2 md:gap-4 w-full h-fit px-6">
          <h1 className="flex flex-col justify-center items-center gap-2 text-text-primary font-bold text-3xl">
            <span>
              Hey <span className="animate-wave">👋</span>,
            </span>
            <span className="flex flex-col sm:flex-row gap-2 text-center mb-2">
              Here&apos;s What I&apos;ve
              <span>
                Been <span className="text-accent-primary">Building.</span>
              </span>
            </span>
          </h1>
          <div className="flex gap-3 text-sm sm:text-base items-center">
            {/* <span className="text-text-secondary">
              <span className="font-semibold text-text-primary">
                {projects.length}
              </span>{" "}
              <span className="text-text-muted">Total</span>
            </span>
            <span className="text-text-muted">|</span> */}
            <div className="flex items-center gap-2 sm:gap-3">
              {(["Personal", "Client", "Open Source"] as ProjectCategory[]).map(
                (cat, i, arr) => (
                  <span
                    key={cat}
                    className="flex items-center text-text-secondary"
                  >
                    <span className="font-semibold text-text-primary">
                      {count(cat)}
                    </span>

                    <span className="ml-1 text-text-muted">{cat}</span>

                    {i < arr.length - 1 && (
                      <span className="ml-2 text-text-muted ">•</span>
                    )}
                  </span>
                ),
              )}
            </div>
          </div>
          {/* Filter Tabs */}
          <div className="flex w-full max-w-lg justify-between items-center gap-2 mt-6 flex-wrap">
            {TABS.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`relative py-2 text-sm sm:text-base font-medium transition-colors duration-300 cursor-pointer
                  after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:rounded-full
                  after:bg-accent-primary after:transition-transform after:duration-300 after:origin-left
                  ${
                    activeTab === tab
                      ? "text-accent-primary after:scale-x-100"
                      : "text-text-secondary hover:text-accent-primary after:scale-x-0 hover:after:scale-x-100"
                  }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {filtered.length === 0 ? (
          <p className="w-full text-center min-h-[20vh] sm:min-h-[30vh] md:min-h-[40vh] text-text-muted px-6 sm:px-16 mb-16 text-sm sm:text-base">
            No projects in this category yet.
          </p>
        ) : (
          <div className="grid lg:grid-cols-2 gap-8 mb-16 px-6 max-w-6xl mx-auto">
            {filtered.map((project) => (
              <div
                key={project.id}
                className="group relative rounded-3xl overflow-hidden border transition-all duration-500
                         bg-background border-border-default hover:border-accent-primary/40 
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
                        className="px-3 py-1 rounded-full text-xs bg-accent-primary/10 dark:bg-white/5 text-text-secondary"
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
                      className="p-2 rounded-full transition-colors bg-accent-primary/10 dark:bg-white/5 hover:bg-[#cfe5ff] dark:hover:bg-white/10"
                    >
                      <LuGithub size={18} className="text-text-muted" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  );
}
