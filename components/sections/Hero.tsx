import Link from "next/link";

const Hero = () => {
  return (
    <section id="hero" className="bg-background flex py-30 sm:py-40">
      <div className="mx-auto flex flex-col text-center px-6 items-center justify-center gap-8">
        <span className="flex text-text-muted items-center gap-2 px-4 py-2 text-sm bg-background-card dark:bg-white/5 border border-border-default rounded-full">
          <span className="w-2 h-2 rounded-full bg-accent-success animate-pulse"></span>
          Available for new projects
        </span>
        <div className="flex flex-col gap-8 min-w-fit items-center justify-center">
          <h1 className="flex flex-col">
            <span className="text-5xl text-text-primary dark:text-text-primary sm:text-6xl md:text-7xl lg:text-8xl font-bold">
              Michael Anokam
            </span>
            <span className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold py-2 bg-linear-to-r from-accent-primary via-accent-hover to-accent-dark bg-clip-text text-transparent">
              Software Engineer
            </span>
          </h1>
          <p className="max-w-2xl text-lg lg:text-xl text-text-muted px-4 mb-5">
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
