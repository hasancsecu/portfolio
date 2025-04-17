import { educations } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { GraduationCap } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="py-16 bg-white dark:bg-slate-900">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-purple-600">Education</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          {educations.map((education, index) => (
            <motion.div
              key={education.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              className="relative mb-12 last:mb-0 w-full"
            >
              <div className="hidden md:block absolute left-0 top-0 bottom-0 w-0.5 bg-purple-200 dark:bg-purple-900"></div>
              <div className="flex flex-col md:flex-row">
                <div className="hidden md:flex absolute left-[-20px] top-0 items-center justify-center w-10 h-10 rounded-full bg-purple-600 text-white">
                  <GraduationCap size={18} />
                </div>

                <div className="md:pl-12 w-full">
                  <div className="bg-white dark:bg-slate-800 rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow">
                    <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mb-4">
                      <div className="w-16 h-16 rounded-full overflow-hidden bg-white flex-shrink-0">
                        <img
                          src={education.img}
                          alt={education.school}
                          className="w-full h-full object-contain"
                        />
                      </div>

                      <div className="flex-grow">
                        <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                          {education.school}
                        </h3>
                        <p className="text-purple-600 dark:text-purple-400 font-medium">
                          {education.degree}
                        </p>
                        <div className="flex flex-wrap justify-between gap-3">
                          <span className="text-sm text-gray-500 dark:text-gray-400 uppercase">
                            {education.date}
                          </span>
                          <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
                            {education.grade}
                          </span>
                        </div>
                      </div>
                    </div>

                    <p className="text-gray-600 dark:text-gray-300 text-sm mt-2">
                      {education.desc}
                    </p>
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

export default Education;
