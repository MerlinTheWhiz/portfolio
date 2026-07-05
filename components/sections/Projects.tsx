"use client";

import Image from "next/image";
import Link from "next/link";
import { projects } from "@/lib/projects";
import { ArrowUpRight } from "lucide-react";
import { LuGithub } from "react-icons/lu";
import ScrambleText from "@/components/ui/ScrambleText";
import { useTranslations, useLocale } from "next-intl";
import { motion } from "framer-motion";

const ProjectIdMap: Record<number, string> = {
  1: "mediAxis",
  2: "portfolio",
  3: "cleanSpark",
  4: "blackfrica",
};

const Projects = () => {
  const t = useTranslations("projects");
  const locale = useLocale();
  const isRtl = locale === "ar";
  return (
    <section
      id="projects"
      className="relative bg-background py-20 sm:py-30 flex justify-center items-center"
    >
      <div className="max-w-7xl w-full flex flex-col relative z-10 px-6 ">
        <div className="flex flex-col text-start mb-16">
          <span className="inline-block px-4 w-fit py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
            {t("badge")}
          </span>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            initial={{ opacity: 0, x: isRtl ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: false }}
          >
            {t("headingPrefix")} <ScrambleText text={t("emphasizedWord")} className="text-accent-primary" as="span" />
          </motion.h2>
        </div>
        <div className="grid lg:grid-cols-2 gap-8 mb-16">
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
                    {t.raw(`items.${ProjectIdMap[project.id]}.tags`).map((tag: string) => (
                      <span
                        key={tag}
                        className="px-3 py-1 rounded-full text-xs bg-[#dbeafe] dark:bg-white/5 text-text-secondary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-text-primary group-hover:text-accent-primary transition-colors duration-300">
                    {t(`items.${ProjectIdMap[project.id]}.title`)}
                  </h3>
                  <p className="line-clamp-2 mb-6 text-text-muted">
                    {t(`items.${ProjectIdMap[project.id]}.description`)}
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-sm font-medium text-accent-primary hover:text-accent-hover transition-colors"
                    >
                      {t("viewProject")} <ArrowUpRight size={16} />
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
        <Link href="/projects" className="w-fit mx-auto">
          <span
            className="flex font-semibold group rounded-full gap-2 bg-accent-primary/5 dark:bg-accent-primary/10 
          hover:bg-accent-primary/10 hover:dark:bg-accent-primary/20 border-2 border-accent-primary 
          text-accent-primary px-8 py-4 ease-in-out md:hover:scale-102 transition-all duration-300
          justify-center items-center"
          >
            {t("viewAllProjects")}{" "}
            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-0.5"
            />
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Projects;
