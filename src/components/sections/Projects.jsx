import React from "react";
import { projectsData } from "../../data/projectsData";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";
import Card from "../ui/Card";
import Button from "../ui/Button";
import Section from "../ui/Section";

const ProjectCard = ({ project, index }) => (
  <Card 
    className="group overflow-hidden h-full"
    style={{ animationDelay: `${index * 0.1}s` }}
  >
    <div className="relative overflow-hidden">
      <img
        src={project.imgUrl}
        alt={project.projectName}
        className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div className="absolute bottom-4 left-4 right-4">
          <div className="flex gap-2">
            <Button
              variant="primary"
              size="sm"
              onClick={() => window.open(project.url, '_blank')}
              className="flex-1"
            >
              <FaExternalLinkAlt className="w-3 h-3" />
              Live Demo
            </Button>
            {project.github && (
              <Button
                variant="secondary"
                size="sm"
                onClick={() => window.open(project.github, '_blank')}
                className="flex-1"
              >
                <FaGithub className="w-3 h-3" />
                Code
              </Button>
            )}
          </div>
        </div>
      </div>
    </div>
    
    <div className="p-6">
      <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-blue-300 transition-colors duration-300">
        {project.projectName}
      </h3>
      <p className="text-gray-300 text-sm leading-relaxed mb-4">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2">
        {project.technologies.map((tech, techIndex) => (
          <span
            key={techIndex}
            className="px-3 py-1 bg-blue-500/20 text-blue-300 text-xs font-medium rounded-full border border-blue-500/30"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  </Card>
);

const Projects = () => {
  return (
    <Section id="projects" background="secondary">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
          Featured <span className="text-gradient">Projects</span>
        </h2>
        <p className="text-xl text-gray-300 max-w-2xl mx-auto">
          A showcase of my recent work, demonstrating various skills and technologies
        </p>
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            index={index}
          />
        ))}
      </div>

      <div className="text-center">
        <Button
          variant="accent"
          size="lg"
          onClick={() => window.open('https://github.com/Mubashir2134', '_blank')}
        >
          <FaGithub />
          View All Projects on GitHub
        </Button>
      </div>
    </Section>
  );
};

export default Projects;