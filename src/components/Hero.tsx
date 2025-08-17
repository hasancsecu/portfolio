import { Bio } from "@/data/portfolioData";
import { ArrowDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-center items-center text-center p-4 bg-gradient-to-br from-white to-purple-50 dark:from-slate-900 dark:to-slate-800">
      <div className="absolute top-0 left-0 w-full h-full bg-grid-pattern opacity-[0.03] pointer-events-none"></div>

      <div className="max-w-4xl mx-auto z-10 animate-fade-in">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-gray-900 to-purple-700 dark:from-white dark:to-purple-400 bg-clip-text text-transparent">
          {Bio.name}
        </h1>

        <div className="relative h-16 md:h-16 mb-6 overflow-hidden">
          <p className="text-xl md:text-2xl lg:text-3xl text-purple-600 dark:text-purple-400 font-medium absolute inset-0 flex items-center justify-center transition-opacity">
            {Bio.role}
          </p>
        </div>

        <div
          className="text-md md:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-10"
          dangerouslySetInnerHTML={{ __html: Bio.description }}
        />

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors shadow-md hover:shadow-lg"
          >
            View Resume
          </a>
          <a
            href="#contact"
            className="px-6 py-3 bg-white dark:bg-slate-800 text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-700 rounded-md hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors shadow-md hover:shadow-lg"
          >
            Contact Me
          </a>
        </div>
      </div>
      <a
        href="#about"
        className="absolute bottom-10 flex flex-col items-center justify-center text-gray-500 hover:text-purple-600 transition-colors animate-bounce"
      >
        <span className="text-sm mb-1">Scroll Down</span>
        <ArrowDown size={20} />
      </a>
    </div>
  );
};

export default Hero;
