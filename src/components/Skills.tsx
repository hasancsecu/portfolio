
import { skills } from "@/data/portfolioData";
import { motion } from "framer-motion";

const skillVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: (index: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: index * 0.05,
      duration: 0.5,
    },
  }),
};

const SkillIcon = ({ name, image }: { name: string; image: string }) => (
  <motion.div
    variants={skillVariants}
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true }}
    custom={Math.random() * 10}
    className="bg-white dark:bg-slate-800 rounded-lg p-4 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col items-center gap-2"
  >
    <div className="w-12 h-12 rounded-full overflow-hidden bg-gray-100 dark:bg-slate-700 flex items-center justify-center p-2">
      <img
        src={image}
        alt={name}
        className="w-full h-full object-contain"
      />
    </div>
    <span className="text-sm font-medium text-gray-700 dark:text-gray-300">
      {name}
    </span>
  </motion.div>
);

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-24 bg-gray-50 dark:bg-slate-800"
    >
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            My <span className="text-purple-600">Skills</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto"></div>
        </div>

        <div className="space-y-16">
          {skills.map((category, index) => (
            <div key={index} className="space-y-6">
              <h3 className="text-2xl font-bold text-center text-gray-800 dark:text-gray-200">
                {category.title}
              </h3>
              
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-4">
                {category.skills.map((skill, skillIndex) => (
                  <SkillIcon
                    key={skillIndex}
                    name={skill.name}
                    image={skill.image}
                  />
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
