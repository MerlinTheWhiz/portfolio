import Link from "next/link";
import HeroTypewriter from "../ui/HeroTypewriter";
import DotGrid from "../ui/DotGrid/DotGrid";
import HoverRevealText from "../ui/HeroHoverRevealText";
import HeroCursor from "../ui/HeroCursor";

const Hero = () => {
  return (
    <section id="hero" className="relative bg-background flex py-32 sm:py-40">
      <HeroCursor />
      {/* Dark mode background */}
      <div className="absolute inset-0 z-0 dark:block hidden">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <DotGrid
            style={{}}
            dotSize={4}
            gap={30}
            baseColor="#000057"
            activeColor="#057ef6"
            proximity={150}
            shockRadius={300}
            shockStrength={6}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* Light mode background */}
      <div className="absolute inset-0 z-0 block dark:hidden">
        <div style={{ width: "100%", height: "800px", position: "relative" }}>
          <DotGrid
            style={{}}
            dotSize={4}
            gap={30}
            baseColor="#d1d5db"
            activeColor="#057ef6" 
            proximity={150}
            shockRadius={300}
            shockStrength={6}
            resistance={750}
            returnDuration={1.5}
          />
        </div>
      </div>

      {/* Hero content */}
      <div className="mx-auto relative flex flex-col text-center px-6 items-center justify-center gap-8 z-10">
        <span className="metal-badge relative flex text-text-muted items-center gap-2 px-4 py-2 text-sm bg-background-card dark:bg-background border border-border-default rounded-full overflow-hidden">
          <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></span>
          <span className="relative z-0">Available for new projects</span>
        </span>

        <div className="flex flex-col gap-8 min-w-fit items-center justify-center">
          <h1 className="flex flex-col">
            <span className="text-5xl text-text-primary dark:text-text-primary sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              <HoverRevealText />
            </span>
            <span className="min-h-28 text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-2 bg-linear-to-r from-accent-primary via-accent-hover to-accent-dark bg-clip-text text-transparent">
              <HeroTypewriter words={["Software Engineer"]} />
            </span>
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl text-text-muted dark:text-white/60 px-4 mb-5">
            Creative software engineer specializing in building innovative
            solutions that bridge technology and user experience. I craft clean,
            efficient code and transform ideas into impactful digital products.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-5 font-semibold">
          <Link href="/projects">
            <span className="flex rounded-full bg-accent-primary border-accent-primary text-white px-8 py-4 hover:bg-accent-hover shadow-lg ease-in-out md:hover:scale-102 transition-all duration-300">
              View My Work
            </span>
          </Link>
          <Link href="/#contact">
            <span className="flex rounded-full bg-accent-primary/5 dark:bg-accent-primary/10 hover:bg-accent-primary/10 hover:dark:bg-accent-primary/20 border-2 border-accent-primary text-accent-primary px-8 py-4 ease-in-out md:hover:scale-102 transition-all duration-300">
              Get In Touch
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
