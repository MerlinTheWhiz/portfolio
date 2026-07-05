"use client";

import Marquee from "react-fast-marquee";
import Image from "next/image";
import { useTranslations } from "next-intl";

const techLogos = [
  { key: "react", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },
  { key: "nodejs", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
  { key: "typescript", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
  { key: "python", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg" },
  { key: "postgresql", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg" },
  { key: "mongodb", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
  { key: "docker", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg" },
  { key: "aws", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" },
  { key: "graphql", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg" },
  { key: "kubernetes", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg" },
];

const nameMap: Record<string, string> = {
  react: "React",
  nodejs: "Node.js",
  typescript: "TypeScript",
  python: "Python",
  postgresql: "PostgreSQL",
  mongodb: "MongoDB",
  docker: "Docker",
  aws: "AWS",
  graphql: "GraphQL",
  kubernetes: "Kubernetes",
};

const LogoCarousel = () => {
  const t = useTranslations("logoMarquee");
  const items = t.raw("items") as string[];

  return (
    <div className="overflow-hidden md:mx-auto max-w-7xl py-6">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        className="flex items-center"
      >
        {techLogos.map(({ key, logo }, idx) => {
          const name = items[idx] || nameMap[key];
          return (
            <div
              key={idx}
              className="group mx-4 md:mx-12 flex items-center justify-center"
            >
              <Image
                src={logo}
                width={40}
                height={40}
                alt={name}
                title={name}
                className="h-10 md:h-14 w-auto object-contain transition-all duration-300 grayscale group-hover:grayscale-0 opacity-70 hover:opacity-100"
              />
            </div>
          );
        })}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
