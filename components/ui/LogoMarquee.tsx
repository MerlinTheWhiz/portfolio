import Marquee from "react-fast-marquee";
import Image from "next/image";

const techLogos = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Node.js",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "TypeScript",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  },
  {
    name: "Python",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "MongoDB",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  },
  {
    name: "Docker",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg",
  },
  {
    name: "GraphQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/graphql/graphql-plain.svg",
  },
  {
    name: "Kubernetes",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
  },
];

const LogoCarousel = () => {
  return (
    <div className="overflow-hidden md:mx-auto max-w-7xl py-6">
      <Marquee
        gradient={false}
        speed={40}
        pauseOnHover
        className="flex items-center"
      >
        {techLogos.map(({ name, logo }, idx) => (
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
        ))}
      </Marquee>
    </div>
  );
};

export default LogoCarousel;
