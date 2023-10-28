import { Project } from "./Project.js";
import { projectsData } from "../../helpers/assets.js";

export const projectSection = () => {
  const projectSection = document.createElement("SECTION");
  projectSection.classList.add(`projects`);

  projectSection.insertAdjacentHTML(
    "beforeend",
    `
    <h1 class=big>PROJECTS</h1>
    <h2>projects</h2>        
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
