import React from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer = () => {
  const projects = [
    {
      name: "Virtual Care",
      image: "../Assets/virtual_care.png",
      description:
        "Provides users the ability to schedule appointments with doctors anytime and from anywhere in the world.",
      languages: "ReactJs, Ruby on Rails, PostgresSQL",
      github: "https://github.com/kgicheha/virtual-care"

    },
    {
      name: "Find, Fund, Foster Pets",
      image: "../Assets/virtual_care.png",
      description:
        "Enables animal shelters to find homes for pets, raising funds, and also allows users to sponsor pets digitally.",
      languages: "ReactJs, Ruby on Rails, SQLite",
      github: "https://github.com/kgicheha/phase-3-group-project-frontend"
    },
    {
      name: "Recipe Finder",
      image: "../Assets/virtual_care.png",
      description:
        "Provides users access to 1000+ recipes and narrows down options based on their ingredient search.",
      languages: "ReactJs, Node.js",
      github: "https://github.com/kgicheha/recipe-finder",
    },
    {
      name: "Recipe Finder",
      image: "../Assets/virtual_care.png",
      description:
        "Provides users access to 1000+ recipes and narrows down options based on their ingredient search.",
      languages: "ReactJs, Node.js",

    },
  ];
  return projects.map((project) => (
    <ProjectDetails key={project.name} project={project} />
  ));
};

export default ProjectContainer;
