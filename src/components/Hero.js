import { arrows,socials } from "../../helpers/icons.js";
 const{linkedin,github} = socials;
export const Hero = () => {
  const hero = document.createElement("DIV");
  hero.classList.add("hero");

  hero.innerHTML = `
    <div class="blur-bg"> </div>
    <h1>
        <span>Andrey Torrente</br></span>
        <span class=bolder >Software developer</span>
    </h1>

    <div class="socials">
          <a href="https://www.linkedin.com/in/andrey-torrente" target="_blank">${linkedin}</a>
          <a href="https://www.github.com/andreyt98" target="_blank">${github}</a>
        </div>

        ${arrows} 
    `;
  return hero;
};
