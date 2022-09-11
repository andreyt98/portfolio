import { Project } from "./Project.js";
import { projectsData } from "../../helpers/assets.js";

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
    
    const {inProgress, id,name, mockup, repo, demo, description, techStack} = element;
    
    projectSection.append(
      Project(inProgress, id,name, mockup, repo, demo, description, techStack),
    );
  })

  return projectSection;
};
