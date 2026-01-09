import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative bg-background flex items-center justify-center flex-col overflow-hidden mx-auto px-6 sm:px-10">
      <div className="max-w-7xl w-full">
        <Hero />
      </div>
    </main>
  );
}
