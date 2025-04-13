import { useRef, useState } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import toast, { Toaster } from "react-hot-toast";

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm(
        "your_service_id",
        "your_template_id",
        formRef.current!,
        "your_public_key"
      )
      .then(
        () => {
          setLoading(false);
          toast.success("Message sent successfully!");
          formRef.current?.reset();
        },
        (error) => {
          setLoading(false);
          toast.error("Something went wrong. Please try again!");
          console.error("EmailJS Error:", error.text);
        }
      );
  };

  return (
    <section id="contact" className="py-16 bg-gray-50 dark:bg-gray-900">
      <Toaster position="top-right" reverseOrder={false} />

      <div className="container mx-auto px-6 lg:px-16">
        {/* Title */}
        <motion.h2
          className="text-3xl font-bold text-center text-gray-800 dark:text-white mb-2"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-10">
          Let’s connect! Drop me a message.
        </p>

        {/* Two Column Grid */}
        <div className="grid md:grid-cols-2 gap-10 items-center">
          {/* Left - Contact Form */}
          <form
            ref={formRef}
            onSubmit={sendEmail}
            className="space-y-6 bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg"
          >
            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              />
            </div>

            <div>
              <label className="block mb-1 font-medium text-gray-700 dark:text-gray-300">
                Message
              </label>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 border border-gray-300 dark:border-gray-700 rounded-md bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>

          {/* Right - Illustration or Graphic */}

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex justify-center"
          >
            <img
              src="/contacts/contact-img.svg"
              alt="Developer Illustration"
              className="max-w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
