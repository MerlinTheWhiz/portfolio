import React from "react";
import Image from "next/image";
import aboutImage from "@/public/logo.png";
import { Code2 } from "lucide-react";
import Highlights from "../ui/Highlights";

const About = () => {
  return (
    <section
      id="about"
      className="bg-background flex py-20 sm:py-30 justify-center items-center"
    >
      <div className="flex sm:flex-row flex-col px-6 lg:px-8 max-w-7xl sm:gap-24 text-center items-center justify-center">
        {/* Left Column Image */}
        <div className="relative aspect-4/5 sm:w-1/2 rounded-3xl overflow-">
          <Image
            src={aboutImage}
            alt="Picture of Michael Anokam avatar"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t via-transparent to-transparent from-background" />
          <div className="absolute bottom-4 right-4 sm:-bottom-6 sm:-right-6 z-10">
            <div className="flex items-center gap-4 p-6 dark:bg-background-card border border-border-default rounded-2xl shadow-xl">
              <span className="w-12 h-12 rounded-full bg-accent-primary/10 flex items-center justify-center">
                <Code2 size={18} className="w-6 h-6 text-accent-primary" />
              </span>
              <div className="text-left">
                <p className="text-2xl font-bold">MerlinTheWhiz</p>
                <p className="text-sm text-text-primary/80">Tech Alias</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column Content */}
        <div className="flex flex-col sm:w-1/2 text-left">
          <span className="inline-block px-4 w-fit py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
            About Me
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
            Passionate about creating
            <span className="text-accent-primary"> impactful </span>
            solutions
          </h2>
          <p className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
            I&apos;m Michael Anokam, a software engineer passionate about
            creating innovative solutions that make a real impact. With
            expertise spanning full-stack development, I bring ideas to life
            through elegant code and thoughtful design.
          </p>
          <p className="mt-8 space-y-6 text-lg leading-relaxed text-text-secondary">
            My work focuses on building scalable applications, optimizing
            performance, and delivering seamless user experiences. I believe in
            writing code that&apos;s not just functional, but maintainable,
            efficient, and future-proof.
          </p>
          <Highlights />
        </div>
      </div>
    </section>
  );
};

export default About;
