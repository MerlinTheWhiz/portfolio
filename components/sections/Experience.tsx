"use client";

import { Briefcase, MapPin } from "lucide-react";
import ScrambleText from "@/components/ui/ScrambleText";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

export default function ExperienceSection() {
  const t = useTranslations("experience");
  const entries = t.raw("entries");

  const container = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item1 = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const item2 = {
    hidden: { opacity: 0, scale: 0 },
    show: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  };

  return (
    <section id="experience" className="py-32 relative bg-background-card/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,126,246,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="text-center mb-20"
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: false }}
        >
          <motion.span
            className="inline-block px-4 py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6"
            variants={item1}
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight"
            variants={item1}
          >
            {t("headingPrefix")}{" "}
            <ScrambleText text={t("emphasizedWord")} className="text-accent-primary" as="span" />
          </motion.h2>
          <motion.p
            className="mt-6 text-lg max-w-2xl mx-auto text-text-muted"
            variants={item1}
          >
            {t("description")}
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent-primary text-accent-primary/50 via-accent-primtext-accent-primary/20 to-transparent" />

          <div className="space-y-12">
            {entries.map((exp: any, index: number) => (
              <motion.div
                key={index}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
                variants={container}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                {/* Timeline Dot */}
                <div className="absolute lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-background z-10" />

                {/* Content */}
                <motion.div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  } pl-4 lg:pl-0`}
                  variants={item2}
                >
                  <div
                    className={`group p-8 rounded-3xl border transition-all duration-500 border-border-default hover:border-accent-primary/40
                    bg-background text-accent-primary/40"
                    } ${index % 2 === 0 ? "lg:text-right" : ""}`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div
                      className={`flex items-center gap-4 mb-4 text-text-muted 
                        ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                    >
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p className="mb-6 leading-relaxed text-text-secondary">
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                        {exp.highlights.map((highlight: string) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full text-xs bg-[#edf5ff] dark:bg-white/5 text-text-muted"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
