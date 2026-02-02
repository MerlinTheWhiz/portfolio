import React from "react";
import { Briefcase, MapPin } from "lucide-react";

export default function ExperienceSection() {
  const experiences = [
    // Blackricans
    {
      id: 1,
      role: "Tech Lead",
      company: "Blackricans (Startup)",
      location: "Nigeria (Remote)",
      period: "2026 - Present",
      description:
        "Building an MVP for a decentralized fashion modeling ecosystem with landing pages, technical structure, and NFT royalty logic.",
      highlights: [
        "MVP Architecture",
        "Landing Page",
        "Web3 Monetization",
        "Feature Roadmap",
      ],
    },

    // Grainlify
    {
      id: 2,
      role: "Frontend Engineer",
      company: "Grainlify (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Enhanced UI and functionality across Grainlify with responsive design, dashboard layout, and dynamic ecosystem interactions.",
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
        "Built and improved UI components and pages, focusing on responsive layouts, seamless interactions, and consistent user experience.",
      highlights: [
        "Recipient Input",
        "Layout Structure",
        "Form UX",
        "UX Consistency",
      ],
    },

    // Stellar Wrap
    {
      id: 4,
      role: "Frontend Engineer",
      company: "Stellar Wrap (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Added multi-network support with seamless Mainnet/Testnet switching, network-aware API calls, and type-safe state handling.",
      highlights: [
        "Network Toggle",
        "API Calls",
        "Type-Safe Handling",
        "Zustand State",
      ],
    },

    // CommitLabs
    {
      id: 5,
      role: "Frontend Engineer",
      company: "CommitLabs (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Built responsive Hero Section with animations and composed Commitment Marketplace page using existing components with page-level state.",
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
        "Implemented a reusable UI component library with dark-mode support and scalable props-driven components for consistent design.",
      highlights: [
        "Props Components",
        "States Handling",
        "Reusable UI",
        "Dark Mode Support",
      ],
    },

    // Stellar-Guilds Landing Page
    {
      id: 7,
      role: "Frontend Engineer",
      company: "Stellar-Guilds (Open Source)",
      location: "Remote",
      period: "2026 - Present",
      description:
        "Developed high-performance particle background with smooth animations and responsive design, enhancing visual appeal without impacting performance.",
      highlights: [
        "Particle Animation",
        "Optimized Performance",
        "Responsive UI",
        "Smooth Animations",
      ],
    },
  ];

  return (
    <section id="experience" className="py-32 relative bg-background-card/50">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(5,126,246,0.03),transparent_50%)]" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="text-center mb-20">
          <span className="inline-block px-4 py-1.5 bg-accent-primary/10 text-accent-primary text-sm font-medium rounded-full mb-6">
            Career Path
          </span>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight">
            Professional
            <span className="text-accent-primary"> journey</span>
          </h2>
          <p className="mt-6 text-lg max-w-2xl mx-auto text-text-muted">
            A timeline of growth, challenges overcome, and milestones achieved
            across my career.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Center Line */}
          <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-linear-to-b from-accent-primary text-accent-primary/50 via-accent-primtext-accent-primary/20 to-transparent" />

          <div className="space-y-12">
            {experiences.map((exp, index) => (
              <div
                key={exp.id}
                className={`relative flex flex-col lg:flex-row gap-8 ${
                  index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                }`}
              >
                {/* Timeline Dot */}
                <div className="absolute left-8 lg:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-accent-primary border-4 border-background z-10" />

                {/* Content */}
                <div
                  className={`lg:w-1/2 ${
                    index % 2 === 0 ? "lg:pr-16" : "lg:pl-16"
                  } pl-16 lg:pl-0`}
                >
                  <div
                    className={`group p-8 rounded-3xl border transition-all duration-500 border-border-default hover:border-accent-primary/40
                    bg-background text-accent-primary/40"
                    } ${index % 2 === 0 ? "lg:text-right" : ""}`}
                  >
                    <span className="inline-block px-3 py-1 rounded-full bg-accent-primary/10 text-accent-primary text-sm font-medium mb-4">
                      {exp.period}
                    </span>
                    <h3 className="text-2xl font-bold mb-2 group-hover:text-accent-primary transition-colors duration-300">
                      {exp.role}
                    </h3>
                    <div
                      className={`flex items-center gap-4 mb-4 text-text-muted 
                        ${index % 2 === 0 ? "lg:justify-end" : ""}`}
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
                    <p className="mb-6 leading-relaxed text-text-secondary">
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
                          className="px-3 py-1 rounded-full text-xs bg-gray-100 dark:bg-white/5 text-text-muted"
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
