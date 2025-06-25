import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Project One",
    description:
      "Description of Project One. Add other stuff here to make the text properly aligned.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
  },
  {
    id: 2,
    title: "Project One",
    description:
      "Description of Project One. Add other stuff here to make the text properly aligned.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
  },
  {
    id: 3,
    title: "Project Two",
    description: "Description of Project Two.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
  },
  {
    id: 4,
    title: "Project Three",
    description: "Description of Project Three.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
  },
  {
    id: 5,
    title: "Project Five",
    description:
      "Description of Project Five. Add other stuff here to make the text properly aligned.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
  },
  {
    id: 6,
    title: "Project Six",
    description:
      "Description of Project Six. Add other stuff here to make the text properly aligned.",
    image: "/projects/temp.jpg",
    tags: ["React", "TailwindCSS", "Supabase"],
    github: "#",
    url: "#",
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
          creativity. Each project is a testament to my dedication to quality
          and innovation.
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
                    <a
                      href={project.url}
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={17} />
                    </a>
                    <a
                      href={project.github}
                      target="_blank"
                      className="text-foreground hover:text-primary transition-colors duration-300"
                    >
                      <Github size={17} />
                    </a>
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
