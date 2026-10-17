import { experiences } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  Briefcase,
  Building2,
  Calendar,
  CheckCircle2,
  ExternalLink,
  MapPin,
} from "lucide-react";

const Experience = () => {
  return (
    <section
      id="experience"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 rounded-full">
            Career Journey
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Work{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Experience
            </span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Track record of engineering high-performance trading platforms,
            applied AI systems, and enterprise microservices.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Timeline Guide Line */}
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-300 to-transparent dark:from-emerald-500 dark:via-emerald-900/60 dark:to-transparent"></div>

          <div className="space-y-10">
            {experiences.map((experience, index) => (
              <motion.div
                key={experience.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col md:flex-row gap-6 md:pl-16 group"
              >
                {/* Timeline Node Icon (Desktop) */}
                <div className="hidden md:flex absolute left-4 top-4 -translate-x-1/2 items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-500/30 ring-4 ring-white dark:ring-zinc-950 z-10 transition-transform group-hover:scale-110">
                  <Briefcase size={16} />
                </div>

                {/* Experience Card */}
                <div className="w-full bg-white dark:bg-zinc-900/90 rounded-2xl p-6 sm:p-7 border border-gray-100 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800/60">
                  {/* Header Row */}
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-4 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      {/* Logo Avatar */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 p-1.5 border border-gray-100 dark:border-zinc-700 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <div className="flex flex-wrap items-center gap-2 mt-0.5">
                          <a
                            href={experience.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1 text-sm sm:text-base"
                          >
                            <Building2 size={15} />
                            {experience.company}
                            <ExternalLink size={12} />
                          </a>
                          {experience.location && (
                            <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              • <MapPin size={12} /> {experience.location}
                            </span>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Date Pill */}
                    <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 rounded-full text-xs font-semibold self-start sm:self-center">
                      <Calendar size={13} />
                      <span>{experience.date}</span>
                    </div>
                  </div>

                  {/* Bullet Achievements */}
                  {experience.desc && experience.desc.length > 0 && (
                    <div className="mt-5 space-y-2.5">
                      <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400">
                        Key Engineering Contributions:
                      </h4>
                      <ul className="space-y-2">
                        {experience.desc.map((bullet, bulletIdx) => (
                          <li
                            key={bulletIdx}
                            className="text-xs sm:text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={15}
                              className="text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5"
                            />
                            <span>{bullet}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}

                  {/* Tech Stack Pills */}
                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-zinc-800">
                    <h4 className="text-xs font-semibold text-gray-500 dark:text-gray-400 mb-2.5 uppercase tracking-wider">
                      Technologies & Tools:
                    </h4>
                    <div className="flex flex-wrap gap-1.5 sm:gap-2">
                      {experience.skills.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="text-xs bg-gray-100 dark:bg-zinc-800/80 text-gray-800 dark:text-gray-200 px-2.5 py-1 rounded-md font-medium border border-gray-200/60 dark:border-zinc-700/60 hover:border-emerald-400 transition-colors"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
