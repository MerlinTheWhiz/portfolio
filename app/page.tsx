import About from "@/components/sections/About";
import Hero from "@/components/sections/Hero";
import Technologies from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative bg-background flex items-center justify-center flex-col overflow-hidden mx-auto ">
      <div className="w-full">
        <Hero />
        <About />
        <Technologies />
      </div>
    </main>
  );
}
