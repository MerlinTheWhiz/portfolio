import Link from "next/link";
import Image from "next/image";
import { Home } from "lucide-react";
import { LuGithub, LuLinkedin, LuDownload } from "react-icons/lu";
import { BsTwitterX } from "react-icons/bs";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "../../ui/ThemeToggle";
import ScrollToTop from "../../ui/ScrollToTop";

const Navbar = () => {
  return (
    <nav className="fixed z-50 top-5 sm:top-10 left-0 right-0 flex mx-6 sm:mx-auto dark:border dark:border-border-default dark:shadow-none shadow-lg shadow-gray-200/70 rounded-full sm:w-fit bg-background/30 backdrop-blur-md">
      <div className="flex justify-between w-full sm:w-fit px-3 md:px-5 py-2 gap-6 items-center sm:justify-center">
        <div className="bg-accent-primary/15  rounded-full flex items-center justify-center md:hover:scale-105 transition-all duration-300">
          <ScrollToTop href="/">
            <Image
              src="/logo.png"
              alt="Logo"
              width={45}
              height={45}
              className="p-1"
            />
          </ScrollToTop>
        </div>

        <MobileMenu />

        {/* Desktop Navigation Links */}
        <div className="hidden sm:flex gap-6 items-center justify-center text-gray-600 font-medium">
          <span className="hidden sm:block border-l h-6 border-gray-400/80"></span>
          <Link
            href="/"
            className="p-1.5 mr-1 flex items-center justify-center rounded-full transition-all duration-300 ease-in-out hover:text-text-primary hover:bg-gray-200 dark:hover:bg-white/10"
          >
            {" "}
            <Home className="w-5 h-5" />
          </Link>
          <a
            href="https://github.com/MerlinTheWhiz"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:text-text-primary"
          >
            {" "}
            <LuGithub className="w-5 h-5" />
          </a>
          <a
            href="https://www.linkedin.com/in/michaelanokamcodes/"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform p-1.5 duration-200 ease-in-out hover:-translate-y-0.5 hover:text-text-primary"
          >
            {" "}
            <LuLinkedin className="w-5 h-5" />
          </a>
          <a
            href="https://x.com/madebymichael_"
            target="_blank"
            rel="noopener noreferrer"
            className="transition-transform duration-200 ease-in-out hover:-translate-y-0.5 hover:text-text-primary"
          >
            {" "}
            <BsTwitterX className="w-5 h-5" />
          </a>
          <div className="p-1.5 flex items-center justify-center rounded-full hover:cursor-pointer transition-colors duration 300">
            <ThemeToggle />
          </div>
          <span className="hidden sm:block border-l h-6 border-gray-400/80"></span>
        </div>
        <div className="hidden sm:flex rounded-full text-white font-semibold bg-accent-primary hover:bg-accent-hover text-sm px-4 py-2 md:hover:scale-102 transition-all duration-300">
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
