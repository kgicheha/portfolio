import React from "react";
import ProjectDetails from "./ProjectDetails";

const ProjectContainer = () => {
  const projects = [
    {
      name: "Virtual Care",
      image: "",
      description:
        "Provides users the ability to schedule appointments with doctors anytime and from anywhere in the world.",
      languages: "",
    },
    {
      name: "Find, Fund, Foster Pets",
      image: "",
      description:
        "Enables animal shelters to find homes for pets, raising funds, and also allows users to sponsor pets digitally.",
      languages: "",
    },
    {
      name: "Recipe Finder",
      image: "",
      description:
        "Provides users access to 1000+ recipes and narrows down options based on their ingredient search.",
      languages: "",
    },
  ];
  return projects.map((project) => (
    <ProjectDetails key={project.name} project={project} />
  ));
};

export default ProjectContainer;
