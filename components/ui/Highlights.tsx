import { Code2, Rocket, Users, Palette } from "lucide-react";
import CountUp from "./CountUp";

const Highlights = () => {
  const highlights = [
    { icon: Code2, value: 2, label: "Years Experience", suffix: "+" },
    { icon: Rocket, value: 15, label: "Projects Delivered", suffix: "+" },
    { icon: Users, value: 10, label: "Happy Clients", suffix: "+" },
    { icon: Palette, value: Infinity, label: "Lines of Code", suffix: "∞" },
  ];

  return (
    <div className="mt-12 grid grid-cols-2 gap-6">
      {highlights.map(({ icon: Icon, value, label, suffix }, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl border transition-colors duration-500 
          bg-background-card border-border-default hover:border-accent-primary"
        >
          <Icon className="w-6 h-6 text-accent-primary mb-4" />
          <p className="text-3xl font-bold">
            {value !== Infinity ? (
              <>
                <CountUp target={value} />
                {suffix}
              </>
            ) : (
              <>{suffix}</>
            )}
          </p>
          <p className="text-sm mt-1 text-text-muted">{label}</p>
        </div>
      ))}
    </div>
  );
};

export default Highlights;
