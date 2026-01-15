"use client";
import { Typewriter } from "react-simple-typewriter";

interface HeroTypewriterProps {
  words: string[];
}

const HeroTypewriter = ({ words }: HeroTypewriterProps) => {
  return (
    <Typewriter
      words={words}
      loop={1}
      typeSpeed={75}
      deleteSpeed={50}
    >
    </Typewriter>
  );
};

export default HeroTypewriter;