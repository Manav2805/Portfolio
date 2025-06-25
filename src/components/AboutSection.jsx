import { Briefcase, User, Code2 } from "lucide-react";

const Experience = [
  {
    title: "Software Development",
    Company: "University of Calgary",
    description:
      "Building innovative software solutions using modern technologies.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jan 2020",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development",
    Company: "Tech Innovators",
    description:
      "Building innovative software solutions using modern technologies.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jan 2020",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development",
    Company: "Tech Innovators",
    description:
      "Building innovative software solutions using modern technologies.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jan 2020",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development",
    Company: "Tech Innovators",
    description:
      "Building innovative software solutions using modern technologies.",
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jan 2020",
    endDate: "Present",
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
