import {about} from '../../helpers/about.js'
const {me,stack} = about;
export const About = () => {
    const about = document.createElement("SECTION");
    about.classList.add('about');
    about.innerHTML =
        
        `
        <h1 class=big>ABOUT</h1>
        <h2>ABOUT</h2>   
        
        <p>${me}</p>

        <h3>| Tech Stack</h3>
        `

        const stackContainer = document.createElement('DIV');
        stackContainer.classList.add('stackContainer')
        stack.forEach(element => {
            const stackImg = document.createElement('IMG');

            stackImg.src = element;
            stackImg.alt = element.slice(17,-4);
            stackImg.title = element.slice(17,-4)
            stackImg.loading = 'lazy';
            stackContainer.append(stackImg);
        });
        
        about.append(stackContainer);
    
    return about;
}