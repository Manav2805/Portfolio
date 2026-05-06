import { Briefcase, User, Code2 } from "lucide-react";
import { useState } from "react";
const Experience = [
  {
    title: "SDE - Independent Contractor",
    Company: "Studeo",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Sept 2025",
    endDate: "Apr 2026",
    location: "Toronto, Ontario",
  },
  {
    title: "Deputy Vice-President",
    Company: "The CyberSecurity Club",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jul 2024",
    endDate: "Dec 2025",
    location: "Calgary, Alberta",
  },
  {
    title: "SDE - Independent Contractor",
    Company: "Enfocom Cyber",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    location: "Remote, Canada",
  },
  {
    title: "Software Development Research Intern",
    Company: "University of Calgary",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "May 2025",
    endDate: "Aug 2025",
    location: "Calgary, Alberta",
  },
  {
    title: "Machine Learning Research Student",
    Company: "Vision Research Lab",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    location: "Calgary, Alberta",
  },
];

export const AboutSection = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleToggle = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <section id="about" className="py-24 px-24 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary">Me</span>
        </h2>
        <h3 className="text-2xl font-semibold">
          Software Engineer & Researcher
        </h3>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          I am a passionate software developer with a keen interest in building
          innovative solutions that make a difference.
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-1 gap-4">
        {Experience.map((experience, index) => (
          <div
            key={index}
            className="grid grid-cols-1 gap-6"
            onClick={() => handleToggle(index)}
          >
            <div className="gradient-border p-6 card-hover cursor-pointer">
              <div className="flex items-start justify-between gap-4">
                {/* Left Side: Icon and Title */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {experience.icon}
                  </div>
                  <div className="text-left">
                    <h4>
                      <span className="font-semibold text-xl">
                        {experience.title}
                      </span>{" "}
                      <span className="font-semibold text-lg text-gray-400">
                        | {experience.Company}
                      </span>
                    </h4>
                  </div>
                </div>
                <div className="text-right whitespace-nowrap text-sm text-muted-foreground">
                  <p>
                    {experience.startDate} - {experience.endDate}
                  </p>
                  <p>{experience.location}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
