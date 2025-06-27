import { Briefcase, User, Code2 } from "lucide-react";

const Experience = [
  {
    title: "Research Assistant",
    Company: "University of Calgary",
    description:
      "Selected as a research student among 200+ applicants to develop optimized C++ algorithms to accelerate computation and handle billions of cubic number fields efficiently",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "May 2025",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development",
    Company: "Independent Professional",
    description:
      "Collaborated with a team to develop scalable infrastructure and deployment automation for multiple large-scale national competitions.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2025",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Deputy Vice President",
    Company: "University of Calgary",
    description:
      "Successfully managed and scaled infrastructure for one of the biggest university club, with 1700+ members.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Machine Learning Researcher",
    Company: "Vision Research Lab",
    description:
      "Led a 4 member team in developing and training sentiment analysis model designed to analyze social media posts",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    location: "Calgary, Canada",
  },
];

export const AboutSection = () => {
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
        {Experience.map((experience, key) => (
          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start justify-between gap-4">
                {/* Left Side: Icon and Title/Description */}
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-full bg-primary/10">
                    {experience.icon}
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-lg">
                      {experience.title} | {experience.Company}
                    </h4>
                    <p className="text-muted-foreground text-md">
                      {experience.description}
                    </p>
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
