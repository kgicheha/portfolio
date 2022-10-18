import React from "react";
import ProjectDetails from "./ProjectDetails";
import virtualcare from "../Assets/virtual_care.png";
import petfinder from "../Assets/find_fund_foster.png";
import recipefinder from "../Assets/fork_it.jpg";

const ProjectContainer = () => {
  const projects = [
    {
      name: "Virtual Care",
      image: virtualcare,
      description:
        "Provides users the ability to schedule appointments with doctors anytime and from anywhere in the world.",
      languages: "ReactJs, Ruby on Rails, PostgresSQL",
      github: "https://github.com/kgicheha/virtual-care",
      demo: "https://loom.com/share/747a372ffde54a07ae9f354bead63e47"
    },
    {
      name: "Find, Fund, Foster Pets",
      image: petfinder,
      description:
        "Enables animal shelters to find homes for pets, raising funds, and also allows users to sponsor pets digitally.",
      languages: "ReactJs, Ruby on Rails, SQLite",
      github: "https://github.com/kgicheha/phase-3-group-project-frontend",
      demo: "https://www.loom.com/share/b17d436338c64d34b7491d289bf05698"
    },
    {
      name: "Recipe Finder",
      image: recipefinder,
      description:
        "Provides users access to 1000+ recipes and narrows down options based on their ingredient search.",
      languages: "ReactJs, Node.js",
      github: "https://github.com/kgicheha/recipe-finder",
      demo: "https://www.loom.com/share/1c5e0635c4dd433b91efbe668f2d5cea"
    }
  ];
  return projects.map((project) => (
    <ProjectDetails key={project.name} project={project} />
  ));
};

export default ProjectContainer;
