import { Briefcase, User, Code2 } from "lucide-react";
import { useState } from "react";
const Experience = [
  {
    title: "Deputy Vice-President",
    Company: "The CyberSecurity Club",
    description: [
      "Enabled rapid, scalable deployment of 40+ CTF challenges by implementing Docker containerization across multiple national hackathons, improving environment stability for 70+ teams",
      "Maintained zero downtime and supported 100+ teams during major club events by provisioning AWS EC2 instances with fault-tolerant architecture",
      "Enhanced reliability and scalability of club websites serving 1,700+ members through backend infrastructure improvements",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Alberta, Canada",
  },
  {
    title: "Software Development Engineer",
    Company: "Independent Professional",
    description: [
      "Spearheaded scalable infrastructure and deployment automation on Azure DevOps for high-profile national events (organized by MasterCard, Enfocom), supporting up to 500 participants",
      "Achieved 35% reduction in QA cycles and improved system reliability by authoring 20+ build and validation scripts for automated challenge testing",
      "Engineered end-to-end CI/CD workflows leveraging Docker, reducing deployment time by 30%",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    location: "Remote, Canada",
  },
  {
    title: "Software Development Research Intern",
    Company: "University of Calgary",
    description: [
      "Selected as a research intern among 200+ applicants to develop optimized C++ algorithms for large-scale tabulation of cubic number fields beyond the 1,000,000 fields covered in 1990",
      "Implemented optimizations achieving a √n runtime improvement, reducing compute time by 71 days",
      "Contributed toward advancing computational number theory research with algorithmic and system-level improvements",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "May 2025",
    endDate: "Aug 2025",
    location: "Alberta, Canada",
  },
  {
    title: "Machine Learning Research Intern",
    Company: "Vision Research Lab",
    description: [
      "Led a 6 member team in developing a sentiment analysis model designed to analyze social media posts",
      "Optimized preprocessing and augmentation pipelines, applied hyperparameter tuning and regularization, boosting model prediction accuracy by 17%",
      "Applied LLM Model Ensemble techniques and integrated CLIP Vision-Transformer for multi-modal input analysis, achieving 80% accuracy in contextual sentiment prediction",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    location: "Alberta, Canada",
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

                    {/* Conditionally render the description */}
                    {expandedIndex === index && (
                      <ul className="list-disc pl-5 mt-2 text-muted-foreground text-md space-y-1">
                        {experience.description.map((point, idx) => (
                          <li key={idx}>{point}</li>
                        ))}
                      </ul>
                    )}
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
