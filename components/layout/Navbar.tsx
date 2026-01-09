import Link from "next/link";
import Image from "next/image";
import { LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import ThemeToggle from "../ui/ThemeToggle";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-5 md:top-10 left-1/2 -translate-x-1/2 flex dark:border dark:border-border-default dark:shadow-none shadow-lg shadow-gray-200/70 rounded-full w-fit bg-background/30 backdrop-blur-md">
      <div className="flex px-5 py-2 gap-6 items-center justify-center">
        <div className="bg-accent-primary/15  rounded-full flex items-center justify-center mx-auto md:hover:scale-105 transition-all duration-300">
          <Link href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="p-1"
            />
          </Link>
        </div>
        <div className="hidden md:flex gap-6 items-center justify-center text-gray-600 font-medium">
          <span className="hidden md:block border-l h-6 border-gray-400/80"></span>
          <a
            href="https://github.com/MerlinTheWhiz"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LuGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelanokamcodes/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <LuLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/madebymichael_"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <BsTwitterX className="w-5 h-5" />
          </a>
          <ThemeToggle />
          <span className="hidden md:block border-l h-6 border-gray-400/80"></span>
        </div>
        <div className="hidden md:flex rounded-full text-white font-semibold bg-accent-primary hover:bg-accent-hover text-sm px-4 py-2 md:hover:scale-102 transition-all duration-300">
          <a href="/resume.pdf" download>
            <LuDownload className="w-4 h-4 inline-block mr-2" />
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
