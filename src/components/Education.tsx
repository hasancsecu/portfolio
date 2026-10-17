import { educations } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { GraduationCap, Calendar, Award, BookOpen } from "lucide-react";

const Education = () => {
  return (
    <section
      id="education"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 rounded-full">
            Academic Background
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            My{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Education
            </span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Foundation in Computer Science, Artificial Intelligence, algorithms,
            and system engineering.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          <div className="hidden md:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-emerald-500 via-emerald-300 to-transparent dark:from-emerald-500 dark:via-emerald-900/60 dark:to-transparent"></div>

          <div className="space-y-10">
            {educations.map((education, index) => (
              <motion.div
                key={education.id}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="relative flex flex-col md:flex-row gap-6 md:pl-16 group"
              >
                {/* Timeline Icon */}
                <div className="hidden md:flex absolute left-4 top-4 -translate-x-1/2 items-center justify-center w-9 h-9 rounded-full bg-emerald-600 text-white shadow-md shadow-emerald-500/30 ring-4 ring-white dark:ring-zinc-950 z-10 transition-transform group-hover:scale-110">
                  <GraduationCap size={16} />
                </div>

                {/* Education Card */}
                <div className="w-full bg-white dark:bg-zinc-900/90 rounded-2xl p-6 sm:p-7 border border-gray-100 dark:border-zinc-800 shadow-md hover:shadow-xl transition-all duration-300 hover:border-emerald-200 dark:hover:border-emerald-800/60">
                  <div className="flex flex-col sm:flex-row gap-4 sm:items-center justify-between pb-4 border-b border-gray-100 dark:border-zinc-800">
                    <div className="flex items-center gap-4">
                      {/* Logo */}
                      <div className="w-14 h-14 rounded-xl overflow-hidden bg-gray-50 dark:bg-zinc-800 p-1.5 border border-gray-100 dark:border-zinc-700 flex-shrink-0 flex items-center justify-center">
                        <img
                          src={education.img}
                          alt={education.school}
                          className="w-full h-full object-contain"
                          onError={(e) => {
                            (e.target as HTMLElement).style.display = "none";
                          }}
                        />
                      </div>

                      <div>
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                          {education.school}
                        </h3>
                        <p className="text-emerald-600 dark:text-emerald-400 font-semibold text-sm sm:text-base">
                          {education.degree}
                        </p>
                      </div>
                    </div>

                    {/* Meta info */}
                    <div className="flex flex-wrap items-center gap-2 self-start sm:self-center">
                      <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-700 dark:text-emerald-300 border border-emerald-200/60 dark:border-emerald-800/40 rounded-full text-xs font-semibold">
                        <Calendar size={13} />
                        <span>{education.date}</span>
                      </div>
                      {education.grade && (
                        <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-emerald-100 dark:bg-emerald-900/40 text-emerald-800 dark:text-emerald-200 border border-emerald-300/60 dark:border-emerald-700/40 rounded-full text-xs font-semibold">
                          <Award size={13} />
                          <span>{education.grade}</span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-300 leading-relaxed mt-4">
                    {education.desc}
                  </p>

                  {/* Coursework if available */}
                  {"coursework" in education && education.coursework && (
                    <div className="mt-5 pt-4 border-t border-gray-100 dark:border-zinc-800">
                      <div className="flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
                        <BookOpen
                          size={14}
                          className="text-emerald-600 dark:text-emerald-400"
                        />
                        <span>Relevant Coursework:</span>
                      </div>
                      <div className="flex flex-wrap gap-1.5 sm:gap-2">
                        {education.coursework.map(
                          (course: string, cIdx: number) => (
                            <span
                              key={cIdx}
                              className="text-xs bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border border-emerald-200/50 dark:border-emerald-800/40 px-2.5 py-1 rounded-md font-medium"
                            >
                              {course}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
