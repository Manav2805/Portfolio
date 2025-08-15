import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Athletica",
    description:
      "Building a microservice architecture fitness app with Spring Boot and Gemini’s AI recommendations",
    image: "/projects/temp.jpg",
    tags: [
      "Java",
      "SpringBoot",
      "SpringCloud",
      "Gemini API",
      "RabbitMQ ",
      "Keycloak",
      "AWS",
      "MongoDB",
    ],
    github: "https://github.com/Manav2805/Athletica",
    url: "",
  },
  {
    id: 1,
    title: "NutriSync",
    description:
      "A platform to help users discover, manage, and track recipes tailored to their dietary preferences. It offers personalized AI recommendations and supports community-driven contributions",
    image: "/projects/temp.jpg",
    tags: [
      "React",
      "TypeScript",
      "TailwindCSS",
      "PostgreSQL",
      "Flask ",
      "Scikit-Learn",
    ],
    github: "https://github.com/Manav2805/NutriSync",
    url: "https://nutrisync-app.onrender.com/",
  },
  {
    id: 2,
    title: "Senlyzer",
    description:
      "AI Model that performs sentiment analysis of multi-modal input, leveraging advanced machine learning ensembling techniques to provide accurate predictions across text and visual data.",
    image: "/projects/temp.jpg",
    tags: ["Pytorch", "Python", "TailwindCSS", "Flask", "BERT", "CLIP-ViT"],
    github: "https://github.com/Manav2805/Senlyzer",
    url: "",
  },
  {
    id: 3,
    title: "Iris Monitor",
    description:
      "Created a user-friendly desktop app that helps users monitor their computer’s performance in real time. The tool provides up-to-date feedback on system activity with multithread capabilities.",
    image: "/projects/temp.jpg",
    tags: [
      "Figma",
      "Tkinter",
      "BeautifulSoup",
      "Matplotlib",
      "psutil",
      "threads",
    ],
    github: "https://github.com/Manav2805/IRIS",
    url: "",
  },
  {
    id: 4,
    title: "Game Center",
    description:
      "A scalable game hub platform, enabling users to access and play multiple games seamlessly",
    image: "/projects/temp.jpg",
    tags: ["Java", "JavaFX", "Junit", "Figma"],
    github: "",
    url: "",
  },
  {
    id: 5,
    title: "Snake & Apple",
    description:
      "Snake & Apple is a game developed for Calgary Hacks 2024 using the prompt 'limited space",
    image: "/projects/temp.jpg",
    tags: ["Python", "Pygame"],
    github: "https://github.com/Manav2805/calgary-hacks",
    url: "",
  },
];

export const ProjectSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Featured <span className="text-primary">Projects</span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects that showcase my skills and
          creativity.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className=" w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs border font-medium rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-semibold mb-1">{project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    {project.url?.trim() !== "" && (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        <ExternalLink size={17} />
                      </a>
                    )}
                    {project.github?.trim() !== "" && (
                      <a
                        href={project.github}
                        target="_blank"
                        className="text-foreground hover:text-primary transition-colors duration-300"
                      >
                        <Github size={17} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="https://github.com/Manav2805"
            target="_blank"
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
