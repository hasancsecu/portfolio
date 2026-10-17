import { Bio } from "@/data/portfolioData";
import {
  ChevronUp,
  Github,
  Linkedin,
  Facebook,
  Globe,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import { DiCssdeck } from "react-icons/di";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-[#060b08] text-white py-14 border-t border-zinc-800/80 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Brand & Bio */}
          <div className="col-span-1 space-y-4">
            <h3 className="text-2xl font-bold">
              <span className="text-emerald-400 flex items-center gap-1.5">
                <DiCssdeck size="2.5rem" /> Hasan
              </span>
            </h3>
            <p className="text-gray-400 text-sm leading-relaxed">
              Senior Software Engineer specializing in high-performance fintech
              platforms, real-time trading engines, and applied AI systems.
            </p>
            <div className="flex items-center space-x-3 pt-2">
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"
                title="GitHub"
              >
                <Github size={18} />
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"
                title="LinkedIn"
              >
                <Linkedin size={18} />
              </a>
              <a
                href={Bio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-teal-600 transition-colors"
                title="Facebook"
              >
                <Facebook size={18} />
              </a>
              <a
                href={Bio.portfolio}
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center text-gray-400 hover:text-white hover:bg-emerald-600 transition-colors"
                title="Portfolio"
              >
                <Globe size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  About Me
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Technical Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Work Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Featured Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-emerald-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Direct Contact */}
          <div className="col-span-1 space-y-3">
            <h4 className="text-sm font-bold uppercase tracking-wider text-gray-300 mb-4">
              Direct Contact
            </h4>
            <div className="space-y-2 text-sm text-gray-400">
              <p className="flex items-center gap-2">
                <MapPin size={15} className="text-emerald-400" />
                <span>{Bio.location}</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail size={15} className="text-emerald-400" />
                <a
                  href={`mailto:${Bio.email}`}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {Bio.email}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Phone size={15} className="text-emerald-400" />
                <a
                  href={`tel:${Bio.phone}`}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {Bio.phone}
                </a>
              </p>
            </div>
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-3 bg-emerald-600 hover:bg-emerald-700 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors shadow-sm shadow-emerald-600/20"
            >
              View Resume
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-zinc-900 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Abu Tamanna Hasan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-zinc-900 border border-zinc-800 p-2 rounded-full hover:bg-emerald-600 hover:text-white transition-colors group flex items-center gap-1.5 px-3 py-1.5"
            aria-label="Scroll to top"
          >
            <span className="text-gray-400 group-hover:text-white">
              Back to top
            </span>
            <ChevronUp
              size={16}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
