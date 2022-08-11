import {socials, link} from '../../helpers/icons.js'
const {github} = socials;

export const Project = (id,name, mockup, repo, demo, description, techStack) => {

    const project = document.createElement("DIV");
    
    project.innerHTML = 
    `
    <h3>${name}</h3>
    <img src='${mockup}' alt="project-image">
        
    <div class=project-info>
    <p>${description}</p>
    
    <div class=links>
    <a href=${repo} target=_blank>${github}</a>
    ${!id?`<a href=${demo} target=_blank>${link}</a>`: ''}
    </div>
    </div>
            
    `
    const stack = document.createElement("DIV");
    stack.classList.add("stack");

    techStack.forEach(element => {
        const p = document.createElement('p');
        p.textContent = element
        stack.append(p);
    });

    project.querySelector('.project-info').append(stack);

    return project;
}

document.addEventListener('contextmenu', (e) =>{ 
    if(e.target.matches("img")){
        e.preventDefault()
    }
});

