import React from "react";
import { Briefcase, MapPin } from "lucide-react";

export default function ExperienceSection({ theme = "dark" }) {
  const experiences = [
    // Blackricans
    {
      id: 1,
      role: "Tech Lead",
      company: "Blackricans (Startup)",
      location: "Nigeria (Remote)",
      period: "2026 - Present",
      description:
        "Building an MVP for a decentralized fashion modeling ecosystem. Designed technical and functional structure, landing pages, and NFT royalty logic.",
      highlights: ["MVP Architecture", "Landing Page", "Web3 Monetization"],
    },

    // Grainlify
    {
      id: 2,
      role: "Frontend Engineer",
      company: "Grainlify (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Worked on multiple features and UI improvements across the Grainlify platform, focusing on responsive design, layout optimization, and dynamic ecosystem interactions.",
      highlights: [
        "Dashboard Layout",
        "Mobile Hero Fixes",
        "Profile Toasts",
        "Leaderboard Filters",
      ],
    },

    // Remitwise
    {
      id: 3,
      role: "Frontend Engineer",
      company: "Remitwise (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Built and refined UI components and pages, focusing on responsive layouts, user experience, and seamless frontend interactions.",
      highlights: ["Recipient Input", "Layout Structure", "Form UX"],
    },

    // Stellar Wrap
    {
      id: 4,
      role: "Frontend Engineer",
      company: "Stellar Wrap (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Added multi-network support to Stellar Wrap frontend, enabling seamless switching between Mainnet and Testnet with type-safe network handling.",
      highlights: ["Network Toggle", "API Calls", "Type-Safe Handling"],
    },

    // CommitLabs
    {
      id: 5,
      role: "Frontend Engineer",
      company: "CommitLabs (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Built a responsive Hero Section with animations and composed the Commitment Marketplace page using existing components, matching Figma design and implementing page-level state for filters and pagination.",
      highlights: [
        "Hero Section",
        "Marketplace Page",
        "Responsive Layout",
        "Figma Fidelity",
      ],
    },

    // SkillSphere
    {
      id: 6,
      role: "UI Engineer",
      company: "SkillSphere (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Implemented a reusable UI component library for SkillSphere, ensuring dark-mode compatibility and scalable design.",
      highlights: ["Props Components", "States Handling", "Reusable UI"],
    },

    // Stellar-Guilds Landing Page
    {
      id: 7,
      role: "Frontend Engineer",
      company: "Stellar-Guilds (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Implemented high-performance, animated particle background for the Stellar-Guilds landing page, improving visual appeal without impacting performance.",
      highlights: [
        "Particle Animation",
        "Optimized Performance",
        "Responsive UI",
      ],
    },
  ];

  return (
    <section
      id="experience"
      className={`py-32 relative ${
        theme === "dark" ? "bg-[#111111]/50" : "bg-gray-50/50"
      }`}
    >
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,126,246,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-[#057ef6]/10 text-[#057ef6] text-sm font-medium rounded-full mb-6">
            Career Path
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional
            <span className="text-[#057ef6]"> journey</span>
          </h2>
          <p
            className={`mt-6 text-lg max-w-2xl mx-auto ${
              theme === "dark" ? "text-[#737373]" : "text-gray-600"
            }`}
          >
            A timeline of growth, challenges overcome, and milestones achieved
            across my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#057ef6]/50 via-[#057ef6]/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div
                  className={`absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#057ef6] border-4 z-10 ${
                    theme === "dark" ? "border-[#0a0a0a]" : "border-white"
                  }`}
                />

                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  } pl-16 lg:pl-0`}
                >
                  <div
                    className={`group p-8 rounded-3xl border transition-all duration-500 ${
                      theme === "dark"
                        ? "bg-[#0a0a0a] border-white/5 hover:border-[#057ef6]/20"
                        : "bg-white border-gray-200 hover:border-[#057ef6]/40"
                    } ${index % 2 === 0 ? "lg:text-right" : ""}`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-[#057ef6]/10 text-[#057ef6] text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-[#057ef6] transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div
                      className={`flex items-center gap-4 mb-4 ${
                        theme === "dark" ? "text-[#737373]" : "text-gray-600"
                      } ${index % 2 === 0 ? "lg:justify-end" : ""}`}
                    >
                      <div className="flex items-center gap-1">
                        <Briefcase size={14} />
                        <span>{exp.company}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin size={14} />
                        <span>{exp.location}</span>
                      </div>
                    </div>
                    <p
                      className={`mb-6 leading-relaxed ${
                        theme === "dark" ? "text-[#a3a3a3]" : "text-gray-600"
                      }`}
                    >
                      {exp.description}
                    </p>
                    <div
                      className={`flex flex-wrap gap-2 ${
                        index % 2 === 0 ? "lg:justify-end" : ""
                      }`}
                    >
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className={`px-3 py-1 rounded-full text-xs ${
                            theme === "dark"
                              ? "bg-white/5 text-[#737373]"
                              : "bg-gray-100 text-gray-600"
                          }`}
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Spacer for the other side */}
                <div className="hidden lg:block lg:w-1/2" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
