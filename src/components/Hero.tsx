import { Bio } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  ArrowDown,
  Briefcase,
  ExternalLink,
  Github,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
  Zap,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center items-center text-center px-4 pt-28 pb-16 bg-gradient-to-b from-emerald-50/40 via-white to-white dark:from-zinc-950 dark:via-[#070e0a] dark:to-zinc-950 overflow-hidden isolate">
      {/* Background ambient glow & pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-[0.04] dark:opacity-[0.06] pointer-events-none"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-emerald-500/12 dark:bg-emerald-500/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute top-1/3 left-1/4 w-72 h-72 bg-teal-500/10 dark:bg-teal-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto z-10 flex flex-col items-center">
        {/* Availability Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 mb-6 rounded-full bg-emerald-100/80 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800/60 text-emerald-800 dark:text-emerald-300 text-xs sm:text-sm font-medium shadow-sm backdrop-blur-sm"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          <span>Open to Senior Engineering & Applied AI Opportunities</span>
        </motion.div>

        {/* Name Heading */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight mb-4 text-gray-900 dark:text-white"
        >
          <span className="bg-gradient-to-r from-gray-900 via-emerald-950 to-emerald-600 dark:from-white dark:via-emerald-200 dark:to-emerald-400 bg-clip-text text-transparent">
            {Bio.name}
          </span>
        </motion.h1>

        {/* Role with Dynamic Gradient Pill */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="mb-6 flex flex-wrap items-center justify-center gap-2"
        >
          <span className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 dark:text-gray-100">
            Senior Software Engineer
          </span>
          <span className="hidden sm:inline text-emerald-400 dark:text-emerald-500 text-2xl font-light">
            |
          </span>
          <span className="text-lg sm:text-xl md:text-2xl font-semibold bg-gradient-to-r from-emerald-600 to-teal-600 dark:from-emerald-400 dark:to-teal-300 bg-clip-text text-transparent">
            Full-Stack & Applied AI Systems
          </span>
        </motion.div>

        {/* Location & Quick Meta */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.25 }}
          className="flex flex-wrap items-center justify-center gap-4 text-xs sm:text-sm text-gray-600 dark:text-gray-400 mb-6"
        >
          <span className="flex items-center gap-1">
            <MapPin
              size={15}
              className="text-emerald-600 dark:text-emerald-400"
            />
            {Bio.location}
          </span>
          <span>•</span>
          <a
            href={`mailto:${Bio.email}`}
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Mail
              size={15}
              className="text-emerald-600 dark:text-emerald-400"
            />
            {Bio.email}
          </a>
          <span>•</span>
          <a
            href={Bio.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Github size={15} />
            GitHub
          </a>
          <span>•</span>
          <a
            href={Bio.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <Linkedin size={15} />
            LinkedIn
          </a>
        </motion.div>

        {/* Narrative */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-base sm:text-lg text-gray-700 dark:text-gray-300 max-w-2xl mx-auto mb-8 leading-relaxed font-normal"
        >
          {Bio.description}
        </motion.p>

        {/* Stats Strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35 }}
          className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 w-full max-w-3xl mb-10"
        >
          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-100 dark:border-zinc-800/80 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl sm:text-3xl">
              <Briefcase size={20} className="stroke-[2.5]" />
              <span>4+</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Years Experience
            </p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-100 dark:border-zinc-800/80 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl sm:text-3xl">
              <Users size={20} className="stroke-[2.5]" />
              <span>5M+</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Platform Users
            </p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-100 dark:border-zinc-800/80 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl sm:text-3xl">
              <Zap size={20} className="stroke-[2.5]" />
              <span>~40%</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              CD Overhead Cut
            </p>
          </div>

          <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm border border-gray-100 dark:border-zinc-800/80 rounded-xl p-3 sm:p-4 shadow-sm hover:shadow-md transition-shadow">
            <div className="flex items-center justify-center gap-1 text-emerald-600 dark:text-emerald-400 font-extrabold text-2xl sm:text-3xl">
              <TrendingUp size={20} className="stroke-[2.5]" />
              <span>Trading</span>
            </div>
            <p className="text-xs text-gray-600 dark:text-gray-400 font-medium mt-1">
              Fintech & AI Platforms
            </p>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-wrap gap-4 justify-center items-center"
        >
          <a
            href="#projects"
            className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-medium rounded-lg shadow-md hover:shadow-emerald-500/25 hover:shadow-xl transition-all duration-200 flex items-center gap-2 group"
          >
            <Sparkles
              size={18}
              className="group-hover:rotate-12 transition-transform"
            />
            Explore Projects
          </a>

          <a
            href={Bio.resume}
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-white dark:bg-zinc-900 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-zinc-800 rounded-lg font-medium hover:bg-gray-50 dark:hover:bg-zinc-800 hover:border-emerald-300 dark:hover:border-emerald-500 transition-all shadow-sm hover:shadow flex items-center gap-2"
          >
            <span>View Resume</span>
            <ExternalLink size={16} />
          </a>

          <a
            href="#contact"
            className="px-6 py-3 text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 rounded-lg font-medium transition-colors"
          >
            Contact Me →
          </a>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <a
        href="#about"
        className="mt-14 flex flex-col items-center justify-center text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors group"
      >
        <span className="text-xs uppercase tracking-wider mb-1 font-medium">
          Scroll Down
        </span>
        <ArrowDown
          size={18}
          className="animate-bounce text-emerald-600 dark:text-emerald-400"
        />
      </a>
    </section>
  );
};

export default Hero;
