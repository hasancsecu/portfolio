import { experiences } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";

const Experience = () => {
  return (
    <section id="experience" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Work <span className="text-purple-600">Experience</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative mb-12 last:mb-0"
            >
              {/* Timeline element */}
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>

              <div className="flex flex-col md:flex-row">
                {/* Timeline circle */}
                <div className="hidden md:flex absolute left-[-20px] top-0 items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white">
                  <Briefcase size={18} />
                </div>

                <div className="md:pl-12">
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex-shrink-0">
                        <img
                          src={experience.img}
                          alt={experience.company}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {experience.role}
                        </h3>
                        <a
                          href={experience.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-purple-600 dark:text-purple-400 font-medium"
                        >
                          {experience.company}
                        </a>
                        <p className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                          {experience.date}
                        </p>
                      </div>
                    </div>

                    <div className="mt-4">
                      <h4 className="text-sm font-semibold text-gray-700 dark:text-gray-300 mb-2">
                        Technologies Used:
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {experience.skills.map((skill, skillIndex) => (
                          <span
                            key={skillIndex}
                            className="text-xs bg-purple-100 dark:bg-purple-900/50 text-purple-800 dark:text-purple-300 px-2 py-1 rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
