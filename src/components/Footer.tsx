
import { Bio } from "@/data/portfolioData";
import { ChevronUp, Github, Linkedin, Facebook } from "lucide-react";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-1">
            <h3 className="text-2xl font-bold mb-4">
              Abu<span className="text-purple-400">Tamanna</span>
            </h3>
            <p className="text-gray-400 mb-4">
              Full Stack Web Developer with a passion for creating beautiful, functional, and user-friendly applications.
            </p>
            <div className="flex space-x-4">
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Github size={20} />
              </a>
              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Linkedin size={20} />
              </a>
              <a
                href={Bio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-purple-400 transition-colors"
              >
                <Facebook size={20} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#about"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#skills"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Skills
                </a>
              </li>
              <li>
                <a
                  href="#experience"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Experience
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Projects
                </a>
              </li>
              <li>
                <a
                  href="#education"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Education
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-400 hover:text-purple-400 transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
            <p className="text-gray-400">
              Feel free to reach out to me via email or social media.
            </p>
            <a
              href={Bio.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700 transition-colors"
            >
              View Resume
            </a>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-10 pt-6 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Abu Tamanna Hasan. All rights reserved.
          </p>
          <button
            onClick={scrollToTop}
            className="mt-4 md:mt-0 bg-gray-800 p-2 rounded-full hover:bg-gray-700 transition-colors group"
            aria-label="Scroll to top"
          >
            <ChevronUp
              size={20}
              className="text-gray-400 group-hover:text-white transition-colors"
            />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
