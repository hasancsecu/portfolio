import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Bio } from "@/data/portfolioData";
import { motion } from "framer-motion";
import { Github, Linkedin, Facebook, Mail, Phone, Loader2 } from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<{
    type: "success" | "error" | null;
    message: string | null;
  }>({
    type: null,
    message: null,
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;
    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_zs1rjeg",
        "template_e6tcmad",
        form.current,
        "EQlgGRSNE7AjI3ww9"
      )
      .then(
        () => {
          setIsSubmitting(false);
          setSubmitStatus({
            type: "success",
            message: "Message sent successfully! I'll get back to you soon.",
          });
          form.current.reset();
          setFormData({ name: "", email: "", message: "" });

          setTimeout(() => {
            setSubmitStatus({ type: null, message: null });
          }, 3000);
        },
        (error) => {
          setIsSubmitting(false);
          setSubmitStatus({
            type: "error",
            message: "Failed to send message. Please try again later.",
          });
          setTimeout(() => {
            setSubmitStatus({ type: null, message: null });
          }, 3000);
        }
      );
  };

  return (
    <section id="contact" className="py-24 bg-gray-50 dark:bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mb-6"></div>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            Feel free to reach out to me for any questions or opportunities!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Get In Touch
            </h3>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Email
                  </h4>
                  <a
                    href="mailto:hasansouravcsecu@gmail.com"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    hasansouravcsecu@gmail.com
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-900/30 p-3 rounded-full text-purple-600 dark:text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-gray-900 dark:text-white">
                    Phone
                  </h4>
                  <a
                    href="tel:+8801950379818"
                    className="text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    +8801950-379818
                  </a>
                </div>
              </div>
            </div>

            <div className="mt-10">
              <h4 className="text-lg font-semibold text-gray-900 dark:text-white mb-4">
                Social Profiles
              </h4>
              <div className="flex gap-4">
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 text-white p-3 rounded-full hover:bg-gray-800 transition-colors"
                >
                  <Github size={20} />
                </a>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 text-white p-3 rounded-full hover:bg-blue-700 transition-colors"
                >
                  <Linkedin size={20} />
                </a>
                <a
                  href={Bio.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 text-white p-3 rounded-full hover:bg-blue-800 transition-colors"
                >
                  <Facebook size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-900 p-8 rounded-lg shadow-lg"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Send Message
            </h3>

            {submitStatus.type && (
              <div
                className={`p-4 mb-6 rounded-md ${
                  submitStatus.type === "success"
                    ? "bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300"
                    : "bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300"
                }`}
              >
                {submitStatus.message}
              </div>
            )}

            <form ref={form} onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-800 text-gray-900 dark:text-gray-100"
                  placeholder="Full Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-800 text-gray-900 dark:text-gray-100"
                  placeholder="email@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 dark:bg-slate-800 text-gray-900 dark:text-gray-100"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full px-6 py-3 bg-purple-600 text-white rounded-md hover:bg-purple-700 transition-colors disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={20} className="animate-spin" /> Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
