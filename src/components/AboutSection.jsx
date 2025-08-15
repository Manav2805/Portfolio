import { Briefcase, User, Code2 } from "lucide-react";
import { useState } from "react";
const Experience = [
  {
    title: "Deputy Vice President",
    Company: "The CyberSecurity Club",
    description: [
      "Deployed and containerized 40+ CTF challenges using Docker, streamlining environment consistency and enabling rapid scaling for national hackathons",
      "Provisioned and managed AWS EC2 instances to ensure high availability and fault tolerance, supporting 100+ teams with zero downtime across major club events",
      "Developed and contributed to backend systems for multiple club websites serving 1700+ club members",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Jul 2024",
    endDate: "Present",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development Research Intern",
    Company: "University of Calgary",
    description: [
      "Selected as a research student among 200+ applicants to develop optimized C++ algorithms to accelerate computation and handle billions of cubic number fields efficiently",
      "Facilitated large-scale tabulation of cubic number fields beyond the 1,000,000 cubic number fields covered by the last major computation in 1990",
      "Aiming to contribute toward a joint publication, current work is estimated to save several months of compute time through algorithmic and system-level improvements",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "May 2025",
    endDate: "Aug 2025",
    location: "Calgary, Canada",
  },
  {
    title: "Software Development Engineer",
    Company: "Independent Professional",
    description: [
      "Collaborated with a team to enable scalable infrastructure and deployment automation on Azure DevOps, supporting high-profile national events (organized by MasterCard, Enfocom), handling up to 500 participants",
      "Authored custom build and validation scripts for automated challenge testing, reducing QA cycles by approximately 35% and boosting system reliability across all competition environments",
      "Engineered end-to-end CI/CD workflows leveraging Docker, resulting in a 30% reduction in deployment time",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2025",
    endDate: "Aug 2025",
    location: "Calgary, Canada",
  },
  {
    title: "Machine Learning Research Intern",
    Company: "Vision Research Lab",
    description: [
      "Led a 4 member team in developing and training sentiment analysis model designed to analyze social media posts",
      "Developed and optimized data preprocessing and augmentation pipelines, applied hyperparameter tuning and regularization techniques to mitigate overfitting, increasing model accuracy by 17%",
      "Leveraged LLM Model Ensemble techniques and integrated CLIP Vision-Transformer to jointly analyze multi-modal inputs, achieving 80% in contextual sentiment prediction",
    ],
    icon: <Code2 className="h-6 w-6 text-primary" />,
    startDate: "Apr 2024",
    endDate: "Jun 2024",
    location: "Calgary, Canada",
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
