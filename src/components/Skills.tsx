import { skills } from "@/data/portfolioData";
import { motion } from "framer-motion";
import {
  Brain,
  Bot,
  Sparkles,
  Cpu,
  Table,
  Code2,
  Database,
  Layers,
} from "lucide-react";
import {
  SiAngular,
  SiReactivex,
  SiNgrx,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPrimeng,
  SiBootstrap,
  SiHtml5,
  SiTradingview,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDotnet,
  SiGraphql,
  SiRedis,
  SiRabbitmq,
  SiSocketdotio,
  SiPostgresql,
  SiMysql,
  SiMongodb,
  SiPrisma,
  SiTypeorm,
  SiSequelize,
  SiMongoose,
  SiDocker,
  SiGitlab,
  SiGithub,
  SiLinux,
  SiPostman,
  SiVite,
  SiWebpack,
  SiJira,
} from "react-icons/si";
import { TbBrandCSharp, TbApi } from "react-icons/tb";
import { DiMsqlServer } from "react-icons/di";

const iconMap: Record<string, React.ElementType> = {
  SiAngular,
  SiReactivex,
  SiNgrx,
  Table,
  SiTradingview,
  SiReact,
  SiNextdotjs,
  SiTypescript,
  SiJavascript,
  SiTailwindcss,
  SiPrimeng,
  SiBootstrap,
  SiHtml5,
  SiNodedotjs,
  SiExpress,
  SiNestjs,
  SiDotnet,
  TbBrandCSharp,
  TbApi,
  SiGraphql,
  SiRedis,
  SiRabbitmq,
  SiSocketdotio,
  Sparkles,
  Brain,
  Bot,
  Cpu,
  SiPostgresql,
  SiMysql,
  DiMsqlServer,
  SiMongodb,
  SiPrisma,
  Database,
  SiTypeorm,
  SiSequelize,
  SiMongoose,
  SiDocker,
  SiGitlab,
  SiGithub,
  SiLinux,
  SiPostman,
  SiVite,
  SiWebpack,
  SiJira,
};

const SkillCard = ({ name, iconName }: { name: string; iconName?: string }) => {
  const IconComponent = iconName ? iconMap[iconName] : null;

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="group bg-white dark:bg-zinc-900/80 rounded-xl p-3.5 border border-gray-100 dark:border-zinc-800 shadow-sm hover:shadow-md hover:border-emerald-300 dark:hover:border-emerald-500 transition-all flex flex-col items-center justify-center text-center gap-2.5"
    >
      <div className="w-11 h-11 rounded-lg bg-gray-50 dark:bg-zinc-800/70 p-2 flex items-center justify-center text-emerald-600 dark:text-emerald-400 group-hover:bg-emerald-50 dark:group-hover:bg-emerald-950/40 group-hover:text-emerald-600 transition-colors">
        {IconComponent ? (
          <IconComponent className="w-6 h-6 text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110" />
        ) : (
          <Code2 className="w-6 h-6 text-emerald-600 dark:text-emerald-400" />
        )}
      </div>
      <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 line-clamp-1 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        {name}
      </span>
    </motion.div>
  );
};

const Skills = () => {
  return (
    <section
      id="skills"
      className="py-20 bg-gray-50/70 dark:bg-zinc-900/40 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 rounded-full">
            Technical Proficiencies
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Technical{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              Skills
            </span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Modern full-stack technologies, high-frequency trading frontend
            architectures, and applied AI model integrations.
          </p>
        </div>

        {/* Categorized Skills */}
        <div className="max-w-6xl mx-auto space-y-12">
          {skills.map((category, catIdx) => (
            <div
              key={catIdx}
              className="bg-white/80 dark:bg-zinc-950/60 backdrop-blur-sm rounded-2xl p-6 sm:p-8 border border-gray-100 dark:border-zinc-800 shadow-sm"
            >
              <div className="flex items-center gap-3 mb-6 pb-3 border-b border-gray-100 dark:border-zinc-800">
                <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                  <Layers size={18} />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-gray-900 dark:text-white">
                  {category.title}
                </h3>
                <span className="ml-auto text-xs font-semibold px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-600 dark:text-gray-400">
                  {category.skills.length} skills
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
                {category.skills.map((skill, skillIdx) => (
                  <SkillCard
                    key={skillIdx}
                    name={skill.name}
                    iconName={skill.iconName}
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
