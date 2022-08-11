import {about} from '../../helpers/about.js'
const {me,stack} = about;
export const About = (clase,nombre) => {
    const about = document.createElement("SECTION");
    about.classList.add(`${clase}`);
    about.innerHTML =
        
        `
        <h1 class=big>${nombre}</h1>
        <h2>${nombre}</h2>   
        
        <p>${me}</p>

        <h3>| Technologies that i use</h3>
        `

        const stackContainer = document.createElement('DIV');
        stackContainer.classList.add('stackContainer')
        stack.forEach(element => {
            const stackImg = document.createElement('IMG');

            stackImg.src = element;
            stackImg.alt = element.slice(17,-4);
            stackImg.title = element.slice(17,-4)
            stackContainer.append(stackImg);
        });
        
        about.append(stackContainer);
    
    return about;
}