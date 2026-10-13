import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import { Bio } from "@/data/portfolioData";
import { motion, AnimatePresence } from "framer-motion";
import { toast } from "sonner";
import {
  Github,
  Linkedin,
  Facebook,
  Mail,
  Phone,
  Loader2,
  MapPin,
  Globe,
  CheckCircle2,
  AlertCircle,
  X,
  Send,
} from "lucide-react";

const Contact = () => {
  const form = useRef<HTMLFormElement>(null);
  const [formData, setFormData] = useState({
    from_name: "",
    from_email: "",
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
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

    if (
      !formData.from_name.trim() ||
      !formData.from_email.trim() ||
      !formData.message.trim()
    ) {
      const errorMsg = "Please fill in all fields before sending.";
      setSubmitStatus({
        type: "error",
        message: errorMsg,
      });
      toast.error(errorMsg);
      setTimeout(() => {
        setSubmitStatus({ type: null, message: null });
      }, 5000);
      return;
    }

    setIsSubmitting(true);
    emailjs
      .sendForm(
        "service_zs1rjeg",
        "template_e6tcmad",
        form.current,
        "EQlgGRSNE7AjI3ww9",
      )
      .then(
        () => {
          setIsSubmitting(false);
          const successMsg =
            "Message sent successfully! I'll get back to you soon.";
          setSubmitStatus({
            type: "success",
            message: successMsg,
          });
          toast.success(successMsg);
          form.current?.reset();
          setFormData({ from_name: "", from_email: "", message: "" });

          setTimeout(() => {
            setSubmitStatus({ type: null, message: null });
          }, 5000);
        },
        () => {
          setIsSubmitting(false);
          const errorMsg = "Failed to send message. Please try again later.";
          setSubmitStatus({
            type: "error",
            message: errorMsg,
          });
          toast.error(errorMsg);
          setTimeout(() => {
            setSubmitStatus({ type: null, message: null });
          }, 5000);
        },
      );
  };

  return (
    <section
      id="contact"
      className="py-20 bg-gray-50/70 dark:bg-slate-900 transition-colors"
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 mb-2 text-xs font-semibold uppercase tracking-wider text-purple-700 dark:text-purple-300 bg-purple-100 dark:bg-purple-950/60 rounded-full">
            Let's Connect
          </div>
          <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
            Contact <span className="text-purple-600">Me</span>
          </h2>
          <div className="h-1 w-20 bg-purple-600 mx-auto mt-4 rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mt-4 text-sm sm:text-base">
            Feel free to reach out for high-impact engineering leadership,
            consulting, or fintech & AI collaborations!
          </p>
        </div>

        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 lg:gap-12 items-start">
          {/* Contact Details Card */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-slate-700/60"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Get In Touch
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-8">
              I am always excited to discuss distributed architectures,
              high-performance web frontends, and applied AI systems.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-950/60 p-3 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Email Address
                  </h4>
                  <a
                    href={`mailto:${Bio.email}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {Bio.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-950/60 p-3 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Phone & WhatsApp
                  </h4>
                  <a
                    href={`tel:${Bio.phone}`}
                    className="text-sm text-gray-600 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 transition-colors"
                  >
                    {Bio.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-purple-100 dark:bg-purple-950/60 p-3 rounded-xl text-purple-600 dark:text-purple-400 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-gray-900 dark:text-white">
                    Location
                  </h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">
                    {Bio.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 pt-6 border-t border-gray-100 dark:border-slate-700/60">
              <h4 className="text-xs font-bold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-4">
                Connect on Social Networks:
              </h4>
              <div className="flex flex-wrap gap-3">
                <a
                  href={Bio.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-gray-900 dark:bg-gray-700 hover:bg-gray-800 hover:dark:bg-gray-600 text-white p-3 rounded-xl transition-all shadow-sm hover:scale-105"
                  title="GitHub"
                >
                  <Github size={18} />
                </a>
                <a
                  href={Bio.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-xl transition-all shadow-sm hover:scale-105"
                  title="LinkedIn"
                >
                  <Linkedin size={18} />
                </a>
                <a
                  href={Bio.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-700 hover:bg-blue-800 text-white p-3 rounded-xl transition-all shadow-sm hover:scale-105"
                  title="Facebook"
                >
                  <Facebook size={18} />
                </a>
                <a
                  href={Bio.portfolio}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-purple-600 hover:bg-purple-700 text-white p-3 rounded-xl transition-all shadow-sm hover:scale-105"
                  title="Portfolio"
                >
                  <Globe size={18} />
                </a>
              </div>
            </div>
          </motion.div>

          {/* Contact Form Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white dark:bg-slate-800/90 p-8 rounded-2xl shadow-md border border-gray-100 dark:border-slate-700/60"
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
              Send a Direct Message
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">
              Drop a note below and I will respond to your inquiry shortly.
            </p>

            <form ref={form} onSubmit={handleSubmit} className="space-y-5">
              <div>
                <label
                  htmlFor="from_name"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Your Name
                </label>
                <input
                  type="text"
                  id="from_name"
                  name="from_name"
                  value={formData.from_name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 bg-gray-50/50 dark:bg-slate-900/60 text-gray-900 dark:text-gray-100 transition-colors"
                  placeholder="e.g. John Doe"
                />
              </div>

              <div>
                <label
                  htmlFor="from_email"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Your Email
                </label>
                <input
                  type="email"
                  id="from_email"
                  name="from_email"
                  value={formData.from_email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 bg-gray-50/50 dark:bg-slate-900/60 text-gray-900 dark:text-gray-100 transition-colors"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-xs font-bold uppercase tracking-wider text-gray-700 dark:text-gray-300 mb-1.5"
                >
                  Your Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="w-full px-4 py-2.5 text-sm border border-gray-200 dark:border-slate-700 rounded-xl focus:outline-none focus:ring-2 focus:ring-purple-600 dark:focus:ring-purple-500 bg-gray-50/50 dark:bg-slate-900/60 text-gray-900 dark:text-gray-100 transition-colors resize-none"
                  placeholder="Tell me about your project, team, or opportunity..."
                ></textarea>
              </div>

              {/* Submit Button & Floating Tooltip */}
              <div className="relative pt-2">
                {/* Floating Tooltip with Arrow (Success / Error) */}
                <AnimatePresence>
                  {submitStatus.type && (
                    <motion.div
                      role="alert"
                      aria-live="polite"
                      initial={{ opacity: 0, y: 12, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      exit={{ opacity: 0, y: 8, scale: 0.95 }}
                      transition={{ duration: 0.25, ease: "easeOut" }}
                      className={`absolute bottom-full left-1/2 -translate-x-1/2 mb-3.5 z-30 px-4 py-2.5 rounded-xl shadow-2xl text-xs sm:text-sm font-semibold flex items-center gap-2.5 whitespace-nowrap border ${
                        submitStatus.type === "success"
                          ? "bg-emerald-600 dark:bg-emerald-700 text-white border-emerald-400 shadow-emerald-900/25"
                          : "bg-rose-600 dark:bg-rose-700 text-white border-rose-400 shadow-rose-900/25"
                      }`}
                    >
                      {submitStatus.type === "success" ? (
                        <CheckCircle2
                          size={18}
                          className="text-white shrink-0"
                        />
                      ) : (
                        <AlertCircle
                          size={18}
                          className="text-white shrink-0"
                        />
                      )}
                      <span>{submitStatus.message}</span>

                      <button
                        type="button"
                        onClick={() =>
                          setSubmitStatus({ type: null, message: null })
                        }
                        className="ml-2 text-white/80 hover:text-white hover:bg-black/10 rounded p-0.5 transition-colors"
                        aria-label="Dismiss notification"
                      >
                        <X size={14} />
                      </button>

                      {/* Tooltip downward caret arrow */}
                      <div
                        className={`absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-x-8 border-x-transparent border-t-8 ${
                          submitStatus.type === "success"
                            ? "border-t-emerald-600 dark:border-t-emerald-700"
                            : "border-t-rose-600 dark:border-t-rose-700"
                        }`}
                      />
                    </motion.div>
                  )}
                </AnimatePresence>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full px-6 py-3.5 bg-purple-600 text-white font-semibold rounded-xl hover:bg-purple-700 transition-all shadow-md hover:shadow-lg disabled:bg-purple-400 disabled:cursor-not-allowed flex items-center justify-center gap-2"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 size={18} className="animate-spin" />
                      <span>Sending Message...</span>
                    </>
                  ) : (
                    <>
                      <Send size={18} />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
