import { Send, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import { cn } from "@/lib/utils";
import { useState } from "react";

export const ContactSection = () => {
  return (
    <section id="contact" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          Get In <span className="text-primary">Touch</span>
        </h2>
        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Have something in mind? I'm always open to discussing new
          opportunities, creative projects, or new ideas. Feel free to reach
          out!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <a
            href="mailto:manavnpatel205@gmail.com"
            className="flex flex-col items-center bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Mail className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
              Email
            </h4>
            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
              manavnpatel205@gmail.com
            </p>
          </a>

          <div className="flex flex-col items-center bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <MapPin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-1">Location</h4>
            <p className="text-muted-foreground">Calgary, Alberta, Canada</p>
          </div>

          <a
            href="https://www.linkedin.com/in/manav-patel-44b56a291/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center bg-card p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300 group"
          >
            <div className="p-4 rounded-full bg-primary/10 mb-4">
              <Linkedin className="h-8 w-8 text-primary" />
            </div>
            <h4 className="font-semibold text-lg mb-1 group-hover:text-primary transition-colors duration-300">
              Connect With Me
            </h4>
            <p className="text-muted-foreground group-hover:text-primary transition-colors duration-300">
              Manav Patel
            </p>
          </a>
        </div>
      </div>
    </section>
  );
};
