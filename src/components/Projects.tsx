import { useState } from "react";
import { projects } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { Github, ExternalLink, Sparkles, Calendar } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

type Category = "all" | "fintech" | "ai" | "fullstack" | "frontend" | "backend";

const Projects = () => {
  const [activeCategory, setActiveCategory] = useState<Category>("all");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const categories: { id: Category; label: string }[] = [
    { id: "all", label: "All Projects" },
    { id: "fintech", label: "Fintech & Trading" },
    { id: "ai", label: "Applied AI" },
    { id: "fullstack", label: "Full Stack" },
    { id: "frontend", label: "Frontend" },
    { id: "backend", label: "Backend" },
  ];

  const filteredProjects =
    activeCategory === "all"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section
      id="projects"
      className="py-20 bg-gray-50/70 dark:bg-slate-900 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 rounded-full">
            Featured Works & Architectures
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Featured <span className="text-purple-600">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            High-performance trading portals, AI-powered intelligence tools,
            high-concurrency platforms serving millions of users.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex justify-center mb-12">
          <div className="inline-flex flex-wrap justify-center gap-1.5 p-1.5 bg-white dark:bg-slate-800 rounded-xl shadow-sm border border-gray-100 dark:border-slate-700 max-w-full">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`px-3.5 py-1.5 text-xs sm:text-sm font-semibold rounded-lg transition-all ${
                  activeCategory === category.id
                    ? "bg-purple-600 text-white shadow-sm"
                    : "bg-transparent text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 hover:bg-gray-50 dark:hover:bg-slate-700/50"
                }`}
                onClick={() => setActiveCategory(category.id)}
              >
                {category.label}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7 max-w-7xl mx-auto">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ delay: index * 0.05, duration: 0.3 }}
                className={`flex flex-col bg-white dark:bg-slate-800/90 rounded-2xl overflow-hidden border ${
                  project.featured
                    ? "border-purple-200 dark:border-purple-800/80 shadow-md ring-1 ring-purple-500/10"
                    : "border-gray-100 dark:border-slate-700/60 shadow-sm"
                } hover:shadow-xl hover:border-purple-300 dark:hover:border-purple-600 transition-all duration-300 group cursor-pointer`}
                onClick={() => setSelectedProject(project)}
              >
                {/* Image Cover */}
                <div className="h-48 sm:h-52 relative overflow-hidden bg-gray-100 dark:bg-slate-700">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.opacity = "0.7";
                    }}
                  />

                  {/* Top Badges */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 pointer-events-none">
                    {project.featured && (
                      <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-purple-600/90 backdrop-blur-md text-white shadow-sm">
                        <Sparkles size={11} />
                        Featured
                      </span>
                    )}
                    {project.stats && (
                      <span className="ml-auto inline-flex items-center text-[11px] font-bold px-2.5 py-1 rounded-full bg-slate-900/85 backdrop-blur-md text-purple-300 shadow-sm">
                        {project.stats}
                      </span>
                    )}
                  </div>

                  {/* Hover Overlay with Action Buttons */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
                    <span className="text-white text-xs font-medium">
                      Click for architecture details
                    </span>
                    <div
                      className="flex items-center gap-2"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-gray-900/90 hover:bg-gray-900 text-white p-2 rounded-full transition-colors"
                          title="View Repository"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {project.webapp && (
                        <a
                          href={project.webapp}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="bg-purple-600 hover:bg-purple-700 text-white p-2 rounded-full transition-colors"
                          title="Live Demo"
                        >
                          <ExternalLink size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center justify-between gap-2 mb-2">
                    <span className="text-xs uppercase font-bold tracking-wider text-purple-600 dark:text-purple-400">
                      {project.category}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                      <Calendar size={12} />
                      {project.date}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors line-clamp-1 mb-1">
                    {project.title}
                  </h3>

                  {"subtitle" in project && project.subtitle && (
                    <p className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 line-clamp-1">
                      {project.subtitle}
                    </p>
                  )}

                  <p className="text-gray-600 dark:text-gray-300 text-xs sm:text-sm mb-4 line-clamp-3 leading-relaxed flex-grow">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 mt-auto pt-3 border-t border-gray-100 dark:border-slate-700/50">
                    {project.tags.slice(0, 4).map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="text-[11px] font-medium bg-purple-50 dark:bg-purple-950/40 text-purple-700 dark:text-purple-300 px-2 py-0.5 rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 4 && (
                      <span className="text-[11px] font-medium bg-gray-100 dark:bg-slate-700 text-gray-600 dark:text-gray-400 px-2 py-0.5 rounded-md">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>

      {/* Project Details Modal */}
      <Dialog
        open={!!selectedProject}
        onOpenChange={(open) => !open && setSelectedProject(null)}
      >
        {selectedProject && (
          <DialogContent className="sm:max-w-2xl max-h-[90vh] overflow-y-auto bg-white dark:bg-slate-900 p-6 sm:p-8 rounded-2xl border border-gray-200 dark:border-slate-800">
            <DialogHeader>
              <div className="flex items-center gap-2 mb-1">
                <span className="text-xs uppercase font-bold tracking-wider px-2 py-0.5 rounded bg-purple-100 dark:bg-purple-950/70 text-purple-700 dark:text-purple-300">
                  {selectedProject.category}
                </span>
                {selectedProject.stats && (
                  <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400">
                    • {selectedProject.stats}
                  </span>
                )}
              </div>
              <DialogTitle className="text-2xl font-extrabold text-gray-900 dark:text-white">
                {selectedProject.title}
              </DialogTitle>
            </DialogHeader>

            <div className="mt-4 space-y-6">
              <div className="w-full h-56 sm:h-72 rounded-xl overflow-hidden bg-gray-100 dark:bg-slate-800 border border-gray-100 dark:border-slate-700">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                />
              </div>

              <div className="flex items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
                <Calendar size={14} />
                <span>Timeline: {selectedProject.date}</span>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  System Architecture & Overview:
                </h4>
                <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div>
                <h4 className="text-sm font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2">
                  Technologies & Architecture:
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProject.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-purple-100 dark:bg-purple-950/60 text-purple-800 dark:text-purple-300 px-3 py-1 rounded-lg text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="flex flex-wrap gap-3 pt-4 border-t border-gray-100 dark:border-slate-800">
                {selectedProject.github && (
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] px-4 py-2.5 bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 hover:dark:bg-gray-700 text-white rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <Github size={16} />
                    <span>View Code</span>
                  </a>
                )}
                {selectedProject.webapp && (
                  <a
                    href={selectedProject.webapp}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 min-w-[140px] px-4 py-2.5 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-sm font-semibold inline-flex items-center justify-center gap-2 transition-all shadow-sm"
                  >
                    <ExternalLink size={16} />
                    <span>Live Platform</span>
                  </a>
                )}
              </div>
            </div>
          </DialogContent>
        )}
      </Dialog>
    </section>
  );
};

export default Projects;
