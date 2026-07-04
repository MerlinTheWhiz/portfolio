"use client";

import LogoMarquee from "@/components/ui/LogoMarquee";
import ScrambleText from "@/components/ui/ScrambleText";
import { Code2, Server, Cloud, Wrench } from "lucide-react";
import { useTranslations } from "next-intl";
import { motion } from "framer-motion";

const SkillsList = () => {
  const t = useTranslations("skills");
  const skillCategories = [
    {
      title: t("categories.frontend"),
      icon: Code2,
      skills: t.raw("items.frontend"),
    },
    {
      title: t("categories.backend"),
      icon: Server,
      skills: t.raw("items.backend"),
    },
    {
      title: t("categories.devops"),
      icon: Cloud,
      skills: t.raw("items.devops"),
    },
    {
      title: t("categories.tools"),
      icon: Wrench,
      skills: t.raw("items.tools"),
    },
  ];

  const container1 = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const item1 = {
    hidden: { opacity: 0, y: 50 },
    show: { opacity: 1, y: 0, 
      transition: { duration: 0.5 }
    },
    
  };

  const container2 = {
    hidden: {},
    show: {
      transition: {
        staggerChildren: 0.08,
      },
    },
  };

  const item2 = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 },
  };

  return (
    <section
      id="technologies"
      className="relative bg-background-card/50 flex py-20 sm:py-30 justify-center items-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(5,126,246,0.03),transparent_70%)]" />
      <div className="max-w-7xl w-full mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          className="flex flex-col text-center items-center justify-center"
          variants={container1}
          initial="hidden"
          whileInView="show"
        >
          <motion.span
            className="inline-block px-4 w-fit py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6"
            variants={item1}
            viewport={{ once: false }}
          >
            {t("badge")}
          </motion.span>
          <motion.h2
            className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight"
            variants={item1}
            viewport={{ once: false }}
          >
            {t("headingPrefix")} <ScrambleText text={t("emphasizedWord")} className="text-accent-primary" as="span" />
          </motion.h2>
          <motion.p
            className="mt-6 space-y-6 text-lg max-w-2xl leading-relaxed text-text-secondary"
            variants={item1}
            viewport={{ once: false }}
          >
            {t("description")}
          </motion.p>
        </motion.div>
        <div className="w-full mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map(({ icon: Icon, title, skills }, index) => (
            <div
              key={index}
              className="group p-6 rounded-2xl border bg-background border-border-default hover:shadow-accent-primary/10 hover:shadow-xl hover:border-accent-hover/40 transition-all duration-1000"
            >
              <div className="flex items-center gap-3">
                <div className="p-2.5 w-fit rounded-xl bg-accent-primary/10 group-hover:bg-accent-primary/20 transition-all duration-300">
                  <Icon className="w-5 h-5 text-accent-primary" />
                </div>
                <h3 className="text-lg font-semibold group-hover:text-accent-primary transition-colors duration-300">
                  {title}
                </h3>
              </div>

              <motion.ul
                className="mt-4 space-y-2"
                variants={container2}
                initial="hidden"
                whileInView="show"
                viewport={{ once: false }}
              >
                {(skills as string[]).map((skill) => (
                  <motion.li
                    key={skill}
                    variants={item2}
                    className="text-sm text-text-secondary"
                  >
                    <div className="bg-background-card p-2 hover:bg-accent-primary/10 hover:text-accent-primary rounded-lg transition-all duration-200">
                      {skill}
                    </div>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
          ))}
        </div>
        <div className="mt-16 md:mt-24">
          <LogoMarquee />
        </div>
      </div>
    </section>
  );
};

export default SkillsList;
