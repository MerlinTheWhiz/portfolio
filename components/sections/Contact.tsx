"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  ArrowUpRight,
  Loader2,
  CheckCircle,
} from "lucide-react";

export default function ContactSection({ theme = "dark" }) {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: "", email: "", message: "" });
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "michaelnathan505@gmail.com",
      href: "mailto:michaelnathan505@gmail.com",
    },
    { icon: MapPin, label: "Location", value: "Enugu, Nigeria", href: "#" },
  ];

  return (
    <section id="contact" className="py-32 relative">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(5,126,246,0.05),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
          {/* Left Column */}
          <div>
            <span className="inline-block px-4 py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
              Get In Touch
            </span>

            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight">
              Let&apos;s build something
              <span className="text-accent-primary"> amazing</span> together
            </h2>

            <p className="mt-6 text-lg leading-relaxed text-text-muted">
              Have a project in mind? I&apos;m always open to discussing new
              opportunities, creative ideas, or just having a chat about
              technology and design.
            </p>

            <div className="mt-12 space-y-6">
              {contactInfo.map(({ icon: Icon, label, value, href }) => (
                <a
                  key={label}
                  href={href}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-14 h-14 rounded-2xl border flex items-center justify-center transition-all duration-300 bg-background-card border-border-default group-hover:border-accent-primary/30 group-hover:bg-accent-primary/5">
                    <Icon className="w-6 h-6 transition-colors duration-300 text-text-muted group-hover:text-accent-primary" />
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">{label}</p>
                    <p className="text-lg font-medium group-hover:text-accent-primary transition-colors duration-300">
                      {value}
                    </p>
                  </div>
                </a>
              ))}
            </div>

            <a
              href="#"
              className="mt-12 inline-flex items-center gap-3 px-6 py-4 rounded-2xl border transition-all duration-300 group border-border-default hover:border-accent-primary/30 hover:bg-background-card hover:scale-105"
            >
              <span className="font-medium">Download Resume</span>
              <ArrowUpRight className="w-5 h-5 transition-colors duration-300 text-text-muted group-hover:text-accent-primary" />
            </a>
          </div>

          {/* Right Column */}
          <div>
            <div className="p-8 md:p-10 rounded-3xl border dark:bg-background-card bg-background border-border-default shadow-lg">
              {isSubmitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/10 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle className="w-8 h-8 text-emerald-500" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                  <p className="text-text-muted">
                    Thanks for reaching out. I&apos;ll get back to you soon.
                  </p>
                  <button
                    onClick={() => setIsSubmitted(false)}
                    className="mt-6 text-accent-primary hover:text-accent-hover bg-transparent border-none cursor-pointer"
                  >
                    Send another message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-secondary">
                      Your Name
                    </label>
                    <input
                      type="text"
                      value={formState.name}
                      onChange={(e) =>
                        setFormState({ ...formState, name: e.target.value })
                      }
                      placeholder="John Doe"
                      required
                      className="w-full h-14 rounded-xl px-4 transition-all bg-background-card dark:bg-background border border-border-default text-text-primary placeholder:text-text-muted focus:border-accent-primary/50 focus:ring focus:ring-accent-primary/20"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2 text-text-secondary">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formState.email}
                      onChange={(e) =>
                        setFormState({ ...formState, email: e.target.value })
                      }
                      placeholder="john@example.com"
                      required
                      className="w-full h-14 rounded-xl px-4 transition-all bg-background-card dark:bg-background border border-border-default text-text-primary placeholder:text-text-muted focus:border-accent-primary/50 focus:ring focus:ring-accent-primary/20"
                    />
                  </div>

                  <div>
                    <label
                      className={`block text-sm font-medium mb-2 ${
                        theme === "dark" ? "text-[#a3a3a3]" : "text-gray-700"
                      }`}
                    >
                      Your Message
                    </label>
                    <textarea
                      value={formState.message}
                      onChange={(e) =>
                        setFormState({ ...formState, message: e.target.value })
                      }
                      placeholder="Tell me about your project..."
                      required
                      rows={5}
                      className="w-full rounded-xl px-4 py-2 transition-all resize-none dark:bg-background border border-border-default placeholder:text-text-muted bg-background-card text-text-primary focus:border-accent-primary/50 focus:ring focus:ring-accent-primary/20"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full h-14 bg-accent-primary hover:cursor-pointer hover:bg-accent-hover text-white font-semibold rounded-xl transition-all duration-300 shadow-lg shadow-accent-primary/20 flex items-center justify-center gap-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        Send Message
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
