"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { BsArrowRight } from "react-icons/bs";
import { RiMailLine, RiWhatsappLine, RiLinkedinLine } from "react-icons/ri";

import Circles from "@/components/Circles";
import { fadeIn } from "@/variants";

const Contact = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.message) return;

    const subject = encodeURIComponent(`[${form.subject || 'Oracle APEX Project'}] from ${form.name}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\nSubject: ${form.subject}\n\nMessage:\n${form.message}`
    );

    window.location.href = `mailto:rimalik162534@gmail.com?subject=${subject}&body=${body}`;
  };

  return (
    <div className="h-full bg-primary/30 py-32 text-center xl:text-left flex items-center">
      <Circles />

      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-x-12 items-center">
          {/* Left Column Text & Direct Channels */}
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 flex flex-col justify-center mb-8 xl:mb-0"
          >
            <h2 className="h2 mb-4">
              Let&apos;s <span className="text-accent">connect.</span>
            </h2>
            <p className="mb-8 max-w-120 text-white/70">
              Have an upcoming Oracle APEX project, enterprise ERP architecture, or need
              custom batch PDF reporting? Get in touch directly.
            </p>

            <div className="flex flex-col gap-y-4 max-w-100 mx-auto xl:mx-0 text-left">
              <a
                href="mailto:rimalik162534@gmail.com"
                className="flex items-center gap-x-4 bg-white/5 hover:bg-white/10 p-3.5 rounded-lg border border-white/10 hover:border-accent transition-all duration-300"
              >
                <div className="text-2xl text-accent"><RiMailLine /></div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">Email Address</div>
                  <div className="text-sm font-medium text-white">rimalik162534@gmail.com</div>
                </div>
              </a>

              <a
                href="https://wa.me/923237004270"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-4 bg-white/5 hover:bg-white/10 p-3.5 rounded-lg border border-white/10 hover:border-accent transition-all duration-300"
              >
                <div className="text-2xl text-accent"><RiWhatsappLine /></div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">WhatsApp Direct</div>
                  <div className="text-sm font-medium text-white">+92 323 700 4270</div>
                </div>
              </a>

              <a
                href="https://linkedin.com/in/rizwan0626"
                target="_blank"
                rel="noreferrer noopener"
                className="flex items-center gap-x-4 bg-white/5 hover:bg-white/10 p-3.5 rounded-lg border border-white/10 hover:border-accent transition-all duration-300"
              >
                <div className="text-2xl text-accent"><RiLinkedinLine /></div>
                <div>
                  <div className="text-xs text-white/50 uppercase font-mono">LinkedIn Profile</div>
                  <div className="text-sm font-medium text-white">linkedin.com/in/rizwan0626</div>
                </div>
              </a>
            </div>
          </motion.div>

          {/* Right Column Form */}
          <motion.div
            variants={fadeIn("up", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="flex-1 w-full max-w-130"
          >
            <form onSubmit={handleSubmit} className="flex-1 flex flex-col gap-6 w-full mx-auto">
              <div className="flex gap-x-6 w-full">
                <input
                  type="text"
                  name="name"
                  placeholder="name"
                  value={form.name}
                  onChange={handleChange}
                  className="input"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="email"
                  value={form.email}
                  onChange={handleChange}
                  className="input"
                  required
                />
              </div>

              <input
                type="text"
                name="subject"
                placeholder="subject"
                value={form.subject}
                onChange={handleChange}
                className="input"
                required
              />

              <textarea
                name="message"
                placeholder="message"
                value={form.message}
                onChange={handleChange}
                className="textarea"
                required
              />

              <button
                type="submit"
                className="btn rounded-full border border-white/50 max-w-42.5 px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group"
              >
                <span className="group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500 font-semibold">
                  Let&apos;s talk
                </span>

                <BsArrowRight
                  className="-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]"
                  aria-hidden
                />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
