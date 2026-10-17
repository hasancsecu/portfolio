import { Bio } from "@/data/portfolioData";
import {
  Github,
  Linkedin,
  Facebook,
  ExternalLink,
  MapPin,
  Mail,
  Phone,
  Cpu,
  TrendingUp,
  Zap,
  Server,
} from "lucide-react";
import { motion } from "framer-motion";

const About = () => {
  const highlights = [
    {
      icon: TrendingUp,
      title: "Fintech & Trading Engines",
      desc: "Architected high-throughput order books, AG-Grid delta streaming, and TradingView overlays for Doha Securities and US market expansion.",
    },
    {
      icon: Zap,
      title: "Zoneless & Signal Reactivity",
      desc: "Migrated trading frontends to Angular Zoneless with Signal reactivity, slicing change detection overhead by ~40% under high-volume market streaming.",
    },
    {
      icon: Cpu,
      title: "Applied AI & LLM Integration",
      desc: "Building AI market intelligence tools, automated sentiment analysis scanners, and robust LLM prompt pipelines for market data feeds.",
    },
    {
      icon: Server,
      title: "Resilient Distributed Backends",
      desc: "Engineered scalable microservices in Node.js/Nest.js and ASP.NET Core with Redis caching, RabbitMQ queues, and secure payment gateways.",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-white dark:bg-zinc-950 transition-colors relative overflow-hidden"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-emerald-700 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 rounded-full">
            Background & Expertise
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            About <span className="text-emerald-600 dark:text-emerald-400">Me</span>
          </h2>
          <div className="h-1 w-20 bg-emerald-600 dark:bg-emerald-500 mx-auto mt-4 rounded-full"></div>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Photo & Quick Contact Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="md:col-span-5 flex flex-col items-center"
          >
            <div className="relative group w-full max-w-sm">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-2xl blur-lg opacity-30 group-hover:opacity-60 transition duration-500"></div>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-gray-100 dark:border-zinc-800 bg-white dark:bg-zinc-900">
                <img
                  src="https://github.com/hasancsecu/portfolio/blob/main/src/images/HeroImage.jpg?raw=true"
                  alt="Abu Tamanna Hasan"
                  className="w-full h-auto object-cover transform group-hover:scale-102 transition duration-500"
                />
                <div className="p-5 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md border-t border-gray-100 dark:border-zinc-800">
                  <h4 className="font-bold text-gray-900 dark:text-white text-lg">
                    {Bio.name}
                  </h4>
                  <p className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold mb-3">
                    Senior Software Engineer
                  </p>
                  <div className="space-y-1.5 text-xs text-gray-600 dark:text-gray-300">
                    <p className="flex items-center gap-2">
                      <MapPin size={14} className="text-emerald-500 shrink-0" />
                      <span>{Bio.location}</span>
                    </p>
                    <a
                      href={`mailto:${Bio.email}`}
                      className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Mail size={14} className="text-emerald-500 shrink-0" />
                      <span>{Bio.email}</span>
                    </a>
                    <a
                      href={`tel:${Bio.phone}`}
                      className="flex items-center gap-2 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
                    >
                      <Phone size={14} className="text-emerald-500 shrink-0" />
                      <span>{Bio.phone}</span>
                    </a>
                  </div>

                  {/* Social Links & Resume */}
                  <div className="pt-3.5 mt-3.5 border-t border-gray-100 dark:border-zinc-800 flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <a
                        href={Bio.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-sm hover:scale-105"
                        title="GitHub Profile"
                        aria-label="GitHub Profile"
                      >
                        <Github size={15} />
                      </a>
                      <a
                        href={Bio.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white transition-all shadow-sm hover:scale-105"
                        title="LinkedIn Profile"
                        aria-label="LinkedIn Profile"
                      >
                        <Linkedin size={15} />
                      </a>
                      <a
                        href={Bio.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-8 h-8 rounded-lg bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 flex items-center justify-center hover:bg-teal-600 hover:text-white dark:hover:bg-teal-600 dark:hover:text-white transition-all shadow-sm hover:scale-105"
                        title="Facebook Profile"
                        aria-label="Facebook Profile"
                      >
                        <Facebook size={15} />
                      </a>
                    </div>

                    <a
                      href={Bio.resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-1.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-600 hover:text-white dark:hover:bg-emerald-600 dark:hover:text-white border border-emerald-200/60 dark:border-emerald-800/50 transition-colors shadow-sm"
                      title="View Resume"
                    >
                      <span>Resume</span>
                      <ExternalLink size={12} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Detailed Narrative & Pillars */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="md:col-span-7 space-y-6"
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                Engineering at the Intersection of Fintech & Applied AI
              </h3>
              <p className="text-sm font-medium text-emerald-600 dark:text-emerald-400 mb-4">
                4+ Years of Professional Experience Delivering Resilient
                High-Scale Systems
              </p>
              <div
                className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed space-y-3"
                dangerouslySetInnerHTML={{ __html: Bio.about }}
              />
            </div>

            {/* Core Capability Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2">
              {highlights.map((item, idx) => (
                <div
                  key={idx}
                  className="p-3.5 rounded-xl border border-gray-100 dark:border-zinc-800 bg-gray-50/70 dark:bg-zinc-900/60 hover:border-emerald-200 dark:hover:border-emerald-800/80 transition-all hover:shadow-sm"
                >
                  <div className="flex items-center gap-2.5 mb-1.5">
                    <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400">
                      <item.icon size={16} />
                    </div>
                    <h5 className="text-xs sm:text-sm font-bold text-gray-900 dark:text-white">
                      {item.title}
                    </h5>
                  </div>
                  <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
