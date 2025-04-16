import { Bio } from "@/data/portfolioData";
import { Github, Linkedin, Facebook, ExternalLink } from "lucide-react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About <span className="text-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="rounded-lg overflow-hidden shadow-xl transform hover:scale-105 transition-transform duration-300">
            <div className="aspect-square bg-gradient-to-br from-purple-400 to-purple-600 flex items-center justify-center text-white text-7xl font-bold">
              {Bio.name
                .split(" ")
                .map((name) => name[0])
                .join("")}
            </div>
          </div>

          <div className="space-y-6">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">
                {Bio.role}
              </h3>

              <div
                className="text-gray-600 dark:text-gray-300"
                dangerouslySetInnerHTML={{ __html: Bio.about }}
              />
            </div>

            <div className="flex flex-wrap gap-4 pt-4">
              <a
                href={Bio.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-800 transition-colors"
              >
                <Github size={20} />
                GitHub
              </a>

              <a
                href={Bio.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                <Linkedin size={20} />
                LinkedIn
              </a>

              <a
                href={Bio.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-800 transition-colors"
              >
                <Facebook size={20} />
                Facebook
              </a>

              <a
                href={Bio.resume}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-4 py-2 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors"
              >
                <ExternalLink size={20} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
