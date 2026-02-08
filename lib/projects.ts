import mediaxis from "@/public/mediaxis.png";
import portfolio from "@/public/portfolio.png";
import cleanspark from "@/public/cleanspark.png";
import { StaticImageData } from "next/image";


export type Project = {
  id: number;
  title: string;
  description: string;
  image: StaticImageData;
  tags: string[];
  link: string;
  github?: string;
  featured?: boolean;
};

export const projects: Project[] = [
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
  {
    id: 3,
    title: "CleanSpark",
    description:
      "A clean energy product website promoting sustainable solar solutions for African homes and businesses.",
    image: cleanspark,
    tags: ["Next.js", "TypeScript", "Tailwind", "GSAP"],
    link: "https://www.cleansparktechnologies.com/",
    github: "https://github.com/codeAKstan/CleanSpark",
    featured: true,
  },
];
