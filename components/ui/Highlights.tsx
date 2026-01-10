import React from "react";
import { Code2, Rocket, Users, Palette } from "lucide-react";

const Highlights = () => {
  const highlights = [
    { icon: Code2, value: "2+", label: "Years Experience" },
    { icon: Rocket, value: "15+", label: "Projects Delivered" },
    { icon: Users, value: "10+", label: "Happy Clients" },
    { icon: Palette, value: "∞", label: "Lines of Code" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6">
      {highlights.map(({ icon: Icon, value, label }, index) => (
        <div
          key={label}
          className="p-6 rounded-2xl border transition-colors duration-500
                  bg-background-card border-border-default
                      hover:border-accent-primary"
        >
          <Icon className="w-6 h-6 text-accent-primary mb-4" />
          <p className="text-3xl font-bold">{value}</p>
          <p className="text-sm mt-1 dark:text-[#737373] text-gray-600">
            {label}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
