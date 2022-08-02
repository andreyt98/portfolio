import { Project } from "./Project.js";
import { projectsData } from "../../helpers/projects.js";

export const projectSection = (clase, nombre) => {
  const projectSection = document.createElement("SECTION");
  projectSection.classList.add(`${clase}`);

  projectSection.insertAdjacentHTML(
    "beforeend",
    `
    <h1 class=big>${nombre}</h1>
    <h2>${nombre}</h2>        
     `
  );

  projectsData.forEach((element) =>{
    
    const {id,name, mockup, repo, demo, description, techStack} = element;
    
    projectSection.append(
      Project( id,name, mockup, repo, demo, description, techStack),
    );
  })

  return projectSection;
};
