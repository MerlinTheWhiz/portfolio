import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import SkillsList from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Experience from "@/components/sections/Experience";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="relative bg-background flex items-center justify-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <About />
        <SkillsList />
        <Projects />
        <Experience />
        <Contact />
      </div>
    </main>
  );
}
