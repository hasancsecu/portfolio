import { useState, useEffect } from "react";
import { cn } from "@/lib/utils";
import { Menu, X, ExternalLink } from "lucide-react";
import { Bio } from "@/data/portfolioData";
import { ThemeToggle } from "./ThemeProvider";
import { DiCssdeck } from "react-icons/di";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [scrolled]);

  return (
    <nav
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-300 ease-in-out",
        scrolled
          ? "bg-white/90 dark:bg-slate-900/90 backdrop-blur-sm shadow-md py-2"
          : "bg-transparent py-4"
      )}
    >
      <div className="container mx-auto px-4 flex justify-between items-center">
        <a
          href="#"
          className="text-xl md:text-2xl font-bold text-primary hover:text-primary/80 transition-colors"
        >
          <span className="text-purple-600 flex items-center gap-1">
            <DiCssdeck size="2.5rem" /> Portfolio
          </span>
        </a>
        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-6">
          <div className="flex items-center space-x-6">
            <a
              href="#about"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              About
            </a>
            <a
              href="#skills"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Skills
            </a>
            <a
              href="#experience"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Experience
            </a>
            <a
              href="#projects"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Projects
            </a>
            <a
              href="#education"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Education
            </a>
            <a
              href="#contact"
              className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <ThemeToggle />
          </div>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Resume <ExternalLink size={16} />
          </a>
        </div>
        {/* Mobile menu button */}
        <div className="flex items-center md:hidden gap-4">
          <ThemeToggle />
          <button
            className="text-gray-700 dark:text-gray-300"
            onClick={toggleMenu}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 w-full bg-white dark:bg-slate-900 shadow-md transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0 invisible"
        } overflow-hidden`}
      >
        <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
          <a
            href="#about"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            About
          </a>
          <a
            href="#skills"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Skills
          </a>
          <a
            href="#experience"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Experience
          </a>
          <a
            href="#projects"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Projects
          </a>
          <a
            href="#education"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Education
          </a>
          <a
            href="#contact"
            className="text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors py-2"
            onClick={() => setIsOpen(false)}
          >
            Contact
          </a>
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
          >
            Resume <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
