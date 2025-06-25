import { ArrowDown } from "lucide-react";
import { useState, useEffect } from "react";

export const HeroSection = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });
  return (
    <section
      id="hero"
      className="relative min-h-screen flex flex-col items-center justify-center px-4"
    >
      <div className="container max-w-4xl mx-auto text-center z-10">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
            <span className="opacity-0 animate-fade-in"> Hi, I'm</span>
            <span className="text-primary opacity-0 animate-fade-in-delay-1">
              {" "}
              Manav
            </span>
            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2">
              {" "}
              Patel
            </span>
          </h1>

          <p className="text-ld md:text-xl text-muted-foreground max-2-2xl mx-auto opacity-0 animate-fade-in-delay-3">
            Text About Me here. Add location and stuff
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center animate-fade-in-delay-4">
            <a href="#projects" className="cosmic-button">
              View My Work
            </a>

            <a
              href=""
              className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
            >
              Download Resume
            </a>
          </div>
        </div>
      </div>

      {!isScrolled && (
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
          <ArrowDown className="h-10 w-5 text-foreground" />
        </div>
      )}
    </section>
  );
};
